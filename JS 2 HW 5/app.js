const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")



//usd.value = (e.target.value / data.usd).toFixed(2)

const convert = (elem, target,target2, isTrue,isTrue2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/json")
        request.send()

        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / response.usd).toFixed(2)
            } else if (isTrue2) {
                target.value = (elem.value * response.usd).toFixed(2)
            } else (false) 
                target2.value = (elem.value * response.eur).toFixed(2)
        }                                                    
                  
            elem.value === '' && (target.value,target2.value = '')
               
         );
      });    
    };
    
        

           
         convert(som, usd,true )
         convert(usd, som, true)
         convert(eur,som,false)
    