import { neon } from "@neondatabase/serverless";

export const allowedTables = new Set([
  "appointments",
  "chart_accounts",
  "clinical_records",
  "enrollments",
  "financial_movements",
  "fiscal_invoices",
  "leads",
  "lead_inbox",
  "modalities",
  "plans",
  "professionals",
  "profiles",
  "students",
  "studios",
  "suppliers",
]);

export function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL nao configurada no Netlify.");
  }

  return neon(process.env.DATABASE_URL);
}

export function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

export function assertAllowedTable(table) {
  if (!allowedTables.has(table)) {
    throw new Error("Tabela nao permitida.");
  }

  return table;
}

export function quoteIdentifier(identifier) {
  return `"${identifier.replaceAll('"', '""')}"`;
}
