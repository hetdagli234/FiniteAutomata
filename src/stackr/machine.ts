import { State, StateMachine } from "@stackr/sdk/machine";
import { solidityPackedKeccak256 } from "ethers";

import * as genesisState from "../../genesis-state.json";
import { transitions } from "./transitions";


export class FiniteAutomate extends State<automata> {
  constructor(state: automata) {
    super(state);
  }

  getRootHash() {
    return solidityPackedKeccak256(["uint256"], [this.state]);
  }
}
export enum automata {
  'A',
  'B',
  'C',
  'D'
}
const machine = new StateMachine({
  id: "counter",
  stateClass: FiniteAutomate,
  initialState: automata.A,
  on: transitions,
});

export { machine };
