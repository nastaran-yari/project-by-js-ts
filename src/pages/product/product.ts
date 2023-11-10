import { box } from "../../lib"

export const product = ()=>{
    return(
box({
    element:'div',
    children:[
        box({
            element:"div",
            attr:{
        class:'flex justify-between px-2 py-3'
            },
            children:[
                box({
                    element:'img',
                    attr:{
                        src:"public/download.png",
                        class:'cursor-pointer',

                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/home')
                        },
                    }
                    }),
                    box({
                        element:'img',
                        attr:{
                            src:"bag.svg",
                            class:'cursor-pointer',
                            onclick:(e:Event)=>{
                                e.preventDefault();
            
                                location.assign('/cart')
                            },
                        }
                        }),
                        box({
                            element:'img',
                            attr:{
                                src:"heart.svg",
                                class:'cursor-pointer',
                            
                            }
                            })
            ]
        }),
      box({
        element:'div',
        attr:{
            class:'bg-[#F2F2F2] rounded-md'
        },
        children:[
            box({
                element:'img',
                attr:{
                    src:'public/photo.png',
                    class:'pl-24'
                }
            })
        ]
      }),
      box({
        element:'div',
        attr:{
            class:'flex justify-between text-[#8F959E] pt-3 text-s px-2'
        },
        children:[
            box({
                element:'p',
                children:'Dorothy Perkins'
              }),
              box({
                element:'p',
                children:'Price'
              })
        ]
      }),
      box({
        element:'div',
        attr:{
            class:'flex justify-between  pt-1 text-2xl px-2'
        },
        children:[
            box({
                element:'p',
                children:'Evening Dress'
              }),
              box({
                element:'p',
                children:'12$'
              })
        ]
      }),
      box({
        element:'div',
        attr:{
            class:'flex justify-between  pt-1  px-2'
        },
        children:[
            box({
                element:'p',
                children:'Size',
                attr:{
                    class:'text-xl'
                }
              }),
              box({
                element:'p',
                children:'Size Guide',
                attr:{
                    class:'text-[#8F959E]'
                }
              })
        ]
      }),
      box({
        element:'p',
        children:'about',
        attr:{
            class:'text-xl pt-8 px-3'
        }
      }),
      box({
        element:'p',
        children:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit repellat nam repellendus! Minima, illum necessitatibus! Maiores reprehenderit architecto voluptas ut nostrum, iste dolorum dolor dolorem qui possimus, cupiditate laborum.',
        attr:{
            class:'text-[#8F959E] pt-3 px-3'
        }
      }),
      box({
        element:'div',
        attr:{
            class:'flex justify-between pt-8 px-2 pb-8'
        },
        children:[
            box({
                element:'button',
                children:'36',
                attr:{
                    class:'w-24 h-12  bg-slate-200 flex justify-center place-items-center rounded-full text-xl hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 '
                }
              }),
              box({
                element:'button',
                children:'38',
                attr:{
                    class:'w-24 h-12  bg-slate-200 flex justify-center place-items-center rounded-full text-xl hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 '
                }
              }),
              box({
                element:'button',
                children:'40',
                attr:{
                    class:'w-24 h-12  bg-slate-200 flex justify-center place-items-center rounded-full text-xl hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 '
                }
              }),
              box({
                element:'button',
                children:'42',
                attr:{
                    class:'w-24 h-12  bg-slate-200 flex justify-center place-items-center rounded-full text-xl hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 '
                }
              })
        ]
      }),
    ]



//<div class= 'align-middle justify-items-center content-center items-center place-items-center rounded-md'>

















})

    )
}