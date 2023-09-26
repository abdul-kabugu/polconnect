import { SubstrateChain } from "../../chains"
export interface ButtonProps {
    backGround : "pink" | "blue" | "indingo",
    label : string,
    showChain?: boolean,
    chain? : SubstrateChain
    
}