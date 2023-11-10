import { box, boxProps } from "../../lib"
import { navBar } from "../navbar"

type layoutProps={
    children?:boxProps['children']
}

export const layout= (props:layoutProps)=>{
    return box({
element:"div",
children:[ navBar(),box({
    element:'main',
    children:props.children

})],
attr:{
    class:" max-w-lg mx-auto "
}

    })
}