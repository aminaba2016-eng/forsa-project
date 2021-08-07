import React,{useEffect} from 'react'
import './Panier.css'
import{useSelector,useDispatch} from 'react-redux'
import { getPaniers ,deletPanier} from '../../JS/actions/panier/panier';
import {Link} from 'react-router-dom'



function Panierr({product}) {
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getPaniers())
  

}, [])
const paniers = useSelector(state => state.panierReducer.paniers)
const user = useSelector(state => state.userReducer.user)
const sum=(Tab)=>{

  let s=0;
 for (let i = 0; i < Tab.length; i++) {
 

   s= Tab[i]. pricetotal+s
  

 }
 return s
}


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <aside className="col-lg-9">
            <div className="card1">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    
                    <tr className="small text-uppercase">
                      <th scope="col" style={{color:'black'}}>Product</th>
                      <th scope="col" width={120} style={{color:'black'}}>User</th>
                      <th scope="col" width={120} style={{color:'black'}}>Price</th>
                      <th scope="col" className="text-right d-none d-md-block" width={200} />
                    </tr>
                  </thead>
                  <tbody>
                  {paniers.filter(el=>el.userName==user.name).map(el=> <tr>
                      <td>
                        <figure className="itemside align-items-center">
                         <img src={el.Productimage} className="img-sm" />
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">{el.ProductName}</a>
                            
                          </figcaption>
                        </figure>
                      </td>
                       <td> {el.userName}
                      {/* <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select> */}
                         </td> 
                      <td>
                        <div className="price-wrap"> <var className="price">{el.pricetotal}</var> <small className="text-muted"> $6 each</small> </div>
                      </td>
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> </a> 
                      <button className="btn btn-light btn-round" data-abc="true"  onClick={()=>{dispatch(deletPanier(el._id));dispatch(getPaniers())}} > Remove</button> </td>
                    </tr>)}
                   
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside className="col-lg-3">
            {/* <div className="card mb-3">
              {/* <div className="card-body">
                <form>
                  <div className="form-group"> <label>Have coupon?</label>
                    <div className="input-group"> <input type="text" className="form-control coupon" name placeholder="Coupon code" /> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                  </div>
                </form>
              </div> */}
            {/* </div>  */}
            <div className="card2">
              <div className="card-body">
              
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right text-dark b ml-3"><strong>{sum(paniers.filter(el=>el.userName==user.name))}</strong></dd>
                </dl>
                <hr />  <Link to ="./"  className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Contuniez vos achats</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Panierr
