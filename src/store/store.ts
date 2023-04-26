import {createStore} from "redux"
import { tokenReducer } from "./tokens/tokensReducer"

export const store = createStore (tokenReducer)

