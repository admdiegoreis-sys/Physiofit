(function () {
  const env = window.PHYSIOFIT_ENV || {};
  const hasSupabaseSdk = Boolean(window.supabase?.createClient);
  const hasConfig = Boolean(env.supabaseUrl && env.supabaseAnonKey);

  window.PhysiofitData = {
    enabled: hasSupabaseSdk && hasConfig,
    client: null,
    async select(table, columns = "*") {
      if (!this.client) return { data: null, error: new Error("Supabase não configurado.") };
      return this.client.from(table).select(columns);
    },
    async upsert(table, payload) {
      if (!this.client) return { data: null, error: new Error("Supabase não configurado.") };
      return this.client.from(table).upsert(payload).select();
    },
  };

  if (!window.PhysiofitData.enabled) {
    console.info("Supabase offline: usando dados locais do navegador.");
    return;
  }

  window.PhysiofitData.client = window.supabase.createClient(env.supabaseUrl, env.supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
})();
