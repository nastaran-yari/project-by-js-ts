import { cart } from "../pages/cart"
import { home } from "../pages/home"
import { login } from "../pages/login"
import { payment } from "../pages/payment"
import { product } from "../pages/product"
import { register } from "../pages/register"
import { start } from "../pages/start"
import { confirm } from "../pages/confirm"

export function router (){
    const isLoggoedIn = !!parseInt(localStorage.getItem("login") as string)
    switch (window.location.pathname) {
        case '/start':return isLoggoedIn&& start()
        case '/register':return isLoggoedIn&& register()
        case '/login':return isLoggoedIn&& login()
        case '/product': return isLoggoedIn&& product()
        case '/cart' : return isLoggoedIn&& cart()
        case '/payment' : return isLoggoedIn&& payment()
        case '/confirm' : return isLoggoedIn&& confirm()


        default: return isLoggoedIn && home()
    }
    
    }