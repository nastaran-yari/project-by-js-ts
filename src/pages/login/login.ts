import { button, textfields } from "../../components"
import { box } from "../../lib"

export const login = ()=>{
    const loginForm = {
        email:"",
        password:"",
    } 
return(box({
element:"form",
children:[
    box({
        element:'img',
        
        attr:{
            src:"public/download.png",
            class:'pt-7 pb-5'
        }
            }),
    box({
element:'h1',
children:'WELCOM',
attr:{
    class:'flex justify-center text-4xl pb-16 '
}
    }),
    box({
        element:'p',
        children:'Enter the details',
        attr:{
            class:'flex justify-center text-[#8F959E] pb-2'
        }
            }),
    textfields({
        placeholder:"email",
        onkeyup:(e)=>{
            loginForm.email= e.target.value
        }
    }),
    textfields({
        placeholder:"password",
        onkeyup:(e)=>{
            loginForm.password= e.target.value
        }
    }),
    button({
    children:"Log In",
    attr:{
        class:"text-white mt-28 w-full bg-[#F61B31] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        onclick:(e) =>{
            e.preventDefault();
            const existsUser = localStorage.getItem("users");
            const parsExistUser =existsUser ? JSON.parse(existsUser) : null;
            const existUser =  parsExistUser?.find(
                (user:typeof loginForm) => user.email ===loginForm.email && user.password === loginForm.password
                )
                if(existUser){
                    localStorage.setItem("login","1")

                return    location.assign('/')
                }
                alert("username or password is wrong")





          location.assign('/')}
    }
})
]



}))


}
//<div class="rounded-">