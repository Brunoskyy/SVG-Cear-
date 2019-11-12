var json = require('../data/cidades.json')

function percorrerArray() {
    json.cidades.forEach(e => {
        console.log(e.id)
        if(e.id <= 10) {
            console.log('value maior que 10')
        } else {
            console.log('value menor que 10')
        }
        console.log(e.value)
    });
}

percorrerArray()