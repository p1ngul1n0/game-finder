import React from 'react'
import Game from './Game'

const Games = ({ games }) => {
    return (
        <>
            <div className="row">
                    {games.results.map((g) => (
                        <Game key={g.slug} game={g}/>
                    ))}
            </div>
        </>
    )
}

export default Games
