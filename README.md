# NŌVA — Athleisure de Luxo

> **"Move with power. Live with grace."**

Loja online premium de moda feminina & fitness. Performance meets elegance.

![NŌVA](https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80)

## 🌟 Sobre o Projeto

NŌVA é uma marca de athleisure de luxo para mulheres que performam na vida como performam no treino. Este projeto é uma loja online completa desenvolvida com as melhores tecnologias do mercado.

### Stack Tecnológica

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Deploy**: Vercel

## 🎨 Identidade Visual

### Cores da Marca

| Cor | Nome | Hex |
|-----|------|-----|
| ⬛ | Onyx | `#0D0D0D` |
| ⬜ | Ivory | `#FAF8F5` |
| 🟫 | Sand | `#C4B7A6` |
| 🟤 | Champagne | `#D4AF37` |
| ⚪ | Cloud | `#E8E4DF` |
| 🔘 | Graphite | `#2D2D2D` |

### Tipografia

- **Display**: Cormorant Garamond
- **Body**: Inter
- **Accent**: Space Grotesk

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/enricorznd/nova-athleisure.git

# Entre na pasta
cd nova-athleisure

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Verifica erros de lint
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (páginas e API)
│   ├── api/               # API Routes
│   │   ├── products/      # Produtos
│   │   ├── categories/    # Categorias
│   │   └── shipping/      # Cálculo de frete
│   ├── product/[id]/      # Página do produto
│   ├── products/          # Lista de produtos
│   ├── checkout/          # Checkout
│   ├── about/             # Sobre nós
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Homepage
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   ├── Cart.tsx           # Carrinho lateral
│   ├── ProductCard.tsx    # Card de produto
│   ├── ProductCarousel.tsx # Carrossel de produtos
│   ├── Hero.tsx           # Seção hero
│   ├── CategoryCard.tsx   # Card de categoria
│   ├── ImageGallery.tsx   # Galeria de imagens
│   ├── Selectors.tsx      # Seletores de cor/tamanho
│   └── QuantitySelector.tsx # Seletor de quantidade
├── context/               # Contextos React
│   └── CartContext.tsx    # Estado do carrinho
├── lib/                   # Utilitários
│   ├── api.ts            # Funções de API
│   ├── data.ts           # Dados dos produtos
│   └── utils.ts          # Funções auxiliares
├── styles/               # Estilos
│   └── globals.css       # CSS global + Tailwind
└── types/                # TypeScript
    └── index.ts          # Definições de tipos
```

## 🛍️ Funcionalidades

### ✅ Implementadas

- [x] Homepage com hero, categorias e carrosséis
- [x] Listagem de produtos com filtros
- [x] Página individual do produto
- [x] Carrinho de compras (localStorage)
- [x] Checkout multi-step
- [x] Design responsivo
- [x] API Routes para produtos
- [x] Página Sobre Nós

### 🔜 Próximas Features

- [ ] Autenticação de usuários
- [ ] Integração com gateway de pagamento
- [ ] Sistema de favoritos
- [ ] Avaliações de produtos
- [ ] Busca avançada
- [ ] Painel administrativo

## 📱 Coleções

- **TRAIN** — Peças de alta performance para treinos intensos
- **MOVE** — Athleisure premium para o dia a dia
- **REST** — Loungewear sofisticado para momentos de pausa
- **SWIM** — Beachwear elegante da praia ao brunch

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

---

<p align="center">
  <strong>Created with ❤️ by enricorznd</strong>
</p>
