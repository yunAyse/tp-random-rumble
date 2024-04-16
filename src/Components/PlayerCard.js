import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';


const PlayerCard = ({ player }) => {
    
    return (
        <div key={player.id} className="col-sm-3 center position-relative " id={`joueur${player.id}`}>
            {!player.canPlay && 
                <div className='cantPlay'></div>
            }

            <div className="card-body p-3 text-center player-card d-flex flex-column">
                <div className='w-100 d-flex justify-content-center'>
                <img src={player.image} alt={`Samurai ${player.id}`}/>
                </div>

                <div className='d-flex flex-column gap-3'>
                <div className='player-bar d-flex flex-column gap-2'>
                <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />
                </div>

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row ">
                    <div className=''>
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />
                        <ButtonCapacity playerId={player.id} playerCanPlay={player.canPlay} />

                    </div>
                </div >
                </div>
            </div >

        </div >
    )
  };
  


export default PlayerCard;