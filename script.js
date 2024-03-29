let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <=100){
    return true;
  }else{
    return false;
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) !== -1){
    return true;
  }else{
    return false;
  }
}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = '';
  }else{
    window.alert('Valor inválido ou já encontrado na lista');
  }
  num.value = '';
  num.focus();
}

function finalizar(){
  if(valores.length == 0){
    window.alert('Adicione valores antes de finalizar');
  }else{
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    for(let pos in valores){
      if(valores[pos] > maior){
        maior = valores[pos];
      }else if(valores[pos] < menor){
        menor = valores[pos];
      }
    }
    let soma = 0;
    for(let c = 0; c < valores.length; c++){
      soma += valores[c];
    }
    let media = soma/tot;

    res.innerHTML = '';
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p> O maior número cadastrado é ${maior}.</p>`;
    res.innerHTML += `<p> O menor número cadastrado é ${menor}.</p>`;
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p> A média dos números cadastrados é ${media}.</p>`;

  }
}