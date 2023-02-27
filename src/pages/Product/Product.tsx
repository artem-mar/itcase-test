import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrentProduct, fetchSizes } from '../../store/productsSlice';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Gallery from '../../components/Gallery/Gallery';
import './Product.css';

const Product = () => {
  const dispatch = useAppDispatch();
  const url = new URL(window.location.href);
  const currentProductId = Number(url.searchParams.get('id'));

  const currentProduct = useAppSelector((state) => state.products.currentProduct);

  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const currentColor = currentProduct?.colors[selectedColorIndex];

  useEffect(() => {
    dispatch(fetchSizes());
    dispatch(fetchCurrentProduct(currentProductId));
  }, []);

  return (
    <main className="grid-container">
      <Gallery images={currentColor?.images || []} />
      <ProductInfo
        selectedColorIndex={selectedColorIndex}
        setSelectedColorIndex={setSelectedColorIndex}
      />
    </main>
  );
};

export default Product;
