import React, {
  SetStateAction, Dispatch, FC, useState,
} from 'react';
import { useAppSelector } from '../../hooks';
import './ProductInfo.css';

interface IProps {
  setSelectedColorIndex: Dispatch<SetStateAction<number>>;
  selectedColorIndex: number;
}

const ProductInfo: FC<IProps> = ({ setSelectedColorIndex, selectedColorIndex }) => {
  const currentProduct = useAppSelector((state) => state.products.currentProduct)
  const allSizes = useAppSelector((state) => state.products.sizes)
  const currentColor = currentProduct?.colors[selectedColorIndex]
  const availableSizes = currentColor?.sizes

  const [currentSize, setCurrentSize] = useState<number | null>(null)

  return (
    <div className="product-info">
      <div className="product-info__wrapper">

        <h2>{currentProduct?.name}</h2>
        <span>{currentColor?.description}</span>
        <span>Цена: {currentColor?.price}</span>
        <div className="product-info__btn-group">
          {currentProduct?.colors.map((color, i) => (
            <button
              key={color.id}
              type="button"
              onClick={() => setSelectedColorIndex(i)}
              className={`btn-group__btn ${selectedColorIndex === i && 'btn-group__btn_active'}`}
            >
              {color.name}
            </button>
          ))}
        </div>
        <div className="product-info__btn-group">
          {availableSizes?.length ? (
            availableSizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setCurrentSize(size)}
                className={`btn-group__btn ${currentSize === size && 'btn-group__btn_active'}`}
              >
                {allSizes?.find((s) => s.id === size)?.label}
              </button>
            ))
          ) : (
            <span>Все размеры закончились</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
