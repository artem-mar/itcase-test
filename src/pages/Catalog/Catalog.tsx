import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchProducts } from '../../store/productsSlice'
import ProductCard from '../../components/ProductCard/ProductCard'
import { IProduct } from '../../types'
import './Catalog.css'

const Catalog = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <main className="catalog">
      {products && products.map((p: IProduct) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </main>
  )
}

export default Catalog
