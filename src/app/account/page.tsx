'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  User, 
  Package, 
  Heart, 
  MapPin, 
  CreditCard, 
  LogOut,
  Edit,
  Plus,
  ShoppingBag
} from 'lucide-react';

type Tab = 'profile' | 'orders' | 'wishlist' | 'addresses';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  // Mock user data - em produção viria de autenticação
  const user = {
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    phone: '(11) 99999-9999',
    avatar: null,
  };

  // Mock orders
  const orders = [
    {
      id: 'NV-2026-001',
      date: '01/02/2026',
      status: 'Entregue',
      total: 598.00,
      items: 2,
    },
    {
      id: 'NV-2026-002',
      date: '28/01/2026',
      status: 'Em trânsito',
      total: 349.00,
      items: 1,
    },
  ];

  // Mock wishlist
  const wishlist = [
    {
      id: '1',
      name: 'Sculpt High-Rise Legging',
      price: 349.00,
      image: 'https://images.pexels.com/photos/6311652/pexels-photo-6311652.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '5',
      name: 'Luxe Jogger Pants',
      price: 399.00,
      image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  // Mock addresses
  const addresses = [
    {
      id: '1',
      label: 'Casa',
      street: 'Rua das Flores, 123',
      neighborhood: 'Jardins',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567',
      isDefault: true,
    },
  ];

  const tabs = [
    { id: 'profile' as Tab, label: 'Meus Dados', icon: User },
    { id: 'orders' as Tab, label: 'Pedidos', icon: Package },
    { id: 'wishlist' as Tab, label: 'Favoritos', icon: Heart },
    { id: 'addresses' as Tab, label: 'Endereços', icon: MapPin },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="pt-28 min-h-screen bg-cloud/30">
      {/* Breadcrumb */}
      <div className="bg-ivory border-b border-cloud">
        <div className="container-custom py-4">
          <nav className="flex items-center text-sm text-graphite">
            <Link href="/" className="hover:text-onyx transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-onyx">Minha Conta</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-8 md:py-12">
        <h1 className="font-display text-display-md mb-8">Minha Conta</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-ivory p-6">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-cloud">
                <div className="w-14 h-14 rounded-full bg-sand/30 flex items-center justify-center">
                  <User size={24} className="text-graphite" />
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-graphite">{user.email}</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'bg-onyx text-ivory'
                        : 'hover:bg-cloud text-graphite'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-graphite hover:bg-cloud transition-colors mt-4 border-t border-cloud pt-4">
                  <LogOut size={18} />
                  Sair
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-ivory p-6 md:p-8">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl">Meus Dados</h2>
                    <button className="flex items-center gap-2 text-sm text-champagne hover:text-onyx transition-colors">
                      <Edit size={16} />
                      Editar
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-graphite uppercase tracking-wider mb-2">
                        Nome Completo
                      </label>
                      <p className="text-onyx">{user.name}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-graphite uppercase tracking-wider mb-2">
                        E-mail
                      </label>
                      <p className="text-onyx">{user.email}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-graphite uppercase tracking-wider mb-2">
                        Telefone
                      </label>
                      <p className="text-onyx">{user.phone}</p>
                    </div>
                    <div>
                      <label className="block text-xs text-graphite uppercase tracking-wider mb-2">
                        CPF
                      </label>
                      <p className="text-onyx">***.***.***-**</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-cloud">
                    <h3 className="font-display text-lg mb-4">Alterar Senha</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-graphite uppercase tracking-wider mb-2">
                          Senha Atual
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="input w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-graphite uppercase tracking-wider mb-2">
                          Nova Senha
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="input w-full"
                        />
                      </div>
                    </div>
                    <button className="btn-primary mt-4">Alterar Senha</button>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h2 className="font-display text-xl mb-6">Meus Pedidos</h2>

                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="border border-cloud p-4 hover:border-sand transition-colors"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <p className="font-accent font-medium">{order.id}</p>
                              <p className="text-sm text-graphite">{order.date}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-graphite">Status</p>
                              <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider ${
                                order.status === 'Entregue' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-champagne/20 text-champagne'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-graphite">Itens</p>
                              <p className="font-accent">{order.items}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-graphite">Total</p>
                              <p className="font-accent font-medium">{formatPrice(order.total)}</p>
                            </div>
                            <button className="btn-secondary text-xs py-2 px-4">
                              Detalhes
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <ShoppingBag size={48} className="mx-auto text-graphite mb-4" />
                      <p className="text-graphite mb-4">Você ainda não fez nenhum pedido.</p>
                      <Link href="/products" className="btn-primary">
                        Explorar Produtos
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="font-display text-xl mb-6">Meus Favoritos</h2>

                  {wishlist.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((item) => (
                        <Link
                          key={item.id}
                          href={`/product/${item.id}`}
                          className="group"
                        >
                          <div className="relative aspect-[3/4] bg-cloud mb-3 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <button 
                              className="absolute top-3 right-3 w-8 h-8 bg-ivory flex items-center justify-center hover:bg-champagne transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                // Remove from wishlist
                              }}
                            >
                              <Heart size={16} fill="currentColor" />
                            </button>
                          </div>
                          <h3 className="text-sm font-medium group-hover:text-champagne transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm font-accent text-graphite">
                            {formatPrice(item.price)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Heart size={48} className="mx-auto text-graphite mb-4" />
                      <p className="text-graphite mb-4">Sua lista de favoritos está vazia.</p>
                      <Link href="/products" className="btn-primary">
                        Explorar Produtos
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl">Meus Endereços</h2>
                    <button className="flex items-center gap-2 text-sm text-champagne hover:text-onyx transition-colors">
                      <Plus size={16} />
                      Adicionar
                    </button>
                  </div>

                  {addresses.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div
                          key={address.id}
                          className={`border p-4 relative ${
                            address.isDefault ? 'border-champagne' : 'border-cloud'
                          }`}
                        >
                          {address.isDefault && (
                            <span className="absolute top-0 right-0 bg-champagne text-onyx text-xs px-2 py-1">
                              Padrão
                            </span>
                          )}
                          <p className="font-medium mb-1">{address.label}</p>
                          <p className="text-sm text-graphite">
                            {address.street}
                          </p>
                          <p className="text-sm text-graphite">
                            {address.neighborhood}, {address.city} - {address.state}
                          </p>
                          <p className="text-sm text-graphite">{address.zipCode}</p>
                          <div className="flex gap-4 mt-4">
                            <button className="text-sm text-champagne hover:text-onyx transition-colors">
                              Editar
                            </button>
                            <button className="text-sm text-graphite hover:text-red-600 transition-colors">
                              Excluir
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <MapPin size={48} className="mx-auto text-graphite mb-4" />
                      <p className="text-graphite mb-4">Você ainda não cadastrou nenhum endereço.</p>
                      <button className="btn-primary">Adicionar Endereço</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
