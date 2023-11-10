import { box } from "../../lib"

const minusBtn = document.getElementById('minus') as HTMLButtonElement | null;
const count = document.getElementById('count') as HTMLParagraphElement | null;
const plusBtn = document.getElementById('plus') as HTMLButtonElement | null;
let countNum = 0
if(count){
    count.innerHTML = countNum.toString()
}
if(minusBtn){
    minusBtn.addEventListener("click", ()=>{
        countNum -=1
        if(count){
            count.innerHTML = countNum.toString()
            console.log("countNum")
        }
    })
}
if(plusBtn){
    plusBtn.addEventListener("click", () => {
        countNum += 1 
        if(count){
            count.innerHTML = countNum.toString()
        }
    })
}


 export const cart =()=>{
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
                        class:'flex gap-48 items-center py-3'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:"public/download.png",
                                class:'cursor-pointer',

                                onclick:(e:Event)=>{
                                    e.preventDefault();
                
                                    location.assign('/product')
                                },
                            }
                        }),
                        box({
                            element:'p',
                            children:'Cart',
                            attr:{
                                class:'text-3xl text-bold'
                            }
                        })
                    ]
                }),
                box({
                    element:'div',
                    attr:{
                        class:'flex py-2 px-2 bg-[#E9E8E9] rounded-md'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:'public/photo.png'
                            }
                        }),
                        box({
                            element:'div',
                            attr:{
                                class:'px-2'
                            },
                            children:[
                                box({
                                    element:'p',
                                    children:'Dorothy',
                                    attr:{
                                        class:'w-2/3 leading-5'
                                    }
                                }),
                                box({
                                    element:'p',
                                    children:'$12 (+$8.00 Tax)',
                                    attr:{
                                        class:'text-sm text-[#8F959E] pt-1'
                                    }
                                }),
                                box({
                                    element:'p',
                                    children:'Size: 38',
                                    attr:{
                                        class:'text-sm pt-1'
                                    }
                                }),
                                box({
                                    element:'div',
                                    attr:{
                                        class:' flex gap-10 pt-2 content-center items-center'
                                    },
                                    children:[
                                        box({
                                            element:'button',
                                            children:'-',
                                            attr:{
                                                class:'text-xl bg-[#F0EFF0] shadow-lg px-2 rounded-full',
                                                id:'minus'                                                                                              
                                            }
                                        }),
                                        box({
                                            element:'p',
                                            children:'1',
                                            attr:{
                                                class:'text-xl',
                                                id:'count'
                                            }
                                        }),
                                        box({
                                            element:'button',
                                            children:'+',
                                            attr:{
                                                class:'text-xl bg-[#F0EFF0] shadow-lg px-2 rounded-full',
                                                id:'plus'
                                            }
                                        }),
                                    ]                                  
                                })
                            ]
                        })
                    ]
                }),              
                box({
                    element:'div',
                    attr:{
                        class:'flex justify-between  py-4 text-2xl '
                    },
                    children:[
                        box({
                            element:'p',
                            children:'your Address'
                          }),
                          box({
                            element:'img',
                            attr:{
                                src:'Arrow - Right 2.svg'
                            }
                          })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between content-center items-center'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:'Group 3.png'
                            }
                        }),
                        box({
                            element:'p',
                            children:'Choose from the location',
                            attr:{
                                class:'text-md text-[#8F959E] w-1/2'
                            }
                        })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between  py-4 text-2xl '
                    },
                    children:[
                        box({
                            element:'p',
                            children:'Payment Method'
                          }),
                          box({
                            element:'img',
                            attr:{
                                src:'Arrow - Right 2.svg'
                            }
                          })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between content-center items-center'
                    },
                    children:[
                        box({
                            element:'img',
                            attr:{
                                src:'public/card.png'
                            }
                        }),
                        box({
                            element:'div',
                            children:[
                                box({
                                    element:'p',
                                    children:'Payment'
                                }),
                                box({
                                    element:'p',
                                    children:'**** **** **** 3947'
                                }) 
                            ]
                            
                        }),
                        box({
                            element:'img',
                            attr:{
                                src:'Arrow - Right 2.svg'
                            }
                        })
                    ]                   
                  }),
                  box({
                    element:'p',
                    children:"Order information",
                    attr:{
                        class:'text-xl py-3'
                    }
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between py-2'
                    },
                    children:[
                        box({
                            element:'p',
                            children:'total purchase',
                            attr:{
                                class:'text-[#8F959E]'
                            }
                        }),
                        box({
                            element:'p',
                            children:'$19',
                            attr:{
                                class:'font-semibold'
                            }
                        })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between py-2'
                    },
                    children:[
                        box({
                            element:'p',
                            children:'delivery cost',
                            attr:{
                                class:'text-[#8F959E]'
                            }
                        }),
                        box({
                            element:'p',
                            children:'$8',
                            attr:{
                                class:'font-semibold'
                            }
                        })
                    ]
                  }),
                  box({
                    element:'div',
                    attr:{
                        class:'flex justify-between py-4'
                    },
                    children:[
                        box({
                            element:'p',
                            children:'Total',
                            attr:{
                                class:'text-[#8F959E]'
                            }
                        }),
                        box({
                            element:'p',
                            children:'$27',
                            attr:{
                                class:'font-semibold'
                            }
                        })
                    ]
                  }),
                  box({
                    element:'button',
                    children:'Checkout',
                    attr:{
                        class:'w-full bg-[#F24467] my-3 text-white text-center py-4 rounded-full',
                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/payment')
                        },
                    }
                  })                
            ]
            //<div class='shadow-lg rounded-md content-center font-bold text-white'>
        })
    )
} 
