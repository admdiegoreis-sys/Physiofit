const storageKey = "studioflow-pilates-v2";
const demoToday = new Date().toISOString().slice(0, 10);

const seedStudents = [
  { id: "s1", name: "Ana Carol", email: "ana@studio.com", phone: "(48) 98811-2345", cpf: "752.335.251-00", birthDate: "1994-03-30", gender: "F", plan: "Mensal 2x semana", status: "Ativo", membership: "Matriculado", lastPresence: "2026-05-10" },
  { id: "s2", name: "Janaína Pires", email: "janaina@studio.com", phone: "(48) 99140-8831", cpf: "252.630.801-15", birthDate: "1964-09-29", gender: "F", plan: "Mensal livre", status: "Ativo", membership: "Matrículas", lastPresence: "2026-05-08" },
  { id: "s3", name: "Larissa Melo", email: "larissa@studio.com", phone: "(48) 98776-4561", cpf: "012.791.791-80", birthDate: "1983-06-12", gender: "F", plan: "Mensal livre", status: "Ativo", membership: "Matr. Cancel.", lastPresence: "2026-05-09" },
  { id: "s4", name: "Elacy Fernandes", email: "elacy@studio.com", phone: "(48) 98444-0909", cpf: "076.527.551-15", birthDate: "1944-08-07", gender: "F", plan: "Fisioterapia", status: "Ativo", membership: "Matriculado", lastPresence: "2026-05-07" },
  { id: "s5", name: "Joan Maria", email: "joan@studio.com", phone: "(48) 99870-4433", cpf: "024.061.351-10", birthDate: "1987-01-04", gender: "F", plan: "Mensal 2x semana", status: "Ativo", membership: "Matr. Cancel.", lastPresence: "2026-05-09" },
  { id: "s6", name: "Francis Sona", email: "francis@studio.com", phone: "(48) 97721-4502", cpf: "037.273.531-20", birthDate: "1992-06-19", gender: "M", plan: "Experimental", status: "Ativo", membership: "Avulsa", lastPresence: "2026-05-06" },
  { id: "s7", name: "Claudia Martins", email: "claudia@studio.com", phone: "(48) 99117-3490", cpf: "532.716.101-34", birthDate: "1973-01-26", gender: "F", plan: "Aula avulsa", status: "Ativo", membership: "Matrículas", lastPresence: "2026-05-05" },
  { id: "s8", name: "Daniela Gregorio", email: "daniela@studio.com", phone: "(48) 99641-4010", cpf: "262.995.261-49", birthDate: "1959-04-08", gender: "F", plan: "Mensal 2x semana", status: "Ativo", membership: "Matrículas", lastPresence: "2026-05-08" },
  { id: "s9", name: "Iara Beatriz", email: "iara@studio.com", phone: "(48) 98751-8033", cpf: "071.030.501-04", birthDate: "1952-01-11", gender: "F", plan: "Mensal livre", status: "Ativo", membership: "Matriculado", lastPresence: "2026-05-09" },
  { id: "s10", name: "Maria Rafaela", email: "maria@studio.com", phone: "(48) 98533-2120", cpf: "022.372.121-20", birthDate: "1987-10-12", gender: "F", plan: "Reposição", status: "Ativo", membership: "Matr. Cancel.", lastPresence: "2026-05-09" },
  { id: "s11", name: "Ildebran Jose", email: "ildebran@studio.com", phone: "(48) 99220-7621", cpf: "247.113.061-53", birthDate: "1975-05-14", gender: "M", plan: "Mensal livre", status: "Ativo", membership: "Matriculado", lastPresence: "2026-05-10" },
  { id: "s12", name: "Lucy Maria", email: "lucy@studio.com", phone: "(48) 99915-3401", cpf: "084.951.311-90", birthDate: "1989-02-21", gender: "F", plan: "Mensal livre", status: "Inativo", membership: "Avulsa", lastPresence: "2026-05-08" },
];

const seedProfessionals = [
  { id: "t1", name: "Ana Carolina dos Santos Reges", email: "anacarolinareges@hotmail.com", phone: "(62) 99183-1929", status: "Ativo", maxPatients: 6, color: "#cf642a", role: "Instrutora de Pilates", document: "123.456.789-10", notes: "" },
  { id: "t2", name: "Daianne Pereira de Souza", email: "fisio.daianne@gmail.com", phone: "(62) 98267-7722", status: "Ativo", maxPatients: 4, color: "#c63a32", role: "Fisioterapeuta", document: "234.567.891-20", notes: "" },
  { id: "t3", name: "Gabriella Emelly de Bessa Maciel", email: "kamilaacostaa1@gmail.com", phone: "(62) 98177-4980", status: "Ativo", maxPatients: 6, color: "#b151d4", role: "Instrutora de Pilates", document: "345.678.912-30", notes: "" },
  { id: "t4", name: "Lucas Sirqueira de Jesus", email: "lucas@gmail.com", phone: "(62) 98570-9378", status: "Ativo", maxPatients: 4, color: "#5e91b8", role: "Professor", document: "456.789.123-40", notes: "" },
];

const seedSupplierRows = [
  "DAIANNE PEREIRA DE SOUZA|015.038.751-21|Pessoa física|144|78090.04|2026-05-04",
  "REGINALDO BRAZ DA ROCHA|167.471.191-34|Pessoa física|19|38321.09|2026-05-09",
  "ANA CAROLINA DOS SANTOS REGES|752.335.251-00|Pessoa física|32|36144.52|2026-05-08",
  "LUCAS SIRQUEIRA DE JESUS|701.234.981-63|Pessoa física|20|25802.84|2026-05-08",
  "ROSANA BORGES DE ABREU|016.979.751-19|Pessoa física|36|25556.72|2026-05-10",
  "BANCO ITAU||Sem documento|17|23399.31|2026-05-27",
  "KAMILA COSTA|001.182.201-52|Pessoa física|17|17323.00|2025-09-22",
  "SIMPLES NACIONAL|00.394.460/0058-87|Pessoa jurídica|14|16679.87|2026-03-20",
  "DARF|00.394.460/0058-87|Pessoa jurídica|21|16102.18|2026-05-08",
  "GABRIELLA EMELLY DE BESSA MACIEL|033.764.061-03|Pessoa física|12|14229.84|2026-05-08",
  "CEF MATRIZ|00.360.305/0001-04|Pessoa jurídica|21|11090.81|2026-05-10",
  "EQUATORIAL GOIAS DISTR ENER SA|01.543.032/0001-04|Pessoa jurídica|16|7693.84|2026-05-15",
  "MARIANA PRADO ASSESSORIA CONTABIL|53.930.601/0001-60|Pessoa jurídica|19|7260.54|2026-05-09",
  "REDECARD INSTITUICAO DE PAGAMENTO S.A.|01.425.787/0001-04|Pessoa jurídica|15|6247.98|2026-03-31",
  "WILLIAN NEVES DOS SANTOS|961.952.821-20|Pessoa física|1|5500.00|2025-01-10",
  "CERRADO PEDRAS|04.602.806/0001-00|Pessoa jurídica|1|5150.00|2025-01-03",
  "TT COMUNICA|44.942.250/0001-16|Pessoa jurídica|7|4550.00|2025-07-14",
  "ESTER SUZANE DE MOURA SANTOS|711.055.751-01|Pessoa física|6|4136.49|2026-05-08",
  "IZABELLA VIANA VIEIRA|700.050.911-28|Pessoa física|6|3955.84|2026-05-08",
  "FELIPE FRANCA PEDROSO|026.894.511-07|Pessoa física|1|3108.62|2025-01-06",
  "ARGA FIXA|12.821.805/0001-85|Pessoa jurídica|1|3000.00|2025-01-06",
  "MARIA DE FATIMA PEREIRA|508.733.931-04|Pessoa física|10|2945.00|2026-05-09",
  "EDSON DE SOUZA HILARIO|364.117.601-87|Pessoa física|1|2900.00|2026-04-27",
  "RECEITA FEDERAL|00.394.460/0058-87|Pessoa jurídica|2|2814.68|2026-05-27",
  "VERISURE BRASIL|11.660.106/0001-38|Pessoa jurídica|9|2469.01|2026-05-15",
  "DIEGO REIS SILVA|015.683.991-11|Pessoa física|15|2211.73|2026-05-09",
  "ELLO TINTAS|07.531.461/0001-30|Pessoa jurídica|2|2119.00|2026-04-16",
  "REDEMOB CONSORCIO|10.636.142/0001-01|Pessoa jurídica|5|1980.90|2026-05-09",
  "TIM CELULAR SA||Sem documento|17|1880.12|2026-05-09",
  "IMPERCIA|02.062.017/0001-07|Pessoa jurídica|1|1625.00|2025-01-03",
  "MARIANNA PARREIRA DA SILVA 04682784196|44.510.180/0001-27|Pessoa jurídica|2|1600.00|2026-04-22",
  "CENTRO DE I E ESCOLA CIEE|61.600.839/0001-55|Pessoa jurídica|4|1432.00|2026-05-15",
  "SANEAGO|01.616.929/0001-02|Pessoa jurídica|14|1409.70|2026-05-15",
  "GOIANIA PREFEITURA MUNICIPAL GABINETE DO PREFEITO|01.612.092/0001-23|Pessoa jurídica|2|1217.55|2026-04-16",
  "MERCADO PAGO INSTITUICAO DE PAGAMENTO LTDA|10.573.521/0001-91|Pessoa jurídica|6|1188.62|2026-04-17",
  "SHPP BRASIL INSTITUICAO DE PAGAMENTO E SERVICOS DE PAGAMENTOS LTDA|38.372.267/0001-82|Pessoa jurídica|4|1188.40|2026-04-17",
  "PJBANK PAGAMENTOS S A 1|18.191.228/0001-71|Pessoa jurídica|5|998.05|2025-05-21",
  "VERISURE BRASIL MONITORAMENTO PROCESSADO POR ADYE|14.796.606/0001-90|Pessoa jurídica|3|887.74|2025-07-14",
  "GOIANIA-TESOURO|01.612.092/0001-23|Pessoa jurídica|3|867.79|2026-05-15",
  "SOLAR|33.319.245/0001-35|Pessoa jurídica|1|843.69|2025-01-06",
  "SCOTT DESENVOLVIMENTO DE SOFTWARE|32.527.206/0001-60|Pessoa jurídica|4|835.20|2025-11-07",
  "HELLEN MARIA NASCIMENTO DE OLIVEIRA|053.709.401-69|Pessoa física|2|810.00|2025-11-24",
  "TIM CELULAR SA|02.421.421/0001-11|Pessoa jurídica|18|714.59|2026-03-23",
  "SANDRA SILVA COSTA|032.570.446-58|Pessoa física|1|670.50|2025-11-18",
  "PM GOIANIA-FMS|01.612.092/0001-23|Pessoa jurídica|1|516.54|2025-06-30",
  "CLARO CELULAR S.A||Sem documento|15|469.70|2026-03-10",
  "32.642.830 BRUNO SILVA LIMA|32.642.830/0001-09|Pessoa jurídica|1|400.00|2025-04-25",
  "ECOENTULHO|11.071.934/0001-30|Pessoa jurídica|1|360.00|2025-01-09",
  "SUPERMERCADO PRATIKO|07.099.190/0001-95|Pessoa jurídica|7|314.51|2025-09-02",
  "AMAZON.COM.BR|15.436.940/0001-03|Pessoa jurídica|1|274.91|2026-04-17",
  "PHYSIOFIT STUDIO LTDA|21.530.469/0001-02|Pessoa jurídica|1|269.32|2025-09-10",
  "IRACEMA MARIA DE MACEDO E SILVA|853.957.301-68|Pessoa física|1|265.00|2025-05-09",
  "ADRIANA MISSIAS DE ANDRADE|895.018.701-97|Pessoa física|2|260.00|2025-11-17",
  "FLAVIO VELOZO DE ANDRADE GOMES|873.632.161-34|Pessoa física|1|250.00|2025-03-24",
  "EDMILSON JOSE DA SILVA|499.573.254-34|Pessoa física|1|240.00|2025-08-12",
  "MARCELEY MIGUEL DA SILVA|422.963.581-87|Pessoa física|1|218.10|2025-01-20",
  "63.395.888 JUCENILDO DA CRUZ PEREIRA|63.395.888/0001-29|Pessoa jurídica|1|200.00|2026-04-16",
  "R&P SOLUCOES DIGITAL|48.502.102/0001-31|Pessoa jurídica|1|200.00|2025-05-20",
  "TRIATO PETIT|47.116.088/0001-75|Pessoa jurídica|1|200.00|2026-04-20",
  "EMBALAGENS VIEIRA LTDA|53.566.932/0001-62|Pessoa jurídica|1|197.00|2025-11-17",
  "CLAUDIA MARTINS SILVERIO|791.572.621-87|Pessoa física|1|190.00|2025-07-25",
  "ROCHA SERVICOS E DETIZACAO LTDA|04.431.503/0001-72|Pessoa jurídica|1|190.00|2025-10-06",
  "PAULO HENRIQUE DA SILVA SOARES|049.501.111-83|Pessoa física|1|184.60|2025-04-16",
  "POLLYANA QUINTINO ESTEVAO DOS SANTOS|704.958.041-42|Pessoa física|1|180.00|2025-01-23",
  "WASHINGTON RODRIGUES PEREIRA|004.635.951-65|Pessoa física|1|180.00|2025-01-30",
  "CREFITO 19|55.556.485/0001-96|Pessoa jurídica|1|179.25|2025-04-09",
  "ORIONPAG|57.903.453/0001-45|Pessoa jurídica|1|160.40|2025-07-07",
  "MS MULT-SERVI|32.642.830/0001-09|Pessoa jurídica|1|150.00|2025-10-14",
  "EDUZZ TECNOLOGIA LTDA|09.573.540/0001-39|Pessoa jurídica|1|147.00|2025-01-31",
  "LOPANE - PADARIA & EMPORIO|47.571.044/0001-35|Pessoa jurídica|1|142.72|2025-03-31",
  "JOSE FELIX DOS SANTOS|492.345.951-49|Pessoa física|1|130.00|2026-01-08",
  "GOIANIA-TESOURO|00.161.209/2000-12|Pessoa jurídica|1|129.70|2025-03-18",
  "EXATA IMPRESSAO RAPIDA|32.144.394/0001-48|Pessoa jurídica|1|125.00|2026-01-30",
  "VALDIVINO NUNES DE MORAIS|377.283.501-53|Pessoa física|1|125.00|2025-07-16",
  "PHYSIOFIT STUDIO|21.530.469/0001-02|Pessoa jurídica|3|115.00|2026-03-20",
  "MYSHOP|11.156.936/0001-22|Pessoa jurídica|1|110.00|2025-07-17",
  "REDE EMPORIO CASA LOPES|52.101.439/0001-04|Pessoa jurídica|1|100.00|2025-04-11",
  "LARA JORDANA ARAUJO BORGES|086.493.221-90|Pessoa física|1|90.00|2025-12-02",
  "LUZIA CRUVINEL DE OLIVEIRA|396.964.481-04|Pessoa física|1|90.00|2026-04-29",
  "DSE DISTRIBUIDORA SANTA EMILIA|22.690.666/0001-51|Pessoa jurídica|1|89.80|2025-09-11",
  "INSTITUTO MUNDO FISIO|17.958.336/0001-64|Pessoa jurídica|1|85.00|2025-09-30",
  "GILDEAN A DA SILVA|33.649.347/0002-08|Pessoa jurídica|1|84.96|2025-01-13",
  "CLAUDIO EDMUNDO SILVA|788.125.341-04|Pessoa física|1|70.00|2025-08-15",
  "TRADIO|42.971.425/0001-98|Pessoa jurídica|1|66.49|2025-02-21",
  "DRS GESTAO FINANCEIRA|38.498.027/0001-29|Pessoa jurídica|1|60.89|2026-01-20",
  "ADAILTON BATISTA DA SILVA|11.539.874/0001-38|Pessoa jurídica|1|60.00|2025-02-04",
  "ATACADAO COSTA|27.289.076/0001-35|Pessoa jurídica|1|59.82|2025-09-09",
  "SUELENE MARIA BARBOSA DANTAS 39504441149|44.710.443/0001-41|Pessoa jurídica|1|56.90|2025-03-24",
  "MERCADO GLORIA|02.122.276/0001-78|Pessoa jurídica|1|56.41|2025-02-12",
  "MERCADINHO ON.LINE|31.140.487/0001-31|Pessoa jurídica|1|50.95|2025-01-07",
  "MARCELO MENDONCA MOITINHO|429.598.701-82|Pessoa física|1|50.00|2026-04-23",
  "BRUNO BORGES BOTELHO|709.620.251-00|Pessoa física|1|47.00|2025-01-02",
  "RAIFRAN DE SOUSA MOTA SILVA|021.329.521-08|Pessoa física|1|35.00|2025-08-07",
  "FERRAGISTA COMANDO|16.528.773/0001-85|Pessoa jurídica|2|30.80|2025-06-25",
  "ANTONIO MORENO LEOBAS 56581920134|35.892.382/0001-90|Pessoa jurídica|1|20.00|2025-01-27",
  "BRUNO GONCALVES DIAS MORENO|272.963.038-40|Pessoa física|1|20.00|2025-03-21",
  "DROGARIA PRO SAUDE|04.357.074/0001-30|Pessoa jurídica|1|15.99|2025-10-08",
  "MEGAPANE PANIFICADORA E LANCHONETE|09.630.883/0001-98|Pessoa jurídica|1|11.00|2025-03-17",
  "SANDY CHAVES DE SOUSA|810.008.801-25|Pessoa física|1|10.00|2025-10-29",
];

const seedSuppliers = seedSupplierRows.map((row, index) => {
  const [name, document, supplierType, movementCount, totalPaid, lastMovementDate] = row.split("|");
  return {
    id: `f${index + 1}`,
    name,
    document,
    supplierType,
    movementCount: Number(movementCount) || 0,
    totalPaid: Number(totalPaid) || 0,
    lastMovementDate,
    status: "Ativo",
    email: "",
    phone: "",
    notes: "Importado da aba BD_Physiofit",
  };
});

const seedModalities = [
  { id: "m1", name: "Fisioterapia", status: "Ativo", maxPatients: 1, color: "#245d25", wellhub: false, totalPass: false, experimentalValue: 0, singleValue: 150, createdAt: "2024-07-18T15:15:11", notes: "" },
  { id: "m2", name: "Funcional", status: "Ativo", maxPatients: 4, color: "#4548e8", wellhub: false, totalPass: false, experimentalValue: 0, singleValue: 50, createdAt: "2024-07-18T15:10:52", notes: "" },
  { id: "m3", name: "Pilates", status: "Ativo", maxPatients: 7, color: "#6043c2", wellhub: false, totalPass: false, experimentalValue: 0, singleValue: 50, createdAt: "2024-07-02T10:23:59", notes: "" },
];

const seedPlans = [
  { id: "pl1", name: "1 Sessão de FISIOTERAPIARPG", modalityId: "m1", type: "Avulsa / Livre", value: 165, linkedEnrollments: 0, sessions: 1, status: "Ativo", notes: "" },
  { id: "pl2", name: "Esteira e bicicleta", modalityId: "m1", type: "Mensalidade", value: 80, linkedEnrollments: 1, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl3", name: "Fisioterapia - 10 sessões", modalityId: "m1", type: "Pacote de Sessão", value: 1300, linkedEnrollments: 11, sessions: 10, status: "Ativo", notes: "" },
  { id: "pl4", name: "Fisioterapia - 4 Sessões", modalityId: "m1", type: "Pacote de Sessão", value: 440, linkedEnrollments: 3, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl5", name: "Funcional - 1x na semana", modalityId: "m2", type: "Mensalidade", value: 145, linkedEnrollments: 4, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl6", name: "Funcional - 2x na semana", modalityId: "m2", type: "Mensalidade", value: 200, linkedEnrollments: 33, sessions: 8, status: "Ativo", notes: "" },
  { id: "pl7", name: "Funcional - 3x na semana", modalityId: "m2", type: "Mensalidade", value: 275, linkedEnrollments: 13, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl8", name: "Funcional - 4x na semana", modalityId: "m2", type: "Mensalidade", value: 385, linkedEnrollments: 0, sessions: 16, status: "Ativo", notes: "" },
  { id: "pl9", name: "Funcional - Semestral - 1x na Semana", modalityId: "m2", type: "Semestralidade", value: 690, linkedEnrollments: 1, sessions: 24, status: "Ativo", notes: "" },
  { id: "pl10", name: "Funcional - Trimestral - 2x na semana", modalityId: "m2", type: "Trimestralidade", value: 510, linkedEnrollments: 6, sessions: 24, status: "Ativo", notes: "" },
  { id: "pl11", name: "Funcional - Trimestral - 3x semana", modalityId: "m2", type: "Trimestralidade", value: 741, linkedEnrollments: 2, sessions: 36, status: "Ativo", notes: "" },
  { id: "pl12", name: "Funcional -Semestral - 1x na semana", modalityId: "m2", type: "Semestralidade", value: 870, linkedEnrollments: 3, sessions: 24, status: "Ativo", notes: "" },
  { id: "pl13", name: "Novo - Plano Familiar 1x", modalityId: "m3", type: "Mensalidade", value: 180, linkedEnrollments: 0, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl14", name: "Novo - Plano Familiar 2x", modalityId: "m3", type: "Mensalidade", value: 290, linkedEnrollments: 4, sessions: 8, status: "Ativo", notes: "" },
  { id: "pl15", name: "Novo - Fisioterapia pacote - 10 Sessões", modalityId: "m1", type: "Pacote de Sessão", value: 1430, linkedEnrollments: 1, sessions: 10, status: "Ativo", notes: "" },
  { id: "pl16", name: "Novo - Funcional Mensal - 1x por semana", modalityId: "m2", type: "Mensalidade", value: 160, linkedEnrollments: 1, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl17", name: "Novo - Funcional Mensal - 2x por semana", modalityId: "m2", type: "Mensalidade", value: 220, linkedEnrollments: 10, sessions: 8, status: "Ativo", notes: "" },
  { id: "pl18", name: "Novo - Funcional Mensal - 3x por semana", modalityId: "m2", type: "Mensalidade", value: 300, linkedEnrollments: 4, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl19", name: "Novo - Funcional Mensal - 4x por semana", modalityId: "m2", type: "Mensalidade", value: 325, linkedEnrollments: 0, sessions: 16, status: "Ativo", notes: "" },
  { id: "pl20", name: "Novo - Pilates Avulso - 1 sessão", modalityId: "m3", type: "Avulsa / Livre", value: 60, linkedEnrollments: 0, sessions: 1, status: "Ativo", notes: "" },
  { id: "pl21", name: "Novo - Pilates Mensal - 1x por semana", modalityId: "m3", type: "Mensalidade", value: 190, linkedEnrollments: 6, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl22", name: "Novo - Pilates Mensal - 2x por semana", modalityId: "m3", type: "Mensalidade", value: 310, linkedEnrollments: 13, sessions: 8, status: "Ativo", notes: "" },
  { id: "pl23", name: "Novo - Pilates Mensal - 3x por semana", modalityId: "m3", type: "Mensalidade", value: 370, linkedEnrollments: 2, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl24", name: "Novo - Pilates Semestral - 1x por semana", modalityId: "m3", type: "Semestralidade", value: 990, linkedEnrollments: 7, sessions: 24, status: "Ativo", notes: "" },
  { id: "pl25", name: "Novo - Pilates Semestral - 2x por semana", modalityId: "m3", type: "Semestralidade", value: 1650, linkedEnrollments: 8, sessions: 48, status: "Ativo", notes: "" },
  { id: "pl26", name: "Novo - Pilates Trimestral - 1x por semana", modalityId: "m3", type: "Trimestralidade", value: 540, linkedEnrollments: 1, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl27", name: "Novo - Pilates Trimestral - 2x por semana", modalityId: "m3", type: "Trimestralidade", value: 870, linkedEnrollments: 4, sessions: 24, status: "Ativo", notes: "" },
  { id: "pl28", name: "Novo - Pilates Trimestral - 3x por semana", modalityId: "m3", type: "Trimestralidade", value: 1050, linkedEnrollments: 0, sessions: 36, status: "Ativo", notes: "" },
  { id: "pl29", name: "Novo - Plano Familiar 3x", modalityId: "m3", type: "Mensalidade", value: 350, linkedEnrollments: 0, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl30", name: "Novo - Plano Semestral de Funcional", modalityId: "m2", type: "Semestralidade", value: 1320, linkedEnrollments: 0, sessions: 48, status: "Ativo", notes: "" },
  { id: "pl31", name: "Pilates Avulso", modalityId: "m3", type: "Avulsa / Livre", value: 50, linkedEnrollments: 1, sessions: 1, status: "Ativo", notes: "" },
  { id: "pl32", name: "Pilates Quinquimestral", modalityId: "m3", type: "Quinquemestral", value: 735, linkedEnrollments: 0, sessions: 20, status: "Ativo", notes: "" },
  { id: "pl33", name: "Plano Bimestral - 2x na semana", modalityId: "m3", type: "Bimestral", value: 550, linkedEnrollments: 1, sessions: 16, status: "Ativo", notes: "" },
  { id: "pl34", name: "Plano Familiar - 1x na semana", modalityId: "m3", type: "Mensalidade", value: 165, linkedEnrollments: 9, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl35", name: "Plano Familiar - 2x na semana", modalityId: "m3", type: "Mensalidade", value: 265, linkedEnrollments: 48, sessions: 8, status: "Ativo", notes: "" },
  { id: "pl36", name: "Plano Familiar - 3x na semana", modalityId: "m3", type: "Mensalidade", value: 315, linkedEnrollments: 5, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl37", name: "Plano Mensal - 1x na semana", modalityId: "m3", type: "Mensalidade", value: 180, linkedEnrollments: 19, sessions: 4, status: "Ativo", notes: "" },
  { id: "pl38", name: "Plano Mensal - 2x na semana", modalityId: "m3", type: "Mensalidade", value: 295, linkedEnrollments: 51, sessions: 8, status: "Ativo", notes: "" },
  { id: "pl39", name: "Plano Mensal - 3x na semana", modalityId: "m3", type: "Mensalidade", value: 350, linkedEnrollments: 17, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl40", name: "Plano Pilates Nonamestral", modalityId: "", type: "Nonamestral", value: 2837.25, linkedEnrollments: 1, sessions: 36, status: "Ativo", notes: "" },
  { id: "pl41", name: "Plano Semestral - 1x na semana", modalityId: "m3", type: "Semestralidade", value: 900, linkedEnrollments: 5, sessions: 24, status: "Ativo", notes: "" },
  { id: "pl42", name: "Plano Semestral - 2x na semana", modalityId: "m3", type: "Semestralidade", value: 1500, linkedEnrollments: 43, sessions: 48, status: "Ativo", notes: "" },
  { id: "pl43", name: "Plano Semestral - 3x na semana", modalityId: "m3", type: "Semestralidade", value: 1800, linkedEnrollments: 8, sessions: 72, status: "Ativo", notes: "" },
  { id: "pl44", name: "Plano Trimestral - 1x na semana", modalityId: "m3", type: "Trimestralidade", value: 495, linkedEnrollments: 13, sessions: 12, status: "Ativo", notes: "" },
  { id: "pl45", name: "Plano Trimestral - 2x na semana", modalityId: "m3", type: "Trimestralidade", value: 795, linkedEnrollments: 47, sessions: 24, status: "Ativo", notes: "" },
  { id: "pl46", name: "Plano Trimestral - 3x na semana", modalityId: "m3", type: "Trimestralidade", value: 945, linkedEnrollments: 8, sessions: 36, status: "Ativo", notes: "" },
  { id: "pl47", name: "Sessão Avulsa", modalityId: "m1", type: "Avulsa / Livre", value: 150, linkedEnrollments: 3, sessions: 1, status: "Ativo", notes: "" },
];

const seedChartAccounts = [
  {"id": "pc1", "code": "1.01", "name": "Venda de Serviço - Pilates", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc2", "code": "1.02", "name": "Venda de Serviço - RPG", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc3", "code": "1.03", "name": "Venda de Serviço - Fisioterapia", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc4", "code": "1.04", "name": "Venda de Produto", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc5", "code": "1.05", "name": "Locação Sala", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc6", "code": "1.06", "name": "Venda de Serviço - Funcional", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc7", "code": "1.07", "name": "Venda de Serviço - Gestão Financeira", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc8", "code": "1.08", "name": "Venda de Serviço - Gestão Outras", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc9", "code": "2.01", "name": "Simples Nacional", "dreGroup": "(-) Impostos sob Venda", "dfcDescription": "Impostos sob Venda", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc10", "code": "2.02", "name": "Devolução de Venda", "dreGroup": "(+) Faturamento Bruto", "dfcDescription": "Recebimentos de Clientes", "dfcGroup": "Atividades Operacionais", "package": "Receitas", "activity": "Operacional", "nature": "Receita", "status": "Ativo"},
  {"id": "pc11", "code": "3.01", "name": "Prestador de Serviço - Pilates", "dreGroup": "(-) Custos", "dfcDescription": "Custos", "dfcGroup": "Atividades Operacionais", "package": "Custos", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc12", "code": "3.02", "name": "Prestador de Serviço - Funcional", "dreGroup": "(-) Custos", "dfcDescription": "Custos", "dfcGroup": "Atividades Operacionais", "package": "Custos", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc13", "code": "3.04", "name": "CMV", "dreGroup": "(-) Custos", "dfcDescription": "Custos", "dfcGroup": "Atividades Operacionais", "package": "Custos", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc14", "code": "3.05", "name": "CSP", "dreGroup": "(-) Custos", "dfcDescription": "Custos", "dfcGroup": "Atividades Operacionais", "package": "Custos", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc15", "code": "4.01", "name": "Comissões Sob Vendas", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Comerciais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc16", "code": "4.02", "name": "Marketing/Propaganda", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Comerciais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc17", "code": "5.01.01", "name": "Salários e Ordenados", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc18", "code": "5.01.02", "name": "Férias", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc19", "code": "5.01.03", "name": "13º Salário", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc20", "code": "5.01.04", "name": "Pró-Labore", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc21", "code": "5.01.05", "name": "INSS", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc22", "code": "5.01.06", "name": "FGTS", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc23", "code": "5.01.07", "name": "Rescisão Trabalhista", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc24", "code": "5.01.08", "name": "Plano de Saúde", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Pessoal", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc25", "code": "5.02.01", "name": "Água e Esgoto", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Infraestrutura", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc26", "code": "5.02.02", "name": "Aluguéis", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Infraestrutura", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc27", "code": "5.05.01", "name": "IPTU", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Infraestrutura", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc28", "code": "5.02.03", "name": "Energia Elétrica", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Infraestrutura", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc29", "code": "5.02.04", "name": "Manut e Reparo de Imóveis", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Infraestrutura", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc30", "code": "5.02.05", "name": "Segurança Patrimonial", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Infraestrutura", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc31", "code": "5.03.01", "name": "Telefone/Internet", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Tecnologia", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc32", "code": "5.03.02", "name": "Uso de Software", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Tecnologia", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc33", "code": "5.03.03", "name": "Compra de Material de Informática", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Tecnologia", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc34", "code": "5.03.04", "name": "Provedor e Hospedagem", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Tecnologia", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc35", "code": "5.03.05", "name": "Telefonia Móvel", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas com Tecnologia", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc36", "code": "5.04.01", "name": "Material de Escritório", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc37", "code": "5.04.02", "name": "Formulários / Impressos", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc38", "code": "5.04.03", "name": "Materiais de Copa e Cozinha", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc39", "code": "5.04.04", "name": "Material Higiene e Limpeza", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc40", "code": "5.04.05", "name": "Cartório e Emolumentos", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc41", "code": "5.04.06", "name": "Serviço de Limpeza e Dedetização", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc42", "code": "5.04.07", "name": "Transporte de Passageiros", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc43", "code": "5.04.08", "name": "Associação de Classe", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc44", "code": "5.04.09", "name": "Despesas com Cartões", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc45", "code": "5.04.10", "name": "Manutenção de Equipamentos", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc46", "code": "5.04.11", "name": "Outras Despesas Operacionais", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc47", "code": "5.04.13", "name": "Segurança do Trabalho", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc48", "code": "5.04.14", "name": "Confraternizações", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc49", "code": "5.04.12", "name": "Serviços Contábeis", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc50", "code": "5.05.04", "name": "Taxas Municipais", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Tributárias", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc51", "code": "5.05.02", "name": "Taxas Estaduais", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Tributárias", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc52", "code": "5.05.03", "name": "Taxas Federais", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Tributárias", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc53", "code": "5.06.01", "name": "Juros S/Cheque Especial", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Financeiras", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc54", "code": "5.06.02", "name": "Tarifa Bancária", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Financeiras", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc55", "code": "5.06.03", "name": "Tarifas de Cartão Crédito", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Financeiras", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc56", "code": "5.06.04", "name": "Pagamento Cartão de Crédito", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Financeiras", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc57", "code": "5.06.05", "name": "Juros Empréstimos", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Financeiras", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc58", "code": "7.01.01", "name": "IR/CSLL", "dreGroup": "(-) IR/CSLL", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Imposto de Renda", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc59", "code": "999", "name": "Não Identificado", "dreGroup": "(-) Despesas", "dfcDescription": "Despesas", "dfcGroup": "Atividades Operacionais", "package": "Despesas Gerais", "activity": "Operacional", "nature": "Despesa", "status": "Ativo"},
  {"id": "pc60", "code": "8.01", "name": "Instalações", "dreGroup": "Patrimonial", "dfcDescription": "Instalações", "dfcGroup": "Atividades de Investimento", "package": "Capex", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc61", "code": "8.02", "name": "Máquinas e Equipamentos", "dreGroup": "Patrimonial", "dfcDescription": "Máquinas e Equipamentos", "dfcGroup": "Atividades de Investimento", "package": "Capex", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc62", "code": "8.03", "name": "Computadores e Periféricos", "dreGroup": "Patrimonial", "dfcDescription": "Computadores e Periféricos", "dfcGroup": "Atividades de Investimento", "package": "Capex", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc63", "code": "8.04", "name": "Móveis e Utensílios", "dreGroup": "Patrimonial", "dfcDescription": "Móveis e Utensílios", "dfcGroup": "Atividades de Investimento", "package": "Capex", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc64", "code": "8.05", "name": "Veículos", "dreGroup": "Patrimonial", "dfcDescription": "Veículos", "dfcGroup": "Atividades de Investimento", "package": "Capex", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc65", "code": "8.06", "name": "Venda de Imobilizado", "dreGroup": "Patrimonial", "dfcDescription": "Venda de Imobilizado", "dfcGroup": "Atividades de Investimento", "package": "Capex", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc66", "code": "12.01", "name": "Consórcio", "dreGroup": "Patrimonial", "dfcDescription": "Consórcio", "dfcGroup": "Atividades de Investimento", "package": "Investimentos", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc67", "code": "12.03", "name": "Aplicação", "dreGroup": "Patrimonial", "dfcDescription": "Aplicação", "dfcGroup": "Atividades de Investimento", "package": "Investimentos", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc68", "code": "12.02", "name": "Resgate Aplicação", "dreGroup": "Patrimonial", "dfcDescription": "Resgate Aplicação", "dfcGroup": "Atividades de Investimento", "package": "Investimentos", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc69", "code": "12.04", "name": "Rendimento Aplicação", "dreGroup": "Patrimonial", "dfcDescription": "Rendimento Aplicação", "dfcGroup": "Atividades de Investimento", "package": "Investimentos", "activity": "Investimento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc70", "code": "10.01", "name": "Aporte Capital", "dreGroup": "Patrimonial", "dfcDescription": "Aporte Capital", "dfcGroup": "Atividades de Financiamento", "package": "Aporte", "activity": "Financiamento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc71", "code": "10.02", "name": "Empréstimo Contratado", "dreGroup": "Patrimonial", "dfcDescription": "Empréstimo Contratado", "dfcGroup": "Atividades de Financiamento", "package": "Empréstimos", "activity": "Financiamento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc72", "code": "10.03", "name": "Pagamento de Empréstimo", "dreGroup": "Patrimonial", "dfcDescription": "Pagamento de Empréstimo", "dfcGroup": "Atividades de Financiamento", "package": "Empréstimos", "activity": "Financiamento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc73", "code": "9.01", "name": "Distribuição de Lucros", "dreGroup": "Patrimonial", "dfcDescription": "Distribuição de Lucros", "dfcGroup": "Atividades de Financiamento", "package": "Adiantamentos", "activity": "Financiamento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc74", "code": "9.02", "name": "Distribuição de Lucros - Obra", "dreGroup": "Patrimonial", "dfcDescription": "Distribuição de Lucros - Obra", "dfcGroup": "Atividades de Financiamento", "package": "Adiantamentos", "activity": "Financiamento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc75", "code": "9.03", "name": "Distribuição de Lucros - Outros", "dreGroup": "Patrimonial", "dfcDescription": "Distribuição de Lucros - Outros", "dfcGroup": "Atividades de Financiamento", "package": "Adiantamentos", "activity": "Financiamento", "nature": "Patrimonial", "status": "Ativo"},
  {"id": "pc76", "code": "11", "name": "Transferência entre Contas", "dreGroup": "Patrimonial", "dfcDescription": "Transferência entre Contas", "dfcGroup": "Transitório", "package": "Transitório", "activity": "Transitório", "nature": "Patrimonial", "status": "Ativo"}
];

const seedAccounts = [
  { id: "cp1", direction: "Pagar", status: "Pago", competenceDate: "2025-01-02", forecastDate: "2025-01-02", dueDate: "2025-01-02", paidDate: "2025-01-02", amount: 47, description: "Não Identificado", person: "BRUNO BORGES BOTELHO", document: "709.620.251-00", modalityId: "", teacherId: "", chartAccountId: "pc25", paymentMethod: "Itau", bankLaunch: "SISPAG PIX QR-CODE" },
  { id: "cp2", direction: "Pagar", status: "Pago", competenceDate: "2025-01-02", forecastDate: "2025-01-02", dueDate: "2025-01-02", paidDate: "2025-01-02", amount: 30, description: "Distribuição de Lucros", person: "DAIANNE PEREIRA DE SOUZA", document: "015.038.751-21", modalityId: "", teacherId: "", chartAccountId: "pc22", paymentMethod: "Itaú", bankLaunch: "PIX ENVIADO DAIANNE PERE" },
  { id: "cp3", direction: "Pagar", status: "Pago", competenceDate: "2025-01-03", forecastDate: "2025-01-03", dueDate: "2025-01-03", paidDate: "2025-01-03", amount: 118, description: "Tarifa Bancária", person: "TAR PLANO ADAPT 1 12/24", document: "", modalityId: "", teacherId: "", chartAccountId: "pc21", paymentMethod: "Itaú", bankLaunch: "TAR PLANO ADAPT 1 12/24" },
  { id: "cp4", direction: "Receber", status: "Recebido", competenceDate: "2025-01-03", forecastDate: "2025-01-03", dueDate: "2025-01-03", paidDate: "2025-01-03", amount: 0.13, description: "Rendimento Aplicação", person: "REND PAGO APLIC AUT MAIS", document: "", modalityId: "", teacherId: "", chartAccountId: "pc24", paymentMethod: "Itaú", bankLaunch: "REND PAGO APLIC AUT MAIS" },
  { id: "cp5", direction: "Pagar", status: "Pago", competenceDate: "2025-01-03", forecastDate: "2025-01-03", dueDate: "2025-01-03", paidDate: "2025-01-03", amount: 5150, description: "Distribuição de Lucros - Obra", person: "CERRADO PEDRAS", document: "04.602.806/0001-00", modalityId: "", teacherId: "", chartAccountId: "pc23", paymentMethod: "Itaú", bankLaunch: "PIX ENVIADO CERRADO PEDR" },
  { id: "cp6", direction: "Receber", status: "Recebido", competenceDate: "2025-01-03", forecastDate: "2025-01-03", dueDate: "2025-01-03", paidDate: "2025-01-03", amount: 265, description: "Venda de Serviço - Pilates", person: "IRACEMA MARIA MACEDO E SILVA", document: "853.957.301-68", modalityId: "m3", teacherId: "", chartAccountId: "pc1", paymentMethod: "Itaú", bankLaunch: "PIX TRANSF IRACEMA03/01" },
  { id: "cp7", direction: "Receber", status: "Recebido", competenceDate: "2025-01-06", forecastDate: "2025-01-06", dueDate: "2025-01-06", paidDate: "2025-01-06", amount: 930, description: "Venda de Serviço - Pilates", person: "DINHEIRO/PIX", document: "", modalityId: "m3", teacherId: "", chartAccountId: "pc1", paymentMethod: "Itaú", bankLaunch: "PIX QRS" },
  { id: "cp8", direction: "Pagar", status: "Pago", competenceDate: "2025-01-06", forecastDate: "2025-01-06", dueDate: "2025-01-06", paidDate: "2025-01-06", amount: 50, description: "Prestador de Serviço - Funcional", person: "LUCAS SIRQUEIRA DE JESUS", document: "701.234.981-63", modalityId: "m2", teacherId: "t4", chartAccountId: "pc10", paymentMethod: "Itaú", bankLaunch: "PIX ENVIADO LUCAS SIRQUE" },
  { id: "cp9", direction: "Pagar", status: "Aberto", competenceDate: "2026-05-10", forecastDate: "2026-05-18", dueDate: "2026-05-18", paidDate: "", amount: 620, description: "Compra de acessórios e materiais", person: "Fornecedor Pilates Pro", document: "22.222.222/0001-22", modalityId: "", teacherId: "", chartAccountId: "pc20", paymentMethod: "Boleto" },
  { id: "cp10", direction: "Receber", status: "Aberto", competenceDate: "2026-05-03", forecastDate: "2026-05-03", dueDate: "2026-05-20", paidDate: "", amount: 310, description: "Mensalidade: Claudia Morais Sena", person: "Claudia Morais Sena", document: "190.478.351-15", modalityId: "m2", teacherId: "t3", chartAccountId: "pc1", paymentMethod: "Pix" },
];

const seedOfxRules = [
  { id: "ofxr1", keyword: "PIX RECEBIDO", chartAccountId: "pc1", type: "receita", bankAccountId: "", priority: 100, active: true },
  { id: "ofxr2", keyword: "PIX TRANSF", chartAccountId: "pc1", type: "receita", bankAccountId: "", priority: 95, active: true },
  { id: "ofxr3", keyword: "MENSALIDADE", chartAccountId: "pc1", type: "receita", bankAccountId: "", priority: 90, active: true },
  { id: "ofxr4", keyword: "TARIFA", chartAccountId: "pc52", type: "despesa", bankAccountId: "", priority: 90, active: true },
  { id: "ofxr5", keyword: "SIMPLES", chartAccountId: "pc8", type: "despesa", bankAccountId: "", priority: 90, active: true },
  { id: "ofxr6", keyword: "ALUGUEL", chartAccountId: "pc26", type: "despesa", bankAccountId: "", priority: 85, active: true },
  { id: "ofxr7", keyword: "EMPRESTIMO", chartAccountId: "pc72", type: "financiamento", bankAccountId: "", priority: 85, active: true },
  { id: "ofxr8", keyword: "TRANSFERENCIA", chartAccountId: "pc76", type: "transferência", bankAccountId: "", priority: 80, active: true },
];

const seedEnrollments = [
  { id: "e1", studentId: "s1", planId: "pl38", modalityId: "m3", professionalId: "t1", startDate: "2026-02-02", endDate: "2026-08-02", monthlyValue: 295, paymentMethod: "Pix", status: "Ativa", contractStatus: "Assinado", notes: "" },
  { id: "e2", studentId: "s2", planId: "pl21", modalityId: "m3", professionalId: "t4", startDate: "2026-04-01", endDate: "2026-05-31", monthlyValue: 190, paymentMethod: "Cartão de Débito", status: "Ativa", contractStatus: "Pendente", notes: "" },
  { id: "e3", studentId: "s4", planId: "pl3", modalityId: "m1", professionalId: "t3", startDate: "2026-03-15", endDate: "2026-06-15", monthlyValue: 1300, paymentMethod: "Boleto", status: "Ativa", contractStatus: "Assinado", notes: "" },
  { id: "e4", studentId: "s6", planId: "pl20", modalityId: "m3", professionalId: "t2", startDate: "2026-05-01", endDate: "2026-05-31", monthlyValue: 60, paymentMethod: "Pix", status: "Pendente", contractStatus: "Não enviado", notes: "" },
];

const appointmentSeed = [
  ["2026-05-11", "07:00", "08:00", "s1", "Marina", "Sala Reformer", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-11", "07:00", "08:00", "s2", "Lucas", "Sala Cadillac", "Pilates solo", "Confirmada", "Mensalidade"],
  ["2026-05-11", "08:00", "09:00", "s4", "Renata", "Sala Clínica", "Fisioterapia", "Confirmada", "Avulso"],
  ["2026-05-11", "08:00", "09:00", "s10", "Marina", "Sala Reformer", "Reposição", "Aguardando", "Mensalidade"],
  ["2026-05-11", "09:00", "10:00", "s1", "Lucas", "Sala Reformer", "Pilates aparelho", "Aguardando", "Mensalidade"],
  ["2026-05-11", "09:00", "10:00", "s6", "Renata", "Sala Solo", "Pilates solo", "Confirmada", "Experimental"],
  ["2026-05-11", "10:00", "11:00", "s3", "Marina", "Sala Cadillac", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-11", "11:30", "12:30", "s5", "Lucas", "Sala Reformer", "Pilates aparelho", "Aguardando", "Mensalidade"],
  ["2026-05-11", "12:00", "13:00", "s7", "Renata", "Sala Solo", "Pilates solo", "Confirmada", "Avulso"],
  ["2026-05-12", "07:00", "08:00", "s8", "Marina", "Sala Reformer", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-12", "08:00", "09:00", "s4", "Lucas", "Sala Clínica", "Fisioterapia", "Confirmada", "Mensalidade"],
  ["2026-05-12", "09:00", "10:00", "s2", "Renata", "Sala Cadillac", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-12", "10:00", "11:00", "s9", "Marina", "Sala Solo", "Pilates solo", "Aguardando", "Mensalidade"],
  ["2026-05-12", "12:00", "13:00", "s1", "Lucas", "Sala Reformer", "Reposição", "Confirmada", "Mensalidade"],
  ["2026-05-13", "07:00", "08:00", "s2", "Marina", "Sala Reformer", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-13", "07:00", "08:00", "s3", "Lucas", "Sala Cadillac", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-13", "08:00", "09:00", "s1", "Renata", "Sala Solo", "Pilates solo", "Confirmada", "Mensalidade"],
  ["2026-05-13", "09:00", "10:00", "s10", "Marina", "Sala Reformer", "Pilates aparelho", "Aguardando", "Mensalidade"],
  ["2026-05-13", "10:00", "11:00", "s12", "Lucas", "Sala Clínica", "Fisioterapia", "Confirmada", "Mensalidade"],
  ["2026-05-13", "11:30", "12:30", "s5", "Renata", "Sala Cadillac", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-13", "12:00", "13:00", "s8", "Marina", "Sala Solo", "Pilates solo", "Confirmada", "Avulso"],
  ["2026-05-14", "07:00", "08:00", "s11", "Lucas", "Sala Reformer", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-14", "08:00", "09:00", "s6", "Renata", "Sala Solo", "Pilates solo", "Confirmada", "Experimental"],
  ["2026-05-14", "09:00", "10:00", "s1", "Marina", "Sala Reformer", "Pilates aparelho", "Aguardando", "Mensalidade"],
  ["2026-05-14", "10:00", "11:00", "s9", "Lucas", "Sala Cadillac", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-14", "12:00", "13:00", "s7", "Renata", "Sala Solo", "Pilates solo", "Concluída", "Avulso"],
  ["2026-05-15", "08:00", "09:00", "s1", "Marina", "Sala Reformer", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-15", "08:00", "09:00", "s2", "Lucas", "Sala Cadillac", "Pilates aparelho", "Confirmada", "Mensalidade"],
  ["2026-05-15", "09:00", "10:00", "s1", "Renata", "Sala Solo", "Pilates solo", "Confirmada", "Mensalidade"],
  ["2026-05-15", "09:00", "10:00", "s6", "Marina", "Sala Reformer", "Pilates aparelho", "Confirmada", "Experimental"],
  ["2026-05-15", "12:00", "13:00", "s4", "Lucas", "Sala Clínica", "Fisioterapia", "Confirmada", "Avulso"],
  ["2026-05-15", "12:00", "13:00", "s9", "Renata", "Sala Solo", "Pilates solo", "Confirmada", "Mensalidade"],
];

const seedLeads = [
  {
    id: "l1",
    name: "Mariana Costa",
    phone: "(48) 99123-4455",
    email: "mariana.costa@email.com",
    origin: "Instagram",
    interest: "Pilates",
    status: "Novo lead",
    ownerId: "t1",
    firstContactDate: "2026-05-11",
    nextFollowUpDate: "2026-05-13",
    lossReason: "",
    notes: "Solicitou valores para Pilates 2x por semana.",
    history: "Lead recebido pelo Instagram. Aguardando primeiro contato.",
    linkedStudentId: "",
    linkedAppointmentId: "",
  },
  {
    id: "l2",
    name: "Roberto Almeida",
    phone: "(48) 99870-1100",
    email: "roberto.almeida@email.com",
    origin: "Indicação",
    interest: "Fisioterapia",
    status: "Aula experimental agendada",
    ownerId: "t2",
    firstContactDate: "2026-05-10",
    nextFollowUpDate: "2026-05-14",
    lossReason: "",
    notes: "Queixa de dor lombar. Confirmar presença.",
    history: "Contato realizado por WhatsApp. Experimental agendada.",
    linkedStudentId: "",
    linkedAppointmentId: "",
  },
  {
    id: "l3",
    name: "Carla Menezes",
    phone: "(48) 98765-2201",
    email: "carla.menezes@email.com",
    origin: "Google",
    interest: "Funcional",
    status: "Proposta enviada",
    ownerId: "t3",
    firstContactDate: "2026-05-08",
    nextFollowUpDate: "2026-05-13",
    lossReason: "",
    notes: "Comparando horários de funcional pela manhã.",
    history: "Fez experimental e recebeu proposta mensal.",
    linkedStudentId: "",
    linkedAppointmentId: "",
  },
];

const importedStudioData = globalThis.studioImportedData ?? {};
const importedArray = (key, fallback) => (Array.isArray(importedStudioData[key]) ? importedStudioData[key] : fallback);
const hasImportedAccounts = Array.isArray(importedStudioData.accounts);
const currentDataVersion = importedStudioData.version ?? "demo-v1";

const seedData = {
  dataVersion: currentDataVersion,
  settings: {
    studioName: "Software Life Pilates",
    whatsapp: "(48) 99999-0101",
    classLimit: 6,
    reminder: "24 horas antes",
  },
  students: importedArray("students", seedStudents),
  professionals: importedArray("professionals", seedProfessionals),
  suppliers: importedArray("suppliers", seedSuppliers),
  leads: importedArray("leads", seedLeads),
  modalities: importedArray("modalities", seedModalities),
  plans: importedArray("plans", seedPlans),
  enrollments: importedArray("enrollments", seedEnrollments),
  chartAccounts: seedChartAccounts,
  contracts: importedArray("contracts", []),
  accounts: importedArray("accounts", seedAccounts),
  bankMovements: importedArray("bankMovements", []),
  ofxBatches: [],
  ofxDrafts: [],
  ofxRules: seedOfxRules,
  appointments: Array.isArray(importedStudioData.appointments) ? importedStudioData.appointments : appointmentSeed.map(([date, time, endTime, studentId, teacher, room, type, status, sessionKind], index) => ({
    id: `a${index + 1}`,
    date,
    time,
    endTime,
    studentId,
    teacherId: professionalIdByName(teacher),
    room,
    type,
    status,
    sessionKind,
  })),
  blocks: Array.isArray(importedStudioData.blocks) ? importedStudioData.blocks : ["2026-05-11", "2026-05-12", "2026-05-13", "2026-05-14", "2026-05-15"].map((date, index) => ({
    id: `b${index + 1}`,
    date,
    time: "13:00",
    endTime: "15:00",
    title: "Horário Bloqueado",
    room: "Todas",
    teacherId: "all",
  })),
  payments: importedArray("payments", [
    { id: "p1", studentId: "s1", description: "Mensalidade maio", dueDate: "2026-05-05", amount: 320, status: "Pago" },
    { id: "p2", studentId: "s2", description: "Pacote fisioterapia", dueDate: "2026-05-12", amount: 480, status: "Pendente" },
    { id: "p3", studentId: "s3", description: "Mensalidade maio", dueDate: "2026-05-03", amount: 410, status: "Atrasado" },
    { id: "p4", studentId: "s4", description: "Aula avulsa", dueDate: "2026-04-28", amount: 90, status: "Pago" },
  ]),
  fiscalInvoices: importedArray("fiscalInvoices", []),
  records: importedArray("records", [
    { id: "r1", studentId: "s1", date: "2026-05-08", title: "Reavaliação postural", note: "Melhora de mobilidade torácica. Manter foco em respiração e estabilização." },
    { id: "r2", studentId: "s2", date: "2026-05-06", title: "Dor lombar", note: "Sem dor irradiada. Evoluir carga com controle e registrar resposta após sessões." },
  ]),
};

function professionalIdByName(name) {
  const compactName = normalizedText(name);
  if (compactName.includes("marina") || compactName.includes("ana")) return "t1";
  if (compactName.includes("lucas")) return "t4";
  if (compactName.includes("renata") || compactName.includes("gabriella")) return "t3";
  return "t2";
}

let state = loadState();
refreshAutoRenewalProjections();
let remoteStateReady = false;
let applyingRemoteState = false;
let remoteSaveTimer = null;
let authSession = window.PhysiofitData?.session || null;
let activePaymentFilter = "all";
let agendaMode = "week";
let currentWeekStart = toMonday(parseLocalDate(demoToday));
let editingStudentId = null;
let editingProfessionalId = null;
let editingModalityId = null;
let editingPlanId = null;
let editingSupplierId = null;
let editingChartAccountId = null;
let editingEnrollmentId = null;
let editingAppointmentId = null;
let editingLeadId = null;
let _pendingEnrollLeadId = null;
let _pendingStudentLeadId = null;
let editingAccountId = null;
let settlingAccountId = null;
let editingContractId = null;
let selectedReconMovementId = null;
let selectedReconTitleId = null;

const viewTitles = {
  dashboard: "Painel de controle",
  crm: "CRM",
  agenda: "Agenda",
  students: "Cadastros",
  patientEditor: "Cadastro de cliente",
  enrollments: "Matrículas",
  professionals: "Profissionais",
  professionalEditor: "Cadastro de profissional",
  suppliers: "Fornecedores",
  modalities: "Modalidades",
  modalityEditor: "Cadastro de modalidade",
  plans: "Planos",
  planEditor: "Cadastro de plano",
  monthlyPayments: "Mensalidades",
  fiscal: "NFS-e",
  contracts: "Contratos",
  accountsPayable: "Contas a Pagar",
  accountsReceivable: "Contas a Receber",
  ofxImport: "Importar OFX",
  bankReconciliation: "Conciliação Bancária",
  cashFlow: "Fluxo de Caixa",
  dre: "DRE",
  chartAccounts: "Plano de Contas",
  finance: "Financeiro",
  records: "Prontuário e presenças",
  settings: "Configurações",
};

const viewPaths = {
  dashboard: "/",
  crm: "/leads",
  agenda: "/agenda",
  students: "/alunos",
  patientEditor: "/aluno",
  enrollments: "/matriculas",
  professionals: "/profissionais",
  professionalEditor: "/profissional",
  suppliers: "/fornecedores",
  modalities: "/modalidades",
  modalityEditor: "/modalidade",
  plans: "/planos",
  planEditor: "/plano",
  monthlyPayments: "/mensalidades",
  fiscal: "/fiscal",
  contracts: "/contratos",
  accountsPayable: "/contas-pagar",
  accountsReceivable: "/contas-receber",
  ofxImport: "/importar-ofx",
  bankReconciliation: "/conciliacao",
  cashFlow: "/fluxo-caixa",
  dre: "/dre",
  chartAccounts: "/plano-contas",
  finance: "/financeiro",
  records: "/prontuario",
  settings: "/configuracoes",
};

const pathToView = Object.fromEntries(Object.entries(viewPaths).map(([k, v]) => [v, k]));

const menuGroupByView = {
  dashboard: "dashboard",
  crm: "crm",
  agenda: "sessions",
  students: "registers",
  patientEditor: "registers",
  enrollments: "registers",
  professionals: "registers",
  professionalEditor: "registers",
  suppliers: "registers",
  modalities: "registers",
  modalityEditor: "registers",
  plans: "registers",
  planEditor: "registers",
  monthlyPayments: "finance",
  fiscal: "finance",
  contracts: "finance",
  accountsPayable: "finance",
  accountsReceivable: "finance",
  ofxImport: "finance",
  bankReconciliation: "finance",
  cashFlow: "finance",
  dre: "finance",
  chartAccounts: "finance",
  finance: "finance",
  records: "records",
  settings: "settings",
};

const leadStatuses = ["Novo lead", "Contato iniciado", "Respondido", "Visita agendada", "Visita realizada", "Proposta enviada", "Matriculado", "Perdido"];
const leadChannels = ["WhatsApp", "Instagram", "E-mail", "Web Site", "Anúncio", "Presencial", "Atendimento presencial", "Outro"];
const leadOrigins = ["WhatsApp", "Instagram", "Google", "Indicação", "Web Site", "Anúncio", "Presencial", "Parceria", "Outro"];

const modalSchemas = {
  lead: {
    title: "Novo lead",
    submit: "Salvar lead",
    fields: [
      { name: "name", label: "Nome", type: "text" },
      { name: "phone", label: "Telefone", type: "tel" },
      { name: "email", label: "E-mail", type: "email" },
      { name: "instagram", label: "Instagram", type: "text", required: false },
      { name: "origin", label: "Origem do lead", type: "select", options: ["", ...leadOrigins], value: "" },
      { name: "entryChannel", label: "Canal de entrada", type: "select", options: ["", ...leadChannels], value: "" },
      { name: "interest", label: "Interesse", type: "select", options: ["", "Pilates", "Fisioterapia", "RPG", "Funcional", "Avaliação", "Outro"], value: "" },
      { name: "status", label: "Status", type: "select", options: leadStatuses, value: "Novo lead" },
      { name: "entryDate", label: "Data de entrada", type: "date", value: demoToday },
      { name: "visitDate", label: "Data da visita", type: "date", value: "", required: false },
      { name: "ownerId", label: "Responsável", type: "professionalOptional", required: false },
      { name: "nextFollowUpDate", label: "Próximo follow-up", type: "date", value: demoToday },
    ],
    handler: (values) => {
      const current = editingLeadId ? state.leads.find((item) => item.id === editingLeadId) : {};
      const normalized = normalizeLead({ ...current, id: editingLeadId || uid("l"), ...values }, state.leads.length, false);
      // Auto-link to existing student when phone matches (handles Brazilian 9th digit)
      if (!normalized.linkedStudentId && normalized.phone) {
        const match = findStudentByPhone(normalized.phone);
        if (match) normalized.linkedStudentId = match.id;
      }
      if (editingLeadId) {
        state.leads = state.leads.map((item) => (item.id === editingLeadId ? normalized : item));
        if (normalized.linkedAppointmentId && normalized.visitDate) {
          state.appointments = state.appointments.map((appt) =>
            appt.id === normalized.linkedAppointmentId ? { ...appt, date: normalized.visitDate } : appt
          );
        }
      } else {
        state.leads.unshift(normalized);
      }
    },
  },
  leadVisit: {
    title: "Visita presencial",
    submit: "Registrar visita",
    fields: [
      { name: "name", label: "Nome", type: "text" },
      { name: "phone", label: "Telefone", type: "tel" },
      { name: "email", label: "E-mail", type: "email", required: false },
      { name: "interest", label: "Interesse", type: "select", options: ["Pilates", "Fisioterapia", "RPG", "Funcional", "Avaliação", "Outro"], value: "Pilates" },
      { name: "visitDate", label: "Data da visita", type: "date", value: demoToday },
      { name: "ownerId", label: "Responsável", type: "professionalOptional" },
      { name: "notes", label: "Observações", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      state.leads.unshift(normalizeLead({
        id: uid("l"),
        ...values,
        origin: "Presencial",
        entryChannel: "Atendimento presencial",
        status: "Visita realizada",
        entryDate: values.visitDate || demoToday,
        history: `Visita presencial registrada em ${dateLabel(values.visitDate || demoToday)}.`,
      }, state.leads.length, false));
    },
  },
  appointment: {
    title: "Agendar sessão",
    submit: "Salvar sessão",
    fields: [
      { name: "date", label: "Data", type: "date", value: demoToday },
      { name: "time", label: "Horário inicial", type: "time", value: "09:00" },
      { name: "endTime", label: "Horário final", type: "time", value: "10:00" },
      { name: "studentId", label: "Cliente", type: "student" },
      { name: "teacherId", label: "Profissional", type: "professional" },
      { name: "type", label: "Modalidade", type: "modality" },
      { name: "sessionKind", label: "Tipo de sessão", type: "select", options: ["Mensalidade", "Experimental", "Avulso"] },
      { name: "status", label: "Status", type: "select", options: ["Agendada", "Confirmada", "Aguardando", "Visita realizada", "Faltou", "Falta justificada", "Cancelada", "Reposta"] },
      { name: "notes", label: "Observação", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      if (editingAppointmentId) {
        let savedAppointment = null;
        state.appointments = state.appointments.map((item) => {
          if (item.id !== editingAppointmentId) return item;
          const dateChanged = values.date && values.date !== item.date;
          const timeChanged = values.time && values.time !== item.time;
          savedAppointment = { ...item, ...values, wasRescheduled: dateChanged || timeChanged || !!item.wasRescheduled, notes: appendNote(values.notes || item.notes, "Remarcação") };
          return savedAppointment;
        });
        if (values.date) {
          state.leads = state.leads.map((lead) =>
            (lead.linkedAppointmentId === editingAppointmentId || savedAppointment?.leadId === lead.id)
              ? { ...lead, visitDate: values.date }
              : lead
          );
        }
        if (values.status === "Visita realizada" && savedAppointment) {
          updateLeadAfterVisit(savedAppointment);
        }
      } else {
        state.appointments.push({ id: uid("a"), ...values });
      }
    },
  },
  block: {
    title: "Agenda livre / bloqueio",
    submit: "Salvar bloqueio",
    fields: [
      { name: "date", label: "Data", type: "date", value: demoToday },
      { name: "time", label: "Inicio", type: "time", value: "13:00" },
      { name: "endTime", label: "Fim", type: "time", value: "15:00" },
      { name: "title", label: "Descrição", type: "text", value: "Horário Bloqueado" },
      { name: "teacherId", label: "Profissional", type: "professionalWithAll" },
    ],
    handler: (values) => {
      if (!Array.isArray(state.blocks)) state.blocks = [];
      state.blocks.push({ id: uid("b"), ...values });
    },
  },
  student: {
    title: "Novo cliente",
    submit: "Salvar cliente",
    fields: [
      { name: "_h1", label: "Identificação", type: "heading" },
      { name: "name", label: "Nome completo", type: "text" },
      { name: "cpf", label: "CPF", type: "text", required: false },
      { name: "birthDate", label: "Data de nascimento", type: "date", required: false },
      { name: "gender", label: "Sexo", type: "select", options: ["Feminino", "Masculino"], value: "Feminino", required: false },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo" },
      { name: "profession", label: "Profissão", type: "text", value: "", required: false },
      { name: "origin", label: "Origem do cadastro", type: "text", value: "", required: false },
      { name: "_h2", label: "Contato e endereço", type: "heading" },
      { name: "email", label: "E-mail", type: "email", required: false },
      { name: "phone", label: "Celular", type: "tel", required: false },
      { name: "alternatePhone", label: "Telefone alternativo", type: "tel", value: "", required: false },
      { name: "zip", label: "CEP", type: "text", value: "", required: false },
      { name: "address", label: "Endereço", type: "text", value: "", required: false },
      { name: "addressNumber", label: "Número", type: "text", value: "", required: false },
      { name: "neighborhood", label: "Bairro", type: "text", value: "", required: false },
      { name: "city", label: "Cidade", type: "text", value: "", required: false },
      { name: "stateCode", label: "UF", type: "text", value: "", required: false },
      { name: "_henroll", label: "Matrícula (opcional)", type: "heading", enroll: true },
      { name: "modalityId", label: "Modalidade", type: "modalityId", required: false, enroll: true },
      { name: "planType", label: "Tipo de plano", type: "select", options: ["", "Avulsa", "Pacote", "Mensal", "Trimestral", "Semestral"], value: "", required: false, enroll: true },
      { name: "planId", label: "Plano", type: "planId", required: false, enroll: true },
      { name: "professionalId", label: "Profissional", type: "professionalOptional", required: false, enroll: true },
      { name: "startDate", label: "Data de início", type: "date", value: demoToday, required: false, enroll: true },
      { name: "firstPaymentDate", label: "Data do 1º pagamento", type: "date", value: demoToday, required: false, enroll: true },
      { name: "sessions", label: "Sessões por semana", type: "number", value: "", required: false, enroll: true },
      { name: "mondayTime", label: "Segunda-feira", type: "time", value: "", required: false, enroll: true },
      { name: "tuesdayTime", label: "Terça-feira", type: "time", value: "", required: false, enroll: true },
      { name: "wednesdayTime", label: "Quarta-feira", type: "time", value: "", required: false, enroll: true },
      { name: "thursdayTime", label: "Quinta-feira", type: "time", value: "", required: false, enroll: true },
      { name: "fridayTime", label: "Sexta-feira", type: "time", value: "", required: false, enroll: true },
      { name: "monthlyValue", label: "Valor da mensalidade", type: "number", value: "", required: false, enroll: true },
      { name: "paymentMethod", label: "Forma de pagamento", type: "select", options: ["", "Pix", "Cartão de Débito", "Cartão de Crédito", "Boleto", "Dinheiro", "Transferência"], value: "", required: false, enroll: true },
      { name: "_h4", label: "Saúde / Prontuário", type: "heading" },
      { name: "clinicalGoal", label: "Objetivo do cliente", type: "textarea", value: "", required: false },
      { name: "restrictions", label: "Restrições / dores / contraindicações", type: "textarea", value: "", required: false },
      { name: "medication", label: "Medicamentos / observações de saúde", type: "textarea", value: "", required: false },
      { name: "height", label: "Altura", type: "text", value: "", required: false },
      { name: "weight", label: "Peso", type: "text", value: "", required: false },
      { name: "_h5", label: "Responsáveis e emergência", type: "heading" },
      { name: "responsible", label: "Responsável financeiro", type: "text", value: "", required: false },
      { name: "responsiblePhone", label: "Contato do responsável", type: "tel", value: "", required: false },
      { name: "emergencyContact", label: "Contato de emergência", type: "text", value: "", required: false },
      { name: "emergencyPhone", label: "Telefone de emergência", type: "tel", value: "", required: false },
      { name: "notes", label: "Observações gerais", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      const enrollFields = ["modalityId","planType","planId","professionalId","startDate","sessions","mondayTime","tuesdayTime","wednesdayTime","thursdayTime","fridayTime","monthlyValue","paymentMethod","firstPaymentDate","dueDay","registrationFee","paymentMethod","contractTemplate","contractStatus","freeSchedule","autoRenew","dueNotice","sessionReminder","financialNotes"];
      const enrollValues = Object.fromEntries(enrollFields.map(k => [k, values[k]]));
      enrollFields.forEach(k => delete values[k]);
      const hasEnroll = !!(enrollValues.modalityId && enrollValues.planId);
      const newStudent = { id: uid("s"), gender: "F", lastPresence: "-", membership: hasEnroll ? "Matriculado" : "Avulsa", ...values };
      state.students.push(newStudent);
      const leadId = _pendingStudentLeadId;
      if (leadId) {
        state.leads = state.leads.map((lead) =>
          lead.id === leadId ? { ...lead, linkedStudentId: newStudent.id } : lead
        );
        _pendingStudentLeadId = null;
      }
      if (enrollValues.modalityId && enrollValues.planId) {
        const plan = state.plans.find(p => p.id === enrollValues.planId);
        const enrollmentId = uid("e");
        const normalized = normalizeEnrollment({
          id: enrollmentId,
          studentId: newStudent.id,
          ...enrollValues,
          monthlyValue: Number(enrollValues.monthlyValue || plan?.value || 0),
          sessions: Number(enrollValues.sessions || weeklySessionsFromPlan(plan) || 0),
          startDate: enrollValues.startDate || demoToday,
          endDate: calculatedEnrollmentEndDate(enrollValues.startDate || demoToday, enrollValues.planType || plan?.type),
          firstPaymentDate: enrollValues.firstPaymentDate || enrollValues.startDate || demoToday,
          planType: planTypeLabel(enrollValues.planType || plan?.type),
          leadId: leadId || "",
          status: "Ativa",
          dueDay: Number((enrollValues.firstPaymentDate || enrollValues.startDate || demoToday).split("-")[2]) || 10,
        }, state.enrollments.length);
        state.enrollments.push(normalized);
        if (leadId) {
          state.leads = state.leads.map(lead =>
            lead.id === leadId ? { ...lead, status: "Matriculado", linkedEnrollmentId: enrollmentId, history: `${lead.history || ""}\nMatriculado em ${dateLabel(demoToday)}.`.trim() } : lead
          );
        }
        ensureEnrollmentFinancialTitles(normalized);
        ensureEnrollmentAppointments(normalized);
      }
    },
  },
  supplier: {
    title: "Novo fornecedor",
    submit: "Salvar fornecedor",
    fields: [
      { name: "name", label: "Razão social / Nome", type: "text", required: false },
      { name: "document", label: "CPF/CNPJ", type: "text", value: "", required: false },
      { name: "supplierType", label: "Tipo", type: "select", options: ["Pessoa jurídica", "Pessoa física", "Sem documento"], value: "Pessoa jurídica", required: false },
      { name: "email", label: "E-mail", type: "email", value: "", required: false },
      { name: "phone", label: "Telefone", type: "tel", value: "", required: false },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo", required: false },
      { name: "notes", label: "Observações", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      const current = editingSupplierId ? state.suppliers.find((item) => item.id === editingSupplierId) : {};
      const payload = normalizeSupplier({ ...current, id: editingSupplierId || uid("f"), ...values }, state.suppliers.length);
      if (editingSupplierId) state.suppliers = state.suppliers.map((item) => (item.id === editingSupplierId ? payload : item));
      else state.suppliers.push(payload);
      editingSupplierId = null;
    },
  },
  modality: {
    title: "Modalidade",
    submit: "Salvar modalidade",
    fields: [
      { name: "name", label: "Nome da modalidade", type: "text", value: "" },
      { name: "maxPatients", label: "Máx. pacientes", type: "number", value: 1 },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo" },
      { name: "color", label: "Cor", type: "color", value: "#6043c2" },
      { name: "notes", label: "Observações", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      values.maxPatients = Number(values.maxPatients || 1);
      values.notes = values.notes || "";
      const current = editingModalityId ? state.modalities.find((item) => item.id === editingModalityId) : {};
      const payload = normalizeModality({ ...current, id: editingModalityId || uid("m"), createdAt: current?.createdAt || new Date().toISOString(), ...values }, state.modalities.length);
      if (editingModalityId) state.modalities = state.modalities.map((item) => (item.id === editingModalityId ? payload : item));
      else state.modalities.push(payload);
      editingModalityId = null;
    },
  },
  plan: {
    title: "Plano",
    submit: "Salvar plano",
    fields: [
      { name: "name", label: "Nome do plano", type: "text", value: "" },
      { name: "modalityId", label: "Modalidade", type: "modalityId" },
      { name: "type", label: "Tipo de plano", type: "select", options: ["Avulsa", "Pacote", "Mensal", "Trimestral", "Semestral"], value: "Mensal" },
      { name: "chartAccountId", label: "Linha de receita no plano de contas", type: "revenueChartAccount" },
      { name: "value", label: "Valor", type: "number", value: "0.00" },
      { name: "sessions", label: "Sessões inclusas", type: "number", value: 0 },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo" },
      { name: "notes", label: "Observações", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      values.value = Number(values.value || 0).toFixed(2);
      values.sessions = Number(values.sessions || 0);
      values.type = planTypeLabel(values.type);
      values.chartAccountId = values.chartAccountId || revenueChartAccountForModality(values.modalityId)?.id || "";
      values.notes = values.notes || "";
      const current = editingPlanId ? state.plans.find((item) => item.id === editingPlanId) : {};
      const payload = { ...createEmptyPlan(), ...current, id: editingPlanId || uid("pl"), ...values, value: Number(values.value) };
      if (editingPlanId) state.plans = state.plans.map((item) => (item.id === editingPlanId ? payload : item));
      else state.plans.push(payload);
      syncPlanChartAccountToFinancialTitles(payload.id, payload.chartAccountId);
      editingPlanId = null;
      renderPlanOptions();
      renderEnrollmentOptions();
    },
  },
  enrollment: {
    title: "Matrícula",
    submit: "Salvar matrícula",
    fields: [
      { name: "studentId", label: "Cliente", type: "student" },
      { name: "modalityId", label: "Modalidade", type: "modalityId" },
      { name: "planType", label: "Tipo de plano", type: "select", options: ["", "Avulsa", "Pacote", "Mensal", "Trimestral", "Semestral"], value: "" },
      { name: "planId", label: "Plano", type: "planId" },
      { name: "professionalId", label: "Profissional", type: "professional" },
      { name: "startDate", label: "Data da matrícula", type: "date", value: demoToday },
      { name: "endDate", label: "Data final", type: "date", value: "2026-12-31" },
      { name: "dueDay", label: "Dia do vencimento", type: "number", value: 10 },
      { name: "firstPaymentDate", label: "Data do 1º pagamento", type: "date", value: demoToday, required: false },
      { name: "registrationFee", label: "Taxa de matrícula", type: "number", value: 0, required: false },
      { name: "dueNotice", label: "Aviso de vencimento", type: "select", options: ["Sim", "Não"], value: "Sim" },
      { name: "sessionReminder", label: "Lembrete de sessão", type: "select", options: ["Sim", "Não"], value: "Sim" },
      { name: "monthlyValue", label: "Valor da mensalidade", type: "number", value: 0 },
      { name: "discount", label: "Desconto (R$)", type: "number", value: 0, required: false },
      { name: "discountNotes", label: "Motivo do desconto", type: "textarea", value: "", required: false },
      { name: "paymentMethod", label: "Forma de pagamento", type: "select", options: ["Pix", "Cartão de Débito", "Cartão de Crédito", "Boleto", "Dinheiro", "Transferência"], value: "Pix" },
      { name: "autoRenew", label: "Renovação automática", type: "select", options: ["Sim", "Não"], value: "Sim" },
      { name: "freeSchedule", label: "Horário livre", type: "select", options: ["Não", "Sim"], value: "Não" },
      { name: "sessions", label: "Sessões por semana", type: "number", value: 1 },
      { name: "mondayTime", label: "Segunda-feira", type: "time", value: "", required: false },
      { name: "tuesdayTime", label: "Terça-feira", type: "time", value: "", required: false },
      { name: "wednesdayTime", label: "Quarta-feira", type: "time", value: "", required: false },
      { name: "thursdayTime", label: "Quinta-feira", type: "time", value: "", required: false },
      { name: "fridayTime", label: "Sexta-feira", type: "time", value: "", required: false },
      { name: "financialNotes", label: "Observação financeira", type: "textarea", value: "", required: false },
      { name: "contractTemplate", label: "Contrato", type: "select", options: ["Contrato de matrícula", "Termo avulso", "Sem contrato"], value: "Contrato de matrícula" },
      { name: "contractStatus", label: "Assinatura do contrato", type: "select", options: ["Não enviado", "Pendente", "Assinado"], value: "Pendente" },
      { name: "lockStartDate", label: "Início férias/trancamento", type: "date", value: "", required: false },
      { name: "lockEndDate", label: "Fim férias/trancamento", type: "date", value: "", required: false },
      { name: "status", label: "Status", type: "select", options: ["Ativa", "Pendente", "Suspensa", "Cancelada"], value: "Ativa" },
      { name: "notes", label: "Observações gerais", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      const plan = state.plans.find((item) => item.id === values.planId);
      const enrollmentId = editingEnrollmentId || uid("e");
      const previousStatus = editingEnrollmentId
        ? state.enrollments.find((e) => e.id === editingEnrollmentId)?.status
        : null;
      const normalized = normalizeEnrollment({
        id: enrollmentId,
        ...values,
        modalityId: values.modalityId || plan?.modalityId || "",
        endDate: values.endDate || calculatedEnrollmentEndDate(values.startDate, values.planType || plan?.type),
        firstPaymentDate: values.firstPaymentDate || values.startDate,
        planType: planTypeLabel(values.planType || plan?.type),
        monthlyValue: Number(values.monthlyValue || plan?.value || 0),
        dueDay: Number(values.dueDay || 0),
        registrationFee: Number(values.registrationFee || 0),
        sessions: Number(values.sessions || weeklySessionsFromPlan(plan) || 0),
        leadId: _pendingEnrollLeadId || (editingEnrollmentId ? state.enrollments.find((e) => e.id === editingEnrollmentId)?.leadId : "") || "",
      }, state.enrollments.length);
      if (editingEnrollmentId) {
        state.enrollments = state.enrollments.map((item) => (item.id === editingEnrollmentId ? normalized : item));
      } else {
        state.enrollments.push(normalized);
      }
      if (!editingEnrollmentId && _pendingEnrollLeadId) {
        state.leads = state.leads.map((lead) => {
          if (lead.id !== _pendingEnrollLeadId) return lead;
          return {
            ...lead,
            status: "Matriculado",
            linkedEnrollmentId: enrollmentId,
            history: `${lead.history || ""}\nMatriculado em ${dateLabel(demoToday)}.`.trim(),
          };
        });
        _pendingEnrollLeadId = null;
      }
      ensureEnrollmentFinancialTitles(normalized);
      ensureEnrollmentAppointments(normalized);
      if (normalized.status === "Cancelada" && previousStatus && previousStatus !== "Cancelada") {
        cancelEnrollmentFutureItems(normalized);
      } else {
        ensureAutoRenewalTitles(normalized);
      }
    },
  },
  payment: {
    title: "Nova cobrança",
    submit: "Salvar cobrança",
    fields: [
      { name: "studentId", label: "Cliente", type: "student" },
      { name: "description", label: "Descrição", type: "text", value: "Mensalidade" },
      { name: "dueDate", label: "Vencimento", type: "date", value: demoToday },
      { name: "amount", label: "Valor", type: "number", value: 300 },
      { name: "status", label: "Status", type: "select", options: ["Pendente", "Pago", "Atrasado"] },
    ],
    handler: (values) => state.payments.push({ id: uid("p"), ...values, amount: Number(values.amount) }),
  },
  contract: {
    title: "Adicionar contrato",
    submit: "Salvar contrato",
    fields: [
      { name: "description", label: "Descrição", type: "text", value: "" },
      { name: "person", label: "Fornecedor", type: "text", value: "" },
      { name: "document", label: "CPF/CNPJ", type: "text", value: "", required: false },
      { name: "chartAccountId", label: "Plano de contas", type: "chartAccount" },
      { name: "amount", label: "Valor previsto (R$)", type: "number", value: 0 },
      { name: "dayOfMonth", label: "Dia do mês", type: "select", options: Array.from({length: 28}, (_, i) => String(i + 1)), value: "5" },
      { name: "startDate", label: "Início", type: "date", value: "2026-07-01" },
      { name: "endDate", label: "Fim (deixe vazio = indefinido)", type: "date", value: "", required: false },
      { name: "paymentMethod", label: "Forma de pagamento", type: "select", options: ["Pix", "Boleto", "Débito automático", "Transferência", "Cartão de Crédito", "Dinheiro"], value: "Pix" },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo" },
    ],
    handler: (values) => {
      const payload = {
        id: editingContractId || uid("ct"),
        description: values.description || "",
        person: values.person || "",
        document: values.document || "",
        supplierId: upsertSupplierFromAccount(values.person, values.document) || "",
        chartAccountId: values.chartAccountId || "",
        amount: Number(values.amount || 0),
        dayOfMonth: Number(values.dayOfMonth || 5),
        startDate: values.startDate || demoToday,
        endDate: values.endDate || "",
        paymentMethod: values.paymentMethod || "Pix",
        status: values.status || "Ativo",
      };
      if (editingContractId) {
        state.contracts = state.contracts.map((c) => c.id === editingContractId ? payload : c);
      } else {
        state.contracts.push(payload);
      }
      ensureContractForecasts();
      editingContractId = null;
    },
  },
  account: {
    title: "Adicionar conta",
    submit: "Salvar conta",
    fields: [
      { name: "direction", label: "Pagar/Receber", type: "select", options: ["Pagar", "Receber"], value: "Pagar" },
      { name: "competenceDate", label: "Competência (mês/ano)", type: "month", value: demoToday.slice(0, 7) },
      { name: "forecastDate", label: "Previsão", type: "date", value: demoToday },
      { name: "amount", label: "Valor", type: "currency", value: 0 },
      { name: "description", label: "Descrição", type: "text", value: "Nova conta" },
      { name: "person", label: "Cliente/Fornecedor", type: "personLookup", value: "" },
      { name: "document", label: "CPF/CNPJ", type: "text", value: "" },
      { name: "chartAccountId", label: "Plano de contas", type: "chartAccount" },
      { name: "paymentMethod", label: "Forma de pagamento", type: "select", options: ["Pix", "Cartão de Débito", "Cartão de Crédito", "Boleto", "Transferência", "Dinheiro"], value: "Pix" },
    ],
    handler: (values) => {
      const current = editingAccountId ? state.accounts.find((item) => item.id === editingAccountId) : {};
      const currentSupplier = supplierById(current?.supplierId || values.supplierId);
      const supplierId = values.direction === "Pagar" ? upsertSupplierFromAccount(values.person, values.document) || current?.supplierId || "" : "";
      const supplier = supplierById(supplierId) || currentSupplier;
      const newAmount = parseBrAmount(values.amount);
      // If the title was already fully settled (baixado), keep it settled when the value is edited —
      // e.g. updating a payroll title from its registered forecast — instead of leaving a residual "Parcial".
      const wasFullySettled = !!current && Number(current.paidAmount || 0) > 0 && Number(current.openAmount || 0) <= 0;
      const paidAmount = wasFullySettled ? newAmount : (current?.paidAmount || 0);
      const payload = {
        ...current,
        id: editingAccountId || uid("cp"),
        ...values,
        competenceDate: values.competenceDate
          ? (values.competenceDate.length === 7 ? `${values.competenceDate}-01` : values.competenceDate)
          : (current?.competenceDate || demoToday),
        supplierId,
        person: values.person || supplier?.name || "",
        document: values.document || supplier?.document || "",
        amount: newAmount,
        originalAmount: newAmount,
        paidAmount,
        openAmount: Math.max(0, newAmount - paidAmount),
        dueDate: values.forecastDate || current?.dueDate || values.competenceDate || demoToday,
        modalityId: current?.modalityId || "",
        teacherId: current?.teacherId || "",
        paidDate: current?.paidDate || "",
        linkedBankMovementId: current?.linkedBankMovementId || "",
        reconciliationStatus: current?.reconciliationStatus || "unreconciled",
      };
      payload.status = accountAutoStatus(payload);
      if (editingAccountId) {
        state.accounts = state.accounts.map((item) => (item.id === editingAccountId ? payload : item));
      } else {
        // Duplicate detection: warn if a contract forecast already exists for same direction+month+supplier
        if (payload.direction === "Pagar" && payload.forecastDate) {
          const month = payload.forecastDate.slice(0, 7);
          const duplicate = state.accounts.find(
            (acc) =>
              acc.id !== payload.id &&
              acc.contractId &&
              acc.direction === "Pagar" &&
              acc.forecastDate &&
              acc.forecastDate.startsWith(month) &&
              acc.supplierId &&
              acc.supplierId === payload.supplierId &&
              Number(accountOriginalAmount(acc)) === Number(payload.amount || 0)
          );
          if (duplicate) {
            const ok = confirm(
              `Atenção: já existe um título de previsão de contrato para "${payload.person || "este fornecedor"}" em ${month}.\n\nDeseja continuar e incluir mesmo assim?`
            );
            if (!ok) return;
          }
        }
        state.accounts.push(payload);
      }
      syncEnrollmentPaymentFromAccount(payload);
      editingAccountId = null;
    },
  },
  accountSettlement: {
    title: "Baixar conta",
    submit: "Confirmar baixa",
    fields: [
      { name: "paidDate", label: "Pagamento", type: "date", value: demoToday },
      { name: "bankAccountId", label: "Banco", type: "bankAccount", value: "itau" },
      { name: "paidAmount", label: "Valor pago/recebido", type: "currency", value: 0 },
      { name: "notes", label: "Observação", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      const account = state.accounts.find((item) => item.id === settlingAccountId);
      if (!account) return;
      const originalAmount = accountOriginalAmount(account);
      const paymentValue = parseBrAmount(values.paidAmount) || accountOpenAmount(account) || originalAmount;
      account.paidDate = values.paidDate || demoToday;
      account.bankAccountId = values.bankAccountId || account.bankAccountId || "";
      account.paymentMethod = bankAccountLabel(account.bankAccountId) || account.paymentMethod || "";
      account.paidAmount = Math.min(originalAmount, accountPaidAmount(account) + paymentValue);
      account.openAmount = Math.max(0, originalAmount - account.paidAmount);
      account.reconciliationStatus = account.linkedBankMovementId ? "reconciled" : "manual";
      account.notes = values.notes || account.notes || "";
      account.status = accountAutoStatus(account);
      syncEnrollmentPaymentFromAccount(account);
      settlingAccountId = null;
    },
  },
  chartAccount: {
    title: "Conta contábil",
    submit: "Salvar plano de contas",
    fields: chartAccountFields(),
    handler: saveChartAccountModal,
  },
  record: {
    title: "Novo registro clínico",
    submit: "Salvar registro",
    fields: [
      { name: "studentId", label: "Cliente", type: "student" },
      { name: "date", label: "Data", type: "date", value: demoToday },
      { name: "title", label: "Título", type: "text", value: "Evolução" },
      { name: "note", label: "Observações", type: "textarea" },
    ],
    handler: (values) => state.records.unshift({ id: uid("r"), ...values }),
  },
};

function chartAccountFields() {
  return [
    { name: "code", label: "Código", type: "text", value: "" },
    { name: "name", label: "Conta", type: "text", value: "" },
    { name: "dreGroup", label: "Estrutura DRE", type: "select", options: ["(+) Faturamento Bruto", "(-) Impostos sob Venda", "(-) Custos", "(-) Despesas", "(-) IR/CSLL", "Patrimonial"], value: "(-) Despesas" },
    { name: "package", label: "Pacote", type: "select", options: ["Receitas", "Custos", "Despesas Comerciais", "Despesas com Pessoal", "Despesas com Infraestrutura", "Despesas com Tecnologia", "Despesas Gerais", "Despesas Tributárias", "Despesas Financeiras", "Imposto de Renda", "Capex", "Investimentos", "Aporte", "Empréstimos", "Adiantamentos", "Transitório"], value: "Despesas Gerais" },
    { name: "dfcDescription", label: "Descrição DFC", type: "text", value: "Despesas" },
    { name: "dfcGroup", label: "Grupo DFC", type: "select", options: ["Atividades Operacionais", "Atividades de Investimento", "Atividades de Financiamento", "Transitório"], value: "Atividades Operacionais" },
    { name: "activity", label: "ESTRUTURA DFC", type: "select", options: ["Operacional", "Investimento", "Financiamento", "Transitório"], value: "Operacional" },
    { name: "nature", label: "Natureza", type: "select", options: ["Receita", "Despesa", "Patrimonial", "Entrada", "Saída"], value: "Despesa" },
    { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo" },
  ];
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return normalizeState(structuredClone(seedData));
  try {
    const parsed = JSON.parse(saved);
    if (parsed.dataVersion !== seedData.dataVersion) return normalizeState(structuredClone(seedData));
    return normalizeState(parsed);
  } catch {
    return normalizeState(structuredClone(seedData));
  }
}

function deletedEntityKey(collection, id) {
  return id ? `${collection}:${id}` : "";
}

function deletedEntityKeys(collection, ids) {
  return ids.map((id) => deletedEntityKey(collection, id)).filter(Boolean);
}

function isDeletedEntity(data, collection, id) {
  return Array.isArray(data.deletedEntityIds) && data.deletedEntityIds.includes(deletedEntityKey(collection, id));
}

function rememberDeletedEntities(collection, ids) {
  const keys = deletedEntityKeys(collection, Array.isArray(ids) ? ids : [ids]);
  if (!keys.length) return;
  state.deletedEntityIds = [...new Set([...(state.deletedEntityIds || []), ...keys])];
}

function filterDeletedEntities(data, collection, items) {
  return items.filter((item) => !isDeletedEntity(data, collection, item.id));
}

function normalizeState(data) {
  const normalized = {
    ...structuredClone(seedData),
    ...data,
    blocks: Array.isArray(data.blocks) ? data.blocks : structuredClone(seedData.blocks),
  };
  normalized.deletedEntityIds = Array.isArray(data.deletedEntityIds) ? [...new Set(data.deletedEntityIds.filter(Boolean))] : [];
  normalized.students = filterDeletedEntities(normalized, "students", normalized.students).map((item, index) => normalizeStudent(normalizeTextFields(item), index));
  normalized.leads = filterDeletedEntities(normalized, "leads", Array.isArray(data.leads) ? data.leads : structuredClone(seedData.leads)).map((item, index) => normalizeLead(normalizeTextFields(item), index, false));
  normalized.professionals = filterDeletedEntities(normalized, "professionals", Array.isArray(data.professionals) ? data.professionals : structuredClone(seedData.professionals)).map((item, index) => normalizeProfessional(normalizeTextFields(item), index));
  const allRawSuppliers = Array.isArray(data.suppliers) ? data.suppliers : [];
  const savedSuppliers = filterDeletedEntities(normalized, "suppliers", allRawSuppliers);
  const allSavedSupplierKeys = new Set(allRawSuppliers.map((item) => normalizedText(`${item.name ?? ""}-${item.document ?? ""}`)));
  const mergedSuppliers = allRawSuppliers.length
    ? [...savedSuppliers, ...filterDeletedEntities(normalized, "suppliers", seedData.suppliers).filter((item) => !allSavedSupplierKeys.has(normalizedText(`${item.name}-${item.document}`)))]
    : filterDeletedEntities(normalized, "suppliers", structuredClone(seedData.suppliers));
  const allNormalizedSuppliers = mergedSuppliers.map((item, index) => normalizeSupplier(normalizeTextFields(item), index));
  const seenSupplierKeys = new Set();
  normalized.suppliers = allNormalizedSuppliers.filter((item) => {
    const key = normalizedText(`${item.name}-${item.document}`);
    if (seenSupplierKeys.has(key)) return false;
    seenSupplierKeys.add(key);
    return true;
  });
  normalized.modalities = filterDeletedEntities(normalized, "modalities", Array.isArray(data.modalities) ? data.modalities : structuredClone(seedData.modalities)).map((item, index) => normalizeModality(normalizeTextFields(item), index));
  const allRawPlans = Array.isArray(data.plans) ? data.plans : [];
  const savedPlans = filterDeletedEntities(normalized, "plans", allRawPlans);
  const allSavedPlanNames = new Set(allRawPlans.map((item) => normalizedText(item.name ?? "")));
  const mergedPlans = allRawPlans.length
    ? [...savedPlans, ...filterDeletedEntities(normalized, "plans", seedData.plans).filter((item) => !allSavedPlanNames.has(normalizedText(item.name)))]
    : filterDeletedEntities(normalized, "plans", structuredClone(seedData.plans));
  const seenPlanIds = new Set();
  normalized.plans = mergedPlans
    .map((item, index) => normalizePlan(normalizeTextFields(item), index))
    .reverse()
    .filter((p) => { if (seenPlanIds.has(p.id)) return false; seenPlanIds.add(p.id); return true; })
    .reverse();
  const allRawEnrollments = Array.isArray(data.enrollments) ? data.enrollments : [];
  const savedEnrollments = filterDeletedEntities(normalized, "enrollments", allRawEnrollments);
  const allSavedEnrollmentKeys = new Set(allRawEnrollments.map((item) => normalizedText(`${item.studentId ?? ""}-${item.planId ?? ""}-${item.startDate ?? ""}`)));
  const mergedEnrollments = allRawEnrollments.length
    ? [...savedEnrollments, ...filterDeletedEntities(normalized, "enrollments", seedData.enrollments).filter((item) => !allSavedEnrollmentKeys.has(normalizedText(`${item.studentId}-${item.planId}-${item.startDate}`)))]
    : filterDeletedEntities(normalized, "enrollments", structuredClone(seedData.enrollments));
  normalized.enrollments = mergedEnrollments.map((item, index) => normalizeEnrollment(normalizeTextFields(item), index));
  const savedChartAccounts = filterDeletedEntities(normalized, "chartAccounts", Array.isArray(data.chartAccounts) ? data.chartAccounts : []);
  const savedChartCodes = new Set(savedChartAccounts.map((item) => String(item.code ?? "")));
  const mergedChartAccounts = savedChartAccounts.length
    ? [...savedChartAccounts, ...filterDeletedEntities(normalized, "chartAccounts", seedChartAccounts).filter((item) => !savedChartCodes.has(String(item.code)))]
    : filterDeletedEntities(normalized, "chartAccounts", structuredClone(seedChartAccounts));
  normalized.chartAccounts = mergedChartAccounts.map((item, index) => normalizeChartAccount(normalizeTextFields(item), index));
  normalized.plans = normalized.plans.map((item) => ({
    ...item,
    chartAccountId: item.chartAccountId || revenueChartAccountForModalityFromLists(normalized.chartAccounts, normalized.modalities, item.modalityId)?.id || "",
  }));
  const savedAccounts = filterDeletedEntities(normalized, "accounts", Array.isArray(data.accounts) ? data.accounts : []);
  const savedAccountDescriptions = new Set(savedAccounts.map((item) => normalizedText(`${item.description ?? ""}-${item.person ?? ""}-${item.amount ?? ""}`)));
  const availableSeedAccounts = filterDeletedEntities(normalized, "accounts", seedAccounts);
  const mergedAccounts = savedAccounts.length
    ? [
        ...savedAccounts,
        ...(hasImportedAccounts ? [] : availableSeedAccounts.filter((item) => !savedAccountDescriptions.has(normalizedText(`${item.description}-${item.person}-${item.amount}`)))),
      ]
    : structuredClone(availableSeedAccounts);
  normalized.accounts = mergedAccounts.map((item, index) => normalizeAccount(normalizeTextFields(item), index));
  normalized.accounts = normalized.accounts.map((item) => ({
    ...item,
    supplierId: item.supplierId || supplierIdByIdentityFromList(normalized.suppliers, item.person, item.document),
  }));
  const planChartByEnrollment = new Map(normalized.enrollments.map((enrollment) => {
    const plan = normalized.plans.find((item) => item.id === enrollment.planId);
    return [enrollment.id, plan?.chartAccountId || ""];
  }));
  normalized.accounts = normalized.accounts.map((item) => (
    item.direction === "Receber" && item.enrollmentId && planChartByEnrollment.get(item.enrollmentId)
      ? { ...item, chartAccountId: planChartByEnrollment.get(item.enrollmentId) }
      : item
  ));
  const savedBankMovements = filterDeletedEntities(normalized, "bankMovements", Array.isArray(data.bankMovements) ? data.bankMovements : []);
  const legacyOfxMovements = savedAccounts
    .filter((item) => item.origin === "Importação OFX" || item.origin === "ImportaÃ§Ã£o OFX")
    .map((item) => bankMovementFromAccount(item));
  const movementKeys = new Set(savedBankMovements.map((item) => item.ofxIdentifier || item.duplicateHash || item.id));
  normalized.bankMovements = filterDeletedEntities(normalized, "bankMovements", [...savedBankMovements, ...legacyOfxMovements.filter((item) => !movementKeys.has(item.ofxIdentifier || item.duplicateHash || item.id))])
    .map((item, index) => normalizeBankMovement(normalizeTextFields(item), index));
  normalized.ofxBatches = filterDeletedEntities(normalized, "ofxBatches", Array.isArray(data.ofxBatches) ? data.ofxBatches : []).map((item, index) => normalizeOfxBatch(normalizeTextFields(item), index));
  normalized.ofxDrafts = filterDeletedEntities(normalized, "ofxDrafts", Array.isArray(data.ofxDrafts) ? data.ofxDrafts : []).map((item, index) => normalizeOfxDraft(normalizeTextFields(item), index));
  normalized.ofxRules = (Array.isArray(data.ofxRules) && data.ofxRules.length ? data.ofxRules : structuredClone(seedOfxRules)).map((item, index) => normalizeOfxRule(normalizeTextFields(item), index));
  normalized.appointments = filterDeletedEntities(normalized, "appointments", normalized.appointments).map((item) => normalizeTextFields(item));
  normalized.blocks = filterDeletedEntities(normalized, "blocks", normalized.blocks).map((item) => normalizeTextFields(item));
  normalized.payments = filterDeletedEntities(normalized, "payments", Array.isArray(data.payments) ? data.payments : structuredClone(seedData.payments)).map((item) => normalizeTextFields(item));
  normalized.records = filterDeletedEntities(normalized, "records", normalized.records).map((item) => normalizeTextFields(item));
  normalized.fiscalInvoices = filterDeletedEntities(normalized, "fiscalInvoices", Array.isArray(data.fiscalInvoices) ? data.fiscalInvoices : structuredClone(seedData.fiscalInvoices)).map((item, index) => normalizeFiscalInvoice(normalizeTextFields(item), index));
  normalized.appointments = normalized.appointments.map((item) => normalizeAppointmentTeacher(item));
  normalized.blocks = normalized.blocks.map((item) => normalizeAppointmentTeacher(item));
  normalized.contracts = filterDeletedEntities(normalized, "contracts", Array.isArray(data.contracts) ? data.contracts : structuredClone(seedData.contracts));
  return normalized;
}

function normalizeTextFields(item) {
  return Object.fromEntries(
    Object.entries(item).map(([key, value]) => [key, typeof value === "string" ? fixPortugueseText(value) : value]),
  );
}

function normalizeStudent(item, index) {
  const defaults = seedStudents[index % seedStudents.length] ?? seedStudents[0];
  return {
    cpf: defaults.cpf,
    birthDate: defaults.birthDate,
    gender: defaults.gender,
    membership: defaults.membership,
    alternatePhone: "",
    zip: "",
    address: "",
    addressNumber: "",
    neighborhood: "",
    city: "",
    stateCode: "",
    profession: "",
    origin: "",
    registrationDate: "",
    commercialNotes: "",
    clinicalGoal: "",
    restrictions: "",
    medication: "",
    height: "",
    weight: "",
    responsible: "",
    responsiblePhone: "",
    emergencyContact: "",
    emergencyPhone: "",
    paymentStatus: "Pendente",
    lastPaymentDate: "",
    lastPaidAmount: 0,
    notes: "",
    ...item,
    lastPaidAmount: Number(item.lastPaidAmount ?? defaults.lastPaidAmount ?? 0),
  };
}

function normalizeProfessional(item, index) {
  const defaults = seedProfessionals[index % seedProfessionals.length] ?? seedProfessionals[0];
  return {
    id: item.id || defaults.id || uid("t"),
    name: defaults.name,
    email: defaults.email,
    phone: defaults.phone,
    status: "Ativo",
    maxPatients: 6,
    color: defaults.color,
    role: defaults.role,
    document: "",
    notes: "",
    modalities: "",
    commission: "",
    hourValue: "",
    commissionNotes: "",
    ...item,
  };
}

function normalizeLead(item, index, useDefaults = true) {
  const defaults = useDefaults ? (seedLeads[index % seedLeads.length] ?? seedLeads[0] ?? {}) : {};
  const legacyStatus = {
    "Primeiro contato": "Contato iniciado",
    "Sem resposta": "Contato iniciado",
    "Aula experimental agendada": "Visita agendada",
    "Aula experimental realizada": "Visita realizada",
    Fechado: "Matriculado",
  };
  const status = legacyStatus[item.status || defaults.status] || item.status || defaults.status || "Novo lead";
  const entryDateRaw = item.entryDate || item.data_entrada || defaults.entryDate || item.firstContactDate || defaults.firstContactDate || demoToday;
  const visitDateRaw = item.visitDate || item.data_visita || defaults.visitDate || "";
  return {
    id: item.id || defaults.id || uid("l"),
    name: item.name || item.nome || defaults.name || "",
    phone: item.phone || item.telefone || defaults.phone || "",
    email: item.email || (useDefaults ? defaults.email : "") || "",
    instagram: item.instagram || (useDefaults ? defaults.instagram : "") || "",
    origin: item.origin || item.origem_lead || defaults.origin || "Outro",
    entryChannel: item.entryChannel || item.canal_entrada || item.channel || defaults.entryChannel || defaults.channel || item.origin || (useDefaults ? "WhatsApp" : ""),
    initialMessage: item.initialMessage || item.mensagem_inicial || item.message || defaults.initialMessage || defaults.message || "",
    interest: item.interest || item.interesse || defaults.interest || (useDefaults ? "Pilates" : ""),
    status,
    ownerId: item.ownerId || item.responsavel || "",
    entryDate: String(entryDateRaw).slice(0, 10),
    visitDate: visitDateRaw ? String(visitDateRaw).slice(0, 10) : "",
    firstContactDate: item.firstContactDate || defaults.firstContactDate || demoToday,
    nextFollowUpDate: item.nextFollowUpDate || defaults.nextFollowUpDate || demoToday,
    lossReason: item.lossReason || defaults.lossReason || "",
    notes: item.notes || item.observacoes || defaults.notes || "",
    history: item.history || item.historico || defaults.history || "",
    linkedStudentId: item.linkedStudentId || defaults.linkedStudentId || "",
    linkedAppointmentId: item.linkedAppointmentId || defaults.linkedAppointmentId || "",
    linkedEnrollmentId: item.linkedEnrollmentId || "",
  };
}

// Amount in pt-BR display format: 1857.06 -> "1.857,06"
function formatBrAmount(value) {
  return Number(parseBrAmount(value)).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Parse "1.857,06", "1857,06" or "1857.06" into 1857.06
function parseBrAmount(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  let s = String(value ?? "").trim().replace(/[^\d.,-]/g, "");
  if (!s) return 0;
  if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
  else if ((s.match(/\./g) || []).length > 1) s = s.replace(/\./g, "");
  return Number(s) || 0;
}

function normalizeSupplier(item, index) {
  const defaults = seedSuppliers[index % seedSuppliers.length] ?? {};
  const rawNotes = String(item.notes || "");
  const cleanNotes = /fornecedor importado|importado da (aba|planilha)/i.test(rawNotes) ? "" : rawNotes.trim();
  return {
    id: item.id || defaults.id || uid("f"),
    name: defaults.name || "",
    document: defaults.document || "",
    supplierType: defaults.supplierType || "Pessoa jurídica",
    email: "",
    phone: "",
    status: "Ativo",
    movementCount: 0,
    totalPaid: 0,
    lastMovementDate: "",
    ...item,
    notes: cleanNotes,
    movementCount: Number(item.movementCount ?? defaults.movementCount ?? 0),
    totalPaid: Number(item.totalPaid ?? defaults.totalPaid ?? 0),
  };
}

function normalizeModality(item, index) {
  const defaults = seedModalities[index % seedModalities.length] ?? seedModalities[0];
  const { wellhub, totalPass, experimentalValue, singleValue, ...cleanItem } = item;
  return {
    id: item.id || defaults.id || uid("m"),
    name: defaults.name,
    status: "Ativo",
    maxPatients: defaults.maxPatients,
    color: defaults.color,
    createdAt: new Date().toISOString(),
    notes: "",
    ...cleanItem,
  };
}

function normalizePlan(item, index) {
  const defaults = seedPlans[index % seedPlans.length] ?? seedPlans[0];
  const { linkedEnrollments, ...cleanItem } = item;
  const modalityId = cleanItem.modalityId || defaults.modalityId;
  return {
    id: item.id || defaults.id || uid("pl"),
    name: defaults.name,
    modalityId: defaults.modalityId,
    type: defaults.type,
    value: defaults.value,
    sessions: defaults.sessions,
    chartAccountId: defaults.chartAccountId || "",
    status: "Ativo",
    notes: "",
    ...cleanItem,
    modalityId,
    chartAccountId: cleanItem.chartAccountId || defaults.chartAccountId || "",
  };
}

function normalizeEnrollment(item, index) {
  const defaults = seedEnrollments[index % seedEnrollments.length] ?? seedEnrollments[0] ?? {};
  const plan = seedPlans.find((planItem) => planItem.id === (item.planId || defaults.planId));
  return {
    id: item.id || defaults.id || uid("e"),
    studentId: defaults.studentId || seedStudents[0]?.id || "",
    planId: defaults.planId || seedPlans[0]?.id || "",
    modalityId: defaults.modalityId || plan?.modalityId || "",
    professionalId: defaults.professionalId || "",
    startDate: defaults.startDate || demoToday,
    endDate: defaults.endDate || "",
    monthlyValue: Number(defaults.monthlyValue || plan?.value || 0),
    paymentMethod: defaults.paymentMethod || "Pix",
    status: defaults.status || "Ativa",
    contractStatus: defaults.contractStatus || "Pendente",
    dueDay: Number(defaults.dueDay || 0),
    firstPaymentDate: defaults.firstPaymentDate || "",
    registrationFee: Number(defaults.registrationFee || 0),
    dueNotice: defaults.dueNotice || "Sim",
    sessionReminder: defaults.sessionReminder || "Sim",
    planType: defaults.planType || plan?.type || "Mensalidade",
    autoRenew: defaults.autoRenew || "Sim",
    room: defaults.room || "",
    freeSchedule: defaults.freeSchedule || "Não",
    sessions: Number(defaults.sessions || plan?.sessions || 0),
    mondayTime: defaults.mondayTime || "",
    tuesdayTime: defaults.tuesdayTime || "",
    wednesdayTime: defaults.wednesdayTime || "",
    thursdayTime: defaults.thursdayTime || "",
    fridayTime: defaults.fridayTime || "",
    discount: Number(defaults.discount || 0),
    discountNotes: defaults.discountNotes || "",
    financialNotes: defaults.financialNotes || "",
    contractTemplate: defaults.contractTemplate || "Contrato de matrícula",
    lockStartDate: defaults.lockStartDate || "",
    lockEndDate: defaults.lockEndDate || "",
    paymentStatus: defaults.paymentStatus || "Pendente",
    lastPaymentDate: defaults.lastPaymentDate || "",
    lastPaidAmount: Number(defaults.lastPaidAmount || 0),
    financialTitlesGenerated: Boolean(defaults.financialTitlesGenerated),
    notes: "",
    ...item,
    planType: planTypeLabel(item.planType ?? defaults.planType ?? plan?.type ?? "Mensal"),
    monthlyValue: Number(item.monthlyValue ?? defaults.monthlyValue ?? plan?.value ?? 0),
    dueDay: Number(item.dueDay ?? defaults.dueDay ?? 0),
    registrationFee: Number(item.registrationFee ?? defaults.registrationFee ?? 0),
    discount: Number(item.discount ?? defaults.discount ?? 0),
    discountNotes: item.discountNotes ?? defaults.discountNotes ?? "",
    sessions: Number(item.sessions ?? defaults.sessions ?? plan?.sessions ?? 0),
    paymentStatus: item.paymentStatus ?? defaults.paymentStatus ?? "Pendente",
    lastPaymentDate: item.lastPaymentDate ?? defaults.lastPaymentDate ?? "",
    lastPaidAmount: Number(item.lastPaidAmount ?? defaults.lastPaidAmount ?? 0),
    financialTitlesGenerated: Boolean(item.financialTitlesGenerated ?? defaults.financialTitlesGenerated),
  };
}

function normalizeChartAccount(item, index) {
  const defaults = seedChartAccounts.find((account) => account.code === item.code) ?? seedChartAccounts[index % seedChartAccounts.length] ?? seedChartAccounts[0];
  const nature = item.nature === "Saida" ? "Saída" : item.nature;
  return {
    id: item.id || defaults.id || uid("pc"),
    code: defaults.code,
    name: defaults.name,
    dreGroup: defaults.dreGroup,
    dfcDescription: defaults.dfcDescription,
    dfcGroup: defaults.dfcGroup,
    package: defaults.package,
    activity: defaults.activity,
    nature: defaults.nature,
    status: "Ativo",
    ...item,
    nature: nature || item.nature || defaults.nature,
  };
}

function normalizeAccount(item, index) {
  const defaults = seedAccounts[index % seedAccounts.length] ?? seedAccounts[0];
  const originalAmount = Number(item.originalAmount ?? item.original_amount ?? item.amount ?? defaults.amount ?? 0);
  const paidAmount = Number(item.paidAmount ?? item.paid_amount ?? (item.paidDate ? originalAmount : 0));
  const openAmount = Math.max(0, Number(item.openAmount ?? item.open_amount ?? (originalAmount - paidAmount)));
  return {
    id: item.id || defaults.id || uid("cp"),
    direction: defaults.direction,
    status: defaults.status,
    competenceDate: defaults.competenceDate,
    forecastDate: defaults.forecastDate,
    dueDate: defaults.dueDate,
    paidDate: defaults.paidDate,
    amount: Number(defaults.amount || 0),
    originalAmount,
    paidAmount,
    openAmount,
    description: defaults.description,
    person: defaults.person,
    document: defaults.document,
    supplierId: "",
    modalityId: defaults.modalityId,
    teacherId: defaults.teacherId,
    chartAccountId: defaults.chartAccountId,
    paymentMethod: defaults.paymentMethod,
    origin: defaults.origin || "Manual",
    importBatchId: defaults.importBatchId || "",
    bankAccountId: defaults.bankAccountId || "",
    linkedBankMovementId: item.linkedBankMovementId || item.linked_bank_movement_id || "",
    reconciliationStatus: item.reconciliationStatus || item.reconciliation_status || (item.paidDate ? "manual" : "unreconciled"),
    notes: item.notes || item.observacoes || "",
    ofxIdentifier: defaults.ofxIdentifier || "",
    duplicateHash: defaults.duplicateHash || "",
    ...item,
    amount: Number(item.amount ?? defaults.amount ?? 0),
    originalAmount,
    paidAmount,
    openAmount,
    supplierId: item.supplierId || "",
    // Competência is always the 1st of its month/year, regardless of the exact day it came in with.
    competenceDate: item.competenceDate ? `${String(item.competenceDate).slice(0, 7)}-01` : (defaults.competenceDate || ""),
  };
}

function bankMovementFromAccount(item = {}) {
  const signedAmount = Number(item.signedAmount ?? (item.direction === "Receber" ? item.amount : -Math.abs(Number(item.amount || 0))));
  return {
    id: item.bankMovementId || `bm-${item.id || uid("legacy")}`,
    date: item.paidDate || item.dueDate || item.forecastDate || item.competenceDate || demoToday,
    description: item.bankLaunch || item.description || "",
    amount: signedAmount || Number(item.amount || 0),
    bankAccountId: item.bankAccountId || "",
    bankName: item.paymentMethod || bankAccountLabel(item.bankAccountId),
    chartAccountId: item.chartAccountId || "",
    origin: "Importação OFX",
    importBatchId: item.importBatchId || "",
    ofxIdentifier: item.ofxIdentifier || "",
    duplicateHash: item.duplicateHash || "",
    reconciliationStatus: item.linkedFinancialTitleId ? "reconciled" : "unreconciled",
    linkedFinancialTitleId: item.linkedFinancialTitleId || "",
    notes: item.notes || "",
  };
}

function normalizeBankMovement(item, index) {
  return {
    id: item.id || uid("bm"),
    date: item.date || item.paymentDate || item.dataPagamento || demoToday,
    description: item.description || item.descricao || "",
    amount: Number(item.amount ?? item.valor ?? 0),
    bankAccountId: item.bankAccountId || item.accountId || item.contaId || "",
    bankName: item.bankName || item.accountName || item.contaNome || bankAccountLabel(item.bankAccountId || item.accountId || item.contaId || ""),
    chartAccountId: item.chartAccountId || item.planoContaId || item.accountingAccountId || "",
    origin: item.origin || "Importação OFX",
    importBatchId: item.importBatchId || item.loteImportacaoId || "",
    ofxIdentifier: item.ofxIdentifier || item.identificadorOfx || "",
    duplicateHash: item.duplicateHash || item.hashDuplicidade || "",
    reconciliationStatus: item.reconciliationStatus || item.reconciliation_status || "unreconciled",
    linkedFinancialTitleId: item.linkedFinancialTitleId || item.linked_financial_title_id || "",
    isTransfer: Boolean(item.isTransfer || item.is_transfer),
    notes: item.notes || item.observacao || "",
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || new Date().toISOString(),
    ...item,
    amount: Number(item.amount ?? item.valor ?? 0),
  };
}

function normalizeOfxBatch(item, index) {
  return {
    id: item.id || uid("ofxb"),
    fileName: item.fileName || item.nomeArquivo || `Importação OFX ${index + 1}`,
    accountId: item.accountId || item.contaId || "",
    bankOrigin: item.bankOrigin || item.bancoOrigem || "",
    importedAt: item.importedAt || item.dataImportacao || new Date().toISOString(),
    transactionCount: Number(item.transactionCount ?? item.quantidadeTransacoes ?? 0),
    categorizedCount: Number(item.categorizedCount ?? item.quantidadeCategorizadas ?? 0),
    reviewCount: Number(item.reviewCount ?? item.quantidadeARevisar ?? 0),
    duplicateCount: Number(item.duplicateCount ?? item.quantidadeDuplicadas ?? 0),
    status: item.status || "Em revisão",
    userId: item.userId || item.usuarioId || "",
    ...item,
    transactionCount: Number(item.transactionCount ?? item.quantidadeTransacoes ?? 0),
    categorizedCount: Number(item.categorizedCount ?? item.quantidadeCategorizadas ?? 0),
    reviewCount: Number(item.reviewCount ?? item.quantidadeARevisar ?? 0),
    duplicateCount: Number(item.duplicateCount ?? item.quantidadeDuplicadas ?? 0),
  };
}

function normalizeOfxDraft(item, index) {
  return {
    id: item.id || uid("ofxd"),
    importBatchId: item.importBatchId || item.loteImportacaoId || "",
    competenceDate: item.competenceDate || item.dataCompetencia || demoToday,
    paymentDate: item.paymentDate || item.dataPagamento || item.date || demoToday,
    description: item.description || item.descricao || "",
    accountId: item.accountId || item.contaId || "",
    accountName: item.accountName || item.contaNome || "",
    accountType: item.accountType || item.tipoConta || "Conta bancária",
    origin: item.origin || "Importação OFX",
    chartAccountId: item.chartAccountId || item.planoContaId || item.categoryId || "",
    chartAccountCode: item.chartAccountCode || item.codigoPlanoConta || "",
    type: item.type || item.tipo || "",
    amount: Number(item.amount ?? item.valor ?? 0),
    signedAmount: Number(item.signedAmount ?? item.valorOriginal ?? item.amount ?? item.valor ?? 0),
    ofxIdentifier: item.ofxIdentifier || item.identificadorOfx || "",
    duplicateHash: item.duplicateHash || item.hashDuplicidade || "",
    status: item.status || "A revisar",
    note: item.note || item.observacao || "",
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || new Date().toISOString(),
    balance: item.balance || "",
    ...item,
    amount: Number(item.amount ?? item.valor ?? 0),
    signedAmount: Number(item.signedAmount ?? item.valorOriginal ?? item.amount ?? item.valor ?? 0),
  };
}

function normalizeOfxRule(item, index) {
  const defaults = seedOfxRules[index % seedOfxRules.length] ?? {};
  return {
    id: item.id || defaults.id || uid("ofxr"),
    keyword: item.keyword || item.palavraChave || defaults.keyword || "",
    chartAccountId: item.chartAccountId || item.planoContaId || item.categoryId || defaults.chartAccountId || "",
    chartAccountCode: item.chartAccountCode || item.codigoPlanoConta || "",
    type: item.type || item.tipo || defaults.type || "despesa",
    bankAccountId: item.bankAccountId || item.contaId || defaults.bankAccountId || "",
    priority: Number(item.priority ?? item.prioridade ?? defaults.priority ?? 0),
    active: item.active ?? item.ativo ?? defaults.active ?? true,
    ...item,
    priority: Number(item.priority ?? item.prioridade ?? defaults.priority ?? 0),
    active: item.active ?? item.ativo ?? defaults.active ?? true,
  };
}

function normalizeFiscalInvoice(item, index) {
  return {
    id: item.id || uid("nf"),
    monthlyId: item.monthlyId || "",
    studentId: item.studentId || "",
    number: item.number || "",
    rps: item.rps || `RPS-${String(index + 1).padStart(4, "0")}`,
    service: item.service || "Serviço de pilates/fisioterapia",
    serviceCode: item.serviceCode || "8.02",
    description: item.description || "Prestação de serviços de saúde e condicionamento físico.",
    amount: Number(item.amount || 0),
    iss: Number(item.iss || 0),
    competenceDate: item.competenceDate || demoToday,
    issueDate: item.issueDate || "",
    status: item.status || "Pendente",
    rejectionReason: item.rejectionReason || "",
    xmlUrl: item.xmlUrl || "",
    pdfUrl: item.pdfUrl || "",
    publicLink: item.publicLink || "",
  };
}

function normalizeAppointmentTeacher(item) {
  if (item.teacherId) return item;
  return { ...item, teacherId: item.teacher === "Todos" ? "all" : professionalIdByName(item.teacher || "") };
}

function fixPortugueseText(value) {
  const exactReplacements = {
    Reposicao: "Reposição",
    "Sala Clinica": "Sala Clínica",
    Concluida: "Concluída",
    "Horario Bloqueado": "Horário Bloqueado",
    "Reavaliacao postural": "Reavaliação postural",
    Evolucao: "Evolução",
  };
  const textReplacements = [
    ["Matr?cula", "Matrícula"],
    ["matr?cula", "matrícula"],
    ["Sess?es", "Sessões"],
    ["sess?o", "sessão"],
    ["Respons?veis", "Responsáveis"],
    ["Observa??es", "Observações"],
    ["Observa?es", "Observações"],
    ["Observaçao", "Observação"],
    ["Observacao", "Observação"],
    ["Descri??o", "Descrição"],
    ["Descri?ao", "Descrição"],
    ["Descriçao", "Descrição"],
    ["Descricao", "Descrição"],
    ["Conta cont?bil", "Conta contábil"],
    ["C?digo", "Código"],
    ["A?es", "Ações"],
    ["Avan?ado", "Avançado"],
    ["Usu?rio", "Usuário"],
    ["cont?bil", "contábil"],
    ["codigo", "código"],
    ["Credito", "Crédito"],
    ["credito", "crédito"],
    ["N?o", "Não"],
    ["Pessoa f?sica", "Pessoa física"],
    ["Pessoa jur?dica", "Pessoa jurídica"],
    ["Cart?o", "Cartão"],
    ["Cr?dito", "Crédito"],
    ["D?bito", "Débito"],
    ["Transfer?ncia", "Transferência"],
    ["Renova??o", "Renovação"],
    ["autom?tica", "automática"],
    ["Cl?nica", "Clínica"],
    ["Hor?rio", "Horário"],
    ["Ter?a-feira", "Terça-feira"],
    ["S?bado", "Sábado"],
    ["Domic?lio", "Domicílio"],
    ["Conv?nio", "Convênio"],
    ["f?rias", "férias"],
    ["Empr?stimo", "Empréstimo"],
    ["Empr?stimos", "Empréstimos"],
    ["M?veis", "Móveis"],
    ["Transit?rio", "Transitório"],
    ["Conclu?da", "Concluída"],
    ["Reavalia?o", "Reavaliação"],
    ["Evolu?o", "Evolução"],
  ];
  let normalized = exactReplacements[value] ?? value;
  textReplacements.forEach(([from, to]) => {
    normalized = normalized.split(from).join(to);
  });
  return normalized;
}

function saveState(options = {}) {
  localStorage.setItem(storageKey, JSON.stringify(state));
  if (options.immediate) {
    persistRemoteStateNow();
    return;
  }
  queueRemoteStateSave();
}

function queueRemoteStateSave() {
  if (!remoteStateReady || applyingRemoteState || !window.PhysiofitData?.saveState) return;

  window.clearTimeout(remoteSaveTimer);
  remoteSaveTimer = window.setTimeout(async () => {
    const { error } = await window.PhysiofitData.saveState(state);
    if (error) console.warn("Não foi possível sincronizar com o Neon.", error);
  }, 600);
}

async function persistRemoteStateNow() {
  if (!remoteStateReady || applyingRemoteState || !window.PhysiofitData?.saveState) return;
  window.clearTimeout(remoteSaveTimer);
  const { error } = await window.PhysiofitData.saveState(state);
  if (error) {
    console.warn("NÃ£o foi possÃ­vel sincronizar com o Neon.", error);
    queueRemoteStateSave();
  }
}

function saveDeletedState() {
  saveState({ immediate: true });
}

async function hydrateStateFromNeon() {
  if (!window.PhysiofitData?.loadState || !window.PhysiofitData?.saveState) return;

  const { data, error } = await window.PhysiofitData.loadState();

  if (error) {
    console.warn("Neon indisponivel. Usando dados locais.", error);
    return;
  }

  if (data?.data) {
    if (data.data.dataVersion !== seedData.dataVersion) {
      applyingRemoteState = true;
      state = normalizeState(structuredClone(seedData));
      refreshAutoRenewalProjections();
      ensureContractForecasts();
      localStorage.setItem(storageKey, JSON.stringify(state));
      applyingRemoteState = false;
      remoteStateReady = true;
      const result = await window.PhysiofitData.saveState(state);
      if (result.error) console.warn("Não foi possível atualizar a base inicial no Neon.", result.error);
      render();
      toast("Base financeira atualizada.");
      return;
    }
    applyingRemoteState = true;
    state = normalizeState(data.data);
    refreshAutoRenewalProjections();
    ensureContractForecasts();
    localStorage.setItem(storageKey, JSON.stringify(state));
    applyingRemoteState = false;
    remoteStateReady = true;
    render();
    toast("Dados sincronizados com o Neon.");
    return;
  }

  remoteStateReady = true;
  const result = await window.PhysiofitData.saveState(state);
  if (result.error) {
    console.warn("Não foi possível fazer a carga inicial no Neon.", result.error);
    return;
  }

  toast("Carga inicial enviada para o Neon.");
}

function uid(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function daysBetween(first, second) {
  if (!first || !second) return Number.POSITIVE_INFINITY;
  return Math.round(Math.abs(parseLocalDate(first) - parseLocalDate(second)) / 86400000);
}

function isoDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function dateValue(value) {
  return value ? parseLocalDate(value).getTime() : Number.MAX_SAFE_INTEGER;
}

function isWeekend(date) {
  const dow = date.getDay();
  return dow === 0 || dow === 6;
}

function toMonday(date) {
  const dow = date.getDay();
  if (dow === 0) return addDays(date, 1);  // Dom → próxima Seg
  if (dow === 6) return addDays(date, 2);  // Sáb → próxima Seg
  return addDays(date, 1 - dow);           // qualquer dia útil → Seg da semana
}

function weekDays() {
  return [0, 1, 2, 3, 4].map((offset) => addDays(currentWeekStart, offset));
}

function currency(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function recentMonthKeys(total = 6) {
  const base = parseLocalDate(demoToday);
  return Array.from({ length: total }, (_, index) => {
    const date = new Date(base.getFullYear(), base.getMonth() - (total - 1 - index), 1);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  });
}

function monthKey(value) {
  return String(value || "").slice(0, 7);
}

function softTrend(currentValue, months, step = 0.06) {
  const safeValue = Math.max(0, Number(currentValue) || 0);
  return months.map((_, index) => Math.max(0, Math.round(safeValue * (1 - (months.length - 1 - index) * step))));
}

function sparklineSvg(values, color = "#0ea5a4") {
  const series = values.map((item) => Number(item) || 0);
  const width = 116;
  const height = 34;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const span = Math.max(1, max - min);
  const points = series.map((item, index) => {
    const x = series.length === 1 ? width / 2 : (index / (series.length - 1)) * width;
    const y = height - 4 - ((item - min) / span) * (height - 9);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const area = `0,${height} ${points.join(" ")} ${width},${height}`;
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução mensal">
      <polygon points="${area}" fill="${color}" opacity="0.08"></polygon>
      <polyline points="${points.join(" ")}" fill="none" stroke="${color}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></polyline>
    </svg>
  `;
}

function setMetricTrend(selector, values, color) {
  const target = document.querySelector(selector);
  if (target) target.innerHTML = sparklineSvg(values, color);
}

function dateLabel(value) {
  if (!value || value === "-") return "-";
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function monthYearLabel(value) {
  if (!value || value === "-") return "-";
  return new Intl.DateTimeFormat("pt-BR", { year: "numeric", month: "2-digit", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function shortDateLabel(value) {
  if (!value || value === "-") return "-";
  const d = new Date(`${value}T00:00:00Z`);
  return `${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

function whatsappLeadUrl(phone) {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  const normalized = digits.startsWith("55") ? digits : "55" + digits;
  return `https://wa.me/${normalized}`;
}

const ACCOUNT_STATUS_ICONS = { Pago: "✓", Recebido: "✓", Parcial: "◑", "Em aberto": "◌", Cancelado: "✕" };
function accountStatusIcon(label, cssClass) {
  if (cssClass === "atrasado") return "⚠";
  return ACCOUNT_STATUS_ICONS[label] || "◌";
}

function dateTimeLabel(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(date);
}

function ageFromDate(value) {
  if (!value) return "";
  const birthDate = parseLocalDate(value);
  const today = parseLocalDate(demoToday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const hadBirthday = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hadBirthday) age -= 1;
  return age;
}

function displayName(value = "") {
  return String(value || "")
    .trim()
    .toLocaleLowerCase("pt-BR")
    .replace(/(^|\s|\/|-)(\p{L})/gu, (match, prefix, letter) => `${prefix}${letter.toLocaleUpperCase("pt-BR")}`);
}

function escapeHtml(value = "") {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function maskedCpf(value = "") {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits || digits.length < 5) return "Não informado";
  return `${digits.slice(0, 3)}.*****${digits.slice(-2)}`;
}

function planTypeLabel(type = "") {
  const normalized = normalizedText(type);
  if (normalized.includes("avulsa") || normalized.includes("avulso") || normalized.includes("livre")) return "Avulsa";
  if (normalized.includes("pacote")) return "Pacote";
  if (normalized.includes("trimestral")) return "Trimestral";
  if (normalized.includes("semestral")) return "Semestral";
  return "Mensal";
}

function monthsForPlanType(type = "") {
  const label = planTypeLabel(type);
  if (label === "Trimestral") return 3;
  if (label === "Semestral") return 6;
  if (label === "Avulsa" || label === "Pacote") return 1;
  return 1;
}

function weeklySessionsFromPlan(plan = {}) {
  const nameMatch = String(plan.name || "").match(/(\d+)\s*x/i);
  if (nameMatch) return Number(nameMatch[1]);
  const sessions = Number(plan.sessions || 0);
  if (!sessions) return 0;
  const type = planTypeLabel(plan.type);
  if (type === "Avulsa" || type === "Pacote") return sessions;
  return Math.max(1, Math.round(sessions / (monthsForPlanType(type) * 4)));
}

function calculatedEnrollmentEndDate(startDate, type = "") {
  if (!startDate) return "";
  const date = parseLocalDate(startDate);
  date.setMonth(date.getMonth() + monthsForPlanType(type));
  date.setDate(date.getDate() - 1);
  return isoDate(date);
}

function revenueChartAccountForModalityFromLists(chartAccounts = [], modalities = [], modalityId = "") {
  const modality = modalities.find((item) => item.id === modalityId)?.name || modalityId;
  const modalityTerm = normalizedText(modality);
  return (
    chartAccounts.find((item) => isRevenueChartAccount(item) && modalityTerm && normalizedText(item.name).includes(modalityTerm)) ||
    chartAccounts.find((item) => isRevenueChartAccount(item)) ||
    chartAccounts[0]
  );
}

function revenueChartAccountForModality(modalityId = "") {
  return revenueChartAccountForModalityFromLists(state.chartAccounts, state.modalities, modalityId);
}

function activeRevenueChartAccounts() {
  return activeChartAccounts().filter((item) => isRevenueChartAccount(item));
}

function addMonthsToIsoDate(value, months) {
  const date = parseLocalDate(value);
  const day = date.getDate();
  date.setDate(1);
  date.setMonth(date.getMonth() + months);
  const maxDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, maxDay));
  return isoDate(date);
}

function ensureEnrollmentFinancialTitles(enrollment) {
  if (!enrollment?.id || state.accounts.some((item) => item.enrollmentId === enrollment.id)) {
    enrollment.financialTitlesGenerated = state.accounts.some((item) => item.enrollmentId === enrollment.id);
    return;
  }
  const relatedStudent = student(enrollment.studentId);
  const plan = state.plans.find((item) => item.id === enrollment.planId);
  const chartAccount = state.chartAccounts.find((item) => item.id === plan?.chartAccountId) || revenueChartAccountForModality(enrollment.modalityId);
  const planType = planTypeLabel(enrollment.planType || plan?.type);
  const installments = planType === "Trimestral" ? 3 : planType === "Semestral" ? 6 : 1;
  const firstDate = enrollment.firstPaymentDate || enrollment.startDate || demoToday;
  const titlePrefix = planType === "Avulsa" ? "Sessão Avulsa" : planType === "Pacote" ? "Pacote de Sessões" : installments > 1 ? "Parcela" : "Mensalidade";
  const titles = [];
  const discount = Number(enrollment.discount || 0);
  for (let index = 0; index < installments; index += 1) {
    const dueDate = addMonthsToIsoDate(firstDate, index);
    const baseAmount = Number(enrollment.monthlyValue || plan?.value || 0);
    const amount = Math.max(0, baseAmount - discount);
    if (!baseAmount) continue;
    const installmentLabel = installments > 1 ? ` ${index + 1}/${installments}` : "";
    titles.push(normalizeAccount({
      id: uid("cp"),
      direction: "Receber",
      status: "Aberto",
      competenceDate: dueDate,
      forecastDate: dueDate,
      dueDate,
      paidDate: "",
      amount,
      originalAmount: baseAmount,
      paidAmount: 0,
      openAmount: amount,
      description: `${titlePrefix}${installmentLabel}: ${displayName(relatedStudent?.name || "Cliente")}`,
      person: relatedStudent?.name || "",
      document: relatedStudent?.cpf || "",
      modalityId: enrollment.modalityId,
      teacherId: enrollment.professionalId,
      chartAccountId: chartAccount?.id || "",
      paymentMethod: enrollment.paymentMethod || "Pix",
      origin: "Matrícula",
      enrollmentId: enrollment.id,
      reconciliationStatus: "unreconciled",
    }, state.accounts.length + titles.length));
  }
  const registrationFee = Number(enrollment.registrationFee || 0);
  if (registrationFee > 0) {
    titles.push(normalizeAccount({
      id: uid("cp"),
      direction: "Receber",
      status: "Aberto",
      competenceDate: firstDate,
      forecastDate: firstDate,
      dueDate: firstDate,
      paidDate: "",
      amount: registrationFee,
      originalAmount: registrationFee,
      paidAmount: 0,
      openAmount: registrationFee,
      description: `Taxa de matrícula: ${displayName(relatedStudent?.name || "Cliente")}`,
      person: relatedStudent?.name || "",
      document: relatedStudent?.cpf || "",
      modalityId: enrollment.modalityId,
      teacherId: enrollment.professionalId,
      chartAccountId: chartAccount?.id || "",
      paymentMethod: enrollment.paymentMethod || "Pix",
      origin: "Matrícula",
      enrollmentId: enrollment.id,
      reconciliationStatus: "unreconciled",
    }, state.accounts.length + titles.length));
  }
  state.accounts.push(...titles);
  enrollment.financialTitlesGenerated = titles.length > 0;
}

function autoRenewalProjectedEnd() {
  return addMonthsToIsoDate(demoToday, 3);
}

function ensureAutoRenewalTitles(enrollment) {
  if (!enrollment?.id || enrollment.autoRenew !== "Sim" || enrollment.status === "Cancelada") return;
  const planType = planTypeLabel(enrollment.planType || state.plans.find((p) => p.id === enrollment.planId)?.type);
  if (planType !== "Mensal") return;
  const projEnd = autoRenewalProjectedEnd();
  const existing = state.accounts.filter((a) => a.enrollmentId === enrollment.id && !a.description?.startsWith("Taxa"));
  if (!existing.length) return;
  const lastDate = existing.map((a) => a.forecastDate || "").sort().pop();
  if (!lastDate || lastDate >= projEnd) return;
  const relatedStudent = student(enrollment.studentId);
  const plan = state.plans.find((p) => p.id === enrollment.planId);
  const chartAccount = state.chartAccounts.find((c) => c.id === plan?.chartAccountId) || revenueChartAccountForModality(enrollment.modalityId);
  const discount = Number(enrollment.discount || 0);
  const baseAmount = Number(enrollment.monthlyValue || plan?.value || 0);
  const amount = Math.max(0, baseAmount - discount);
  if (!baseAmount) return;
  let cursor = addMonthsToIsoDate(lastDate, 1);
  while (cursor <= projEnd) {
    const alreadyExists = existing.some((a) => a.forecastDate === cursor) || state.accounts.some((a) => a.enrollmentId === enrollment.id && a.forecastDate === cursor);
    if (!alreadyExists) {
      state.accounts.push(normalizeAccount({
        id: uid("cp"),
        direction: "Receber",
        status: "Aberto",
        competenceDate: cursor,
        forecastDate: cursor,
        dueDate: cursor,
        paidDate: "",
        amount,
        originalAmount: baseAmount,
        paidAmount: 0,
        openAmount: amount,
        description: `Mensalidade: ${displayName(relatedStudent?.name || "Cliente")}`,
        person: relatedStudent?.name || "",
        document: relatedStudent?.cpf || "",
        modalityId: enrollment.modalityId,
        teacherId: enrollment.professionalId,
        chartAccountId: chartAccount?.id || "",
        paymentMethod: enrollment.paymentMethod || "Pix",
        origin: "Matrícula",
        enrollmentId: enrollment.id,
        reconciliationStatus: "unreconciled",
        projected: true,
      }, state.accounts.length));
    }
    cursor = addMonthsToIsoDate(cursor, 1);
  }
}

function addMissingAutoRenewalAppointments(enrollment) {
  if (!enrollment?.id || enrollment.autoRenew !== "Sim" || enrollment.status === "Cancelada") return;
  const _pt = planTypeLabel(enrollment.planType || state.plans.find((p) => p.id === enrollment.planId)?.type);
  if (_pt === "Avulsa" || _pt === "Pacote") return;
  const dayFields = [
    ["mondayTime", 1], ["tuesdayTime", 2], ["wednesdayTime", 3],
    ["thursdayTime", 4], ["fridayTime", 5],
  ];
  const selectedDays = dayFields.filter(([field]) => enrollment[field]);
  if (!selectedDays.length || !enrollment.startDate) return;
  const projEnd = autoRenewalProjectedEnd();
  const existingDates = new Set(
    state.appointments.filter((a) => a.enrollmentId === enrollment.id).map((a) => a.date),
  );
  const latestExisting = [...existingDates].sort().pop();
  const startFrom = latestExisting ? addDays(parseLocalDate(latestExisting), 1) : parseLocalDate(enrollment.startDate);
  const endLimit = parseLocalDate(projEnd).getTime();
  const newAppts = [];
  let cursor = startFrom;
  while (cursor.getTime() <= endLimit) {
    selectedDays.forEach(([field, weekDay]) => {
      if (cursor.getDay() !== weekDay) return;
      const dateStr = isoDate(cursor);
      if (existingDates.has(dateStr)) return;
      newAppts.push({
        id: uid("a"),
        enrollmentId: enrollment.id,
        date: dateStr,
        time: enrollment[field],
        endTime: addOneHour(enrollment[field]),
        studentId: enrollment.studentId,
        teacherId: enrollment.professionalId,
        room: enrollment.room || "",
        type: modalityName(enrollment.modalityId) || "Pilates",
        status: "Agendada",
        sessionKind: planTypeLabel(enrollment.planType),
      });
    });
    cursor = addDays(cursor, 1);
  }
  state.appointments.push(...newAppts);
}

function cancelEnrollmentFutureItems(enrollment) {
  const futureAccountIds = state.accounts
    .filter((a) => a.enrollmentId === enrollment.id && !a.paidDate && (a.forecastDate || a.dueDate) > demoToday)
    .map((a) => a.id);
  if (futureAccountIds.length) {
    rememberDeletedEntities("accounts", futureAccountIds);
    state.accounts = state.accounts.filter((a) => !futureAccountIds.includes(a.id));
  }
}

function refreshAutoRenewalProjections() {
  state.enrollments
    .filter((e) => e.autoRenew === "Sim" && e.status !== "Cancelada")
    .forEach((enrollment) => {
      ensureAutoRenewalTitles(enrollment);
      addMissingAutoRenewalAppointments(enrollment);
    });
}

function syncPlanChartAccountToFinancialTitles(planId = "", chartAccountId = "") {
  if (!planId || !chartAccountId) return;
  const enrollmentIds = new Set(state.enrollments.filter((item) => item.planId === planId).map((item) => item.id));
  state.accounts = state.accounts.map((account) => (
    account.direction === "Receber" && enrollmentIds.has(account.enrollmentId)
      ? { ...account, chartAccountId }
      : account
  ));
}

function ensureEnrollmentAppointments(enrollment) {
  if (!enrollment?.id) return;
  rememberDeletedEntities("appointments", state.appointments.filter((item) => item.enrollmentId === enrollment.id).map((item) => item.id));
  state.appointments = state.appointments.filter((item) => item.enrollmentId !== enrollment.id);
  if (enrollment.status === "Cancelada") return;
  const _pt = planTypeLabel(enrollment.planType || state.plans.find((p) => p.id === enrollment.planId)?.type);
  if (_pt === "Avulsa" || _pt === "Pacote") return;
  const dayFields = [
    ["mondayTime", 1],
    ["tuesdayTime", 2],
    ["wednesdayTime", 3],
    ["thursdayTime", 4],
    ["fridayTime", 5],
  ];
  const selectedDays = dayFields.filter(([field]) => enrollment[field]);
  if (!selectedDays.length || !enrollment.startDate || !enrollment.endDate) return;
  const effectiveEnd = enrollment.autoRenew === "Sim"
    ? (autoRenewalProjectedEnd() > enrollment.endDate ? autoRenewalProjectedEnd() : enrollment.endDate)
    : enrollment.endDate;
  const endLimit = parseLocalDate(effectiveEnd).getTime();
  const appointments = [];
  let cursor = parseLocalDate(enrollment.startDate);
  while (cursor.getTime() <= endLimit) {
    selectedDays.forEach(([field, weekDay]) => {
      if (cursor.getDay() !== weekDay) return;
      const time = enrollment[field];
      appointments.push({
        id: uid("a"),
        enrollmentId: enrollment.id,
        date: isoDate(cursor),
        time,
        endTime: addOneHour(time),
        studentId: enrollment.studentId,
        teacherId: enrollment.professionalId,
        room: enrollment.room || "",
        type: modalityName(enrollment.modalityId) || "Pilates",
        status: "Agendada",
        sessionKind: planTypeLabel(enrollment.planType),
      });
    });
    cursor = addDays(cursor, 1);
  }
  state.appointments.push(...appointments);
}

function addOneHour(time = "") {
  const [hour = 0, minute = 0] = time.split(":").map(Number);
  return `${String((hour + 1) % 24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function appendNote(current = "", note = "") {
  const cleanCurrent = String(current || "").trim();
  const cleanNote = String(note || "").trim();
  if (!cleanNote) return cleanCurrent;
  if (normalizedText(cleanCurrent).includes(normalizedText(cleanNote))) return cleanCurrent;
  return [cleanCurrent, cleanNote].filter(Boolean).join("\n");
}

function shortDate(date) {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit" }).format(date).replace(".", "");
}

function rangeLabel() {
  const days = weekDays();
  const start = days[0];
  const end = days[days.length - 1];
  const month = new Intl.DateTimeFormat("pt-BR", { month: "short" }).format(start).replace(".", "");
  return `${String(start.getDate()).padStart(2, "0")} - ${String(end.getDate()).padStart(2, "0")} de ${month}. de ${start.getFullYear()}`;
}

function student(id) {
  return state.students.find((item) => item.id === id);
}

function studentName(id) {
  return student(id)?.name ?? "Cliente removido";
}

function studentActivePlan(studentId) {
  const enrollments = state.enrollments.filter((e) => e.studentId === studentId);
  const active = enrollments.find((e) => e.status === "Ativa") ?? enrollments.sort((a, b) => (b.startDate ?? "").localeCompare(a.startDate ?? ""))[0];
  if (!active) return "-";
  const plan = state.plans.find((p) => p.id === active.planId);
  return [modalityName(active.modalityId), plan?.name].filter(Boolean).join(" · ") || "-";
}

function professional(id) {
  return state.professionals.find((item) => item.id === id);
}

function professionalName(id) {
  if (id === "all") return "Todos";
  return professional(id)?.name ?? "Profissional não informado";
}

function activeProfessionals() {
  return state.professionals.filter((item) => item.status === "Ativo");
}

function activeModalities() {
  return state.modalities.filter((item) => item.status === "Ativo");
}

function modalityName(idOrName) {
  return state.modalities.find((item) => item.id === idOrName)?.name ?? idOrName;
}

function activePlans() {
  return state.plans.filter((item) => item.status === "Ativo");
}

function planById(id) {
  return state.plans.find((item) => item.id === id);
}

function planName(id) {
  return planById(id)?.name ?? "Plano removido";
}

function activeEnrollments() {
  return state.enrollments.filter((item) => item.status === "Ativa");
}

function activeChartAccounts() {
  return sortChartAccountsByCode(state.chartAccounts.filter((item) => item.status === "Ativo"));
}

function chartAccountCodeParts(code = "") {
  return String(code)
    .split(".")
    .map((part) => Number.parseInt(part, 10))
    .map((part) => (Number.isFinite(part) ? part : 0));
}

function compareChartAccountCodes(left = "", right = "") {
  const leftParts = chartAccountCodeParts(left);
  const rightParts = chartAccountCodeParts(right);
  const length = Math.max(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const diff = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
    if (diff !== 0) return diff;
  }
  return String(left).localeCompare(String(right), "pt-BR", { numeric: true, sensitivity: "base" });
}

function compareChartAccountsByCode(left = {}, right = {}) {
  return (
    compareChartAccountCodes(left.code, right.code) ||
    String(left.name ?? "").localeCompare(String(right.name ?? ""), "pt-BR", { sensitivity: "base" })
  );
}

function sortChartAccountsByCode(accounts = []) {
  return [...accounts].sort(compareChartAccountsByCode);
}

function isRevenueChartAccount(account = {}) {
  // dreGroup's (+)/(-) prefix is the most reliable revenue/expense signal in this chart of accounts:
  // some rows have an inconsistent "nature" field (e.g. "Simples Nacional" tagged Despesa but
  // package "Receitas"; "Venda de Serviço - Fisioterapia" tagged Despesa despite being revenue),
  // but dreGroup's sign has held correct across every account sampled — it takes priority when present.
  const dreGroup = String(account.dreGroup || "").trim();
  if (dreGroup.startsWith("(+)")) return true;
  if (dreGroup.startsWith("(-)")) return false;

  const code = String(account.code || "").trim();
  const content = normalizedText([
    account.nature,
    account.name,
    account.dreGroup,
    account.dfcDescription,
    account.package,
    account.activity
  ].join(" "));

  return (
    account.nature === "Receita" ||
    account.nature === "Entrada" ||
    code.startsWith("1.") ||
    content.includes("receita") ||
    content.includes("faturamento bruto") ||
    content.includes("recebimento") ||
    content.includes("venda de servico") ||
    content.includes("venda de produto") ||
    content.includes("locacao")
  );
}

function chartAccountFinancialDirection(account = {}) {
  const content = normalizedText([
    account.nature,
    account.name,
    account.dfcDescription,
    account.dfcGroup,
    account.package,
    account.activity
  ].join(" "));

  if (isRevenueChartAccount(account)) return "Receber";
  if (account.nature === "Despesa") return "Pagar";
  if (content.includes("transferencia")) return "both";

  const receivableTerms = [
    "recebimento",
    "resgate",
    "rendimento",
    "aporte",
    "emprestimo contratado",
    "venda de imobilizado"
  ];
  if (receivableTerms.some((term) => content.includes(term))) return "Receber";

  const payableTerms = [
    "pagamento",
    "aplicacao",
    "distribuicao",
    "instalacoes",
    "maquinas",
    "equipamentos",
    "computadores",
    "perifericos",
    "moveis",
    "utensilios",
    "veiculos",
    "consorcio"
  ];
  if (payableTerms.some((term) => content.includes(term))) return "Pagar";

  return "both";
}

function chartAccountsForFinancialDirection(direction = "") {
  return sortChartAccountsByCode(activeChartAccounts().filter((account) => {
    const accountDirection = chartAccountFinancialDirection(account);
    return accountDirection === "both" || accountDirection === direction;
  }));
}

function activeSuppliers() {
  return state.suppliers.filter((item) => item.status === "Ativo");
}

function supplierById(id) {
  return state.suppliers.find((item) => item.id === id);
}

function supplierName(id) {
  return supplierById(id)?.name ?? "";
}

function supplierIdByIdentity(name = "", document = "") {
  return supplierIdByIdentityFromList(state?.suppliers ?? [], name, document);
}

function supplierIdByIdentityFromList(suppliers = [], name = "", document = "") {
  const compactName = normalizedText(name);
  const compactDocument = normalizedText(document);
  const match = suppliers.find((item) => {
    const sameDocument = compactDocument && normalizedText(item.document) === compactDocument;
    const sameName = compactName && normalizedText(item.name) === compactName;
    return sameDocument || sameName;
  });
  return match?.id ?? "";
}

function upsertSupplierFromAccount(name = "", document = "") {
  const cleanName = String(name || "").trim();
  const cleanDocument = String(document || "").trim();
  if (!cleanName) return "";
  const existingId = supplierIdByIdentity(cleanName, cleanDocument);
  if (existingId) return existingId;
  const supplier = normalizeSupplier({
    id: uid("f"),
    name: cleanName,
    document: cleanDocument,
    supplierType: cleanDocument.includes("/") ?"Pessoa jurídica" : cleanDocument ?"Pessoa física" : "Sem documento",
    notes: "Criado a partir de lançamento financeiro",
  }, state.suppliers.length);
  state.suppliers.push(supplier);
  return supplier.id;
}

function chartAccountName(id) {
  const item = state.chartAccounts.find((account) => account.id === id);
  return item ?`${item.code} - ${item.name}` : "Sem classificação";
}

function bankAccountLabel(id) {
  const labels = {
    itau: "Itaú",
    asaas: "Asaas",
    caixa: "Caixa",
    santander: "Santander",
    outro: "Outro banco",
  };
  return labels[id] || id || "-";
}

function accountDirectionByOfxType(type, amount) {
  if (type === "receita") return "Receber";
  if (type === "despesa" || type === "financiamento") return "Pagar";
  return Number(amount) >= 0 ? "Receber" : "Pagar";
}

function isValidOfxDraftStatus(status = "") {
  return status === "Válido" || status === "VÃ¡lido" || normalizedText(status) === "valido";
}

function ofxDraftDirection(draft) {
  return draft.direction || accountDirectionByOfxType(draft.type, draft.signedAmount ?? draft.amount);
}

function inferOfxType(description = "", amount = 0, rule = null) {
  if (rule?.type) return rule.type;
  const text = normalizedText(description);
  if (text.includes("transfer") || text.includes("ted") || text.includes("doc ")) return "transferência";
  if (text.includes("emprest") || text.includes("financ")) return "financiamento";
  return Number(amount) >= 0 ? "receita" : "despesa";
}

function ofxDateToIso(value = "") {
  const match = String(value).match(/(\d{4})(\d{2})(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : demoToday;
}

function ofxTag(block, tag) {
  const match = String(block).match(new RegExp(`<${tag}[^>]*>\\s*([^<\\r\\n]+)`, "i"));
  return match ? match[1].trim() : "";
}

function ofxDuplicateHash({ accountId, paymentDate, amount, ofxIdentifier, description }) {
  return normalizedText([accountId, paymentDate, Number(amount || 0).toFixed(2), ofxIdentifier || description].join("|"));
}

function findOfxRule(description = "", accountId = "") {
  const text = normalizedText(description);
  return state.ofxRules
    .filter((rule) => rule.active !== false)
    .filter((rule) => !rule.bankAccountId || rule.bankAccountId === accountId)
    .filter((rule) => text.includes(normalizedText(rule.keyword)))
    .sort((a, b) => Number(b.priority || 0) - Number(a.priority || 0))[0] || null;
}

function officialAccountMatchesOfx(draft) {
  const matchesMovement = state.bankMovements.some((movement) => {
    const sameAccount = movement.bankAccountId === draft.accountId;
    const sameDate = movement.date === draft.paymentDate;
    const sameValue = Math.abs(Math.abs(Number(movement.amount || 0)) - Math.abs(Number(draft.amount || 0))) < 0.01;
    const sameIdentifier = draft.ofxIdentifier && movement.ofxIdentifier === draft.ofxIdentifier;
    const sameHash = draft.duplicateHash && movement.duplicateHash === draft.duplicateHash;
    return sameAccount && sameDate && sameValue && (sameIdentifier || sameHash);
  });
  if (matchesMovement) return true;
  return state.accounts.some((account) => {
    const sameAccount = (account.bankAccountId || account.paymentMethod || "") === draft.accountId;
    const sameDate = (account.paidDate || account.dueDate || account.competenceDate || "") === draft.paymentDate;
    const sameValue = Math.abs(Number(account.amount || 0) - Math.abs(Number(draft.amount || 0))) < 0.01;
    const sameIdentifier = draft.ofxIdentifier && account.ofxIdentifier === draft.ofxIdentifier;
    const sameHash = draft.duplicateHash && account.duplicateHash === draft.duplicateHash;
    return sameAccount && sameDate && sameValue && (sameIdentifier || sameHash);
  });
}

function parseOfxTransactions(content) {
  const text = String(content || "").replace(/\r/g, "");
  const balance = ofxTag(text, "LEDGERBAL") || ofxTag(text, "BALAMT");
  const blocks = [...text.matchAll(/<STMTTRN>([\s\S]*?)(?=<STMTTRN>|<\/BANKTRANLIST>|<\/STMTTRN>)/gi)].map((match) => match[1]);
  return blocks.map((block) => ({
    date: ofxDateToIso(ofxTag(block, "DTPOSTED") || ofxTag(block, "DTUSER")),
    description: fixPortugueseText(ofxTag(block, "MEMO") || ofxTag(block, "NAME") || "Lançamento OFX"),
    amount: Number(String(ofxTag(block, "TRNAMT")).replace(",", ".")) || 0,
    identifier: ofxTag(block, "FITID") || ofxTag(block, "CHECKNUM"),
    balance,
  }));
}

function createOfxDraft(transaction, batch) {
  const rule = findOfxRule(transaction.description, batch.accountId);
  const type = inferOfxType(transaction.description, transaction.amount, rule);
  const chartAccount = state.chartAccounts.find((item) => item.id === rule?.chartAccountId);
  const direction = accountDirectionByOfxType(type, transaction.amount);
  const draft = normalizeOfxDraft({
    id: uid("ofxd"),
    importBatchId: batch.id,
    competenceDate: transaction.date,
    paymentDate: transaction.date,
    description: transaction.description,
    accountId: batch.accountId,
    accountName: batch.bankOrigin,
    accountType: "Conta bancária",
    origin: "Importação OFX",
    chartAccountId: chartAccount?.id || "",
    chartAccountCode: chartAccount?.code || "",
    type,
    direction,
    amount: Math.abs(Number(transaction.amount || 0)),
    signedAmount: Number(transaction.amount || 0),
    ofxIdentifier: transaction.identifier,
    status: chartAccount ? "Válido" : "A revisar",
    note: chartAccount ? `Categorizado por regra: ${rule.keyword}` : "Sem regra de categorização.",
    balance: transaction.balance,
  }, state.ofxDrafts.length);
  draft.duplicateHash = ofxDuplicateHash(draft);
  if (officialAccountMatchesOfx(draft)) {
    draft.status = "Duplicado";
    draft.note = "Já existe movimento bancário com mesma conta, data, valor e identificador/hash.";
  }
  return draft;
}

function updateOfxBatchCounters(batchId) {
  const batch = state.ofxBatches.find((item) => item.id === batchId);
  if (!batch) return;
  const drafts = state.ofxDrafts.filter((item) => item.importBatchId === batchId);
  batch.transactionCount = drafts.length;
  batch.categorizedCount = drafts.filter((item) => item.chartAccountId && item.status !== "Duplicado" && item.status !== "Ignorado").length;
  batch.reviewCount = drafts.filter((item) => item.status === "A revisar").length;
  batch.duplicateCount = drafts.filter((item) => item.status === "Duplicado").length;
  batch.updatedAt = new Date().toISOString();
}

function currentOfxBatch() {
  return state.ofxBatches
    .filter((item) => item.status !== "Concluído")
    .sort((a, b) => String(b.importedAt).localeCompare(String(a.importedAt)))[0] || state.ofxBatches.at(-1) || null;
}

function statusClass(status = "") {
  return status
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function accountPaymentDate(item = {}) {
  return item.paidDate || item.paymentDate || "";
}

function accountOriginalAmount(item = {}) {
  return Number(item.originalAmount ?? item.amount ?? 0);
}

function accountPaidAmount(item = {}) {
  if (item.paidAmount !== undefined) return Number(item.paidAmount || 0);
  return accountPaymentDate(item) ? accountOriginalAmount(item) : 0;
}

function accountOpenAmount(item = {}) {
  if (item.openAmount !== undefined) return Number(item.openAmount || 0);
  return Math.max(0, accountOriginalAmount(item) - accountPaidAmount(item));
}

function accountExpectedDate(item = {}) {
  return item.forecastDate || item.dueDate || item.competenceDate || "";
}

function isAccountOverdue(item = {}) {
  const expectedDate = accountExpectedDate(item);
  return accountOpenAmount(item) > 0 && expectedDate && expectedDate < demoToday && item.status !== "Cancelado";
}

function accountAutoStatus(item = {}) {
  if (item.status === "Cancelado") return "Cancelado";
  const paid = accountPaidAmount(item);
  const open = accountOpenAmount(item);
  if (paid > 0 && open > 0) return "Parcial";
  if (paid > 0 && open <= 0) return item.direction === "Receber" ? "Recebido" : "Pago";
  return "Em aberto";
}

function accountAutoStatusClass(item = {}) {
  if (item.status === "Cancelado") return "cancelado";
  if (accountPaidAmount(item) > 0 && accountOpenAmount(item) > 0) return "parcial";
  if (accountPaidAmount(item) > 0 && accountOpenAmount(item) <= 0) return item.direction === "Receber" ? "recebido" : "pago";
  return isAccountOverdue(item) ? "atrasado" : "em-aberto";
}

function enrollmentFinancialAccounts(enrollmentId = "") {
  return state.accounts.filter((item) => item.enrollmentId === enrollmentId && item.direction === "Receber" && item.status !== "Cancelado");
}

function enrollmentPaymentSummary(enrollmentId = "") {
  const enrollment = state.enrollments.find((item) => item.id === enrollmentId);
  const accounts = enrollmentFinancialAccounts(enrollmentId);
  const paidAccounts = accounts.filter((item) => accountPaidAmount(item) > 0 || ["Recebido", "Pago"].includes(accountAutoStatus(item)));
  const paidAmount = accounts.reduce((sum, item) => sum + accountPaidAmount(item), 0);
  const latestPaidDate = paidAccounts
    .map((item) => accountPaymentDate(item))
    .filter(Boolean)
    .sort()
    .at(-1) || enrollment?.lastPaymentDate || "";
  const hasPayment = paidAccounts.length > 0 || paidAmount > 0 || enrollment?.paymentStatus === "Pago";
  const hasOverdue = accounts.some((item) => isAccountOverdue(item));

  if (hasPayment) {
    return { label: "Pago", className: "ativo", paid: true, paidDate: latestPaidDate, paidAmount };
  }
  if (hasOverdue) {
    return { label: "Atrasado", className: "atrasado", paid: false, paidDate: "", paidAmount: 0 };
  }
  return { label: "Pendente", className: "pendente", paid: false, paidDate: "", paidAmount: 0 };
}

function syncEnrollmentPaymentFromAccount(account = {}) {
  if (!account.enrollmentId || account.direction !== "Receber") return;
  const enrollment = state.enrollments.find((item) => item.id === account.enrollmentId);
  if (!enrollment) return;
  const summary = enrollmentPaymentSummary(enrollment.id);
  if (!summary.paid) return;

  enrollment.paymentStatus = "Pago";
  enrollment.lastPaymentDate = summary.paidDate || accountPaymentDate(account) || demoToday;
  enrollment.lastPaidAmount = summary.paidAmount || accountPaidAmount(account);
  enrollment.financialTitlesGenerated = true;

  const relatedStudent = student(enrollment.studentId || account.studentId);
  if (relatedStudent) {
    relatedStudent.paymentStatus = enrollment.paymentStatus;
    relatedStudent.lastPaymentDate = enrollment.lastPaymentDate;
    relatedStudent.lastPaidAmount = enrollment.lastPaidAmount;
    relatedStudent.plan = planName(enrollment.planId) || relatedStudent.plan;
    relatedStudent.membership = "Matriculado";
  }
}

function normalizedText(value = "") {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Returns the first student whose phone matches (with/without Brazilian 9th digit)
function findStudentByPhone(phone) {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8) return null;
  return state.students.find((s) => phoneMatchesTerm(s.phone, digits));
}

// Brazilian mobile 9th-digit: match (62) 98124-9930 when searching 62 8124-9930, or vice-versa
function phoneMatchesTerm(storedPhone, termDigits) {
  if (!termDigits || termDigits.length < 8) return false;
  const stored = (storedPhone || "").replace(/\D/g, "");
  if (!stored) return false;
  const dropCC = (d) => (d.startsWith("55") && d.length > 11 ? d.slice(2) : d);
  const sl = dropCC(stored);
  const ql = dropCC(termDigits);
  const variants = (d) => {
    const v = [d];
    if (d.length === 11 && d[2] === "9") v.push(d.slice(0, 2) + d.slice(3));
    else if (d.length === 10) v.push(d.slice(0, 2) + "9" + d.slice(2));
    return v;
  };
  const sv = variants(sl);
  const qv = variants(ql);
  return sv.some((s) => qv.some((q) => s === q || s.endsWith(q) || q.endsWith(s)));
}

function selectedValue(id) {
  return document.querySelector(`#${id}`)?.value ?? "all";
}

function filteredAppointments() {
  const term = normalizedText(document.querySelector("#agendaSearch")?.value || document.querySelector("#globalStudentSearch")?.value || "");
  const modality = selectedValue("modalityFilter");
  const modalityTerm = normalizedText(modality);
  const session = selectedValue("sessionFilter");
  const status = selectedValue("statusFilter");
  const room = "all";
  const teacher = selectedValue("teacherFilter");

  return state.appointments.filter((item) => {
    const relatedStudent = student(item.studentId);
    const searchable = normalizedText(`${relatedStudent?.name ?? ""} ${relatedStudent?.email ?? ""} ${professionalName(item.teacherId)} ${item.room} ${item.type}`);
    return (
      (!term || searchable.includes(term)) &&
      (modality === "all" || item.type === modality || normalizedText(item.type).includes(modalityTerm)) &&
      (session === "all" || item.sessionKind === session) &&
      (status === "all" || item.status === status) &&
        (teacher === "all" || item.teacherId === teacher)
    );
  });
}

function render() {
  renderProfessionalOptions();
  renderModalityOptions();
  renderPlanOptions();
  renderEnrollmentOptions();
  renderDashboard();
  renderCrm();
  renderSchedule();
  renderStudents();
  renderEnrollments();
  renderProfessionals();
  renderSupplierRegisterFilters();
  renderSuppliers();
  renderModalities();
  renderPlans();
  renderMonthlyOptions();
  renderMonthlyPayments();
  renderFiscalOptions();
  renderFiscalInvoices();
  renderContracts();
  renderAccountOptions();
  renderAccounts();
  renderOfxImport();
  renderBankReconciliation();
  renderCashFlow();
  renderDre();
  renderChartAccounts();
  renderFinance();
  renderRecords();
  renderSettings();
}

function renderProfessionalOptions() {
  const teacherFilter = document.querySelector("#teacherFilter");
  if (teacherFilter) {
    const selected = teacherFilter.value || "all";
    teacherFilter.innerHTML = `<option value="all">Profissional</option>${activeProfessionals().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
    teacherFilter.value = state.professionals.some((item) => item.id === selected) ?selected : "all";
  }
  const leadOwnerFilter = document.querySelector("#leadOwnerFilter");
  if (leadOwnerFilter) {
    const selected = leadOwnerFilter.value || "all";
    leadOwnerFilter.innerHTML = `<option value="all">Todos os responsáveis</option>${activeProfessionals().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
    leadOwnerFilter.value = selected === "all" || activeProfessionals().some((item) => item.id === selected) ?selected : "all";
  }
}

function renderModalityOptions() {
  const modalityFilter = document.querySelector("#modalityFilter");
  if (modalityFilter) {
    const selected = modalityFilter.value || "all";
    modalityFilter.innerHTML = `<option value="all">Modalidades</option>${activeModalities().map((item) => `<option value="${item.name}">${item.name}</option>`).join("")}`;
    modalityFilter.value = activeModalities().some((item) => item.name === selected) ?selected : "all";
  }
  document.querySelectorAll("[data-modality-select]").forEach((select) => {
    const selected = select.value || activeModalities()[0]?.id || "";
    select.innerHTML = `<option value="">Sem modalidade</option>${activeModalities().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
    select.value = selected === "" || activeModalities().some((item) => item.id === selected) ?selected : activeModalities()[0]?.id || "";
  });
}

function renderPlanOptions() {
  const planModalityFilter = document.querySelector("#planModalityFilter");
  if (planModalityFilter) {
    const selected = planModalityFilter.value || "all";
    planModalityFilter.innerHTML = `<option value="all">Todas as modalidades</option>${activeModalities().map((item) => `<option value="${item.id}">${displayName(item.name)}</option>`).join("")}`;
    planModalityFilter.value = selected === "all" || activeModalities().some((item) => item.id === selected) ?selected : "all";
  }
  const planSessionsFilter = document.querySelector("#planSessionsFilter");
  if (planSessionsFilter) {
    const selected = planSessionsFilter.value || "all";
    const sessionOptions = [...new Set(state.plans.map((item) => Number(item.sessions || 0)))].sort((a, b) => a - b);
    planSessionsFilter.innerHTML = `<option value="all">Todas as sessões</option>${sessionOptions.map((sessions) => `<option value="${sessions}">${sessions ? `${sessions} sessões inclusas` : "Plano livre"}</option>`).join("")}`;
    planSessionsFilter.value = selected === "all" || sessionOptions.some((sessions) => String(sessions) === selected) ?selected : "all";
  }
  document.querySelectorAll("[data-plan-select]").forEach((select) => {
    const selected = select.value || activePlans()[0]?.name || "";
    const fallbackPlans = ["Mensal 2x semana", "Mensal livre", "Fisioterapia", "Experimental", "Aula avulsa"];
    const options = activePlans().length ?activePlans().map((item) => item.name) : fallbackPlans;
    select.innerHTML = options.map((name) => `<option>${name}</option>`).join("");
    select.value = options.includes(selected) ?selected : options[0] || "";
  });
}

function renderRevenueChartAccountOptions(selectedValue = "") {
  document.querySelectorAll("[data-revenue-chart-account-select]").forEach((select) => {
    const selected = selectedValue || select.value || activeRevenueChartAccounts()[0]?.id || "";
    const options = activeRevenueChartAccounts();
    select.innerHTML = options.map((item) => `<option value="${item.id}">${item.code} - ${item.name}</option>`).join("");
    select.value = options.some((item) => item.id === selected) ? selected : options[0]?.id || "";
  });
}

function renderEnrollmentOptions() {
  const modalityFilter = document.querySelector("#enrollmentModalityFilter");
  if (modalityFilter) {
    const selected = modalityFilter.value || "all";
    modalityFilter.innerHTML = `<option value="all">Modalidades</option>${activeModalities().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
    modalityFilter.value = selected === "all" || activeModalities().some((item) => item.id === selected) ?selected : "all";
  }
  const professionalFilter = document.querySelector("#enrollmentProfessionalFilter");
  if (professionalFilter) {
    const selected = professionalFilter.value || "all";
    professionalFilter.innerHTML = `<option value="all">Profissional</option>${activeProfessionals().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
    professionalFilter.value = selected === "all" || activeProfessionals().some((item) => item.id === selected) ?selected : "all";
  }
  const typeFilter = document.querySelector("#enrollmentPlanTypeFilter");
  if (typeFilter) {
    const types = ["Avulsa", "Pacote", "Mensal", "Trimestral", "Semestral"];
    const selected = typeFilter.value || "all";
    typeFilter.innerHTML = `<option value="all">Tipo de plano</option>${types.map((type) => `<option value="${type}">${type}</option>`).join("")}`;
    typeFilter.value = selected === "all" || types.includes(selected) ?selected : "all";
  }
}

function renderMonthlyOptions() {
  const modalityFilter = document.querySelector("#monthlyModalityFilter");
  if (modalityFilter) {
    const selected = modalityFilter.value || "all";
    modalityFilter.innerHTML = `<option value="all">Modalidades</option>${activeModalities().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
    modalityFilter.value = selected === "all" || activeModalities().some((item) => item.id === selected) ?selected : "all";
  }
  const teacherFilter = document.querySelector("#monthlyTeacherFilter");
  if (teacherFilter) {
    const selected = teacherFilter.value || "all";
    teacherFilter.innerHTML = `<option value="all">Professor</option>${activeProfessionals().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
    teacherFilter.value = selected === "all" || activeProfessionals().some((item) => item.id === selected) ?selected : "all";
  }
  const periodEl = document.querySelector("#monthlyPeriodFilter");
  if (periodEl && !periodEl.value) periodEl.value = demoToday.slice(0, 7);
}

function accountMonthOptions() {
  const months = new Set();
  const current = demoToday.slice(0, 7);
  months.add(current);
  state.accounts.forEach((item) => {
    if (item.competenceDate) months.add(item.competenceDate.slice(0, 7));
    if (item.forecastDate) months.add(item.forecastDate.slice(0, 7));
    if (item.dueDate) months.add(item.dueDate.slice(0, 7));
    if (item.paidDate) months.add(item.paidDate.slice(0, 7));
  });
  return [...months].sort((a, b) => b.localeCompare(a));
}

function monthLabel(ym) {
  const [year, month] = ym.split("-");
  const names = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  return `${names[Number(month) - 1]}/${year}`;
}

function renderAccountOptions() {
  const months = accountMonthOptions();
  Object.values(accountViewConfigs).forEach((config) => {
    const monthFilter = document.querySelector(`#${config.monthId}`);
    if (monthFilter && !monthFilter.value) {
      monthFilter.value = demoToday.slice(0, 7);
    }
    const chartFilter = document.querySelector(`#${config.chartId}`);
    if (chartFilter) {
      const selected = chartFilter.value || "all";
      const chartOptions = chartAccountsForFinancialDirection(config.direction);
      const label = config.direction === "Pagar" ? "Plano de contas (a pagar)" : "Plano de contas (a receber)";
      chartFilter.innerHTML = `<option value="all">${label}</option>${chartOptions.map((item) => `<option value="${item.id}">${item.code} - ${item.name}</option>`).join("")}`;
      chartFilter.value = selected === "all" || chartOptions.some((item) => item.id === selected) ? selected : "all";
    }
  });
}

function renderDashboard() {
  const todayClasses = state.appointments.filter((item) => item.date === demoToday);
  const monthRevenue = state.payments.filter((item) => item.status === "Pago").reduce((sum, item) => sum + Number(item.amount), 0);
  const openInvoices = state.payments.filter((item) => item.status !== "Pago").reduce((sum, item) => sum + Number(item.amount), 0);
  const overdue = state.payments.filter((item) => item.status === "Atrasado").reduce((sum, item) => sum + Number(item.amount), 0);
  const pending = state.payments.filter((item) => item.status === "Pendente").reduce((sum, item) => sum + Number(item.amount), 0);
  const weekAppointments = state.appointments.filter((item) => weekDays().some((day) => isoDate(day) === item.date));
  const weeklyCapacity = Math.max(1, activeProfessionals().reduce((sum, item) => sum + Number(item.maxPatients || 0), 0) * 5);
  const occupancyRate = Math.min(100, Math.round((weekAppointments.length / weeklyCapacity) * 100));
  const confirmedRate = todayClasses.length ?Math.round((todayClasses.filter((item) => ["Confirmada", "Concluída", "Visita realizada"].includes(item.status)).length / todayClasses.length) * 100) : 0;
  const atRisk = state.students.filter((item) => item.status === "Inativo" || item.membership === "Matr. Cancel.").length;
  const financialTitles = state.accounts.filter((item) => item.origin !== "Importação OFX" && item.origin !== "ImportaÃ§Ã£o OFX" && item.status !== "Cancelado");
  const receivableOverdue = financialTitles.filter((item) => item.direction === "Receber" && isAccountOverdue(item)).reduce((sum, item) => sum + accountOpenAmount(item), 0);
  const payableOverdue = financialTitles.filter((item) => item.direction === "Pagar" && isAccountOverdue(item)).reduce((sum, item) => sum + accountOpenAmount(item), 0);
  const predictedMonthBalance = financialTitles
    .filter((item) => accountExpectedDate(item).slice(0, 7) === demoToday.slice(0, 7))
    .reduce((sum, item) => sum + (item.direction === "Receber" ? accountOpenAmount(item) : -accountOpenAmount(item)), 0);
  const realizedMonthBalance = state.bankMovements
    .filter((item) => item.reconciliationStatus === "reconciled" && String(item.date || "").slice(0, 7) === demoToday.slice(0, 7))
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const unreconciledMovements = state.bankMovements.filter((item) => item.reconciliationStatus === "unreconciled").length;

  document.querySelector("#activeStudentsMetric").textContent = state.students.filter((item) => item.status === "Ativo").length;
  document.querySelector("#todayClassesMetric").textContent = todayClasses.length;
  document.querySelector("#monthRevenueMetric").textContent = currency(monthRevenue);
  document.querySelector("#openInvoicesMetric").textContent = currency(openInvoices);
  document.querySelector("#occupancyMetric").textContent = `${occupancyRate}%`;
  document.querySelector("#activeProfessionalsMetric").textContent = activeProfessionals().length;
  document.querySelector("#activePlansMetric").textContent = activePlans().length;
  document.querySelector("#confirmedRateMetric").textContent = `${confirmedRate}%`;
  document.querySelector("#executiveSummary").textContent = `${weekAppointments.length} atendimentos na semana, ${currency(openInvoices)} em aberto e ${atRisk} pacientes exigindo atenção comercial.`;

  const dashboardMonths = recentMonthKeys(6);
  const activeStudentTotal = state.students.filter((item) => item.status === "Ativo").length;
  const monthlyClassesTrend = dashboardMonths.map((month) => state.appointments.filter((item) => monthKey(item.date) === month).length);
  const monthlyRevenueTrend = dashboardMonths.map((month) =>
    financialTitles
      .filter((item) => item.direction === "Receber" && monthKey(item.paymentDate || item.settlementDate || item.paidAt || accountExpectedDate(item)) === month)
      .reduce((sum, item) => sum + accountPaidAmount(item), 0),
  );
  const monthlyOpenTrend = dashboardMonths.map((month) =>
    financialTitles
      .filter((item) => item.direction === "Receber" && monthKey(accountExpectedDate(item)) === month)
      .reduce((sum, item) => sum + accountOpenAmount(item), 0),
  );
  const monthlyOccupancyTrend = dashboardMonths.map((month) => {
    const monthClasses = state.appointments.filter((item) => monthKey(item.date) === month).length;
    return Math.min(100, Math.round((monthClasses / Math.max(1, weeklyCapacity * 4)) * 100));
  });
  const monthlyConfirmedTrend = dashboardMonths.map((month) => {
    const monthClasses = state.appointments.filter((item) => monthKey(item.date) === month);
    if (!monthClasses.length) return 0;
    return Math.round((monthClasses.filter((item) => ["Confirmada", "Concluída", "Visita realizada"].includes(item.status)).length / monthClasses.length) * 100);
  });
  const activeStudentsTrend = dashboardMonths.map((month) => {
    const enrolled = new Set(
      state.enrollments
        .filter((en) => en.startDate && en.startDate.slice(0, 7) <= month)
        .map((en) => en.studentId),
    );
    state.students
      .filter((s) => s.registrationDate && s.registrationDate.slice(0, 7) <= month && s.status === "Ativo")
      .forEach((s) => enrolled.add(s.id));
    return enrolled.size;
  });
  setMetricTrend("#activeStudentsTrend", activeStudentsTrend, "#0f9692");
  setMetricTrend("#todayClassesTrend", monthlyClassesTrend, "#48b962");
  setMetricTrend("#monthRevenueTrend", monthlyRevenueTrend, "#3a9eb8");
  setMetricTrend("#openInvoicesTrend", monthlyOpenTrend, "#8057d8");
  setMetricTrend("#occupancyTrend", monthlyOccupancyTrend, "#0f9692");
  setMetricTrend("#activeProfessionalsTrend", softTrend(activeProfessionals().length, dashboardMonths, 0.04), "#48b962");
  setMetricTrend("#activePlansTrend", softTrend(activePlans().length, dashboardMonths, 0.03), "#3a9eb8");
  setMetricTrend("#confirmedRateTrend", monthlyConfirmedTrend, "#8057d8");

  document.querySelector("#todayTimeline").innerHTML = todayClasses.length
    ? todayClasses
        .sort((a, b) => a.time.localeCompare(b.time))
        .slice(0, 7)
        .map(
          (item) => `
            <article class="dashboard-schedule-row">
              <span class="dashboard-dot"></span>
              <strong>${item.time}</strong>
              <span>${studentName(item.studentId)}</span>
              <small>${item.type}</small>
              <span class="status-pill ${statusClass(item.status)}">${item.status}</span>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">Nenhuma aula prevista para hoje.</div>`;

  const heatmapDays = weekDays().slice(0, 6);
  const heatmapHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21];
  const maxHourCount = Math.max(
    1,
    ...heatmapDays.flatMap((day) => {
      const date = isoDate(day);
      return heatmapHours.map((hour) => state.appointments.filter((item) => item.date === date && Number(String(item.time || "").slice(0, 2)) === hour).length);
    }),
  );
  document.querySelector("#occupancyHeatmap").innerHTML = `
    <div class="heatmap-grid">
      <span></span>
      ${["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => `<strong>${day}</strong>`).join("")}
      ${heatmapHours
        .map((hour) => {
          const cells = heatmapDays
            .map((day) => {
              const date = isoDate(day);
              const count = state.appointments.filter((item) => item.date === date && Number(String(item.time || "").slice(0, 2)) === hour).length;
              const level = count === 0 ? 0 : Math.max(1, Math.ceil((count / maxHourCount) * 4));
              return `<span class="heat-cell level-${level}" title="${count} aulas"></span>`;
            })
            .join("");
          return `<small>${String(hour).padStart(2, "0")}h</small>${cells}`;
        })
        .join("")}
    </div>
    <div class="heatmap-legend">
      <span><i class="level-0"></i>Livre</span>
      <span><i class="level-1"></i>Leve</span>
      <span><i class="level-2"></i>Moderado</span>
      <span><i class="level-4"></i>Alto</span>
    </div>
  `;

  const paidReceivables = financialTitles.filter((item) => item.direction === "Receber" && accountPaidAmount(item) > 0);
  const modalityRevenueRows = activeModalities()
    .map((modality) => {
      const modalityPlans = new Set(state.plans.filter((plan) => plan.modalityId === modality.id).map((plan) => plan.id));
      const modalityEnrollments = new Set(state.enrollments.filter((enrollment) => enrollment.modalityId === modality.id || modalityPlans.has(enrollment.planId)).map((enrollment) => enrollment.id));
      const amount = paidReceivables.filter((account) => modalityEnrollments.has(account.enrollmentId)).reduce((sum, account) => sum + accountPaidAmount(account), 0);
      return { name: modality.name, amount };
    })
    .filter((item) => item.amount > 0)
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3);
  const revenueTotal = Math.max(1, modalityRevenueRows.reduce((sum, item) => sum + item.amount, 0));
  const donutStops = modalityRevenueRows.length
    ? modalityRevenueRows
        .reduce(
          (acc, item, index) => {
            const start = acc.cursor;
            const end = start + (item.amount / revenueTotal) * 100;
            acc.parts.push(`${["#52b977", "#8057d8", "#f28b2e"][index] || "#0ea5a4"} ${start}% ${end}%`);
            acc.cursor = end;
            return acc;
          },
          { cursor: 0, parts: [] },
        )
        .parts.join(", ")
    : "#e5edf5 0% 100%";
  document.querySelector("#dashboardRevenuePanel").innerHTML = `
    <div class="revenue-line-block">
      <span>Receita mensal</span>
      <strong>${currency(monthRevenue)}</strong>
      <small>↗ 15% vs mês anterior</small>
      <div class="mini-line-chart"></div>
    </div>
    <div class="revenue-donut-block">
      <span>Receita por modalidade</span>
      <div class="donut-chart" style="--donut: ${donutStops};"></div>
      <div class="donut-legend">
        ${
          modalityRevenueRows.length
            ? modalityRevenueRows
                .map((item, index) => `<span><i style="background:${["#52b977", "#8057d8", "#f28b2e"][index] || "#0ea5a4"}"></i>${item.name}<b>${Math.round((item.amount / revenueTotal) * 100)}%</b><small>${currency(item.amount)}</small></span>`)
                .join("")
            : `<span><i></i>Sem receita classificada<b>0%</b><small>${currency(0)}</small></span>`
        }
      </div>
    </div>
  `;

  const totalLeads = Math.max(1, state.leads.length);
  const funnelPipeline = leadStatuses.filter((s) => s !== "Perdido");
  const funnelRows = funnelPipeline.map((status) => [status, state.leads.filter((l) => l.status === status).length]);
  const lostCount = state.leads.filter((l) => l.status === "Perdido").length;
  const maxFunnel = Math.max(1, ...funnelRows.map((r) => r[1]));
  const funnelHtml = funnelRows
    .map(([label, value], index) => {
      const width = Math.max(12, Math.round((value / maxFunnel) * 100));
      const pct = Math.round((value / totalLeads) * 100);
      const opacity = 1 - (index * 0.08);
      const isConvert = label === "Matriculado";
      return `<article style="--funnel-width:${width}%; --funnel-opacity:${opacity};" ${isConvert ? 'data-funnel-success="1"' : ""}>
        <span></span><strong>${label}</strong><b>${value}</b><small>${pct}%</small>
      </article>`;
    })
    .join("");
  const lostHtml = lostCount
    ? `<article data-funnel-lost="1" style="--funnel-width:${Math.round((lostCount / maxFunnel) * 100)}%; --funnel-opacity:0.7;">
        <span></span><strong>Perdidos</strong><b>${lostCount}</b><small>${Math.round((lostCount / totalLeads) * 100)}%</small>
      </article>`
    : "";
  document.querySelector("#dashboardFunnel").innerHTML = funnelHtml + lostHtml;

  const upcomingAccounts = financialTitles
    .filter((item) => item.direction === "Receber" && accountOpenAmount(item) > 0)
    .sort((a, b) => dateValue(accountExpectedDate(a)) - dateValue(accountExpectedDate(b)))
    .slice(0, 5);
  document.querySelector("#dashboardDueList").innerHTML = upcomingAccounts.length
    ? upcomingAccounts
        .map((item) => `
          <article>
            <span class="avatar-dot">${(item.person || studentName(item.studentId) || "?").trim().charAt(0).toUpperCase()}</span>
            <strong>${item.person || studentName(item.studentId)}</strong>
            <small>${chartAccountName(item.chartAccountId).replace(/^\d+\s-\s/, "")}</small>
            <time>${dateLabel(accountExpectedDate(item))}</time>
            <b>${currency(accountOpenAmount(item))}</b>
          </article>
        `)
        .join("")
    : `<div class="empty-state">Sem vencimentos em aberto.</div>`;

  const recentActivities = [
    ...state.records.slice(-2).map((item) => ({ icon: "↗", title: "Nova avaliação realizada", detail: `${studentName(item.studentId)} · ${item.title}`, tone: "blue" })),
    ...paidReceivables.slice(-2).map((item) => ({ icon: "$", title: "Pagamento recebido", detail: `${item.person || studentName(item.studentId)} - ${currency(accountPaidAmount(item))}`, tone: "green" })),
    ...state.leads.slice(-2).map((item) => ({ icon: "+", title: "Lead registrado", detail: `${item.name} · ${item.interest}`, tone: "teal" })),
    ...state.appointments.filter((item) => item.status === "Faltou").slice(-1).map((item) => ({ icon: "×", title: "Falta registrada", detail: `${studentName(item.studentId)} · ${item.type}`, tone: "red" })),
  ].slice(0, 5);
  document.querySelector("#dashboardActivityList").innerHTML = recentActivities.length
    ? recentActivities.map((item, index) => `<article><span class="activity-icon ${item.tone}">${item.icon}</span><div><strong>${item.title}</strong><small>${item.detail}</small></div><time>há ${index + 1} h</time></article>`).join("")
    : `<div class="empty-state">Sem atividades recentes.</div>`;
}

function renderCrm() {
  const table = document.querySelector("#leadsTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#leadSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#leadStatusFilter")?.value ?? "all";
  const ownerFilter = document.querySelector("#leadOwnerFilter")?.value ?? "all";
  const originFilter = document.querySelector("#leadOriginFilter")?.value ?? "all";
  // Exclude contacts who were already students when they reached out (phone match with/without
  // 9th digit). Leads converted through the funnel (Matriculado) must stay, or conversion zeroes out.
  const activeLeads = state.leads.filter((item) => item.status === "Matriculado" || !findStudentByPhone(item.phone));
  const leads = activeLeads
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => ownerFilter === "all" || item.ownerId === ownerFilter)
    .filter((item) => originFilter === "all" || item.origin === originFilter || item.entryChannel === originFilter)
    .filter((item) => !term || normalizedText([item.name, item.phone, item.email, item.instagram, item.origin, item.entryChannel, item.interest, item.status, item.initialMessage, item.notes].join(" ")).includes(term) || phoneMatchesTerm(item.phone, term.replace(/\D/g, "")))
    .sort((a, b) => dateValue(a.nextFollowUpDate) - dateValue(b.nextFollowUpDate));

  renderCrmDashboard(activeLeads);

  table.innerHTML = leads.length
    ? leads
        .map(
          (lead) => `
            <tr>
              <td>
                <button class="row-action-button lead-menu-toggle" data-lead-menu-toggle="${lead.id}" type="button" title="Ações" aria-label="Ações"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg></button>
              </td>
              <td><div class="patient-name"><strong>${lead.name.toUpperCase()}</strong><span>${lead.phone || "-"}${lead.instagram ? ` · ${lead.instagram}` : ""}</span></div></td>
              <td>${lead.entryChannel || "-"}</td>
              <td>${lead.origin}</td>
              <td>${lead.interest}</td>
              <td>
                <select class="status-pill-select ${leadStatusClass(lead.status)}" data-lead-status-select="${lead.id}" title="Alterar status">
                  ${leadStatuses.map((s) => `<option value="${s}" ${s === lead.status ? "selected" : ""}>${s}</option>`).join("")}
                </select>
              </td>
              <td>${professionalName(lead.ownerId)}</td>
              <td>${dateLabel(lead.entryDate)}${lead.visitDate ? ` / ${dateLabel(lead.visitDate)}` : ""}</td>
              <td>${lead.lossReason || "-"}</td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="9"><div class="empty-state">Nenhum lead encontrado.</div></td></tr>`;

}

function leadActionMenuHtml(lead) {
  return `
    <button class="row-action-menu-item" data-edit-lead="${lead.id}" type="button"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Editar lead</button>
    <button class="row-action-menu-item" data-schedule-lead="${lead.id}" type="button"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Agendar visita</button>
    <button class="row-action-menu-item" data-register-student-lead="${lead.id}" type="button"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> Cadastrar cliente</button>
    <button class="row-action-menu-item" data-lose-lead="${lead.id}" type="button"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Marcar como perdido</button>
    ${isAdminSession() ? `<button class="row-action-menu-item row-action-menu-item--danger" data-delete-lead="${lead.id}" type="button"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg> Excluir lead</button>` : ""}
    ${lead.phone ? `<button class="row-action-menu-item" data-view-lead-chat="${lead.id}" type="button"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> Ver conversa</button>` : ""}
    ${lead.phone ? `<a class="row-action-menu-item" href="${whatsappLeadUrl(lead.phone)}" target="_blank" rel="noopener noreferrer"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> WhatsApp</a>` : ""}
  `;
}

function closeLeadActionMenu() {
  const menu = document.querySelector("#leadRowActionMenu");
  if (menu) menu.style.display = "none";
}

function toggleLeadActionMenu(leadId, anchorButton) {
  const menu = document.querySelector("#leadRowActionMenu");
  if (!menu) return;
  const wasOpenForThis = menu.style.display !== "none" && menu.dataset.leadMenuFor === leadId;
  closeLeadActionMenu();
  if (wasOpenForThis) return;

  const lead = state.leads.find((l) => l.id === leadId);
  if (!lead) return;

  menu.innerHTML = leadActionMenuHtml(lead);
  menu.dataset.leadMenuFor = leadId;
  menu.style.left = "-9999px";
  menu.style.top = "-9999px";
  menu.style.display = "flex";

  const anchorRect = anchorButton.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  let left = anchorRect.right - menuRect.width;
  if (left < 8) left = 8;
  if (left + menuRect.width > window.innerWidth - 8) left = window.innerWidth - menuRect.width - 8;
  let top = anchorRect.bottom + 4;
  if (top + menuRect.height > window.innerHeight - 8) top = anchorRect.top - menuRect.height - 4;
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

window.addEventListener("scroll", () => closeLeadActionMenu(), true);
window.addEventListener("resize", () => closeLeadActionMenu());

document.addEventListener("change", (event) => {
  const statusSelect = event.target.closest("[data-lead-status-select]");
  if (statusSelect) changeLeadStatusInline(statusSelect.dataset.leadStatusSelect, statusSelect.value);
});

function renderCrmDashboard(activeLeads) {
  const funnel = document.querySelector("#crmFunnel");
  if (!funnel) return;

  const all = activeLeads ?? state.leads.filter((l) => l.status === "Matriculado" || !findStudentByPhone(l.phone));
  const active = all.filter((l) => l.status !== "Perdido");

  const statusShort = {
    "Novo lead": "Novo", "Contato iniciado": "Contato", "Respondido": "Respondido",
    "Visita agendada": "Vis. agend.", "Visita realizada": "Vis. realiz.",
    "Proposta enviada": "Proposta", "Matriculado": "Matriculado",
  };
  const funnelStages = leadStatuses.filter((s) => s !== "Perdido");
  const funnelData = funnelStages.map((s) => ({ s, n: all.filter((l) => l.status === s).length }));
  // Leads currently sitting at a later stage already passed through every earlier one, so the
  // funnel's shape/percentages must use "reached at least this stage" (cumulative from the bottom
  // up), not each stage's raw headcount — otherwise a stage with many leads parked in it (e.g.
  // "Respondido") looks bigger than the stages that fed into it, and conversion rates exceed 100%.
  const cumulative = funnelData.reduceRight((acc, { n }, i) => {
    acc[i] = n + (acc[i + 1] || 0);
    return acc;
  }, []);
  const maxF = Math.max(cumulative[0] || 0, 1);
  const totalFunnel = cumulative[0] || 0;
  const totalAtivos = active.length;
  const matriculados = all.filter((l) => l.status === "Matriculado").length;
  const perdidos = all.filter((l) => l.status === "Perdido").length;
  const convPct = all.length > 0 ? Math.round((matriculados / all.length) * 100) : 0;

  // --- Funil horizontal ---
  const funnelBlock = `
    <div class="crm-dash-block crm-dash-funnel">
      <p class="crm-dash-title">Funil de Conversão</p>
      <div class="crm-dash-funnel-rows">
        ${funnelData.map(({ s, n }, i) => {
          // Percentual de cada etapa é a fatia do total de leads do funil que está parada ali —
          // soma sempre 100% entre as etapas (diluído), em vez de taxa de conversão etapa a etapa.
          const pct = totalFunnel > 0 ? Math.round((n / totalFunnel) * 100) : null;
          const w = Math.max((cumulative[i] / maxF) * 100, cumulative[i] > 0 ? 3 : 0);
          return `<div class="crm-frow">
            <span class="crm-frow-label">${statusShort[s]}</span>
            <div class="crm-frow-track"><div class="crm-frow-bar" style="width:${w}%"></div></div>
            <span class="crm-frow-n">${n}</span>
            <span class="crm-frow-pct">${pct !== null ? pct + "%" : ""}</span>
          </div>`;
        }).join("")}
      </div>
    </div>`;

  // --- Donut de origem ---
  const originMap = {};
  all.forEach((l) => { const k = l.origin || l.entryChannel || "Outro"; originMap[k] = (originMap[k] || 0) + 1; });
  const originEntries = Object.entries(originMap).sort((a, b) => b[1] - a[1]);
  const originColors = ["#0ea5a4", "#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"];
  const total = all.length || 1;
  const circ = 2 * Math.PI * 26;
  let off = 0;
  const segs = originEntries.map(([, n], i) => {
    const dash = (n / total) * circ;
    const s = `<circle cx="34" cy="34" r="26" fill="none" stroke="${originColors[i % 6]}" stroke-width="10"
      stroke-dasharray="${dash} ${circ - dash}" stroke-dashoffset="${-off}" transform="rotate(-90 34 34)"/>`;
    off += dash; return s;
  });
  const originBlock = `
    <div class="crm-dash-block crm-dash-origin">
      <p class="crm-dash-title">Origem</p>
      <div class="crm-origin-inner">
        <svg viewBox="0 0 68 68" class="crm-donut">
          <circle cx="34" cy="34" r="26" fill="none" stroke="#e2e8f0" stroke-width="10"/>
          ${segs.join("")}
          <text x="34" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">${all.length}</text>
        </svg>
        <ul class="crm-origin-legend">
          ${originEntries.slice(0, 5).map(([k, n], i) =>
            `<li><span class="crm-origin-dot" style="background:${originColors[i % 6]}"></span><span>${k}</span><b>${n}</b></li>`
          ).join("")}
        </ul>
      </div>
    </div>`;

  // --- Volume no tempo (últimos 6 meses) ---
  const now = new Date();
  const months = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    return { key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`, label: d.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""), n: 0 };
  });
  all.forEach((l) => { const slot = months.find((m) => m.key === String(l.entryDate || "").slice(0, 7)); if (slot) slot.n++; });
  const maxM = Math.max(...months.map((m) => m.n), 1);
  const W = 300, H = 90, pL = 18, pR = 18, pT = 18, pB = 24;
  const iW = W - pL - pR, iH = H - pT - pB;
  const step = iW / (months.length - 1);
  const pts = months.map((m, i) => `${pL + i * step},${pT + iH - (m.n / maxM) * iH}`);
  const area = `${pL},${pT + iH} ${pts.join(" ")} ${pL + (months.length - 1) * step},${pT + iH}`;
  const timeBlock = `
    <div class="crm-dash-block crm-dash-time">
      <p class="crm-dash-title">Entradas por Mês</p>
      <svg viewBox="0 0 ${W} ${H}" class="crm-time-svg">
        <defs><linearGradient id="crmAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0ea5a4" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="#0ea5a4" stop-opacity="0.02"/>
        </linearGradient></defs>
        ${Array.from({ length: 4 }, (_, i) => {
          const y = pT + (iH / 3) * i;
          const val = Math.round(maxM - (maxM / 3) * i);
          return `<line x1="${pL}" y1="${y}" x2="${W - pR}" y2="${y}" stroke="#e2e8f0" stroke-width="0.5"/>
                  <text x="${pL - 4}" y="${y + 3}" text-anchor="end" font-size="7" fill="#cbd5e1">${val}</text>`;
        }).join("")}
        <polygon points="${area}" fill="url(#crmAreaGrad)"/>
        <polyline points="${pts.join(" ")}" fill="none" stroke="#0ea5a4" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        ${months.map((m, i) => {
          const x = pL + i * step;
          const y = pT + iH - (m.n / maxM) * iH;
          return `${m.n > 0 ? `<circle cx="${x}" cy="${y}" r="3" fill="#0ea5a4" stroke="#fff" stroke-width="1.5"/>
                  <text x="${x}" y="${y - 7}" text-anchor="middle" font-size="8" fill="#0ea5a4" font-weight="700">${m.n}</text>` : ""}
                  <text x="${x}" y="${H - 4}" text-anchor="middle" font-size="8" fill="#94a3b8">${m.label}</text>`;
        }).join("")}
      </svg>
    </div>`;

  // --- KPIs rápidos ---
  const kpiBlock = `
    <div class="crm-dash-kpis">
      <div class="crm-kpi"><strong>${all.length}</strong><span>Total</span></div>
      <div class="crm-kpi"><strong>${totalAtivos}</strong><span>Ativos</span></div>
      <div class="crm-kpi crm-kpi--green"><strong>${convPct}%</strong><span>Conversão</span></div>
      <div class="crm-kpi crm-kpi--red"><strong>${perdidos}</strong><span>Perdidos</span></div>
    </div>`;

  funnel.innerHTML = `
    <div class="crm-dash-wrap">
      ${kpiBlock}
      <div class="crm-dash-grid">
        ${funnelBlock}
        ${originBlock}
        ${timeBlock}
      </div>
    </div>`;
}

let waLogRows = [];
let waLogFilteredRows = [];

function waLogBadgeClass(classification) {
  const map = {
    "Novo lead": "wa-log-badge--novo",
    "Lead existente": "wa-log-badge--existente",
    "Aluno existente": "wa-log-badge--aluno",
    "Ignorado": "wa-log-badge--ignorado",
    "Mensagem sem contato": "wa-log-badge--semcontato",
  };
  return map[classification] || "wa-log-badge--ignorado";
}

async function fetchWaLog() {
  const table = document.querySelector("#waLogTable");
  if (table) table.innerHTML = `<tr><td colspan="5"><div class="empty-state">Carregando...</div></td></tr>`;
  try {
    const res = await fetch("/.netlify/functions/records?table=whatsapp_interactions&limit=500&columns=phone,contact_name,message,classification,created_at");
    waLogRows = res.ok ? await res.json() : [];
  } catch {
    waLogRows = [];
  }
  waLogRows.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
  renderWaLogTable();
}

function renderWaLogTable() {
  const table = document.querySelector("#waLogTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#waLogSearch")?.value.trim() ?? "");
  const rows = waLogRows.filter((r) => !term || normalizedText([r.phone, r.contact_name, r.message, r.classification].join(" ")).includes(term) || phoneMatchesTerm(r.phone, term.replace(/\D/g, "")));
  waLogFilteredRows = rows;

  table.innerHTML = rows.length
    ? rows.map((r, i) => `
        <tr>
          <td>
            ${r.phone ? `<button class="row-action-button lead-action-button" data-wa-restore-index="${i}" type="button" title="Restaurar como lead" aria-label="Restaurar como lead"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></button>` : ""}
          </td>
          <td>${r.created_at ? new Date(r.created_at).toLocaleString("pt-BR") : "-"}</td>
          <td>${r.phone || "-"}</td>
          <td>${r.contact_name || "-"}</td>
          <td class="wa-log-msg">${(r.message || "-").replace(/</g, "&lt;")}</td>
          <td><span class="wa-log-badge ${waLogBadgeClass(r.classification)}">${r.classification || "-"}</span></td>
        </tr>
      `).join("")
    : `<tr><td colspan="6"><div class="empty-state">Nenhuma interação encontrada.</div></td></tr>`;
}

function restoreLeadFromWaLog(row) {
  if (!row?.phone) { toast("Telefone não informado nesta mensagem."); return; }

  const existingStudent = findStudentByPhone(row.phone);
  if (existingStudent) { toast(`${existingStudent.name} já é aluno(a) cadastrado(a) — não é necessário restaurar.`); return; }

  const digits = row.phone.replace(/\D/g, "");
  const existingLead = state.leads.find((l) => phoneMatchesTerm(l.phone, digits));
  if (existingLead) {
    closeWaLogOverlay();
    switchView("crm");
    const search = document.querySelector("#leadSearch");
    if (search) search.value = existingLead.name;
    renderCrm();
    toast(`Lead "${existingLead.name}" já está na lista.`);
    return;
  }

  const lead = normalizeLead({
    name: row.contact_name || "Lead WhatsApp",
    phone: row.phone,
    initialMessage: row.message || "",
    entryDate: row.created_at ? String(row.created_at).slice(0, 10) : demoToday,
    entryChannel: "WhatsApp",
    origin: "WhatsApp",
    status: "Novo lead",
    notes: "Restaurado a partir do log de mensagens do WhatsApp.",
  }, 0, false);
  state.leads.push(lead);
  saveState({ immediate: true });
  closeWaLogOverlay();
  switchView("crm");
  render();
  toast(`Lead "${lead.name}" restaurado com sucesso.`);
}

function openWaLogOverlay(filterPhone = "", contactLabel = "") {
  const overlay = document.querySelector("#whatsappLogOverlay");
  if (!overlay) return;
  overlay.hidden = false;
  const search = document.querySelector("#waLogSearch");
  if (search) search.value = filterPhone;
  const title = document.querySelector("#waLogTitle");
  if (title) title.textContent = contactLabel ? `Conversa com ${contactLabel} (WhatsApp)` : "Log de mensagens recebidas (WhatsApp)";
  fetchWaLog();
}

function openLeadConversation(leadId) {
  const lead = state.leads.find((l) => l.id === leadId);
  if (!lead?.phone) { toast("Este lead não possui telefone cadastrado."); return; }
  openWaLogOverlay(lead.phone.replace(/\D/g, ""), lead.name);
}

function closeWaLogOverlay() {
  const overlay = document.querySelector("#whatsappLogOverlay");
  if (overlay) overlay.hidden = true;
}

document.querySelector("#crmWhatsappLogButton")?.addEventListener("click", () => openWaLogOverlay());
document.querySelector("#waLogClose")?.addEventListener("click", closeWaLogOverlay);
document.querySelector("#waLogRefresh")?.addEventListener("click", fetchWaLog);
document.querySelector("#waLogSearch")?.addEventListener("input", renderWaLogTable);
document.querySelector("#waLogTable")?.addEventListener("click", (e) => {
  const button = e.target.closest("[data-wa-restore-index]");
  if (!button) return;
  const row = waLogFilteredRows[Number(button.dataset.waRestoreIndex)];
  if (row) restoreLeadFromWaLog(row);
});
document.querySelector("#whatsappLogOverlay")?.addEventListener("click", (e) => {
  if (e.target.id === "whatsappLogOverlay") closeWaLogOverlay();
});

function leadStatusClass(status) {
  if (status === "Matriculado") return "ativo";
  if (status === "Perdido") return "atrasado";
  if (["Visita agendada", "Visita realizada", "Proposta enviada"].includes(status)) return "pendente";
  return "aguardando";
}

let _svLeadId = null;

function openScheduleVisitOverlay(leadId) {
  const lead = state.leads.find((item) => item.id === leadId);
  if (!lead) return;
  _svLeadId = leadId;

  const overlay = document.querySelector("#scheduleVisitOverlay");
  if (!overlay) return;

  // Populate lead name
  document.querySelector("#svLeadName").textContent = lead.name + (lead.interest ? ` · ${lead.interest}` : "");

  // Default date
  document.querySelector("#svDate").value = lead.nextFollowUpDate || demoToday;

  // Default times
  document.querySelector("#svTime").value = "09:00";
  document.querySelector("#svEndTime").value = "10:00";

  // Populate professional select
  const profSelect = document.querySelector("#svProfessional");
  profSelect.innerHTML = activeProfessionals().map((p) => `<option value="${p.id}">${p.name}</option>`).join("");
  const defaultProf = lead.ownerId && activeProfessionals().some((p) => p.id === lead.ownerId) ? lead.ownerId : activeProfessionals()[0]?.id || "";
  profSelect.value = defaultProf;

  // Hide availability until date is set
  document.querySelector("#svAvailability").hidden = true;

  overlay.hidden = false;
  updateSvAvailability();
}

function updateSvAvailability() {
  const date = document.querySelector("#svDate")?.value;
  const timeStart = document.querySelector("#svTime")?.value || "00:00";
  const timeEnd = document.querySelector("#svEndTime")?.value || "23:59";
  const profId = document.querySelector("#svProfessional")?.value || "";
  const avDiv = document.querySelector("#svAvailability");
  const listDiv = document.querySelector("#svConflictList");
  if (!avDiv || !listDiv) return;

  if (!date) { avDiv.hidden = true; return; }

  // All appointments on this date
  const dayAppts = state.appointments.filter((a) => a.date === date && a.status !== "Cancelada");

  // Separate conflicts from free slots
  const conflicts = dayAppts.filter((a) => {
    const sameProf = a.teacherId === profId;
    const overlaps = a.time < timeEnd && a.endTime > timeStart;
    return sameProf && overlaps;
  });

  const othersSameDay = dayAppts.filter((a) => {
    const sameProf = a.teacherId === profId;
    const overlaps = a.time < timeEnd && a.endTime > timeStart;
    return !(sameProf && overlaps);
  });

  const studentName = (appt) => {
    const s = state.students.find((st) => st.id === appt.studentId);
    return s?.name || "Cliente";
  };
  const profName = (appt) => professionalName(appt.teacherId) || "—";

  let html = "";

  if (conflicts.length === 0) {
    html += `<div class="sv-free"><span class="sv-free-icon">✓</span> Horário livre para ${profName({ teacherId: profId })} às ${timeStart}</div>`;
  } else {
    html += conflicts.map((a) => `
      <div class="sv-conflict">
        <span class="sv-conflict-icon">⚠</span>
        <span><strong>${a.time}–${a.endTime}</strong> · ${studentName(a)} com ${profName(a)}</span>
      </div>`).join("");
  }

  if (othersSameDay.length) {
    html += `<p class="sv-other-title">Outros agendamentos neste dia</p>`;
    html += othersSameDay.slice(0, 6).map((a) => `
      <div class="sv-other">
        ${a.time}–${a.endTime} · ${studentName(a)} · ${profName(a)}
      </div>`).join("");
    if (othersSameDay.length > 6) html += `<div class="sv-other sv-other-more">+${othersSameDay.length - 6} mais</div>`;
  }

  if (dayAppts.length === 0) {
    html = `<div class="sv-free"><span class="sv-free-icon">✓</span> Nenhum agendamento neste dia — horário totalmente livre</div>`;
  }

  listDiv.innerHTML = html;
  avDiv.hidden = false;
}

function saveScheduleVisit() {
  const lead = state.leads.find((item) => item.id === _svLeadId);
  if (!lead) return;

  const date = document.querySelector("#svDate")?.value;
  const time = document.querySelector("#svTime")?.value || "09:00";
  const endTime = document.querySelector("#svEndTime")?.value || "10:00";
  const profId = document.querySelector("#svProfessional")?.value || activeProfessionals()[0]?.id || "";
  if (!date) { toast("Informe a data da visita."); return; }
  if (isWeekend(parseLocalDate(date))) {
    const dateEl = document.querySelector("#svDate");
    dateEl.setCustomValidity("Não é permitido agendar visita em finais de semana (sábado ou domingo).");
    dateEl.reportValidity();
    dateEl.setCustomValidity("");
    return;
  }

  const studentId = lead.linkedStudentId || "";

  const appointment = {
    id: uid("a"),
    date,
    time,
    endTime,
    studentId,
    leadId: lead.id,
    teacherId: profId,
    type: lead.interest === "Outro" ? "Pilates" : (lead.interest || "Pilates"),
    status: "Aguardando",
    sessionKind: "Experimental",
  };
  state.appointments.push(appointment);

  lead.status = "Visita agendada";
  lead.visitDate = date;
  lead.linkedAppointmentId = appointment.id;
  lead.history = `${lead.history || ""}\nExperimental agendada para ${dateLabel(date)} às ${time}.`.trim();

  document.querySelector("#scheduleVisitOverlay").hidden = true;
  _svLeadId = null;

  // Set week BEFORE render so renderSchedule() uses the correct week
  currentWeekStart = toMonday(parseLocalDate(date));

  saveState();
  render();
  switchView("agenda");
  toast("Visita agendada! Redirecionando para a agenda.");
}

let _loseLeadId = null;

function openLoseLeadOverlay(leadId) {
  const lead = state.leads.find((item) => item.id === leadId);
  if (!lead) return;
  _loseLeadId = leadId;
  document.querySelector("#loseLeadName").textContent = lead.name;
  document.querySelector("#loseLeadReason").value = lead.lossReason || "";
  document.querySelector("#loseLeadOverlay").hidden = false;
  document.querySelector("#loseLeadReason").focus();
}

function saveLoseLead() {
  const lead = state.leads.find((item) => item.id === _loseLeadId);
  if (!lead) return;
  const reason = document.querySelector("#loseLeadReason").value.trim();
  if (!reason) { document.querySelector("#loseLeadReason").focus(); return; }
  lead.status = "Perdido";
  lead.lossReason = reason;
  lead.history = `${lead.history || ""}\nMarcado como perdido em ${dateLabel(demoToday)}: ${reason}`.trim();
  document.querySelector("#loseLeadOverlay").hidden = true;
  _loseLeadId = null;
  saveState();
  renderCrm();
  toast("Lead marcado como perdido.");
}

function registerStudentFromLead(leadId) {
  const lead = state.leads.find((l) => l.id === leadId);
  if (!lead) return;
  if (lead.linkedStudentId && state.students.find((s) => s.id === lead.linkedStudentId)) {
    toast("Cliente já cadastrado para este lead.");
    return;
  }
  _pendingStudentLeadId = leadId;
  switchView("students");
  editingStudentId = null;
  openModal("student", { name: lead.name, email: lead.email || "", phone: lead.phone || "" });
  document.querySelector("#modalTitle").textContent = "Cadastrar cliente";
}

function convertLead(leadId) {
  const lead = state.leads.find((item) => item.id === leadId);
  if (!lead) return;
  const student = state.students.find((s) => s.id === lead.linkedStudentId);
  if (!student) {
    toast("Cadastre o cliente primeiro antes de realizar a matrícula.");
    return;
  }
  saveState();
  render();
  _pendingEnrollLeadId = leadId;
  switchView("enrollments");
  editingEnrollmentId = null;
  openModal("enrollment", { studentId: student.id });
  document.querySelector("#modalTitle").textContent = "Nova matrícula";
}

function changeLeadStatusInline(leadId, newStatus) {
  const lead = state.leads.find((l) => l.id === leadId);
  if (!lead || lead.status === newStatus) return;

  if (lead.status === "Matriculado") {
    toast("Lead já matriculado — o status é controlado pela matrícula, não pode ser alterado aqui.");
    renderCrm();
    return;
  }
  if (newStatus === "Perdido") {
    openLoseLeadOverlay(leadId);
    renderCrm();
    return;
  }
  if (newStatus === "Matriculado") {
    convertLead(leadId);
    renderCrm();
    return;
  }

  lead.status = newStatus;
  saveState();
  renderCrm();
  toast(`Status atualizado para "${newStatus}".`);
}

function deleteLead(leadId) {
  if (!isAdminSession()) return toast("Apenas administradores podem excluir leads.");
  const lead = state.leads.find((l) => l.id === leadId);
  const name = lead?.name || "este lead";
  if (!window.confirm(`Excluir "${name}"? Esta ação não pode ser desfeita.\n\nSe essa pessoa continuar mandando mensagem pelo WhatsApp, um novo lead será criado automaticamente na próxima mensagem — o histórico de conversa atual será perdido.`)) return;
  rememberDeletedEntities("leads", leadId);
  state.leads = state.leads.filter((item) => item.id !== leadId);
  saveDeletedState();
  renderCrm();
  toast("Lead excluído.");
  fetch(`/api/leads/${leadId}`, { method: "DELETE" }).catch(() => {});
}

function renderSchedule() {
  document.querySelector("#calendarRange").textContent = rangeLabel();
  document.querySelectorAll("[data-agenda-mode]").forEach((button) => button.classList.toggle("active", button.dataset.agendaMode === agendaMode));
  const listToggle = document.querySelector("#agendaListToggle");
  if (listToggle) listToggle.textContent = agendaMode === "list" ?"Voltar ao Calendário" : "Agenda em Lista";

  if (agendaMode === "list") {
    renderAgendaList();
    return;
  }
  if (agendaMode === "month") {
    renderMonthAgenda();
    return;
  }
  renderCalendarGrid(agendaMode === "day" ?[currentWeekStart] : weekDays());
}

function renderCalendarGrid(days) {
  const hours = ["07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  const appointments = filteredAppointments();
  const blocks = state.blocks ?? [];
  const board = document.querySelector("#scheduleBoard");

  board.className = "calendar-grid";
  board.style.setProperty("--day-count", days.length);
  board.innerHTML = `
    <div class="calendar-corner"></div>
    ${days.map((day) => `<div class="calendar-day-head">${shortDate(day)}</div>`).join("")}
    ${hours
      .map((hour) => {
        const hourNumber = Number(hour);
        return `
          <div class="calendar-hour">${hour}</div>
          ${days
            .map((day) => {
              const date = isoDate(day);
              const cellItems = appointments.filter((item) => item.date === date && Number(item.time.slice(0, 2)) === hourNumber);
              const cellBlocks = blocks.filter((item) => item.date === date && Number(item.time.slice(0, 2)) === hourNumber);
              return `
                <div class="calendar-cell ${cellBlocks.length ?"blocked-cell" : ""}">
                  ${cellItems.map(renderCalendarEvent).join("")}
                  ${cellBlocks.map(renderBlock).join("")}
                </div>
              `;
            })
            .join("")}
        `;
      })
      .join("")}
  `;
}

function updateLeadAfterVisit(appointment) {
  if (!appointment?.id) return;
  state.leads = state.leads.map((lead) => {
    const byAppointmentId = lead.linkedAppointmentId && lead.linkedAppointmentId === appointment.id;
    const byLeadId = appointment.leadId && appointment.leadId === lead.id;
    // Only experimental sessions count as a lead visit; regular sessions of a linked student must not promote the lead
    const byStudent = appointment.sessionKind === "Experimental" && appointment.studentId && appointment.studentId === lead.linkedStudentId;
    if (!byAppointmentId && !byLeadId && !byStudent) return lead;
    if (["Matriculado", "Perdido"].includes(lead.status)) return lead;
    return { ...lead, status: "Visita realizada" };
  });
}

function appointmentPersonName(item) {
  if (item.leadId) {
    const lead = state.leads.find(l => l.id === item.leadId);
    if (lead) return lead.name;
  }
  if (item.studentId) return studentName(item.studentId);
  return "Sem cliente";
}

function apptStatusBadge(item) {
  if (item.status === "Visita realizada") return '<span class="evt-badge evt-badge--presente" title="Presença">✓</span>';
  if (item.status === "Falta justificada") return '<span class="evt-badge evt-badge--fj" title="Falta justificada">FJ</span>';
  if (item.status === "Faltou") return '<span class="evt-badge evt-badge--fi" title="Falta injustificada">✗</span>';
  if (item.status === "Cancelada") return '<span class="evt-badge evt-badge--cancelada" title="Cancelada">🗑</span>';
  if (item.sessionKind === "Experimental") return '<span class="evt-badge evt-badge--exp" title="Experimental">EXP</span>';
  if (item.wasRescheduled) return '<span class="evt-badge evt-badge--remar" title="Remarcada">↺</span>';
  return "";
}

function renderCalendarEvent(item) {
  const relatedStudent = student(item.studentId);
  const relatedProfessional = professional(item.teacherId);
  const personName = appointmentPersonName(item);
  const bg = relatedProfessional?.color ? `background:${relatedProfessional.color}` : "";
  return `
    <article class="calendar-event ${statusClass(item.status)}" style="${bg}" data-action="open-appt-panel" data-id="${item.id}" title="${item.type} - ${personName}">
      ${apptStatusBadge(item)}
      <span>${item.time} - ${item.endTime}</span>
      <strong>${personName.toUpperCase()}</strong>
      <small>${professionalName(item.teacherId)} · ${relatedStudent?.plan ?? item.sessionKind}</small>
    </article>
  `;
}

function renderBlock(item) {
  return `
    <article class="calendar-block">
      <span>${item.time} - ${item.endTime}</span>
      <strong>${item.title}</strong>
    </article>
  `;
}

function renderAgendaList() {
  const list = filteredAppointments().sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  const board = document.querySelector("#scheduleBoard");
  board.className = "agenda-list";
  board.innerHTML = list.length
    ?`
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Horário</th>
            <th>Cliente</th>
            <th>Modalidade</th>
            <th>Profissional</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          ${list
            .map(
              (item) => `
                <tr>
                  <td>${dateLabel(item.date)}</td>
                  <td>${item.time} - ${item.endTime}</td>
                  <td>${studentName(item.studentId)}</td>
                  <td>${item.type}</td>
                  <td>${professionalName(item.teacherId)}</td>
                  <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
                  <td>
                    <button class="mini-button" data-action="reschedule" data-id="${item.id}" type="button">Editar horário</button>
                    <button class="mini-button" data-action="confirm" data-id="${item.id}" type="button">Confirmar</button>
                    <button class="mini-button" data-action="complete" data-id="${item.id}" type="button">Check-in</button>
                    <button class="mini-button" data-action="missed" data-id="${item.id}" type="button">Falta</button>
                    <button class="mini-button" data-action="cancel" data-id="${item.id}" type="button">Cancelar</button>
                    <button class="mini-button" data-action="replacement" data-id="${item.id}" type="button">Reposição</button>
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    `
    : `<div class="empty-state">Nenhuma sessão encontrada.</div>`;
}

function renderMonthAgenda() {
  const appointments = filteredAppointments();
  const board = document.querySelector("#scheduleBoard");
  board.className = "month-grid";
  const start = parseLocalDate("2026-05-01");
  board.innerHTML = Array.from({ length: 31 }, (_, index) => {
    const date = addDays(start, index);
    const iso = isoDate(date);
    const count = appointments.filter((item) => item.date === iso).length;
    return `
      <article class="month-day">
        <strong>${date.getDate()}</strong>
        <span>${count} sessões</span>
      </article>
    `;
  }).join("");
}

function importStudentsAndEnrollmentsFromXlsx(file) {
  if (!window.XLSX) { toast("Biblioteca XLSX não carregada."); return; }
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const wb = window.XLSX.read(e.target.result, { type: "array", cellDates: true });
      const toRows = (name) => {
        const ws = wb.Sheets[name];
        return ws ? window.XLSX.utils.sheet_to_json(ws, { defval: "" }) : [];
      };
      const clientRows = toRows("Import_Clientes");
      const matriculaRows = toRows("Import_Matricula");
      if (!clientRows.length && !matriculaRows.length) {
        toast("Abas 'Import_Clientes' e 'Import_Matricula' não encontradas.");
        return;
      }

      const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim().replace(/\s+/g, " ");
      const parseIso = (v) => {
        if (!v || norm(v) === "nat") return "";
        const d = v instanceof Date ? v : new Date(v);
        return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
      };

      const modalityByNorm = new Map(state.modalities.map((m) => [norm(m.name), m.id]));
      const planByNorm = new Map(state.plans.map((p) => [norm(p.name), p.id]));
      const profByNorm = new Map(state.professionals.map((p) => [norm(p.name), p.id]));
      const existingByCpf = new Map(state.students.filter((s) => s.cpf).map((s) => [String(s.cpf).replace(/\D/g, ""), s.id]));
      const existingByName = new Map(state.students.map((s) => [norm(s.name), s.id]));
      const importedIdByName = new Map();

      let studentsAdded = 0, studentsSkipped = 0;

      for (const row of clientRows) {
        const name = String(row.NOME || "").trim();
        if (!name) continue;
        const normName = norm(name);
        const cleanCpf = String(row.CPF || "").replace(/\D/g, "");
        if ((cleanCpf && existingByCpf.has(cleanCpf)) || existingByName.has(normName)) {
          importedIdByName.set(normName, existingByCpf.get(cleanCpf) || existingByName.get(normName));
          studentsSkipped++;
          continue;
        }
        const cidadeUf = String(row.CIDADE_UF || "");
        const slash = cidadeUf.lastIndexOf("/");
        const city = slash > 0 ? cidadeUf.slice(0, slash).trim() : cidadeUf.trim();
        const stateCode = slash > 0 ? cidadeUf.slice(slash + 1).trim() : "";
        const birthDate = parseIso(row.DATA_NASCIMENTO);
        const gender = norm(row.SEXO).includes("masc") ? "Masculino" : "Feminino";
        const newStudent = normalizeStudent({
          id: uid("s"),
          name,
          email: String(row.EMAIL || ""),
          phone: String(row.CELULAR || ""),
          cpf: String(row.CPF || ""),
          birthDate,
          gender,
          zip: String(row.CEP || ""),
          address: String(row.ENDERECO || ""),
          addressNumber: String(row.END_NUM || ""),
          neighborhood: String(row.BAIRRO || ""),
          city,
          stateCode,
          profession: String(row.PROFISSAO || ""),
          notes: [String(row.OBS || ""), String(row.PATOLOGIA || "")].filter(Boolean).join(" | "),
          status: "Ativo",
          membership: "Matriculado",
          registrationDate: demoToday,
        }, state.students.length);
        state.students.push(newStudent);
        importedIdByName.set(normName, newStudent.id);
        if (cleanCpf) existingByCpf.set(cleanCpf, newStudent.id);
        existingByName.set(normName, newStudent.id);
        studentsAdded++;
      }

      let enrollmentsAdded = 0, enrollmentsSkipped = 0, enrollmentsMissingPlan = 0;

      for (const row of matriculaRows) {
        const normName = norm(String(row.NOME || ""));
        const studentId = importedIdByName.get(normName) || existingByName.get(normName);
        if (!studentId) { enrollmentsSkipped++; continue; }

        const modalityId = modalityByNorm.get(norm(row.MODALIDADE)) || "";
        const planNorm = norm(row.PLANO_MATRICULA);
        let planId = planByNorm.get(planNorm) || "";
        if (!planId) {
          for (const [pn, pid] of planByNorm) {
            if (planNorm.length > 4 && pn.includes(planNorm)) { planId = pid; break; }
          }
        }
        if (!planId) enrollmentsMissingPlan++;

        const professionalId = profByNorm.get(norm(row.NOME_PROF)) || "";
        const startDate = parseIso(row.DATA_MATRICULA) || demoToday;
        const dueDay = Number(row.DIA_VENCIMENTO) || Number(startDate.split("-")[2]) || 10;
        const firstPaymentDate = `${startDate.slice(0, 8)}${String(dueDay).padStart(2, "0")}`;
        const rawPlanType = String(row.FORMA_MENSALIDADE || "Mensalidade");
        const endDate = parseIso(row.DATA_VENCIMENTO) || calculatedEnrollmentEndDate(startDate, rawPlanType);
        const autoRenew = Number(row.RENOVA_AUTO) === 1 ? "Sim" : "Não";
        const normStatus = norm(row.STATUS_STR);
        const status = (normStatus === "inativo" || normStatus === "cancelado" || normStatus === "cancelada") ? "Cancelada" : "Ativa";

        const dupKey = `${studentId}-${planId}-${startDate}`;
        if (state.enrollments.some((en) => `${en.studentId}-${en.planId}-${en.startDate}` === dupKey)) {
          enrollmentsSkipped++;
          continue;
        }

        const plan = planId ? state.plans.find((p) => p.id === planId) : null;
        const enrollment = normalizeEnrollment({
          id: uid("e"),
          studentId,
          planId: planId || "",
          modalityId: modalityId || plan?.modalityId || "",
          professionalId,
          startDate,
          endDate,
          monthlyValue: Number(row.VALOR_MES) || Number(plan?.value) || 0,
          planType: rawPlanType,
          dueDay,
          firstPaymentDate,
          autoRenew,
          status,
          freeSchedule: "Não",
          financialTitlesGenerated: true,
          sessions: plan ? (weeklySessionsFromPlan(plan) || 0) : 0,
          paymentMethod: "Pix",
        }, state.enrollments.length);

        state.enrollments.push(enrollment);
        enrollmentsAdded++;
      }

      saveState();
      refreshAutoRenewalProjections();
      renderStudents();

      const parts = [
        `${studentsAdded} cliente(s) importado(s)`,
        `${enrollmentsAdded} matrícula(s) importada(s)`,
      ];
      if (studentsSkipped) parts.push(`${studentsSkipped} cliente(s) já existiam`);
      if (enrollmentsSkipped) parts.push(`${enrollmentsSkipped} matrícula(s) duplicada(s)`);
      if (enrollmentsMissingPlan) parts.push(`${enrollmentsMissingPlan} matrícula(s) sem plano correspondente`);
      toast(parts.join(" · "));
    } catch (err) {
      console.error("importStudentsAndEnrollmentsFromXlsx:", err);
      toast("Erro ao processar o arquivo: " + err.message);
    }
  };
  reader.readAsArrayBuffer(file);
}

function renderStudents() {
  const term = normalizedText(document.querySelector("#studentSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#studentStatusFilter")?.value ?? "all";
  const list = state.students
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => normalizedText([item.name, item.phone, item.email, item.plan, item.status, item.cpf, item.responsible].join(" ")).includes(term) || phoneMatchesTerm(item.phone, term.replace(/\D/g, "")))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  document.querySelector("#studentsTable").innerHTML = list.length
    ?list
        .map(
          (item) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-student="${item.id}" type="button" title="Editar cliente" aria-label="Editar cliente"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="row-action-button delete-icon-button" data-delete-student="${item.id}" type="button" title="Excluir cliente" aria-label="Excluir cliente"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${studentActivePlan(item.id)}</span></div></td>
              <td><span class="status-pill ${statusClass(item.membership)}">${item.membership}</span></td>
              <td><div class="patient-contact"><span>${item.email || "-"}</span><a href="tel:${item.phone}">${item.phone}</a></div></td>
              <td>${maskedCpf(item.cpf)}</td>
              <td>${dateLabel(item.birthDate)} ${item.birthDate ?`[${ageFromDate(item.birthDate)}]` : ""} ${item.gender === "Masculino" || item.gender === "M" ?"Masculino" : "Feminino"}</td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="6"><div class="empty-state">Nenhum cliente encontrado.</div></td></tr>`;
}

function renderEnrollments() {
  const table = document.querySelector("#enrollmentsTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#enrollmentSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#enrollmentStatusFilter")?.value ?? "activeAndExpired";
  const modalityFilter = document.querySelector("#enrollmentModalityFilter")?.value ?? "all";
  const professionalFilter = document.querySelector("#enrollmentProfessionalFilter")?.value ?? "all";
  const scheduleFilter = document.querySelector("#enrollmentScheduleFilter")?.value ?? "all";
  const typeFilter = document.querySelector("#enrollmentPlanTypeFilter")?.value ?? "all";
  const dateFrom = document.querySelector("#enrollmentDateFrom")?.value ?? "";
  const dateTo = document.querySelector("#enrollmentDateTo")?.value ?? "";
  const list = state.enrollments
    .filter((item) => statusFilter === "all" || (statusFilter === "activeAndExpired" ?["Ativa", "Vencida"].includes(item.status) : item.status === statusFilter))
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => professionalFilter === "all" || item.professionalId === professionalFilter)
    .filter((item) => {
      if (scheduleFilter === "all") return true;
      const hasSchedule = ["mondayTime","tuesdayTime","wednesdayTime","thursdayTime","fridayTime"].some((f) => item[f]);
      return scheduleFilter === "filled" ? hasSchedule : !hasSchedule;
    })
    .filter((item) => typeFilter === "all" || planTypeLabel(item.planType || planById(item.planId)?.type) === planTypeLabel(typeFilter))
    .filter((item) => !dateFrom || (item.startDate && item.startDate >= dateFrom))
    .filter((item) => !dateTo || (item.startDate && item.startDate <= dateTo))
    .filter((item) => {
      const student = studentName(item.studentId);
      const plan = planName(item.planId);
      const professional = professionalName(item.professionalId);
      const modality = modalityName(item.modalityId);
      return !term || normalizedText(`${student} ${plan} ${professional} ${modality} ${item.status} ${item.contractStatus}`).includes(term);
    })
    .sort((a, b) => studentName(a.studentId).localeCompare(studentName(b.studentId), "pt-BR"));

  table.innerHTML = list.length
    ?list
        .map(
          (item) => {
            const financialGenerated = state.accounts.some((account) => account.enrollmentId === item.id) || item.financialTitlesGenerated;
            const paymentSummary = enrollmentPaymentSummary(item.id);
            return `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-enrollment="${item.id}" type="button" title="Editar matrícula" aria-label="Editar matrícula"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="row-action-button delete-icon-button" data-delete-enrollment="${item.id}" type="button" title="Excluir matrícula" aria-label="Excluir matrícula"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(studentName(item.studentId))}</strong></div></td>
              <td>${professionalName(item.professionalId)}</td>
              <td><strong>${modalityName(item.modalityId)}</strong></td>
              <td>${dateLabel(item.startDate)}</td>
              <td>${item.dueDay || "-"}</td>
              <td><strong>${currency(Number(item.monthlyValue || 0))}</strong></td>
              <td>${Number(item.discount || 0) > 0 ? `<span style="color:var(--danger,#e53)">${currency(Number(item.discount))}</span>` : "-"}</td>
              <td><strong>${currency(Math.max(0, Number(item.monthlyValue || 0) - Number(item.discount || 0)))}</strong></td>
              <td><div class="patient-name"><strong>${displayName(planName(item.planId))}</strong><span>${planTypeLabel(item.planType || planById(item.planId)?.type)}</span></div></td>
              <td><div class="patient-name"><strong>${paymentSummary.label}</strong><span>${item.paymentMethod || "-"}</span></div></td>
              <td>${(() => { const p = planById(item.planId); return p ? (weeklySessionsFromPlan(p) || item.sessions || "-") : (item.sessions || "-"); })()}x/sem</td>
              <td><div class="enrollment-schedule-pills">${[
                ["Seg", item.mondayTime],
                ["Ter", item.tuesdayTime],
                ["Qua", item.wednesdayTime],
                ["Qui", item.thursdayTime],
                ["Sex", item.fridayTime],
              ].filter(([, t]) => t).map(([d, t]) => `<span class="schedule-pill">${d} ${t}</span>`).join("")|| "-"}</div></td>
              <td><span class="status-pill ${paymentSummary.label === "Pago" ? paymentSummary.className : financialGenerated ? "ativo" : "pendente"}">${paymentSummary.label === "Pago" ? paymentSummary.label : financialGenerated ? "Gerado" : "Pendente"}</span></td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
            </tr>
          `;
          },
        )
        .join("")
    : `<tr><td colspan="12"><div class="empty-state">Nenhuma matrícula encontrada.</div></td></tr>`;
}

function renderProfessionals() {
  const term = normalizedText(document.querySelector("#professionalSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#professionalStatusFilter")?.value ?? "Ativo";
  const list = state.professionals
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => normalizedText([item.name, item.email, item.phone, item.role, item.document].join(" ")).includes(term))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  document.querySelector("#professionalsTable").innerHTML = list.length
    ?list
        .map(
          (item) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-professional="${item.id}" type="button" title="Editar profissional" aria-label="Editar profissional"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="row-action-button delete-icon-button" data-delete-professional="${item.id}" type="button" title="Excluir profissional" aria-label="Excluir profissional"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${item.name.toUpperCase()}</strong><span>${item.role}</span></div></td>
              <td>${item.email || "-"}</td>
              <td>${item.phone || "-"}</td>
              <td>${item.maxPatients || "-"}</td>
              <td><span class="professional-color-dot" style="background:${item.color || "#5e91b8"}"></span></td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="7"><div class="empty-state">Nenhum profissional encontrado.</div></td></tr>`;
}

function renderSuppliers() {
  const table = document.querySelector("#suppliersTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#supplierSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#supplierStatusFilter")?.value ?? "Ativo";
  const supplierFilter = document.querySelector("#supplierNameFilter")?.value ?? "all";
  const typeFilter = document.querySelector("#supplierTypeFilter")?.value ?? "all";
  const list = state.suppliers
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => supplierFilter === "all" || item.id === supplierFilter)
    .filter((item) => typeFilter === "all" || normalizedText(item.supplierType) === normalizedText(typeFilter))
    .filter((item) => normalizedText([item.name, item.document, item.supplierType, item.email, item.phone, item.notes].join(" ")).includes(term))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  table.innerHTML = list.length
    ?list
        .map((item) => `
          <tr>
            <td>
              <div class="row-actions">
                <button class="row-action-button edit-icon-button" data-edit-supplier="${item.id}" type="button" title="Editar fornecedor" aria-label="Editar fornecedor"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                <button class="row-action-button delete-icon-button" data-delete-supplier="${item.id}" type="button" title="Excluir fornecedor" aria-label="Excluir fornecedor"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
              </div>
            </td>
            <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${item.email || item.phone || item.notes || ""}</span></div></td>
            <td>${item.document || "-"}</td>
            <td>${item.supplierType || "-"}</td>
            <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
          </tr>
        `)
        .join("")
    : `<tr><td colspan="5"><div class="empty-state">Nenhum fornecedor encontrado.</div></td></tr>`;
}

function renderSupplierRegisterFilters() {
  const supplierFilter = document.querySelector("#supplierNameFilter");
  if (supplierFilter) {
    const selected = supplierFilter.value || "all";
    const suppliers = [...state.suppliers].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    supplierFilter.innerHTML = `<option value="all">Todos os fornecedores</option>${suppliers.map((item) => `<option value="${item.id}">${displayName(item.name)}</option>`).join("")}`;
    supplierFilter.value = selected === "all" || suppliers.some((item) => item.id === selected) ?selected : "all";
  }

  const typeFilter = document.querySelector("#supplierTypeFilter");
  if (typeFilter) {
    const selected = typeFilter.value || "all";
    const types = [...new Set(state.suppliers.map((item) => item.supplierType).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    typeFilter.innerHTML = `<option value="all">Todos os tipos</option>${types.map((type) => `<option value="${type}">${type}</option>`).join("")}`;
    typeFilter.value = selected === "all" || types.some((type) => normalizedText(type) === normalizedText(selected)) ?selected : "all";
  }
}

function renderModalities() {
  const table = document.querySelector("#modalitiesTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#modalitySearch")?.value.trim() ?? "");
  const list = state.modalities
    .filter((item) => normalizedText([item.name, item.status, item.notes].join(" ")).includes(term))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  table.innerHTML = list.length
    ?list
        .map(
          (item) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-modality="${item.id}" type="button" title="Editar modalidade" aria-label="Editar modalidade"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="row-action-button delete-icon-button" data-delete-modality="${item.id}" type="button" title="Excluir modalidade" aria-label="Excluir modalidade"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${item.notes || ""}</span></div></td>
              <td><span class="color-swatch" style="background:${item.color || "#6043c2"}" title="${item.color || ""}"></span></td>
              <td>${Number(item.maxPatients || 0)}</td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="5"><div class="empty-state">Nenhuma modalidade encontrada.</div></td></tr>`;
}

function openModalityEditor(modalityId = null) {
  editingModalityId = modalityId;
  const item = modalityId ?state.modalities.find((modalityItem) => modalityItem.id === modalityId) : createEmptyModality();
  if (!item) return;
  openModal("modality", { ...item, notes: modalityId ? item.notes || "" : "" });
  document.querySelector("#modalTitle").textContent = modalityId ? `Editar ${displayName(item.name)}` : "Nova modalidade";
}

function createEmptyModality() {
  return {
    id: "",
    name: "",
    status: "Ativo",
    maxPatients: 1,
    color: "#6043c2",
    createdAt: new Date().toISOString(),
    notes: "",
  };
}

function fillModalityEditor(item) {
  const form = document.querySelector("#modalityEditorForm");
  Object.entries(createEmptyModality()).forEach(([key, defaultValue]) => {
    if (form.elements[key]) form.elements[key].value = String(item[key] ?? defaultValue);
  });
}

function saveModalityEditor() {
  const form = document.querySelector("#modalityEditorForm");
  const values = Object.fromEntries(new FormData(form).entries());
  values.maxPatients = Number(values.maxPatients || 0);
  if (editingModalityId) {
    state.modalities = state.modalities.map((item) => (item.id === editingModalityId ?{ ...item, ...values } : item));
  } else {
    state.modalities.push({ ...createEmptyModality(), ...values, id: uid("m") });
  }
  saveState();
  renderModalityOptions();
  renderModalities();
  renderSchedule();
  switchView("modalities");
  toast("Cadastro da modalidade salvo.");
}

function renderPlans() {
  const table = document.querySelector("#plansTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#planSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#planStatusFilter")?.value ?? "Ativo";
  const modalityFilter = document.querySelector("#planModalityFilter")?.value ?? "all";
  const typeFilter = document.querySelector("#planTypeFilter")?.value ?? "all";
  const sessionsFilter = document.querySelector("#planSessionsFilter")?.value ?? "all";
  const list = state.plans
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => typeFilter === "all" || planTypeLabel(item.type) === planTypeLabel(typeFilter))
    .filter((item) => sessionsFilter === "all" || Number(item.sessions || 0) === Number(sessionsFilter))
    .filter((item) => normalizedText([item.name, modalityName(item.modalityId), chartAccountName(item.chartAccountId), item.type, item.status, item.notes].join(" ")).includes(term))
    .sort((a, b) => normalizedText(a.name).localeCompare(normalizedText(b.name), "pt-BR", { sensitivity: "base" }));

  table.innerHTML = list.length
    ?list
        .map(
          (item) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-plan="${item.id}" type="button" title="Editar plano" aria-label="Editar plano"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="row-action-button delete-icon-button" data-delete-plan="${item.id}" type="button" title="Excluir plano" aria-label="Excluir plano"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${item.sessions ?`${item.sessions} sessões inclusas` : "Plano livre"}</span></div></td>
              <td>${displayName(modalityName(item.modalityId))}</td>
              <td>${chartAccountName(item.chartAccountId)}</td>
              <td>${planTypeLabel(item.type)}</td>
              <td><strong>${currency(Number(item.value || 0))}</strong></td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="7"><div class="empty-state">Nenhum plano encontrado.</div></td></tr>`;
}

function exportPlansXls() {
  const term = normalizedText(document.querySelector("#planSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#planStatusFilter")?.value ?? "Ativo";
  const modalityFilter = document.querySelector("#planModalityFilter")?.value ?? "all";
  const typeFilter = document.querySelector("#planTypeFilter")?.value ?? "all";
  const sessionsFilter = document.querySelector("#planSessionsFilter")?.value ?? "all";
  const list = state.plans
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => typeFilter === "all" || planTypeLabel(item.type) === planTypeLabel(typeFilter))
    .filter((item) => sessionsFilter === "all" || Number(item.sessions || 0) === Number(sessionsFilter))
    .filter((item) => normalizedText([item.name, modalityName(item.modalityId), chartAccountName(item.chartAccountId), item.type, item.status, item.notes].join(" ")).includes(term))
    .sort((a, b) => normalizedText(a.name).localeCompare(normalizedText(b.name), "pt-BR", { sensitivity: "base" }));

  const rows = [
    ["Plano", "Modalidade", "Plano de Contas", "Tipo de Plano", "Sessões", "Valor (R$)", "Status", "Observações"],
    ...list.map((item) => [
      item.name || "",
      modalityName(item.modalityId) || "",
      chartAccountName(item.chartAccountId) || "",
      planTypeLabel(item.type) || "",
      item.sessions ? Number(item.sessions) : "",
      Number(item.value || 0),
      item.status || "",
      item.notes || "",
    ]),
  ];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);

  // Column widths
  ws["!cols"] = [40, 20, 40, 16, 10, 14, 10, 40].map((w) => ({ wch: w }));

  // Format value column as currency
  const valueCol = 5;
  for (let r = 1; r < rows.length; r++) {
    const cell = ws[XLSX.utils.encode_cell({ r, c: valueCol })];
    if (cell) cell.z = '"R$" #,##0.00';
  }

  XLSX.utils.book_append_sheet(wb, ws, "Planos");
  XLSX.writeFile(wb, `planos_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

function openPlanEditor(planId = null) {
  editingPlanId = planId;
  const item = planId ?state.plans.find((planItem) => planItem.id === planId) : createEmptyPlan();
  if (!item) return;
  openModal("plan", { ...item, chartAccountId: item.chartAccountId || revenueChartAccountForModality(item.modalityId)?.id || "", type: planTypeLabel(item.type), value: Number(item.value || 0).toFixed(2), notes: planId ? item.notes || "" : "" });
  document.querySelector("#modalTitle").textContent = planId ? `Editar ${displayName(item.name)}` : "Novo plano";
}

function createEmptyPlan() {
  return {
    id: "",
    name: "",
    modalityId: activeModalities()[0]?.id || "",
    type: "Mensal",
    chartAccountId: revenueChartAccountForModality(activeModalities()[0]?.id || "")?.id || activeRevenueChartAccounts()[0]?.id || "",
    value: 0,
    sessions: 0,
    status: "Ativo",
    notes: "",
  };
}

function fillPlanEditor(item) {
  const form = document.querySelector("#planEditorForm");
  renderModalityOptions();
  renderRevenueChartAccountOptions(item.chartAccountId || revenueChartAccountForModality(item.modalityId)?.id || "");
  Object.entries(createEmptyPlan()).forEach(([key, defaultValue]) => {
    if (form.elements[key]) form.elements[key].value = item[key] ?? defaultValue;
  });
  if (form.elements.type) form.elements.type.value = planTypeLabel(item.type);
  if (form.elements.chartAccountId) form.elements.chartAccountId.value = item.chartAccountId || revenueChartAccountForModality(item.modalityId)?.id || activeRevenueChartAccounts()[0]?.id || "";
}

function savePlanEditor() {
  const form = document.querySelector("#planEditorForm");
  const values = Object.fromEntries(new FormData(form).entries());
  values.value = Number(values.value || 0);
  values.sessions = Number(values.sessions || 0);
  values.type = planTypeLabel(values.type);
  values.chartAccountId = values.chartAccountId || revenueChartAccountForModality(values.modalityId)?.id || "";
  values.notes = values.notes || "";
  if (editingPlanId) {
    state.plans = state.plans.map((item) => (item.id === editingPlanId ?{ ...item, ...values } : item));
  } else {
    state.plans.push({ ...createEmptyPlan(), ...values, id: uid("pl") });
  }
  const savedPlanId = editingPlanId || state.plans.at(-1)?.id || "";
  syncPlanChartAccountToFinancialTitles(savedPlanId, values.chartAccountId);
  saveState();
  renderPlanOptions();
  renderEnrollmentOptions();
  renderPlans();
  switchView("plans");
  toast("Cadastro do plano salvo.");
}

function monthlyRows() {
  const paymentMethods = ["Cartão de Débito", "Pix", "Cartão de Crédito", "Aguardando", "Cortesia"];
  if (activeEnrollments().length) {
    return activeEnrollments().map((enrollment, index) => {
      const studentItem = state.students.find((student) => student.id === enrollment.studentId) ?? {};
      const plan = planById(enrollment.planId);
      const payment = state.payments.find((paymentItem) => paymentItem.studentId === enrollment.studentId);
      const status = payment?.status === "Pendente" ? "Aguardando" : payment?.status ?? (index % 6 === 1 ? "Atrasado" : "Pago");
      const dueDay = String(Math.min(28, Number(enrollment.dueDay || 2 + ((index * 3) % 24)))).padStart(2, "0");
      const paid = status === "Pago";
      const courtesy = status === "Cortesia";
      const discount = Number(enrollment.discount || 0);
      const amount = Number(payment?.amount ?? enrollment.monthlyValue ?? plan?.value ?? 0);
      const netAmount = Math.max(0, amount - discount);
      const method = paid ? enrollment.paymentMethod || paymentMethods[index % 3] : courtesy ? "Cortesia" : status;
      return {
        id: `m${enrollment.id}`,
        studentId: enrollment.studentId,
        patient: studentItem.name ?? "Cliente removido",
        dueDate: `2026-05-${dueDay}`,
        status,
        method,
        modalityId: enrollment.modalityId || plan?.modalityId || "",
        teacherId: enrollment.professionalId || activeProfessionals()[index % Math.max(1, activeProfessionals().length)]?.id || "",
        membershipDate: enrollment.startDate || studentItem.registrationDate || `2026-05-${dueDay}`,
        paymentDate: paid || courtesy ? `2026-05-${String(Math.max(1, Number(dueDay) - (index % 4))).padStart(2, "0")}` : "",
        invoiceCode: paid || courtesy ? `[001.${320 + index}]` : "",
        amount,
        discount,
        netAmount,
        received: paid ? netAmount : 0,
        external: index % 4 === 0 ? "Asaas" : "Manual",
        active: enrollment.status,
      };
    });
  }
  return state.students.map((studentItem, index) => {
    const plan = state.plans.find((planItem) => normalizedText(planItem.name) === normalizedText(studentItem.plan)) ?? state.plans[index % Math.max(1, state.plans.length)];
    const payment = state.payments.find((paymentItem) => paymentItem.studentId === studentItem.id);
    const status = payment?.status === "Pendente" ? "Aguardando" : payment?.status ?? (index % 7 === 1 ? "Atrasado" : index % 6 === 2 ? "Cortesia" : "Pago");
    const dueDay = String(Math.min(28, 2 + ((index * 3) % 24))).padStart(2, "0");
    const paid = status === "Pago";
    const courtesy = status === "Cortesia";
    const amount = Number(payment?.amount ?? plan?.value ?? 190 + ((index % 5) * 35));
    const received = paid ? amount + (index % 5 === 0 ? 10 : 0) : 0;
    const method = paid ? paymentMethods[index % 3] : courtesy ? "Cortesia" : status;
    return {
      id: `m${studentItem.id}`,
      studentId: studentItem.id,
      patient: studentItem.name,
      dueDate: `2026-05-${dueDay}`,
      status,
      method,
      modalityId: plan?.modalityId ?? "",
      teacherId: activeProfessionals()[index % Math.max(1, activeProfessionals().length)]?.id ?? "",
      membershipDate: studentItem.registrationDate || `2026-0${(index % 5) + 1}-${dueDay}`,
      paymentDate: paid || courtesy ? `2026-05-${String(Math.max(1, Number(dueDay) - (index % 4))).padStart(2, "0")}` : "",
      invoiceCode: paid || courtesy ? `[001.${320 + index}]` : "",
      amount,
      received,
      external: index % 4 === 0 ? "Asaas" : "Manual",
      active: studentItem.status,
    };
  });
}

function renderMonthlyPayments() {
  const table = document.querySelector("#monthlyPaymentsTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#monthlySearch")?.value.trim() ?? "");
  const paidFilter = document.querySelector("#monthlyPaidFilter")?.value ?? "all";
  const membershipFilter = document.querySelector("#monthlyMembershipFilter")?.value ?? "all";
  const modalityFilter = document.querySelector("#monthlyModalityFilter")?.value ?? "all";
  const receiptFilter = document.querySelector("#monthlyReceiptFilter")?.value ?? "all";
  const invoiceFilter = document.querySelector("#monthlyInvoiceFilter")?.value ?? "all";
  const teacherFilter = document.querySelector("#monthlyTeacherFilter")?.value ?? "all";
  const externalFilter = document.querySelector("#monthlyExternalFilter")?.value ?? "all";
  const periodFrom = document.querySelector("#monthlyPeriodFilter")?.value || "";
  const periodTo = document.querySelector("#monthlyPeriodEndFilter")?.value || "";
  const rows = monthlyRows()
    .filter((item) => !term || normalizedText(item.patient).includes(term))
    .filter((item) => paidFilter === "all" || item.status === paidFilter)
    .filter((item) => membershipFilter === "all" || item.active === membershipFilter)
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => receiptFilter === "all" || item.method === receiptFilter)
    .filter((item) => invoiceFilter === "all" || (invoiceFilter === "Com nota" ? Boolean(invoiceByMonthlyId(item.id)) : !invoiceByMonthlyId(item.id)))
    .filter((item) => teacherFilter === "all" || item.teacherId === teacherFilter)
    .filter((item) => externalFilter === "all" || item.external === externalFilter)
    .filter((item) => !periodFrom || String(item.dueDate || "").slice(0, 7) >= periodFrom)
    .filter((item) => !periodTo || String(item.dueDate || "").slice(0, 7) <= periodTo)
    .sort((a, b) => a.patient.localeCompare(b.patient, "pt-BR"));

  table.innerHTML = rows.length
    ?rows
        .map(
          (item) => `
            <tr>
              <td><span class="monthly-status-button ${statusClass(item.status)}">${item.status}</span></td>
              <td><strong>${item.patient.toUpperCase()}</strong></td>
              <td>${dateLabel(item.dueDate)}</td>
              <td>${item.method}</td>
              <td><span class="membership-badge">Ativo<br><small>${dateLabel(item.membershipDate)}</small><br><small>Mensalidade</small></span></td>
              <td>${item.paymentDate ?`${dateLabel(item.paymentDate)}<br><small>${invoiceByMonthlyId(item.id)?.number || item.invoiceCode || "Sem NFS-e"}</small>` : "-"}</td>
              <td><strong>${currency(item.amount)}</strong><br><small>${item.method}</small></td>
              <td>${item.discount > 0 ? `<span style="color:var(--danger,#e53)">${currency(item.discount)}</span>` : "-"}</td>
              <td><strong>${currency(item.netAmount ?? item.amount)}</strong></td>
              <td><strong>${currency(item.received)}</strong></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="10"><div class="empty-state">Nenhuma mensalidade encontrada.</div></td></tr>`;
}

function invoiceByMonthlyId(monthlyId) {
  return state.fiscalInvoices.find((item) => item.monthlyId === monthlyId && item.status !== "Cancelada");
}

function fiscalRows() {
  const issuedByMonthlyId = new Map(state.fiscalInvoices.map((invoice) => [invoice.monthlyId, invoice]));
  const receivables = monthlyRows()
    .filter((item) => item.status === "Pago" || item.status === "Cortesia")
    .map((item) => {
      const invoice = issuedByMonthlyId.get(item.id);
      const studentItem = student(item.studentId) ?? {};
      return {
        id: invoice?.id || item.id,
        monthlyId: item.id,
        studentId: item.studentId,
        patient: item.patient,
        cpf: studentItem.cpf || "",
        email: studentItem.email || "",
        address: studentItem.address || "",
        service: modalityName(item.modalityId) || "Serviço",
        serviceCode: invoice?.serviceCode || "8.02",
        description: invoice?.description || `Mensalidade ${modalityName(item.modalityId) || "serviço"}`,
        competenceDate: item.paymentDate || item.dueDate,
        amount: item.received || item.amount,
        status: invoice?.status || "Pendente",
        number: invoice?.number || "",
        rps: invoice?.rps || "",
        rejectionReason: invoice?.rejectionReason || "",
        xmlUrl: invoice?.xmlUrl || "",
        pdfUrl: invoice?.pdfUrl || "",
        publicLink: invoice?.publicLink || "",
        modalityId: item.modalityId,
      };
    });
  return receivables;
}

function renderFiscalInvoices() {
  const table = document.querySelector("#fiscalTable");
  if (!table) return;
  const statusFilter = document.querySelector("#fiscalStatusFilter")?.value ?? "all";
  const modalityFilter = document.querySelector("#fiscalModalityFilter")?.value ?? "all";
  const term = normalizedText(document.querySelector("#fiscalSearch")?.value.trim() ?? "");
  const rows = fiscalRows()
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => !term || normalizedText(`${item.patient} ${item.cpf} ${item.service} ${item.number} ${item.status}`).includes(term))
    .sort((a, b) => a.patient.localeCompare(b.patient, "pt-BR"));
  const authorized = fiscalRows().filter((item) => item.status === "Autorizada");
  const pending = fiscalRows().filter((item) => item.status === "Pendente");
  const rejected = fiscalRows().filter((item) => item.status === "Rejeitada");
  document.querySelector("#fiscalSummary").innerHTML = `
    <article class="summary-item"><span>Autorizadas</span><strong>${authorized.length}</strong></article>
    <article class="summary-item"><span>Pendentes</span><strong>${pending.length}</strong></article>
    <article class="summary-item"><span>Rejeitadas</span><strong>${rejected.length}</strong></article>
    <article class="summary-item"><span>Valor autorizado</span><strong>${currency(authorized.reduce((sum, item) => sum + Number(item.amount || 0), 0))}</strong></article>
  `;

  table.innerHTML = rows.length
    ? rows.map((item) => `
      <tr>
        <td>
          <div class="row-actions">
            <button class="row-action-button edit-icon-button" data-issue-invoice="${item.monthlyId}" type="button" title="Emitir ou reenviar NFS-e" aria-label="Emitir ou reenviar NFS-e"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg></button>
            <button class="row-action-button delete-icon-button" data-cancel-invoice="${item.monthlyId}" type="button" title="Cancelar NFS-e" aria-label="Cancelar NFS-e"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
          </div>
        </td>
        <td><div class="patient-name"><strong>${item.patient.toUpperCase()}</strong><span>${item.cpf || "CPF pendente"} · ${item.email || "email pendente"}</span></div></td>
        <td>${item.service}<br><small>Código ${item.serviceCode}</small></td>
        <td>${dateLabel(item.competenceDate)}</td>
        <td><strong>${currency(item.amount)}</strong></td>
        <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
        <td>${item.number || "-"}<br><small>${item.rps || "-"}</small></td>
        <td>${item.rejectionReason || (item.publicLink ? `<a href="${item.publicLink}" target="_blank" rel="noreferrer">XML/PDF</a>` : "-")}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="8"><div class="empty-state">Nenhuma NFS-e encontrada neste filtro.</div></td></tr>`;
}

function renderFiscalOptions() {
  const modalityFilter = document.querySelector("#fiscalModalityFilter");
  if (!modalityFilter) return;
  const selected = modalityFilter.value || "all";
  modalityFilter.innerHTML = `<option value="all">Modalidades</option>${activeModalities().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
  modalityFilter.value = selected === "all" || activeModalities().some((item) => item.id === selected) ? selected : "all";
}

function issueFiscalInvoice(monthlyId, options = {}) {
  const row = fiscalRows().find((item) => item.monthlyId === monthlyId);
  if (!row) return;
  const missing = [];
  if (!row.patient) missing.push("nome");
  if (!row.cpf) missing.push("CPF");
  if (!row.service) missing.push("serviço");
  if (!Number(row.amount)) missing.push("valor");
  const existing = invoiceByMonthlyId(monthlyId);
  const base = {
    id: existing?.id || uid("nf"),
    monthlyId,
    studentId: row.studentId,
    rps: existing?.rps || `RPS-${String(state.fiscalInvoices.length + 1).padStart(4, "0")}`,
    service: row.service,
    serviceCode: row.serviceCode,
    description: row.description,
    amount: Number(row.amount || 0),
    iss: Number(row.amount || 0) * 0.02,
    competenceDate: row.competenceDate,
    issueDate: demoToday,
  };
  const invoice = missing.length
    ? normalizeFiscalInvoice({ ...base, status: "Rejeitada", rejectionReason: `Dados obrigatórios incompletos: ${missing.join(", ")}.` }, state.fiscalInvoices.length)
    : normalizeFiscalInvoice({
        ...base,
        status: "Autorizada",
        number: existing?.number || `NFS-${String(1200 + state.fiscalInvoices.length).padStart(6, "0")}`,
        xmlUrl: "#",
        pdfUrl: "#",
        publicLink: "#",
        rejectionReason: "",
      }, state.fiscalInvoices.length);
  if (existing) state.fiscalInvoices = state.fiscalInvoices.map((item) => (item.id === existing.id ? invoice : item));
  else state.fiscalInvoices.push(invoice);
  if (options.silent) return invoice;
  saveState();
  render();
  toast(invoice.status === "Autorizada" ? "NFS-e autorizada." : "NFS-e rejeitada: revise os dados do cliente.");
  return invoice;
}

function cancelFiscalInvoice(monthlyId) {
  const existing = invoiceByMonthlyId(monthlyId);
  if (!existing) {
    toast("Não há NFS-e autorizada para cancelar.");
    return;
  }
  existing.status = "Cancelada";
  existing.rejectionReason = "Cancelada manualmente.";
  saveState();
  render();
  toast("NFS-e cancelada.");
}

function issuePendingFiscalInvoices() {
  const issued = fiscalRows()
    .filter((item) => item.status === "Pendente" || item.status === "Rejeitada")
    .slice(0, 20)
    .map((item) => issueFiscalInvoice(item.monthlyId, { silent: true }));
  saveState();
  render();
  toast(`${issued.filter((item) => item?.status === "Autorizada").length} NFS-e autorizadas; ${issued.filter((item) => item?.status === "Rejeitada").length} rejeitadas.`);
}

const accountViewConfigs = {
  payable: {
    direction: "Pagar",
    tableId: "payableAccountsTable",
    summaryId: "payableAccountSummary",
    totalLabel: "Total de Pagamentos",
    paidLabel: "Total Pago",
    searchId: "payableAccountSearch",
    monthId: "payableAccountMonthFilter",
    dateFromId: "payableAccountDateFrom",
    dateToId: "payableAccountDateTo",
    statusId: "payableAccountStatusFilter",
    reconciliationId: "payableAccountReconciliationFilter",
    chartId: "payableAccountChartFilter",
    emptyMessage: "Nenhuma conta a pagar encontrada.",
  },
  receivable: {
    direction: "Receber",
    tableId: "receivableAccountsTable",
    summaryId: "receivableAccountSummary",
    totalLabel: "Total de Recebimentos",
    paidLabel: "Total Recebido",
    searchId: "receivableAccountSearch",
    monthId: "receivableAccountMonthFilter",
    dateFromId: "receivableAccountDateFrom",
    dateToId: "receivableAccountDateTo",
    statusId: "receivableAccountStatusFilter",
    reconciliationId: "receivableAccountReconciliationFilter",
    chartId: "receivableAccountChartFilter",
    emptyMessage: "Nenhuma conta a receber encontrada.",
  },
};

function accountRows(config) {
  const term = normalizedText(document.querySelector(`#${config.searchId}`)?.value.trim() ?? "");
  const status = document.querySelector(`#${config.statusId}`)?.value ?? "all";
  const reconciliation = document.querySelector(`#${config.reconciliationId}`)?.value ?? "all";
  const chartAccount = document.querySelector(`#${config.chartId}`)?.value ?? "all";
  const month = document.querySelector(`#${config.monthId}`)?.value ?? "";
  const dateFrom = document.querySelector(`#${config.dateFromId}`)?.value ?? "";
  const dateTo = document.querySelector(`#${config.dateToId}`)?.value ?? "";

  return state.accounts
    .filter((item) => !term || normalizedText(`${item.description} ${supplierName(item.supplierId)} ${item.person} ${item.document} ${item.bankLaunch ?? ""}`).includes(term))
    .filter((item) => item.origin !== "Importação OFX" && item.origin !== "ImportaÃ§Ã£o OFX")
    .filter((item) => item.direction === config.direction)
    .filter((item) => {
      // Cash basis: paid items by payment date; open items by expected payment date
      const d = item.paidDate || accountExpectedDate(item) || "";
      if (dateFrom || dateTo) {
        if (dateFrom && d < dateFrom) return false;
        if (dateTo && d > dateTo) return false;
        return true;
      }
      if (month) return d.slice(0, 7) === month;
      return true;
    })
    .filter((item) => {
      if (status === "all") return true;
      if (status === "Aberto") return accountOpenAmount(item) > 0 && !isAccountOverdue(item) && item.status !== "Cancelado";
      if (status === "Atrasado") return isAccountOverdue(item);
      return accountAutoStatus(item) === status;
    })
    .filter((item) => reconciliation === "all" || (item.reconciliationStatus || "unreconciled") === reconciliation)
    .filter((item) => chartAccount === "all" || item.chartAccountId === chartAccount)
    .sort((a, b) => {
      // Primary key: data de pagamento (paid items first, ordered by when they were paid).
      // Secondary key: data de vencimento — used as tiebreaker and to order unpaid items among themselves.
      const paidA = a.paidDate || "";
      const paidB = b.paidDate || "";
      if (paidA !== paidB) {
        if (!paidA) return 1;
        if (!paidB) return -1;
        return paidA.localeCompare(paidB);
      }
      const dueA = accountExpectedDate(a) || "";
      const dueB = accountExpectedDate(b) || "";
      return dueA.localeCompare(dueB);
    });
}

// Export the currently filtered rows of Contas a Pagar/Receber to .xlsx
function exportAccountsToXlsx(key) {
  const config = accountViewConfigs[key];
  if (!config) return;
  if (typeof XLSX === "undefined") { toast("Exportação indisponível: biblioteca não carregada."); return; }
  const rows = accountRows(config);
  if (!rows.length) { toast("Nenhum lançamento para exportar com os filtros atuais."); return; }
  const personLabel = config.direction === "Pagar" ? "Fornecedor" : "Cliente";
  const reconciliationLabels = { reconciled: "Conciliado", unreconciled: "Não conciliado", manual: "Baixa manual" };
  const data = rows.map((item) => ({
    "Status": accountAutoStatus(item),
    [personLabel]: item.person || supplierName(item.supplierId) || "",
    "CPF/CNPJ": item.document || "",
    "Descrição": item.description || "",
    "Plano de contas": chartAccountName(item.chartAccountId) || "",
    "Competência": item.competenceDate ? dateLabel(item.competenceDate) : "",
    "Vencimento": accountExpectedDate(item) ? dateLabel(accountExpectedDate(item)) : "",
    "Pagamento": item.paidDate ? dateLabel(item.paidDate) : "",
    "Valor": Number(accountOriginalAmount(item)),
    "Pago": Number(accountPaidAmount(item)),
    "Em aberto": Number(accountOpenAmount(item)),
    "Conciliação": reconciliationLabels[item.reconciliationStatus || "unreconciled"] || "",
    "Forma de pagamento": item.paymentMethod || "",
  }));
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  const sheetName = config.direction === "Pagar" ? "Contas a Pagar" : "Contas a Receber";
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  const slug = config.direction === "Pagar" ? "contas-a-pagar" : "contas-a-receber";
  XLSX.writeFile(wb, `${slug}-${new Date().toISOString().slice(0, 10)}.xlsx`);
  toast(`Planilha exportada com ${rows.length} lançamentos.`);
}

function renderAccountSummary(config, rows = []) {
  const summary = document.querySelector(`#${config.summaryId}`);
  if (!summary) return;

  const activeRows = rows.filter((item) => item.status !== "Cancelado");
  const totalAmount = activeRows.reduce((sum, item) => sum + accountOriginalAmount(item), 0);
  const openAmount = activeRows.reduce((sum, item) => sum + accountOpenAmount(item), 0);
  const paidAmount = activeRows.reduce((sum, item) => sum + accountPaidAmount(item), 0);
  const unreconciledRows = activeRows.filter((item) => (item.reconciliationStatus || "unreconciled") === "unreconciled");
  const unreconciledAmount = unreconciledRows.reduce((sum, item) => sum + accountOriginalAmount(item), 0);

  const cards = [
    { label: config.totalLabel, value: currency(totalAmount), detail: `${activeRows.length} lançamentos`, tone: "neutral" },
    { label: "Total em aberto", value: currency(openAmount), detail: `${activeRows.filter((item) => accountOpenAmount(item) > 0).length} em aberto`, tone: openAmount > 0 ? "warning" : "neutral" },
    { label: config.paidLabel, value: currency(paidAmount), detail: `${activeRows.filter((item) => accountPaidAmount(item) > 0).length} baixados`, tone: "success" },
    { label: "Total Não Conciliado", value: currency(unreconciledAmount), detail: `${unreconciledRows.length} pendentes`, tone: unreconciledRows.length ? "danger" : "neutral" },
  ];

  summary.innerHTML = cards
    .map((card) => `
      <article class="financial-summary-card ${card.tone}">
        <span>${card.label}</span>
        <strong>${card.value}</strong>
        <small>${card.detail}</small>
      </article>
    `)
    .join("");
}

function renderAccountTable(config) {
  const table = document.querySelector(`#${config.tableId}`);
  if (!table) return;
  const rows = accountRows(config);
  renderAccountSummary(config, rows);
  table.innerHTML = rows.length
    ? rows
        .map((item) => {
          const sourceLabel =
            item.reconciliationStatus === "reconciled"
              ? "Conciliado"
              : item.reconciliationStatus === "manual"
                ? "Baixa manual"
                : "Não conciliado";
          const sourceClass = item.reconciliationStatus === "reconciled" ? "ofx" : "manual";
          const statusLabel = accountAutoStatus(item);
          const statusStyle = accountAutoStatusClass(item);
          const originalAmt = item.originalAmount ?? item.amount;
          const discount = originalAmt > item.amount ? originalAmt - item.amount : 0;
          const amtClass = item.direction === "Receber" ? "amount-in" : "amount-out";
          const sign = item.direction === "Receber" ? "" : "-";
          const person = supplierName(item.supplierId) || item.person || "-";
          const chartAcc = state.chartAccounts.find((a) => a.id === item.chartAccountId);
          const planLabel = chartAccountName(item.chartAccountId) || "";
          return `
            <tr>
              <td><span class="monthly-status-button ${statusStyle}" title="${statusLabel}">${accountStatusIcon(statusLabel, statusStyle)}</span></td>
              <td><div class="patient-name"><strong title="${person}">${person}</strong></div></td>
              <td><div class="patient-name"><strong title="${item.description || ""}">${item.description || "-"}</strong>${planLabel ? `<span title="${planLabel}">${planLabel}</span>` : ""}</div></td>
              <td class="date-cell">${monthYearLabel(item.competenceDate)}</td>
              <td class="date-cell">${dateLabel(item.forecastDate)}</td>
              <td class="date-cell">${item.paidDate ? dateLabel(item.paidDate) : "-"}</td>
              <td class="amount-cell">
                <strong class="${amtClass}">${sign}${currency(item.amount)}</strong>
                ${discount > 0 ? `<small style="color:var(--danger,#e53);display:block">desc. ${currency(discount)}</small>` : ""}
              </td>
              <td><span class="source-pill ${sourceClass}">${sourceLabel}</span></td>
              <td class="row-actions">
                <button class="row-action-button edit-icon-button" data-edit-account="${item.id}" type="button" title="Editar" aria-label="Editar conta"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                ${item.paidDate
                  ? `<button class="row-action-button reverse-icon-button" data-reverse-account="${item.id}" type="button" title="Estornar baixa" aria-label="Estornar baixa"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg></button>`
                  : `<button class="row-action-button settle-icon-button" data-settle-account="${item.id}" type="button" title="Baixar" aria-label="Baixar conta"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></button>`
                }
                <button class="row-action-button delete-icon-button" data-delete-account="${item.id}" type="button" title="Excluir" aria-label="Excluir conta"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
              </td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="9"><div class="empty-state">${config.emptyMessage}</div></td></tr>`;
}

// ─── Contracts ───────────────────────────────────────────────────────────────

function ensureContractForecasts() {
  // Remove all unsettled auto-generated forecasts before regenerating (makes this idempotent)
  state.accounts = state.accounts.filter(
    (acc) => !acc.contractId || acc.paidDate || acc.reconciliationStatus === "manual"
  );
  // Use first day of current month as floor so past historical months aren't generated
  const minDate = demoToday.slice(0, 7) + "-01";
  (state.contracts || []).forEach((contract) => {
    if (contractStatus(contract) !== "Inativo") generateContractForecastTitles(contract, minDate);
  });
}

function contractStatus(contract) {
  if (contract.status === "Inativo") return "Inativo";
  const today = demoToday;
  if (contract.endDate && contract.endDate < today) return "Encerrado";
  return "Ativo";
}

function removeContractForecastTitles(contractId, onlyFuture = true) {
  const today = demoToday;
  const removedIds = [];
  state.accounts = state.accounts.filter((acc) => {
    if (acc.contractId !== contractId) return true;
    if (acc.reconciliationStatus === "manual" || acc.paidDate) return true;
    if (onlyFuture && acc.forecastDate < today) return true;
    removedIds.push(acc.id);
    return false;
  });
  rememberDeletedEntities("accounts", removedIds);
}

function addMonthsToDate(dateStr, months) {
  const [y, m] = dateStr.split("-").map(Number);
  const total = (y * 12 + (m - 1)) + months;
  const ny = Math.floor(total / 12);
  const nm = (total % 12) + 1;
  return `${ny}-${String(nm).padStart(2, "0")}-01`;
}

function generateContractForecastTitles(contract, minDate = null) {
  const rawStart = contract.startDate || demoToday;
  const start = minDate && minDate > rawStart ? minDate : rawStart;
  // Limit to 24 months ahead to avoid generating thousands of records
  const horizon = addMonthsToDate(demoToday, 24);
  const contractEnd = contract.endDate || "2099-12-31";
  const end = contractEnd < horizon ? contractEnd : horizon;
  const day = String(contract.dayOfMonth || 5).padStart(2, "0");
  const today = demoToday;

  let [startYear, startMonth] = start.split("-").map(Number);
  const [endYear, endMonth] = end.split("-").map(Number);

  const generated = [];
  for (let y = startYear, m = startMonth; y < endYear || (y === endYear && m <= endMonth); ) {
    const mm = String(m).padStart(2, "0");
    const maxDay = new Date(y, m, 0).getDate();
    const actualDay = Math.min(Number(day), maxDay);
    const forecastDate = `${y}-${mm}-${String(actualDay).padStart(2, "0")}`;

    // skip if already past and already has matching settled account
    const alreadyHasReal = state.accounts.some(
      (acc) =>
        acc.contractId === contract.id &&
        acc.forecastDate &&
        acc.forecastDate.startsWith(`${y}-${mm}`) &&
        (acc.paidDate || acc.reconciliationStatus === "manual")
    );
    // skip if no forecast yet exists for this month
    const alreadyHasForecast = state.accounts.some(
      (acc) =>
        acc.contractId === contract.id &&
        acc.forecastDate &&
        acc.forecastDate.startsWith(`${y}-${mm}`) &&
        !acc.paidDate &&
        acc.reconciliationStatus !== "manual"
    );

    if (!alreadyHasReal && !alreadyHasForecast) {
      generated.push({
        id: uid("acc"),
        contractId: contract.id,
        direction: "Pagar",
        description: contract.description || "",
        person: contract.person || "",
        document: contract.document || "",
        supplierId: contract.supplierId || "",
        chartAccountId: contract.chartAccountId || "",
        amount: contract.amount,
        forecastDate,
        // Some obligations (taxes, service fees billed in arrears) belong to the prior month's
        // competência even though paid this month — set per-contract via competenceOffsetMonths.
        // Competência is always the 1st of its month, regardless of the forecast's due day.
        competenceDate: addMonthsToDate(forecastDate, contract.competenceOffsetMonths || 0),
        paymentMethod: contract.paymentMethod || "Pix",
        status: forecastDate < today ? "Em aberto" : "A vencer",
        openAmount: contract.amount,
        paidAmount: 0,
        paidDate: "",
        reconciliationStatus: "unreconciled",
        notes: "",
        createdAt: today,
      });
    }

    m++;
    if (m > 12) { m = 1; y++; }
  }
  state.accounts.push(...generated);
}

function openContractModal(id, defaults = {}) {
  const existing = id ? state.contracts.find((c) => c.id === id) : null;
  editingContractId = id || null;
  const schema = modalSchemas.contract;
  schema.title = existing ? "Editar contrato" : "Adicionar contrato";
  const values = existing ? { ...existing } : { ...defaults };
  openModal("contract", values);
}

function deleteContract(id) {
  const contract = state.contracts.find((c) => c.id === id);
  if (!contract) return;
  const hasFuture = state.accounts.some(
    (acc) => acc.contractId === id && !acc.paidDate && acc.reconciliationStatus !== "manual"
  );
  let msg = `Excluir o contrato "${contract.description}"?`;
  if (hasFuture) msg += "\n\nOs títulos de previsão futuros (não pagos) também serão removidos.";
  if (!confirm(msg)) return;
  removeContractForecastTitles(id, false);
  rememberDeletedEntities("contracts", id);
  state.contracts = state.contracts.filter((c) => c.id !== id);
  saveDeletedState();
  render();
}

function renderContracts() {
  const tbody = document.querySelector("#contractsTable");
  const summaryEl = document.querySelector("#contractsSummary");
  if (!tbody) return;

  const contracts = state.contracts || [];

  // Populate chart account filter
  const chartFilter = document.querySelector("#contractChartFilter");
  if (chartFilter) {
    const selected = chartFilter.value || "all";
    const usedIds = [...new Set(contracts.map((c) => c.chartAccountId).filter(Boolean))];
    const options = activeChartAccounts().filter((a) => usedIds.includes(a.id));
    chartFilter.innerHTML = `<option value="all">Plano de contas</option>` +
      options.map((a) => `<option value="${a.id}" ${a.id === selected ? "selected" : ""}>${a.code} - ${a.name}</option>`).join("");
  }

  // Populate supplier filter
  const supplierFilter = document.querySelector("#contractSupplierFilter");
  if (supplierFilter) {
    const selected = supplierFilter.value || "all";
    const usedSuppliers = [...new Map(contracts.map((c) => [c.supplierId || c.person, { id: c.supplierId, name: c.person }])).values()].filter((s) => s.name);
    supplierFilter.innerHTML = `<option value="all">Fornecedor</option>` +
      usedSuppliers.map((s) => `<option value="${s.id || s.name}" ${(s.id || s.name) === selected ? "selected" : ""}>${s.name}</option>`).join("");
  }

  // Read filter values
  const chartVal = chartFilter?.value || "all";
  const supplierVal = supplierFilter?.value || "all";
  const statusVal = document.querySelector("#contractStatusFilter")?.value || "all";
  const searchVal = normalizedText(document.querySelector("#contractSearchInput")?.value || "");

  // Filtered set for table
  const filtered = contracts.filter((c) => {
    if (chartVal !== "all" && c.chartAccountId !== chartVal) return false;
    if (supplierVal !== "all" && (c.supplierId || c.person) !== supplierVal) return false;
    if (statusVal !== "all" && contractStatus(c) !== statusVal) return false;
    if (searchVal && !normalizedText(c.description).includes(searchVal)) return false;
    return true;
  });

  // Summary always counts ALL contracts (not filtered)
  const active = contracts.filter((c) => contractStatus(c) === "Ativo");
  const inactive = contracts.filter((c) => contractStatus(c) === "Inativo");
  const encerrado = contracts.filter((c) => contractStatus(c) === "Encerrado");
  const monthly = active.reduce((s, c) => s + Number(c.amount || 0), 0);

  if (summaryEl) {
    const inativoDetail = [inactive.length && `${inactive.length} inativos`, encerrado.length && `${encerrado.length} encerrados`].filter(Boolean).join(", ") || "0 inativos";
    summaryEl.innerHTML = [
      { label: "Contratos ativos", value: String(active.length), detail: inativoDetail, tone: "neutral" },
      { label: "Total mensal previsto", value: currency(monthly), detail: `${active.length} contratos`, tone: "success" },
      { label: "Total anual previsto", value: currency(monthly * 12), detail: "projeção 12 meses", tone: "neutral" },
    ]
      .map((card) => `
        <article class="financial-summary-card ${card.tone}">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
          <small>${card.detail}</small>
        </article>`)
      .join("");
  }

  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="9"><div class="empty-state">${contracts.length ? "Nenhum contrato encontrado para os filtros selecionados." : "Nenhum contrato cadastrado."}</div></td></tr>`;
    return;
  }

  tbody.innerHTML = [...filtered].sort((a, b) => Number(a.dayOfMonth) - Number(b.dayOfMonth))
    .map((c) => {
      const st = contractStatus(c);
      const stPill = st === "Ativo" ? "ativo" : st === "Inativo" ? "inativo" : "atrasado";
      return `<tr>
        <td><span class="status-pill ${stPill}">${st}</span></td>
        <td>${c.description || ""}</td>
        <td>${c.person || ""}</td>
        <td>${chartAccountName(c.chartAccountId)}</td>
        <td style="text-align:center">${c.dayOfMonth}</td>
        <td>${dateLabel(c.startDate)}</td>
        <td>${c.endDate ? dateLabel(c.endDate) : "Indefinido"}</td>
        <td><strong>${currency(c.amount)}</strong></td>
        <td class="row-actions">
          <button class="row-action-button edit-icon-button" data-edit-contract="${c.id}" type="button" title="Editar contrato" aria-label="Editar contrato"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
          <button class="row-action-button delete-icon-button" data-delete-contract="${c.id}" type="button" title="Excluir contrato" aria-label="Excluir contrato"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
        </td>
      </tr>`;
    })
    .join("");
}

// ─────────────────────────────────────────────────────────────────────────────

function renderAccounts() {
  Object.values(accountViewConfigs).forEach(renderAccountTable);
}

function bankMovementDirection(movement = {}) {
  return Number(movement.amount || 0) >= 0 ? "Receber" : "Pagar";
}

function reconciliationStatusLabel(status = "") {
  return {
    unreconciled: "Não conciliado",
    reconciled: "Conciliado",
    ignored: "Ignorado",
  }[status] || "Não conciliado";
}

function compatibleTitlesForMovement(movement = {}) {
  const direction = bankMovementDirection(movement);
  const movementAmount = Math.abs(Number(movement.amount || 0));
  const movementText = normalizedText(movement.description || "");
  return state.accounts
    .filter((account) => account.direction === direction)
    .filter((account) => account.origin !== "Importação OFX" && account.origin !== "ImportaÃ§Ã£o OFX")
    .filter((account) => account.status !== "Cancelado" && accountOpenAmount(account) > 0)
    .map((account) => {
      const valueDiff = Math.abs(accountOpenAmount(account) - movementAmount);
      const valueRatio = movementAmount > 0 ? valueDiff / movementAmount : 1;
      const valueScore = valueDiff < 0.01 ? 60 : valueRatio < 0.05 ? 30 : valueRatio < 0.15 ? 10 : 0;
      const dateScore = Math.abs(daysBetween(accountExpectedDate(account), movement.date)) <= 5 ? 20 : 0;
      const accountText = normalizedText(`${account.person} ${supplierName(account.supplierId)} ${account.description}`);
      const textScore = accountText && movementText.split(/\s+/).some((word) => word.length > 3 && accountText.includes(word)) ? 20 : 0;
      return { account, score: valueScore + dateScore + textScore };
    })
    .filter((item) => item.score >= 50)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((item) => item.account);
}

function reconciliationRows() {
  const term = normalizedText(document.querySelector("#bankReconciliationSearch")?.value.trim() || "");
  const status = document.querySelector("#bankReconciliationStatusFilter")?.value || "unreconciled";
  const type = document.querySelector("#bankReconciliationTypeFilter")?.value || "all";
  const accountId = document.querySelector("#bankReconciliationAccountFilter")?.value || "all";
  const reconMonth = document.querySelector("#bankReconciliationMonthFilter")?.value || "";
  return state.bankMovements
    .filter((movement) => status === "all" || movement.reconciliationStatus === status)
    .filter((movement) => type === "all" || (type === "receivable" ? Number(movement.amount || 0) >= 0 : Number(movement.amount || 0) < 0))
    .filter((movement) => accountId === "all" || movement.bankAccountId === accountId)
    .filter((movement) => !reconMonth || String(movement.date || "").startsWith(reconMonth))
    .filter((movement) => !term || normalizedText(`${movement.description} ${movement.bankName} ${movement.notes}`).includes(term))
    .sort((a, b) => Math.abs(Number(b.amount || 0)) - Math.abs(Number(a.amount || 0)));
}

function renderBankReconciliation() {
  const summary = document.querySelector("#bankReconciliationSummary");
  const leftPanel = document.querySelector("#bankMovementsPanel");
  const rightPanel = document.querySelector("#systemAccountsPanel");
  const reconcileBtn = document.querySelector("#reconcileSelectedButton");
  if (!summary || !leftPanel || !rightPanel) return;

  const term = normalizedText(document.querySelector("#bankReconciliationSearch")?.value.trim() || "");
  const type = document.querySelector("#bankReconciliationTypeFilter")?.value || "all";
  const accountId = document.querySelector("#bankReconciliationAccountFilter")?.value || "all";
  const reconMonth = document.querySelector("#bankReconciliationMonthFilter")?.value || "";
  const filteredBase = state.bankMovements
    .filter((m) => type === "all" || (type === "receivable" ? Number(m.amount || 0) >= 0 : Number(m.amount || 0) < 0))
    .filter((m) => accountId === "all" || m.bankAccountId === accountId)
    .filter((m) => !reconMonth || String(m.date || "").startsWith(reconMonth))
    .filter((m) => !term || normalizedText(`${m.description} ${m.bankName} ${m.notes}`).includes(term));
  const unreconciled = filteredBase.filter((m) => m.reconciliationStatus === "unreconciled").length;
  const reconciled = filteredBase.filter((m) => m.reconciliationStatus === "reconciled").length;
  const ignored = filteredBase.filter((m) => m.reconciliationStatus === "ignored").length;
  summary.innerHTML = `
    <article class="summary-item"><span>Não conciliados</span><strong>${unreconciled}</strong><small>Pendentes de vínculo</small></article>
    <article class="summary-item"><span>Conciliados</span><strong>${reconciled}</strong><small>Vinculados a títulos</small></article>
    <article class="summary-item"><span>Ignorados</span><strong>${ignored}</strong><small>Fora do financeiro</small></article>
  `;

  // ─── Left panel: bank movements ──────────────────────────────────────────
  const movements = reconciliationRows();
  const selectedMovement = selectedReconMovementId
    ? state.bankMovements.find((m) => m.id === selectedReconMovementId)
    : null;

  leftPanel.innerHTML = movements.length
    ? movements.map((m) => {
        const isSelected = m.id === selectedReconMovementId;
        const isReconciled = m.reconciliationStatus === "reconciled";
        const isIgnored = m.reconciliationStatus === "ignored";
        const amount = Number(m.amount || 0);
        let statusPill = "";
        if (isReconciled) statusPill = `<span class="source-pill ofx">Conciliado</span>`;
        else if (isIgnored) statusPill = `<span class="source-pill manual">Ignorado</span>`;
        return `
          <div class="recon-row${isSelected ? " recon-row--selected" : ""}${isReconciled ? " recon-row--done" : ""}${isIgnored ? " recon-row--done" : ""}"
               data-select-movement="${m.id}">
            <span class="recon-row-date">${dateLabel(m.date)}</span>
            <span class="recon-row-desc"><strong>${m.description}</strong><br><small>${m.bankName || bankAccountLabel(m.bankAccountId)}</small></span>
            <span class="recon-row-amount ${amount >= 0 ? "amount-in" : "amount-out"}">${currency(Math.abs(amount))}</span>
            <span class="recon-row-status">${statusPill}</span>
            ${isSelected && !isReconciled && !isIgnored ? `
              <span class="recon-row-actions">
                <button class="row-action-button edit-icon-button" data-create-title-from-movement="${m.id}" title="Criar título"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
                <button class="row-action-button delete-icon-button" data-ignore-movement="${m.id}" title="Ignorar"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
              </span>` : ""}
          </div>`;
      }).join("")
    : `<div class="empty-state">Nenhum movimento encontrado.</div>`;

  // ─── Right panel: system accounts ────────────────────────────────────────
  const compatibleIds = selectedMovement
    ? new Set(compatibleTitlesForMovement(selectedMovement).map((a) => a.id))
    : new Set();
  const directionFilter = selectedMovement ? bankMovementDirection(selectedMovement) : null;

  const systemAccounts = state.accounts
    .filter((a) => a.origin !== "Importação OFX" && a.origin !== "ImportaÃ§Ã£o OFX")
    .filter((a) => a.status !== "Cancelado")
    .filter((a) => !directionFilter || a.direction === directionFilter)
    .filter((a) => {
      const d = a.forecastDate || a.competenceDate || "";
      return reconMonth ? d.startsWith(reconMonth) : true;
    })
    .filter((a) => accountOpenAmount(a) > 0)
    .sort((a, b) => accountOpenAmount(b) - accountOpenAmount(a));

  rightPanel.innerHTML = systemAccounts.length
    ? systemAccounts.map((a) => {
        const isSelected = a.id === selectedReconTitleId;
        const isCompatible = compatibleIds.has(a.id);
        return `
          <div class="recon-row${isSelected ? " recon-row--selected" : ""}${isCompatible ? " recon-row--compatible" : ""}"
               data-select-title="${a.id}">
            <span class="recon-row-date">${dateLabel(a.forecastDate || a.competenceDate)}</span>
            <span class="recon-row-desc"><strong>${a.description}</strong><br><small>${supplierName(a.supplierId) || a.person || ""}</small></span>
            <span class="recon-row-amount ${a.direction === "Receber" ? "amount-in" : "amount-out"}">${currency(accountOpenAmount(a))}</span>
            <span class="recon-row-status">${isCompatible ? `<span class="source-pill ofx">Sugerido</span>` : ""}</span>
          </div>`;
      }).join("")
    : `<div class="empty-state">${directionFilter
        ? "Nenhuma conta em aberto encontrada."
        : "Selecione um movimento para ver as contas compatíveis."}</div>`;

  if (reconcileBtn) {
    const canReconcile = !!(selectedReconMovementId && selectedReconTitleId);
    reconcileBtn.disabled = !canReconcile;
    reconcileBtn.classList.toggle("primary-button", canReconcile);
    reconcileBtn.classList.toggle("ghost-button", !canReconcile);
  }
}

function resetBankReconciliationFilters() {
  const status = document.querySelector("#bankReconciliationStatusFilter");
  const type = document.querySelector("#bankReconciliationTypeFilter");
  const account = document.querySelector("#bankReconciliationAccountFilter");
  const search = document.querySelector("#bankReconciliationSearch");
  if (status) status.value = "unreconciled";
  if (type) type.value = "all";
  if (account) account.value = "all";
  if (search) search.value = "";
}

function reconcileBankMovement(movementId, titleId) {
  const movement = state.bankMovements.find((item) => item.id === movementId);
  const title = state.accounts.find((item) => item.id === titleId);
  if (!movement || !title) {
    toast("Selecione um título financeiro para conciliar.");
    return;
  }
  if (movement.reconciliationStatus !== "unreconciled") {
    toast("Este movimento já foi tratado.");
    return;
  }
  if (bankMovementDirection(movement) !== title.direction) {
    toast("Entrada só concilia com contas a receber; saída só concilia com contas a pagar.");
    return;
  }
  const movementAmount = Math.abs(Number(movement.amount || 0));
  const openAmount = accountOpenAmount(title);
  if (movementAmount > openAmount + 0.01) {
    toast("Valor do movimento é maior que o saldo aberto do título.");
    return;
  }
  title.paidAmount = Math.min(accountOriginalAmount(title), accountPaidAmount(title) + movementAmount);
  title.openAmount = Math.max(0, accountOriginalAmount(title) - title.paidAmount);
  title.paidDate = movement.date;
  title.settlementDate = movement.date;
  title.linkedBankMovementId = movement.id;
  title.reconciliationStatus = "reconciled";
  title.bankAccountId = movement.bankAccountId;
  title.paymentMethod = movement.bankName || bankAccountLabel(movement.bankAccountId);
  title.status = accountAutoStatus(title);
  movement.reconciliationStatus = "reconciled";
  movement.linkedFinancialTitleId = title.id;
  movement.updatedAt = new Date().toISOString();
  saveState();
  render();
  toast("Movimento conciliado com sucesso.");
}

function ignoreBankMovement(movementId) {
  const movement = state.bankMovements.find((item) => item.id === movementId);
  if (!movement) return;
  if (movement.reconciliationStatus !== "unreconciled") {
    toast("Este movimento já foi tratado.");
    return;
  }
  movement.reconciliationStatus = "ignored";
  movement.notes = "Ignorado manualmente.";
  movement.updatedAt = new Date().toISOString();
  saveState();
  render();
  toast("Movimento ignorado.");
}

function createTitleFromMovement(movementId) {
  const movement = state.bankMovements.find((item) => item.id === movementId);
  if (!movement) return;
  if (movement.reconciliationStatus !== "unreconciled") {
    toast("Este movimento já foi tratado.");
    return;
  }
  const direction = bankMovementDirection(movement);
  const amount = Math.abs(Number(movement.amount || 0));
  const account = normalizeAccount({
    id: uid("cp"),
    direction,
    status: "Aberto",
    competenceDate: movement.date,
    forecastDate: movement.date,
    dueDate: movement.date,
    paidDate: "",
    amount,
    originalAmount: amount,
    paidAmount: 0,
    openAmount: amount,
    description: movement.description,
    person: movement.description,
    document: "",
    supplierId: "",
    chartAccountId: movement.chartAccountId || activeChartAccounts()[0]?.id || "",
    paymentMethod: "",
    origin: "Manual",
    bankAccountId: movement.bankAccountId,
    reconciliationStatus: "unreconciled",
  }, state.accounts.length);
  state.accounts.push(account);
  saveState();
  render();
  toast("Título criado. Confira os dados e concilie o movimento.");
}
function renderOfxImport() {
  const summary = document.querySelector("#ofxBatchSummary");
  const table = document.querySelector("#ofxReviewTable");
  if (!summary || !table) return;
  const batch = currentOfxBatch();
  const drafts = batch ? state.ofxDrafts.filter((item) => item.importBatchId === batch.id) : [];
  const validCount = drafts.filter((item) => item.status === "Válido").length;
  const reviewCount = drafts.filter((item) => item.status === "A revisar").length;
  const duplicateCount = drafts.filter((item) => item.status === "Duplicado").length;
  const ignoredCount = drafts.filter((item) => item.status === "Ignorado").length;

  summary.innerHTML = batch
    ? `
      <article class="summary-item"><span>Lote</span><strong>${batch.fileName}</strong><small>${bankAccountLabel(batch.accountId)} · ${dateTimeLabel(batch.importedAt)}</small></article>
      <article class="summary-item"><span>Transações</span><strong>${drafts.length}</strong><small>${validCount} válidas</small></article>
      <article class="summary-item"><span>A revisar</span><strong>${reviewCount}</strong><small>${duplicateCount} duplicadas</small></article>
      <article class="summary-item"><span>Ignoradas</span><strong>${ignoredCount}</strong><small>Status do lote: ${batch.status}</small></article>
    `
    : `<div class="empty-state">Selecione uma conta, envie um arquivo .ofx e clique em Processar OFX.</div>`;

  const chartOptions = activeChartAccounts().map((account) => `<option value="${account.id}">${account.code} - ${account.name}</option>`).join("");
  table.innerHTML = drafts.length
    ? drafts
        .map((draft) => {
          const chart = state.chartAccounts.find((account) => account.id === draft.chartAccountId);
          const status = draft.status === "Duplicado" ? "atrasado" : draft.status === "A revisar" ? "pendente" : draft.status === "Ignorado" ? "cancelada" : "ativo";
          return `
            <tr class="${draft.status === "Duplicado" ? "muted-row" : ""}">
              <td><input class="inline-field" data-ofx-field="competenceDate" data-ofx-id="${draft.id}" type="date" value="${draft.competenceDate}" /></td>
              <td><input class="inline-field" data-ofx-field="paymentDate" data-ofx-id="${draft.id}" type="date" value="${draft.paymentDate}" /></td>
              <td><strong>${draft.description}</strong><br><small>${draft.ofxIdentifier || "-"} ${draft.note ? `· ${draft.note}` : ""}</small></td>
              <td>${draft.accountName || bankAccountLabel(draft.accountId)}</td>
              <td>${draft.accountType}</td>
              <td>${draft.origin}</td>
              <td>
                <select class="inline-field" data-ofx-field="chartAccountId" data-ofx-id="${draft.id}">
                  <option value="">A revisar</option>
                  ${chartOptions}
                </select>
              </td>
              <td>${chart?.code || draft.chartAccountCode || "-"}</td>
              <td>
                <select class="inline-field" data-ofx-field="type" data-ofx-id="${draft.id}">
                  ${["receita", "despesa", "transferência", "financiamento"].map((type) => `<option value="${type}">${type}</option>`).join("")}
                </select>
              </td>
              <td><strong class="${draft.type === "receita" ? "amount-in" : "amount-out"}">${draft.type === "receita" ? "" : "-"}${currency(Math.abs(draft.amount))}</strong></td>
              <td><span class="status-pill ${status}">${draft.status}</span></td>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-confirm-ofx-draft="${draft.id}" type="button" title="Confirmar lançamento" aria-label="Confirmar lançamento"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></button>
                  <button class="row-action-button edit-icon-button" data-save-ofx-rule="${draft.id}" type="button" title="Salvar regra" aria-label="Salvar regra"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>
                  <button class="row-action-button delete-icon-button" data-ignore-ofx-draft="${draft.id}" type="button" title="Ignorar" aria-label="Ignorar"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
              </td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="12"><div class="empty-state">Nenhuma transação OFX em revisão.</div></td></tr>`;

  drafts.forEach((draft) => {
    const chartSelect = document.querySelector(`[data-ofx-field="chartAccountId"][data-ofx-id="${draft.id}"]`);
    const typeSelect = document.querySelector(`[data-ofx-field="type"][data-ofx-id="${draft.id}"]`);
    if (chartSelect) chartSelect.value = draft.chartAccountId || "";
    if (typeSelect) typeSelect.value = draft.type || "despesa";
  });
}

function cashFlowMonths() {
  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const months = [];
  for (let year = 2025; year <= 2026; year += 1) {
    for (let month = 1; month <= 12; month += 1) {
      months.push({
        key: `${year}-${String(month).padStart(2, "0")}`,
        label: `${labels[month - 1]}/${String(year).slice(2)}`,
        projected: year === 2026 && month >= 6,
      });
    }
  }
  return months;
}

function cashFlowAccount(item) {
  return state.chartAccounts.find((account) => account.id === item.chartAccountId) ?? {};
}

function cashFlowMonthValue(month, predicate) {
  return state.accounts
    .filter((item) => (item.paidDate || item.dueDate || item.competenceDate || "").slice(0, 7) === month.key)
    .filter(predicate)
    .reduce((sum, item) => sum + (item.direction === "Receber" ?Number(item.amount || 0) : -Number(item.amount || 0)), 0);
}

function cashFlowProjection(label, monthIndex) {
  const values = {
    "Recebimentos de Clientes": 24000,
    "Impostos sob Venda": -1700,
    Custos: -6800,
    Despesas: -5234,
    "Resgate Aplicação": 0,
    "Rendimento Aplicação": 0,
    "Venda de Imobilizado": 0,
    Aplicação: 0,
    "Máquinas e Equipamentos": 0,
    "Computadores e Periféricos": 0,
    "Móveis e Utensílios": 0,
    Veículos: 0,
    Instalações: 0,
    "Empréstimo Contratado": 0,
    "Aporte Capital": 0,
    "Pagamento de Empréstimo": -1450,
    "Distribuição de Lucros": -4000,
    "Distribuição de Lucros - Outros": -1900,
    "Distribuição de Lucros - Obra": 0,
    "Transferência Entre Contas": 0,
  };
  return (values[label] ?? 0) + (label === "Pagamento de Empréstimo" && monthIndex === 22 ? -16500 : 0);
}

function cashFlowRowValues(months, label, predicate) {
  return months.map((month, index) => {
    const actual = cashFlowMonthValue(month, predicate);
    if (actual || !month.projected) return actual;
    return cashFlowProjection(label, index);
  });
}

function cashFlowSum(rows, months) {
  return months.map((_, index) => rows.reduce((sum, row) => sum + row.values[index], 0));
}

function buildCashFlowRows(months) {
  const textHas = (value, term) => normalizedText(value).includes(normalizedText(term));
  const byPackage = (term, direction) => (item) => {
    const account = cashFlowAccount(item);
    const haystack = `${account.package ?? ""} ${account.dfcDescription ?? ""} ${account.name ?? ""}`;
    return (!direction || item.direction === direction) && textHas(haystack, term);
  };
  const byName = (term, direction) => (item) => {
    const account = cashFlowAccount(item);
    const haystack = `${account.name ?? ""} ${item.description ?? ""}`;
    return (!direction || item.direction === direction) && textHas(haystack, term);
  };
  const rows = [];
  const operationalEntries = [
    { code: "", label: "Recebimentos de Clientes", values: cashFlowRowValues(months, "Recebimentos de Clientes", byPackage("recebimentos de clientes", "Receber")) },
    { code: "", label: "Impostos sob Venda", values: cashFlowRowValues(months, "Impostos sob Venda", byName("impostos", "Pagar")) },
  ];
  const operationalExits = [
    { code: "", label: "Custos", values: cashFlowRowValues(months, "Custos", byPackage("custos", "Pagar")) },
    { code: "", label: "Despesas", values: cashFlowRowValues(months, "Despesas", byPackage("despesas", "Pagar")) },
  ];
  const investmentEntries = ["Resgate Aplicação", "Rendimento Aplicação", "Venda de Imobilizado"].map((label) => ({
    code: "",
    label,
    values: cashFlowRowValues(months, label, byName(label, "Receber")),
  }));
  const investmentExits = ["Aplicação", "Máquinas e Equipamentos", "Computadores e Periféricos", "Móveis e Utensílios", "Veículos", "Instalações"].map((label) => ({
    code: "",
    label,
    values: cashFlowRowValues(months, label, byName(label, "Pagar")),
  }));
  const financingEntries = ["Empréstimo Contratado", "Aporte Capital"].map((label) => ({
    code: "",
    label,
    values: cashFlowRowValues(months, label, byName(label, "Receber")),
  }));
  const financingExits = ["Pagamento de Empréstimo", "Distribuição de Lucros", "Distribuição de Lucros - Outros", "Distribuição de Lucros - Obra"].map((label) => ({
    code: "",
    label,
    values: cashFlowRowValues(months, label, byName(label.replace(" - Outros", ""), "Pagar")),
  }));
  const transitExits = [
    {
      code: "",
      label: "Transferência Entre Contas",
      values: cashFlowRowValues(months, "Transferência Entre Contas", byName("transferencia", null)),
    },
  ];
  [
    { title: "Atividades Operacionais", entries: operationalEntries, exits: operationalExits },
    { title: "Atividades de Investimento", entries: investmentEntries, exits: investmentExits },
    { title: "Atividades de Financiamento", entries: financingEntries, exits: financingExits },
    { title: "Transitório", entries: [], exits: transitExits },
  ].forEach((section) => {
    const entryValues = cashFlowSum(section.entries, months);
    const exitValues = cashFlowSum(section.exits, months);
    rows.push({ kind: "group", code: "", label: section.title, values: entryValues.map((value, index) => value + exitValues[index]) });
    if (section.entries.length) rows.push({ kind: "subtotal", code: "", label: "(+) Entradas", values: entryValues });
    rows.push(...section.entries);
    if (section.exits.length) rows.push({ kind: "subtotal", code: "", label: "(-) Saídas", values: exitValues });
    rows.push(...section.exits);
  });
  const periodBalance = cashFlowSum(rows.filter((row) => row.kind === "group"), months);
  const initial = [];
  const final = [];
  periodBalance.forEach((value, index) => {
    initial[index] = index === 0 ?16555 : final[index - 1];
    final[index] = initial[index] + value;
  });
  rows.push({ kind: "balance", code: "", label: "(=) Saldo do Período", values: periodBalance });
  rows.push({ kind: "balance", code: "", label: "(=) Saldo Inicial", values: initial });
  rows.push({ kind: "balance", code: "", label: "(=) Saldo Final", values: final });
  return rows;
}

function cashFlowCell(value, row, month) {
  const rounded = Math.round(value);
  const formatted = rounded === 0 ?"-" : `${rounded < 0 ?"- " : ""}${Math.abs(rounded).toLocaleString("pt-BR")}`;
  const classes = [
    rounded < 0 ?"negative" : rounded > 0 ?"positive" : "",
    month.projected ?"projected" : "",
    row.kind === "balance" && row.label.includes("Final") && rounded < 0 ?"critical" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return `<td class="${classes}">${formatted}</td>`;
}

function dreMonths() {
  return cashFlowMonths().filter((month) => month.key <= "2026-05");
}

function dreMonthValue(month, predicate) {
  return state.accounts
    .filter((item) => (item.competenceDate || item.dueDate || "").slice(0, 7) === month.key)
    .filter(predicate)
    .reduce((sum, item) => sum + (item.direction === "Receber" ?Number(item.amount || 0) : -Number(item.amount || 0)), 0);
}

function dreRowsByAccounts(months, groupPredicate) {
  return state.chartAccounts
    .filter(groupPredicate)
    .sort(compareChartAccountsByCode)
    .map((account) => ({
      kind: "account",
      code: account.code,
      label: account.name,
      values: months.map((month) => dreMonthValue(month, (item) => item.chartAccountId === account.id)),
    }));
}

function dreSum(rows, months) {
  return months.map((_, index) => rows.reduce((sum, row) => sum + row.values[index], 0));
}

function dreGroupRow(label, rows, months) {
  return { kind: "group", code: "", label, values: dreSum(rows, months) };
}

function buildDreRows(months) {
  const sameText = (left = "", right = "") => normalizedText(left) === normalizedText(right);
  const byDre = (label) => (account) => sameText(account.dreGroup, label);
  const byPackage = (label) => (account) => sameText(account.package, label);
  const revenueRows = dreRowsByAccounts(months, (account) => byDre("(+) Faturamento Bruto")(account));
  const taxRows = dreRowsByAccounts(months, (account) => byDre("(-) Impostos sob Venda")(account));
  const costRows = dreRowsByAccounts(months, (account) => byDre("(-) Custos")(account));
  const commercialRows = dreRowsByAccounts(months, (account) => byPackage("Despesas Comerciais")(account));
  const peopleRows = dreRowsByAccounts(months, (account) => normalizedText(account.package ?? "").includes("pessoal"));
  const infraRows = dreRowsByAccounts(months, (account) => byPackage("Despesas com Infraestrutura")(account));
  const techRows = dreRowsByAccounts(months, (account) => byPackage("Despesas com Tecnologia")(account));
  const generalRows = dreRowsByAccounts(months, (account) => byPackage("Despesas Gerais")(account));
  const taxExpenseRows = dreRowsByAccounts(months, (account) => byPackage("Despesas Tributárias")(account));
  const financeRows = dreRowsByAccounts(months, (account) => byPackage("Despesas Financeiras")(account));
  const incomeTaxRows = dreRowsByAccounts(months, (account) => byDre("(-) IR/CSLL")(account));
  const grossRevenue = dreSum(revenueRows, months);
  const taxes = dreSum(taxRows, months);
  const netRevenue = grossRevenue.map((value, index) => value + taxes[index]);
  const costs = dreSum(costRows, months);
  const costPercent = costs.map((value, index) => (grossRevenue[index] ?(value / grossRevenue[index]) * 100 : 0));
  const operatingExpenseSections = [commercialRows, peopleRows, infraRows, techRows, generalRows, taxExpenseRows, financeRows];
  const operatingExpenses = dreSum(operatingExpenseSections.flat(), months);
  const incomeTaxes = dreSum(incomeTaxRows, months);
  const netProfit = months.map((_, index) => netRevenue[index] + costs[index] + operatingExpenses[index] + incomeTaxes[index]);
  const profitPercent = netProfit.map((value, index) => (grossRevenue[index] ?(value / grossRevenue[index]) * 100 : 0));
  return [
    dreGroupRow("(+) Faturamento Bruto", revenueRows, months),
    ...revenueRows,
    dreGroupRow("(-) Impostos sob Venda", taxRows, months),
    ...taxRows,
    { kind: "group", code: "", label: "(=) Faturamento Líquido", values: netRevenue },
    dreGroupRow("(-) Custos", costRows, months),
    ...costRows,
    { kind: "percent", code: "", label: "% Custos sobre Faturamento", values: costPercent },
    { kind: "group", code: "", label: "(-) Despesas Operacionais", values: operatingExpenses },
    { kind: "group", code: "", label: "Despesas Comerciais", values: dreSum(commercialRows, months) },
    ...commercialRows,
    { kind: "group", code: "", label: "Despesas com Pessoal", values: dreSum(peopleRows, months) },
    ...peopleRows,
    { kind: "group", code: "", label: "Despesas com Infraestrutura", values: dreSum(infraRows, months) },
    ...infraRows,
    { kind: "group", code: "", label: "Despesas com Tecnologia", values: dreSum(techRows, months) },
    ...techRows,
    { kind: "group", code: "", label: "Despesas Gerais", values: dreSum(generalRows, months) },
    ...generalRows,
    { kind: "group", code: "", label: "Despesas Tributárias", values: dreSum(taxExpenseRows, months) },
    ...taxExpenseRows,
    { kind: "group", code: "", label: "Despesas Financeiras", values: dreSum(financeRows, months) },
    ...financeRows,
    { kind: "group", code: "", label: "(-) Imposto de Renda", values: incomeTaxes },
    ...incomeTaxRows,
    { kind: "group", code: "", label: "(=) Lucro Líquido", values: netProfit },
    { kind: "percent", code: "", label: "% Lucro", values: profitPercent },
  ];
}

function dreCell(value, row, month) {
  if (row.kind === "percent") {
    const rounded = Math.round(value);
    const text = rounded === 0 ?"-" : `${rounded}%`;
    return `<td class="${rounded < 0 ?"negative percent-cell" : "positive percent-cell"}">${text}</td>`;
  }
  return cashFlowCell(value, row, month);
}

function renderDre() {
  const head = document.querySelector("#dreHead");
  const table = document.querySelector("#dreTable");
  const summary = document.querySelector("#dreSummary");
  if (!head || !table || !summary) return;
  const months = dreMonths();
  const rows = buildDreRows(months);
  const grossRevenue = rows.find((row) => row.label === "(+) Faturamento Bruto")?.values.reduce((sum, value) => sum + value, 0) ?? 0;
  const netProfit = rows.find((row) => row.label === "(=) Lucro Líquido")?.values.reduce((sum, value) => sum + value, 0) ?? 0;
  const margin = grossRevenue ?Math.round((netProfit / grossRevenue) * 100) : 0;
  summary.innerHTML = `
    <article class="metric"><span>Faturamento bruto</span><strong>${currency(grossRevenue)}</strong><small>por competência</small></article>
    <article class="metric"><span>Lucro líquido</span><strong>${currency(netProfit)}</strong><small>resultado acumulado</small></article>
    <article class="metric"><span>Margem líquida</span><strong>${margin}%</strong><small>DRE por competência</small></article>
  `;
  head.innerHTML = `
    <tr>
      <th>COD.</th>
      <th>DESCRIÇÃO DRE</th>
      ${months.map((month) => `<th>${month.label}</th>`).join("")}
    </tr>
  `;
  table.innerHTML = rows
    .map(
      (row) => `
        <tr class="${row.kind === "group" ?"cashflow-group-row" : row.kind === "percent" ?"dre-percent-row" : ""}">
          <td>${row.code ?? ""}</td>
          <td>${row.label}</td>
          ${row.values.map((value, index) => dreCell(value, row, months[index])).join("")}
        </tr>
      `,
    )
    .join("");
}

let cashFlowViewMode = "chart";

// Months covered by the top date-range filter; default = last 6 months ending today
function cashFlowPeriodMonths() {
  const from = document.querySelector("#cashFlowDateFrom")?.value || "";
  const to = document.querySelector("#cashFlowDateTo")?.value || "";
  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const today = parseLocalDate(demoToday);
  // Default view is the full current year (Jan–Dec), not a rolling 6-month window.
  const end = to ? parseLocalDate(to) : new Date(today.getFullYear(), 11, 31);
  const start = from ? parseLocalDate(from) : new Date(today.getFullYear(), 0, 1);
  const months = [];
  let year = start.getFullYear();
  let month = start.getMonth();
  while ((year < end.getFullYear() || (year === end.getFullYear() && month <= end.getMonth())) && months.length < 24) {
    months.push({ key: `${year}-${String(month + 1).padStart(2, "0")}`, label: `${labels[month]}/${String(year).slice(2)}` });
    month += 1;
    if (month > 11) { month = 0; year += 1; }
  }
  return months;
}

// Cash-basis view of every title: paid items by payment date, open items by expected date
function cashFlowCashItems() {
  return state.accounts
    .filter((item) => item.origin !== "Importação OFX" && item.origin !== "ImportaÃ§Ã£o OFX")
    .filter((item) => item.status !== "Cancelado")
    // Paid items are placed by their actual payment date; open items fall back to the expected
    // date so they still show up in the chart, but flagged so the bar renders them as pending.
    .map((item) => ({ item, date: item.paidDate || accountExpectedDate(item) || "", paid: !!item.paidDate }))
    .filter((entry) => entry.date);
}

// Classifies an account by its DFC activity group (Operacional/Investimento/Financiamento),
// falling back to Operacional when the chart account has no explicit activity set.
function accountActivityGroup(item) {
  return state.chartAccounts.find((c) => c.id === item.chartAccountId)?.activity || "Operacional";
}

let cashFlowActivityFilter = "all";

const CASHFLOW_ACTIVITY_ORDER = ["Operacional", "Investimento", "Financiamento"];
const CASHFLOW_ACTIVITY_COLORS = {
  Operacional: { in: "#16a34a", out: "#c0503f" },
  Investimento: { in: "#0891b2", out: "#d97706" },
  Financiamento: { in: "#2454CC", out: "#7c3aed" },
};
function cashFlowActivityKey(activity) {
  return CASHFLOW_ACTIVITY_ORDER.includes(activity) ? activity : "Operacional";
}

// Keeps the year dropdown in sync with whatever date range is active (defaults to the current year)
function populateCashFlowYearFilter() {
  const select = document.querySelector("#cashFlowYearFilter");
  if (!select) return;
  const years = new Set([Number(demoToday.slice(0, 4))]);
  state.accounts.forEach((a) => {
    const y = Number((a.competenceDate || a.forecastDate || "").slice(0, 4));
    if (y) years.add(y);
  });
  const sorted = [...years].sort((a, b) => a - b);
  const from = document.querySelector("#cashFlowDateFrom")?.value || "";
  const selectedYear = from ? Number(from.slice(0, 4)) : Number(demoToday.slice(0, 4));
  const options = sorted.map((y) => `<option value="${y}" ${y === selectedYear ? "selected" : ""}>${y}</option>`).join("");
  if (select.innerHTML !== options) select.innerHTML = options;
}

function renderCashFlowOverview() {
  const cards = document.querySelector("#cashFlowCards");
  const chart = document.querySelector("#cashFlowChart");
  if (!cards || !chart) return;
  populateCashFlowYearFilter();
  const from = document.querySelector("#cashFlowDateFrom")?.value || "";
  const to = document.querySelector("#cashFlowDateTo")?.value || "";
  const months = cashFlowPeriodMonths();
  const emptyActivityTotals = () => Object.fromEntries(
    CASHFLOW_ACTIVITY_ORDER.map((act) => [act, { inflowPaid: 0, inflowPending: 0, outflowPaid: 0, outflowPending: 0 }])
  );
  const buckets = months.map((m) => ({ ...m, byActivity: emptyActivityTotals() }));
  const byKey = Object.fromEntries(buckets.map((b) => [b.key, b]));
  const entries = cashFlowCashItems().filter(
    ({ item }) => cashFlowActivityFilter === "all" || accountActivityGroup(item) === cashFlowActivityFilter
  );
  entries.forEach(({ item, date, paid }) => {
    if (from && date < from) return;
    if (to && date > to) return;
    const bucket = byKey[date.slice(0, 7)];
    if (!bucket) return;
    const value = Number(accountOriginalAmount(item)) || 0;
    const activityTotals = bucket.byActivity[cashFlowActivityKey(accountActivityGroup(item))];
    if (item.direction === "Receber") activityTotals[paid ? "inflowPaid" : "inflowPending"] += value;
    else activityTotals[paid ? "outflowPaid" : "outflowPending"] += value;
  });
  buckets.forEach((b) => {
    b.inflow = 0; b.outflow = 0;
    CASHFLOW_ACTIVITY_ORDER.forEach((act) => {
      const a = b.byActivity[act];
      b.inflow += a.inflowPaid + a.inflowPending;
      b.outflow += a.outflowPaid + a.outflowPending;
    });
  });

  const totalIn = buckets.reduce((sum, b) => sum + b.inflow, 0);
  const totalOut = buckets.reduce((sum, b) => sum + b.outflow, 0);
  const saldo = totalIn - totalOut;

  cards.innerHTML = `
    <article class="cashflow-card cashflow-card--in">
      <span class="cashflow-card-dot"></span>
      <div><span class="cashflow-card-label">Entradas</span><strong>${currency(totalIn)}</strong><small>dinheiro que entrou</small></div>
    </article>
    <article class="cashflow-card cashflow-card--out">
      <span class="cashflow-card-dot"></span>
      <div><span class="cashflow-card-label">Saídas</span><strong>${currency(totalOut)}</strong><small>dinheiro que saiu</small></div>
    </article>
    <article class="cashflow-card cashflow-card--saldo">
      <span class="cashflow-card-dot"></span>
      <div><span class="cashflow-card-label">Saldo</span><strong>${currency(saldo)}</strong><small>o que sobrou no período</small></div>
    </article>
  `;

  // Grouped bar chart (SVG)
  const W = 760, H = 180, pT = 22, pB = 22, pL = 8, pR = 8;
  const iH = H - pT - pB;
  const maxV = Math.max(...buckets.flatMap((b) => [b.inflow, b.outflow]), 1);
  const slot = (W - pL - pR) / buckets.length;
  const barW = Math.min(26, slot * 0.28);
  const currentKey = demoToday.slice(0, 7);
  const fmtBar = (v) => (v >= 1000
    ? `${(v / 1000).toLocaleString("pt-BR", { maximumFractionDigits: v >= 100000 ? 0 : 1 })} mil`
    : Math.round(v).toLocaleString("pt-BR"));
  // Each bar stacks one segment per activity (Operacional/Investimento/Financiamento), each with
  // its own hue; within an activity, solid = already paid, translucent = still pending.
  const bars = buckets.map((b, i) => {
    const cx = pL + slot * i + slot / 2;
    const cxIn = cx - 2 - barW / 2;
    const cxOut = cx + 2 + barW / 2;
    const xIn = cx - barW - 2, xOut = cx + 2;
    let cumIn = 0, cumOut = 0;
    const segments = [];
    CASHFLOW_ACTIVITY_ORDER.forEach((act) => {
      const a = b.byActivity[act];
      const colors = CASHFLOW_ACTIVITY_COLORS[act];
      const hInPaid = (a.inflowPaid / maxV) * iH;
      const hInPending = (a.inflowPending / maxV) * iH;
      if (hInPending > 0) segments.push(`<rect x="${xIn}" y="${pT + iH - cumIn - hInPaid - hInPending}" width="${barW}" height="${hInPending}" fill="${colors.in}" opacity="0.35"><title>${b.label} · ${act} previsto a entrar: ${currency(a.inflowPending)}</title></rect>`);
      if (hInPaid > 0) segments.push(`<rect x="${xIn}" y="${pT + iH - cumIn - hInPaid}" width="${barW}" height="${hInPaid}" fill="${colors.in}"><title>${b.label} · ${act} recebido: ${currency(a.inflowPaid)}</title></rect>`);
      cumIn += hInPaid + hInPending;

      const hOutPaid = (a.outflowPaid / maxV) * iH;
      const hOutPending = (a.outflowPending / maxV) * iH;
      if (hOutPending > 0) segments.push(`<rect x="${xOut}" y="${pT + iH - cumOut - hOutPaid - hOutPending}" width="${barW}" height="${hOutPending}" fill="${colors.out}" opacity="0.35"><title>${b.label} · ${act} previsto a sair: ${currency(a.outflowPending)}</title></rect>`);
      if (hOutPaid > 0) segments.push(`<rect x="${xOut}" y="${pT + iH - cumOut - hOutPaid}" width="${barW}" height="${hOutPaid}" fill="${colors.out}"><title>${b.label} · ${act} pago: ${currency(a.outflowPaid)}</title></rect>`);
      cumOut += hOutPaid + hOutPending;
    });
    let yLabelIn = pT + iH - cumIn - 6;
    const yLabelOut = pT + iH - cumOut - 6;
    // Bars with similar heights: raise the inflow label so the two values don't collide
    if (b.inflow > 0 && b.outflow > 0 && Math.abs(yLabelIn - yLabelOut) < 12) yLabelIn = yLabelOut - 12;
    return `
      ${segments.join("")}
      ${b.inflow > 0 ? `<text x="${cxIn}" y="${yLabelIn}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">${fmtBar(b.inflow)}</text>` : ""}
      ${b.outflow > 0 ? `<text x="${cxOut}" y="${yLabelOut}" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b03a2a">${fmtBar(b.outflow)}</text>` : ""}
      <text x="${cx}" y="${H - 8}" text-anchor="middle" font-size="11" fill="#64748b" ${b.key === currentKey ? 'font-weight="700"' : ""}>${b.label}</text>
    `;
  }).join("");
  chart.innerHTML = `<svg viewBox="0 0 ${W} ${H}" class="cashflow-chart-svg" role="img" aria-label="Entradas e saídas por mês">
    <line x1="${pL}" y1="${pT + iH}" x2="${W - pR}" y2="${pT + iH}" stroke="#e2e8f0" />
    ${bars}
  </svg>`;

  const activityLegend = document.querySelector("#cashFlowActivityLegend");
  if (activityLegend) {
    activityLegend.innerHTML = CASHFLOW_ACTIVITY_ORDER.map((act) => {
      const colors = CASHFLOW_ACTIVITY_COLORS[act];
      return `<span class="cashflow-activity-swatch" style="background:linear-gradient(90deg, ${colors.in} 50%, ${colors.out} 50%)"></span> ${act}`;
    }).join("  ");
  }

  // Insight
  const insight = document.querySelector("#cashFlowInsight");
  if (insight) {
    if (saldo >= 0) {
      insight.className = "cashflow-insight-card";
      insight.innerHTML = `<span class="cashflow-insight-icon cashflow-insight-icon--ok">✓</span>
        <div><strong>Seu studio está no azul</strong>
        <p>Você recebeu mais do que gastou no período. Sobrou ${currency(saldo)} — continue assim.</p></div>`;
    } else {
      insight.className = "cashflow-insight-card cashflow-insight-card--negative";
      insight.innerHTML = `<span class="cashflow-insight-icon cashflow-insight-icon--warn">!</span>
        <div><strong>Atenção: saídas maiores que as entradas</strong>
        <p>No período, saiu ${currency(Math.abs(saldo))} a mais do que entrou. Vale revisar os maiores gastos ao lado.</p></div>`;
    }
  }

  // Top expenses of the current month
  const expensesEl = document.querySelector("#cashFlowTopExpenses");
  if (expensesEl) {
    const grouped = {};
    entries.forEach(({ item, date }) => {
      if (item.direction !== "Pagar" || date.slice(0, 7) !== currentKey) return;
      const key = chartAccountName(item.chartAccountId) || "Sem classificação";
      grouped[key] = (grouped[key] || 0) + (Number(accountOriginalAmount(item)) || 0);
    });
    const top = Object.entries(grouped).sort((a, b) => b[1] - a[1]).slice(0, 3);
    expensesEl.innerHTML = `<strong class="cashflow-expenses-title">Maiores gastos do mês</strong>
      ${top.length
        ? top.map(([name, value]) => `<div class="cashflow-expense-row"><span>${name.replace(/^[\d.]+ - /, "")}</span><b>${currency(value)}</b></div>`).join("")
        : '<p class="cashflow-expense-empty">Sem gastos lançados neste mês.</p>'}`;
  }
}

function renderCashFlow() {
  renderCashFlowOverview();
  const chartPanel = document.querySelector("#cashFlowChartPanel");
  const tablePanel = document.querySelector("#cashFlowTablePanel");
  const toggleBtn = document.querySelector("#cashFlowToggleView");
  if (chartPanel) chartPanel.hidden = cashFlowViewMode !== "chart";
  if (tablePanel) tablePanel.hidden = cashFlowViewMode !== "table";
  if (toggleBtn) toggleBtn.textContent = cashFlowViewMode === "chart" ? "Ver em tabela" : "Ver em gráficos";
  const table = document.querySelector("#cashFlowTable");
  const head = document.querySelector("#cashFlowHead");
  if (!table || !head) return;
  const months = cashFlowMonths();
  const rows = buildCashFlowRows(months);
  head.innerHTML = `
    <tr>
      <th>COD.</th>
      <th>DESCRIÇÃO DRE</th>
      ${months.map((month) => `<th>${month.label}</th>`).join("")}
    </tr>
  `;
  table.innerHTML = rows
    .map(
      (row) => `
        <tr class="${row.kind === "group" ?"cashflow-group-row" : row.kind === "subtotal" ?"cashflow-subtotal-row" : row.kind === "balance" ?"cashflow-balance-row" : ""}">
          <td>${row.code ?? ""}</td>
          <td>${row.label}</td>
          ${row.values.map((value, index) => cashFlowCell(value, row, months[index])).join("")}
        </tr>
      `,
    )
    .join("");
}

function renderChartAccounts() {
  const table = document.querySelector("#chartAccountsTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#chartAccountSearch")?.value.trim() ?? "");
  const rows = sortChartAccountsByCode(
    state.chartAccounts.filter((item) => !term || normalizedText(`${item.code} ${item.name} ${item.activity} ${item.dfcGroup ?? ""} ${item.dreGroup ?? ""} ${item.package ?? ""}`).includes(term)),
  );
  table.innerHTML = rows.length
    ?rows
        .map(
          (item) => `
            <tr>
              <td><strong>${item.code}</strong></td>
              <td>${item.name}</td>
              <td>${item.dreGroup ?? "-"}</td>
              <td>${item.dfcGroup ?? `Atividades ${item.activity}`}</td>
              <td>${item.nature}</td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-chart-account="${item.id}" type="button" title="Editar conta" aria-label="Editar conta"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button class="row-action-button delete-icon-button" data-delete-chart-account="${item.id}" type="button" title="Excluir conta" aria-label="Excluir conta"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
              </td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="7"><div class="empty-state">Nenhuma conta contábil encontrada.</div></td></tr>`;
}

function openChartAccountModal(chartAccountId = null) {
  editingChartAccountId = chartAccountId;
  const item = chartAccountId ? state.chartAccounts.find((account) => account.id === chartAccountId) : null;
  openModal("chartAccount", item ?? {});
}

function openEnrollmentModal(enrollmentId = null) {
  editingEnrollmentId = enrollmentId;
  const item = enrollmentId ? state.enrollments.find((enrollment) => enrollment.id === enrollmentId) : null;
  let modalValues = item ?? {};
  if (item?.planId) {
    const plan = state.plans.find((p) => p.id === item.planId);
    const weeklyFreq = plan ? weeklySessionsFromPlan(plan) : 0;
    if (weeklyFreq > 0) modalValues = { ...item, sessions: weeklyFreq };
  }
  openModal("enrollment", modalValues);
  document.querySelector("#modalTitle").textContent = enrollmentId ? "Editar matrícula" : "Nova matrícula";
}

function openAppointmentModal(appointmentId = null) {
  editingAppointmentId = appointmentId;
  const item = appointmentId ? state.appointments.find((appointment) => appointment.id === appointmentId) : null;
  let values = item ?? {};
  if (item && !item.studentId && item.leadId) {
    const lead = state.leads.find((l) => l.id === item.leadId);
    if (lead) values = { ...item, _leadDisplayName: lead.name };
  }
  openModal("appointment", values);
  document.querySelector("#modalTitle").textContent = appointmentId ? "Remarcar sessão" : "Agendar sessão";
}

let _apptActionId = null;

function openApptActionPanel(appointmentId) {
  const appt = state.appointments.find((a) => a.id === appointmentId);
  if (!appt) return;
  _apptActionId = appointmentId;
  document.querySelector("#apptActionName").textContent = appointmentPersonName(appt);
  document.querySelector("#apptActionInfo").textContent = `${dateLabel(appt.date)} · ${appt.time}${appt.endTime ? " - " + appt.endTime : ""} · ${professionalName(appt.teacherId)}`;
  // Highlight the button matching current status
  const statusMap = {
    "Visita realizada": "checkin",
    "Faltou": "missed",
    "Falta justificada": "missed-justified",
    "Experimental": "experimental",
  };
  const activeAction = appt.sessionKind === "Experimental" ? "experimental" : (statusMap[appt.status] || null);
  document.querySelectorAll("#apptActionMainGrid [data-appt-action]").forEach((btn) => {
    btn.classList.toggle("appt-action-btn--active", btn.dataset.apptAction === activeAction);
  });
  // Reset sub-panels
  document.querySelector("#apptJustifyPanel").hidden = true;
  document.querySelector("#apptTimePanel").hidden = true;
  document.querySelector("#apptProfPanel").hidden = true;
  document.querySelector("#apptActionMainGrid").hidden = false;
  document.querySelector("#apptJustifyReason").value = "";
  document.querySelector("#apptRescheduleFields").hidden = true;
  document.querySelectorAll(".appt-justify-tog").forEach((b) => b.classList.remove("appt-justify-tog--active"));
  document.querySelector("#apptActionOverlay").hidden = false;
}

function closeApptActionPanel() {
  document.querySelector("#apptActionOverlay").hidden = true;
  _apptActionId = null;
}

function openLeadModal(leadId = null) {
  editingLeadId = leadId;
  const item = leadId ? state.leads.find((lead) => lead.id === leadId) : null;
  openModal("lead", item ?? {});
  document.querySelector("#modalTitle").textContent = leadId ? "Editar lead" : "Novo lead";
}

function openSupplierModal(supplierId = null) {
  editingSupplierId = supplierId;
  const item = supplierId ? state.suppliers.find((supplier) => supplier.id === supplierId) : null;
  if (!item) return;
  openModal("supplier", {
    ...item,
    name: displayName(item.name),
    notes: item.notes || "",
  });
  document.querySelector("#modalTitle").textContent = "Editar fornecedor";
}

function openAccountModal(accountId = null, defaults = {}) {
  editingAccountId = accountId;
  const item = accountId ? state.accounts.find((account) => account.id === accountId) : null;
  openModal("account", item ? { ...item, competenceDate: (item.competenceDate || "").slice(0, 7) } : defaults);
  document.querySelector("#modalTitle").textContent = accountId ? "Editar título" : "Adicionar título";
}

function openAccountSettlementModal(accountId) {
  settlingAccountId = accountId;
  const item = state.accounts.find((account) => account.id === accountId);
  if (!item) return;
  openModal("accountSettlement", {
    paidDate: item.paidDate || demoToday,
    bankAccountId: item.bankAccountId || "itau",
    paidAmount: accountOpenAmount(item) || item.amount,
    notes: item.notes || "",
  });
  document.querySelector("#modalTitle").textContent = item.direction === "Receber" ? "Baixar conta a receber" : "Baixar conta a pagar";
}

function saveChartAccountModal(values) {
  const payload = normalizeChartAccount(values, state.chartAccounts.length);
  if (editingChartAccountId) {
    state.chartAccounts = state.chartAccounts.map((item) => (item.id === editingChartAccountId ? { ...item, ...payload, id: item.id } : item));
  } else {
    state.chartAccounts.push({ ...payload, id: uid("pc") });
  }
  editingChartAccountId = null;
}

function deleteAccount(accountId) {
  const item = state.accounts.find((account) => account.id === accountId);
  if (!item || !window.confirm(`Excluir o título ${item.description}?`)) return;
  if (item.linkedBankMovementId) {
    const movement = state.bankMovements.find((bankItem) => bankItem.id === item.linkedBankMovementId);
    if (movement) {
      movement.reconciliationStatus = "unreconciled";
      movement.linkedFinancialTitleId = "";
      movement.updatedAt = new Date().toISOString();
    }
  }
  rememberDeletedEntities("accounts", accountId);
  state.accounts = state.accounts.filter((account) => account.id !== accountId);
  saveDeletedState();
  render();
  toast("Título excluído.");
}

function deleteChartAccount(chartAccountId) {
  const item = state.chartAccounts.find((account) => account.id === chartAccountId);
  if (!item || !window.confirm(`Excluir a conta ${item.name}?`)) return;
  rememberDeletedEntities("chartAccounts", chartAccountId);
  state.chartAccounts = state.chartAccounts.filter((account) => account.id !== chartAccountId);
  state.accounts = state.accounts.map((account) => (account.chartAccountId === chartAccountId ? { ...account, chartAccountId: "" } : account));
  saveDeletedState();
  render();
  toast("Conta contábil excluída.");
}

function xlsxDateToIso(value) {
  if (!value) return "";
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  if (typeof value === "number") {
    return xlsxDateToIso(new Date(Math.round((value - 25569) * 86400 * 1000)));
  }
  if (typeof value === "string") {
    const parts = value.split("/");
    if (parts.length === 3) return `${parts[2]}-${parts[1].padStart(2,"0")}-${parts[0].padStart(2,"0")}`;
    return value.slice(0, 10);
  }
  return "";
}

function chartAccountByCode(code) {
  if (!code) return null;
  const str = String(code).trim();
  return state.chartAccounts.find((item) => item.code === str) || null;
}

function importAccountsFromXlsx(file, direction) {
  if (!window.XLSX) {
    toast("Biblioteca de leitura de planilha não carregada. Verifique sua conexão.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const wb = window.XLSX.read(e.target.result, { type: "array", cellDates: true });
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const rows = window.XLSX.utils.sheet_to_json(sheet, { defval: "" });

      const colMap = {
        competencia: ["Competência","Competencia","competencia","competência"],
        previsao:    ["Previsão","Previsao","previsao","previsão"],
        dataPagto:   ["Data Pagto","Data Pagamento","dataPagto","data_pagto","DataPagto"],
        fornecedor:  ["Fornecedor","fornecedor"],
        documento:   ["CPF/CNPJ","cpf_cnpj","documento","Documento"],
        valor:       ["Valor (R$)","Valor","valor","valor_rs"],
        descricao:   ["Descrição","Descricao","descricao","descrição"],
      };

      function col(row, key) {
        for (const name of colMap[key]) {
          if (row[name] !== undefined && row[name] !== "") return row[name];
        }
        return "";
      }

      let applied = 0;
      let notFound = 0;
      let skipped = 0;

      rows.forEach((row) => {
        const rawValor = parseFloat(String(col(row, "valor")).replace(",", ".")) || 0;
        const rowDirection = rawValor < 0 ? "Pagar" : "Receber";
        if (rowDirection !== direction) { skipped++; return; }

        const paidDate = xlsxDateToIso(col(row, "dataPagto"));
        if (!paidDate) { skipped++; return; }

        const amount         = Math.abs(rawValor);
        const competenceDate = xlsxDateToIso(col(row, "competencia"));
        const forecastDate   = xlsxDateToIso(col(row, "previsao"));
        const person         = normalizedText(String(col(row, "fornecedor")).trim());
        const documento      = String(col(row, "documento")).trim().replace(/\D/g, "");

        // Busca lançamento correspondente: mesma direção + valor + mês de competência ou previsão
        const candidates = state.accounts.filter((acc) => {
          if (acc.direction !== direction) return false;
          if (accountOpenAmount(acc) <= 0) return false;
          if (Math.abs(accountOriginalAmount(acc) - amount) > 0.01) return false;
          const accMonth = (acc.competenceDate || acc.forecastDate || "").slice(0, 7);
          const rowMonth = (competenceDate || forecastDate || "").slice(0, 7);
          if (accMonth && rowMonth && accMonth !== rowMonth) return false;
          return true;
        });

        // Refina por fornecedor/documento se houver mais de um candidato
        let match = candidates[0];
        if (candidates.length > 1) {
          const byDoc = documento ? candidates.find((acc) => (acc.document || "").replace(/\D/g, "") === documento) : null;
          const byPerson = person ? candidates.find((acc) => normalizedText(acc.person || supplierName(acc.supplierId) || "").includes(person)) : null;
          match = byDoc || byPerson || candidates[0];
        }

        if (!match) { notFound++; return; }

        match.paidDate             = paidDate;
        match.paidAmount           = amount;
        match.openAmount           = 0;
        match.reconciliationStatus = "manual";
        match.updatedAt            = new Date().toISOString();
        applied++;
      });

      saveState();
      render();
      const msg = [`${applied} baixa(s) aplicada(s).`];
      if (notFound) msg.push(`${notFound} linha(s) sem lançamento correspondente.`);
      if (skipped)  msg.push(`${skipped} linha(s) ignorada(s).`);
      toast(msg.join(" "));
    } catch (err) {
      toast("Erro ao ler a planilha: " + (err.message || "formato inválido."));
    }
  };
  reader.readAsArrayBuffer(file);
}

function processOfxFile() {
  const accountId = document.querySelector("#ofxBankAccountSelect")?.value || "";
  const file = document.querySelector("#ofxFileInput")?.files?.[0];
  if (!accountId) {
    toast("Selecione a conta/banco de origem.");
    return;
  }
  if (!file) {
    toast("Selecione um arquivo OFX.");
    return;
  }
  if (!/\.ofx$/i.test(file.name)) {
    toast("Arquivo inválido. Envie um arquivo com extensão .ofx.");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const transactions = parseOfxTransactions(reader.result);
    if (!transactions.length) {
      toast("Nenhuma transação encontrada no OFX.");
      return;
    }
    const batch = normalizeOfxBatch({
      id: uid("ofxb"),
      fileName: file.name,
      accountId,
      bankOrigin: bankAccountLabel(accountId),
      importedAt: new Date().toISOString(),
      status: "Em revisão",
      userId: currentUser()?.id || "",
    }, state.ofxBatches.length);
    const drafts = transactions.map((transaction) => createOfxDraft(transaction, batch));
    state.ofxBatches.push(batch);
    state.ofxDrafts = [...state.ofxDrafts.filter((item) => item.status === "Válido" || item.status === "A revisar" || item.status === "Duplicado" || item.status === "Ignorado"), ...drafts];
    updateOfxBatchCounters(batch.id);
    saveState();
    render();
    toast(`${transactions.length} transações OFX processadas para revisão.`);
  };
  reader.readAsText(file);
}

function updateOfxDraftField(draftId, field, value) {
  const draft = state.ofxDrafts.find((item) => item.id === draftId);
  if (!draft) return;
  draft[field] = value;
  if (field === "chartAccountId") {
    const chart = state.chartAccounts.find((item) => item.id === value);
    draft.chartAccountCode = chart?.code || "";
  }
  if (draft.status !== "Duplicado" && draft.status !== "Ignorado") {
    draft.status = draft.chartAccountId ? "Válido" : "A revisar";
  }
  draft.updatedAt = new Date().toISOString();
  updateOfxBatchCounters(draft.importBatchId);
  saveState();
  renderOfxImport();
}

function confirmOfxDraft(draftId, options = {}) {
  const draft = state.ofxDrafts.find((item) => item.id === draftId);
  if (!draft || draft.status === "Duplicado" || draft.status === "Ignorado") return false;
  if (!draft.chartAccountId) {
    if (!options.silent) toast("Selecione o plano de contas antes de confirmar.");
    return false;
  }
  if (officialAccountMatchesOfx(draft)) {
    draft.status = "Duplicado";
    draft.note = "Duplicado encontrado antes da aprovação.";
    return false;
  }
  state.bankMovements.push(normalizeBankMovement({
    id: uid("bm"),
    date: draft.paymentDate,
    description: draft.description,
    amount: Number(draft.signedAmount || draft.amount || 0),
    bankAccountId: draft.accountId,
    bankName: bankAccountLabel(draft.accountId),
    chartAccountId: draft.chartAccountId,
    origin: "Importação OFX",
    importBatchId: draft.importBatchId,
    ofxIdentifier: draft.ofxIdentifier,
    duplicateHash: draft.duplicateHash,
    reconciliationStatus: "unreconciled",
    linkedFinancialTitleId: "",
    notes: draft.note || "",
  }, state.bankMovements.length));
  draft.status = "Importado";
  draft.updatedAt = new Date().toISOString();
  return true;
}

function approveValidOfxDrafts() {
  const batch = currentOfxBatch();
  if (!batch) {
    toast("Nenhum lote OFX em revisão.");
    return;
  }
  const imported = state.ofxDrafts
    .filter((item) => item.importBatchId === batch.id && item.status === "Válido")
    .reduce((count, item) => count + (confirmOfxDraft(item.id, { silent: true }) ? 1 : 0), 0);
  updateOfxBatchCounters(batch.id);
  batch.status = "Concluído";
  saveState();
  render();
  toast(`${imported} movimentos OFX importados para conciliação.`);
}

function approveValidOfxDraftsToFinance() {
  const batch = currentOfxBatch();
  if (!batch) {
    toast("Nenhum lote OFX em revisão.");
    return;
  }
  const validDrafts = state.ofxDrafts.filter((item) => item.importBatchId === batch.id && isValidOfxDraftStatus(item.status));
  const imported = validDrafts.reduce((count, item) => {
    const confirmed = confirmOfxDraft(item.id, { silent: true });
    return count + (confirmed ? 1 : 0);
  }, 0);
  updateOfxBatchCounters(batch.id);
  if (imported > 0) {
    batch.status = "Concluído";
    resetBankReconciliationFilters();
  }
  saveState();
  render();
  if (imported > 0) {
    switchView("bankReconciliation");
    toast(`${imported} movimentos OFX importados para conciliação.`);
  } else {
    toast("Nenhum movimento válido para importar. Revise o plano de contas ou remova duplicados.");
  }
}

function ignoreOfxDraft(draftId) {
  const draft = state.ofxDrafts.find((item) => item.id === draftId);
  if (!draft) return;
  draft.status = "Ignorado";
  draft.note = "Ignorado manualmente.";
  draft.updatedAt = new Date().toISOString();
  updateOfxBatchCounters(draft.importBatchId);
  saveState();
  renderOfxImport();
}

function saveOfxRuleFromDraft(draftId) {
  const draft = state.ofxDrafts.find((item) => item.id === draftId);
  if (!draft || !draft.chartAccountId) {
    toast("Selecione o plano de contas antes de salvar a regra.");
    return;
  }
  const keyword = window.prompt("Palavra-chave para nova regra OFX:", draft.description.split(/\s+/).slice(0, 3).join(" "));
  if (!keyword) return;
  const chart = state.chartAccounts.find((item) => item.id === draft.chartAccountId);
  state.ofxRules.push(normalizeOfxRule({
    id: uid("ofxr"),
    keyword,
    chartAccountId: draft.chartAccountId,
    chartAccountCode: chart?.code || "",
    type: draft.type,
    bankAccountId: draft.accountId,
    priority: 100,
    active: true,
  }, state.ofxRules.length));
  saveState();
  toast("Regra OFX salva.");
}

function clearOfxImport() {
  const batch = currentOfxBatch();
  if (!batch || !window.confirm("Limpar a importação OFX temporária atual?")) return;
  rememberDeletedEntities("ofxDrafts", state.ofxDrafts.filter((item) => item.importBatchId === batch.id).map((item) => item.id));
  rememberDeletedEntities("ofxBatches", batch.id);
  state.ofxDrafts = state.ofxDrafts.filter((item) => item.importBatchId !== batch.id);
  state.ofxBatches = state.ofxBatches.filter((item) => item.id !== batch.id);
  saveDeletedState();
  render();
  toast("Importação OFX temporária limpa.");
}

function deleteStudent(studentId) {
  const item = state.students.find((studentItem) => studentItem.id === studentId);
  if (!item || !window.confirm(`Excluir o cliente ${item.name}?`)) return;
  rememberDeletedEntities("students", studentId);
  rememberDeletedEntities("appointments", state.appointments.filter((appointment) => appointment.studentId === studentId).map((appointment) => appointment.id));
  rememberDeletedEntities("payments", state.payments.filter((payment) => payment.studentId === studentId).map((payment) => payment.id));
  rememberDeletedEntities("records", state.records.filter((record) => record.studentId === studentId).map((record) => record.id));
  state.students = state.students.filter((studentItem) => studentItem.id !== studentId);
  state.appointments = state.appointments.filter((appointment) => appointment.studentId !== studentId);
  state.payments = state.payments.filter((payment) => payment.studentId !== studentId);
  state.records = state.records.filter((record) => record.studentId !== studentId);
  saveDeletedState();
  render();
  toast("Cliente excluído.");
}

function deleteProfessional(professionalId) {
  const item = state.professionals.find((professionalItem) => professionalItem.id === professionalId);
  if (!item || !window.confirm(`Excluir o profissional ${item.name}?`)) return;
  rememberDeletedEntities("professionals", professionalId);
  rememberDeletedEntities("appointments", state.appointments.filter((appointment) => appointment.teacherId === professionalId).map((appointment) => appointment.id));
  rememberDeletedEntities("blocks", (state.blocks ?? []).filter((block) => block.teacherId === professionalId).map((block) => block.id));
  state.professionals = state.professionals.filter((professionalItem) => professionalItem.id !== professionalId);
  state.appointments = state.appointments.filter((appointment) => appointment.teacherId !== professionalId);
  state.blocks = (state.blocks ?? []).filter((block) => block.teacherId !== professionalId);
  saveDeletedState();
  render();
  toast("Profissional excluído.");
}

function deleteSupplier(supplierId) {
  const item = state.suppliers.find((supplierItem) => supplierItem.id === supplierId);
  if (!item || !window.confirm(`Excluir o fornecedor ${item.name}?`)) return;
  rememberDeletedEntities("suppliers", supplierId);
  state.suppliers = state.suppliers.filter((supplierItem) => supplierItem.id !== supplierId);
  state.accounts = state.accounts.map((account) => (account.supplierId === supplierId ?{ ...account, supplierId: "" } : account));
  saveDeletedState();
  render();
  toast("Fornecedor excluído.");
}

function deleteModality(modalityId) {
  const item = state.modalities.find((modalityItem) => modalityItem.id === modalityId);
  if (!item || !window.confirm(`Excluir a modalidade ${item.name}?`)) return;
  rememberDeletedEntities("modalities", modalityId);
  state.modalities = state.modalities.filter((modalityItem) => modalityItem.id !== modalityId);
  state.plans = state.plans.map((plan) => (plan.modalityId === modalityId ?{ ...plan, modalityId: "" } : plan));
  saveDeletedState();
  render();
  toast("Modalidade excluída.");
}

function deletePlan(planId) {
  const item = state.plans.find((planItem) => planItem.id === planId);
  if (!item || !window.confirm(`Excluir o plano ${item.name}?`)) return;
  rememberDeletedEntities("plans", planId);
  state.plans = state.plans.filter((planItem) => planItem.id !== planId);
  saveDeletedState();
  render();
  toast("Plano excluído.");
}

function deleteEnrollment(enrollmentId) {
  const item = state.enrollments.find((enrollment) => enrollment.id === enrollmentId);
  if (!item || !window.confirm(`Excluir a matrícula de ${studentName(item.studentId)}?`)) return;
  rememberDeletedEntities("enrollments", enrollmentId);
  rememberDeletedEntities("appointments", state.appointments.filter((appointment) => appointment.enrollmentId === enrollmentId).map((appointment) => appointment.id));
  state.enrollments = state.enrollments.filter((enrollment) => enrollment.id !== enrollmentId);
  state.appointments = state.appointments.filter((appointment) => appointment.enrollmentId !== enrollmentId);
  saveDeletedState();
  render();
  toast("Matrícula excluída.");
}

function openProfessionalEditor(professionalId = null) {
  editingProfessionalId = professionalId;
  const item = professionalId ?state.professionals.find((professionalItem) => professionalItem.id === professionalId) : createEmptyProfessional();
  if (!item) return;
  fillProfessionalEditor(item);
  document.querySelector("#professionalEditorTitle").textContent = professionalId ?item.name : "Novo profissional";
  updateProfessionalSummary(item);
  setProfessionalTab("register");
  switchView("professionalEditor");
}

function createEmptyProfessional() {
  return {
    id: "",
    name: "",
    email: "",
    phone: "",
    status: "Ativo",
    maxPatients: 6,
    color: "#5e91b8",
    role: "Instrutor",
    document: "",
    notes: "",
    modalities: "",
    commission: "",
    hourValue: "",
    commissionNotes: "",
  };
}

function fillProfessionalEditor(item) {
  const form = document.querySelector("#professionalEditorForm");
  renderProfessionalModalityOptions(item.modalities);
  Object.entries(createEmptyProfessional()).forEach(([key, defaultValue]) => {
    if (form.elements[key]) form.elements[key].value = item[key] ?? defaultValue;
  });
}

function renderProfessionalModalityOptions(selectedValue = "") {
  const select = document.querySelector("[data-professional-modalities-select]");
  if (!select) return;
  const selected = String(selectedValue || "")
    .split(",")
    .map((value) => normalizedText(value.trim()))
    .filter(Boolean);
  select.innerHTML = activeModalities()
    .map((item) => {
      const selectedAttr = selected.includes(normalizedText(item.id)) || selected.includes(normalizedText(item.name)) ? "selected" : "";
      return `<option value="${item.id}" ${selectedAttr}>${displayName(item.name)}</option>`;
    })
    .join("");
}

function updateProfessionalSummary(item) {
  document.querySelector("#professionalSummaryName").textContent = displayName(item.name || "Novo profissional");
  document.querySelector("#professionalSummaryDocument").textContent = `CREFITO: ${item.document || "-"}`;
  document.querySelector("#professionalSummaryPhone").textContent = `Celular: ${item.phone || "-"}`;
}

function setProfessionalTab(tab) {
  document.querySelectorAll("[data-professional-tab]").forEach((button) => button.classList.toggle("active", button.dataset.professionalTab === tab));
  document.querySelectorAll("[data-professional-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.professionalPanel === tab));
}

function setSettingsTab(tab) {
  document.querySelectorAll("[data-settings-tab]").forEach((btn) => btn.classList.toggle("active", btn.dataset.settingsTab === tab));
  document.querySelectorAll("[data-settings-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.settingsPanel === tab));
  if (tab === "usuarios") renderAccessUsers();
  if (tab === "minha-conta") populateMyEmailField();
}

function renderLinkedEnrollments(professionalId) {
  const table = document.querySelector("#linkedEnrollmentsTable");
  if (!table) return;
  const rows = state.appointments
    .filter((appointment) => appointment.teacherId === professionalId)
    .map((appointment, index) => {
      const patient = student(appointment.studentId);
      return {
        name: patient?.name ?? "Cliente removido",
        date: appointment.date,
        amount: 190 + ((index % 5) * 75),
        payment: index % 3 === 0 ?"Trimestralidade" : "Mensalidade",
        modality: `${appointment.type.toUpperCase()} [${(index % 3) + 1}x]`,
      };
    });
  table.innerHTML = rows.length
    ?rows
        .map(
          (row) => `
            <tr>
              <td><button class="linked-edit-button edit-icon-button" type="button" title="Editar matrícula" aria-label="Editar matrícula"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button></td>
              <td>${row.name.toUpperCase()}</td>
              <td>${dateLabel(row.date)}</td>
              <td>${currency(row.amount)}</td>
              <td>${row.payment}</td>
              <td>${row.modality}</td>
              <td><span class="status-pill ativo">Ativo</span></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="7"><div class="empty-state">Nenhuma matrícula vinculada a este profissional.</div></td></tr>`;
}

function saveProfessionalEditor() {
  const form = document.querySelector("#professionalEditorForm");
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());
  values.modalities = formData.getAll("modalities").join(",");
  values.maxPatients = Number(values.maxPatients || 0);
  if (editingProfessionalId) {
    state.professionals = state.professionals.map((item) => (item.id === editingProfessionalId ?{ ...item, ...values } : item));
  } else {
    state.professionals.push({ ...createEmptyProfessional(), ...values, id: uid("t") });
  }
  saveState();
  renderProfessionalOptions();
  renderProfessionals();
  renderSchedule();
  switchView("professionals");
  toast("Cadastro do profissional salvo.");
}

function openPatientEditor(studentId = null) {
  editingStudentId = studentId;
  const patient = studentId ?state.students.find((item) => item.id === studentId) : createEmptyPatient();
  if (!patient) return;
  fillPatientEditor(patient);
  document.querySelector("#patientEditorTitle").textContent = studentId ?patient.name : "Novo paciente";
  setPatientTab("personal");
  switchView("patientEditor");
}

function createEmptyPatient() {
  return {
    id: "",
    linkedLeadId: "",
    name: "",
    email: "",
    phone: "",
    cpf: "",
    birthDate: "",
    gender: "Feminino",
    plan: "Mensal 2x semana",
    status: "Ativo",
    membership: "Matriculado",
    lastPresence: "",
    alternatePhone: "",
    zip: "",
    address: "",
    addressNumber: "",
    neighborhood: "",
    city: "",
    stateCode: "",
    profession: "",
    origin: "",
    registrationDate: demoToday,
    commercialNotes: "",
    clinicalGoal: "",
    restrictions: "",
    medication: "",
    height: "",
    weight: "",
    responsible: "",
    responsiblePhone: "",
    emergencyContact: "",
    emergencyPhone: "",
    notes: "",
  };
}

function fillPatientEditor(patient) {
  const form = document.querySelector("#patientEditorForm");
  renderPatientLeadOptions(patient.linkedLeadId);
  Object.entries(createEmptyPatient()).forEach(([key, defaultValue]) => {
    if (form.elements[key]) form.elements[key].value = patient[key] ?? defaultValue;
  });
  if (form.elements.gender) form.elements.gender.value = patient.gender === "M" ? "Masculino" : patient.gender === "F" ? "Feminino" : patient.gender || "Feminino";
  renderPatientEnrollmentHistory(patient.id);
}

function renderPatientEnrollmentHistory(studentId = "") {
  const table = document.querySelector("#patientEnrollmentHistoryTable");
  if (!table) return;
  if (!studentId) {
    table.innerHTML = `<tr><td colspan="10"><div class="empty-state">Histórico disponível após salvar o cliente.</div></td></tr>`;
    return;
  }
  const enrollments = state.enrollments
    .filter((item) => item.studentId === studentId)
    .sort((a, b) => String(a.startDate || "").localeCompare(String(b.startDate || "")));
  table.innerHTML = enrollments.length
    ? enrollments
        .map((item, index) => {
          const hasFinancial = state.accounts.some((account) => account.enrollmentId === item.id) || item.financialTitlesGenerated;
          const paymentSummary = enrollmentPaymentSummary(item.id);
          const financialLabel = paymentSummary.label === "Pago" ? paymentSummary.label : hasFinancial ? "Gerado" : "Pendente";
          const financialClass = paymentSummary.label === "Pago" ? paymentSummary.className : hasFinancial ? "ativo" : "pendente";
          return `
            <tr>
              <td><span class="status-pill ${index === 0 ? "pendente" : "ativo"}">${index === 0 ? "Matrícula" : "Renovação"}</span></td>
              <td><div class="patient-name"><strong>${displayName(planName(item.planId))}</strong><span>${planTypeLabel(item.planType || planById(item.planId)?.type)}</span></div></td>
              <td>${modalityName(item.modalityId) || "-"}</td>
              <td>${dateLabel(item.startDate)}</td>
              <td>${dateLabel(item.endDate)}</td>
              <td><strong>${currency(Number(item.monthlyValue || 0))}</strong></td>
              <td>${Number(item.discount || 0) > 0 ? `<span style="color:var(--danger,#e53)">${currency(Number(item.discount))}</span>` : "-"}</td>
              <td><strong>${currency(Math.max(0, Number(item.monthlyValue || 0) - Number(item.discount || 0)))}</strong></td>
              <td><span class="status-pill ${financialClass}">${financialLabel}</span></td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status || "-"}</span></td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="10"><div class="empty-state">Nenhuma matrícula vinculada ao cliente.</div></td></tr>`;
}

function savePatientEditor() {
  const form = document.querySelector("#patientEditorForm");
  const values = Object.fromEntries(new FormData(form).entries());
  if (values.linkedLeadId) {
    const lead = state.leads.find((item) => item.id === values.linkedLeadId);
    if (lead) {
      values.name ||= lead.name;
      values.email ||= lead.email;
      values.phone ||= lead.phone;
      values.origin ||= lead.origin;
      values.commercialNotes ||= lead.notes || lead.initialMessage || "";
      lead.status = "Matriculado";
    }
  }
  if (editingStudentId) {
    state.students = state.students.map((item) => (item.id === editingStudentId ? { ...item, ...values } : item));
  } else {
    state.students.push({ ...createEmptyPatient(), ...values, id: uid("s") });
  }
  saveState();
  renderStudents();
  switchView("students");
  toast("Cadastro do cliente salvo.");
}

function renderPatientLeadOptions(selectedValue = "") {
  const select = document.querySelector("[data-patient-lead-select]");
  if (!select) return;
  const options = state.leads
    .filter((lead) => !lead.linkedStudentId || lead.id === selectedValue)
    .map((lead) => `<option value="${lead.id}" ${lead.id === selectedValue ? "selected" : ""}>${displayName(lead.name)} · ${lead.status}</option>`)
    .join("");
  select.innerHTML = `<option value="">Sem lead vinculado</option>${options}`;
}

function setPatientTab(tab) {
  document.querySelectorAll("[data-patient-tab]").forEach((button) => button.classList.toggle("active", button.dataset.patientTab === tab));
  document.querySelectorAll("[data-patient-panel]").forEach((panel) => {
    const group = panel.dataset.patientPanel;
    const isPersonalGroup = tab === "personal" && ["personal", "contact", "responsibles"].includes(group);
    panel.classList.toggle("active", isPersonalGroup || group === tab);
  });
}

function renderFinance() {
  const list = state.payments.filter((item) => activePaymentFilter === "all" || item.status === activePaymentFilter);
  document.querySelector("#paymentList").innerHTML = list.length
    ?list
        .map(
          (item) => `
            <article class="payment-row">
              <div>
                <strong>${item.description}</strong>
                <div class="meta">${studentName(item.studentId)} · vence em ${dateLabel(item.dueDate)}</div>
              </div>
              <div>
                <strong>${currency(Number(item.amount))}</strong>
                <span class="status-pill ${statusClass(item.status)}">${item.status}</span>
              </div>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">Nenhuma cobrança neste filtro.</div>`;

  const paid = state.payments.filter((item) => item.status === "Pago").reduce((sum, item) => sum + Number(item.amount), 0);
  const pending = state.payments.filter((item) => item.status === "Pendente").reduce((sum, item) => sum + Number(item.amount), 0);
  const overdue = state.payments.filter((item) => item.status === "Atrasado").reduce((sum, item) => sum + Number(item.amount), 0);
  document.querySelector("#financeSummary").innerHTML = `
    <article class="summary-item"><span>Recebido</span><strong>${currency(paid)}</strong></article>
    <article class="summary-item"><span>Pendente</span><strong>${currency(pending)}</strong></article>
    <article class="summary-item"><span>Atrasado</span><strong>${currency(overdue)}</strong></article>
  `;
}

function renderRecords() {
  document.querySelector("#recordList").innerHTML = state.records.length
    ?state.records
        .map(
          (record) => `
            <article class="record-card">
              <header>
                <strong>${record.title}</strong>
                <span class="time-pill">${dateLabel(record.date)}</span>
              </header>
              <div class="meta">${studentName(record.studentId)}</div>
              <p>${record.note}</p>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">Nenhum registro clínico cadastrado.</div>`;

  const checkins = state.appointments.filter((item) => item.status === "Concluída" || item.status === "Visita realizada").sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`));
  const missed = state.appointments.filter((item) => item.status === "Faltou");
  const canceled = state.appointments.filter((item) => item.status === "Cancelada");
  const credits = state.students.reduce((sum, item) => sum + replacementBalance(item.id), 0);
  document.querySelector("#attendanceSummary").innerHTML = `
    <article class="summary-item"><span>Presencas</span><strong>${checkins.length}</strong></article>
    <article class="summary-item"><span>Faltas</span><strong>${missed.length}</strong></article>
    <article class="summary-item"><span>Cancelamentos</span><strong>${canceled.length}</strong></article>
    <article class="summary-item"><span>Créditos de reposição</span><strong>${credits}</strong></article>
  `;

  document.querySelector("#checkinList").innerHTML = checkins.length
    ?checkins
        .map(
          (item) => `
            <article class="checkin-row">
              <div>
                <strong>${studentName(item.studentId)}</strong>
                <div class="meta">${item.type} - ${dateLabel(item.date)} ${item.time}</div>
              </div>
              <span class="status-pill concluida">Presente</span>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">Os check-ins aparecem aqui quando aulas forem concluidas.</div>`;

  const attendanceRows = state.students
    .map((studentItem) => {
      const studentAppointments = state.appointments.filter((item) => item.studentId === studentItem.id);
      const studentMissed = studentAppointments.filter((item) => item.status === "Faltou").length;
      const studentCanceled = studentAppointments.filter((item) => item.status === "Cancelada").length;
      const lastPresence = studentAppointments
        .filter((item) => item.status === "Concluída" || item.status === "Visita realizada")
        .sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`))[0]?.date || studentItem.lastPresence || "";
      const creditBalance = replacementBalance(studentItem.id);
      const risk = studentMissed >= 2 || creditBalance >= 3 ? "Alto" : studentMissed || creditBalance ? "Médio" : "Baixo";
      return { studentItem, studentMissed, studentCanceled, lastPresence, creditBalance, risk };
    })
    .filter((row) => row.studentMissed || row.studentCanceled || row.creditBalance || row.risk !== "Baixo")
    .sort((a, b) => b.creditBalance - a.creditBalance || b.studentMissed - a.studentMissed);

  document.querySelector("#attendanceTable").innerHTML = attendanceRows.length
    ? attendanceRows.map((row) => `
      <tr>
        <td><strong>${row.studentItem.name.toUpperCase()}</strong></td>
        <td>${row.creditBalance}</td>
        <td>${row.studentMissed}</td>
        <td>${row.studentCanceled}</td>
        <td>${dateLabel(row.lastPresence)}</td>
        <td><span class="status-pill ${retentionRiskClass(row.risk)}">${row.risk}</span></td>
      </tr>
    `).join("")
    : `<tr><td colspan="6"><div class="empty-state">Nenhum crédito ou falta pendente.</div></td></tr>`;
}

function replacementBalance(studentId) {
  const credits = state.appointments.filter((item) => item.studentId === studentId && item.replacementCredit === true && item.status === "Cancelada").length;
  const used = state.appointments.filter((item) => item.studentId === studentId && item.replacementUsed === true).length;
  return Math.max(0, credits - used);
}

function retentionRiskClass(risk) {
  if (risk === "Alto") return "atrasado";
  if (risk === "Médio") return "pendente";
  return "ativo";
}

function renderSettings() {
  const form = document.querySelector("#settingsForm");
  if (!form) return;
  Object.entries(state.settings).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value;
  });
  renderAccessUsers();
}

function currentUser() {
  return authSession?.user || null;
}

function isAdminSession() {
  return currentUser()?.role === "Administrador";
}

function canAccessView(view) {
  if (!currentUser()) return false;
  if (isAdminSession()) return true;
  return ["dashboard", "agenda", "records"].includes(view);
}

function applyAuthSession() {
  const user = currentUser();
  document.body.classList.toggle("auth-locked", !user);
  document.body.classList.toggle("professional-session", Boolean(user && !isAdminSession()));
  document.querySelector("#loginScreen").hidden = Boolean(user);
  document.querySelector("#sessionChip").hidden = !user;
  const firstName = user?.name?.split(" ")[0] || "Usuário";
  document.querySelector("#sessionUserName").textContent = user?.name || "Usuário";
  const greetingEl = document.querySelector("#dashboardGreeting");
  if (greetingEl) greetingEl.textContent = user ? `Olá, ${firstName}` : "Olá!";
}

async function handleLogin(event) {
  event.preventDefault();
  const feedback = document.querySelector("#loginFeedback");
  feedback.textContent = "";

  try {
    const username = document.querySelector("#loginUsername").value.trim();
    const password = document.querySelector("#loginPassword").value;
    authSession = await window.PhysiofitData.login(username, password);
    document.querySelector("#loginPassword").value = "";
    applyAuthSession();
    const requestedView = pathToView[location.pathname] || "dashboard";
    switchView(canAccessView(requestedView) ? requestedView : "dashboard");
    toast(`Bem-vindo, ${currentUser().name}.`);
  } catch (error) {
    feedback.textContent = error.message || "Não foi possível entrar.";
  }
}

function showLoginPanel(panel) {
  document.querySelectorAll("[data-login-panel]").forEach((el) => {
    el.hidden = el.id !== `${panel}Form` && el.id !== `${panel}Form`.replace("Form", "Form");
  });
  // map panel name to form id
  const map = { login: "loginForm", forgot: "forgotForm", reset: "resetForm" };
  document.querySelectorAll("[data-login-panel]").forEach((el) => { el.hidden = true; });
  const target = document.querySelector(`#${map[panel] || "loginForm"}`);
  if (target) target.hidden = false;
  // clear feedbacks
  document.querySelectorAll(".login-feedback").forEach((el) => { el.textContent = ""; el.className = "login-feedback"; });
}

async function handleForgotPassword(event) {
  event.preventDefault();
  const feedback = document.querySelector("#forgotFeedback");
  const btn = document.querySelector("#forgotSubmitBtn");
  const email = document.querySelector("#forgotEmail").value.trim();
  feedback.textContent = "";
  feedback.className = "login-feedback";
  btn.disabled = true;
  btn.textContent = "Enviando...";
  try {
    const result = await window.PhysiofitData.forgotPassword(email);
    feedback.textContent = result.message || "Verifique seu e-mail.";
    feedback.className = "login-feedback success";
    document.querySelector("#forgotEmail").value = "";
  } catch (error) {
    feedback.textContent = error.message || "Não foi possível enviar. Tente novamente.";
  } finally {
    btn.disabled = false;
    btn.textContent = "Enviar link de redefinição";
  }
}

async function handleResetPassword(event) {
  event.preventDefault();
  const feedback = document.querySelector("#resetFeedback");
  const btn = document.querySelector("#resetSubmitBtn");
  const password = document.querySelector("#resetPassword").value;
  const confirm = document.querySelector("#resetPasswordConfirm").value;
  feedback.textContent = "";
  feedback.className = "login-feedback";
  if (password !== confirm) {
    feedback.textContent = "As senhas não coincidem.";
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  if (!token) { feedback.textContent = "Link inválido. Solicite um novo."; return; }
  btn.disabled = true;
  btn.textContent = "Salvando...";
  try {
    const result = await window.PhysiofitData.resetPassword(token, password);
    feedback.textContent = result.message || "Senha criada com sucesso!";
    feedback.className = "login-feedback success";
    document.querySelector("#resetPassword").value = "";
    document.querySelector("#resetPasswordConfirm").value = "";
    history.replaceState({}, "", window.location.pathname);
    setTimeout(() => {
      showLoginPanel("login");
      if (result.username) {
        const usernameField = document.querySelector("#loginUsername");
        if (usernameField) usernameField.value = result.username;
      }
    }, 2500);
  } catch (error) {
    feedback.textContent = error.message || "Não foi possível redefinir. Tente novamente.";
  } finally {
    btn.disabled = false;
    btn.textContent = "Salvar nova senha";
  }
}

function checkResetTokenInUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("action") === "reset" && params.get("token")) {
    // Always clear any existing session — invite/reset links must start fresh
    authSession = null;
    window.PhysiofitData?.setSession(null);
    applyAuthSession();
    showLoginPanel("reset");
  }
}

function logout() {
  authSession = null;
  window.PhysiofitData?.setSession(null);
  applyAuthSession();
}

function currentView() {
  return document.querySelector(".view.active")?.id?.replace(/View$/, "") || "dashboard";
}

async function renderAccessUsers() {
  const table = document.querySelector("#accessUsersTable");
  if (!table || !isAdminSession()) return;

  table.innerHTML = `<tr><td colspan="5"><div class="empty-state">Carregando usuários...</div></td></tr>`;

  try {
    const users = await window.PhysiofitData.listUsers();
    _cachedUsers = users;
    table.innerHTML = users.length
      ? users
          .map(
            (user) => `
              <tr>
                <td><div class="patient-name"><strong>${user.name}</strong><span>${user.username}${user.email ? ` · ${user.email}` : ""}</span></div></td>
                <td>${user.role}</td>
                <td><span class="status-pill ${statusClass(user.status)}">${user.status}</span></td>
                <td>${user.has_password ? "Configurada" : "Pendente"}</td>
                <td>
                  <div class="row-actions">
                    <button class="icon-action-btn edit-user-btn" data-edit-user="${user.id}" type="button" title="Editar usuário">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="icon-action-btn invite-btn" data-invite-user="${user.id}" data-invite-name="${user.name}" type="button" title="Enviar convite de acesso">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </button>
                    <button class="icon-action-btn key-btn" data-set-password="${user.id}" data-set-password-name="${user.name}" type="button" title="Definir senha">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><line x1="16" y1="8" x2="12" y2="12"/><line x1="20" y1="4" x2="16" y2="8"/><line x1="20" y1="4" x2="22" y2="6"/></svg>
                    </button>
                    <button class="icon-action-btn ${user.status === "Ativo" ? "block-btn" : "activate-btn"}" data-toggle-user="${user.id}" data-user-status="${user.status === "Ativo" ? "Inativo" : "Ativo"}" type="button" title="${user.status === "Ativo" ? "Bloquear usuário" : "Ativar usuário"}">
                      ${user.status === "Ativo"
                        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
                        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`}
                    </button>
                  </div>
                </td>
              </tr>
            `,
          )
          .join("")
      : `<tr><td colspan="5"><div class="empty-state">Nenhum usuário encontrado.</div></td></tr>`;
  } catch (error) {
    table.innerHTML = `<tr><td colspan="5"><div class="empty-state">${error.message}</div></td></tr>`;
  }
}

let _cachedUsers = [];
let _pendingPasswordUserId = null;

function setUserPassword(userId, userName) {
  _pendingPasswordUserId = userId;
  const overlay = document.querySelector("#passwordOverlay");
  const title = document.querySelector("#passwordOverlayTitle");
  const newPw = document.querySelector("#overlayNewPassword");
  const confirmPw = document.querySelector("#overlayConfirmPassword");
  const feedback = document.querySelector("#overlayPasswordFeedback");
  if (!overlay) return;
  title.textContent = userName || "Usuário";
  newPw.value = "";
  confirmPw.value = "";
  feedback.textContent = "";
  overlay.hidden = false;
  newPw.focus();
}

function closePasswordOverlay() {
  const overlay = document.querySelector("#passwordOverlay");
  if (overlay) overlay.hidden = true;
  _pendingPasswordUserId = null;
}

let _pendingEmailUserId = null;

function setUserEmail(userId, userName, currentEmail) {
  _pendingEmailUserId = userId;
  const overlay = document.querySelector("#emailOverlay");
  if (!overlay) return;
  document.querySelector("#emailOverlayTitle").textContent = userName || "Usuário";
  document.querySelector("#overlayEmail").value = currentEmail || "";
  document.querySelector("#overlayEmailFeedback").textContent = "";
  overlay.hidden = false;
  document.querySelector("#overlayEmail").focus();
}

function closeEmailOverlay() {
  const overlay = document.querySelector("#emailOverlay");
  if (overlay) overlay.hidden = true;
  _pendingEmailUserId = null;
}

let _editingUserId = null;

function openEditUserOverlay(userId) {
  const user = _cachedUsers.find((u) => u.id === userId);
  if (!user) return;
  _editingUserId = userId;
  document.querySelector("#editUserOverlayTitle").textContent = user.name;
  document.querySelector("#editUserName").value = user.name || "";
  document.querySelector("#editUserUsername").value = user.username || "";
  document.querySelector("#editUserEmail").value = user.email || "";
  document.querySelector("#editUserRole").value = user.role || "Profissional";
  document.querySelector("#editUserFeedback").textContent = "";
  document.querySelector("#editUserOverlay").hidden = false;
  document.querySelector("#editUserName").focus();
}

function closeEditUserOverlay() {
  document.querySelector("#editUserOverlay").hidden = true;
  _editingUserId = null;
}

async function inviteUser(userId, userName) {
  const overlay = document.querySelector("#inviteOverlay");
  if (!overlay) return;

  document.querySelector("#inviteOverlayTitle").textContent = userName || "Usuário";
  document.querySelector("#inviteOverlayStatus").textContent = "Gerando link...";
  document.querySelector("#inviteLinkInput").value = "";
  document.querySelector("#inviteWhatsappBtn").href = "#";
  overlay.hidden = false;

  try {
    const result = await window.PhysiofitData.inviteUser(userId);
    const link = result.link;

    document.querySelector("#inviteLinkInput").value = link;

    const statusMsg = result.sentByEmail
      ? `E-mail de convite enviado para ${result.email}`
      : result.email
      ? `Não foi possível enviar e-mail — use o link abaixo`
      : `Usuário sem e-mail cadastrado — compartilhe o link abaixo`;
    document.querySelector("#inviteOverlayStatus").textContent = statusMsg;

    const whatsappText = encodeURIComponent(
      `Olá, ${result.userName}! Acesse o Physiofit Studio e crie sua senha pelo link (válido 24h):\n${link}`
    );
    document.querySelector("#inviteWhatsappBtn").href = `https://wa.me/?text=${whatsappText}`;
  } catch (err) {
    document.querySelector("#inviteOverlayStatus").textContent = err.message || "Erro ao gerar convite.";
  }
}

function closeInviteOverlay() {
  const overlay = document.querySelector("#inviteOverlay");
  if (overlay) overlay.hidden = true;
}

async function toggleUserStatus(userId, status) {
  try {
    await window.PhysiofitData.updateUser(userId, { status });
    await renderAccessUsers();
    toast(status === "Ativo" ? "Usuário ativado." : "Usuário bloqueado.");
  } catch (error) {
    toast(error.message || "Não foi possível atualizar o usuário.");
  }
}

function switchView(view, { pushState = true } = {}) {
  if (!canAccessView(view)) {
    view = "dashboard";
    if (currentUser()) toast("Seu perfil não tem acesso a essa tela.");
  }
  if (view === "agenda" && window.innerWidth <= 720 && agendaMode === "week") {
    agendaMode = "day";
  }
  document.querySelectorAll(".view").forEach((element) => element.classList.remove("active"));
  document.querySelector(`#${view}View`).classList.add("active");
  openMenuGroup(menuGroupByView[view]);
  document.querySelectorAll(".nav-item, .top-menu-option, .top-menu-button").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(`.nav-item[data-view="${view}"], .top-menu-option[data-view="${view}"]`).forEach((item) => {
    if (!item.dataset.agendaModeTarget) item.classList.add("active");
  });
  const activeParent = document.querySelector(`[data-menu-wrapper="${menuGroupByView[view]}"] .nav-parent, [data-menu-wrapper="${menuGroupByView[view]}"] .top-menu-button`);
  activeParent?.classList.add("active");
  document.querySelectorAll("[data-agenda-mode-target]").forEach((button) => button.classList.toggle("active", view === "agenda" && button.dataset.agendaModeTarget === agendaMode));
  document.body.classList.remove("mobile-menu-open");
  document.querySelector("#viewTitle").textContent = viewTitles[view];
  if (pushState) {
    const path = viewPaths[view] || "/";
    if (location.pathname !== path) history.pushState({ view }, "", path);
  }
  const viewRenderFns = {
    dashboard: renderDashboard,
    crm: renderCrm,
    agenda: renderSchedule,
    students: renderStudents,
    enrollments: renderEnrollments,
    professionals: renderProfessionals,
    suppliers: renderSuppliers,
    modalities: renderModalities,
    plans: renderPlans,
    monthlyPayments: renderMonthlyPayments,
    fiscal: renderFiscalInvoices,
    contracts: renderContracts,
    accountsPayable: renderAccounts,
    accountsReceivable: renderAccounts,
    ofxImport: renderOfxImport,
    bankReconciliation: renderBankReconciliation,
    cashFlow: renderCashFlow,
    dre: renderDre,
    chartAccounts: renderChartAccounts,
    finance: renderFinance,
    records: renderRecords,
    settings: renderSettings,
  };
  viewRenderFns[view]?.();
}

function openMenuGroup(groupName) {
  document.querySelectorAll("[data-menu-wrapper]").forEach((wrapper) => {
    const hasPanel = Boolean(wrapper.querySelector(".top-menu-panel"));
    wrapper.classList.toggle("open", hasPanel && wrapper.dataset.menuWrapper === groupName);
  });
}

function setAgendaMode(mode) {
  agendaMode = mode;
  document.querySelectorAll("[data-agenda-mode-target]").forEach((button) => button.classList.toggle("active", button.dataset.agendaModeTarget === mode));
  renderSchedule();
}

function closeTopMenus() {
  document.querySelectorAll(".top-menu-group.open").forEach((group) => group.classList.remove("open"));
}

function openModal(type, values = {}) {
  const schema = modalSchemas[type];
  const backdrop = document.querySelector("#modalBackdrop");
  const form = document.querySelector("#modalForm");
  document.querySelector("#modalTitle").textContent = schema.title;
  form.dataset.type = type;
  const fields = schema.fields.map((field) => ({ ...field, value: values[field.name] ?? field.value, _leadDisplayName: field.name === "studentId" ? (values._leadDisplayName || "") : "" }));
  if (type === "student") {
    const dataFields = fields.filter((f) => !f.enroll && f.name !== "_henroll");
    const enrollFields = fields.filter((f) => f.enroll && f.name !== "_henroll");
    form.innerHTML = `
      <div class="modal-tabs">
        <button type="button" class="modal-tab active" data-modal-tab="data">Dados do cliente</button>
        <button type="button" class="modal-tab" data-modal-tab="enroll">Matrícula</button>
      </div>
      <div class="modal-tab-panel active" data-modal-tab-panel="data">${dataFields.map(renderField).join("")}</div>
      <div class="modal-tab-panel" data-modal-tab-panel="enroll">${enrollFields.map(renderField).join("")}</div>
      <button class="primary-button" type="submit">${schema.submit}</button>
    `;
    form.querySelectorAll(".modal-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        form.querySelectorAll(".modal-tab").forEach((b) => b.classList.remove("active"));
        form.querySelectorAll(".modal-tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        form.querySelector(`[data-modal-tab-panel="${btn.dataset.modalTab}"]`)?.classList.add("active");
      });
    });
  } else {
    form.innerHTML = [...fields.map(renderField), `<button class="primary-button" type="submit">${schema.submit}</button>`].join("");
  }
  if (type === "enrollment" || type === "student") {
    updateEnrollmentPlanOptions(form);
    applyEnrollmentPlanDefaults(form, false);
  }
  refreshPersonLookupList();
  refreshAccountChartOptions(!!editingAccountId);
  applyAccountPersonAutofill();
  backdrop.hidden = false;
  form.querySelector("input, select, textarea")?.focus();
}

// In-progress manual account entry, parked while the user registers a new supplier/client
let _pendingAccountModalValues = null;

// Plano de contas no modal de título: only accounts compatible with the direction (Pagar/Receber)
function refreshAccountChartOptions(keepIncompatible = false) {
  const form = document.querySelector("#modalForm");
  if (form.dataset.type !== "account") return;
  const select = form.querySelector("select[name='chartAccountId']");
  if (!select) return;
  const direction = form.querySelector("select[name='direction']")?.value || "Pagar";
  const previous = select.value;
  const options = chartAccountsForFinancialDirection(direction);
  select.innerHTML = options.map((item) => `<option value="${item.id}">${item.code} - ${item.name}</option>`).join("");
  if (previous && options.some((o) => o.id === previous)) {
    select.value = previous;
  } else if (keepIncompatible && previous) {
    // Editing a historical title whose chart account doesn't match the direction: keep it selectable
    const acc = state.chartAccounts.find((c) => c.id === previous);
    if (acc) {
      select.insertAdjacentHTML("afterbegin", `<option value="${acc.id}">${acc.code} - ${acc.name}</option>`);
      select.value = previous;
    }
  }
}

// Cliente/Fornecedor: fills CPF/CNPJ from the matching record; shows register button when unknown
function applyAccountPersonAutofill() {
  const form = document.querySelector("#modalForm");
  if (form.dataset.type !== "account") return;
  const personInput = form.querySelector("input[name='person']");
  const docInput = form.querySelector("input[name='document']");
  const registerBtn = form.querySelector("#accountPersonRegisterBtn");
  if (!personInput) return;
  const name = personInput.value.trim();
  const direction = form.querySelector("select[name='direction']")?.value || "Pagar";
  let match = null;
  if (name) {
    const wanted = normalizedText(name);
    match = direction === "Receber"
      ? state.students.find((s) => normalizedText(displayName(s.name)) === wanted)
      : state.suppliers.find((s) => normalizedText(displayName(s.name)) === wanted);
  }
  const matchDoc = match ? (match.document || match.cpf || "") : "";
  if (docInput && matchDoc) docInput.value = matchDoc;
  if (registerBtn) {
    registerBtn.hidden = !name || !!match;
    registerBtn.textContent = direction === "Receber" ? "+ Cadastrar cliente" : "+ Cadastrar fornecedor";
  }
}

// Cliente/Fornecedor datalist: suppliers for Pagar, clients for Receber
function refreshPersonLookupList() {
  const list = document.querySelector("#modalForm #personLookupList");
  if (!list) return;
  const direction = document.querySelector("#modalForm select[name='direction']")?.value || "Pagar";
  const names = direction === "Receber"
    ? state.students.map((s) => displayName(s.name))
    : activeSuppliers().map((s) => displayName(s.name));
  list.innerHTML = [...new Set(names.filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .map((name) => `<option value="${escapeHtml(name)}"></option>`)
    .join("");
}

function plansForModality(modalityId = "") {
  const plans = activePlans();
  if (!modalityId) return plans;
  return plans.filter((item) => item.modalityId === modalityId);
}

function updateEnrollmentPlanOptions(form) {
  if (!form || (form.dataset.type !== "enrollment" && form.dataset.type !== "student")) return;
  const planSelect = form.elements.planId;
  if (!planSelect) return;
  const modalityId = form.elements.modalityId?.value || "";
  const planType = form.elements.planType?.value || "";
  const selected = planSelect.value;
  let plans = plansForModality(modalityId);
  if (planType) plans = plans.filter((item) => planTypeLabel(item.type) === planTypeLabel(planType));
  const isOptionalPlan = planSelect.closest("form")?.dataset.type === "student";
  const emptyOpt = isOptionalPlan ? `<option value="">Sem plano</option>` : "";
  planSelect.innerHTML = plans.length
    ? emptyOpt + plans.map((item) => `<option value="${item.id}">${escapeHtml(displayName(item.name))}</option>`).join("")
    : `<option value="">Nenhum plano para este tipo</option>`;
  planSelect.value = plans.some((item) => item.id === selected) ? selected : (isOptionalPlan ? "" : plans[0]?.id || "");
}

function applyEnrollmentPlanDefaults(form, overwrite = true) {
  if (!form || (form.dataset.type !== "enrollment" && form.dataset.type !== "student")) return;
  const plan = state.plans.find((item) => item.id === form.elements.planId?.value);
  if (!plan) return;
  const setIfNeeded = (name, value) => {
    if (!form.elements[name]) return;
    if (overwrite || !form.elements[name].value) form.elements[name].value = value ?? "";
  };
  setIfNeeded("modalityId", plan.modalityId || "");
  setIfNeeded("planType", planTypeLabel(plan.type));
  setIfNeeded("monthlyValue", Number(plan.value || 0).toFixed(2));
  setIfNeeded("sessions", weeklySessionsFromPlan(plan));
  if (!form.elements.firstPaymentDate?.value) setIfNeeded("firstPaymentDate", form.elements.startDate?.value || demoToday);
  if (form.elements.startDate?.value) setIfNeeded("endDate", calculatedEnrollmentEndDate(form.elements.startDate.value, form.elements.planType?.value || plan.type));
}

function findStudentByLookup(value = "") {
  const term = normalizedText(value);
  if (!term) return null;
  return (
    state.students.find((item) => normalizedText(item.name) === term) ||
    state.students.find((item) => normalizedText(item.name).includes(term)) ||
    null
  );
}

function syncStudentLookup(input, allowPartial = false) {
  if (input.dataset.leadMode) { input.setCustomValidity(""); return true; }
  const form = input.closest("form");
  const hidden = form?.elements[input.dataset.studentTarget];
  const studentMatch = allowPartial ? findStudentByLookup(input.value) : state.students.find((item) => normalizedText(item.name) === normalizedText(input.value));
  if (hidden) hidden.value = studentMatch?.id || hidden.value || "";
  const isValid = Boolean(studentMatch) || Boolean(hidden?.value);
  input.setCustomValidity(isValid ? "" : "Selecione um cliente cadastrado.");
  return isValid;
}

function renderField(field) {
  const required = field.required === false ? "" : "required";
  const isSelected = (value) => String(value ?? "") === String(field.value ?? "") ? "selected" : "";
  const ec = field.enroll ? ' class="enroll-field"' : "";

  if (field.type === "student") {
    const selectedStudent = state.students.find((item) => item.id === field.value)
      || (field.value ? (seedData?.students ?? []).find((item) => item.id === field.value) : null);
    const existingId = selectedStudent?.id || field.value || "";
    const isLeadMode = !existingId && Boolean(field._leadDisplayName);
    const existingName = selectedStudent?.name || field._leadDisplayName || "";
    const leadAttr = isLeadMode ? ' data-lead-mode="true"' : "";
    const listId = `studentList-${field.name}`;
    return `
      <label class="student-lookup-field">${field.label}
        <input type="search" name="${field.name}Search" list="${listId}" value="${escapeHtml(existingName)}" data-student-search data-student-target="${field.name}" placeholder="Digite parte do nome do paciente" autocomplete="off" ${required}${leadAttr} />
        <input type="hidden" name="${field.name}" value="${escapeHtml(existingId)}" />
        <datalist id="${listId}">
          ${state.students.map((item) => `<option value="${escapeHtml(item.name)}" label="${escapeHtml([item.cpf, item.phone].filter(Boolean).join(" · "))}"></option>`).join("")}
        </datalist>
      </label>
    `;
  }
  if (field.type === "professional" || field.type === "professionalWithAll") {
    const options = [
      ...(field.type === "professionalWithAll" ? [{ id: "all", name: "Todos" }] : []),
      ...activeProfessionals(),
    ];
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
          ${options.map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "professionalOptional") {
    return `
      <label${ec}>${field.label}
        <select name="${field.name}" ${required}>
          <option value="" ${isSelected("")}>Sem profissional</option>
          ${activeProfessionals().map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "modality") {
    const options = activeModalities();
    return `
      <label${ec}>${field.label}
        <select name="${field.name}" ${required}>
          ${options.map((item) => `<option value="${item.name}" ${isSelected(item.name)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "modalityId") {
    const options = activeModalities();
    return `
      <label${ec}>${field.label}
        <select name="${field.name}" ${required}>
          <option value="" ${isSelected("")}>${required ? "" : "Sem modalidade"}</option>
          ${options.map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "chartAccount") {
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
          ${activeChartAccounts().map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.code} - ${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "revenueChartAccount") {
    const options = activeRevenueChartAccounts();
    return `
      <label>${field.label}
        <select name="${field.name}" ${required} data-revenue-chart-account-select>
          ${options.map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.code} - ${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "supplier") {
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
          <option value="" ${isSelected("")}>Sem fornecedor vinculado</option>
          ${activeSuppliers().map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "bankAccount") {
    const bankOptions = ["itau", "asaas", "caixa", "santander", "outro"];
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
          ${bankOptions.map((id) => `<option value="${id}" ${isSelected(id)}>${bankAccountLabel(id)}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "plan") {
    const options = activePlans();
    return `
      <label>${field.label}
        <select name="${field.name}" ${required} data-plan-select>
          ${options.map((item) => `<option ${isSelected(item.name)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "planId") {
    const emptyPlanOpt = field.required === false ? `<option value="" ${isSelected("")}>Sem plano</option>` : "";
    return `
      <label${ec}>${field.label}
        <select name="${field.name}" ${required}>
          ${emptyPlanOpt}
          ${activePlans().map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${escapeHtml(displayName(item.name))}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "roomOptional") {
    const options = [
      { value: "", label: "Sem sala" },
      { value: "Sala Reformer", label: "Sala Reformer" },
      { value: "Sala Cadillac", label: "Sala Cadillac" },
      { value: "Sala Clínica", label: "Sala Clínica" },
      { value: "Sala Solo", label: "Sala Solo" },
      { value: "Sala Funcional", label: "Sala Funcional" },
    ];
    return `
      <label${ec}>${field.label}
        <select name="${field.name}" ${required}>
          ${options.map((option) => `<option value="${option.value}" ${isSelected(option.value)}>${option.label}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "personLookup") {
    return `
      <label>${field.label}
        <input name="${field.name}" type="text" value="${escapeHtml(field.value ?? "")}" list="personLookupList" autocomplete="off" ${required} />
        <datalist id="personLookupList"></datalist>
        <button type="button" class="ghost-button account-person-register" id="accountPersonRegisterBtn" hidden>+ Cadastrar fornecedor</button>
      </label>
    `;
  }
  if (field.type === "heading") return `<p class="modal-section-heading${field.enroll ? " modal-section-heading--enroll" : ""}">${field.label}</p>`;
  if (field.type === "select") {
    return `
      <label${ec}>${field.label}
        <select name="${field.name}" ${required}>
          ${field.options.map((option) => `<option ${isSelected(option)}>${option}</option>`).join("")}
        </select>
      </label>
    `;
  }
  const enrollClass = field.enroll ? ' class="enroll-field"' : "";
  if (field.type === "currency") return `<label${enrollClass}>${field.label}<input name="${field.name}" type="text" inputmode="decimal" value="${formatBrAmount(field.value)}" data-currency-input ${required} /></label>`;
  if (field.type === "textarea") return `<label${enrollClass}>${field.label}<textarea name="${field.name}" rows="4" ${required}>${field.value ?? ""}</textarea></label>`;
  const extraAttrs = field.type === "number" ? ' step="any"' : "";
  return `<label${enrollClass}>${field.label}<input name="${field.name}" type="${field.type}" value="${field.value ?? ""}"${extraAttrs} ${required} /></label>`;
}

function closeModal() {
  editingModalityId = null;
  editingPlanId = null;
  editingSupplierId = null;
  editingChartAccountId = null;
  editingEnrollmentId = null;
  editingAppointmentId = null;
  editingLeadId = null;
  editingAccountId = null;
  settlingAccountId = null;
  _pendingEnrollLeadId = null;
  _pendingStudentLeadId = null;
  document.querySelector("#modalBackdrop").hidden = true;
  // Resume a parked manual account entry after registering (or cancelling) a supplier/client
  const closedType = document.querySelector("#modalForm").dataset.type;
  if (_pendingAccountModalValues && (closedType === "supplier" || closedType === "student")) {
    const pending = _pendingAccountModalValues;
    _pendingAccountModalValues = null;
    editingAccountId = pending._editingAccountId || null;
    delete pending._editingAccountId;
    openModal("account", pending);
    document.querySelector("#modalTitle").textContent = editingAccountId ? "Editar título" : "Adicionar título";
  }
}

function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("show");
  window.setTimeout(() => element.classList.remove("show"), 2400);
}

// Sidebar collapse — persiste em localStorage
(function () {
  if (localStorage.getItem("sidebarCollapsed") === "1") {
    document.body.classList.add("sidebar-collapsed");
  }
  document.getElementById("sidebarCollapseBtn")?.addEventListener("click", () => {
    const collapsed = document.body.classList.toggle("sidebar-collapsed");
    localStorage.setItem("sidebarCollapsed", collapsed ? "1" : "0");
  });
})();

document.addEventListener("click", (event) => {
  const leadMenuToggle = event.target.closest("[data-lead-menu-toggle]");
  if (leadMenuToggle) {
    toggleLeadActionMenu(leadMenuToggle.dataset.leadMenuToggle, leadMenuToggle);
    return;
  }
  closeLeadActionMenu();

  const mobileMenuToggle = event.target.closest("#mobileMenuToggle");
  if (mobileMenuToggle) {
    document.body.classList.toggle("mobile-menu-open");
    return;
  }

  const topMenuToggle = event.target.closest("[data-top-menu-toggle]");
  if (topMenuToggle) {
    if (document.body.classList.contains("sidebar-collapsed")) {
      document.body.classList.remove("sidebar-collapsed");
      localStorage.setItem("sidebarCollapsed", "0");
    }
    const group = topMenuToggle.closest(".top-menu-group");
    const willOpen = !group.classList.contains("open");
    closeTopMenus();
    group.classList.toggle("open", willOpen);
    return;
  }

  if (!event.target.closest(".top-menu-group") && document.body.classList.contains("mobile-menu-open")) closeTopMenus();

  const nav = event.target.closest("[data-view]");
  if (nav) switchView(nav.dataset.view);

  const sideMode = event.target.closest("[data-agenda-mode-target]");
  if (sideMode) setAgendaMode(sideMode.dataset.agendaModeTarget);

  const viewTarget = event.target.closest("[data-view-target]");
  if (viewTarget) switchView(viewTarget.dataset.viewTarget);

  const editStudentButton = event.target.closest("[data-edit-student]");
  if (editStudentButton) openPatientEditor(editStudentButton.dataset.editStudent);

  const editProfessionalButton = event.target.closest("[data-edit-professional]");
  if (editProfessionalButton) openProfessionalEditor(editProfessionalButton.dataset.editProfessional);

  const editModalityButton = event.target.closest("[data-edit-modality]");
  if (editModalityButton) openModalityEditor(editModalityButton.dataset.editModality);

  const editPlanButton = event.target.closest("[data-edit-plan]");
  if (editPlanButton) openPlanEditor(editPlanButton.dataset.editPlan);

  const editContractButton = event.target.closest("[data-edit-contract]");
  if (editContractButton) openContractModal(editContractButton.dataset.editContract);

  const editSupplierButton = event.target.closest("[data-edit-supplier]");
  if (editSupplierButton) openSupplierModal(editSupplierButton.dataset.editSupplier);

  const editEnrollmentButton = event.target.closest("[data-edit-enrollment]");
  if (editEnrollmentButton) openEnrollmentModal(editEnrollmentButton.dataset.editEnrollment);

  const editLeadButton = event.target.closest("[data-edit-lead]");
  if (editLeadButton) openLeadModal(editLeadButton.dataset.editLead);

  const editChartAccountButton = event.target.closest("[data-edit-chart-account]");
  if (editChartAccountButton) openChartAccountModal(editChartAccountButton.dataset.editChartAccount);

  const editAccountButton = event.target.closest("[data-edit-account]");
  if (editAccountButton) {
    const accountId = editAccountButton.dataset.editAccount;
    const account = state.accounts.find((item) => item.id === accountId);
    if (account?.paidDate) {
      toast("Título já baixado. Estorne a baixa para poder editá-lo.");
    } else {
      openAccountModal(accountId);
    }
  }

  const settleAccountButton = event.target.closest("[data-settle-account]");
  if (settleAccountButton) openAccountSettlementModal(settleAccountButton.dataset.settleAccount);

  const reverseAccountButton = event.target.closest("[data-reverse-account]");
  if (reverseAccountButton) {
    const accountId = reverseAccountButton.dataset.reverseAccount;
    const account = state.accounts.find((item) => item.id === accountId);
    if (account && confirm("Estornar a baixa desta conta? O pagamento será desfeito.")) {
      account.paidDate = "";
      account.paidAmount = 0;
      account.openAmount = account.amount;
      account.reconciliationStatus = "unreconciled";
      account.linkedBankMovementId = "";
      account.status = accountAutoStatus(account);
      saveState();
      render();
    }
  }

  const selectMovementRow = event.target.closest("[data-select-movement]");
  if (selectMovementRow && !event.target.closest("button")) {
    const id = selectMovementRow.dataset.selectMovement;
    const movement = state.bankMovements.find((m) => m.id === id);
    if (movement && movement.reconciliationStatus === "unreconciled") {
      selectedReconMovementId = selectedReconMovementId === id ? null : id;
      selectedReconTitleId = null;
      // Auto-set month filter to movement month
      const monthInput = document.querySelector("#bankReconciliationMonthFilter");
      if (monthInput && selectedReconMovementId && movement.date) {
        monthInput.value = movement.date.slice(0, 7);
      }
      renderBankReconciliation();
    }
  }

  const selectTitleRow = event.target.closest("[data-select-title]");
  if (selectTitleRow) {
    const id = selectTitleRow.dataset.selectTitle;
    selectedReconTitleId = selectedReconTitleId === id ? null : id;
    renderBankReconciliation();
  }

  const createTitleButton = event.target.closest("[data-create-title-from-movement]");
  if (createTitleButton) createTitleFromMovement(createTitleButton.dataset.createTitleFromMovement);

  const ignoreMovementButton = event.target.closest("[data-ignore-movement]");
  if (ignoreMovementButton) ignoreBankMovement(ignoreMovementButton.dataset.ignoreMovement);

  const deleteStudentButton = event.target.closest("[data-delete-student]");
  if (deleteStudentButton) deleteStudent(deleteStudentButton.dataset.deleteStudent);

  const deleteProfessionalButton = event.target.closest("[data-delete-professional]");
  if (deleteProfessionalButton) deleteProfessional(deleteProfessionalButton.dataset.deleteProfessional);

  const deleteContractButton = event.target.closest("[data-delete-contract]");
  if (deleteContractButton) deleteContract(deleteContractButton.dataset.deleteContract);

  const deleteSupplierButton = event.target.closest("[data-delete-supplier]");
  if (deleteSupplierButton) deleteSupplier(deleteSupplierButton.dataset.deleteSupplier);

  const deleteModalityButton = event.target.closest("[data-delete-modality]");
  if (deleteModalityButton) deleteModality(deleteModalityButton.dataset.deleteModality);

  const deletePlanButton = event.target.closest("[data-delete-plan]");
  if (deletePlanButton) deletePlan(deletePlanButton.dataset.deletePlan);

  const deleteEnrollmentButton = event.target.closest("[data-delete-enrollment]");
  if (deleteEnrollmentButton) deleteEnrollment(deleteEnrollmentButton.dataset.deleteEnrollment);

  const deleteAccountButton = event.target.closest("[data-delete-account]");
  if (deleteAccountButton) deleteAccount(deleteAccountButton.dataset.deleteAccount);

  const deleteChartAccountButton = event.target.closest("[data-delete-chart-account]");
  if (deleteChartAccountButton) deleteChartAccount(deleteChartAccountButton.dataset.deleteChartAccount);

  const scheduleLeadButton = event.target.closest("[data-schedule-lead]");
  if (scheduleLeadButton) openScheduleVisitOverlay(scheduleLeadButton.dataset.scheduleLead);

  const viewLeadChatButton = event.target.closest("[data-view-lead-chat]");
  if (viewLeadChatButton) openLeadConversation(viewLeadChatButton.dataset.viewLeadChat);

  const registerStudentLeadButton = event.target.closest("[data-register-student-lead]");
  if (registerStudentLeadButton) registerStudentFromLead(registerStudentLeadButton.dataset.registerStudentLead);

  const loseLeadButton = event.target.closest("[data-lose-lead]");
  if (loseLeadButton) {
    const lLead = state.leads.find((l) => l.id === loseLeadButton.dataset.loseLead);
    if (lLead?.status === "Perdido") { toast("Este lead já está marcado como perdido."); }
    else if (lLead?.status === "Matriculado") { toast("Lead já matriculado — não é possível marcá-lo como perdido."); }
    else openLoseLeadOverlay(loseLeadButton.dataset.loseLead);
  }

  const convertLeadButton = event.target.closest("[data-convert-lead]");
  if (convertLeadButton) {
    const cLead = state.leads.find((l) => l.id === convertLeadButton.dataset.convertLead);
    if (cLead?.status === "Matriculado") { toast("Este lead já está matriculado."); }
    else if (cLead?.status === "Perdido") { toast("Lead marcado como perdido — edite o status antes de matricular."); }
    else convertLead(convertLeadButton.dataset.convertLead);
  }

  const deleteLeadButton = event.target.closest("[data-delete-lead]");
  if (deleteLeadButton) deleteLead(deleteLeadButton.dataset.deleteLead);

  const setPasswordButton = event.target.closest("[data-set-password]");
  if (setPasswordButton) setUserPassword(setPasswordButton.dataset.setPassword, setPasswordButton.dataset.setPasswordName);

  const toggleUserButton = event.target.closest("[data-toggle-user]");
  if (toggleUserButton) toggleUserStatus(toggleUserButton.dataset.toggleUser, toggleUserButton.dataset.userStatus);

  const setEmailButton = event.target.closest("[data-set-email]");
  if (setEmailButton) setUserEmail(setEmailButton.dataset.setEmail, setEmailButton.dataset.setEmailName, setEmailButton.dataset.currentEmail);

  const editUserBtn = event.target.closest("[data-edit-user]");
  if (editUserBtn) openEditUserOverlay(editUserBtn.dataset.editUser);

  const inviteBtn = event.target.closest("[data-invite-user]");
  if (inviteBtn) inviteUser(inviteBtn.dataset.inviteUser, inviteBtn.dataset.inviteName);

  const importAccountsButton = event.target.closest("[data-import-accounts]");
  if (importAccountsButton) {
    const dir = importAccountsButton.dataset.importAccounts;
    const inputId = dir === "Pagar" ? "importAccountsPayableFile" : "importAccountsReceivableFile";
    document.querySelector(`#${inputId}`)?.click();
  }

  const printViewButton = event.target.closest("[data-print-view]");
  if (printViewButton) window.print();

  const exportAccountsButton = event.target.closest("[data-export-accounts]");
  if (exportAccountsButton) exportAccountsToXlsx(exportAccountsButton.dataset.exportAccounts);

  const issueInvoiceButton = event.target.closest("[data-issue-invoice]");
  if (issueInvoiceButton) issueFiscalInvoice(issueInvoiceButton.dataset.issueInvoice);

  const cancelInvoiceButton = event.target.closest("[data-cancel-invoice]");
  if (cancelInvoiceButton) cancelFiscalInvoice(cancelInvoiceButton.dataset.cancelInvoice);

  const confirmOfxButton = event.target.closest("[data-confirm-ofx-draft]");
  if (confirmOfxButton) {
    const imported = confirmOfxDraft(confirmOfxButton.dataset.confirmOfxDraft);
    const draft = state.ofxDrafts.find((item) => item.id === confirmOfxButton.dataset.confirmOfxDraft);
    if (draft) updateOfxBatchCounters(draft.importBatchId);
    saveState();
    render();
    toast(imported ? "Movimento OFX confirmado." : "Revise o movimento antes de confirmar.");
  }

  const ignoreOfxButton = event.target.closest("[data-ignore-ofx-draft]");
  if (ignoreOfxButton) ignoreOfxDraft(ignoreOfxButton.dataset.ignoreOfxDraft);

  const saveOfxRuleButton = event.target.closest("[data-save-ofx-rule]");
  if (saveOfxRuleButton) saveOfxRuleFromDraft(saveOfxRuleButton.dataset.saveOfxRule);

  const patientTab = event.target.closest("[data-patient-tab]");
  if (patientTab) setPatientTab(patientTab.dataset.patientTab);

  const professionalTab = event.target.closest("[data-professional-tab]");
  if (professionalTab) setProfessionalTab(professionalTab.dataset.professionalTab);

  const settingsTab = event.target.closest("[data-settings-tab]");
  if (settingsTab) setSettingsTab(settingsTab.dataset.settingsTab);

  const modeButton = event.target.closest("[data-agenda-mode]");
  if (modeButton) setAgendaMode(modeButton.dataset.agendaMode);

  const accountDirectionButton = event.target.closest("[data-open-account-direction]");
  if (accountDirectionButton) {
    const direction = accountDirectionButton.dataset.openAccountDirection;
    openAccountModal(null, {
      direction,
      status: "Aberto",
    });
  }

  const modalButton = event.target.closest("[data-open-modal]");
  if (modalButton) {
    editingModalityId = null;
    editingPlanId = null;
    editingSupplierId = null;
    if (modalButton.dataset.openModal === "chartAccount") openChartAccountModal();
    else if (modalButton.dataset.openModal === "enrollment") openEnrollmentModal();
    else if (modalButton.dataset.openModal === "appointment") openAppointmentModal();
    else if (modalButton.dataset.openModal === "lead") openLeadModal();
    else openModal(modalButton.dataset.openModal);
  }

  const scheduleAction = event.target.closest("[data-action]");
  if (scheduleAction) {
    const appointment = state.appointments.find((item) => item.id === scheduleAction.dataset.id);
    if (scheduleAction.dataset.action === "delete-appointment" && appointment) {
      if (!confirm(`Excluir agendamento de ${studentName(appointment.studentId)} em ${dateLabel(appointment.date)} às ${appointment.time}?`)) return;
      rememberDeletedEntities("appointments", appointment.id);
      state.appointments = state.appointments.filter((a) => a.id !== appointment.id);
      saveState();
      renderSchedule();
      toast("Agendamento excluído.");
      return;
    }
    if (scheduleAction.dataset.action === "open-appt-panel" && appointment) {
      openApptActionPanel(appointment.id);
      return;
    }
    if (scheduleAction.dataset.action === "reschedule" && appointment) {
      openAppointmentModal(appointment.id);
      return;
    }
    if (scheduleAction.dataset.action === "confirm" && appointment) appointment.status = "Confirmada";
    if (scheduleAction.dataset.action === "complete" && appointment) {
      appointment.status = "Visita realizada";
      const relatedStudent = state.students.find((item) => item.id === appointment.studentId);
      if (relatedStudent) relatedStudent.lastPresence = appointment.date;
      updateLeadAfterVisit(appointment);
    }
    if (scheduleAction.dataset.action === "missed" && appointment) {
      appointment.status = "Faltou";
      appointment.replacementCredit = false;
    }
    if (scheduleAction.dataset.action === "cancel" && appointment) {
      appointment.status = "Cancelada";
      appointment.replacementCredit = true;
    }
    if (scheduleAction.dataset.action === "replacement" && appointment) {
      if (replacementBalance(appointment.studentId) <= 0 && !appointment.replacementUsed) {
        toast("Cliente sem crédito de reposição disponível.");
        return;
      }
      appointment.status = "Reposta";
      appointment.sessionKind = "Reposição";
      appointment.replacementUsed = true;
    }
    saveState();
    render();
    toast("Agenda atualizada.");
  }
});

document.querySelector("#apptActionClose").addEventListener("click", closeApptActionPanel);
document.querySelector("#apptActionOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeApptActionPanel();
});

document.querySelector("#apptActionMainGrid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-appt-action]");
  if (!btn || !_apptActionId) return;
  const action = btn.dataset.apptAction;
  const appt = state.appointments.find((a) => a.id === _apptActionId);
  if (!appt) return;

  if (action === "reschedule") {
    document.querySelector("#apptActionMainGrid").hidden = true;
    document.querySelector("#apptTimePanel").hidden = false;
    document.querySelector("#apptTimeDate").value = appt.date || "";
    document.querySelector("#apptTimeStart").value = appt.time || "09:00";
    document.querySelector("#apptTimeEnd").value = appt.endTime || "10:00";
    return;
  }
  if (action === "edit-professional") {
    document.querySelector("#apptActionMainGrid").hidden = true;
    document.querySelector("#apptProfPanel").hidden = false;
    const sel = document.querySelector("#apptProfSelect");
    const profs = activeProfessionals();
    const hasCurrent = profs.some((p) => p.id === appt.teacherId);
    sel.innerHTML = [
      ...(!hasCurrent && appt.teacherId ? [`<option value="${appt.teacherId}">${professionalName(appt.teacherId)}</option>`] : []),
      ...profs.map((p) => `<option value="${p.id}">${p.name}</option>`),
    ].join("");
    sel.value = appt.teacherId || profs[0]?.id || "";
    return;
  }
  if (action === "checkin") {
    appt.status = "Visita realizada";
    const s = state.students.find((item) => item.id === appt.studentId);
    if (s) s.lastPresence = appt.date;
    updateLeadAfterVisit(appt);
    closeApptActionPanel();
    saveState(); render(); toast("Presença registrada.");
    return;
  }
  if (action === "missed") {
    appt.status = "Faltou";
    appt.replacementCredit = false;
    closeApptActionPanel();
    saveState(); render(); toast("Falta injustificada registrada.");
    return;
  }
  if (action === "missed-justified") {
    // Show justify sub-panel
    document.querySelector("#apptActionMainGrid").hidden = true;
    document.querySelector("#apptJustifyPanel").hidden = false;
    const today = new Date().toISOString().slice(0, 10);
    document.querySelector("#apptRescheduleDate").value = today;
    document.querySelector("#apptRescheduleStart").value = appt.time || "09:00";
    document.querySelector("#apptRescheduleEnd").value = appt.endTime || "10:00";
    return;
  }
  if (action === "experimental") {
    appt.sessionKind = "Experimental";
    closeApptActionPanel();
    saveState(); render(); toast("Sessão marcada como experimental.");
    return;
  }
  if (action === "replacement") {
    if (replacementBalance(appt.studentId) <= 0 && !appt.replacementUsed) {
      toast("Cliente sem crédito de reposição disponível.");
      return;
    }
    appt.status = "Reposta";
    appt.sessionKind = "Reposição";
    appt.replacementUsed = true;
    closeApptActionPanel();
    saveState(); render(); toast("Reposição registrada.");
    return;
  }
  if (action === "cancel") {
    appt.status = "Cancelada";
    appt.replacementCredit = true;
    closeApptActionPanel();
    saveState(); render(); toast("Agendamento cancelado.");
    return;
  }
});

// Time sub-panel: edit only date/start/end
document.querySelector("#apptTimeBackBtn")?.addEventListener("click", () => {
  document.querySelector("#apptTimePanel").hidden = true;
  document.querySelector("#apptActionMainGrid").hidden = false;
});
document.querySelector("#apptTimeSaveBtn")?.addEventListener("click", () => {
  const appt = state.appointments.find((a) => a.id === _apptActionId);
  if (!appt) return;
  const date = document.querySelector("#apptTimeDate").value;
  const start = document.querySelector("#apptTimeStart").value;
  const end = document.querySelector("#apptTimeEnd").value;
  if (!date || !start || !end) { toast("Preencha data, início e fim."); return; }
  if (end <= start) { toast("O horário final deve ser depois do inicial."); return; }
  const changed = appt.date !== date || appt.time !== start || appt.endTime !== end;
  appt.wasRescheduled = changed || !!appt.wasRescheduled;
  appt.date = date;
  appt.time = start;
  appt.endTime = end;
  closeApptActionPanel();
  currentWeekStart = toMonday(parseLocalDate(date));
  saveState(); render(); toast("Horário atualizado.");
});

// Professional sub-panel: edit only the professional
document.querySelector("#apptProfBackBtn")?.addEventListener("click", () => {
  document.querySelector("#apptProfPanel").hidden = true;
  document.querySelector("#apptActionMainGrid").hidden = false;
});
document.querySelector("#apptProfSaveBtn")?.addEventListener("click", () => {
  const appt = state.appointments.find((a) => a.id === _apptActionId);
  if (!appt) return;
  const teacherId = document.querySelector("#apptProfSelect").value;
  if (!teacherId) { toast("Selecione um professor."); return; }
  appt.teacherId = teacherId;
  closeApptActionPanel();
  saveState(); render(); toast("Professor atualizado.");
});

// Justify sub-panel: toggle reschedule fields
document.querySelector("#apptJustifyPanel").addEventListener("click", (e) => {
  const tog = e.target.closest("[data-justify]");
  if (!tog) return;
  document.querySelectorAll(".appt-justify-tog").forEach((b) => b.classList.remove("appt-justify-tog--active"));
  tog.classList.add("appt-justify-tog--active");
  document.querySelector("#apptRescheduleFields").hidden = tog.dataset.justify !== "yes";
});

document.querySelector("#apptJustifyBackBtn").addEventListener("click", () => {
  document.querySelector("#apptJustifyPanel").hidden = true;
  document.querySelector("#apptActionMainGrid").hidden = false;
});

document.querySelector("#apptJustifySaveBtn").addEventListener("click", () => {
  const appt = state.appointments.find((a) => a.id === _apptActionId);
  if (!appt) return;
  const reason = document.querySelector("#apptJustifyReason").value.trim();
  const wantReschedule = document.querySelector(".appt-justify-tog--active")?.dataset.justify === "yes";

  appt.status = "Falta justificada";
  appt.justifyReason = reason;
  if (reason) appt.notes = appendNote(appt.notes, `Motivo: ${reason}`);

  if (wantReschedule) {
    const newDate = document.querySelector("#apptRescheduleDate").value;
    const newStart = document.querySelector("#apptRescheduleStart").value;
    const newEnd = document.querySelector("#apptRescheduleEnd").value;
    if (!newDate || !newStart) { toast("Informe a nova data e horário."); return; }
    // Create new appointment as reschedule
    const newAppt = { ...appt, id: uid("a"), date: newDate, time: newStart, endTime: newEnd, status: "Agendada", wasRescheduled: false, justifyReason: "", notes: `Reposição de ${dateLabel(appt.date)}` };
    state.appointments.push(newAppt);
    appt.wasRescheduled = true;
    toast("Falta justificada registrada. Nova aula agendada.");
  } else {
    toast("Falta justificada registrada.");
  }

  closeApptActionPanel();
  saveState();
  render();
});

document.querySelector("#closeModal").addEventListener("click", closeModal);
document.querySelector("#modalBackdrop").addEventListener("click", (event) => {
  if (event.target.id === "modalBackdrop") closeModal();
});

document.querySelector("#modalForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const invalidLookup = [...form.querySelectorAll("[data-student-search]")].find((input) => !syncStudentLookup(input, true));
  if (invalidLookup) {
    invalidLookup.reportValidity();
    return;
  }
  if (form.dataset.type === "enrollment" && form.elements.freeSchedule?.value !== "Sim") {
    const dayFields = ["mondayTime", "tuesdayTime", "wednesdayTime", "thursdayTime", "fridayTime"];
    const filledTimes = dayFields.filter((name) => form.elements[name]?.value);
    const planId = form.elements.planId?.value;
    const plan = planId ? state.plans.find((p) => p.id === planId) : null;
    const weeklyFreq = plan ? weeklySessionsFromPlan(plan) : Number(form.elements.sessions?.value) || 0;
    if (weeklyFreq > 0 && filledTimes.length !== weeklyFreq) {
      const msg = `Preencha exatamente ${weeklyFreq} dia(s) de semana (${filledTimes.length} preenchido(s)).`;
      const targetField = form.elements[dayFields.find((n) => !form.elements[n]?.value) || dayFields[0]];
      if (targetField) {
        targetField.setCustomValidity(msg);
        targetField.reportValidity();
        targetField.setCustomValidity("");
      }
      return;
    }
  }
  if (["appointment", "block"].includes(form.dataset.type)) {
    const dateVal = form.elements.date?.value;
    if (dateVal && isWeekend(parseLocalDate(dateVal))) {
      const dateField = form.elements.date;
      dateField.setCustomValidity("Não é permitido agendar em finais de semana (sábado ou domingo).");
      dateField.reportValidity();
      dateField.setCustomValidity("");
      return;
    }
  }
  if (form.dataset.type === "student" && !editingStudentId) {
    const cpfVal = form.elements.cpf?.value?.trim().replace(/\D/g, "");
    if (cpfVal) {
      const duplicate = state.students.find((s) => s.cpf && s.cpf.replace(/\D/g, "") === cpfVal);
      if (duplicate) {
        const cpfField = form.elements.cpf;
        cpfField.setCustomValidity(`CPF já cadastrado para o cliente "${duplicate.name}".`);
        cpfField.reportValidity();
        cpfField.setCustomValidity("");
        return;
      }
    }
    if (_pendingStudentLeadId && (!form.elements.modalityId?.value || !form.elements.planId?.value)) {
      const planField = form.elements.planId || form.elements.modalityId;
      if (planField) {
        planField.setCustomValidity("Cadastre uma matrícula para salvar o novo cliente.");
        planField.reportValidity();
        planField.setCustomValidity("");
      } else {
        toast("Cadastre uma matrícula para salvar o novo cliente.");
      }
      return;
    }
  }
  const schema = modalSchemas[form.dataset.type];
  const values = Object.fromEntries(new FormData(form).entries());
  form.querySelectorAll("[data-student-search]").forEach((input) => {
    delete values[`${input.dataset.studentTarget}Search`];
  });
  if (form.dataset.type === "lead") {
    const currentLead = editingLeadId ? state.leads.find((l) => l.id === editingLeadId) : null;
    if (values.status === "Perdido" && currentLead && currentLead.status !== "Perdido") {
      // Marcar como perdido sempre exige motivo — salva as demais edições mantendo o status
      // atual e abre o popup dedicado, que grava o motivo junto com o novo status.
      const leadIdForLoseOverlay = editingLeadId;
      values.status = currentLead.status;
      schema.handler(values);
      saveState();
      closeModal();
      render();
      openLoseLeadOverlay(leadIdForLoseOverlay);
      return;
    }
  }
  const savedLeadId = form.dataset.type === "lead" ? editingLeadId : null;
  schema.handler(values);
  saveState();
  closeModal();
  render();
  if (savedLeadId) {
    const savedLead = state.leads.find((l) => l.id === savedLeadId);
    if (savedLead?.visitDate && savedLead?.linkedAppointmentId) {
      currentWeekStart = toMonday(parseLocalDate(savedLead.visitDate));
      switchView("agenda");
      toast("Lead salvo. Exibindo semana do agendamento.");
      return;
    }
  }
  toast(form.dataset.type === "accountSettlement" ? "Baixa registrada com sucesso." : "Cadastro salvo com sucesso.");
});

document.querySelector("#modalForm").addEventListener("change", (event) => {
  if (event.target.matches("select[name='direction']")) {
    refreshPersonLookupList();
    refreshAccountChartOptions();
    applyAccountPersonAutofill();
  }
});

document.querySelector("#modalForm").addEventListener("input", (event) => {
  if (event.target.matches("input[name='person']")) applyAccountPersonAutofill();
});

document.querySelector("#modalForm").addEventListener("focusout", (event) => {
  if (event.target.matches("[data-currency-input]")) event.target.value = formatBrAmount(event.target.value);
});

document.querySelector("#modalForm").addEventListener("click", (event) => {
  if (!event.target.closest("#accountPersonRegisterBtn")) return;
  const form = document.querySelector("#modalForm");
  const values = Object.fromEntries(new FormData(form).entries());
  values._editingAccountId = editingAccountId;
  _pendingAccountModalValues = values;
  const direction = values.direction || "Pagar";
  const name = (values.person || "").trim();
  if (direction === "Receber") {
    editingStudentId = null;
    openModal("student", { name });
    document.querySelector("#modalTitle").textContent = "Cadastrar cliente";
  } else {
    editingSupplierId = null;
    openModal("supplier", { name, status: "Ativo" });
    document.querySelector("#modalTitle").textContent = "Cadastrar fornecedor";
  }
});

document.querySelector("#modalForm").addEventListener("input", (event) => {
  if (!event.target.matches("[data-student-search]")) return;
  syncStudentLookup(event.target, false);
});

document.querySelector("#modalForm").addEventListener("change", (event) => {
  const form = event.currentTarget;
  if (["appointment", "block"].includes(form.dataset.type) && event.target.name === "time" && form.elements.endTime) {
    form.elements.endTime.value = addOneHour(event.target.value);
    return;
  }
  if (["enrollment", "student"].includes(form.dataset.type) && ["modalityId", "planType"].includes(event.target.name)) {
    updateEnrollmentPlanOptions(form);
    applyEnrollmentPlanDefaults(form, true);
    return;
  }
  if (["enrollment", "student"].includes(form.dataset.type) && ["planId", "startDate"].includes(event.target.name)) {
    applyEnrollmentPlanDefaults(form, true);
    return;
  }
  if (form.dataset.type === "plan" && event.target.name === "modalityId" && form.elements.chartAccountId) {
    form.elements.chartAccountId.value = revenueChartAccountForModality(event.target.value)?.id || form.elements.chartAccountId.value;
    return;
  }
  if (event.target.name !== "supplierId") return;
  const supplier = supplierById(event.target.value);
  if (!supplier) return;
  if (form.elements.person && !form.elements.person.value) form.elements.person.value = supplier.name;
  if (form.elements.document && !form.elements.document.value) form.elements.document.value = supplier.document;
});

function setControlValue(id, value) {
  const control = document.querySelector(`#${id}`);
  if (!control) return;
  control.value = value;
}

function clearScheduleFilters() {
  setControlValue("agendaSearch", "");
  setControlValue("modalityFilter", "all");
  setControlValue("sessionFilter", "all");
  setControlValue("statusFilter", "all");
  setControlValue("teacherFilter", "all");
  renderSchedule();
}

function clearCrmFilters() {
  setControlValue("leadSearch", "");
  setControlValue("leadStatusFilter", "all");
  setControlValue("leadOwnerFilter", "all");
  setControlValue("leadOriginFilter", "all");
  renderCrm();
}

function clearStudentFilters() {
  setControlValue("studentSearch", "");
  setControlValue("studentStatusFilter", "Ativo");
  renderStudents();
}

function clearProfessionalFilters() {
  setControlValue("professionalSearch", "");
  setControlValue("professionalStatusFilter", "Ativo");
  renderProfessionals();
}

function clearSupplierFilters() {
  setControlValue("supplierSearch", "");
  setControlValue("supplierStatusFilter", "Ativo");
  setControlValue("supplierNameFilter", "all");
  setControlValue("supplierTypeFilter", "all");
  renderSuppliers();
}

function clearModalityFilters() {
  setControlValue("modalitySearch", "");
  renderModalities();
}

function clearPlanFilters() {
  setControlValue("planSearch", "");
  setControlValue("planStatusFilter", "Ativo");
  setControlValue("planModalityFilter", "all");
  setControlValue("planTypeFilter", "all");
  setControlValue("planSessionsFilter", "all");
  renderPlans();
}

function clearEnrollmentFilters() {
  setControlValue("enrollmentSearch", "");
  setControlValue("enrollmentStatusFilter", "activeAndExpired");
  setControlValue("enrollmentModalityFilter", "all");
  setControlValue("enrollmentScheduleFilter", "all");
  setControlValue("enrollmentProfessionalFilter", "all");
  setControlValue("enrollmentPlanTypeFilter", "all");
  const fromEl = document.querySelector("#enrollmentDateFrom");
  const toEl = document.querySelector("#enrollmentDateTo");
  if (fromEl) fromEl.value = "";
  if (toEl) toEl.value = "";
  renderEnrollments();
}

function clearMonthlyFilters() {
  setControlValue("monthlySearch", "");
  setControlValue("monthlyPaidFilter", "all");
  setControlValue("monthlyMembershipFilter", "all");
  setControlValue("monthlyModalityFilter", "all");
  setControlValue("monthlyInvoiceFilter", "all");
  setControlValue("monthlyReceiptFilter", "all");
  setControlValue("monthlyTeacherFilter", "all");
  setControlValue("monthlyExternalFilter", "all");
  const periodEl = document.querySelector("#monthlyPeriodFilter");
  if (periodEl) periodEl.value = demoToday.slice(0, 7);
  const periodEndEl = document.querySelector("#monthlyPeriodEndFilter");
  if (periodEndEl) periodEndEl.value = "";
  renderMonthlyPayments();
}

function clearFiscalFilters() {
  setControlValue("fiscalSearch", "");
  setControlValue("fiscalStatusFilter", "all");
  setControlValue("fiscalModalityFilter", "all");
  renderFiscalInvoices();
}

function clearAccountFilters(config) {
  setControlValue(config.searchId, "");
  setControlValue(config.monthId, demoToday.slice(0, 7));
  setControlValue(config.dateFromId, "");
  setControlValue(config.dateToId, "");
  setControlValue(config.statusId, "all");
  setControlValue(config.reconciliationId, "all");
  setControlValue(config.chartId, "all");
  renderAccounts();
}

function resetAccountFiltersForImport(config) {
  setControlValue(config.searchId, "");
  setControlValue(config.statusId, "all");
  setControlValue(config.reconciliationId, "all");
  setControlValue(config.chartId, "all");
}

function clearChartAccountFilters() {
  setControlValue("chartAccountSearch", "");
  renderChartAccounts();
}

["agendaSearch", "globalStudentSearch", "modalityFilter", "sessionFilter", "statusFilter", "teacherFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderSchedule);
  document.querySelector(`#${id}`)?.addEventListener("change", renderSchedule);
});

document.querySelector("#cashFlowToggleView")?.addEventListener("click", () => {
  cashFlowViewMode = cashFlowViewMode === "chart" ? "table" : "chart";
  renderCashFlow();
});
["cashFlowDateFrom", "cashFlowDateTo"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("change", renderCashFlow);
});
document.querySelector("#cashFlowResetRange")?.addEventListener("click", () => {
  setControlValue("cashFlowDateFrom", "");
  setControlValue("cashFlowDateTo", "");
  renderCashFlow();
});
document.querySelector("#cashFlowYearFilter")?.addEventListener("change", (event) => {
  const year = event.target.value;
  setControlValue("cashFlowDateFrom", `${year}-01-01`);
  setControlValue("cashFlowDateTo", `${year}-12-31`);
  renderCashFlow();
});
document.querySelector("#cashFlowActivityTabs")?.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-cashflow-activity]");
  if (!btn) return;
  cashFlowActivityFilter = btn.dataset.cashflowActivity;
  document.querySelectorAll("#cashFlowActivityTabs .cashflow-activity-tab").forEach((tab) => {
    tab.classList.toggle("active", tab === btn);
  });
  renderCashFlow();
});

["leadSearch", "leadStatusFilter", "leadOwnerFilter", "leadOriginFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderCrm);
  document.querySelector(`#${id}`)?.addEventListener("change", renderCrm);
});

document.querySelector("#leadSearchButton")?.addEventListener("click", renderCrm);
document.querySelector("#leadClearFiltersButton")?.addEventListener("click", clearCrmFilters);

document.querySelector("#prevWeek").addEventListener("click", () => {
  if (agendaMode === "day") {
    let prev = addDays(currentWeekStart, -1);
    if (prev.getDay() === 0) prev = addDays(prev, -2); // Dom → Sex
    else if (prev.getDay() === 6) prev = addDays(prev, -1); // Sáb → Sex
    currentWeekStart = prev;
  } else {
    currentWeekStart = toMonday(addDays(currentWeekStart, -7));
  }
  renderSchedule();
});

document.querySelector("#nextWeek").addEventListener("click", () => {
  if (agendaMode === "day") {
    let next = addDays(currentWeekStart, 1);
    if (next.getDay() === 6) next = addDays(next, 2); // Sáb → Seg
    else if (next.getDay() === 0) next = addDays(next, 1); // Dom → Seg
    currentWeekStart = next;
  } else {
    currentWeekStart = toMonday(addDays(currentWeekStart, 7));
  }
  renderSchedule();
});

document.querySelector("#todayButton").addEventListener("click", () => {
  currentWeekStart = toMonday(parseLocalDate(demoToday));
  renderSchedule();
});

document.querySelector("#agendaSearchButton").addEventListener("click", renderSchedule);
document.querySelector("#agendaClearFiltersButton")?.addEventListener("click", clearScheduleFilters);
document.querySelector("#agendaListToggle").addEventListener("click", () => {
  setAgendaMode(agendaMode === "list" ?"week" : "list");
});

document.querySelectorAll("[data-payment-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activePaymentFilter = button.dataset.paymentFilter;
    document.querySelectorAll("[data-payment-filter]").forEach((item) => item.classList.toggle("active", item === button));
    renderFinance();
  });
});

document.querySelector("#studentSearch").addEventListener("input", renderStudents);
document.querySelector("#studentSearchButton").addEventListener("click", renderStudents);
document.querySelector("#studentClearFiltersButton")?.addEventListener("click", clearStudentFilters);
document.querySelector("#studentStatusFilter")?.addEventListener("change", renderStudents);
document.querySelector("#newPatientButton").addEventListener("click", () => openPatientEditor());
document.querySelector("#importStudentsButton")?.addEventListener("click", () => document.querySelector("#importStudentsFile").click());
document.querySelector("#importStudentsFile")?.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) { importStudentsAndEnrollmentsFromXlsx(file); e.target.value = ""; }
});
document.querySelector("#backToPatientsButton").addEventListener("click", () => switchView("students"));
document.querySelector("#patientEditorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  savePatientEditor();
});
document.querySelector("#professionalSearch").addEventListener("input", renderProfessionals);
document.querySelector("#professionalSearchButton").addEventListener("click", renderProfessionals);
document.querySelector("#professionalClearFiltersButton")?.addEventListener("click", clearProfessionalFilters);
document.querySelector("#professionalStatusFilter").addEventListener("change", renderProfessionals);
document.querySelector("#newProfessionalButton").addEventListener("click", () => openProfessionalEditor());
document.querySelector("#backToProfessionalsButton").addEventListener("click", () => switchView("professionals"));
document.querySelector("#professionalEditorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveProfessionalEditor();
});
document.querySelector("#supplierSearch")?.addEventListener("input", renderSuppliers);
document.querySelector("#supplierSearchButton")?.addEventListener("click", renderSuppliers);
document.querySelector("#supplierClearFiltersButton")?.addEventListener("click", clearSupplierFilters);
document.querySelector("#supplierStatusFilter")?.addEventListener("change", renderSuppliers);
document.querySelector("#supplierNameFilter")?.addEventListener("change", renderSuppliers);
document.querySelector("#supplierTypeFilter")?.addEventListener("change", renderSuppliers);
document.querySelector("#modalitySearch").addEventListener("input", renderModalities);
document.querySelector("#modalitySearchButton").addEventListener("click", renderModalities);
document.querySelector("#modalityClearFiltersButton")?.addEventListener("click", clearModalityFilters);
document.querySelector("#newModalityButton").addEventListener("click", () => openModalityEditor());
document.querySelector("#backToModalitiesButton").addEventListener("click", () => switchView("modalities"));
document.querySelector("#modalityEditorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveModalityEditor();
});
document.querySelector("#planSearch").addEventListener("input", renderPlans);
document.querySelector("#planSearchButton").addEventListener("click", renderPlans);
document.querySelector("#planClearFiltersButton")?.addEventListener("click", clearPlanFilters);
document.querySelector("#planStatusFilter").addEventListener("change", renderPlans);
document.querySelector("#planModalityFilter")?.addEventListener("change", renderPlans);
document.querySelector("#planTypeFilter")?.addEventListener("change", renderPlans);
document.querySelector("#planSessionsFilter")?.addEventListener("change", renderPlans);
document.querySelector("#newPlanButton").addEventListener("click", () => openPlanEditor());
document.querySelector("#exportPlansButton")?.addEventListener("click", exportPlansXls);
document.querySelector("#backToPlansButton").addEventListener("click", () => switchView("plans"));
document.querySelector("#planEditorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  savePlanEditor();
});
document.querySelector("#planEditorForm").addEventListener("change", (event) => {
  if (event.target.name !== "modalityId") return;
  const form = event.currentTarget;
  if (form.elements.chartAccountId) form.elements.chartAccountId.value = revenueChartAccountForModality(event.target.value)?.id || form.elements.chartAccountId.value;
});
["enrollmentSearch", "enrollmentStatusFilter", "enrollmentModalityFilter", "enrollmentScheduleFilter", "enrollmentProfessionalFilter", "enrollmentPlanTypeFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderEnrollments);
  document.querySelector(`#${id}`)?.addEventListener("change", renderEnrollments);
});
document.querySelector("#enrollmentDateFrom")?.addEventListener("change", renderEnrollments);
document.querySelector("#enrollmentDateTo")?.addEventListener("change", renderEnrollments);
document.querySelector("#enrollmentSearchButton")?.addEventListener("click", renderEnrollments);
document.querySelector("#enrollmentClearFiltersButton")?.addEventListener("click", clearEnrollmentFilters);
["monthlySearch", "monthlyPaidFilter", "monthlyMembershipFilter", "monthlyModalityFilter", "monthlyInvoiceFilter", "monthlyReceiptFilter", "monthlyTeacherFilter", "monthlyExternalFilter", "monthlyPeriodFilter", "monthlyPeriodEndFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderMonthlyPayments);
  document.querySelector(`#${id}`)?.addEventListener("change", renderMonthlyPayments);
});
document.querySelector("#monthlySearchButton")?.addEventListener("click", renderMonthlyPayments);
document.querySelector("#monthlyClearFiltersButton")?.addEventListener("click", clearMonthlyFilters);

document.querySelector("#prevMonthlyPeriod")?.addEventListener("click", () => {
  const el = document.querySelector("#monthlyPeriodFilter");
  if (!el) return;
  const [y, m] = (el.value || demoToday.slice(0, 7)).split("-").map(Number);
  el.value = m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`;
  renderMonthlyPayments();
});
document.querySelector("#nextMonthlyPeriod")?.addEventListener("click", () => {
  const el = document.querySelector("#monthlyPeriodFilter");
  if (!el) return;
  const [y, m] = (el.value || demoToday.slice(0, 7)).split("-").map(Number);
  el.value = m === 12 ? `${y + 1}-01` : `${y}-${String(m + 1).padStart(2, "0")}`;
  renderMonthlyPayments();
});

["fiscalSearch", "fiscalStatusFilter", "fiscalModalityFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderFiscalInvoices);
  document.querySelector(`#${id}`)?.addEventListener("change", renderFiscalInvoices);
});
document.querySelector("#fiscalSearchButton")?.addEventListener("click", renderFiscalInvoices);
document.querySelector("#fiscalClearFiltersButton")?.addEventListener("click", clearFiscalFilters);
document.querySelector("#issueSelectedInvoicesButton")?.addEventListener("click", issuePendingFiscalInvoices);

Object.values(accountViewConfigs).forEach((config) => {
  [config.searchId, config.monthId, config.dateFromId, config.dateToId, config.statusId, config.reconciliationId, config.chartId].forEach((id) => {
    document.querySelector(`#${id}`)?.addEventListener("input", renderAccounts);
    document.querySelector(`#${id}`)?.addEventListener("change", renderAccounts);
  });
  document.querySelector(`#${config.searchId.replace("Search", "SearchButton")}`)?.addEventListener("click", renderAccounts);
  document.querySelector(`#${config.searchId.replace("Search", "ClearFiltersButton")}`)?.addEventListener("click", () => clearAccountFilters(config));
});
document.querySelector("#chartAccountSearch")?.addEventListener("input", renderChartAccounts);
document.querySelector("#chartAccountSearchButton")?.addEventListener("click", renderChartAccounts);
document.querySelector("#chartAccountClearFiltersButton")?.addEventListener("click", clearChartAccountFilters);
document.querySelector("#processOfxButton")?.addEventListener("click", processOfxFile);
document.querySelector("#addContractButton")?.addEventListener("click", () => openContractModal(null));
document.querySelector("#contractChartFilter")?.addEventListener("change", renderContracts);
document.querySelector("#contractSupplierFilter")?.addEventListener("change", renderContracts);
document.querySelector("#contractStatusFilter")?.addEventListener("change", renderContracts);
document.querySelector("#contractSearchInput")?.addEventListener("input", renderContracts);
document.querySelector("#contractClearFilters")?.addEventListener("click", () => {
  const el = (id) => document.querySelector(id);
  if (el("#contractChartFilter")) el("#contractChartFilter").value = "all";
  if (el("#contractSupplierFilter")) el("#contractSupplierFilter").value = "all";
  if (el("#contractStatusFilter")) el("#contractStatusFilter").value = "all";
  if (el("#contractSearchInput")) el("#contractSearchInput").value = "";
  renderContracts();
});
document.querySelector("#importAccountsPayableFile")?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) { importAccountsFromXlsx(file, "Pagar"); e.target.value = ""; }
});
document.querySelector("#importAccountsReceivableFile")?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) { importAccountsFromXlsx(file, "Receber"); e.target.value = ""; }
});
document.querySelector("#approveOfxValidButton")?.addEventListener("click", approveValidOfxDraftsToFinance);
document.querySelector("#clearOfxImportButton")?.addEventListener("click", clearOfxImport);
["bankReconciliationStatusFilter", "bankReconciliationTypeFilter", "bankReconciliationAccountFilter", "bankReconciliationSearch", "bankReconciliationMonthFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderBankReconciliation);
  document.querySelector(`#${id}`)?.addEventListener("change", renderBankReconciliation);
});
document.querySelector("#bankReconciliationSearchButton")?.addEventListener("click", renderBankReconciliation);
document.querySelector("#bankReconciliationClearFiltersButton")?.addEventListener("click", () => {
  selectedReconMovementId = null;
  selectedReconTitleId = null;
  resetBankReconciliationFilters();
  renderBankReconciliation();
});
document.querySelector("#reconcileSelectedButton")?.addEventListener("click", () => {
  if (!selectedReconMovementId || !selectedReconTitleId) return;
  reconcileBankMovement(selectedReconMovementId, selectedReconTitleId);
  selectedReconMovementId = null;
  selectedReconTitleId = null;
});
document.querySelector("#ofxReviewTable")?.addEventListener("change", (event) => {
  const field = event.target.closest("[data-ofx-field]");
  if (!field) return;
  updateOfxDraftField(field.dataset.ofxId, field.dataset.ofxField, field.value);
});

document.querySelector("#settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.settings = Object.fromEntries(new FormData(event.currentTarget).entries());
  saveState();
  toast("Configurações salvas.");
});
document.querySelector("#loginForm")?.addEventListener("submit", handleLogin);
document.querySelector("#forgotForm")?.addEventListener("submit", handleForgotPassword);
document.querySelector("#resetForm")?.addEventListener("submit", handleResetPassword);
document.querySelector("#showForgotBtn")?.addEventListener("click", () => showLoginPanel("forgot"));
document.querySelector("#showLoginBtn")?.addEventListener("click", () => showLoginPanel("login"));
document.querySelector("#showLoginFromResetBtn")?.addEventListener("click", () => {
  history.replaceState({}, "", window.location.pathname);
  showLoginPanel("login");
});
document.querySelector("#logoutButton")?.addEventListener("click", logout);
document.querySelector("#refreshUsersButton")?.addEventListener("click", renderAccessUsers);

window.addEventListener("physiofit:auth-expired", () => {
  authSession = null;
  applyAuthSession();
  showLoginPanel("login");
  const fb = document.querySelector("#loginFeedback");
  if (fb) { fb.textContent = "Sessão expirada. Faça login novamente."; fb.className = "login-feedback error"; }
});

checkResetTokenInUrl();

// Populate email field when settings tab opens
function populateMyEmailField() {
  const user = currentUser();
  if (!user) return;
  const input = document.querySelector("#changeEmailInput");
  if (input && user.email) input.value = user.email;
}
document.querySelector("[data-nav='settings']")?.addEventListener("click", populateMyEmailField);

// Change own email
document.querySelector("#changeEmailForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const feedback = document.querySelector("#changeEmailFeedback");
  const email = document.querySelector("#changeEmailInput").value.trim();
  feedback.textContent = "";
  const user = currentUser();
  if (!user) return;
  try {
    await window.PhysiofitData.updateUser(user.id, { email });
    toast("E-mail salvo.");
  } catch (err) {
    feedback.textContent = err.message || "Não foi possível salvar o e-mail.";
  }
});

// Change own password
document.querySelector("#changePasswordForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const feedback = document.querySelector("#changePasswordFeedback");
  const newPw = document.querySelector("#changePasswordNew").value;
  const confirmPw = document.querySelector("#changePasswordConfirm").value;
  feedback.textContent = "";
  if (newPw !== confirmPw) { feedback.textContent = "As senhas não coincidem."; return; }
  if (newPw.length < 6) { feedback.textContent = "Use no mínimo 6 caracteres."; return; }
  const user = currentUser();
  if (!user) return;
  try {
    await window.PhysiofitData.updateUser(user.id, { password: newPw });
    document.querySelector("#changePasswordNew").value = "";
    document.querySelector("#changePasswordConfirm").value = "";
    toast("Senha alterada com sucesso.");
  } catch (err) {
    feedback.textContent = err.message || "Não foi possível alterar a senha.";
  }
});

// Admin overlay: set password for another user
document.querySelector("#passwordOverlayForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const feedback = document.querySelector("#overlayPasswordFeedback");
  const newPw = document.querySelector("#overlayNewPassword").value;
  const confirmPw = document.querySelector("#overlayConfirmPassword").value;
  feedback.textContent = "";
  if (newPw !== confirmPw) { feedback.textContent = "As senhas não coincidem."; return; }
  if (newPw.length < 6) { feedback.textContent = "Use no mínimo 6 caracteres."; return; }
  if (!_pendingPasswordUserId) return;
  try {
    await window.PhysiofitData.updateUser(_pendingPasswordUserId, { password: newPw });
    closePasswordOverlay();
    await renderAccessUsers();
    toast("Senha atualizada.");
  } catch (err) {
    feedback.textContent = err.message || "Não foi possível atualizar a senha.";
  }
});
document.querySelector("#passwordOverlayCancel")?.addEventListener("click", closePasswordOverlay);
document.querySelector("#passwordOverlay")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closePasswordOverlay();
});

document.querySelector("#editUserForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!_editingUserId) return;
  const feedback = document.querySelector("#editUserFeedback");
  feedback.textContent = "";
  const name = document.querySelector("#editUserName").value.trim();
  const username = document.querySelector("#editUserUsername").value.trim();
  const email = document.querySelector("#editUserEmail").value.trim() || null;
  const role = document.querySelector("#editUserRole").value;
  try {
    await window.PhysiofitData.updateUser(_editingUserId, { name, username, email, role });
    closeEditUserOverlay();
    await renderAccessUsers();
    toast("Usuário atualizado.");
  } catch (err) {
    feedback.textContent = err.message || "Não foi possível salvar.";
  }
});
document.querySelector("#editUserOverlayCancel")?.addEventListener("click", closeEditUserOverlay);
document.querySelector("#editUserOverlay")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEditUserOverlay();
});

document.querySelector("#inviteOverlayClose")?.addEventListener("click", closeInviteOverlay);
document.querySelector("#inviteOverlay")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeInviteOverlay();
});
document.querySelector("#inviteCopyBtn")?.addEventListener("click", () => {
  const input = document.querySelector("#inviteLinkInput");
  if (!input?.value) return;
  navigator.clipboard.writeText(input.value).then(() => toast("Link copiado!")).catch(() => {
    input.select();
    document.execCommand("copy");
    toast("Link copiado!");
  });
});

document.querySelector("#emailOverlayForm")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const feedback = document.querySelector("#overlayEmailFeedback");
  const email = document.querySelector("#overlayEmail").value.trim();
  feedback.textContent = "";
  if (!_pendingEmailUserId) return;
  try {
    await window.PhysiofitData.updateUser(_pendingEmailUserId, { email });
    closeEmailOverlay();
    await renderAccessUsers();
    toast("E-mail atualizado.");
  } catch (err) {
    feedback.textContent = err.message || "Não foi possível atualizar o e-mail.";
  }
});
document.querySelector("#emailOverlayCancel")?.addEventListener("click", closeEmailOverlay);
document.querySelector("#emailOverlay")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeEmailOverlay();
});

// Lose Lead overlay
document.querySelector("#loseLeadSave")?.addEventListener("click", saveLoseLead);
document.querySelector("#loseLeadCancel")?.addEventListener("click", () => {
  document.querySelector("#loseLeadOverlay").hidden = true;
  _loseLeadId = null;
});
document.querySelector("#loseLeadOverlay")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) { document.querySelector("#loseLeadOverlay").hidden = true; _loseLeadId = null; }
});
document.querySelector("#loseLeadReason")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); saveLoseLead(); }
});

// Schedule Visit overlay
["svDate", "svTime", "svEndTime", "svProfessional"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("change", updateSvAvailability);
  document.querySelector(`#${id}`)?.addEventListener("input", updateSvAvailability);
});
document.querySelector("#svTime")?.addEventListener("change", (e) => {
  const endEl = document.querySelector("#svEndTime");
  if (endEl) endEl.value = addOneHour(e.target.value);
});
document.querySelector("#svSave")?.addEventListener("click", saveScheduleVisit);
document.querySelector("#svCancel")?.addEventListener("click", () => {
  document.querySelector("#scheduleVisitOverlay").hidden = true;
  _svLeadId = null;
});
document.querySelector("#scheduleVisitOverlay")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    document.querySelector("#scheduleVisitOverlay").hidden = true;
    _svLeadId = null;
  }
});

document.querySelector("#copyPortalButton").addEventListener("click", async () => {
  await navigator.clipboard?.writeText("https://studioflow.local/agendar");
  toast("Link copiado.");
});

document.querySelector("#seedButton")?.addEventListener("click", () => {
  state = normalizeState(structuredClone(seedData));
  refreshAutoRenewalProjections();
  ensureContractForecasts();
  saveState();
  render();
  toast("Dados exemplo restaurados.");
});

applyAuthSession();
ensureContractForecasts();
render();

// Default account month filters to the current month
(function initAccountMonthFilters() {
  const currentMonth = demoToday.slice(0, 7);
  const payableInput = document.querySelector("#payableAccountMonthFilter");
  const receivableInput = document.querySelector("#receivableAccountMonthFilter");
  if (payableInput && !payableInput.value) payableInput.value = currentMonth;
  if (receivableInput && !receivableInput.value) receivableInput.value = currentMonth;
  renderAccounts();
})();

async function mergeLeadsFromApi() {
  try {
    const res = await fetch("/api/leads");
    if (!res.ok) return;
    const remote = await res.json();
    if (!Array.isArray(remote) || remote.length === 0) return;
    const existingIds = new Set(state.leads.map((l) => l.id));
    const newLeads = remote
      .filter((r) => r.id && !existingIds.has(r.id) && !isDeletedEntity(state, "leads", r.id))
      .map((item, i) => normalizeLead(item, state.leads.length + i, false));
    if (newLeads.length === 0) return;
    state.leads = [...newLeads, ...state.leads];
    renderCrm();
    renderDashboard();
  } catch (e) {
    console.warn("Não foi possível carregar leads remotos:", e);
  }
}

hydrateStateFromNeon().finally(() => mergeLeadsFromApi());

// Roteamento por URL
window.addEventListener("popstate", (e) => {
  if (!currentUser()) return;
  const view = e.state?.view || pathToView[location.pathname] || "dashboard";
  switchView(view, { pushState: false });
});

// Navegar para o path inicial após autenticação já aplicada
(function applyInitialRoute() {
  if (!currentUser()) return;
  const view = pathToView[location.pathname] || "dashboard";
  switchView(canAccessView(view) ? view : "dashboard");
})();





