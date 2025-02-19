import { OperacaoAgrupamentoCodigoMunicipio } from './types';

const vendasAgrupadasPorCodigoMunicipio = [
  {
    CodigoIbgeMunicipioDestino: '2905701',
    ValorVenda: 339310960247,
    NomeMunicipio: 'Camagari',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2910057',
    ValorVenda: 272445854443,
    NomeMunicipio: "Dias d'Ávila",
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2927408',
    ValorVenda: 228218582256,
    NomeMunicipio: 'Salvador',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2929206',
    ValorVenda: 117044021229,
    NomeMunicipio: 'São Francisco do Conde',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2922003',
    ValorVenda: 101174732751,
    NomeMunicipio: 'Mucuri',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2906501',
    ValorVenda: 72643918997,
    NomeMunicipio: 'Candeias',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2930709',
    ValorVenda: 63281463584,
    NomeMunicipio: 'Simões Filho',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2910800',
    ValorVenda: 53666053302,
    NomeMunicipio: 'Feira de Santana',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '3106200',
    ValorVenda: 41423045840,
    NomeMunicipio: 'Belo Horizonte',
    UFDoMunicipio: 'MG',
  },
  {
    CodigoIbgeMunicipioDestino: '2611606',
    ValorVenda: 38661544928,
    NomeMunicipio: 'Recife',
    UFDoMunicipio: 'PE',
  },
  {
    CodigoIbgeMunicipioDestino: '2919926',
    ValorVenda: 35279130082,
    NomeMunicipio: 'Madre de Deus',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2900702',
    ValorVenda: 34454949681,
    NomeMunicipio: 'Alagoinhas',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2918001',
    ValorVenda: 31903450290,
    NomeMunicipio: 'Jequié',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '3301702',
    ValorVenda: 31455328157,
    NomeMunicipio: 'Duque de Caxias',
    UFDoMunicipio: 'RJ',
  },
  {
    CodigoIbgeMunicipioDestino: '2919553',
    ValorVenda: 28255590874,
    NomeMunicipio: 'Luís Eduardo Magalhães',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2903201',
    ValorVenda: 26502292227,
    NomeMunicipio: 'Barreiras',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '3547809',
    ValorVenda: 22650684857,
    NomeMunicipio: 'Santo André',
    UFDoMunicipio: 'SP',
  },
  {
    CodigoIbgeMunicipioDestino: '2928901',
    ValorVenda: 22306851181,
    NomeMunicipio: 'São Desidério',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '3302254',
    ValorVenda: 21951134706,
    NomeMunicipio: 'Itatiaia',
    UFDoMunicipio: 'RJ',
  },
  {
    CodigoIbgeMunicipioDestino: '2933307',
    ValorVenda: 21858005930,
    NomeMunicipio: 'Vitória da Conquista',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '3550308',
    ValorVenda: 21082125110,
    NomeMunicipio: 'São Paulo',
    UFDoMunicipio: 'SP',
  },
  {
    CodigoIbgeMunicipioDestino: '2913606',
    ValorVenda: 21074606401,
    NomeMunicipio: 'Ilhéus',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '3549904',
    ValorVenda: 20613734926,
    NomeMunicipio: 'São José dos Campos',
    UFDoMunicipio: 'SP',
  },
  {
    CodigoIbgeMunicipioDestino: '2607208',
    ValorVenda: 18104262670,
    NomeMunicipio: 'Ipojuca',
    UFDoMunicipio: 'PE',
  },
  {
    CodigoIbgeMunicipioDestino: '2704708',
    ValorVenda: 16333929540,
    NomeMunicipio: 'Marechal Deodoro',
    UFDoMunicipio: 'AL',
  },
  {
    CodigoIbgeMunicipioDestino: '2914802',
    ValorVenda: 16319081804,
    NomeMunicipio: 'Itabuna',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2911709',
    ValorVenda: 14890849131,
    NomeMunicipio: 'Guanambi',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2919207',
    ValorVenda: 14802093180,
    NomeMunicipio: 'Lauro de Freitas',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '5203500',
    ValorVenda: 13572811732,
    NomeMunicipio: 'Bom Jesus de Goiás',
    UFDoMunicipio: 'GO',
  },
  {
    CodigoIbgeMunicipioDestino: '3304557',
    ValorVenda: 13416005309,
    NomeMunicipio: 'Rio de Janeiro',
    UFDoMunicipio: 'RJ',
  },
  {
    CodigoIbgeMunicipioDestino: '2908507',
    ValorVenda: 13148386563,
    NomeMunicipio: 'Conceição do Jacuípe',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '3171204',
    ValorVenda: 12533659220,
    NomeMunicipio: 'Vespasiano',
    UFDoMunicipio: 'MG',
  },
  {
    CodigoIbgeMunicipioDestino: '2931350',
    ValorVenda: 9909512567,
    NomeMunicipio: 'Teixeira de Freitas',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2925303',
    ValorVenda: 9831113436,
    NomeMunicipio: 'Porto Seguro',
    UFDoMunicipio: 'BA',
  },
  {
    CodigoIbgeMunicipioDestino: '2800308',
    ValorVenda: 9138618347,
    NomeMunicipio: 'Aracaju',
    UFDoMunicipio: 'SE',
  },
  {
    CodigoIbgeMunicipioDestino: '4118204',
    ValorVenda: 9077194592,
    NomeMunicipio: 'Paranaguá',
    UFDoMunicipio: 'PR',
  },
  {
    CodigoIbgeMunicipioDestino: '3509502',
    ValorVenda: 8983328520,
    NomeMunicipio: 'Campinas',
    UFDoMunicipio: 'SP',
  },
  {
    CodigoIbgeMunicipioDestino: '3010727',
    ValorVenda: 7085015441,
    NomeMunicipio: 'Etnôsbolis',
    UFDoMunicipio: 'BA',
  },
];

export const getVendasAgrupadasPorCodigoMunicipio =
  (): OperacaoAgrupamentoCodigoMunicipio[] => {
    return vendasAgrupadasPorCodigoMunicipio.map((venda) => ({
      codigoIbgeMunicipioDestino: venda.CodigoIbgeMunicipioDestino,
      valor: venda.ValorVenda,
      nomeMunicipio: venda.NomeMunicipio,
      ufDoMunicipio: venda.UFDoMunicipio,
    }));
  };
