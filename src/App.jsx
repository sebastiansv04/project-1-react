import { useState } from 'react'
import phrases from './phrases.json'
import { bg1, bg2, bg3, bg4 } from './assets/img'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import './App.css'

const images = [bg1, bg2, bg3, bg4]

function getRandomIndex (arr) {
return Math.floor(Math.random() * arr.length)
}

function App() {
  const [phrase, setphrase] = useState(phrases[getRandomIndex(phrases)].phrase)
  const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)])

  const handleClick = () => {
    setphrase(phrases[getRandomIndex(phrases)].phrase);
    setBgRandom(images[getRandomIndex(images)]);
  }

  const bgImg = `url(${bgRandom})`

  return (
		<div className="wrapper" style={{ backgroundImage: bgImg }}>
			<div className="container">
				<h1 className="title">Galleta de la Fortuna</h1>
				<blockquote className="card">
					<div className="card__body">
						<p className="card__text">
							<RiDoubleQuotesL
							className='card__quote' />
							{'  '}
							{phrase}
							{'  '}
							<RiDoubleQuotesR className="card__quote" />
						</p>
					</div>
				</blockquote>
				<button className="btn" onClick={handleClick}>
					Ver frase
				</button>
			</div>
		</div>
	);
}

export default App
