import { OperacaoAgrupamentoCodigoMunicipio } from './types';

const comprasAgrupadasPorCodigoMunicipio = [
  {
    CodigoDoMunicipioOrigem: '2900702',
    ValorCompraMunicipioOrigem: 270298107245,
    NomeMunicipioOrigem: 'Alagoinhas',
    UFDoMunicipioOrigem: 'BA',
  },
  {
    CodigoDoMunicipioOrigem: '2927408',
    ValorCompraMunicipioOrigem: 222050228464,
    NomeMunicipioOrigem: 'Salvador',
    UFDoMunicipioOrigem: 'BA',
  },
  {
    CodigoDoMunicipioOrigem: '3550308',
    ValorCompraMunicipioOrigem: 74191372887,
    NomeMunicipioOrigem: 'São Paulo',
    UFDoMunicipioOrigem: 'SP',
  },
  {
    CodigoDoMunicipioOrigem: '2933307',
    ValorCompraMunicipioOrigem: 64912686086,
    NomeMunicipioOrigem: 'Vitória da Conquista',
    UFDoMunicipioOrigem: 'BA',
  },
  {
    CodigoDoMunicipioOrigem: '3304557',
    ValorCompraMunicipioOrigem: 52070358611,
    NomeMunicipioOrigem: 'Rio de Janeiro',
    UFDoMunicipioOrigem: 'RJ',
  },
  {
    CodigoDoMunicipioOrigem: '1302603',
    ValorCompraMunicipioOrigem: 42515846664,
    NomeMunicipioOrigem: 'Manaus',
    UFDoMunicipioOrigem: 'AM',
  },
  {
    CodigoDoMunicipioOrigem: '2903201',
    ValorCompraMunicipioOrigem: 33840262925,
    NomeMunicipioOrigem: 'Barreiras',
    UFDoMunicipioOrigem: 'BA',
  },
  {
    CodigoDoMunicipioOrigem: '2301000',
    ValorCompraMunicipioOrigem: 29695960489,
    NomeMunicipioOrigem: 'Aguiraz',
    UFDoMunicipioOrigem: 'CE',
  },
  {
    CodigoDoMunicipioOrigem: '2704302',
    ValorCompraMunicipioOrigem: 26771411644,
    NomeMunicipioOrigem: 'Maceió',
    UFDoMunicipioOrigem: 'AL',
  },
  {
    CodigoDoMunicipioOrigem: '3301702',
    ValorCompraMunicipioOrigem: 24433390040,
    NomeMunicipioOrigem: 'Duque de Caxias',
    UFDoMunicipioOrigem: 'RJ',
  },
  {
    CodigoDoMunicipioOrigem: '2602902',
    ValorCompraMunicipioOrigem: 22557579319,
    NomeMunicipioOrigem: 'Cabo de Santo Agostinho',
    UFDoMunicipioOrigem: 'PE',
  },
  {
    CodigoDoMunicipioOrigem: '2303709',
    ValorCompraMunicipioOrigem: 22310939889,
    NomeMunicipioOrigem: 'Caucaia',
    UFDoMunicipioOrigem: 'CE',
  },
  {
    CodigoDoMunicipioOrigem: '5201108',
    ValorCompraMunicipioOrigem: 18933451529,
    NomeMunicipioOrigem: 'Anápolis',
    UFDoMunicipioOrigem: 'GO',
  },
  {
    CodigoDoMunicipioOrigem: '3205309',
    ValorCompraMunicipioOrigem: 18746847501,
    NomeMunicipioOrigem: 'Vitória',
    UFDoMunicipioOrigem: 'ES',
  },
  {
    CodigoDoMunicipioOrigem: '3552205',
    ValorCompraMunicipioOrigem: 18658998827,
    NomeMunicipioOrigem: 'Sorocaba',
    UFDoMunicipioOrigem: 'SP',
  },
  {
    CodigoDoMunicipioOrigem: '3205002',
    ValorCompraMunicipioOrigem: 16663450528,
    NomeMunicipioOrigem: 'Serra',
    UFDoMunicipioOrigem: 'ES',
  },
  {
    CodigoDoMunicipioOrigem: '3300100',
    ValorCompraMunicipioOrigem: 14293437647,
    NomeMunicipioOrigem: 'Angra dos Reis',
    UFDoMunicipioOrigem: 'RJ',
  },
  {
    CodigoDoMunicipioOrigem: '3304201',
    ValorCompraMunicipioOrigem: 13110504700,
    NomeMunicipioOrigem: 'Resende',
    UFDoMunicipioOrigem: 'RJ',
  },
  {
    CodigoDoMunicipioOrigem: '4125506',
    ValorCompraMunicipioOrigem: 12994567485,
    NomeMunicipioOrigem: 'São José dos Pinhais',
    UFDoMunicipioOrigem: 'PR',
  },
  {
    CodigoDoMunicipioOrigem: '5300108',
    ValorCompraMunicipioOrigem: 12480487917,
    NomeMunicipioOrigem: 'Brasília',
    UFDoMunicipioOrigem: 'DF',
  },
  {
    CodigoDoMunicipioOrigem: '3552403',
    ValorCompraMunicipioOrigem: 11333143824,
    NomeMunicipioOrigem: 'Sumaré',
    UFDoMunicipioOrigem: 'SP',
  },
  {
    CodigoDoMunicipioOrigem: '4309209',
    ValorCompraMunicipioOrigem: 11230067583,
    NomeMunicipioOrigem: 'Gravataí',
    UFDoMunicipioOrigem: 'RS',
  },
  {
    CodigoDoMunicipioOrigem: '2708600',
    ValorCompraMunicipioOrigem: 10066180630,
    NomeMunicipioOrigem: 'São Miguel dos Campos',
    UFDoMunicipioOrigem: 'AL',
  },
  {
    CodigoDoMunicipioOrigem: '2304400',
    ValorCompraMunicipioOrigem: 10008300717,
    NomeMunicipioOrigem: 'Fortaleza',
    UFDoMunicipioOrigem: 'CE',
  },
  {
    CodigoDoMunicipioOrigem: '3525904',
    ValorCompraMunicipioOrigem: 9645484679,
    NomeMunicipioOrigem: 'Jundiaí',
    UFDoMunicipioOrigem: 'SP',
  },
  {
    CodigoDoMunicipioOrigem: '3554102',
    ValorCompraMunicipioOrigem: 9024453978,
    NomeMunicipioOrigem: 'Taubaté',
    UFDoMunicipioOrigem: 'SP',
  },
  {
    CodigoDoMunicipioOrigem: '5208707',
    ValorCompraMunicipioOrigem: 9020169145,
    NomeMunicipioOrigem: 'Goiânia',
    UFDoMunicipioOrigem: 'GO',
  },
  {
    CodigoDoMunicipioOrigem: '3203205',
    ValorCompraMunicipioOrigem: 8817055659,
    NomeMunicipioOrigem: 'Linhares',
    UFDoMunicipioOrigem: 'ES',
  },
  {
    CodigoDoMunicipioOrigem: '2408102',
    ValorCompraMunicipioOrigem: 8789744057,
    NomeMunicipioOrigem: 'Natal',
    UFDoMunicipioOrigem: 'RN',
  },
  {
    CodigoDoMunicipioOrigem: '4314902',
    ValorCompraMunicipioOrigem: 8322430593,
    NomeMunicipioOrigem: 'Porto Alegre',
    UFDoMunicipioOrigem: 'RS',
  },
  {
    CodigoDoMunicipioOrigem: '2307650',
    ValorCompraMunicipioOrigem: 8280799110,
    NomeMunicipioOrigem: 'Maracanad',
    UFDoMunicipioOrigem: 'CE',
  },
  {
    CodigoDoMunicipioOrigem: '3536505',
    ValorCompraMunicipioOrigem: 8152690470,
    NomeMunicipioOrigem: 'Paulínia',
    UFDoMunicipioOrigem: 'SP',
  },
  {
    CodigoDoMunicipioOrigem: '3201308',
    ValorCompraMunicipioOrigem: 7970443890,
    NomeMunicipioOrigem: 'Carlaúcia',
    UFDoMunicipioOrigem: 'ES',
  },
  {
    CodigoDoMunicipioOrigem: '3509502',
    ValorCompraMunicipioOrigem: 7459038991,
    NomeMunicipioOrigem: 'Campinas',
    UFDoMunicipioOrigem: 'SP',
  },
  {
    CodigoDoMunicipioOrigem: '3170206',
    ValorCompraMunicipioOrigem: 7381241382,
    NomeMunicipioOrigem: 'Uberlândia',
    UFDoMunicipioOrigem: 'MG',
  },
  {
    CodigoDoMunicipioOrigem: '2312403',
    ValorCompraMunicipioOrigem: 7371615112,
    NomeMunicipioOrigem: 'São Gonçalo do Amarante',
    UFDoMunicipioOrigem: 'CE',
  },
  {
    CodigoDoMunicipioOrigem: '4305108',
    ValorCompraMunicipioOrigem: 7100917150,
    NomeMunicipioOrigem: 'Caxias do Sul',
    UFDoMunicipioOrigem: 'RS',
  },
  {
    CodigoDoMunicipioOrigem: '3548708',
    ValorCompraMunicipioOrigem: 7003040585,
    NomeMunicipioOrigem: 'São Bernardo do Campos',
    UFDoMunicipioOrigem: 'SP',
  },
];

export const getComprasAgrupadasPorCodigoMunicipio =
  (): OperacaoAgrupamentoCodigoMunicipio[] => {
    return comprasAgrupadasPorCodigoMunicipio.map((venda) => ({
      codigoIbgeMunicipioDestino: venda.CodigoDoMunicipioOrigem,
      valor: venda.ValorCompraMunicipioOrigem,
      nomeMunicipio: venda.NomeMunicipioOrigem,
      ufDoMunicipio: venda.UFDoMunicipioOrigem,
    }));
  };
