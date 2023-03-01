import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types'
import './ProductCard.css'

const ProductCard = (product: IProduct) => {
  const { colors, name, id } = product
  const genLink = () => `/product?id=${id}`

  return (
    <Link to={genLink()} className="card">
      <span className="card__title">{name}</span>
      <img className="card__img" alt="фото продукта" src={colors[0].images[0]} />
    </Link>
  );
}

export default ProductCard
