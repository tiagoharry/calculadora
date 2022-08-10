const listaTeclas = document.querySelectorAll('#btn');
const visor = document.querySelector('.visor');
const resultado = document.querySelector('#solve');
const clear = document.querySelector('#limpa');

for(i=0; i < listaTeclas.length; i++){
    const teclas = listaTeclas[i];
        teclas.addEventListener('click', ()=>{

            visor.value += teclas.value;
            console.log('click');
        }); 
        
        resultado.addEventListener('click', ()=>{
            let x = visor.value;
            let y = eval(x);

            if(y < 0){
                document.querySelector('.visor').value = y*-1;
            }else{
                document.querySelector('.visor').value = y;
            }
            
            return y;
        });
       
            clear.addEventListener('click', ()=>{
                visor.value = '';
            });   
}






/*const result = document.querySelector('#resultado');

function display(valor){
    result.value += valor;
    return valor;
}

//The solve function uses a javascript method eval(). It takes the value from "x" and evaluate it as javascript. Like if there are two numbers with a plus operator between them. It will add them. And display it in textbox by variable "y".
function solve(){
    let x = result.value;
    let y = eval(x);

    document.querySelector('#resultado').value = y;
    return y;
}

function clearScreen(){
    result.value = '';
}*/



/*const listaTeclas = document.querySelectorAll('.botao');
const input = document.querySelector('.visor');
const clear = document.querySelector('#limpa');
//para os números clicados aparecerem no visor
for(i = 0; i < listaTeclas.length; i++){
    const tecla = listaTeclas[i];

    tecla.onclick = function(){
            input.value += tecla.value; 
        }      
    }   

clear.addEventListener("click",()=>{
    input.innerHTML = "";
})*/
