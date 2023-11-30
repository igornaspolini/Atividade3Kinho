window.onload = Inicio
const caminho = "./img/"
const prefix = "article_carrossel_"
const extensao = ".jpg"
var cont = 0

var lista = [
{img:1, titulo:"A", preco:2},
{img:2, titulo:"B", preco:4},
{img:3, titulo:"C", preco:5},
{img:4, titulo:"D", preco:6},
{img:5, titulo:"D", preco:6},
]

var botaoVoltar = document.getElementById("btnVoltar")
var botaoAvancar = document.getElementById("btnAvancar")
var moldura = document.getElementById("img_moldura")

function Inicio(){
    
    botaoAvancar.onclick = Avancar
    botaoVoltar.onclick = Voltar
    Atualizar()
    
}

function Avancar(){

    if(cont < lista.length-1){
        cont++
    }
    if(cont == lista.length-1){

      cont = 0
    }
    
    Atualizar()
}

function Voltar() {
    if (cont > 0) {
        cont--;
    } else {
        cont = lista.length - 1;
    }

    Atualizar();
}



function Atualizar(){

    if(cont < lista.length){
        console.log(lista.length)
    moldura.src = caminho + prefix + lista[cont].img + extensao
    /* titulo.innerHTML = lista[cont].titulo
    preco.innerHTML = "R$: "+lista[cont].preco
 */
    }
    else{
        alert("O Cont é maior que o número de elementos")
    }

}

