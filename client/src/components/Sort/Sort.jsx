import  React  from 'react'
import { useDispatch } from 'react-redux'
import { orderByAttack , orderByAZ } from '../../redux/Actions/index'
import style from './Sort.module.css'

const Sort = ({setOrder, setCurrentPage}) => {
    const dispatch = useDispatch()

    const handleAttack = (event) => {
        const attack = event.target.value
        dispatch(orderByAttack(attack),
        setOrder(`Ordenado ${attack}`)
        )
    }
    const handleAbc = (event) => {
        const order = event.target.value
        dispatch(orderByAZ(order))
        setCurrentPage(1)
        setOrder(`Ordenado ${order}`)
      }
  return (
    <div className={style.container}>
        <h4>Alphabet</h4>
        <select onChange={handleAbc}>
            <option value="asc">A to Z</option>
            <option value="des">Z to A</option>
        </select>
        <h4>Attack Level</h4>
        <select onChange={handleAttack}>
            <option value="max">Max Attack</option>
            <option value="min">Min Attack</option>
        </select>
    </div>
  )
}

export default Sort