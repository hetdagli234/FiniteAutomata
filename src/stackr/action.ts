import { ActionSchema, SolidityType } from "@stackr/sdk";
import { automata, machine } from "./machine";

export const UpdateFiniteAutomata = new ActionSchema("update-finite-state-machine", {
  input: SolidityType.UINT,
}
switch(automata) {
    case automata.A:
      return input === '0' ? automata.C : automata.B;
    case automata.B:
      return input === '0' ? automata.D : automata.A;
    case automata.C:
      return input === '0' ? automata.A : automata.D;
    case automata.D:
      return input === '0' ? automata.B : automata.C;
    default:
      return state; // Default case to handle any unexpected state
  }
);