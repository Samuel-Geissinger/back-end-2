const housesDatabase = require('./db.json');

module.exports = {
    getHouse: (req, res) => {
        res.status(200).send(housesDatabase);
    },

    deleteHouse: (req, res) => {
        const index = housesDatabase.findIndex(e => e.id === +req.params.id);
        housesDatabase.splice(index, 1);
        res.status(200).send(housesDatabase);
    },  

    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body;
        const newHouse = { id: housesDatabase.length + 1, address, price, imageURL };
        housesDatabase.push(newHouse);
        res.status(200).send(housesDatabase);
    },

    updateHouse: (req, res) => {
        const { type } = req.body;
        const index = housesDatabase.findIndex(e => e.id === +req.params.id);

        if (type === 'minus' && housesDatabase[index].price > 10000) {
            housesDatabase[index].price -= 10000;
            res.status(200).send(housesDatabase);
        } else if (type === 'plus') {
            housesDatabase[index].price += 10000;
            res.status(200).send(housesDatabase);
        } else {
            res.status(400).send('Something went wrong when updating the house');
        }
    }
}