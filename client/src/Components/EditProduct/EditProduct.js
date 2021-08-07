import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap';
import './EditProduct.css'
import {useDispatch} from "react-redux"
import {editProduct} from '../../JS/actions/product/product'
import { Link } from 'react-router-dom';


function EditProduct(props) {
    
    const dispatch = useDispatch()
    const [name, setname] = useState(props.location.state.product.name)
    const [price, setprice] = useState(props.location.state.product.price)
    const [category, setcategory] = useState(props.location.state.product.category)
    const [description, setdescription] = useState(props.location.state.product.description)
    const [image, setimage] = useState(props.location.state.product.image)
    return (
        <div className="editproduit">
            <form action="/action_page.php">
        <label htmlFor="fname">Name</label>
        <input type="text" id="fname" name="name"  value={name}  onChange={(e)=>setname(e.target.value)} />

        <label htmlFor="lname">Category</label>
        <input type="text" id="lname" name="category"  value={category}  onChange={(e)=>setcategory(e.target.value)} />

        <label htmlFor="country">Price</label>
        <input type="text" id="lname" name="price"   value={price}  onChange={(e)=>setprice(e.target.value)} />

        <label htmlFor="country">Description</label>
        <input type="text" id="lname" name="description"  value={description}  onChange={(e)=>setdescription(e.target.value)} />

        <label htmlFor="country">Image</label>
        <input type="text" id="lname" name="image"   value={image}  onChange={(e)=>setimage(e.target.value)} />
        
        <Link to = {`/${props.location.state.product.category}`}>
       <button onClick={()=> {dispatch(editProduct(props.location.state.product._id,{name,price,description,category,image}))}}> Edit </button>
       </Link>
      </form>
        </div>
    )
}

export default EditProduct
