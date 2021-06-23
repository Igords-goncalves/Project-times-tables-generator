function gerador() {
    let number = document.getElementById('txtn');
    let tabuada = document.getElementById('txtt');

    if (number.value.length == 0) { //Se não conter dados
        window.alert('Faltam dados');
    } else {
        let n = Number(number.value); //Convertendo o numero digitado p/ numero
        let count = 1
        while (count <= 10) {
            let item = document.createElement('option'); //Mesma coisa de criar dentro do html
            item.text = `${n} x ${count} = ${n * count}`;
            tabuada.appendChild(item);
            count ++
        }
    }
}