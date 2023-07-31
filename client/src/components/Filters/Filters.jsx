import React from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonTypeFilters , filterByOrigin } from '../../redux/Actions/index'
import style from './Filters.module.css'
const Filters = ({types, setCurrentPage, setOrder}) => {

    const dispatch = useDispatch()

    const handleTypeFilter = (event) => {
        const type = event.target.value
        setCurrentPage(1)
        dispatch(getPokemonTypeFilters(type))
    }
    const handleOriginFilter = (e) => {
        const origin = e.target.value
        setCurrentPage(1)
        dispatch(filterByOrigin(origin))
      }
  return (
    <div>
        <div className={style.container}>
            <h4>By Types</h4>
            <select onChange={handleTypeFilter}>
                <option value="all">All</option>
                {types?.map((type,i) => 
                    <option 
                        key={i} 
                        value={type}
                    >
                    {type}
                    </option>)}
                </select>
            <h4>By Origin</h4>
            <select onChange={handleOriginFilter}>
            <option value="all" >All</option>
            <option value={'db'}>Created</option>
            <option value={'api'}>Existing</option>
            </select>
        </div>
    </div>
  )
}

export default Filters