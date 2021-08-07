
import React from 'react';
import{useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import './Cards.css';
import {IoMdCloseCircle } from "react-icons/io";
import { IoMdCreate  } from "react-icons/io";
import {Link} from 'react-router-dom'
// import {FaEdit} from "react-icons/i";
import { postPanier , getPaniers } from '../../JS/actions/panier/panier';
import { deleteProduct, getProducts } from '../../JS/actions/product/product';


function Cards({product}) {
  
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  return (
    <div>
        
        <title>{product.name}</title>
        <link href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi" rel="stylesheet" />
        <div className="wrapper">
          <div className="cardprd">
          <div className="product-img">
            <img src={product.image} height={420} width={327} />
          </div>
          <div className="product-info">
          { user && user.isAdmin? 
         <div>
          <IoMdCloseCircle style={{color:'red'}} onClick={()=>{dispatch(deleteProduct(product._id));dispatch(getProducts())}}/>
          
          <Link to={{pathname:"/editproduct", state:{product} }}> <IoMdCreate style={{color:'green'}} /></Link> 
          </div> :null}
            <div className="product-text">
              <h1>{product.name}</h1>
              
              
              <p>{product.description} </p>
            </div>
            <div className="product-price-btn">
              <p><span>{product.price}</span>$</p>

      {user?    <Link to= '/panier' >

          <button type="button" 
           onClick={()=>{dispatch(postPanier({userName:user.name ,ProductName:product.name, pricetotal:product.price,Productimage:product.image}));
           dispatch(getPaniers())}} >Ajouter au Panier</button></Link>: 

             <Link to= '/singnin' >
           <button type="button" >Ajouter au Panier</button></Link>}
              
          

            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cards;
