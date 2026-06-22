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
    session: JSON.parse(localStorage.getItem("physiofit-auth-session") || "null"),
    setSession(session) {
      this.session = session;
      if (session) localStorage.setItem("physiofit-auth-session", JSON.stringify(session));
      else localStorage.removeItem("physiofit-auth-session");
    },
    authHeaders() {
      return this.session?.token ? { Authorization: `Bearer ${this.session.token}` } : {};
    },
    async health() {
      return request("/db-health");
    },
    async login(username, password) {
      const data = await request("/auth", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      this.setSession(data);
      return data;
    },
    async forgotPassword(email) {
      return request("/auth-forgot", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
    },
    async resetPassword(token, password) {
      return request("/auth-reset", {
        method: "POST",
        body: JSON.stringify({ token, password }),
      });
    },
    async listUsers() {
      return request("/auth-users", { headers: this.authHeaders() });
    },
    async updateUser(userId, payload) {
      return request("/auth-users", {
        method: "PATCH",
        headers: this.authHeaders(),
        body: JSON.stringify({ userId, ...payload }),
      });
    },
    async loadState(key = "production") {
      try {
        const data = await request(`/app-state?key=${encodeURIComponent(key)}`);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    async saveState(data, key = "production") {
      try {
        const result = await request(`/app-state?key=${encodeURIComponent(key)}`, {
          method: "PUT",
          body: JSON.stringify({ data }),
        });
        return { data: result, error: null };
      } catch (error) {
        return { data: null, error };
      }
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
