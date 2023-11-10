import { box } from "../../lib"
import type { buttonProps } from "./type"

 
export const button=(props:buttonProps)=>{
    return(
        box({
            element:"button",
            children:props.children,
            attr:{
                ...props.attr,
            }
        })
    )


}