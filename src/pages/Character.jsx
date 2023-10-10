import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css'


function Character() {

    const [character, setCharacter] = useState();
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();

            setCharacter(data);
            console.log(data);

        }

        fetchData()

    }, [])




    return (
        <>
            {character && (
                <>
                    <div className="container">

                        <div className='card_solo'>
                            <img src={character.image} className='img_perfil' />
                            <div className='infos_perfil'>
                                <h3>Nome: {character.name}</h3>
                                <h3>Status: {character.status}</h3>
                                <h3>Espécie {character.species}</h3>
                            </div>
                            <h1>Episódios:</h1>
                            {character.episode && (
                                <>

                                    {Object.values(character.episode).map((i) => (
                                        <>
                                    <p>{i}</p>
                                        </>
                                    ))}
                                </>
                            )}
                        </div>

                    </div>
                </>

            )}
        </>
    )

}

export default Character;