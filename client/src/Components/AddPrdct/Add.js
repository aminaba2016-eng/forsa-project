import React, {useEffect, useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { postProduct,editProduct, getProducts  } from '../../JS/actions/product/product'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

import DropdownBt from './DropdownBt'



const AddPrduct = () => {
    const [product, setProduct] = useState({name:"",image:"",price:"",category:"",description:""}) 
    const useReducer = useSelector((state) => state.produtReducer.product)
    const edit = useSelector((state) => state.editProductReducer.edit)
    const dispatch = useDispatch()

 
 
const handleChange=(e)=>{
  // ma ya3mal 7ata event ma tsirech refresh ll form
  e.preventDefault();
  setProduct({...product,[e.target.name]:e.target.value})
}


    return (
      <div>

  <Form>
    <Form.Field>
      <label>name</label>
      <input value = {product.name} placeholder='name' name="name" onChange={handleChange}/>
    </Form.Field>

    <Form.Field>
      <label>description</label>
      <input value = {product.description} placeholder='description' name="description" onChange={handleChange}/>
    </Form.Field>
   
    <Form.Field>
      <label>image</label>
      <input value = {product.image} placeholder='image' name="image" onChange={handleChange}/>
    </Form.Field>
    
   
    <Form.Field>
      <label>price</label>
      <input  value = {product.price} placeholder='price' name="price" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>category</label>
      <input  value = {product.category} placeholder='category' name="category" onChange={handleChange} />
    </Form.Field>
    <Link to='/'></Link>
    {/* <Form.Field>
    <label>category</label>
     < DropdownBt/>
    </Form.Field> */}
{/* //kif tabda ediit true yaffichi edit sinon yaffichi save */}
<Link to={`/${product.category}`} >
    <Button type='submit' onClick={()=>{dispatch(postProduct(product));dispatch(getProducts())}}>save</Button> 
    </Link>
  </Form>

  </div>
    );

    
}

export default AddPrduct