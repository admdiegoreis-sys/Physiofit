(function () {
  const env = window.PHYSIOFIT_ENV || {};
  const apiBaseUrl = env.apiBaseUrl || "/.netlify/functions";

  async function request(path, options = {}) {
    const response = await fetch(`${apiBaseUrl}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = payload.error || "Nao foi possivel acessar o banco de dados.";
      throw new Error(message);
    }

    return payload;
  }

  window.PhysiofitData = {
    enabled: true,
    async health() {
      return request("/db-health");
    },
    async select(table, columns = "*", params = {}) {
      const search = new URLSearchParams({ table, columns, ...params });

      try {
        const data = await request(`/records?${search.toString()}`);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    async upsert(table, payload) {
      try {
        const data = await request("/records", {
          method: "POST",
          body: JSON.stringify({ table, data: payload }),
        });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    async update(table, id, payload) {
      try {
        const data = await request("/records", {
          method: "PATCH",
          body: JSON.stringify({ table, id, data: payload }),
        });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    async remove(table, id) {
      try {
        const data = await request("/records", {
          method: "DELETE",
          body: JSON.stringify({ table, id }),
        });
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
  };
})();
