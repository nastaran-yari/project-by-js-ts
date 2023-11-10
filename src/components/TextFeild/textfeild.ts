import { box } from "../../lib"

type textFieldsProps={
    lable:string | HTMLElement
    helperText:string | HTMLElement
    icon:string

}|any

export const textfields = (props : textFieldsProps = {
    helperText:'',
    lable:'',
}) =>{
    const{lable,helperText,icon,...restprops}=props
    const id = crypto.randomUUID()
return box({
    element:'div',
    children:[
       lable && 
       box({
            element:'lable',
            children:lable,
            attr:{
                for:id
            }
        }),
        box({
        element:'div',
        attr:{
            class:"peer mb-8 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        },
        children:[
            box({
            element:"input",
            attr:{
                id,
                class:' border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-red-300 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com',
                ...restprops
            }
        }),
        props.icon&&
        box({
            element:'img',
            attr:{
                class:'w-6 h-6' ,
                src:icon
            }
        })] ,
    })]
})

}
//<div class = ""> </div>