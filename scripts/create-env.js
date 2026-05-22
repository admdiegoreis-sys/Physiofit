const fs = require("node:fs");
const path = require("node:path");

const outputPath = path.join(__dirname, "..", "env.js");

const publicConfig = {
  supabaseUrl: process.env.SUPABASE_URL || "",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "",
  appEnv: process.env.APP_ENV || "local",
};

const contents = `window.PHYSIOFIT_ENV = ${JSON.stringify(publicConfig, null, 2)};\n`;

fs.writeFileSync(outputPath, contents, "utf8");
console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
