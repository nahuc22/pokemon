import React from 'react'
import style from './Page.module.css'

const Page = ({currentPage, pokemonPage , totalPokemons, setCurrentPage, filtered, pokemonsFiltered, type}) => {
    const pageNumber = [];
    console.log(filtered)
    console.log(type)
    if(filtered || type){
        for (let i = 1; i <= Math.ceil(filtered/pokemonPage); i++) {
            pageNumber.push(i);
        }
    }else {
        for (let i = 1; i <= Math.ceil(totalPokemons/pokemonPage); i++) {
            pageNumber.push(i);
        }
    }
    
    const prevPage = () => {
        if (currentPage > 1 ) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if(currentPage < pageNumber.length) {
            setCurrentPage(currentPage + 1);    
        }
    }   
  return (
    <div>
        <button className={style.bttn} onClick={prevPage}>Prev</button><button className={style.bttn}onClick={nextPage}>Next</button>
    </div>
  )
}

export default Page