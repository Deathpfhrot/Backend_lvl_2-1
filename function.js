const { data } = require("./data.js")

mostCevil = () => {
    return data.filter(civil => civil.population > 100000)

}

lessCivil = () => {
    return data.filter(civil => civil.population < 100000)
}

module.exports = {
    mostCevil,
    lessCivil
}