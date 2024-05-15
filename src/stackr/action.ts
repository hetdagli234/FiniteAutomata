import { ActionSchema, SolidityType } from "@stackr/sdk";
import { automata, machine } from "./machine";

export const UpdateFiniteAutomata = new ActionSchema("update-finite-state-machine", {
  input: SolidityType.UINT,
switch(automata) {
    case machine.A:
      return input === '0' ? machine.C : machine.B;
    case machine.B:
      return input === '0' ? machine.D : machine.A;
    case machine.C:
      return input === '0' ? automata.A : automata.D;
    case automata.D:
      return input === '0' ? automata.B : automata.C;
    default:
      return state; // Default case to handle any unexpected state
);