let btn = document.querySelector("button")
btn.addEventListener('click', ()=>{
        
    let cep = document.querySelector("input").value
    let url =`https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
    .then(function(response){
        return response.json()
    })

    .then(function(response){  

        console.log(response)
        let tds = document.querySelectorAll('td')
        tds[0].textContent = response.uf
        tds[1].textContent = response.localidade
        tds[2].textContent = response.ddd
        tds[3].textContent = response.logradouro
        tds[4].textContent = response.bairro
        document.getElementById('tabela').classList.remove('hidden');
        document.getElementById('h1').textContent = 'Informações de Endereço';
    })

    .catch(error => {
        console.log('Erro ao buscar CEP:', error);
        document.getElementById('h1').textContent = 'ERRO';
        document.getElementById('error').textContent = 'DIGITE UM CEP VALIDO';
    });
});




/*    .then(response =>{
        return response.json()
    })

    .then(response =>{
        setTimeout(()=>{
            console.log(response)
    let tds = document.querySelectorAll('td')
    tds[0].textContent = response.uf
    tds[1].textContent = response.localidade
    tds[2].textContent = response.ddd
    tds[3].textContent = response.logradouro
    tds[4].textContent = response.bairro

        }, 3000)
    })
    
*/