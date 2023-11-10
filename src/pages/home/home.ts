import { box } from "../../lib"

export const home = () =>{
return(
box({
element:'div',
attr:{
class:"px-2"
},
children:[box({
    element:"div",
    attr:{
class:'flex justify-between py-3'
    },
    children:[
        box({
            element:'img',
            attr:{
                src:"image 4 (1).png",
                class : "w-full rounded-md h-84"
            }
            }),
]
}),
box({
    element:'p',
    children:'Products',
    attr:{
        class:'text-3xl font-bold text-red-600'
    }
}),
box({
    element:'p',
    children:'Choose the desired dress',
    attr:{
        class:'font-light text-slate-500 text-xl pt-3'
    }
}),
box({
    element:'div',
    attr:{
class:'flex gap-20 px-5 mt-7'
    },
    children:[
        box({
            element:'div',
            children:[
                box({
                    element:'img',
                    attr:{
                        src:'public/photo.png',
                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/product')
                        },
                        class:'cursor-pointer w-fit'
                    }
                }),
                box({
                    element:'p',
                    children:'Dorothy Perkins',
                    attr:{
                        class:'w-4/5 font-medium text-slate-700'
                    }
                }),
                box({
                    element:'p',
                    children:'Evening Dress',
                    attr:{
                        class:'w-4/5 font-medium font-bold'
                    }
                }),
                box({
                    element:'p',
                    children:'12$',
                    attr:{
                        class:'font-bold text-red-600'
                    }
                })
            ]
        }),
        box({
            element:'div',
            children:[
                box({
                    element:'img',
                    attr:{
                        src:'public/photo 5 5 5 .png'
                    }
                }),
                box({
                    element:'p',
                    children:'Sitlly',
                    attr:{
                        class:'w-4/5 font-medium text-slate-700'
                    }
                }),
                box({
                    element:'p',
                    children:'Sport Dress',
                    attr:{
                        class:'w-4/5 font-medium font-bold'
                    }
                }),
                box({
                    element:'p',
                    children:'19$',
                    attr:{
                        class:'font-bold text-red-600'
                    }
                })
            ]
        })
    ]
}),
box({
    element:'div',
    attr:{
class:'flex gap-20 px-5 mt-7'
    },
    children:[
        box({
            element:'div',
            children:[
                box({
                    element:'img',
                    attr:{
                        src:'public/photo6 6 6.png',
                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/product')
                        },
                        class:'cursor-pointer w-fit'
                    }
                }),
                box({
                    element:'p',
                    children:'Mango',
                    attr:{
                        class:'w-4/5 font-medium text-slate-700'
                    }
                }),
                box({
                    element:'p',
                    children:'T-Shirt SPANISH',
                    attr:{
                        class:'w-4/5 font-medium font-bold'
                    }
                }),
                box({
                    element:'p',
                    children:'9$',
                    attr:{
                        class:'font-bold text-red-600'
                    }
                })
            ]
        }),
        box({
            element:'div',
            children:[
                box({
                    element:'img',
                    attr:{
                        src:'public/photo7 7 7.png'
                    }
                }),
                box({
                    element:'p',
                    children:'Dorothy Perkins',
                    attr:{
                        class:'w-4/5 font-medium text-slate-700'
                    }
                }),
                box({
                    element:'p',
                    children:'Blouse',
                    attr:{
                        class:'w-4/5 font-medium font-bold'
                    }
                }),
                box({
                    element:'p',
                    children:'14$$',
                    attr:{
                        class:'font-bold text-red-600'
                    }
                })
            ]
        })
    ]
}),
box({
    element:'div',
    attr:{
        class:'w-full h-20 shadow-2xl flex items-center justify-center gap-16'
    },
    children:[
        box({
            element:'img',
            attr:{
                src:'public/activated.png',
                class:'w-5 h-5'
            }
        }),
        box({
            element:'img',
            attr:{
                src:'heart.svg',
                class:'w-5 h-5'
            }
        }),
        box({
            element:'img',
            attr:{
                src:'bag.svg',
                class:'w-5 h-5'
            }
        }),
        box({
            element:'img',
            attr:{
                src:'pay.svg',
                class:'w-5 h-5'

            }
        })
    ]
})
]
//<div class='text-white text-black font- w- rounded-md h-20 items-center' >
})
)
}