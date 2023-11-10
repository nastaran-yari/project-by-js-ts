const isLoggoedIn = !!parseInt(localStorage.getItem("login") as string)

export const routes = [
    {
        path:'/start',
        title:'start',
        isShow:!isLoggoedIn
    },
    {
        path:'/register',
        title:'',
        isShow:!isLoggoedIn
    },
    {
        path:'/login',
        title:'login',
        isShow:!isLoggoedIn
    },
    {
        path:'/',
        title:'',
        isShow: isLoggoedIn
    },
    {
        path:'/product',
        title:'',
        isShow: isLoggoedIn
    },
    {
        path:'/cart',
        title:'',
        isShow:isLoggoedIn
    },
    {
        path:'/payment',
        title:'',
        isShow:isLoggoedIn
    },
    {
        path:'/confirm',
        title:'',
        isShow:isLoggoedIn
    },
    
]