import { useState, useEffect } from 'react'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ComponenteA from './components/ComponenteA'

const App = () => {
	const getPokemon = async () => {
		let pokemonArr = []
		for (let i = 1; i < 21; i++) {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/");
			const data = await response.json();
			pokemonArr.push(data);
			
		}

		return pokemonArr
	}

	const [pokemon, setPokemon] = useState([]);
	
	useEffect(() => {
		getPokemon().then((pokemon) => setPokemon(pokemon))
	}, [])
	
    return (
        <>
			<Container fluid='md' className='p-5'>
				<Row>
					{
						pokemon.map((poke) => {
							return (
								<ComponenteA key={poke.id}
											name={poke.name}
											image={poke.sprites.front_default}
											base_xp={poke.base_experience}
											weight={poke.weight}
											height={poke.height}
											abilities={poke.abilities}
											stats={poke.stats}
											types={poke.types}/>
							)
						})
					}
				</Row>
			</Container>
        </>
    )
}

export default App
