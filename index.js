const form = document.querySelector("#form1");
//console.log(form);
form.addEventListener("submit", adiciona);

function adiciona(event) {
    event.preventDefault();
    //console.log(form);
    const name = form.nome.value;
    const age = form.idade.value;
    let lista;
    //console.log(name, age);
    if(age <= 18){
        //console.log(name, age);
        lista = document.querySelector("#liJun");
    }else if(age >= 19 && age < 40){
        //console.log(name, age);
        lista = document.querySelector("#liMas");
    }else{
        //console.log(name, age);
        lista = document.querySelector("#liSen");
    }
    //console.log(lista);
    const item = document.createElement("li");
    item.textContent = name+" - "+age+" anos"
    //console.log(item);
    lista.appendChild(item);
    form.reset();
    form.nome.focus();
}