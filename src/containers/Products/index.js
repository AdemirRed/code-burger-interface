/* eslint-disable import-helpers/order-imports */
import React, { useEffect, useState } from 'react';

import ProductsLogo from '../../assets/img/products-logo.svg';
import { Container, ProductsImg, CategoryButton, CategoryMenu, ProductsContainer } from './style';
import api from '../../services/api';
import { CardProduct, Header } from '../../components';
import formatCurrency from '../../utils/formatCurrency';

export function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'Todos' }, ...data];
      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products');

      const newProducts = allProducts.map((product) => {
        return { ...product, formattedPrice: formatCurrency(product.price) };
      });

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <Header></Header>
      <ProductsImg src={ProductsLogo} alt="logo da Products" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              type="button"
              key={category.id}
              data-active={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => <CardProduct key={product.id} product={product} />)}
      </ProductsContainer>
    </Container>
  );
}
