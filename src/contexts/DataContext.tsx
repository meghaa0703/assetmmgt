
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  department: string;
  title: string;
  type: string;
  inwardDate: string;
  quantity: string;
  productSerialNumber: string;
  brandMake: string;
  range: string;
  modelNumber: string;
  calibrationRequired: string;
  lastCalibrationDate: string;
  nextCalibrationDate: string;
  assetTagNumber: string;
  project: string;
  mqiSerialNumber: string;
  cost: string;
  purchaseDate: string;
}

interface Assignment {
  id: string;
  productSerialNo: string;
  productDescription: string;
  model: string;
  productType: string;
  mqiSerialNo: string;
  quantity: string;
  employeeId: string;
  employeeName: string;
  employeeEmailId: string;
  dateAssigned: string;
  dateReturned: string;
  assignedBy: string;
}

interface Return {
  id: string;
  productSerialNo: string;
  productDescription: string;
  modelNo: string;
  mqiSerialNo: string;
  quantity: string;
  employeeId: string;
  employeeName: string;
  employeeEmailId: string;
  returnDate: string;
}

interface DataContextType {
  products: Product[];
  assignments: Assignment[];
  returns: Return[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  addAssignment: (assignment: Omit<Assignment, 'id'>) => void;
  addReturn: (returnItem: Omit<Return, 'id'>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [returns, setReturns] = useState<Return[]>([]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const addAssignment = (assignment: Omit<Assignment, 'id'>) => {
    const newAssignment = {
      ...assignment,
      id: Date.now().toString()
    };
    setAssignments(prev => [...prev, newAssignment]);
  };

  const addReturn = (returnItem: Omit<Return, 'id'>) => {
    const newReturn = {
      ...returnItem,
      id: Date.now().toString(),
      returnDate: new Date().toISOString().split('T')[0]
    };
    setReturns(prev => [...prev, newReturn]);
  };

  return (
    <DataContext.Provider value={{
      products,
      assignments,
      returns,
      addProduct,
      addAssignment,
      addReturn
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
