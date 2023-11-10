import {  layout} from "./components"
import { router } from "./router"

export const App = ()=>{
 
return layout({
    children:[router()],
})
}