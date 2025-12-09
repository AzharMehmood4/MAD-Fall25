import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  totalAmount: number;
  date: string;
  address: string;
  paymentMethod: string;
  items: Product[];
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (orderId: string) => void;
  updateStatus: (orderId: string, newStatus: Order['status']) => void;
}

export const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Ensure unique ID and default status
  const addOrder = (order: Order) => {
    const newOrder = {
      ...order,
      id: order.id || Date.now().toString(), 
      status: order.status || 'Pending',
    };
    setOrders((prev) => [...prev, newOrder]);
  };

 
  const removeOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  };

  const updateStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, removeOrder, updateStatus }}>
      {children}
    </OrdersContext.Provider>
  );
};
