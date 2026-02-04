import { Product, CategoryInfo, Category } from '@/types';

export const categories: CategoryInfo[] = [
  {
    id: 'leggings',
    name: 'LEGGINGS',
    description: 'Leggings de alta performance para seus treinos',
    image: 'https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'tops',
    name: 'TOPS',
    description: 'Tops com suporte e estilo para qualquer atividade',
    image: 'https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'shorts',
    name: 'SHORTS',
    description: 'Shorts e bermudas para treinos intensos',
    image: 'https://images.pexels.com/photos/6454071/pexels-photo-6454071.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'conjuntos',
    name: 'CONJUNTOS',
    description: 'Looks completos combinando para arrasar',
    image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'macacoes',
    name: 'MACACÕES',
    description: 'Macacões e macaquinhos estilosos',
    image: 'https://images.pexels.com/photos/6551097/pexels-photo-6551097.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'seamless',
    name: 'SEAMLESS',
    description: 'Peças sem costura para máximo conforto',
    image: 'https://images.pexels.com/photos/6311496/pexels-photo-6311496.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const collections = [
  { id: 'soul', name: 'Soul', description: 'Básicos essenciais' },
  { id: 'seamless', name: 'Seamless+', description: 'Sem costura' },
  { id: 'activity', name: 'Activity', description: 'Alta performance' },
  { id: 'basic', name: 'Basic', description: 'Clássicos do dia a dia' },
  { id: 'action', name: 'Action', description: 'Para treinos intensos' },
  { id: 'aura', name: 'Aura', description: 'Elegância e movimento' },
];

export const products: Product[] = [
  // LEGGINGS
  {
    id: '1',
    name: 'Legging Fitness com Bolsos Soul',
    slug: 'legging-fitness-bolsos-soul',
    code: 'FT8667',
    price: 116.99,
    originalPrice: 129.99,
    description: 'Legging de alta compressão com bolsos laterais. Tecido tecnológico com proteção UV e secagem rápida. Cós alto para sustentação perfeita.',
    shortDescription: 'Legging com bolsos laterais e cós alto',
    category: 'leggings',
    collection: 'soul',
    images: [
      'https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311614/pexels-photo-6311614.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Azul Marinho', hex: '#1a237e' },
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Marrom', hex: '#5D4037' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Tecido tecnológico de compressão',
      'Bolsos laterais para celular',
      'Cós alto com sustentação',
      'Proteção UV50+',
      'Secagem rápida',
    ],
    isNew: true,
    isBestseller: true,
    stock: 150,
  },
  {
    id: '2',
    name: 'Legging Canelada Seamless+',
    slug: 'legging-canelada-seamless',
    code: 'FT8730',
    price: 135.89,
    originalPrice: 150.99,
    description: 'Legging seamless canelada com cós alto. Sem costuras para máximo conforto. Modelagem que valoriza a silhueta.',
    shortDescription: 'Legging sem costura canelada',
    category: 'leggings',
    collection: 'seamless',
    images: [
      'https://images.pexels.com/photos/6311674/pexels-photo-6311674.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311670/pexels-photo-6311670.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Verde Oliva', hex: '#556B2F' },
      { name: 'Vinho', hex: '#722F37' },
      { name: 'Preto', hex: '#0D0D0D' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Construção seamless',
      'Tecido canelado',
      'Cós alto modelador',
      'Máximo conforto',
    ],
    isNew: true,
    stock: 120,
  },
  {
    id: '3',
    name: 'Legging Básica com Cadarço',
    slug: 'legging-basica-cadarco',
    code: 'FT1307',
    price: 89.99,
    originalPrice: 132.99,
    description: 'Legging básica com detalhe de cadarço na cintura. Perfeita para o dia a dia e treinos leves.',
    shortDescription: 'Legging básica versátil',
    category: 'leggings',
    collection: 'basic',
    images: [
      'https://images.pexels.com/photos/6740300/pexels-photo-6740300.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Cinza', hex: '#616161' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Cadarço decorativo',
      'Tecido confortável',
      'Versátil',
    ],
    onSale: true,
    discountPercent: 32,
    stock: 80,
  },

  // TOPS
  {
    id: '4',
    name: 'Top Fitness Alças Reguláveis Soul',
    slug: 'top-alcas-regulaveis-soul',
    code: 'FT8700',
    price: 61.19,
    originalPrice: 67.99,
    description: 'Top com alças largas reguláveis para ajuste perfeito. Ideal para treinos de médio impacto.',
    shortDescription: 'Top com alças reguláveis',
    category: 'tops',
    collection: 'soul',
    images: [
      'https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6740063/pexels-photo-6740063.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Azul Marinho', hex: '#1a237e' },
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Branco', hex: '#FAF8F5' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Alças reguláveis',
      'Suporte médio',
      'Tecido respirável',
    ],
    isNew: true,
    isBestseller: true,
    stock: 200,
  },
  {
    id: '5',
    name: 'Top Canelado com Bojo Seamless+',
    slug: 'top-canelado-bojo-seamless',
    code: 'FT8732',
    price: 107.99,
    originalPrice: 119.99,
    description: 'Top seamless canelado com bojo removível. Suporte e conforto sem costuras.',
    shortDescription: 'Top sem costura com bojo',
    category: 'tops',
    collection: 'seamless',
    images: [
      'https://images.pexels.com/photos/6551097/pexels-photo-6551097.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6551098/pexels-photo-6551098.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Verde Oliva', hex: '#556B2F' },
      { name: 'Vinho', hex: '#722F37' },
      { name: 'Preto', hex: '#0D0D0D' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Bojo removível',
      'Sem costuras',
      'Tecido canelado',
    ],
    isNew: true,
    stock: 150,
  },
  {
    id: '6',
    name: 'Top Decote V Soul',
    slug: 'top-decote-v-soul',
    code: 'FT8710',
    price: 61.19,
    originalPrice: 67.99,
    description: 'Top com decote V elegante. Perfeito para yoga e pilates.',
    shortDescription: 'Top com decote V',
    category: 'tops',
    collection: 'soul',
    images: [
      'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Azul Marinho', hex: '#1a237e' },
      { name: 'Rosa', hex: '#E91E63' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Decote V',
      'Suporte leve',
      'Tecido macio',
    ],
    isNew: true,
    stock: 100,
  },

  // SHORTS
  {
    id: '7',
    name: 'Bermuda Fitness com Bolsos Soul',
    slug: 'bermuda-fitness-bolsos-soul',
    code: 'FT8621',
    price: 82.79,
    originalPrice: 91.99,
    description: 'Bermuda fitness com bolsos laterais. Cós alto e tecido respirável.',
    shortDescription: 'Bermuda com bolsos',
    category: 'shorts',
    collection: 'soul',
    images: [
      'https://images.pexels.com/photos/6454071/pexels-photo-6454071.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6454141/pexels-photo-6454141.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Azul Marinho', hex: '#1a237e' },
      { name: 'Preto', hex: '#0D0D0D' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Bolsos laterais',
      'Cós alto',
      'Tecido respirável',
    ],
    isNew: true,
    stock: 90,
  },
  {
    id: '8',
    name: 'Short Ciclista Soul',
    slug: 'short-ciclista-soul',
    code: 'FT8616',
    price: 71.99,
    originalPrice: 79.99,
    description: 'Short ciclista básico. Ideal para treinos de bike e corrida.',
    shortDescription: 'Short ciclista básico',
    category: 'shorts',
    collection: 'soul',
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Cinza', hex: '#616161' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Modelo ciclista',
      'Cós confortável',
      'Secagem rápida',
    ],
    isBestseller: true,
    stock: 130,
  },
  {
    id: '9',
    name: 'Short Modela Bumbum Seamless+',
    slug: 'short-modela-bumbum-seamless',
    code: 'FT7541',
    price: 98.09,
    originalPrice: 108.99,
    description: 'Short seamless com detalhe que modela o bumbum. Sem costuras.',
    shortDescription: 'Short modelador sem costura',
    category: 'shorts',
    collection: 'seamless',
    images: [
      'https://images.pexels.com/photos/6740300/pexels-photo-6740300.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311674/pexels-photo-6311674.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Nude', hex: '#D4A574' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Modela bumbum',
      'Sem costuras',
      'Cintura alta',
    ],
    isNew: true,
    stock: 85,
  },

  // CONJUNTOS
  {
    id: '10',
    name: 'Conjunto Fitness Soul',
    slug: 'conjunto-fitness-soul',
    code: 'FT8800',
    price: 159.99,
    originalPrice: 189.99,
    description: 'Conjunto completo com top e legging combinando. Look perfeito para o treino.',
    shortDescription: 'Conjunto top + legging',
    category: 'conjuntos',
    collection: 'soul',
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Azul Marinho', hex: '#1a237e' },
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Marrom', hex: '#5D4037' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      '2 peças incluídas',
      'Top + Legging',
      'Cores combinando',
    ],
    isNew: true,
    isBestseller: true,
    stock: 70,
  },
  {
    id: '11',
    name: 'Conjunto Seamless+ Canelado',
    slug: 'conjunto-seamless-canelado',
    code: 'FT8810',
    price: 229.99,
    originalPrice: 269.99,
    description: 'Conjunto seamless canelado. Top com bojo e legging cintura alta.',
    shortDescription: 'Conjunto sem costura canelado',
    category: 'conjuntos',
    collection: 'seamless',
    images: [
      'https://images.pexels.com/photos/6311496/pexels-photo-6311496.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Verde Oliva', hex: '#556B2F' },
      { name: 'Vinho', hex: '#722F37' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      '2 peças sem costura',
      'Tecido canelado premium',
      'Modelagem exclusiva',
    ],
    isNew: true,
    stock: 50,
  },

  // MACACÕES
  {
    id: '12',
    name: 'Macacão Alças Reguláveis Soul',
    slug: 'macacao-alcas-regulaveis-soul',
    code: 'FT8675',
    price: 147.59,
    originalPrice: 163.99,
    description: 'Macacão fitness com alças reguláveis. Modelagem que valoriza a silhueta.',
    shortDescription: 'Macacão com alças reguláveis',
    category: 'macacoes',
    collection: 'soul',
    images: [
      'https://images.pexels.com/photos/6551097/pexels-photo-6551097.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6551098/pexels-photo-6551098.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Marrom', hex: '#5D4037' },
      { name: 'Preto', hex: '#0D0D0D' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Alças reguláveis',
      'Modelagem escultural',
      'Tecido confortável',
    ],
    isNew: true,
    stock: 60,
  },
  {
    id: '13',
    name: 'Macaquinho Canelado Seamless+',
    slug: 'macaquinho-canelado-seamless',
    code: 'FT8728',
    price: 189.89,
    originalPrice: 210.99,
    description: 'Macaquinho seamless canelado com bojo. Peça única para treinos estilosos.',
    shortDescription: 'Macaquinho sem costura',
    category: 'macacoes',
    collection: 'seamless',
    images: [
      'https://images.pexels.com/photos/6740300/pexels-photo-6740300.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311674/pexels-photo-6311674.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Verde Oliva', hex: '#556B2F' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Bojo incluso',
      'Sem costuras',
      'Canelado premium',
    ],
    isNew: true,
    stock: 45,
  },

  // LIQUIDAÇÃO / SEAMLESS
  {
    id: '14',
    name: 'Top Elástico Furadinho Nation',
    slug: 'top-elastico-furadinho-nation',
    code: 'FT8450',
    price: 45.22,
    originalPrice: 66.99,
    description: 'Top com elástico furadinho decorativo. Design moderno e diferenciado.',
    shortDescription: 'Top com detalhe furadinho',
    category: 'tops',
    collection: 'basic',
    images: [
      'https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6740063/pexels-photo-6740063.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Preto', hex: '#0D0D0D' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Elástico decorativo',
      'Design diferenciado',
    ],
    onSale: true,
    discountPercent: 32,
    stock: 40,
  },
  {
    id: '15',
    name: 'Short Elástico Lateral Nation',
    slug: 'short-elastico-lateral-nation',
    code: 'FT8436',
    price: 40.49,
    originalPrice: 59.99,
    description: 'Short com elástico lateral furadinho. Combina com o top Nation.',
    shortDescription: 'Short com elástico lateral',
    category: 'shorts',
    collection: 'basic',
    images: [
      'https://images.pexels.com/photos/6454071/pexels-photo-6454071.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6454141/pexels-photo-6454141.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Preto', hex: '#0D0D0D' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Elástico lateral',
      'Combina com top Nation',
    ],
    onSale: true,
    discountPercent: 32,
    stock: 35,
  },
  {
    id: '16',
    name: 'Top Nadador Pink Seamless',
    slug: 'top-nadador-pink-seamless',
    code: 'FT6562',
    price: 63.89,
    originalPrice: 88.99,
    description: 'Top modelo nadador em pink vibrante. Com bojo e sem costuras.',
    shortDescription: 'Top nadador pink',
    category: 'seamless',
    collection: 'seamless',
    images: [
      'https://images.pexels.com/photos/6551097/pexels-photo-6551097.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6551098/pexels-photo-6551098.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Pink', hex: '#E91E63' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Modelo nadador',
      'Bojo removível',
      'Sem costuras',
    ],
    onSale: true,
    discountPercent: 28,
    stock: 30,
  },
  {
    id: '17',
    name: 'Legging Cintura Alta Seamless',
    slug: 'legging-cintura-alta-seamless',
    code: 'FT6580',
    price: 119.99,
    originalPrice: 149.99,
    description: 'Legging seamless cintura alta. Conforto absoluto sem costuras.',
    shortDescription: 'Legging seamless cintura alta',
    category: 'seamless',
    collection: 'seamless',
    images: [
      'https://images.pexels.com/photos/6311496/pexels-photo-6311496.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Pink', hex: '#E91E63' },
      { name: 'Preto', hex: '#0D0D0D' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Cintura alta',
      'Sem costuras',
      'Modelagem perfeita',
    ],
    onSale: true,
    discountPercent: 20,
    stock: 55,
  },
  {
    id: '18',
    name: 'Short Saia Fitness',
    slug: 'short-saia-fitness',
    code: 'FT7890',
    price: 79.99,
    originalPrice: 99.99,
    description: 'Short saia para treinos e dia a dia. Feminino e versátil.',
    shortDescription: 'Short saia versátil',
    category: 'shorts',
    collection: 'activity',
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: [
      { name: 'Preto', hex: '#0D0D0D' },
      { name: 'Rosa', hex: '#E91E63' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    features: [
      'Modelo saia',
      'Short interno',
      'Versátil',
    ],
    onSale: true,
    discountPercent: 20,
    stock: 65,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter(p => p.category === category);
};

export const getBestsellers = (): Product[] => {
  return products.filter(p => p.isBestseller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getOnSale = (): Product[] => {
  return products.filter(p => p.onSale);
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(p => p.collection === collection);
};

export const getCategoryInfo = (id: Category): CategoryInfo | undefined => {
  return categories.find(c => c.id === id);
};
