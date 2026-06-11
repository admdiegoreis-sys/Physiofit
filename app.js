const storageKey = "studioflow-pilates-v2";
const demoToday = "2026-05-11";

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
let remoteStateReady = false;
let applyingRemoteState = false;
let remoteSaveTimer = null;
let authSession = window.PhysiofitData?.session || null;
let activePaymentFilter = "all";
let agendaMode = "week";
let currentWeekStart = parseLocalDate(demoToday);
let editingStudentId = null;
let editingProfessionalId = null;
let editingModalityId = null;
let editingPlanId = null;
let editingSupplierId = null;
let editingChartAccountId = null;
let editingEnrollmentId = null;
let editingAppointmentId = null;
let editingLeadId = null;
let editingAccountId = null;
let settlingAccountId = null;

const viewTitles = {
  dashboard: "Painel de controle",
  crm: "CRM",
  agenda: "Agenda",
  students: "Cadastros",
  patientEditor: "Cadastro de paciente",
  enrollments: "Matrículas",
  professionals: "Profissionais",
  professionalEditor: "Cadastro de profissional",
  suppliers: "Fornecedores",
  modalities: "Modalidades / Serviços",
  modalityEditor: "Cadastro de modalidade",
  plans: "Planos",
  planEditor: "Cadastro de plano",
  monthlyPayments: "Mensalidades",
  fiscal: "NFS-e",
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
const leadChannels = ["WhatsApp", "Instagram", "E-mail", "Formulário do site", "Anúncio", "Presencial", "Atendimento presencial", "Outro"];
const leadOrigins = ["WhatsApp", "Instagram", "Google", "Indicação", "Formulário do site", "Anúncio", "Presencial", "Parceria", "Outro"];

const modalSchemas = {
  lead: {
    title: "Novo lead",
    submit: "Salvar lead",
    fields: [
      { name: "name", label: "Nome", type: "text" },
      { name: "phone", label: "Telefone", type: "tel" },
      { name: "email", label: "E-mail", type: "email", required: false },
      { name: "instagram", label: "Instagram", type: "text", required: false },
      { name: "origin", label: "Origem do lead", type: "select", options: leadOrigins, value: "Instagram" },
      { name: "entryChannel", label: "Canal de entrada", type: "select", options: leadChannels, value: "WhatsApp" },
      { name: "interest", label: "Interesse", type: "select", options: ["Pilates", "Fisioterapia", "RPG", "Funcional", "Avaliação", "Outro"], value: "Pilates" },
      { name: "status", label: "Status", type: "select", options: leadStatuses, value: "Novo lead" },
      { name: "entryDate", label: "Data de entrada", type: "date", value: demoToday },
      { name: "visitDate", label: "Data da visita", type: "date", value: "", required: false },
      { name: "ownerId", label: "Responsável", type: "professionalOptional" },
      { name: "initialMessage", label: "Mensagem inicial", type: "textarea", value: "", required: false },
      { name: "nextFollowUpDate", label: "Próximo follow-up", type: "date", value: demoToday },
      { name: "lossReason", label: "Motivo de perda", type: "select", options: ["", "Preço", "Horário incompatível", "Não respondeu", "Fechou com concorrente", "Desistiu", "Outro"], value: "", required: false },
      { name: "notes", label: "Observações", type: "textarea", value: "", required: false },
      { name: "history", label: "Histórico de contatos", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      const current = editingLeadId ? state.leads.find((item) => item.id === editingLeadId) : {};
      const normalized = normalizeLead({ ...current, id: editingLeadId || uid("l"), ...values }, state.leads.length);
      if (editingLeadId) state.leads = state.leads.map((item) => (item.id === editingLeadId ? normalized : item));
      else state.leads.unshift(normalized);
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
      }, state.leads.length));
    },
  },
  appointment: {
    title: "Agendar sessão",
    submit: "Salvar sessão",
    fields: [
      { name: "date", label: "Data", type: "date", value: demoToday },
      { name: "time", label: "Horário inicial", type: "time", value: "09:00" },
      { name: "endTime", label: "Horário final", type: "time", value: "10:00" },
      { name: "studentId", label: "Aluno/Paciente", type: "student" },
      { name: "teacherId", label: "Profissional", type: "professionalOptional", required: false },
      { name: "room", label: "Sala", type: "roomOptional", value: "", required: false },
      { name: "type", label: "Modalidade", type: "modality" },
      { name: "sessionKind", label: "Tipo de sessão", type: "select", options: ["Mensalidade", "Experimental", "Avulso"] },
      { name: "status", label: "Status", type: "select", options: ["Agendada", "Confirmada", "Aguardando", "Compareceu", "Faltou", "Cancelada", "Reposta"] },
      { name: "notes", label: "Observação", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      if (editingAppointmentId) {
        state.appointments = state.appointments.map((item) => {
          if (item.id !== editingAppointmentId) return item;
          return { ...item, ...values, notes: appendNote(values.notes || item.notes, "Remarcação") };
        });
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
      { name: "room", label: "Sala", type: "select", options: ["Todas", "Sala Reformer", "Sala Cadillac", "Sala Clínica", "Sala Solo"] },
    ],
    handler: (values) => {
      if (!Array.isArray(state.blocks)) state.blocks = [];
      state.blocks.push({ id: uid("b"), ...values });
    },
  },
  student: {
    title: "Novo aluno",
    submit: "Salvar aluno",
    fields: [
      { name: "name", label: "Nome completo", type: "text" },
      { name: "email", label: "E-mail", type: "email" },
      { name: "phone", label: "Telefone", type: "tel" },
      { name: "cpf", label: "CPF", type: "text" },
      { name: "birthDate", label: "Data de nascimento", type: "date" },
      { name: "plan", label: "Plano", type: "plan" },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"] },
      { name: "membership", label: "Matrícula", type: "select", options: ["Matriculado", "Matrículas", "Matr. Cancel.", "Avulsa"] },
    ],
    handler: (values) => state.students.push({ id: uid("s"), gender: "F", lastPresence: "-", ...values }),
  },
  supplier: {
    title: "Novo fornecedor",
    submit: "Salvar fornecedor",
    fields: [
      { name: "name", label: "Razão social / Nome", type: "text" },
      { name: "document", label: "CPF/CNPJ", type: "text", value: "" },
      { name: "supplierType", label: "Tipo", type: "select", options: ["Pessoa jurídica", "Pessoa física", "Sem documento"], value: "Pessoa jurídica" },
      { name: "email", label: "E-mail", type: "email", value: "" },
      { name: "phone", label: "Telefone", type: "tel", value: "" },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo" },
      { name: "notes", label: "Observações", type: "textarea", value: "" },
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
      { name: "value", label: "Valor", type: "number", value: "0.00" },
      { name: "sessions", label: "Sessões inclusas", type: "number", value: 0 },
      { name: "status", label: "Status", type: "select", options: ["Ativo", "Inativo"], value: "Ativo" },
      { name: "notes", label: "Observações", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      values.value = Number(values.value || 0).toFixed(2);
      values.sessions = Number(values.sessions || 0);
      values.type = planTypeLabel(values.type);
      values.notes = values.notes || "";
      const current = editingPlanId ? state.plans.find((item) => item.id === editingPlanId) : {};
      const payload = { ...createEmptyPlan(), ...current, id: editingPlanId || uid("pl"), ...values, value: Number(values.value) };
      if (editingPlanId) state.plans = state.plans.map((item) => (item.id === editingPlanId ? payload : item));
      else state.plans.push(payload);
      editingPlanId = null;
      renderPlanOptions();
      renderEnrollmentOptions();
    },
  },
  enrollment: {
    title: "Matrícula",
    submit: "Salvar matrícula",
    fields: [
      { name: "studentId", label: "Aluno/Paciente", type: "student" },
      { name: "modalityId", label: "Modalidade", type: "modalityId" },
      { name: "planId", label: "Plano", type: "planId" },
      { name: "planType", label: "Tipo de plano", type: "select", options: ["Avulsa", "Pacote", "Mensal", "Trimestral", "Semestral"], value: "Mensal" },
      { name: "professionalId", label: "Profissional", type: "professionalOptional" },
      { name: "startDate", label: "Data da matrícula", type: "date", value: demoToday },
      { name: "endDate", label: "Data final", type: "date", value: "2026-12-31" },
      { name: "dueDay", label: "Dia do vencimento", type: "number", value: 10 },
      { name: "firstPaymentDate", label: "Data do 1º pagamento", type: "date", value: demoToday, required: false },
      { name: "registrationFee", label: "Taxa de matrícula", type: "number", value: 0, required: false },
      { name: "dueNotice", label: "Aviso de vencimento", type: "select", options: ["Sim", "Não"], value: "Sim" },
      { name: "sessionReminder", label: "Lembrete de sessão", type: "select", options: ["Sim", "Não"], value: "Sim" },
      { name: "monthlyValue", label: "Valor da mensalidade", type: "number", value: 0 },
      { name: "paymentMethod", label: "Forma de pagamento", type: "select", options: ["Pix", "Cartão de Débito", "Cartão de Crédito", "Boleto", "Dinheiro", "Transferência"], value: "Pix" },
      { name: "autoRenew", label: "Renovação automática", type: "select", options: ["Sim", "Não"], value: "Sim" },
      { name: "room", label: "Sala", type: "roomOptional", value: "", required: false },
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
      }, state.enrollments.length);
      if (editingEnrollmentId) {
        state.enrollments = state.enrollments.map((item) => (item.id === editingEnrollmentId ? normalized : item));
      } else {
        state.enrollments.push(normalized);
      }
      ensureEnrollmentFinancialTitles(normalized);
      ensureEnrollmentAppointments(normalized);
    },
  },
  payment: {
    title: "Nova cobrança",
    submit: "Salvar cobrança",
    fields: [
      { name: "studentId", label: "Aluno", type: "student" },
      { name: "description", label: "Descrição", type: "text", value: "Mensalidade" },
      { name: "dueDate", label: "Vencimento", type: "date", value: demoToday },
      { name: "amount", label: "Valor", type: "number", value: 300 },
      { name: "status", label: "Status", type: "select", options: ["Pendente", "Pago", "Atrasado"] },
    ],
    handler: (values) => state.payments.push({ id: uid("p"), ...values, amount: Number(values.amount) }),
  },
  account: {
    title: "Adicionar conta",
    submit: "Salvar conta",
    fields: [
      { name: "direction", label: "Pagar/Receber", type: "select", options: ["Pagar", "Receber"], value: "Pagar" },
      { name: "competenceDate", label: "Competência", type: "date", value: demoToday },
      { name: "forecastDate", label: "Previsão", type: "date", value: demoToday },
      { name: "amount", label: "Valor", type: "number", value: 0 },
      { name: "description", label: "Descrição", type: "text", value: "Nova conta" },
      { name: "person", label: "Paciente/Fornecedor", type: "text", value: "" },
      { name: "document", label: "CPF/CNPJ", type: "text", value: "" },
      { name: "chartAccountId", label: "Plano de contas", type: "chartAccount" },
      { name: "paymentMethod", label: "Forma de pagamento", type: "select", options: ["Pix", "Cartão de Débito", "Cartão de Crédito", "Boleto", "Transferência", "Dinheiro"], value: "Pix" },
    ],
    handler: (values) => {
      const current = editingAccountId ? state.accounts.find((item) => item.id === editingAccountId) : {};
      const currentSupplier = supplierById(current?.supplierId || values.supplierId);
      const supplierId = values.direction === "Pagar" ? upsertSupplierFromAccount(values.person, values.document) || current?.supplierId || "" : "";
      const supplier = supplierById(supplierId) || currentSupplier;
      const payload = {
        ...current,
        id: editingAccountId || uid("cp"),
        ...values,
        supplierId,
        person: values.person || supplier?.name || "",
        document: values.document || supplier?.document || "",
        amount: Number(values.amount || 0),
        originalAmount: Number(values.amount || 0),
        paidAmount: current?.paidAmount || 0,
        openAmount: Math.max(0, Number(values.amount || 0) - Number(current?.paidAmount || 0)),
        dueDate: values.forecastDate || current?.dueDate || values.competenceDate || demoToday,
        modalityId: current?.modalityId || "",
        teacherId: current?.teacherId || "",
        paidDate: current?.paidDate || "",
        linkedBankMovementId: current?.linkedBankMovementId || "",
        reconciliationStatus: current?.reconciliationStatus || "unreconciled",
      };
      payload.status = accountAutoStatus(payload);
      if (editingAccountId) state.accounts = state.accounts.map((item) => (item.id === editingAccountId ? payload : item));
      else state.accounts.push(payload);
      editingAccountId = null;
    },
  },
  accountSettlement: {
    title: "Baixar conta",
    submit: "Confirmar baixa",
    fields: [
      { name: "paidDate", label: "Pagamento", type: "date", value: demoToday },
      { name: "bankAccountId", label: "Banco", type: "bankAccount", value: "itau" },
      { name: "paidAmount", label: "Valor pago/recebido", type: "number", value: 0 },
      { name: "notes", label: "Observação", type: "textarea", value: "", required: false },
    ],
    handler: (values) => {
      const account = state.accounts.find((item) => item.id === settlingAccountId);
      if (!account) return;
      const originalAmount = accountOriginalAmount(account);
      const paymentValue = Number(values.paidAmount || accountOpenAmount(account) || originalAmount);
      account.paidDate = values.paidDate || demoToday;
      account.bankAccountId = values.bankAccountId || account.bankAccountId || "";
      account.paymentMethod = bankAccountLabel(account.bankAccountId) || account.paymentMethod || "";
      account.paidAmount = Math.min(originalAmount, accountPaidAmount(account) + paymentValue);
      account.openAmount = Math.max(0, originalAmount - account.paidAmount);
      account.reconciliationStatus = account.linkedBankMovementId ? "reconciled" : "manual";
      account.notes = values.notes || account.notes || "";
      account.status = accountAutoStatus(account);
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
      { name: "studentId", label: "Aluno", type: "student" },
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
    { name: "nature", label: "Natureza", type: "select", options: ["Receita", "Despesa", "Patrimonial", "Entrada", "Saida"], value: "Despesa" },
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

function normalizeState(data) {
  const normalized = {
    ...structuredClone(seedData),
    ...data,
    blocks: Array.isArray(data.blocks) ? data.blocks : structuredClone(seedData.blocks),
  };
  normalized.students = normalized.students.map((item, index) => normalizeStudent(normalizeTextFields(item), index));
  normalized.leads = (Array.isArray(data.leads) ? data.leads : structuredClone(seedData.leads)).map((item, index) => normalizeLead(normalizeTextFields(item), index));
  normalized.professionals = (Array.isArray(data.professionals) ? data.professionals : structuredClone(seedData.professionals)).map((item, index) => normalizeProfessional(normalizeTextFields(item), index));
  const savedSuppliers = Array.isArray(data.suppliers) ? data.suppliers : [];
  const savedSupplierKeys = new Set(savedSuppliers.map((item) => normalizedText(`${item.name ?? ""}-${item.document ?? ""}`)));
  const mergedSuppliers = savedSuppliers.length
    ? [...savedSuppliers, ...seedData.suppliers.filter((item) => !savedSupplierKeys.has(normalizedText(`${item.name}-${item.document}`)))]
    : structuredClone(seedData.suppliers);
  normalized.suppliers = mergedSuppliers.map((item, index) => normalizeSupplier(normalizeTextFields(item), index));
  normalized.modalities = (Array.isArray(data.modalities) ? data.modalities : structuredClone(seedData.modalities)).map((item, index) => normalizeModality(normalizeTextFields(item), index));
  const savedPlans = Array.isArray(data.plans) ? data.plans : [];
  const savedPlanNames = new Set(savedPlans.map((item) => normalizedText(item.name ?? "")));
  const mergedPlans = savedPlans.length
    ? [...savedPlans, ...seedData.plans.filter((item) => !savedPlanNames.has(normalizedText(item.name)))]
    : structuredClone(seedData.plans);
  normalized.plans = mergedPlans.map((item, index) => normalizePlan(normalizeTextFields(item), index));
  const savedEnrollments = Array.isArray(data.enrollments) ? data.enrollments : [];
  const savedEnrollmentKeys = new Set(savedEnrollments.map((item) => normalizedText(`${item.studentId ?? ""}-${item.planId ?? ""}-${item.startDate ?? ""}`)));
  const mergedEnrollments = savedEnrollments.length
    ? [...savedEnrollments, ...seedData.enrollments.filter((item) => !savedEnrollmentKeys.has(normalizedText(`${item.studentId}-${item.planId}-${item.startDate}`)))]
    : structuredClone(seedData.enrollments);
  normalized.enrollments = mergedEnrollments.map((item, index) => normalizeEnrollment(normalizeTextFields(item), index));
  const savedChartAccounts = Array.isArray(data.chartAccounts) ? data.chartAccounts : [];
  const savedChartCodes = new Set(savedChartAccounts.map((item) => String(item.code ?? "")));
  const mergedChartAccounts = savedChartAccounts.length
    ? [...savedChartAccounts, ...seedChartAccounts.filter((item) => !savedChartCodes.has(String(item.code)))]
    : structuredClone(seedChartAccounts);
  normalized.chartAccounts = mergedChartAccounts.map((item, index) => normalizeChartAccount(normalizeTextFields(item), index));
  const savedAccounts = Array.isArray(data.accounts) ? data.accounts : [];
  const savedAccountDescriptions = new Set(savedAccounts.map((item) => normalizedText(`${item.description ?? ""}-${item.person ?? ""}-${item.amount ?? ""}`)));
  const mergedAccounts = savedAccounts.length
    ? [
        ...savedAccounts,
        ...(hasImportedAccounts ? [] : seedAccounts.filter((item) => !savedAccountDescriptions.has(normalizedText(`${item.description}-${item.person}-${item.amount}`)))),
      ]
    : structuredClone(seedAccounts);
  normalized.accounts = mergedAccounts.map((item, index) => normalizeAccount(normalizeTextFields(item), index));
  normalized.accounts = normalized.accounts.map((item) => ({
    ...item,
    supplierId: item.supplierId || supplierIdByIdentityFromList(normalized.suppliers, item.person, item.document),
  }));
  const savedBankMovements = Array.isArray(data.bankMovements) ? data.bankMovements : [];
  const legacyOfxMovements = savedAccounts
    .filter((item) => item.origin === "Importação OFX" || item.origin === "ImportaÃ§Ã£o OFX")
    .map((item) => bankMovementFromAccount(item));
  const movementKeys = new Set(savedBankMovements.map((item) => item.ofxIdentifier || item.duplicateHash || item.id));
  normalized.bankMovements = [...savedBankMovements, ...legacyOfxMovements.filter((item) => !movementKeys.has(item.ofxIdentifier || item.duplicateHash || item.id))]
    .map((item, index) => normalizeBankMovement(normalizeTextFields(item), index));
  normalized.ofxBatches = (Array.isArray(data.ofxBatches) ? data.ofxBatches : []).map((item, index) => normalizeOfxBatch(normalizeTextFields(item), index));
  normalized.ofxDrafts = (Array.isArray(data.ofxDrafts) ? data.ofxDrafts : []).map((item, index) => normalizeOfxDraft(normalizeTextFields(item), index));
  normalized.ofxRules = (Array.isArray(data.ofxRules) && data.ofxRules.length ? data.ofxRules : structuredClone(seedOfxRules)).map((item, index) => normalizeOfxRule(normalizeTextFields(item), index));
  normalized.appointments = normalized.appointments.map((item) => normalizeTextFields(item));
  normalized.blocks = normalized.blocks.map((item) => normalizeTextFields(item));
  normalized.records = normalized.records.map((item) => normalizeTextFields(item));
  normalized.fiscalInvoices = (Array.isArray(data.fiscalInvoices) ? data.fiscalInvoices : structuredClone(seedData.fiscalInvoices)).map((item, index) => normalizeFiscalInvoice(normalizeTextFields(item), index));
  normalized.appointments = normalized.appointments.map((item) => normalizeAppointmentTeacher(item));
  normalized.blocks = normalized.blocks.map((item) => normalizeAppointmentTeacher(item));
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
    notes: "",
    ...item,
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

function normalizeLead(item, index) {
  const defaults = seedLeads[index % seedLeads.length] ?? seedLeads[0] ?? {};
  const legacyStatus = {
    "Primeiro contato": "Contato iniciado",
    "Sem resposta": "Contato iniciado",
    "Aula experimental agendada": "Visita agendada",
    "Aula experimental realizada": "Visita realizada",
    Fechado: "Matriculado",
  };
  const status = legacyStatus[item.status || defaults.status] || item.status || defaults.status || "Novo lead";
  return {
    id: item.id || defaults.id || uid("l"),
    name: item.name || defaults.name || "",
    phone: item.phone || defaults.phone || "",
    email: item.email || defaults.email || "",
    instagram: item.instagram || defaults.instagram || "",
    origin: item.origin || defaults.origin || "Outro",
    entryChannel: item.entryChannel || item.channel || defaults.entryChannel || defaults.channel || item.origin || "WhatsApp",
    initialMessage: item.initialMessage || item.message || defaults.initialMessage || defaults.message || "",
    interest: item.interest || defaults.interest || "Pilates",
    status,
    ownerId: item.ownerId || defaults.ownerId || "",
    entryDate: item.entryDate || defaults.entryDate || item.firstContactDate || defaults.firstContactDate || demoToday,
    visitDate: item.visitDate || defaults.visitDate || "",
    firstContactDate: item.firstContactDate || defaults.firstContactDate || demoToday,
    nextFollowUpDate: item.nextFollowUpDate || defaults.nextFollowUpDate || demoToday,
    lossReason: item.lossReason || defaults.lossReason || "",
    notes: item.notes || defaults.notes || "",
    history: item.history || defaults.history || "",
    linkedStudentId: item.linkedStudentId || defaults.linkedStudentId || "",
    linkedAppointmentId: item.linkedAppointmentId || defaults.linkedAppointmentId || "",
  };
}

function normalizeSupplier(item, index) {
  const defaults = seedSuppliers[index % seedSuppliers.length] ?? {};
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
    notes: "",
    ...item,
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
  return {
    id: item.id || defaults.id || uid("pl"),
    name: defaults.name,
    modalityId: defaults.modalityId,
    type: defaults.type,
    value: defaults.value,
    sessions: defaults.sessions,
    status: "Ativo",
    notes: "",
    ...cleanItem,
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
    financialNotes: defaults.financialNotes || "",
    contractTemplate: defaults.contractTemplate || "Contrato de matrícula",
    lockStartDate: defaults.lockStartDate || "",
    lockEndDate: defaults.lockEndDate || "",
    financialTitlesGenerated: Boolean(defaults.financialTitlesGenerated),
    notes: "",
    ...item,
    planType: planTypeLabel(item.planType ?? defaults.planType ?? plan?.type ?? "Mensal"),
    monthlyValue: Number(item.monthlyValue ?? defaults.monthlyValue ?? plan?.value ?? 0),
    dueDay: Number(item.dueDay ?? defaults.dueDay ?? 0),
    registrationFee: Number(item.registrationFee ?? defaults.registrationFee ?? 0),
    sessions: Number(item.sessions ?? defaults.sessions ?? plan?.sessions ?? 0),
    financialTitlesGenerated: Boolean(item.financialTitlesGenerated ?? defaults.financialTitlesGenerated),
  };
}

function normalizeChartAccount(item, index) {
  const defaults = seedChartAccounts.find((account) => account.code === item.code) ?? seedChartAccounts[index % seedChartAccounts.length] ?? seedChartAccounts[0];
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

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
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

function weekDays() {
  return [0, 1, 2, 3, 4].map((offset) => addDays(currentWeekStart, offset));
}

function currency(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function dateLabel(value) {
  if (!value || value === "-") return "-";
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
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

function revenueChartAccountForModality(modalityId = "") {
  const modality = modalityName(modalityId);
  const modalityTerm = normalizedText(modality);
  return (
    state.chartAccounts.find((item) => item.nature === "Receita" && modalityTerm && normalizedText(item.name).includes(modalityTerm)) ||
    state.chartAccounts.find((item) => item.nature === "Receita") ||
    state.chartAccounts[0]
  );
}

function addMonthsToIsoDate(value, months) {
  const date = parseLocalDate(value);
  date.setMonth(date.getMonth() + months);
  return isoDate(date);
}

function ensureEnrollmentFinancialTitles(enrollment) {
  if (!enrollment?.id || state.accounts.some((item) => item.enrollmentId === enrollment.id)) {
    enrollment.financialTitlesGenerated = state.accounts.some((item) => item.enrollmentId === enrollment.id);
    return;
  }
  const relatedStudent = student(enrollment.studentId);
  const plan = state.plans.find((item) => item.id === enrollment.planId);
  const chartAccount = revenueChartAccountForModality(enrollment.modalityId);
  const planType = planTypeLabel(enrollment.planType || plan?.type);
  const installments = planType === "Trimestral" ? 3 : planType === "Semestral" ? 6 : 1;
  const firstDate = enrollment.firstPaymentDate || enrollment.startDate || demoToday;
  const titles = [];
  for (let index = 0; index < installments; index += 1) {
    const dueDate = addMonthsToIsoDate(firstDate, index);
    const amount = Number(enrollment.monthlyValue || plan?.value || 0);
    if (!amount) continue;
    titles.push(normalizeAccount({
      id: uid("cp"),
      direction: "Receber",
      status: "Aberto",
      competenceDate: addMonthsToIsoDate(enrollment.startDate || firstDate, index),
      forecastDate: dueDate,
      dueDate,
      paidDate: "",
      amount,
      originalAmount: amount,
      paidAmount: 0,
      openAmount: amount,
      description: `Mensalidade: ${displayName(relatedStudent?.name || "Aluno")}`,
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
      competenceDate: enrollment.startDate || firstDate,
      forecastDate: firstDate,
      dueDate: firstDate,
      paidDate: "",
      amount: registrationFee,
      originalAmount: registrationFee,
      paidAmount: 0,
      openAmount: registrationFee,
      description: `Taxa de matrícula: ${displayName(relatedStudent?.name || "Aluno")}`,
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

function ensureEnrollmentAppointments(enrollment) {
  if (!enrollment?.id) return;
  state.appointments = state.appointments.filter((item) => item.enrollmentId !== enrollment.id);
  if (enrollment.status === "Cancelada") return;
  const dayFields = [
    ["mondayTime", 1],
    ["tuesdayTime", 2],
    ["wednesdayTime", 3],
    ["thursdayTime", 4],
    ["fridayTime", 5],
  ];
  const selectedDays = dayFields.filter(([field]) => enrollment[field]);
  if (!selectedDays.length || !enrollment.startDate || !enrollment.endDate) return;
  const endLimit = parseLocalDate(enrollment.endDate).getTime();
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
  return student(id)?.name ?? "Aluno removido";
}

function professional(id) {
  return state.professionals.find((item) => item.id === id);
}

function professionalName(id) {
  if (id === "all") return "Todos";
  return professional(id)?.name ?? "Profissional removido";
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
  return state.chartAccounts.filter((item) => item.status === "Ativo");
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

function normalizedText(value = "") {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
  const room = selectedValue("roomFilter");
  const teacher = selectedValue("teacherFilter");

  return state.appointments.filter((item) => {
    const relatedStudent = student(item.studentId);
    const searchable = normalizedText(`${relatedStudent?.name ?? ""} ${relatedStudent?.email ?? ""} ${professionalName(item.teacherId)} ${item.room} ${item.type}`);
    return (
      (!term || searchable.includes(term)) &&
      (modality === "all" || item.type === modality || normalizedText(item.type).includes(modalityTerm)) &&
      (session === "all" || item.sessionKind === session) &&
      (status === "all" || item.status === status) &&
      (room === "all" || item.room === room) &&
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
  document.querySelectorAll("[data-plan-select]").forEach((select) => {
    const selected = select.value || activePlans()[0]?.name || "";
    const fallbackPlans = ["Mensal 2x semana", "Mensal livre", "Fisioterapia", "Experimental", "Aula avulsa"];
    const options = activePlans().length ?activePlans().map((item) => item.name) : fallbackPlans;
    select.innerHTML = options.map((name) => `<option>${name}</option>`).join("");
    select.value = options.includes(selected) ?selected : options[0] || "";
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
  const roomFilter = document.querySelector("#enrollmentRoomFilter");
  if (roomFilter) {
    const rooms = [...new Set(state.enrollments.map((item) => item.room).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    const selected = roomFilter.value || "all";
    roomFilter.innerHTML = `<option value="all">Sala</option>${rooms.map((room) => `<option value="${room}">${room}</option>`).join("")}`;
    roomFilter.value = selected === "all" || rooms.includes(selected) ?selected : "all";
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
}

function renderAccountOptions() {
  Object.values(accountViewConfigs).forEach((config) => {
    const modalityFilter = document.querySelector(`#${config.modalityId}`);
    if (modalityFilter) {
      const selected = modalityFilter.value || "all";
      modalityFilter.innerHTML = `<option value="all">Modalidades</option>${activeModalities().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
      modalityFilter.value = selected === "all" || activeModalities().some((item) => item.id === selected) ? selected : "all";
    }
    const professionalFilter = document.querySelector(`#${config.professionalId}`);
    if (professionalFilter) {
      const selected = professionalFilter.value || "all";
      professionalFilter.innerHTML = `<option value="all">Professor</option>${activeProfessionals().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
      professionalFilter.value = selected === "all" || activeProfessionals().some((item) => item.id === selected) ? selected : "all";
    }
    const chartFilter = document.querySelector(`#${config.chartId}`);
    if (chartFilter) {
      const selected = chartFilter.value || "all";
      chartFilter.innerHTML = `<option value="all">Plano de contas</option>${activeChartAccounts().map((item) => `<option value="${item.id}">${item.code} - ${item.name}</option>`).join("")}`;
      chartFilter.value = selected === "all" || activeChartAccounts().some((item) => item.id === selected) ? selected : "all";
    }
    const supplierFilter = document.querySelector(`#${config.supplierId}`);
    if (supplierFilter) {
      const selected = supplierFilter.value || "all";
      supplierFilter.innerHTML = `<option value="all">Fornecedores</option>${activeSuppliers().map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
      supplierFilter.value = selected === "all" || activeSuppliers().some((item) => item.id === selected) ? selected : "all";
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
  const confirmedRate = todayClasses.length ?Math.round((todayClasses.filter((item) => ["Confirmada", "Concluída", "Compareceu"].includes(item.status)).length / todayClasses.length) * 100) : 0;
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

  document.querySelector("#todayTimeline").innerHTML = todayClasses
    .sort((a, b) => a.time.localeCompare(b.time))
    .map(
      (item) => `
        <article class="timeline-item">
          <span class="time-pill">${item.time}</span>
          <div>
            <strong>${studentName(item.studentId)}</strong>
            <div class="meta">${item.type} com ${professionalName(item.teacherId)} · ${item.room}</div>
          </div>
          <span class="status-pill ${statusClass(item.status)}">${item.status}</span>
        </article>
      `,
    )
    .join("");

  const alerts = [
    ...state.payments.filter((item) => item.status === "Atrasado").map((item) => `${studentName(item.studentId)} possui cobrança atrasada de ${currency(item.amount)}.`),
    ...state.appointments.filter((item) => item.status === "Aguardando").map((item) => `${studentName(item.studentId)} ainda precisa confirmar a aula de ${dateLabel(item.date)}.`),
  ];
  document.querySelector("#alertsList").innerHTML = alerts.length ?alerts.map((alert) => `<div class="alert-item">${alert}</div>`).join("") : `<div class="empty-state">Sem pendências críticas agora.</div>`;

  document.querySelector("#dashboardFinanceSummary").innerHTML = `
    <article class="summary-item"><span>A receber vencido</span><strong>${currency(receivableOverdue)}</strong></article>
    <article class="summary-item"><span>A pagar vencido</span><strong>${currency(payableOverdue)}</strong></article>
    <article class="summary-item"><span>Saldo previsto mês</span><strong>${currency(predictedMonthBalance)}</strong></article>
    <article class="summary-item"><span>Saldo realizado mês</span><strong>${currency(realizedMonthBalance)}</strong></article>
    <article class="summary-item"><span>OFX não conciliado</span><strong>${unreconciledMovements}</strong></article>
  `;

  const modalityRows = activeModalities()
    .map((modality) => ({
      name: modality.name,
      count: state.appointments.filter((item) => normalizedText(item.type).includes(normalizedText(modality.name))).length,
      plans: state.plans.filter((plan) => plan.modalityId === modality.id && plan.status === "Ativo").length,
    }))
    .sort((a, b) => b.count - a.count);
  document.querySelector("#modalitySummaryList").innerHTML = modalityRows.length
    ?modalityRows
        .map(
          (item) => `
            <article class="dashboard-list-item">
              <div>
                <strong>${item.name}</strong>
                <span>${item.plans} planos ativos vinculados</span>
              </div>
              <span class="status-pill ativo">${item.count} aulas</span>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">Nenhuma modalidade ativa cadastrada.</div>`;
}

function renderCrm() {
  const table = document.querySelector("#leadsTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#leadSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#leadStatusFilter")?.value ?? "all";
  const ownerFilter = document.querySelector("#leadOwnerFilter")?.value ?? "all";
  const originFilter = document.querySelector("#leadOriginFilter")?.value ?? "all";
  const leads = state.leads
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => ownerFilter === "all" || item.ownerId === ownerFilter)
    .filter((item) => originFilter === "all" || item.origin === originFilter || item.entryChannel === originFilter)
    .filter((item) => !term || normalizedText([item.name, item.phone, item.email, item.instagram, item.origin, item.entryChannel, item.interest, item.status, item.initialMessage, item.notes].join(" ")).includes(term))
    .sort((a, b) => dateValue(a.nextFollowUpDate) - dateValue(b.nextFollowUpDate));

  document.querySelector("#crmFunnel").innerHTML = leadStatuses
    .map((status) => {
      const count = state.leads.filter((item) => item.status === status).length;
      return `<article class="crm-stage"><strong>${count}</strong><span>${status}</span></article>`;
    })
    .join("");

  table.innerHTML = leads.length
    ? leads
        .map(
          (lead) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button lead-action-button edit-icon-button" data-edit-lead="${lead.id}" type="button" title="Editar lead" aria-label="Editar lead"><span class="lead-action-icon lead-action-edit" aria-hidden="true"></span></button>
                  <button class="row-action-button lead-action-button edit-icon-button" data-schedule-lead="${lead.id}" type="button" title="Agendar visita" aria-label="Agendar visita"><span class="lead-action-icon lead-action-calendar" aria-hidden="true"></span></button>
                  <button class="row-action-button lead-action-button edit-icon-button" data-convert-lead="${lead.id}" type="button" title="Converter em aluno" aria-label="Converter em aluno"><span class="lead-action-icon lead-action-check" aria-hidden="true"></span></button>
                  <button class="row-action-button delete-icon-button" data-delete-lead="${lead.id}" type="button" title="Excluir lead" aria-label="Excluir lead">&times;</button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${lead.name.toUpperCase()}</strong><span>${lead.phone || "-"} · ${lead.email || lead.instagram || "-"}</span></div></td>
              <td>${lead.entryChannel || "-"}</td>
              <td>${lead.origin}</td>
              <td>${lead.interest}</td>
              <td><span class="status-pill ${leadStatusClass(lead.status)}">${lead.status}</span></td>
              <td>${professionalName(lead.ownerId)}</td>
              <td>${dateLabel(lead.entryDate)}${lead.visitDate ? ` / ${dateLabel(lead.visitDate)}` : ""}</td>
              <td>${lead.lossReason || "-"}</td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="9"><div class="empty-state">Nenhum lead encontrado.</div></td></tr>`;

}

function leadStatusClass(status) {
  if (status === "Matriculado") return "ativo";
  if (status === "Perdido") return "atrasado";
  if (["Visita agendada", "Visita realizada", "Proposta enviada"].includes(status)) return "pendente";
  return "aguardando";
}

function scheduleLead(leadId) {
  const lead = state.leads.find((item) => item.id === leadId);
  if (!lead) return;
  const student = state.students.find((item) => normalizedText(item.name) === normalizedText(lead.name));
  const studentId = student?.id || uid("s");
  if (!student) {
    state.students.push(normalizeStudent({
      id: studentId,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      plan: "Experimental",
      status: "Ativo",
      membership: "Avulsa",
      origin: lead.origin,
      registrationDate: demoToday,
      commercialNotes: lead.notes,
    }, state.students.length));
  }
  const appointment = {
    id: uid("a"),
    date: lead.nextFollowUpDate || demoToday,
    time: "09:00",
    endTime: "10:00",
    studentId,
    teacherId: lead.ownerId || activeProfessionals()[0]?.id || "",
    room: "Sala Reformer",
    type: lead.interest === "Outro" ? "Pilates" : lead.interest,
    status: "Aguardando",
    sessionKind: "Experimental",
  };
  state.appointments.push(appointment);
  lead.status = "Visita agendada";
  lead.visitDate = appointment.date;
  lead.linkedStudentId = studentId;
  lead.linkedAppointmentId = appointment.id;
  lead.history = `${lead.history || ""}\nExperimental agendada para ${dateLabel(appointment.date)} às ${appointment.time}.`.trim();
  saveState();
  render();
  toast("Visita agendada a partir da Central de Leads.");
}

function convertLead(leadId) {
  const lead = state.leads.find((item) => item.id === leadId);
  if (!lead) return;
  let student = state.students.find((item) => item.id === lead.linkedStudentId || normalizedText(item.name) === normalizedText(lead.name));
  if (!student) {
    student = normalizeStudent({
      id: uid("s"),
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      plan: lead.interest,
      status: "Ativo",
      membership: "Matriculado",
      origin: lead.origin,
      registrationDate: demoToday,
      commercialNotes: lead.notes,
    }, state.students.length);
    state.students.push(student);
  } else {
    student.status = "Ativo";
    student.membership = "Matriculado";
    student.plan = lead.interest;
  }
  lead.status = "Matriculado";
  lead.linkedStudentId = student.id;
  lead.history = `${lead.history || ""}\nLead convertido em paciente em ${dateLabel(demoToday)}.`.trim();
  saveState();
  render();
  toast("Lead convertido em paciente.");
}

function deleteLead(leadId) {
  state.leads = state.leads.filter((item) => item.id !== leadId);
  saveState();
  renderCrm();
  toast("Lead excluído.");
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

function renderCalendarEvent(item) {
  const relatedStudent = student(item.studentId);
  const relatedProfessional = professional(item.teacherId);
  return `
    <article class="calendar-event ${statusClass(item.status)}" style="${relatedProfessional?.color ?`background:${relatedProfessional.color}` : ""}" data-action="reschedule" data-id="${item.id}" title="Editar/remarcar ${item.type} - ${studentName(item.studentId)}">
      <span>${item.time} - ${item.endTime}</span>
      <strong>${studentName(item.studentId).toUpperCase()}</strong>
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
            <th>Aluno/Paciente</th>
            <th>Modalidade</th>
            <th>Profissional</th>
            <th>Sala</th>
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
                  <td>${item.room}</td>
                  <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
                  <td>
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

function renderStudents() {
  const term = normalizedText(document.querySelector("#studentSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#studentStatusFilter")?.value ?? "all";
  const list = state.students
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => normalizedText([item.name, item.phone, item.email, item.plan, item.status, item.cpf, item.responsible].join(" ")).includes(term))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  document.querySelector("#studentsTable").innerHTML = list.length
    ?list
        .map(
          (item) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-student="${item.id}" type="button" title="Editar paciente" aria-label="Editar paciente">✎</button>
                  <button class="row-action-button delete-icon-button" data-delete-student="${item.id}" type="button" title="Excluir paciente" aria-label="Excluir paciente">×</button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${item.plan}</span></div></td>
              <td><span class="status-pill ${statusClass(item.membership)}">${item.membership}</span></td>
              <td><div class="patient-contact"><span>${item.email || "-"}</span><a href="tel:${item.phone}">${item.phone}</a></div></td>
              <td>${maskedCpf(item.cpf)}</td>
              <td>${dateLabel(item.birthDate)} ${item.birthDate ?`[${ageFromDate(item.birthDate)}]` : ""} ${item.gender === "Masculino" || item.gender === "M" ?"Masculino" : "Feminino"}</td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="6"><div class="empty-state">Nenhum paciente encontrado.</div></td></tr>`;
}

function renderEnrollments() {
  const table = document.querySelector("#enrollmentsTable");
  if (!table) return;
  const term = normalizedText(document.querySelector("#enrollmentSearch")?.value.trim() ?? "");
  const statusFilter = document.querySelector("#enrollmentStatusFilter")?.value ?? "activeAndExpired";
  const modalityFilter = document.querySelector("#enrollmentModalityFilter")?.value ?? "all";
  const professionalFilter = document.querySelector("#enrollmentProfessionalFilter")?.value ?? "all";
  const roomFilter = document.querySelector("#enrollmentRoomFilter")?.value ?? "all";
  const typeFilter = document.querySelector("#enrollmentPlanTypeFilter")?.value ?? "all";
  const list = state.enrollments
    .filter((item) => statusFilter === "all" || (statusFilter === "activeAndExpired" ?["Ativa", "Vencida"].includes(item.status) : item.status === statusFilter))
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => professionalFilter === "all" || item.professionalId === professionalFilter)
    .filter((item) => roomFilter === "all" || item.room === roomFilter)
    .filter((item) => typeFilter === "all" || planTypeLabel(item.planType || planById(item.planId)?.type) === planTypeLabel(typeFilter))
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
          (item) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-enrollment="${item.id}" type="button" title="Editar matrícula" aria-label="Editar matrícula">&#9998;</button>
                  <button class="row-action-button delete-icon-button" data-delete-enrollment="${item.id}" type="button" title="Excluir matrícula" aria-label="Excluir matrícula">&times;</button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(studentName(item.studentId))}</strong></div></td>
              <td>${professionalName(item.professionalId)}</td>
              <td><strong>${modalityName(item.modalityId)}</strong><br><small>${item.room || "-"}</small></td>
              <td>${dateLabel(item.startDate)}</td>
              <td>${item.dueDay || "-"}</td>
              <td><strong>${currency(Number(item.monthlyValue || 0))}</strong></td>
              <td><div class="patient-name"><strong>${displayName(planName(item.planId))}</strong><span>${planTypeLabel(item.planType || planById(item.planId)?.type)}</span></div></td>
              <td>${item.contractStatus || "-"}</td>
              <td>${item.sessions || "-"}</td>
              <td><span class="status-pill ${state.accounts.some((account) => account.enrollmentId === item.id) || item.financialTitlesGenerated ? "ativo" : "pendente"}">${state.accounts.some((account) => account.enrollmentId === item.id) || item.financialTitlesGenerated ? "Gerado" : "Pendente"}</span></td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
            </tr>
          `,
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
                  <button class="row-action-button edit-icon-button" data-edit-professional="${item.id}" type="button" title="Editar profissional" aria-label="Editar profissional">✎</button>
                  <button class="row-action-button delete-icon-button" data-delete-professional="${item.id}" type="button" title="Excluir profissional" aria-label="Excluir profissional">×</button>
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
                <button class="row-action-button edit-icon-button" data-edit-supplier="${item.id}" type="button" title="Editar fornecedor" aria-label="Editar fornecedor">✎</button>
                <button class="row-action-button delete-icon-button" data-delete-supplier="${item.id}" type="button" title="Excluir fornecedor" aria-label="Excluir fornecedor">&times;</button>
              </div>
            </td>
            <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${(item.email || item.phone || item.notes || "").replace("Importado da aba BD_Physiofit", "Importação Manual")}</span></div></td>
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
                  <button class="row-action-button edit-icon-button" data-edit-modality="${item.id}" type="button" title="Editar modalidade" aria-label="Editar modalidade">✎</button>
                  <button class="row-action-button delete-icon-button" data-delete-modality="${item.id}" type="button" title="Excluir modalidade" aria-label="Excluir modalidade">×</button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${item.notes || ""}</span></div></td>
              <td>${dateTimeLabel(item.createdAt)}</td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="4"><div class="empty-state">Nenhuma modalidade encontrada.</div></td></tr>`;
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
  const list = state.plans
    .filter((item) => statusFilter === "all" || item.status === statusFilter)
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => typeFilter === "all" || planTypeLabel(item.type) === planTypeLabel(typeFilter))
    .filter((item) => normalizedText([item.name, modalityName(item.modalityId), item.type, item.status, item.notes].join(" ")).includes(term))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  table.innerHTML = list.length
    ?list
        .map(
          (item) => `
            <tr>
              <td>
                <div class="row-actions">
                  <button class="row-action-button edit-icon-button" data-edit-plan="${item.id}" type="button" title="Editar plano" aria-label="Editar plano">✎</button>
                  <button class="row-action-button delete-icon-button" data-delete-plan="${item.id}" type="button" title="Excluir plano" aria-label="Excluir plano">×</button>
                </div>
              </td>
              <td><div class="patient-name"><strong>${displayName(item.name)}</strong><span>${item.sessions ?`${item.sessions} sessões inclusas` : "Plano livre"}</span></div></td>
              <td>${displayName(modalityName(item.modalityId))}</td>
              <td>${planTypeLabel(item.type)}</td>
              <td><strong>${currency(Number(item.value || 0))}</strong></td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="6"><div class="empty-state">Nenhum plano encontrado.</div></td></tr>`;
}

function openPlanEditor(planId = null) {
  editingPlanId = planId;
  const item = planId ?state.plans.find((planItem) => planItem.id === planId) : createEmptyPlan();
  if (!item) return;
  openModal("plan", { ...item, type: planTypeLabel(item.type), value: Number(item.value || 0).toFixed(2), notes: planId ? item.notes || "" : "" });
  document.querySelector("#modalTitle").textContent = planId ? `Editar ${displayName(item.name)}` : "Novo plano";
}

function createEmptyPlan() {
  return {
    id: "",
    name: "",
    modalityId: activeModalities()[0]?.id || "",
    type: "Mensal",
    value: 0,
    sessions: 0,
    status: "Ativo",
    notes: "",
  };
}

function fillPlanEditor(item) {
  const form = document.querySelector("#planEditorForm");
  renderModalityOptions();
  Object.entries(createEmptyPlan()).forEach(([key, defaultValue]) => {
    if (form.elements[key]) form.elements[key].value = item[key] ?? defaultValue;
  });
  if (form.elements.type) form.elements.type.value = planTypeLabel(item.type);
}

function savePlanEditor() {
  const form = document.querySelector("#planEditorForm");
  const values = Object.fromEntries(new FormData(form).entries());
  values.value = Number(values.value || 0);
  values.sessions = Number(values.sessions || 0);
  values.type = planTypeLabel(values.type);
  values.notes = values.notes || "";
  if (editingPlanId) {
    state.plans = state.plans.map((item) => (item.id === editingPlanId ?{ ...item, ...values } : item));
  } else {
    state.plans.push({ ...createEmptyPlan(), ...values, id: uid("pl") });
  }
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
      const amount = Number(payment?.amount ?? enrollment.monthlyValue ?? plan?.value ?? 0);
      const method = paid ? enrollment.paymentMethod || paymentMethods[index % 3] : courtesy ? "Cortesia" : status;
      return {
        id: `m${enrollment.id}`,
        studentId: enrollment.studentId,
        patient: studentItem.name ?? "Aluno removido",
        dueDate: `2026-05-${dueDay}`,
        status,
        method,
        modalityId: enrollment.modalityId || plan?.modalityId || "",
        teacherId: enrollment.professionalId || activeProfessionals()[index % Math.max(1, activeProfessionals().length)]?.id || "",
        membershipDate: enrollment.startDate || studentItem.registrationDate || `2026-05-${dueDay}`,
        paymentDate: paid || courtesy ? `2026-05-${String(Math.max(1, Number(dueDay) - (index % 4))).padStart(2, "0")}` : "",
        invoiceCode: paid || courtesy ? `[001.${320 + index}]` : "",
        amount,
        received: paid ? amount : 0,
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
  const rows = monthlyRows()
    .filter((item) => !term || normalizedText(item.patient).includes(term))
    .filter((item) => paidFilter === "all" || item.status === paidFilter)
    .filter((item) => membershipFilter === "all" || item.active === membershipFilter)
    .filter((item) => modalityFilter === "all" || item.modalityId === modalityFilter)
    .filter((item) => receiptFilter === "all" || item.method === receiptFilter)
    .filter((item) => invoiceFilter === "all" || (invoiceFilter === "Com nota" ? Boolean(invoiceByMonthlyId(item.id)) : !invoiceByMonthlyId(item.id)))
    .filter((item) => teacherFilter === "all" || item.teacherId === teacherFilter)
    .filter((item) => externalFilter === "all" || item.external === externalFilter)
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
              <td><strong>${currency(item.received)}</strong></td>
            </tr>
          `,
        )
        .join("")
    : `<tr><td colspan="8"><div class="empty-state">Nenhuma mensalidade encontrada.</div></td></tr>`;
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
            <button class="row-action-button edit-icon-button" data-issue-invoice="${item.monthlyId}" type="button" title="Emitir ou reenviar NFS-e" aria-label="Emitir ou reenviar NFS-e">NF</button>
            <button class="row-action-button delete-icon-button" data-cancel-invoice="${item.monthlyId}" type="button" title="Cancelar NFS-e" aria-label="Cancelar NFS-e">&times;</button>
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
  toast(invoice.status === "Autorizada" ? "NFS-e autorizada." : "NFS-e rejeitada: revise os dados do aluno.");
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
    searchId: "payableAccountSearch",
    periodTypeId: "payableAccountPeriodType",
    dateRangeId: "payableAccountDateRange",
    monthId: "payableAccountMonthFilter",
    statusId: "payableAccountStatusFilter",
    reconciliationId: "payableAccountReconciliationFilter",
    modalityId: "payableAccountModalityFilter",
    professionalId: "payableAccountProfessionalFilter",
    chartId: "payableAccountChartFilter",
    supplierId: "payableAccountSupplierFilter",
    emptyMessage: "Nenhuma conta a pagar encontrada.",
  },
  receivable: {
    direction: "Receber",
    tableId: "receivableAccountsTable",
    searchId: "receivableAccountSearch",
    periodTypeId: "receivableAccountPeriodType",
    dateRangeId: "receivableAccountDateRange",
    monthId: "receivableAccountMonthFilter",
    statusId: "receivableAccountStatusFilter",
    reconciliationId: "receivableAccountReconciliationFilter",
    modalityId: "receivableAccountModalityFilter",
    professionalId: "receivableAccountProfessionalFilter",
    chartId: "receivableAccountChartFilter",
    supplierId: "receivableAccountSupplierFilter",
    emptyMessage: "Nenhuma conta a receber encontrada.",
  },
};

function accountRows(config) {
  const term = normalizedText(document.querySelector(`#${config.searchId}`)?.value.trim() ?? "");
  const status = document.querySelector(`#${config.statusId}`)?.value ?? "all";
  const reconciliation = document.querySelector(`#${config.reconciliationId}`)?.value ?? "all";
  const chartAccount = document.querySelector(`#${config.chartId}`)?.value ?? "all";
  const supplier = document.querySelector(`#${config.supplierId}`)?.value ?? "all";
  return state.accounts
    .filter((item) => !term || normalizedText(`${item.description} ${supplierName(item.supplierId)} ${item.person} ${item.document} ${item.bankLaunch ?? ""}`).includes(term))
    .filter((item) => item.origin !== "Importação OFX" && item.origin !== "ImportaÃ§Ã£o OFX")
    .filter((item) => item.direction === config.direction)
    .filter((item) => {
      if (status === "all") return true;
      if (status === "Aberto") return accountOpenAmount(item) > 0 && item.status !== "Cancelado";
      if (status === "Atrasado") return isAccountOverdue(item);
      return accountAutoStatus(item) === status;
    })
    .filter((item) => reconciliation === "all" || (item.reconciliationStatus || "unreconciled") === reconciliation)
    .filter((item) => chartAccount === "all" || item.chartAccountId === chartAccount)
    .filter((item) => supplier === "all" || item.supplierId === supplier)
    .sort((a, b) => (accountExpectedDate(a) || "").localeCompare(accountExpectedDate(b) || ""));
}

function renderAccountTable(config) {
  const table = document.querySelector(`#${config.tableId}`);
  if (!table) return;
  const rows = accountRows(config);
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
          return `
            <tr>
              <td><span class="monthly-status-button ${statusStyle}">${statusLabel}</span></td>
              <td>${dateLabel(item.competenceDate)}</td>
              <td>${dateLabel(item.forecastDate)}</td>
              <td>${item.paidDate ? dateLabel(item.paidDate) : "-"}</td>
              <td><strong class="${item.direction === "Receber" ? "amount-in" : "amount-out"}">${item.direction === "Receber" ? "" : "-"}${currency(item.amount)}</strong></td>
              <td><strong>${item.description}</strong><br><small>${item.bankLaunch ?? item.paymentMethod ?? ""}</small></td>
              <td><span class="source-pill ${sourceClass}">${sourceLabel}</span></td>
              <td>${supplierName(item.supplierId) || item.person || "-"}<br><small>${item.document || supplierById(item.supplierId)?.document || ""}</small></td>
              <td>${chartAccountName(item.chartAccountId)}<br><small>${state.chartAccounts.find((account) => account.id === item.chartAccountId)?.dfcGroup ?? ""}</small></td>
              <td class="row-actions">
                <button class="row-action-button edit-icon-button" data-edit-account="${item.id}" type="button" title="Editar" aria-label="Editar conta">✎</button>
                <button class="row-action-button settle-icon-button" data-settle-account="${item.id}" type="button" title="Baixar" aria-label="Baixar conta">$</button>
                <button class="row-action-button delete-icon-button" data-delete-account="${item.id}" type="button" title="Excluir" aria-label="Excluir conta">&times;</button>
              </td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="10"><div class="empty-state">${config.emptyMessage}</div></td></tr>`;
}

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
      const valueScore = Math.abs(accountOpenAmount(account) - movementAmount) < 0.01 ? 60 : 0;
      const dateScore = Math.abs(daysBetween(accountExpectedDate(account), movement.date)) <= 5 ? 20 : 0;
      const accountText = normalizedText(`${account.person} ${supplierName(account.supplierId)} ${account.description}`);
      const textScore = accountText && movementText.split(/\s+/).some((word) => word.length > 3 && accountText.includes(word)) ? 20 : 0;
      return { account, score: valueScore + dateScore + textScore };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((item) => item.account);
}

function reconciliationRows() {
  const term = normalizedText(document.querySelector("#bankReconciliationSearch")?.value.trim() || "");
  const status = document.querySelector("#bankReconciliationStatusFilter")?.value || "unreconciled";
  const type = document.querySelector("#bankReconciliationTypeFilter")?.value || "all";
  const accountId = document.querySelector("#bankReconciliationAccountFilter")?.value || "all";
  return state.bankMovements
    .filter((movement) => status === "all" || movement.reconciliationStatus === status)
    .filter((movement) => type === "all" || (type === "receivable" ? Number(movement.amount || 0) >= 0 : Number(movement.amount || 0) < 0))
    .filter((movement) => accountId === "all" || movement.bankAccountId === accountId)
    .filter((movement) => !term || normalizedText(`${movement.description} ${movement.bankName} ${movement.notes}`).includes(term))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function renderBankReconciliation() {
  const summary = document.querySelector("#bankReconciliationSummary");
  const table = document.querySelector("#bankReconciliationTable");
  if (!summary || !table) return;
  const rows = reconciliationRows();
  const unreconciled = state.bankMovements.filter((item) => item.reconciliationStatus === "unreconciled").length;
  const reconciled = state.bankMovements.filter((item) => item.reconciliationStatus === "reconciled").length;
  const ignored = state.bankMovements.filter((item) => item.reconciliationStatus === "ignored").length;
  summary.innerHTML = `
    <article class="summary-item"><span>Não conciliados</span><strong>${unreconciled}</strong><small>Movimentos pendentes de vínculo</small></article>
    <article class="summary-item"><span>Conciliados</span><strong>${reconciled}</strong><small>Baixas vinculadas a títulos</small></article>
    <article class="summary-item"><span>Ignorados</span><strong>${ignored}</strong><small>Movimentos fora do financeiro</small></article>
  `;
  table.innerHTML = rows.length
    ? rows.map((movement) => {
        const suggestions = compatibleTitlesForMovement(movement);
        const selectedId = movement.linkedFinancialTitleId || suggestions[0]?.id || "";
        const locked = movement.reconciliationStatus !== "unreconciled" ? "disabled" : "";
        const titleOptions = suggestions.length
          ? suggestions.map((account) => `<option value="${account.id}" ${account.id === selectedId ? "selected" : ""}>${account.person || supplierName(account.supplierId) || account.description} · ${currency(accountOpenAmount(account))} · ${dateLabel(accountExpectedDate(account))}</option>`).join("")
          : `<option value="">Nenhum título sugerido</option>`;
        return `
          <tr>
            <td>${dateLabel(movement.date)}</td>
            <td><strong>${movement.description}</strong><br><small>${movement.ofxIdentifier || movement.notes || "-"}</small></td>
            <td>${movement.bankName || bankAccountLabel(movement.bankAccountId)}</td>
            <td><strong class="${Number(movement.amount || 0) >= 0 ? "amount-in" : "amount-out"}">${currency(Math.abs(Number(movement.amount || 0)))}</strong></td>
            <td><span class="source-pill ${movement.reconciliationStatus === "reconciled" ? "ofx" : "manual"}">${reconciliationStatusLabel(movement.reconciliationStatus)}</span></td>
            <td>
              <select class="inline-field" data-reconciliation-title="${movement.id}" ${locked}>
                ${titleOptions}
              </select>
            </td>
            <td class="row-actions">
              <button class="row-action-button settle-icon-button" data-reconcile-movement="${movement.id}" type="button" title="Conciliar" aria-label="Conciliar movimento" ${locked}>$</button>
              <button class="row-action-button edit-icon-button" data-create-title-from-movement="${movement.id}" type="button" title="Criar título" aria-label="Criar título a partir do movimento" ${locked}>+</button>
              <button class="row-action-button delete-icon-button" data-ignore-movement="${movement.id}" type="button" title="Ignorar" aria-label="Ignorar movimento" ${locked}>&times;</button>
            </td>
          </tr>
        `;
      }).join("")
    : `<tr><td colspan="7"><div class="empty-state">Nenhum movimento OFX encontrado para os filtros selecionados.</div></td></tr>`;
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
                  <button class="row-action-button edit-icon-button" data-confirm-ofx-draft="${draft.id}" type="button" title="Confirmar lançamento" aria-label="Confirmar lançamento">&#10003;</button>
                  <button class="row-action-button edit-icon-button" data-save-ofx-rule="${draft.id}" type="button" title="Salvar regra" aria-label="Salvar regra">R</button>
                  <button class="row-action-button delete-icon-button" data-ignore-ofx-draft="${draft.id}" type="button" title="Ignorar" aria-label="Ignorar">&times;</button>
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
    .sort((a, b) => chartAccountOrder(a.code) - chartAccountOrder(b.code))
    .map((account) => ({
      kind: "account",
      code: account.code,
      label: account.name,
      values: months.map((month) => dreMonthValue(month, (item) => item.chartAccountId === account.id)),
    }));
}

function chartAccountOrder(code) {
  const index = seedChartAccounts.findIndex((account) => account.code === code);
  return index === -1 ?9999 : index;
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

function renderCashFlow() {
  const table = document.querySelector("#cashFlowTable");
  const head = document.querySelector("#cashFlowHead");
  const summary = document.querySelector("#cashFlowSummary");
  if (!table || !head || !summary) return;
  const months = cashFlowMonths();
  const rows = buildCashFlowRows(months);
  const totals = rows
    .filter((row) => row.kind === "group")
    .reduce(
      (acc, row) => {
        row.values.forEach((value) => {
          if (value > 0) acc.inflow += value;
          if (value < 0) acc.outflow += Math.abs(value);
          acc.balance += value;
        });
        return acc;
      },
      { inflow: 0, outflow: 0, balance: 0 },
    );
  summary.innerHTML = `
    <article class="metric"><span>Entradas</span><strong>${currency(totals.inflow)}</strong><small>movimentos recebidos</small></article>
    <article class="metric"><span>Saídas</span><strong>${currency(totals.outflow)}</strong><small>contas pagas/previstas</small></article>
    <article class="metric"><span>Saldo</span><strong>${currency(totals.balance)}</strong><small>resultado do período</small></article>
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
  const rows = state.chartAccounts.filter((item) => !term || normalizedText(`${item.code} ${item.name} ${item.activity} ${item.dfcGroup ?? ""} ${item.dreGroup ?? ""} ${item.package ?? ""}`).includes(term));
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
                  <button class="row-action-button edit-icon-button" data-edit-chart-account="${item.id}" type="button" title="Editar conta" aria-label="Editar conta">✎</button>
                  <button class="row-action-button delete-icon-button" data-delete-chart-account="${item.id}" type="button" title="Excluir conta" aria-label="Excluir conta">×</button>
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
  openModal("enrollment", item ?? {});
  document.querySelector("#modalTitle").textContent = enrollmentId ? "Editar matrícula" : "Nova matrícula";
}

function openAppointmentModal(appointmentId = null) {
  editingAppointmentId = appointmentId;
  const item = appointmentId ? state.appointments.find((appointment) => appointment.id === appointmentId) : null;
  openModal("appointment", item ?? {});
  document.querySelector("#modalTitle").textContent = appointmentId ? "Remarcar sessão" : "Agendar sessão";
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
    notes: String(item.notes || "").replace("Importado da aba BD_Physiofit", "Importação Manual"),
  });
  document.querySelector("#modalTitle").textContent = "Editar fornecedor";
}

function openAccountModal(accountId = null, defaults = {}) {
  editingAccountId = accountId;
  const item = accountId ? state.accounts.find((account) => account.id === accountId) : null;
  openModal("account", item ?? defaults);
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
  state.accounts = state.accounts.filter((account) => account.id !== accountId);
  saveState();
  render();
  toast("Título excluído.");
}

function deleteChartAccount(chartAccountId) {
  const item = state.chartAccounts.find((account) => account.id === chartAccountId);
  if (!item || !window.confirm(`Excluir a conta ${item.name}?`)) return;
  state.chartAccounts = state.chartAccounts.filter((account) => account.id !== chartAccountId);
  state.accounts = state.accounts.map((account) => (account.chartAccountId === chartAccountId ? { ...account, chartAccountId: "" } : account));
  saveState();
  render();
  toast("Conta contábil excluída.");
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
  state.ofxDrafts = state.ofxDrafts.filter((item) => item.importBatchId !== batch.id);
  state.ofxBatches = state.ofxBatches.filter((item) => item.id !== batch.id);
  saveState();
  render();
  toast("Importação OFX temporária limpa.");
}

function deleteStudent(studentId) {
  const item = state.students.find((studentItem) => studentItem.id === studentId);
  if (!item || !window.confirm(`Excluir o paciente ${item.name}?`)) return;
  state.students = state.students.filter((studentItem) => studentItem.id !== studentId);
  state.appointments = state.appointments.filter((appointment) => appointment.studentId !== studentId);
  state.payments = state.payments.filter((payment) => payment.studentId !== studentId);
  state.records = state.records.filter((record) => record.studentId !== studentId);
  saveState();
  render();
  toast("Paciente excluído.");
}

function deleteProfessional(professionalId) {
  const item = state.professionals.find((professionalItem) => professionalItem.id === professionalId);
  if (!item || !window.confirm(`Excluir o profissional ${item.name}?`)) return;
  state.professionals = state.professionals.filter((professionalItem) => professionalItem.id !== professionalId);
  state.appointments = state.appointments.filter((appointment) => appointment.teacherId !== professionalId);
  state.blocks = (state.blocks ?? []).filter((block) => block.teacherId !== professionalId);
  saveState();
  render();
  toast("Profissional excluído.");
}

function deleteSupplier(supplierId) {
  const item = state.suppliers.find((supplierItem) => supplierItem.id === supplierId);
  if (!item || !window.confirm(`Excluir o fornecedor ${item.name}?`)) return;
  state.suppliers = state.suppliers.filter((supplierItem) => supplierItem.id !== supplierId);
  state.accounts = state.accounts.map((account) => (account.supplierId === supplierId ?{ ...account, supplierId: "" } : account));
  saveState();
  render();
  toast("Fornecedor excluído.");
}

function deleteModality(modalityId) {
  const item = state.modalities.find((modalityItem) => modalityItem.id === modalityId);
  if (!item || !window.confirm(`Excluir a modalidade ${item.name}?`)) return;
  state.modalities = state.modalities.filter((modalityItem) => modalityItem.id !== modalityId);
  state.plans = state.plans.map((plan) => (plan.modalityId === modalityId ?{ ...plan, modalityId: "" } : plan));
  saveState();
  render();
  toast("Modalidade excluída.");
}

function deletePlan(planId) {
  const item = state.plans.find((planItem) => planItem.id === planId);
  if (!item || !window.confirm(`Excluir o plano ${item.name}?`)) return;
  state.plans = state.plans.filter((planItem) => planItem.id !== planId);
  saveState();
  render();
  toast("Plano excluído.");
}

function deleteEnrollment(enrollmentId) {
  const item = state.enrollments.find((enrollment) => enrollment.id === enrollmentId);
  if (!item || !window.confirm(`Excluir a matrícula de ${studentName(item.studentId)}?`)) return;
  state.enrollments = state.enrollments.filter((enrollment) => enrollment.id !== enrollmentId);
  state.appointments = state.appointments.filter((appointment) => appointment.enrollmentId !== enrollmentId);
  saveState();
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
  document.querySelector("#professionalSummaryName").textContent = (item.name || "Novo profissional").toUpperCase();
  document.querySelector("#professionalSummaryDocument").textContent = `CREFITO: ${item.document || "-"}`;
  document.querySelector("#professionalSummaryPhone").textContent = `Celular: ${item.phone || "-"}`;
}

function setProfessionalTab(tab) {
  document.querySelectorAll("[data-professional-tab]").forEach((button) => button.classList.toggle("active", button.dataset.professionalTab === tab));
  document.querySelectorAll("[data-professional-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.professionalPanel === tab));
}

function renderLinkedEnrollments(professionalId) {
  const table = document.querySelector("#linkedEnrollmentsTable");
  if (!table) return;
  const rows = state.appointments
    .filter((appointment) => appointment.teacherId === professionalId)
    .map((appointment, index) => {
      const patient = student(appointment.studentId);
      return {
        name: patient?.name ?? "Paciente removido",
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
              <td><button class="linked-edit-button edit-icon-button" type="button" title="Editar matrícula" aria-label="Editar matrícula">✎</button></td>
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
    table.innerHTML = `<tr><td colspan="8"><div class="empty-state">Histórico disponível após salvar o paciente.</div></td></tr>`;
    return;
  }
  const enrollments = state.enrollments
    .filter((item) => item.studentId === studentId)
    .sort((a, b) => String(a.startDate || "").localeCompare(String(b.startDate || "")));
  table.innerHTML = enrollments.length
    ? enrollments
        .map((item, index) => {
          const hasFinancial = state.accounts.some((account) => account.enrollmentId === item.id) || item.financialTitlesGenerated;
          return `
            <tr>
              <td><span class="status-pill ${index === 0 ? "pendente" : "ativo"}">${index === 0 ? "Matrícula" : "Renovação"}</span></td>
              <td><div class="patient-name"><strong>${displayName(planName(item.planId))}</strong><span>${planTypeLabel(item.planType || planById(item.planId)?.type)}</span></div></td>
              <td>${modalityName(item.modalityId) || "-"}</td>
              <td>${dateLabel(item.startDate)}</td>
              <td>${dateLabel(item.endDate)}</td>
              <td><strong>${currency(Number(item.monthlyValue || 0))}</strong></td>
              <td><span class="status-pill ${hasFinancial ? "ativo" : "pendente"}">${hasFinancial ? "Gerado" : "Pendente"}</span></td>
              <td><span class="status-pill ${statusClass(item.status)}">${item.status || "-"}</span></td>
            </tr>
          `;
        })
        .join("")
    : `<tr><td colspan="8"><div class="empty-state">Nenhuma matrícula vinculada ao paciente.</div></td></tr>`;
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
  toast("Cadastro do paciente salvo.");
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

  const checkins = state.appointments.filter((item) => item.status === "Concluída" || item.status === "Compareceu").sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`));
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
        .filter((item) => item.status === "Concluída" || item.status === "Compareceu")
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
  document.querySelector("#sessionUserName").textContent = user?.name || "Usuário";
  document.querySelector("#sessionUserRole").textContent = user?.role || "";
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
    switchView(canAccessView(currentView()) ? currentView() : "dashboard");
    toast(`Bem-vindo, ${currentUser().name}.`);
  } catch (error) {
    feedback.textContent = error.message || "Não foi possível entrar.";
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
                    <button class="row-action-button edit-icon-button" data-set-password="${user.id}" type="button" title="Definir senha">Senha</button>
                    <button class="row-action-button ${user.status === "Ativo" ? "delete-icon-button" : "edit-icon-button"}" data-toggle-user="${user.id}" data-user-status="${user.status === "Ativo" ? "Inativo" : "Ativo"}" type="button">${user.status === "Ativo" ? "Bloquear" : "Ativar"}</button>
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

async function setUserPassword(userId) {
  const password = window.prompt("Digite a nova senha para este usuário:");
  if (!password) return;
  if (password.length < 6) {
    toast("Use uma senha com pelo menos 6 caracteres.");
    return;
  }

  try {
    await window.PhysiofitData.updateUser(userId, { password });
    await renderAccessUsers();
    toast("Senha atualizada.");
  } catch (error) {
    toast(error.message || "Não foi possível atualizar a senha.");
  }
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

function switchView(view) {
  if (!canAccessView(view)) {
    view = "dashboard";
    if (currentUser()) toast("Seu perfil não tem acesso a essa tela.");
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
  closeTopMenus();
  document.body.classList.remove("mobile-menu-open");
  document.querySelector("#viewTitle").textContent = viewTitles[view];
}

function openMenuGroup() {
  document.querySelectorAll("[data-menu-wrapper]").forEach((wrapper) => {
    wrapper.classList.add("open");
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
  const fields = schema.fields.map((field) => ({ ...field, value: values[field.name] ?? field.value }));
  form.innerHTML = [...fields.map(renderField), `<button class="primary-button" type="submit">${schema.submit}</button>`].join("");
  if (type === "enrollment") {
    updateEnrollmentPlanOptions(form);
    applyEnrollmentPlanDefaults(form, false);
  }
  backdrop.hidden = false;
  form.querySelector("input, select, textarea")?.focus();
}

function plansForModality(modalityId = "") {
  const plans = activePlans();
  if (!modalityId) return plans;
  return plans.filter((item) => item.modalityId === modalityId);
}

function updateEnrollmentPlanOptions(form) {
  if (!form || form.dataset.type !== "enrollment") return;
  const planSelect = form.elements.planId;
  if (!planSelect) return;
  const modalityId = form.elements.modalityId?.value || "";
  const selected = planSelect.value;
  const plans = plansForModality(modalityId);
  planSelect.innerHTML = plans.length
    ? plans.map((item) => `<option value="${item.id}">${escapeHtml(displayName(item.name))}</option>`).join("")
    : `<option value="">Nenhum plano vinculado</option>`;
  planSelect.value = plans.some((item) => item.id === selected) ? selected : plans[0]?.id || "";
}

function applyEnrollmentPlanDefaults(form, overwrite = true) {
  if (!form || form.dataset.type !== "enrollment") return;
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
  setIfNeeded("firstPaymentDate", form.elements.startDate?.value || demoToday);
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
  const form = input.closest("form");
  const hidden = form?.elements[input.dataset.studentTarget];
  const studentMatch = allowPartial ? findStudentByLookup(input.value) : state.students.find((item) => normalizedText(item.name) === normalizedText(input.value));
  if (hidden) hidden.value = studentMatch?.id || "";
  input.setCustomValidity(studentMatch ? "" : "Selecione um paciente cadastrado.");
  return Boolean(studentMatch);
}

function renderField(field) {
  const required = field.required === false ? "" : "required";
  const isSelected = (value) => String(value ?? "") === String(field.value ?? "") ? "selected" : "";

  if (field.type === "student") {
    const selectedStudent = state.students.find((item) => item.id === field.value) || state.students[0] || {};
    const listId = `studentList-${field.name}`;
    return `
      <label class="student-lookup-field">${field.label}
        <input type="search" name="${field.name}Search" list="${listId}" value="${escapeHtml(selectedStudent.name || "")}" data-student-search data-student-target="${field.name}" placeholder="Digite parte do nome do paciente" autocomplete="off" ${required} />
        <input type="hidden" name="${field.name}" value="${escapeHtml(selectedStudent.id || "")}" />
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
      <label>${field.label}
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
      <label>${field.label}
        <select name="${field.name}" ${required}>
          ${options.map((item) => `<option value="${item.name}" ${isSelected(item.name)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "modalityId") {
    const options = activeModalities();
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
          <option value="" ${isSelected("")}>Sem modalidade</option>
          ${options.map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.name}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "chartAccount") {
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
          ${activeChartAccounts().map((item) => `<option value="${item.id}" ${isSelected(item.id)}>${item.name}</option>`).join("")}
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
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
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
      <label>${field.label}
        <select name="${field.name}" ${required}>
          ${options.map((option) => `<option value="${option.value}" ${isSelected(option.value)}>${option.label}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "select") {
    return `
      <label>${field.label}
        <select name="${field.name}" ${required}>
          ${field.options.map((option) => `<option ${isSelected(option)}>${option}</option>`).join("")}
        </select>
      </label>
    `;
  }
  if (field.type === "textarea") return `<label>${field.label}<textarea name="${field.name}" rows="4" ${required}>${field.value ?? ""}</textarea></label>`;
  return `<label>${field.label}<input name="${field.name}" type="${field.type}" value="${field.value ?? ""}" ${required} /></label>`;
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
  document.querySelector("#modalBackdrop").hidden = true;
}

function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("show");
  window.setTimeout(() => element.classList.remove("show"), 2400);
}

document.addEventListener("click", (event) => {
  const mobileMenuToggle = event.target.closest("#mobileMenuToggle");
  if (mobileMenuToggle) {
    document.body.classList.toggle("mobile-menu-open");
    return;
  }

  const topMenuToggle = event.target.closest("[data-top-menu-toggle]");
  if (topMenuToggle) {
    const group = topMenuToggle.closest(".top-menu-group");
    const willOpen = !group.classList.contains("open");
    closeTopMenus();
    group.classList.toggle("open", willOpen);
    return;
  }

  if (!event.target.closest(".top-menu-group")) closeTopMenus();

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

  const editSupplierButton = event.target.closest("[data-edit-supplier]");
  if (editSupplierButton) openSupplierModal(editSupplierButton.dataset.editSupplier);

  const editEnrollmentButton = event.target.closest("[data-edit-enrollment]");
  if (editEnrollmentButton) openEnrollmentModal(editEnrollmentButton.dataset.editEnrollment);

  const editLeadButton = event.target.closest("[data-edit-lead]");
  if (editLeadButton) openLeadModal(editLeadButton.dataset.editLead);

  const editChartAccountButton = event.target.closest("[data-edit-chart-account]");
  if (editChartAccountButton) openChartAccountModal(editChartAccountButton.dataset.editChartAccount);

  const editAccountButton = event.target.closest("[data-edit-account]");
  if (editAccountButton) openAccountModal(editAccountButton.dataset.editAccount);

  const settleAccountButton = event.target.closest("[data-settle-account]");
  if (settleAccountButton) openAccountSettlementModal(settleAccountButton.dataset.settleAccount);

  const reconcileButton = event.target.closest("[data-reconcile-movement]");
  if (reconcileButton) {
    const movementId = reconcileButton.dataset.reconcileMovement;
    const titleId = document.querySelector(`[data-reconciliation-title="${movementId}"]`)?.value || "";
    reconcileBankMovement(movementId, titleId);
  }

  const createTitleButton = event.target.closest("[data-create-title-from-movement]");
  if (createTitleButton) createTitleFromMovement(createTitleButton.dataset.createTitleFromMovement);

  const ignoreMovementButton = event.target.closest("[data-ignore-movement]");
  if (ignoreMovementButton) ignoreBankMovement(ignoreMovementButton.dataset.ignoreMovement);

  const deleteStudentButton = event.target.closest("[data-delete-student]");
  if (deleteStudentButton) deleteStudent(deleteStudentButton.dataset.deleteStudent);

  const deleteProfessionalButton = event.target.closest("[data-delete-professional]");
  if (deleteProfessionalButton) deleteProfessional(deleteProfessionalButton.dataset.deleteProfessional);

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
  if (scheduleLeadButton) scheduleLead(scheduleLeadButton.dataset.scheduleLead);

  const convertLeadButton = event.target.closest("[data-convert-lead]");
  if (convertLeadButton) convertLead(convertLeadButton.dataset.convertLead);

  const deleteLeadButton = event.target.closest("[data-delete-lead]");
  if (deleteLeadButton) deleteLead(deleteLeadButton.dataset.deleteLead);

  const setPasswordButton = event.target.closest("[data-set-password]");
  if (setPasswordButton) setUserPassword(setPasswordButton.dataset.setPassword);

  const toggleUserButton = event.target.closest("[data-toggle-user]");
  if (toggleUserButton) toggleUserStatus(toggleUserButton.dataset.toggleUser, toggleUserButton.dataset.userStatus);

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
    if (scheduleAction.dataset.action === "reschedule" && appointment) {
      openAppointmentModal(appointment.id);
      return;
    }
    if (scheduleAction.dataset.action === "confirm" && appointment) appointment.status = "Confirmada";
    if (scheduleAction.dataset.action === "complete" && appointment) {
      appointment.status = "Compareceu";
      const relatedStudent = state.students.find((item) => item.id === appointment.studentId);
      if (relatedStudent) relatedStudent.lastPresence = appointment.date;
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
        toast("Aluno sem crédito de reposição disponível.");
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
  const schema = modalSchemas[form.dataset.type];
  const values = Object.fromEntries(new FormData(form).entries());
  form.querySelectorAll("[data-student-search]").forEach((input) => {
    delete values[`${input.dataset.studentTarget}Search`];
  });
  schema.handler(values);
  saveState();
  closeModal();
  render();
  toast(form.dataset.type === "accountSettlement" ? "Baixa registrada com sucesso." : "Cadastro salvo com sucesso.");
});

document.querySelector("#modalForm").addEventListener("input", (event) => {
  if (!event.target.matches("[data-student-search]")) return;
  syncStudentLookup(event.target, false);
});

document.querySelector("#modalForm").addEventListener("change", (event) => {
  const form = event.currentTarget;
  if (form.dataset.type === "enrollment" && event.target.name === "modalityId") {
    updateEnrollmentPlanOptions(form);
    applyEnrollmentPlanDefaults(form, true);
    return;
  }
  if (form.dataset.type === "enrollment" && ["planId", "startDate", "planType"].includes(event.target.name)) {
    applyEnrollmentPlanDefaults(form, true);
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
  setControlValue("roomFilter", "all");
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
  renderPlans();
}

function clearEnrollmentFilters() {
  setControlValue("enrollmentSearch", "");
  setControlValue("enrollmentStatusFilter", "activeAndExpired");
  setControlValue("enrollmentModalityFilter", "all");
  setControlValue("enrollmentRoomFilter", "all");
  setControlValue("enrollmentProfessionalFilter", "all");
  setControlValue("enrollmentPlanTypeFilter", "all");
  setControlValue("enrollmentDateFilter", "registration");
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
  setControlValue(config.periodTypeId, "Mês/Ano Competência");
  setControlValue(config.dateRangeId, "01/05/2026 - 31/05/2026");
  setControlValue(config.monthId, "2026-05");
  setControlValue(config.statusId, "all");
  setControlValue(config.reconciliationId, "all");
  setControlValue(config.modalityId, "all");
  setControlValue(config.professionalId, "all");
  setControlValue(config.chartId, "all");
  setControlValue(config.supplierId, "all");
  renderAccounts();
}

function resetAccountFiltersForImport(config) {
  setControlValue(config.searchId, "");
  setControlValue(config.statusId, "all");
  setControlValue(config.reconciliationId, "all");
  setControlValue(config.modalityId, "all");
  setControlValue(config.professionalId, "all");
  setControlValue(config.chartId, "all");
  setControlValue(config.supplierId, "all");
}

function clearChartAccountFilters() {
  setControlValue("chartAccountSearch", "");
  renderChartAccounts();
}

["agendaSearch", "globalStudentSearch", "modalityFilter", "sessionFilter", "statusFilter", "roomFilter", "teacherFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderSchedule);
  document.querySelector(`#${id}`)?.addEventListener("change", renderSchedule);
});

["leadSearch", "leadStatusFilter", "leadOwnerFilter", "leadOriginFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderCrm);
  document.querySelector(`#${id}`)?.addEventListener("change", renderCrm);
});

document.querySelector("#leadSearchButton")?.addEventListener("click", renderCrm);
document.querySelector("#leadClearFiltersButton")?.addEventListener("click", clearCrmFilters);

document.querySelector("#prevWeek").addEventListener("click", () => {
  currentWeekStart = addDays(currentWeekStart, agendaMode === "day" ?-1 : -7);
  renderSchedule();
});

document.querySelector("#nextWeek").addEventListener("click", () => {
  currentWeekStart = addDays(currentWeekStart, agendaMode === "day" ?1 : 7);
  renderSchedule();
});

document.querySelector("#todayButton").addEventListener("click", () => {
  currentWeekStart = parseLocalDate(demoToday);
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
document.querySelector("#newPlanButton").addEventListener("click", () => openPlanEditor());
document.querySelector("#backToPlansButton").addEventListener("click", () => switchView("plans"));
document.querySelector("#planEditorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  savePlanEditor();
});
["enrollmentSearch", "enrollmentStatusFilter", "enrollmentModalityFilter", "enrollmentRoomFilter", "enrollmentProfessionalFilter", "enrollmentPlanTypeFilter", "enrollmentDateFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderEnrollments);
  document.querySelector(`#${id}`)?.addEventListener("change", renderEnrollments);
});
document.querySelector("#enrollmentSearchButton")?.addEventListener("click", renderEnrollments);
document.querySelector("#enrollmentClearFiltersButton")?.addEventListener("click", clearEnrollmentFilters);
["monthlySearch", "monthlyPaidFilter", "monthlyMembershipFilter", "monthlyModalityFilter", "monthlyInvoiceFilter", "monthlyReceiptFilter", "monthlyTeacherFilter", "monthlyExternalFilter", "monthlyPeriodFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderMonthlyPayments);
  document.querySelector(`#${id}`)?.addEventListener("change", renderMonthlyPayments);
});
document.querySelector("#monthlySearchButton")?.addEventListener("click", renderMonthlyPayments);
document.querySelector("#monthlyClearFiltersButton")?.addEventListener("click", clearMonthlyFilters);

["fiscalSearch", "fiscalStatusFilter", "fiscalModalityFilter"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderFiscalInvoices);
  document.querySelector(`#${id}`)?.addEventListener("change", renderFiscalInvoices);
});
document.querySelector("#fiscalSearchButton")?.addEventListener("click", renderFiscalInvoices);
document.querySelector("#fiscalClearFiltersButton")?.addEventListener("click", clearFiscalFilters);
document.querySelector("#issueSelectedInvoicesButton")?.addEventListener("click", issuePendingFiscalInvoices);

Object.values(accountViewConfigs).forEach((config) => {
  [config.searchId, config.periodTypeId, config.dateRangeId, config.monthId, config.statusId, config.reconciliationId, config.modalityId, config.professionalId, config.chartId, config.supplierId].forEach((id) => {
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
document.querySelector("#approveOfxValidButton")?.addEventListener("click", approveValidOfxDraftsToFinance);
document.querySelector("#clearOfxImportButton")?.addEventListener("click", clearOfxImport);
["bankReconciliationStatusFilter", "bankReconciliationTypeFilter", "bankReconciliationAccountFilter", "bankReconciliationSearch"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("input", renderBankReconciliation);
  document.querySelector(`#${id}`)?.addEventListener("change", renderBankReconciliation);
});
document.querySelector("#bankReconciliationSearchButton")?.addEventListener("click", renderBankReconciliation);
document.querySelector("#bankReconciliationClearFiltersButton")?.addEventListener("click", () => {
  resetBankReconciliationFilters();
  renderBankReconciliation();
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
document.querySelector("#logoutButton")?.addEventListener("click", logout);
document.querySelector("#refreshUsersButton")?.addEventListener("click", renderAccessUsers);

document.querySelector("#copyPortalButton").addEventListener("click", async () => {
  await navigator.clipboard?.writeText("https://studioflow.local/agendar");
  toast("Link copiado.");
});

document.querySelector("#seedButton")?.addEventListener("click", () => {
  state = normalizeState(structuredClone(seedData));
  saveState();
  render();
  toast("Dados exemplo restaurados.");
});

applyAuthSession();
render();
hydrateStateFromNeon();
