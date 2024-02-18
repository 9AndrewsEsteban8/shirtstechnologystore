import React from 'react'
import shirt from '../img/shirts.png'
import code from '../img/code.png'
import shield from '../img/shield.png'

const Search_category = () => {
    return (
        <div className='container_search'>
            <h3>BUSCAR POR CATEGORIA</h3>
            <div className='Container_category'>
                <div><img src={shirt}/><p>Camisetas donde puede encontrar las mejores</p></div>
                <div><img src={code}/><p>Encuentra por tu lenguaje de programación favorito</p></div>
                <div><img src={shield}/><p>Si lo que quieres es defenderte aqui lo encontraras</p></div>
            </div>
        </div>

    )
}

export default Search_category