'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, Lock, CreditCard, Truck, AlertCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/api';
import { validateShippingInfo, masks, ValidationError } from '@/lib/validation';

type Step = 'cart' | 'shipping' | 'payment';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<Step>('cart');
  const { items, subtotal, shipping, total, updateQuantity, removeItem } = useCart();

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);

  const getError = (field: string): string | undefined => {
    return errors.find(e => e.field.toLowerCase() === field.toLowerCase())?.message;
  };

  const handleShippingContinue = () => {
    const validationErrors = validateShippingInfo(shippingInfo);
    setErrors(validationErrors);
    if (validationErrors.length === 0) {
      setCurrentStep('payment');
    }
  };

  const handlePhoneChange = (value: string) => {
    setShippingInfo({ ...shippingInfo, phone: masks.phone(value) });
  };

  const handleZipCodeChange = (value: string) => {
    setShippingInfo({ ...shippingInfo, zipCode: masks.zipCode(value) });
  };

  const steps = [
    { id: 'cart', label: 'Sacola' },
    { id: 'shipping', label: 'Entrega' },
    { id: 'payment', label: 'Pagamento' },
  ];

  if (items.length === 0) {
    return (
      <div className="pt-28 min-h-screen">
        <div className="container-custom py-16 text-center">
          <h1 className="font-display text-display-md mb-4">Sua sacola está vazia</h1>
          <p className="text-graphite mb-8">
            Explore nossa coleção e encontre peças incríveis.
          </p>
          <Link href="/products" className="btn-primary">
            Explorar Produtos
          </Link>
        </div>
      </div>
    );
  }

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
            <span className="text-onyx">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-ivory border-b border-cloud">
        <div className="container-custom py-6">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center gap-2 ${
                    currentStep === step.id
                      ? 'text-onyx'
                      : steps.findIndex((s) => s.id === currentStep) > index
                      ? 'text-champagne'
                      : 'text-graphite'
                  }`}
                >
                  <span
                    className={`w-8 h-8 flex items-center justify-center text-sm font-accent border ${
                      currentStep === step.id
                        ? 'border-onyx bg-onyx text-ivory'
                        : steps.findIndex((s) => s.id === currentStep) > index
                        ? 'border-champagne bg-champagne text-onyx'
                        : 'border-cloud'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="hidden md:block text-sm">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 md:w-16 h-px bg-cloud mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Cart Step */}
            {currentStep === 'cart' && (
              <div className="bg-ivory p-6 md:p-8">
                <h2 className="font-display text-xl mb-6">Sua Sacola</h2>

                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}-${item.color.name}`}
                      className="flex gap-4 pb-6 border-b border-cloud"
                    >
                      <div className="relative w-24 h-32 bg-cloud flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{item.product.name}</h3>
                            <p className="text-sm text-graphite mt-1">
                              {item.color.name} / {item.size}
                            </p>
                          </div>
                          <p className="font-accent">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-cloud">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.color.name,
                                  item.quantity - 1
                                )
                              }
                              className="px-3 py-1 hover:bg-cloud transition-colors"
                            >
                              -
                            </button>
                            <span className="w-10 text-center text-sm font-accent">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.color.name,
                                  item.quantity + 1
                                )
                              }
                              className="px-3 py-1 hover:bg-cloud transition-colors"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() =>
                              removeItem(item.product.id, item.size, item.color.name)
                            }
                            className="text-sm text-graphite hover:text-onyx underline"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/products"
                    className="flex items-center gap-2 text-sm text-graphite hover:text-onyx"
                  >
                    <ChevronLeft size={16} />
                    Continuar Comprando
                  </Link>
                  <button
                    onClick={() => setCurrentStep('shipping')}
                    className="btn-primary"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {/* Shipping Step */}
            {currentStep === 'shipping' && (
              <div className="bg-ivory p-6 md:p-8">
                <h2 className="font-display text-xl mb-6">Endereço de Entrega</h2>

                <form className="space-y-4">
                  {errors.length > 0 && (
                    <div className="bg-red-50 border border-red-200 p-4 flex items-start gap-3">
                      <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-red-800">
                          Por favor, corrija os erros abaixo:
                        </p>
                        <ul className="text-sm text-red-600 mt-1 list-disc list-inside">
                          {errors.map((error, i) => (
                            <li key={i}>{error.message}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Nome completo *</label>
                      <input
                        type="text"
                        value={shippingInfo.name}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, name: e.target.value })
                        }
                        className={`input ${getError('nome') ? 'border-red-500' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">E-mail *</label>
                      <input
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, email: e.target.value })
                        }
                        className={`input ${getError('e-mail') ? 'border-red-500' : ''}`}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Telefone *</label>
                      <input
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="(11) 99999-9999"
                        className={`input ${getError('telefone') ? 'border-red-500' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CEP *</label>
                      <input
                        type="text"
                        value={shippingInfo.zipCode}
                        onChange={(e) => handleZipCodeChange(e.target.value)}
                        placeholder="00000-000"
                        className={`input ${getError('cep') ? 'border-red-500' : ''}`}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-2">Rua *</label>
                      <input
                        type="text"
                        value={shippingInfo.street}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, street: e.target.value })
                        }
                        className={`input ${getError('rua') ? 'border-red-500' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Número *</label>
                      <input
                        type="text"
                        value={shippingInfo.number}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, number: e.target.value })
                        }
                        className={`input ${getError('número') ? 'border-red-500' : ''}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Complemento</label>
                    <input
                      type="text"
                      value={shippingInfo.complement}
                      onChange={(e) =>
                        setShippingInfo({ ...shippingInfo, complement: e.target.value })
                      }
                      className="input"
                      placeholder="Apto, bloco, etc. (opcional)"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Bairro *</label>
                      <input
                        type="text"
                        value={shippingInfo.neighborhood}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            neighborhood: e.target.value,
                          })
                        }
                        className={`input ${getError('bairro') ? 'border-red-500' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Cidade *</label>
                      <input
                        type="text"
                        value={shippingInfo.city}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, city: e.target.value })
                        }
                        className={`input ${getError('cidade') ? 'border-red-500' : ''}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Estado *</label>
                      <input
                        type="text"
                        value={shippingInfo.state}
                        onChange={(e) =>
                          setShippingInfo({ ...shippingInfo, state: e.target.value })
                        }
                        className={`input ${getError('estado') ? 'border-red-500' : ''}`}
                      />
                    </div>
                  </div>
                </form>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setCurrentStep('cart')}
                    className="flex items-center gap-2 text-sm text-graphite hover:text-onyx"
                  >
                    <ChevronLeft size={16} />
                    Voltar
                  </button>
                  <button
                    onClick={handleShippingContinue}
                    className="btn-primary"
                  >
                    Continuar para Pagamento
                  </button>
                </div>
              </div>
            )}

            {/* Payment Step */}
            {currentStep === 'payment' && (
              <div className="bg-ivory p-6 md:p-8">
                <h2 className="font-display text-xl mb-6">Pagamento</h2>

                <div className="space-y-6">
                  {/* Credit Card Option */}
                  <label className="flex items-start gap-4 p-4 border border-cloud cursor-pointer hover:border-onyx transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      defaultChecked
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CreditCard size={20} />
                        <span className="font-medium">Cartão de Crédito</span>
                      </div>
                      <p className="text-sm text-graphite mt-1">
                        Parcele em até 6x sem juros
                      </p>
                    </div>
                  </label>

                  {/* PIX Option */}
                  <label className="flex items-start gap-4 p-4 border border-cloud cursor-pointer hover:border-onyx transition-colors">
                    <input type="radio" name="payment" value="pix" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">PIX</span>
                        <span className="badge-sale">5% OFF</span>
                      </div>
                      <p className="text-sm text-graphite mt-1">
                        Pagamento instantâneo com desconto
                      </p>
                    </div>
                  </label>

                  {/* Boleto Option */}
                  <label className="flex items-start gap-4 p-4 border border-cloud cursor-pointer hover:border-onyx transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="boleto"
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <span className="font-medium">Boleto Bancário</span>
                      <p className="text-sm text-graphite mt-1">
                        Vencimento em 3 dias úteis
                      </p>
                    </div>
                  </label>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setCurrentStep('shipping')}
                    className="flex items-center gap-2 text-sm text-graphite hover:text-onyx"
                  >
                    <ChevronLeft size={16} />
                    Voltar
                  </button>
                  <button className="btn-primary flex items-center gap-2">
                    <Lock size={16} />
                    Finalizar Pedido
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-ivory p-6 sticky top-32">
              <h3 className="font-display text-lg mb-6">Resumo do Pedido</h3>

              {/* Items Preview */}
              <div className="space-y-4 mb-6 pb-6 border-b border-cloud">
                {items.slice(0, 3).map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-3"
                  >
                    <div className="relative w-12 h-16 bg-cloud flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-onyx text-ivory text-xs flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-graphite">
                        {item.color.name} / {item.size}
                      </p>
                    </div>
                    <p className="text-sm font-accent">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
                {items.length > 3 && (
                  <p className="text-sm text-graphite">
                    + {items.length - 3} itens
                  </p>
                )}
              </div>

              {/* Coupon */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Cupom de desconto"
                    className="input flex-1 text-sm"
                  />
                  <button className="btn-secondary text-sm px-4">Aplicar</button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-graphite">Subtotal</span>
                  <span className="font-accent">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite">Frete</span>
                  <span className="font-accent">
                    {shipping === 0 ? (
                      <span className="text-green-600">Grátis</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-cloud text-base font-medium">
                  <span>Total</span>
                  <span className="font-accent">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-cloud space-y-3">
                <div className="flex items-center gap-2 text-xs text-graphite">
                  <Lock size={14} />
                  <span>Pagamento 100% seguro</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-graphite">
                  <Truck size={14} />
                  <span>Embalagem premium sustentável</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
