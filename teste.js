// logica para obter os dados e transformalos em float
function calculos(){
  // Tab to edit
  let numero1 = document.getElementById("numero1").value;
  var num_1 = parseFloat(numero1);
  
  let numero2 = document.getElementById("numero2").value;
  var num_2 = parseFloat(numero2);
  
  let operador = document.getElementById("operador").value;
  // Capitura do id de resposta pra o resultado
  var elementoResultado = document.getElementById("resultado_rpsta")
  //lógica dos cálculos operador "+"
  if (operador === "+") {
    const resultado = num_1 + num_2;
    elementoResultado.innerHTML= resultado;
   
    }
  // Lógica operador "*"
  else if (operador === "*"){
      const resultado = num_1 * num_2;
      elementoResultado.innerHTML = resultado;
      }
  // Lógica operador "/"
  else if (operador === '/') {
        const resultado = num_1 / num_2;
        elementoResultado.innerHTML = resultado;
        }
  // Caso o operador seja inválido.
 else{
    var elementoResultado = document.getElementById('resultado_rpsta');
    elementoResultado.innerHTML= "operador inválido";
        
          }
      }

 //Add operador no input  
function exibir_numero(numero, idDoInput){
  let inputAtivo = document.getElementById(idDoInput)
  if (inputAtivo.tagName === 'INPUT') {
        inputAtivo.value = numero;
      }
  
}