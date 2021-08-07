import React, {useEffect} from 'react'
import { getProducts } from '../../JS/actions/product/product'

import { useDispatch  , useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {logout} from "../../JS/actions/user/user"
import {useState} from 'react'

import Footer from '../footer/index'
// import Cards from'../Cards/Cards'
// import HeroSection from '../HeroSection/HeroSection'
import Navbar1 from '../Navbar1/Navbar1'
import Cartes from '../Cartes/Cartes'
import NameSearch from '../Filter/NameSearch'
import Cards from '../Cards/Cards'

const Dashbord = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
      }, [])
      const pdts = useSelector(state => state.produtReducer.products)
      console.log(pdts)
    const [text, setText] = useState('')
    

    // const filterText=(text)=>{
    //   setText(text)
    //       }

  
    const history=useHistory();
    return (
           

       
        <div>

<Navbar1 />
            <div  className='fil' style={{background:"#D2DBDD"}}>

<input onChange={(e)=>setText(e.target.value)} placeholder="Chercher un pdt.." 
  style={{width:"400px", marginLeft:"500px", height:'50px',marginTop:"5%"}} />



</div>
               <div>
      {/* <NameSearch filterText={filterText} /> */}
      <div className='containerDashbord'>
          {pdts.filter(el=>el.name.toLowerCase()==text.toLowerCase()).map(el =><Cards product={el}/>)}
      
          {/* { products.filter(el=>el.category==="Multimédia").map(el=> <Cards product={el} />)} */}
      </div>

      </div>
            
               
            
            {/* <HeroSection /> */}

             <Cartes />
            {/* <Cards /> */}
            
            
            
            
            <Footer />
            </div>
            
    )
}


export default Dashbord
