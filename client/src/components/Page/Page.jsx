import React from 'react'

const Page = ({currentPage, pokemonPage , totalPokemons, setCurrentPage, filtered, pokemonsFiltered}) => {
    console.log(pokemonsFiltered)
    console.log(filtered)
    const pageNumber = [];
    if(filtered){
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
        <button onClick={prevPage}>prev</button><button onClick={nextPage}>next</button>
    </div>
  )
}

export default Page