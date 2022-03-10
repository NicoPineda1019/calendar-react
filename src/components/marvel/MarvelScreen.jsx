import React from 'react'
import { HeroeList } from '../heroe/HeroeList'

export const MarvelScreen = () => {
    return (
        <div>
            <h2>Marvel Screen</h2>
            <HeroeList
                publisher={ 'Marvel Comics' } />
        </div>
    )
}
