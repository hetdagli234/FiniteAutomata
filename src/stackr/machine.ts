import { State, StateMachine } from "@stackr/sdk/machine";
import { solidityPackedKeccak256 } from "ethers";

import * as genesisState from "../../genesis-state.json";
import { transitions } from "./transitions";

export class FiniteAutomate extends State<states> {
  constructor(state: states) {
    super(state);
  }

  getRootHash() {
    return solidityPackedKeccak256(["uint256"], [this.state]);
  }
}
export enum states {
  A,
  B,
  C,
  D
}
const machine = new StateMachine({
  id: "counter",
  stateClass: FiniteAutomate,
  initialState: states.A,
  on: transitions,
});

export { machine };
