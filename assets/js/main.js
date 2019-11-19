/* var json = require('../data/cidades.json') */
var json = {
    "categoria": "Densidade Demográfica",
    "cidades": [{
            "id": "fortaleza",
            "value": 64,
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
        },
        {
            "id": "jaguaretama",
            "value": 15,
            "nome": "Jaguaretama"
        }

    ]
}

/* array de escalas */
const scale = []

function percorrerArray() {
    json.cidades.forEach(e => {
        changeColor(e.id, e.value)

        // gera escala
        scale.push(e.value)
        generatePopover(json.categoria, e.id, e.nome, e.value)
    });

    console.log('scale: ' + scale.sort())
}

function changeColor(id) {
    const elem = document.getElementById(`${id}`)
    elem.style.fill = `rgba(0, 80, 240, ${Math.random()})`
}

function generateScale() {

    // Instancía maior e menor valor do Array
    let maiorValor = Math.max(...scale)

    // Gerando razão da progressão aritmética
    let interval = maiorValor / 9;
    console.log(' intervals average:' + interval)

    // Array de intervalos
    this.intervalScale = [0]
    console.log(intervalScale);
    for (let i = 0; i <= 9; i++) {
        intervalScale.push(Math.floor(interval) + intervalScale[i])
    }
    console.log('interval scale: ' + intervalScale)

    // CRIADOR DE GRADIENTE DAS ESCALAS
    // selecionando elementos da escala
    const elems = document.querySelectorAll('.escala div')

    //mudando a opacidade conforme o numero de elementos
    for (i = 0; i < 9; i++) {
        
        // muda a cor de cada elemento da escala
        const elem = elems[i]
        elem.style.backgroundColor = `rgba(0, 80, 240, 0.${i+1})`
    }
}


function generatePopover(categoria, id, nome, value) {
    document.getElementById(`${id}`).addEventListener("mouseover", function (event) {
        var posX = event.clientX
        var posY = event.clientY
        console.log(posX)
        console.log(posY)
        // console.log(`${categoria}`)
        // console.log(`${value}`)

        document.querySelector('.pop').style.top = `${posY}px`
        document.querySelector('.pop').style.left = `${posX/2}px`
        document.querySelector('.pop').style.display = 'block'
        document.querySelector('.pop .city').innerHTML = `${nome}`
        document.querySelector('.pop .category').innerHTML = `${categoria}: ${value}`
    })
}

percorrerArray()
generateScale()