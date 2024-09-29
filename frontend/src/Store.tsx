// Import Statements
import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { Cart, CartItem } from './types/Cart';

// Type Definitions
type AppState = {
  mode: string;
  cart: Cart;
};

type Action =
  | { type: 'SWITCH_MODE' }
  | { type: 'CART_ADD_ITEM'; payload: CartItem };

// Helper Functions for Initial State
const getInitialMode = (): string => {
  const storedMode = localStorage.getItem('mode');
  if (storedMode) return storedMode;
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
};

const getInitialCart = (): Cart => {
  try {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')!)
      : [];
    const shippingAddress = localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress')!)
      : { location: {} };
    const paymentMethod = localStorage.getItem('paymentMethod') || 'PayPal';

    return {
      cartItems,
      shippingAddress,
      paymentMethod,
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    };
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
    return {
      cartItems: [],
      shippingAddress: { location: {} },
      paymentMethod: 'PayPal',
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    };
  }
};

// Initial State
const initialState: AppState = {
  mode: getInitialMode(),
  cart: getInitialCart(),
};

// Reducer Function
function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SWITCH_MODE': {
      const newMode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mode', newMode);
      return { ...state, mode: newMode };
    }

    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item: CartItem) => item._id === newItem._id
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item: CartItem) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}

// Context Interface
interface StoreContextProps {
  state: AppState;
  dispatch: Dispatch<Action>;
}

// Create Context
const Store = createContext<StoreContextProps>({
  state: initialState,
  dispatch: () => undefined, // Default no-op dispatch
});

// Provider Component
function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

export { Store, StoreProvider };
