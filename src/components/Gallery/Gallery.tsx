import React, { FC, useState } from 'react'

import './Gallery.css'

interface IProps {
  images: string[]
}

const Gallery: FC<IProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const setNextIndex = (): void => {
    if (images[index + 1]) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  const setPrevIndex = (): void => {
    if (images[index - 1]) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  return (
    <div className="gallery">
      <img className="gallery__img" src={images[index]} alt="Фото товара" />
      <div className="gallery__controls">
        <button onClick={setPrevIndex} type="button" className="control__button">
          {'<'}
        </button>
        <button onClick={setNextIndex} type="button" className="control__button">
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default Gallery
