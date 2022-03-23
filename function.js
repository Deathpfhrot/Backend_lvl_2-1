const { data } = require("./data.js")

mostCevil = () => {
    return data.filter(civil => civil.population > 100000)

}

lessCivil = () => {
    return data.filter(civil => civil.population < 100000)
}

function manyCevil() {
    return data.filter(poularity => poularity.population > 100000)
}

module.exports = {
    mostCevil,
    lessCivil,
    manyCevil
}