import { useState, useEffect } from 'react'

import { GameBanner } from './components/GameBanner'

import './styles/main.css'

import logoImg from './assets/Logo-nlw-esports.svg'
import { FormsCreateAdBanner } from './components/FormsCreateAdBanner'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  // const [hasUserClickOnButton, setHasUserClickOnButton] = useState(false)
  // function handleButtonClick() {
  //   // Ela sempre vai setar o valor inverso setado pra ela
  //   setHasUserClickOnButton(!hasUserClickOnButton)
  // }

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo do pagina, nlw eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
              key={game.id}
            />
          )
        })}
      </div>

      <FormsCreateAdBanner />
    </div>
  )
}

export default App
