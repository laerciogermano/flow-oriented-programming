import addClass from '#shared/ui/dom/addClass/index.js';
import append from '#shared/ui/dom/append/index.js';
import create from '#shared/ui/dom/create/index.js';
import createFlowTable from '#shared/components/table/flow/index.js';
import createFlowTitle from '#shared/components/table/title/index.js';
import createTableTitle from '#shared/components/table/title-table/index.js';
import createTdBar from '#shared/components/td/bar/index.js';
import createTdText from '#shared/components/td/texted/index.js';
import getRoot from '#shared/ui/dom/getRoot/index.js';
import setBackgroundColor from '#shared/ui/dom/setBackgroundColor/index.js';
import setBorderBottom from '#shared/ui/dom/setBorderBottom/index.js';
import setBorderBottomLeftRadius from '#shared/ui/dom/setBorderBottomLeftRadius/index.js';
import setBorderBottomRightRadius from '#shared/ui/dom/setBorderBottomRightRadius/index.js';
import setBorderLeft from '#shared/ui/dom/setBorderLeft/index.js';
import setBorderRight from '#shared/ui/dom/setBorderRight/index.js';
import setBorderTop from '#shared/ui/dom/setBorderTop/index.js';
import setBorderRadius from '#shared/ui/dom/setBorderRadius/index.js';
import setDisplay from '#shared/ui/dom/setDisplay/index.js';
import setHeight from '#shared/ui/dom/setHeight/index.js';
import setWidth from '#shared/ui/dom/setWidth/index.js';
import setMinWidth from '#shared/ui/dom/setMinWidth/index.js';
import setPaddingBottom from '#shared/ui/dom/setPaddingBottom/index.js';
import setPaddingLeft from '#shared/ui/dom/setPaddingLeft/index.js';
import setPaddingRight from '#shared/ui/dom/setPaddingRight/index.js';
import setText from '#shared/ui/dom/setText/index.js';
import setTextWrap from '#shared/ui/dom/setTextWrap/index.js';

(async function main(context) {
  const [
    tableFlow,
    tableTitle,
    root,
  ] = await Promise.all([
    createTableTitle({
      ...context,
      createTableContent: createFlowTable,
      createTdContent: createTdBar,
    }),
    createTableTitle({
      ...context,
      createTableContent: createFlowTitle,
      createTdContent: createTdText,
    }),
    getRoot({
      ...context,
    }),
  ]);

  await append({
    ...context,
    parent: root,
    child: tableTitle,
  });

  await append({
    ...context,
    parent: root,
    child: tableFlow,
  });
})({
  id: 'root',
  create,
  append,
  addClass,
  setText,
  setPaddingLeft,
  setPaddingRight,
  setPaddingBottom,
  setTextWrap,
  setBackgroundColor,
  setHeight,
  setWidth,
  setMinWidth,
  setDisplay,
  setBorderRadius,
  setBorderLeft,
  setBorderRight,
  setBorderBottom,
  setBorderTop,
  setBorderBottomLeftRadius,
  setBorderBottomRightRadius,
  tree: {
    'root': [
      [
        'Smarket',
        'Flow',
        'Clozzy',
        'Pessoal',
        'Criar aplicativo SmartBody',
        'Livro Espiritualidade',
      ],
      [
        'LALA'
      ]
    ],
    'Reduzir custos Smarket': [
      [
        'Reduzir custos de fornecimento',
        'Reduzir Custos de Franquia'
      ],
    ],

    'Reduzir Custos de Franquia': [
      [
        'Criar Web App Smarket',
      ],
      [
        'Implantar Web App no Ilhas do Hawaii para Smarket',
        'Implantar Web App no Monte Carlo'
      ]
    ],

    'Angariar Leads para Licenças Smarket': [
      [
        'Criar site Smarket',
      ],
    ],

    'Criar site Smarket': [
      [
        'Criar formulário de leads',
      ],
      [
        'Criar apresentação inicial',
      ],
      [
        'Criar diferenciais da marca',
      ]
    ],
    'Criar diferenciais da marca': [
      [
        'Criar texto de "Sabemos as marcas que não dão problema"',
        '"Temos contato dos melhores fornecedores"',
        'Criar texto de "Rápida iniciação: 90 dias de montagem"'
      ]
    ],

    'Disponibilizar Panfletos nos Halls de Entrada': [
      [
        'Disponibilizar a Arte para Entrega'
      ],
      [
        'Disponibilizar para o Golden Hills',
      ]
    ],

    'Disponibilizar Catálogo nos Grupos do Whatsapp': [
      [
        'Montar Catálogo com categorias'
      ],
      [
        'Disponibilizar para o Golden Hills',
        'Disponibilizar para o Ilhas do Hawaii',
        'Disponibilizar para o grupo Monte Carlo',
      ]
    ],


    'Montar Catálogo com categorias': [
      [
        'Criar Lista de produtos mais vendidos por categoria'
      ]
    ],

    'Criar Lista de produtos mais vendidos por categoria': [
      [
        'Extrair ista de produtos e categorias'
      ]
    ],

    'Disponibilizar Promoções nas Lojas Físicas': [
      [
        'Compreender sobre promoções'
      ],
      [
        'Disponibilizar a Arte para Entrega'
      ],
      [
        'Disponibilizar para o Monte Carlo',
        'Disponibilizar para o Golden Hills',
        'Disponibilizar para o Ilhas do Hawaii'
      ]
    ],

    'Disponibilizar Panfetos nas Caixas de Correspondência dos Aptos': [
      [
        'Disponibilizar a Arte para Entrega'
      ],
      [
        'Disponibilizar para o Monte Carlo',
        'Disponibilizar para o Golden Hills',
        'Disponibilizar para o Ilhas do Hawaii'
      ]
    ],

    'Disponibilizar para o grupo Monte Carlo': [
      [
        'Solicitar acesso ao grupo do condomínio'
      ],
      [
        'Disponibilizar para o grupo'
      ]
    ],

    'Disponibilizar a Arte para Entrega': [
      [
        'Criar o  Template da Arte',
      ],
      [
        'Calcular Valores'
      ],
      [
        'Mandar imprimir'
      ]
    ],

    'Analisar viabilidade de redução de custo de compra dos produtos': [
      [
        'Simular compra com fornecedor para identificar % de redução'
      ]
    ],

    'Lançar Smartkit': [
      [
        'Analisar viabilidade de redução de custo de fornecimento'
      ],
      [
        'Criar Web App de Simulação'
      ]
    ],

    'Criar Web App de Simulação': [
      [
        'Visualizar lista de produtos'
      ],
      [
        'Pesquisar produtos'
      ],
      [
        'Aumentar/diminuir qtd de produtos do carrinho'
      ],
      [
        'Finalizar Pedido',
      ],
      [
        'Visualizar Pedidos',
        'Cancelar Pedidos'
      ]
    ],


    'Finalizar Pedido': [
      [
        'Adicionar informações de entrega'
      ]
    ],

    'Criar Web App Smarket': [
      [
        'Visualizar lista de produtos'
      ],
      [
        'Pesquisar produtos'
      ],
      [
        'Aumentar/diminuir qtd de produtos do carrinho'
      ],
      [
        'Adicionar produto por código de barra (scanner)',
      ],
      [
        'Escolher forma de pagamento'
      ],
      [
        'Efetuar compra com Pix',
        'Efetuar compra com cartão'
      ]
    ],


    'Reduzir custos de fornecimento': [
      [
        'Analisar viabilidade de redução de custo de fornecimento'
      ],
      [
        'Substituir fornecimento anterior pelo novo'
      ],
    ],

    'Analisar viabilidade de redução de custo de fornecimento': [
      [
        'Analisar viabilidade de redução de custo de compra dos produtos',
      ],
      [
        'Testar compra com novo fornecedor',
      ],
    ],
    'Alavancar Vendas Lojas Existentes': [
      [
        'Disponibilizar Catálogo nos Grupos do Whatsapp',
        'Disponibilizar Panfetos nas Caixas de Correspondência dos Aptos',
        'Disponibilizar Panfletos nos Halls de Entrada',
        'Disponibilizar Promoções nas Lojas Físicas'
      ]
    ],

    'Montar Kit Uber': [
      [
        'Criar Web App Smarket',
        'Elaborar kit de produtos'
      ]
    ],

    'Criar seção de tasks': [
      [
        'Listar Leafs do Grafo sem repetição'
      ]
    ],

    'Aumentar Ganhos': [
      [
        'Aumentar Fidelização dos Usuários'
      ],
      [
        'Criar Recorrência',
        'Criar Onboarding',
      ]
    ],

    'Criar Chat': [
      [
        'Enviar mensagem'
      ],
      [
        'Visualizar mensagem'
      ],
      [
        'Visualizar mensagens'
      ]
    ],

    'Aumentar Fidelização dos Usuários': [
      [
        'Criar Chat'
      ]
    ],
    'Diminuir Custos': [
      [
        'Remover plataforma de pagamento'
      ]
    ],
    'Portal do Operador': [
      [
        'Criar dashboards de acompanhamento',
        'Criar balanço',
        'Criar formulário de adição de saídas',
        'Criar finanças em gráfico (entrada,saída) e Pagbank',
        'Criar acompanhamento de estoque',
      ]
    ],

    'Criar acompanhamento de estoque': [
      [
        'Coletar quantidade de itens vendidos por data',
      ],
      [
        'Coletar quantidade de itens vendidos por dia',
        'Coletar quantidade de itens vendidos por semana',
        'Coletar quantidade de itens vendidos por quinzena',
        'Coletar quantidade de itens vendidos por mês',
      ]
    ],

    'Criar dashboards de acompanhamento': [
      [
        'Identificar produtos mais vendidos'
      ]
    ],
    'Smarket': [
      [
        'Reduzir custos Smarket',
        'Alavancar ganhos lojas smarket',
        'Implantação Smarket Umbará',
        'Lançar Smartkit',
        'Angariar Leads para Licenças Smarket',
        'Montar Kit Uber',
        'Portal do Operador',
      ]
    ],

    'Alavancar ganhos lojas smarket': [
      [
        'Alavancar Vendas Lojas Existentes',
        'Comprar com fornecedores locais',
      ]
    ],

    'Comprar com fornecedores locais': [
      [
        'Comprar marmitas Carol'
      ]
    ],

    'Evolução Flow Work': [
      [
        'Criar seção de tasks',
        'Visualizar camada de dados ("quê")',
        'Visualizar camada do "quem"',
        'Adicionar label',
        'Persistir Fluxo',
        'Definir documento da atividade',
      ],
      [
        'Colorir por prioridades',
        'Filtrar fluxo por label',
        'Download do estado do fluxo',
        'Upload do estado do fluxo',
        'Analisar as bloqueadas e abertas',
        'Manipular posição das barras dos fluxos',
        'Criar status de atividade',
        'Criar estruturas condicionais',
      ],
      [
        'Definir como done'
      ]
    ],
    'Clozzy': [
      [
        'Aumentar Fidelização dos Usuários',
        'Aumentar Ganhos',
        'Diminuir Custos',
      ]
    ],
    'Corpo': [
      [
        'Cárdio em jejum',
        'Treino de musculação'
      ]
    ],

    'Criar aplicativo SmartBody': [
      [
        'Calcular taxa metabólica basal',
        'Calcular Gasto Calórico Diário',
      ]
    ],

    'Livro Espiritualidade': [
      [
        'Não existe um manual da vida',
      ],
      [
        'Há muito sofrimento no mundo',
      ],
      [
        'Contexto de como cheguei a conclusão',
      ],
      [
        'Enxergamos uma realidade parcial',
      ],
      [
        'Era adâmica',
      ],
      [
        'Superação adâmica',
      ],
    ],

    'Escrever Livro Flow': [
      [
        'Existem muitos problemas no desenvolvimento de software',
      ], [
        'Por muito tempo me questionei: “Onde estamos errando?”',
      ],
      [
        'Compreender conceitos',
      ],
      [
        'Criação de uma hipóstase',
      ],
      [
        'Desenvolvemos software da forma que enxergamos o mundo',
      ],
      [
        'Enxergamos o mundo da forma errada',
      ],
      [
        'Enxergamos software da forma errada',
      ],
      [
        'Devemos enxergar orientado a estória',
      ],
      [
        'O que é um software?',
      ],
      [
        'Do que softwares são feitos?',
      ],
      [
        'Bons desenvolvedores são bons roteiristas',
      ],
      [
        'O que definem bons roteiristas?',
      ],
      [
        'Como solucionar'
      ],
      [
        'Linguagem ubíqua'
      ]
    ],

    'Aprender Idiomas': [
      [
        'Fazer Duolinguo de Inglês',
        'Fazer Duolinguo de Espanhol',
        'Fazer Duolinguo de Francês'
      ]
    ],

    'Flow': [
      [
        'Evolução Flow Work',
        'Criar Plataforma de desenvolvimento Flow',
        'Criar Plataforma Flow View',
        'Escrever Livro Flow'
      ]
    ],


    'Criar Plataforma Flow View': [
      [
        'Criar div flow view'
      ],
      [
        'Exportar JSON'
      ],
      [
        'Importar JSON'
      ],
      [
        'Importar JSON'
      ],
      [
        'Visualizar árvore compilada'
      ],
      [
        'Validar modelo flow view'
      ],
      [
        'Criar fluxo de redirecionamento páginas'
      ],
      [
        'Gerar aplicação a partir das configurações'
      ]
    ],

    'Criar div flow view': [
      [
        'Transformar árvore JSON em elementos html'
      ],
      [
        'Transformar elemento visual em JSON'
      ]
    ],

    'Transformar elemento visual em JSON': [
      [
        'Adicionar elemento a árvore sintática'
      ]
    ],

    'Adicionar elemento a árvore': [
      [
        'Criar teste unitário de adição'
      ]
    ],

    'Transformar árvore JSON em elementos html': [
      [
        'Compilar árvore sintática'
      ],
      [
        'Transformar árvore sintática em html'
      ]
    ],

    'Transformar árvore sintática em html': [
      [
        'Criar função de criação de elemento'
      ],
      [
        'Criar funções de estilização'
      ],
      [
        'Criar função que recebe árvore sintática e executa a respectiva função'
      ]
    ],

    'Criar função que recebe árvore sintática e executa a respectiva função': [
      [
        'Transformar para árvore compilada'
      ],
      [
        'Percorrer árvore e criar elementos'
      ],
      [
        'Percorrer árvore e estilizar os elementos'
      ]
    ],

    'Validar modelo flow view': [
      [
        'Criar Chat'
      ]
    ],

    'Criar Plataforma de desenvolvimento Flow': [
      [
        'Validar código flow'
      ],
      [
        'Transformar código em fluxo',
        'Transformar fluxo em código'
      ]
    ],

    'Validar código flow': [
      [
        'Criar Chat'
      ]
    ],

    'Pessoal': [
      [
        'Backup dos dados',
        'Corpo',
        'Estudos'
      ]
    ],

    'Estudos': [
      [
        'Estudar matemática',
        'Estudar filosofia',
        'Aprender Idiomas',
        'Estudar física',
        'Estudar química'
      ]
    ]
  }
});