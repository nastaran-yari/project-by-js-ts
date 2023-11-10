import { button, textfields } from "../../components"
import { ValidateEmail } from "../../helpers/validatemail"
import { box } from "../../lib"

export const register = ()=>{
    const registerForm = {
        email:"",
        password:"",
        repeatPassword:""
    } as const
    const handelRegistertUser = (e : Event) =>{
        e.preventDefault();
        if(!registerForm || !ValidateEmail(registerForm.email)){
          return  alert("email is invalid")
        }
        if(
            !registerForm.password||
            !registerForm.repeatPassword||
            registerForm.password !== registerForm.repeatPassword
            ){
           return alert("password and repeat are not same")
        }
        const existsUser = localStorage.getItem("users");
        const parsExistUser =existsUser ? JSON.parse(existsUser) : null;
        if(parsExistUser){
           const existUser =  parsExistUser.find((user:typeof registerForm) => user.email ===registerForm.email )
           if(existUser) return alert("this user alredy exist")
            parsExistUser.push(registerForm)
            const registerFormJson = JSON.stringify(parsExistUser)
            localStorage.setItem("users", registerFormJson)
            location.assign('/login')

        }else{
            const registerFormJson = JSON.stringify([registerForm])
            localStorage.setItem("users", registerFormJson)
            location.assign('/login')

        }
    }
return(box({
element:"form",
children:[
    box({
        element:'img',
        
        attr:{
            src:"public/download.png",
            class:'pt-7 pb-2'
        }
            }),
    box({
element:'h1',
children:'Sign Up',
attr:{
    class:'text-4xl flex font-bold pb-14 pt-2'
}
    }),

    textfields({
        placeholder:"email",
        onkeyup:(e)=>{
            registerForm.email= e.target.value
        }
    }),
    textfields({
        placeholder:"password",
        onkeyup:(e)=>{
            registerForm.password= e.target.value
        }
    }),
    textfields({
        placeholder:"repeat password",
        onkeyup:(e)=>{
            registerForm.repeatPassword= e.target.value
        }
    }),
    button({
    children:"Sign Up",
    attr:{
        class:"text-white mt-24 w-full bg-[#F61B31] hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        onclick:handelRegistertUser
    }
})
]
}))
}