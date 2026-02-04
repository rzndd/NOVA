'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product, CartItem, Size, ProductColor } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; size: Size; color: ProductColor } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; size: Size; colorName: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; size: Size; colorName: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size: Size, color: ProductColor) => void;
  removeItem: (productId: string, size: Size, colorName: string) => void;
  updateQuantity: (productId: string, size: Size, colorName: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, color } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.size === size && item.color.name === color.name
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
        return { ...state, items: newItems, isOpen: true };
      }

      return {
        ...state,
        items: [...state.items, { product, size, color, quantity: 1 }],
        isOpen: true,
      };
    }

    case 'REMOVE_ITEM': {
      const { productId, size, colorName } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item => !(item.product.id === productId && item.size === size && item.color.name === colorName)
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, size, colorName, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.product.id === productId && item.size === size && item.color.name === colorName)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === productId && item.size === size && item.color.name === colorName
            ? { ...item, quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'LOAD_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('nova-cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: items });
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('nova-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product, size: Size, color: ProductColor) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, size, color } });
  };

  const removeItem = (productId: string, size: Size, colorName: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, size, colorName } });
  };

  const updateQuantity = (productId: string, size: Size, colorName: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, colorName, quantity } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });

  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = state.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 299 ? 0 : 29.90;
  const total = subtotal + shipping;

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        itemCount,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
