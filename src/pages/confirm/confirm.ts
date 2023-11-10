import { box } from "../../lib"

export const confirm =()=>{
    return(
        box({
            element:'div',
            attr:{
                class:'px-2'
            },
            children:[
                box({
                    element:'img',
                    attr:{
                        src:"public/download.png",
                        class:'cursor-pointer py-3',

                        onclick:(e:Event)=>{
                            e.preventDefault();
        
                            location.assign('/payment')
                        },
                    }
                }),
              box({
                element:'div',
                attr:{
                    class:"flex justify-center pt-12 pb-7"
                },
                children:[
                    box({
                        element:'img',
                        attr:{
                            src:'public/bags.png'
                        }
                    })
                ]
              }),
              box({
                element:'p',
                children:'Success!',
                attr:{
                    class:'text-2xl font-semibold flex justify-center '
                }
              }),
              box({
                element:'div',
                attr:{
                    class:'text-base text-[#8F959E] py-4'
                },
                children:[
                    box({
                        element:'p',
                        children:'Your order will be delivered soon.Thank you for choosing our app!',
                        attr:{
                            class:'flex justify-center'
                        }
                    }),
                    box({
                        element:'p',
                        children:'Wait for your product :)',
                        attr:{
                            class:'flex justify-center'
                        }
                    })
                ]
               
              }),
              box({
                element:'button',
                children:'CONTINUE SHOPPING',
                attr:{
                    class:'w-full bg-[#F24467] mt-9 mb-3 text-white text-center py-4 rounded-full',
                    onclick:(e:Event)=>{
                        e.preventDefault();
    
                        location.assign('/home')
                    },
                }
              })

            ]
        })
    )
}
