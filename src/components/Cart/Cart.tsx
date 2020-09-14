import React from 'react';

interface HeaderProps {
  items: string[];
}

interface Product {
  name: string,
  price: string,
  timeout: number
}
const products: Array<Product> = [];

export default function Cart({items}: HeaderProps) {
  
  return (

    <div>
      
    </div>
  )
}
