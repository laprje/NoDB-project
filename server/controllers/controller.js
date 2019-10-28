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
    },
    {
        name: "Zion Williamson",
        number: "1",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395628.png&h=96&w=96&scale=crop",
        id: 5
    },
    {
        name: "Damian Lillard",
        number: "0",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png&h=96&w=96&scale=crop",
        id: 6
    }
];

let id = 8;

const tradePlayers = [
    {
        name: "Jonchu",
        number: "69",
        image: "https://emoji.slack-edge.com/T039C2PUY/jonchu/309527375ff8c3d6.png",
        id: ''
    },
    {
        name: "Michael Jordan",
        number: "23",
        image: "https://pm1.narvii.com/6859/fb0b2b16c0021060c4bcf75bd78144aef44761d0v2_128.jpg",
        id: ''
    },
    {
        name: "Kyrie Irving",
        number: "11",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&h=96&w=96&scale=crop",
        id: ''
    },
    {
        name: "Kevin Love",
        number: '0',
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3449.png&h=96&w=96&scale=crop",
        id: ''
    },
    {
        name: "Shaq",
        number: "34",
        image: 'data:image/jpeg;base64,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',
        id: 7
    }
]

module.exports = {
    addPlayer: (req, res) => {
        // console.log(req.body)
        const newPlayer = {...req.body, id}
        roster.push(newPlayer);
        id++;
        // console.log(roster)
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

    waive: (req, res) => {
        const {elementId} = req.params;
        const index = roster.findIndex(el => el.id === +elementId);
        roster.splice(index, 1);
        res.status(200).send(roster);
    },


    trade: (req, res) => {
        const {elementId} = req.params;
        const index = roster.findIndex(el => el.id === +elementId)
        const tradePlayer = tradePlayers[Math.floor(Math.random() * 2)];
        roster.splice(index, 1, {...tradePlayer})
        roster[index].id = id++;
        console.log(roster[index]);
        res.status(200).send(roster);
    }
}