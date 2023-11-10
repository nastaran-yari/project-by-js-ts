import { box } from "../../lib"

export const payment = ()=>{
    return(
box({
    element:'div',
    attr:{
        class:'px-2'
    },
    children:[
        box({
            element:'div',
            attr:{
                class:'flex gap-40 items-center py-3'
            },
            children:[
                box({
                    element:'img',
                    attr:{
                        src:"public/download.png",
                        class:'cursor-pointer',

                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/cart')
                        },
                    }
                }),
                box({
                    element:'p',
                    children:'Payment',
                    attr:{
                        class:'text-3xl text-bold'
                    }
                })
            ]
        }),
        box({
            element:'img',
            attr:{
                src:'public/222 card.png',
                class:'pl-14 py-6 '
            }
        }),
        box({
            element:'button',
            children:'Add new card +',
            attr:{
                class:'w-full border-[1px] border-[#F24467] py-4 rounded-full text-[#F24467]'
            }
        }),
        box({
element:'p',
children:'Card Owner',
attr:{
    class:'text-lg font-medium py-4'
}
        }),
        box({
            element:'input',
            attr:{
                type:'text',
                placeholder:'Name on card',
                class:'w-full bg-[#E1D6D8] py-3 px-2 rounded-full'
            }
        }),
        box({
            element:'p',
            children:'Card Number',
            attr:{
                class:'text-lg font-medium py-4'
            }
                    }),
                    box({
                        element:'input',
                        attr:{
                            type:'text',
                            placeholder:'5546 8205 3693 3947',
                            class:'w-full rounded-full bg-[#E1D6D8] py-3 px-2 '
                        }          
                    }),
                    box({
                        element:'div',
                        attr:{
                            class:'flex justify-between'
                        },
                        children:[
                            box({
                                element:'div',
                                children:[
                                    box({
                                        element:'p',
                                        children:'EXP',
                                        attr:{
                                            class:'text-lg font-medium py-4'
                                        }
                                    }),
                                    box({
                                        element:'input',
                                        attr:{
                                            type:'text',
                                            placeholder:'12/20',
                                            class:'w-full rounded-full bg-[#E1D6D8] py-3 px-2 '
                                        }                           
                                    }),
                                ]
                            }),
                            box({
                                element:'div',
                                children:[
                                    box({
                                        element:'p',
                                        children:'CVV',
                                        attr:{
                                            class:'text-lg font-medium py-4'
                                        }
                                    }),
                                    box({
                                        element:'input',
                                        attr:{
                                            type:'text',
                                            placeholder:'1058',
                                            class:'w-full rounded-full bg-[#E1D6D8] py-3 px-2 '
                                        }                           
                                    }),
                                ]
                            })
                        ]
                    }),
                        box({
                            element:'button',
                            children:'Save Card',
                            attr:{
                                class:'w-full bg-[#F24467] mt-9 mb-3 text-white text-center py-4 rounded-full',
                                onclick:(e:Event)=>{
                                    e.preventDefault();
                
                                    location.assign('/confirm')
                                },
                            }
                          })
    ]
})
    )
}