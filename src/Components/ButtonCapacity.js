import React from "react";
import { useDispatch } from "react-redux";
import { endOfTurn, hitBack, hitMonster } from "../features/fight/fightSlice";

const ButtonCapacity = ({ playerId, playerCanPlay }) => {
  const dispatch = useDispatch();

  const combat = () => {
    dispatch(
      hitMonster({ 
        monsterDecreasePv: 120 }));
    dispatch(
      hitBack({
        playerHit: playerId - 1,
        playerDecreasePv: 25,
      })
    );
    dispatch(
      endOfTurn({
        player: playerId - 1,
      })
    );
  };
  return (
    <>
      {playerCanPlay ? (
        <button
          type="button"
          onClick={() => combat()}
          className="btn btn-dark material-tooltip-main "
        >
          hit
          <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> -
          5
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-dark material-tooltip-main "
          disabled
        >
          hit
          <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i> -
          5
        </button>
      )}
    </>
  );
};

export default ButtonCapacity;
