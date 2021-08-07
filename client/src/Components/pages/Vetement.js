import React, {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { postProduct,editProduct,getProducts } from '../../JS/actions/product/product'
import '../../App.css';
import Navbar1 from '../Navbar1/Navbar1'

import Cards from '../Cards/Cards'



export default function Vetement() {
 const dispatch = useDispatch()

useEffect(() => {
  dispatch(getProducts())
}, [])
const products = useSelector(state => state.produtReducer.products)

  return <h1 className='vetement'>
      <Navbar1 />
     
{ products.filter(el=>el.category==="Vetement").map(el=> <Cards product={el} />)}
{/* { products.filter(el=>el.category==="Vetement").map(el=> <h1>{el.name}</h1>)} */}


     

      
     </h1>;

}