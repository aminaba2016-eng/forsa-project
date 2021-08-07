import React from 'react'
import './Add.css'
import {useEffect} from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getCategorys} from '../../JS/actions/category/category'


const MyFunction = ({handleCategory}) => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
    useEffect(() => {
     /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
dispatch(getCategorys())
      }, [])
const categories = useSelector(state => state.categoryReducer.categorys)
    return (
        
      <div className="dropdown">
     <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        {categories.map(el=><option value={el.name}>{el.name}</option>)}
        </select>
    </div>
            
       
    )
}

export default  MyFunction
