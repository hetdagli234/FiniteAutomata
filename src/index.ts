import { FiniteAutomate, automata } from "./stackr/machine";
import { StateMachine } from "@stackr/sdk/machine";
import { transitions } from "./stackr/transitions";


// Initialize your Micro-rollup and add a State Machine to it.
const machine = new StateMachine({
    id: "counter",
    stateClass: FiniteAutomate,
    initialState: automata.A,
    on: transitions,
  });
console.log("Hello, Micro-rollup! 🖖🏻");
