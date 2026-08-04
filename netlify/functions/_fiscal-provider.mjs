// Camada de integração com o emissor de NFS-e. Goiânia aderiu ao padrão nacional (ADN/CGNFS-e,
// Instrução Normativa 021/2025) em vez do antigo ABRASF por município — por isso o provider é
// genérico "nacional" e não específico de uma prefeitura: qualquer município aderente ao padrão
// usa o mesmo contrato de integração.
//
// Ainda não está implementada a assinatura XML (XMLDSig com o certificado A1) nem o envio real ao
// webservice nacional — falta confirmar o endpoint/homologação exatos. Cada função abaixo retorna
// erro "não configurado" até essa etapa ser concluída; a fila/worker já processam esse retorno
// normalmente (fica em "Erro" com o motivo visível para o usuário).

export async function emitirNfse(config, payload) {
  if (!config?.certificateReady) {
    return {
      ok: false,
      status: "Erro",
      motivo: "Certificado digital não configurado. Envie o certificado A1 em Fiscal > Configurações antes de emitir.",
    };
  }

  return {
    ok: false,
    status: "Erro",
    motivo: "Integração com o webservice nacional de NFS-e ainda não foi concluída. Emissão pendente de configuração.",
  };
}

export async function consultarNfse(config, protocolo) {
  return {
    ok: false,
    status: "Erro",
    motivo: "Consulta ao webservice nacional ainda não configurada.",
  };
}

export async function cancelarNfse(config, numero, motivo) {
  return {
    ok: false,
    status: "Erro",
    motivo: "Cancelamento via webservice nacional ainda não configurado.",
  };
}
