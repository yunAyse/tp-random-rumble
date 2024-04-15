// créer ce fichier dans src/features/fight/fightSlice.js

import { createSlice } from "@reduxjs/toolkit";

import samuraiOne from '../../assets/samurai1.png';
import samuraiTwo from '../../assets/samurai2.png';
import samuraiThree from '../../assets/samurai3.png';
import samuraiFour from '../../assets/samurai4.png';


const initialState = {
  // TODO : Compléter 'players' et 'monster'
  players: [
    { image: samuraiOne, pv: 210, pvMax: 100, mana: 30, manaMax: 30, id: 1, canPlay: true},
    { image: samuraiTwo, pv: 200, pvMax: 100, mana: 30, manaMax: 30, id: 2, canPlay: true},
    { image: samuraiThree, pv: 160, pvMax: 100, mana: 30, manaMax: 30, id: 3, canPlay: true},
    { image: samuraiFour, pv: 120, pvMax: 100, mana: 30, manaMax: 30, id: 4, canPlay: true},
  ],
  monster: {
    pv: 800,
    pvMax: 800,
  },
  status: "ONGOING",
  playerTurn: 0

};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      // state.monster = {
      //   ...state.monster,
      //   pv: state.monster.pv - action.payload.monsterDecreasePv,
      // }

      if (state.monster.pv - action.payload.monsterDecreasePv > 0){
        state.monster.pv -= action.payload.monsterDecreasePv;
      } else {
        state.monster.pv  = 0;
        state.status = "WIN";
      }
    },
    hitBack: (state, action) => {
      state.players[action.payload.playerHit].pv -= action.payload.playerDecreasePv;

      if (state.players[action.payload.playerHit].pv - action.payload.playerDecreasePv > 0) {
        state.players[action.payload.playerHit].pv -= action.payload.playerDecreasePv;
      } else {
        state.players[action.payload.playerHit].pv  = 0;
        let count = 0;

        state.players.forEach(player => {
          if(player.pv === 0) {
            count += 1;
          }
      })

      if (count === state.players.length) {
        state.status = "LOSE";
      }
    };
  },
  endOfTurn: (state, action) => {
    state.players[action.payload.player].canPlay = false;
    if (state.playerTurn + 1 === state.players.length){
      state.playerTurn = 0;
      state.players.forEach(player => {
        player.canPlay = true;
      })
    } else {
      state.playerTurn += 1;
    }
  }
},
});

export const { hitMonster, hitBack, endOfTurn } = fightSlice.actions;
export default fightSlice.reducer;
