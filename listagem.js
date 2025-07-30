   
    const btn = document.getElementById('btn')
    btn.onclick = cadastrar

function cadastrar(){
    const table = document.getElementById('tabela')
    const tabela = document.createElement('tr')
    const marcaOb= document.createElement('th')
    const modeloOb= document.createElement('th')
    const corOb= document.createElement('th')
    const valorOb= document.createElement('th')
    const estadoOb= document.createElement('th')
    const demaisInfo= document.createElement('th')
    const btnExcluir = document.createElement('button')
    btnExcluir.textContent = 'excluir'
    const acoes  = document.createElement('th')
    const storage = localStorage.getItem('form')
    let objeto = JSON.parse(storage)

    marcaOb.textContent = objeto['marca']
    modeloOb.textContent = objeto['modelo']
    corOb.textContent = objeto['cor']
    valorOb.textContent = objeto['valor']
    estadoOb.textContent = objeto['situacao']
    demaisInfo.textContent = objeto['maisInformacoes']
    

    table.appendChild(tabela)
    tabela.appendChild(marcaOb)
    tabela.appendChild(modeloOb)
    tabela.appendChild(corOb)
    tabela.appendChild(valorOb)
    tabela.appendChild(estadoOb)
    tabela.appendChild(demaisInfo)
    tabela.appendChild(acoes)
    acoes.appendChild(btnExcluir)

    btnExcluir.onclick=()=>{
        tabela.remove()
        localStorage.clear()
    }




    








}