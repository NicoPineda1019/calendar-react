import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHerosByName } from '../../selectors/getHeroByName';
import { HeroeCard } from '../heroe/HeroeCard';
import queryString from 'query-string';

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);
    const [ formValues, handleInputChange ] = useForm({
        searchText : q
    })
    const { searchText } = formValues;
    const [heroesFiltered, setHeroesFiltered] = useState([]);
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
        setHeroesFiltered(getHerosByName(searchText))

    }

    return (
        <>
            <h1>Búsqueda</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input
                            type='text'
                            placeholder='Buscar un héroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={formValues.searchText}
                            onChange={ handleInputChange}
                        />
                        <button
                            type='submit' 
                            className='btn btn-outline-primary mt-1'>
                                Buscar...
                            </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />
                    {
                        heroesFiltered.map( hero => (
                            <HeroeCard
                                key={ hero.id }
                                {...hero} />
                            
                        ))
                    }

                </div>
            </div>
        </>
    )
}
