import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css'


function Character() {

    const [character, setCharacter] = useState();
    const [episodes, setEpisodes] = useState([]);
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


    
        const forLimit = async () => {

            const allEpisodes = [];

            for(let i = 0 ; i < character.episode.length ; i++){

                const url = character.episode[i];
                const epResponse = await fetch(url);
                const epData = await epResponse.json();

                

                allEpisodes.push(epData) 
                
                
            }

                setEpisodes(allEpisodes);
                console.log(allEpisodes);
        }   
        
        
                
           useEffect(() => {
        if (character) {
            forLimit();
        }
    }, [character]);
    



    return (
        <>
            {character && (
                <>
                    <div className="container">

                        <div className='card_solo'>
                            <div className='photo_character'>
                            <img src={character.image} className='img_perfil' />
                            </div>
                            
                            <div className='infos_perfil'>
                                <h3>Nome: {character.name}</h3>
                                <h3>Status: {character.status}</h3>
                                <h3>Espécie: {character.species}</h3>
                            </div>
                            <h1>Episódios:</h1>
                            <div>
                                {episodes && (
                                    <>
                                        {Object.values(episodes).map((i) => (
                                            <>
                                            <div className='card3'>
                                            <p>Número: {i.episode} Nome: {i.name && i.name}</p>
                                            </div>
                                            
                                            </>
                                        ))}
                                    </>
                                )}
                            </div>
                            
                        </div>

                    </div>
                </>

            )}
        </>
    )

}

export default Character;