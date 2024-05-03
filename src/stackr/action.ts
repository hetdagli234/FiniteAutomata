import { ActionSchema, SolidityType } from "@stackr/sdk";

export const UpdateFiniteAutomata = new ActionSchema("update-finite-state-machine", {
  binary: SolidityType.UINT,
});