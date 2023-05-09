//Selecionando o botão com a classe "btn"
let button = document.querySelector(".btn");
//Selecionando o elemento com o ID "color-code"
let displayCode = document.querySelector("#color-code");
//Variável para armazenar a cor gerada.
let color;

//Função para gerar uma cor aleatória.
let randomColor = () => {
  color = "#";
  let hexaDecimal = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color = color + hexaDecimal[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Adicionando o evento de click no botão.
button.addEventListener("click", () => {
  //Alterando a cor de fundo do corpo do documento com a cor aleatória gerada.
  document.body.style.backgroundColor = randomColor();
  // Atualizando o conteúdo do elemento "color-code" com a cor gerada.
  displayCode.innerHTML = color;
});

//Math.random(retorna um numero aleatório entre 0(inclusivo) e 1(exclusivo)), por exemplo > 0.5728
//Math.random() * 16 = multiplica o valor aleatório por 16, gerando um valor entre 0 e 16(exclusivo), exemplo > 9,1648
//Math.floor(math.random() * 16) = arredonda o valor aleatóro para baixo. exemplo > 9

//Com isso teremos >  hexaDecimal[9] acessa o elemento do indice 9 do array hexaDecimal, que é uma string contendo os dígitos hexadecimais.
//No caso, hexaDecimal[9] retornaria a letra '9'.
