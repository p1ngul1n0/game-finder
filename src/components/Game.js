import React from 'react';
import '../App.css';

const platformIcons = ['pc', 'xbox-one','playstation4','nintendo-switch'];
const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

const Game = ({ game }) => {
    return (
        <div className="col col-lg-3">
            <div className="card p-3 m-2 animateTop">
                <h5>
                    {game.name}
                </h5>         
                <img className="card-img-top" src={game.background_image} alt={game.name} />
                <div className="card-body">
                    {game.metacritic &&  
                        <span className={"metascore " + (game.metacritic >= 75 ? 'high' : game.metacritic >= 50 ? 'medium' : 'low')}>{game.metacritic}</span>
                    }
                    <p>
                        { game.platforms && 
                            <ul className="platforms">
                                {game.platforms.map((p) => (
                                    platformIcons.map((i) => (p.platform.slug.includes(i) ?
                                        <li className="platform-icon"><img src={"icons/"+i+".png"} alt={p}/></li> : null  
                                    ))
                                ))}
                            </ul>
                        }
                    </p>
                    {game.released && <p className="release-date">{new Date(game.released.replaceAll('-','/')).toLocaleDateString("en-US",options)}</p>}
                    <p>
                        <ul className="genres">
                            {game.genres.map((genre) => (<li className="genre">{genre.name}</li>))}
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Game