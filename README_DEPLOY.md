# Publicacao Online - Physiofit Studio

Este projeto esta preparado para publicacao no Netlify, com codigo no GitHub e banco Postgres no Neon.

## 1. GitHub

Repositorio usado:

```text
admdiegoreis-sys/Physiofit
```

O Netlify deve ser conectado a esse repositorio para fazer deploy automatico sempre que houver push na branch `main`.

## 2. Neon

1. No painel do Neon, abra o projeto criado.
2. Acesse `SQL Editor`.
3. Execute o arquivo:

```text
neon/schema.sql
```

4. Em `Connect`, copie a connection string do banco.

Importante: a connection string do Neon contem usuario e senha. Ela nao deve ser colocada em `index.html`, `app.js`, `env.js` ou qualquer arquivo publico.

## 3. Netlify

1. Crie um novo site a partir do GitHub.
2. Selecione o repositorio `admdiegoreis-sys/Physiofit`.
3. Configure:

```text
Build command: node scripts/create-env.js
Publish directory: .
```

4. Em `Site configuration > Environment variables`, crie:

```text
DATABASE_URL=postgresql://usuario:senha@host/neondb?sslmode=require
APP_ENV=production
```

Nao crie `DATABASE_URL` como variavel publica no frontend. Ela deve ficar apenas no ambiente do Netlify, para ser usada pelas Functions.

## 4. Como Funciona

O navegador carrega `neon-client.js`, que chama as APIs:

```text
/.netlify/functions/db-health
/.netlify/functions/records
/.netlify/functions/app-state
```

Essas Functions rodam no servidor do Netlify e acessam o Neon com `process.env.DATABASE_URL`.

## 5. Teste De Conexao

Depois do deploy, abra:

```text
https://SEU-SITE.netlify.app/.netlify/functions/db-health
```

Resposta esperada:

```json
{
  "ok": true,
  "provider": "neon"
}
```

## 6. Estado Atual Da Integracao

O projeto ja tem:

- estrutura de banco no Neon;
- Netlify Functions para testar conexao;
- endpoint generico para leitura, inclusao, edicao e exclusao;
- endpoint `app-state` para persistir a base operacional completa no Neon;
- cliente frontend preparado para chamar as Functions.

Na primeira abertura do sistema publicado, se ainda nao existir estado salvo no Neon, o app envia a base real atual para `app_state`. Depois disso, alteracoes feitas no sistema passam a ser salvas novamente no Neon.

Proxima etapa tecnica:

1. Normalizar cada modulo do `app_state` para as tabelas especificas do Neon.
2. Comecar por cadastros essenciais:
   - alunos;
   - profissionais;
   - modalidades;
   - planos;
   - matriculas.
3. Depois migrar agenda e financeiro.
4. Por fim, criar login e permissoes por perfil.

## 7. Validacao Local

Sem Netlify CLI, rode apenas a validacao de sintaxe:

```powershell
node scripts/create-env.js
node --check app.js
node --check neon-client.js
node --check netlify/functions/db-health.mjs
node --check netlify/functions/records.mjs
```
