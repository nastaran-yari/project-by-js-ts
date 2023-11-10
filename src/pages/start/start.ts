import { box } from "../../lib"

export const start = ()=>{
    return(box({
        element:'div',
        attr:{
            class:' h-[560px] bg-[#F31C2A] '
        },
        children:[
            box({
element:"img",
attr:{
    src:"public/Big Banner.png",
    class:' '
}
            }),
            box({
                element:"p",
               children:"get stylish",
               attr:{
                class:"text-slate-950 pl-40 font-bold text-5xl pb-8 "
               }
                            }),

            box({
           element:'button',
            children:'FOR STARTER',
            attr:{
                class:'text-black ml-52 mt-16  bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800',
                onclick:(e) =>{
                  e.preventDefault();
                location.assign('/register')}
            }
        })
]
        
}))
}