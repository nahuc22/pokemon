import React from 'react'
import style from './Page.module.css'

const Page = ({pokemonsPerPage, allPokemons , paginado}) => {
    const pageNumbers = []

    for( let i = 0 ; i < Math.ceil(allPokemons / pokemonsPerPage) ; i++) {
        pageNumbers.push(i+1)
    }
  return (
    <nav className={style.nav}>
        <ul className={style.ul}>
            {
                pageNumbers?.map(number => (
                    <li  key={number}>
                        <p className={style.p} onClick={()=>paginado(number)}>{number}</p>
                    </li>
                ))
            }
        </ul>
        
    </nav>
  )
}
export default Page