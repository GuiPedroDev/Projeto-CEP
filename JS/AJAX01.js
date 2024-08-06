let cep = document.querySelector("input").value
let url ='https://viacep.com.br/ws/${cep}/json/'

fetch(url)
    .then(function(response){
        return response.json()
    })

    .then(function(response){

        setTimeout(function(){
         let cep = document.querySelector("input")
        cep.textContent = response.logradouro
        },2000) //tempo
        console.log(response)
    })

    .catch(console.error())

