let kafedrs = [];

// Читання з хмарного сховища
async function populate() {
    const requestURL="https://api.jsonbin.io/v3/b/692651abae596e708f71162a";
    const request = new Request(requestURL);
    const response = await fetch(request);

    if (response.ok) {
        const prod = await response.json();
        newDepartments (prod.record);
        showHeader();
        showDepartments();
    }
    else
        alert("Помилка");
}

// Створення масиву об’єктів
function newDepartments(obj) {
    kafedrs = []; // очищення

    for (let k of obj) {
        let kaf = new Kafedra(k.faculty, k.kafedra);
        kafedrs.push(kaf);
    }
}

//Виведення заголовку
function showHeader() {
    const header = document.querySelector(".header");

    const h1 = document.createElement("h1");
    h1.innerText = "Война Наталія";

    const h2 = document.createElement("h2");
    h2.innerText = "АнД-31 | Варіант №3";

    const p = document.createElement("p");
    p.innerText = "Завдання: Перелік кафедр для трьох факультетів";

    header.appendChild(h1);
    header.appendChild(h2);
    header.appendChild(p);
}

//Виведення даних
function showDepartments() {
    const main = document.querySelector(".content");

    const divFIT = document.createElement("div");
    const divNNIF = document.createElement("div");
    const divECO = document.createElement("div");

    const h2FIT = document.createElement("h2");
    const h2NNIF = document.createElement("h2");
    const h2ECO = document.createElement("h2");

    h2FIT.textContent = "ФІТ";
    h2NNIF.textContent = "ННІФ";
    h2ECO.textContent = "Економічний";

    const listFIT = document.createElement("ul");
    const listNNIF = document.createElement("ul");
    const listECO = document.createElement("ul");

    for (let k of kafedrs) {
        const listItem = document.createElement("li");
        listItem.textContent = k.kafedra;
        if (k.faculty == "ФІТ")
            listFIT.appendChild(listItem);

        else if (k.faculty == "ННІФ")
            listNNIF.appendChild(listItem);

        else if (k.faculty == "Економічний")
            listECO.appendChild(listItem);
    }

    divFIT.appendChild(h2FIT);
    divNNIF.appendChild(h2NNIF);
    divECO.appendChild(h2ECO);

    divFIT.appendChild(listFIT);
    divNNIF.appendChild(listNNIF);
    divECO.appendChild(listECO);

    main.appendChild(divFIT);
    main.appendChild(divNNIF);
    main.appendChild(divECO);
}

populate();
