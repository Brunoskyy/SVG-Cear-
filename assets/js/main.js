var json = require('../data/cidades.json')

function percorrerArray() {
    json.cidades.forEach(e => {
        console.log(e.id)
        console.log(e.nome)
        console.log(e.value)
    });
}

percorrerArray()