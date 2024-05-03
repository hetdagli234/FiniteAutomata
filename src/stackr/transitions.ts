import { STF, Transitions } from "@stackr/sdk/machine";
import { FiniteAutomate, states } from "./machine";

const handleState: STF<FiniteAutomate> = {
  handler: ({ state, input }) => {
    switch(state) {
      case states.A:
        return input === '0' ? states.C : states.B;
      case states.B:
        return input === '0' ? states.D : states.A;
      case states.C:
        return input === '0' ? states.A : states.D;
      case states.D:
        return input === '0' ? states.B : states.C;
      default:
        return state; // Default case to handle any unexpected state
    }
  },
};

export const transitions: Transitions<FiniteAutomate> = {
  handleState,
};
