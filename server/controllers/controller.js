const roster = [
    {
        name: "Kawhi Leonard",
        number: "2",
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png&h=96&w=96&scale=crop',
        id: 0
    },
    {
        name: "Donovan Mitchell",
        number: "45",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3908809.png&h=96&w=96&scale=crop",
        id: 1
    },
    {
        name: "Lebron James",
        number: "23",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&h=96&w=96&scale=crop",
        id: 2
    },
    {
        name: "Mike Conley",
        number: "10",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3195.png&h=96&w=96&scale=crop",
        id: 3
    },
    {
        name: "Joe Ingles",
        number: "2",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2968436.png&h=96&w=96&scale=crop",
        id: 4
    }
];
let id = 5;

module.exports = {
    addPlayer: (req, res) => {
        // console.log(req.body)
        const newPlayer = {...req.body, id}
        roster.push(newPlayer);
        id++;
        console.log(roster)
        res.status(200).send(roster)
    },

    getRoster: (req, res) => {
        res.status(200).send(roster);
    },

    changeNumber: (req, res) => {
        const {id} = req.params;
        const {number} = req.body;
        console.log(id, number);
        const index = roster.findIndex(el => el.id === +id);
        // console.log(id);
        roster[index].number = number;
        console.log(roster[index]);
        res.status(200).send(roster);
    },

    trade: (req, res) => {
        const {id} = req.params;
        const index = roster.findIndex(el => el.id === +id);
        roster.splice(index, 1);
        res.status(200).send(roster);
    }
}