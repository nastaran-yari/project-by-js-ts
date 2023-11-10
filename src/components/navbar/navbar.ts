import { box } from "../../lib"
import { routes } from "../../router"

export const navBar = ()=>{
    
return (
    box({
    element:'nav',
    attr:{
class:'flex gap-4 justify-center pb-1 pt-1 item-center'
    },
    children: routes.map(route =>route.isShow ?
        box({
element:'a',
attr:{
    href:route.path,
    class: 'text-slate-500 pl-8'

},
children:route.title 
    }) : null
    
    ) 
    
    }))
    
        
        








}
//<div class='justify-center text-center'>