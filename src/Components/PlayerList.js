import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";

// displayPlayers = () => {
//   return Object.keys(this.state.players).map(key => (
//     <PlayerCard key={this.state.players[key].id} player={this.state.players[key]} />
//   ));
// }

const PlayerList = () => {
  const players = useSelector((store) => store.fight.players);

  return (
    <div className="row">
      {players.map((player, index) =>
        player.pv > 0 ? (
          <PlayerCard key={index} player={player} />
        ) : (
          <div className="card w-25">
            <div className="card-body" key={index}>
              {player.name} is dead...
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PlayerList;
