# Publicação Online - Software Pilates

Este projeto está preparado para publicação como site estático no Netlify, com código versionado no GitHub e banco Supabase.

## 1. GitHub

1. Criar um novo repositório no GitHub, por exemplo:
   `software-pilates-physiofit`
2. No terminal, dentro desta pasta, executar:

```powershell
git init
git branch -M main
git add .
git commit -m "Preparar software pilates para deploy"
git remote add origin https://github.com/SEU-USUARIO/software-pilates-physiofit.git
git push -u origin main
```

## 2. Supabase

1. Criar um projeto novo no Supabase.
2. Abrir `SQL Editor`.
3. Executar o arquivo:
   `supabase/schema.sql`
4. Copiar:
   - `Project URL`
   - `anon public key`

Esses dados são públicos para uso no navegador. Nunca usar a `service_role key` no frontend.

## 3. Netlify

1. Entrar em Netlify.
2. Criar novo projeto a partir do GitHub.
3. Selecionar o repositório do sistema.
4. Configurar:
   - Build command: `node scripts/create-env.js`
   - Publish directory: `.`
5. Em `Site configuration > Environment variables`, criar:

```text
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon-public
APP_ENV=production
```

6. Fazer o deploy.

## 4. Como Funciona O Build

O Netlify roda `node scripts/create-env.js`.

Esse comando cria o arquivo `env.js` com as variáveis do Supabase:

```js
window.PHYSIOFIT_ENV = {
  supabaseUrl: "...",
  supabaseAnonKey: "...",
  appEnv: "production"
};
```

O arquivo `env.js` não deve ser commitado. Ele está no `.gitignore`.

## 5. Estado Atual Da Integração

O app já carrega o cliente Supabase e detecta se a configuração existe.

Enquanto a persistência completa não for migrada, o sistema continua funcionando com dados locais do navegador e com a base importada em `studio-data.js`.

Próxima etapa técnica:

1. Criar login por perfil.
2. Migrar leitura/gravação dos módulos para Supabase:
   - CRM;
   - alunos;
   - agenda;
   - matrículas;
   - financeiro;
   - NFS-e;
   - prontuário.
3. Substituir as políticas temporárias por regras por usuário e estúdio.

## 6. Validação Local

```powershell
node scripts/create-env.js
npm run check
```

Depois abrir `index.html` no navegador.
