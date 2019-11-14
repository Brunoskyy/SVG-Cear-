/* var json = require('../data/cidades.json') */
var json = {
    "dasdasda": "dasdas",
    "cidades": [{
            "id": "fortaleza",
            "value": 12,
            "nome": "Fortaleza"
        },
        {
            "id": "acarau",
            "value": 1,
            "nome": "Acaraú"
        },
        {
            "id": "marco",
            "value": 12,
            "nome": "Marco"
        },
        {
            "id": "sobral",
            "value": 14,
            "nome": "Sobral"
        },
        {
            "id": "santa-quiteria",
            "value": 63,
            "nome": "Santa quitéria"
        },
        {
            "id": "caninde",
            "value": 12,
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
        {
            "id": "quixeramobim",
            "value": 26,
            "nome": "Quixeramobim"
        },
        {
            "id": "taua",
            "value": 56,
            "nome": "Tauá"
        }
    ]
}

/* array de escalas */
const scale = []

function percorrerArray() {
    json.cidades.forEach( e => {
        changeColor(e.id, e.value)
        
        // gera escala
        scale.push(e.value)
    });

    console.log('escala: ' + scale)
}

function changeColor(id) {
    const elem = document.getElementById(`${id}`)
    elem.style.fill = `rgba(0, 80, 240, ${Math.random()})`
}

function generateScale () {
    // Iniciando variavel total
    let total = 0;

    // fazendo soma dos elementos do array de escala
    for(let i = 0; i < scale.length; i++) {
        total += parseFloat(scale[i])
    }
    total = Math.floor(total
        )

    // Gerar Intervalos
    let interval = total / 10
    console.log(' total:' + interval)

    // Array de intervalos
    let intervalScale = [0]
    for(let i = 0; i <= 9; i++) {
        intervalScale.push(interval+=intervalScale[i])
    }
    console.log('escala de interval: ' + intervalScale)
}

percorrerArray()
generateScale()