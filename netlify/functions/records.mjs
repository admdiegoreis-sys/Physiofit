import { assertAllowedTable, getSql, json, quoteIdentifier } from "./_db.mjs";

function parseBody(event) {
  if (!event.body) return {};
  return JSON.parse(event.body);
}

function cleanColumns(columns) {
  if (!columns || columns === "*") return "*";

  return columns
    .split(",")
    .map((column) => column.trim())
    .filter(Boolean)
    .map(quoteIdentifier)
    .join(", ");
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") return json(204, {});

  try {
    const sql = getSql();

    if (event.httpMethod === "GET") {
      const table = assertAllowedTable(event.queryStringParameters?.table || "");
      const columns = cleanColumns(event.queryStringParameters?.columns || "*");
      const limit = Math.min(Number(event.queryStringParameters?.limit || 100), 500);
      const tableName = quoteIdentifier(table);
      const rows = await sql.query(`select ${columns} from public.${tableName} limit $1`, [limit]);
      return json(200, rows);
    }

    const body = parseBody(event);
    const table = assertAllowedTable(body.table || "");
    const tableName = quoteIdentifier(table);

    if (event.httpMethod === "POST") {
      const records = Array.isArray(body.data) ? body.data : [body.data];
      const inserted = [];

      for (const record of records) {
        const entries = Object.entries(record || {}).filter(([, value]) => value !== undefined);
        if (!entries.length) continue;

        const columns = entries.map(([key]) => quoteIdentifier(key)).join(", ");
        const placeholders = entries.map((_, index) => `$${index + 1}`).join(", ");
        const values = entries.map(([, value]) => value);
        const rows = await sql.query(`insert into public.${tableName} (${columns}) values (${placeholders}) returning *`, values);
        inserted.push(...rows);
      }

      return json(200, inserted);
    }

    if (event.httpMethod === "PATCH") {
      if (!body.id) return json(400, { error: "ID obrigatorio para edicao." });

      const entries = Object.entries(body.data || {}).filter(([, value]) => value !== undefined);
      if (!entries.length) return json(400, { error: "Nenhum campo para editar." });

      const assignments = entries.map(([key], index) => `${quoteIdentifier(key)} = $${index + 1}`).join(", ");
      const values = entries.map(([, value]) => value);
      values.push(body.id);

      const rows = await sql.query(`update public.${tableName} set ${assignments} where id = $${values.length} returning *`, values);
      return json(200, rows);
    }

    if (event.httpMethod === "DELETE") {
      if (!body.id) return json(400, { error: "ID obrigatorio para exclusao." });

      const rows = await sql.query(`delete from public.${tableName} where id = $1 returning *`, [body.id]);
      return json(200, rows);
    }

    return json(405, { error: "Metodo nao permitido." });
  } catch (error) {
    return json(500, { error: error.message });
  }
}
