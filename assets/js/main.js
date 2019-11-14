/* var json = require('../data/cidades.json') */
var json = {
    "dasdasda": "dasdas",
    "cidades": [{
            "id": "fortaleza",
            "value": 85,
            "nome": "Fortaleza"
        },
        {
            "id": "acarau",
            "value": 12,
            "nome": "Acaraú"
        },
        {
            "id": "marco",
            "value": 158,
            "nome": "Marco"
        },
        {
            "id": "sobral",
            "value": 255,
            "nome": "Sobral"
        },
        {
            "id": "santa-quiteria",
            "value": 120,
            "nome": "Santa quitéria"
        },
        {
            "id": "caninde",
            "value": 56,
            "nome": "Canindé"
        },
        {
            "id": "trairi",
            "value": 45,
            "nome": "Trairí"
        },
        {
            "id": "acarape",
            "value": 89,
            "nome": "Acarape"
        },
    ]
}

/* array de escalas */
const scale = []

function percorrerArray() {
    json.cidades.forEach((e, index) => {
        changeColor(e.id, e.value)
        makeScale(e.value, index)
    });
    console.log(scale);
}

function changeColor(id) {
    const elem = document.getElementById(`${id}`)
    elem.style.fill = `rgba(0, 80, 240, ${Math.random()})`
}



function makeScale(value, index){
    scale.push(value)
}

percorrerArray()