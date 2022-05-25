import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import SingleProduct from './SingleProduct'

const ProductListing = () => {
    const products = useSelector(state => state.allProducts.products)
     const dispatch = useDispatch();

     

    const fetchProducts = async()=>{
        const data = await axios.get('https://fakestoreapi.com/products')
        dispatch(setProducts(data.data))
    }

    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div style={{display: 'flex',flexWrap:'wrap'}}>
        <SingleProduct/>
    </div>
  )
}

export default ProductListing