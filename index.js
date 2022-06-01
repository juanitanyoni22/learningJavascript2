window.addEventListener("DOMContentLoaded",()=>{
   // console.log("dom content loaded")

const linumbers=[1,2,3,4,5]


    for (const number of linumbers) {
        console.log(number+2)
    }


let userData={}
    const button=document.querySelector("#button")
    document.querySelector("form").addEventListener("submit",(e)=>{
       e.preventDefault()
        
    const names=document.querySelector("#names")
    console.log(names.value)
    userData.name=names.value

    const email=document.querySelector("#email")
    console.log(email.value)
    userData.email=email.value
    
    const approval=document.querySelector("#approval")
    console.log(approval.value)
    userData.approval=approval.value
    
    
  const transport= document.querySelector('input[name="transport"]:checked').value
    console.log(transport)  
 /*    for (const radio of transport) {
        console.log(radio.Checked)
    } */
   /*  userData.transport=transport.checked
console.log(userData)
 */



    })
})