import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Home() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      setCharacter(data);
      console.log(data);

    }

    fetchData()

  }, [])



  return (
    <>
    
        <div>
          <h1>Lista de Personagens</h1>
          <input type="text" name="input" id="" /><button>Pesquisar</button> 

          <select name="" id="">
            <option value="">Todos</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </div>
        {character.results && (
          <>

            {Object.values(character.results).map((i) => (
              <>
                {/* Esse Object.values é pra poder fazer o map dar certo, o map não tava deixando, ele não conseguia dar map no JSON, então esse negócio transfroma em Array */}
                <Link to={`/Character/${i.id}`}>
                  <div className='card'>
                    <img src={i.image} className='img_perfil' />
                    <div className='nome_perfil'><h1>{i.name}/{i.status}</h1></div>
                  </div>
                </Link>






              </>
            ))}
          </>
        )}

      

    </>


  )
}

export default Home