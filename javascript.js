function gerador() {
    let number = document.getElementById('txtn');
    let tabuada = document.getElementById('txtt');

    if (number.value.length == 0) { //Se não conter dados vai dar esse aviso
        window.alert('Faltam dados');
    } else {
        let n = Number(number.value); //Convertendo o numero digitado p/ numero
        let count = 1
        tabuada.innerHTML = '';
        while (count <= 10) {
            let item = document.createElement('option'); //Mesma coisa de criar dentro do html
            item.text = `${n} x ${count} = ${n * count}`; //Calculo logico
            item.value = `tabuada${count}`
            tabuada.appendChild(item);
            count ++ // count = count + 1
        }
    }
}