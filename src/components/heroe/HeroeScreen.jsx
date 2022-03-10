import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroeScreen = () => {
    const { heroeId } = useParams();
    const navigate = useNavigate();
    const hero = getHeroeById(heroeId);
    const {
     publisher, alter_ego, first_appearance,  characters
    } = hero;
    const handleReturn = () => {
        navigate(-1)
    }
    if (!hero) return <Navigate to='/' />
    const imagePath = `/assets/${hero.id}.jpg`
    return (
        <div className='row mt-5 animate__animated animate__fadeInLeft'>
            <div className='col-4'>
                <img src={imagePath}
                alt={ hero.superhero}
                className='img-thumbnail'></img>
            </div>
            <div className='col-8'>
                <h3>{ hero.superhero }</h3>
                <ul className='list-group'>
                    <li className='list-group-item'> <b>Alter ego: </b>{ alter_ego }</li>
                    <li className='list-group-item'> <b>Publisher: </b>{ publisher }</li>
                    <li className='list-group-item'> <b>First Appareance:</b>{ first_appearance }</li>

                </ul>
                <h5 className='mt-3'>Characters</h5>
                <p>{characters}</p>
                <button
                    className='btn btn-outline-info'
                    onClick={ handleReturn}>Regresar</button>

            </div>

        </div>
    )
}
