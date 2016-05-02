/**
 * Light Spells model
 */
const lightSpells = [
        {
            id: 0,
            unit: "lightning",
            name: "Lightning",
            folder: "troops/spells",
            cost: [0,15000,16500,18000,20000,22000,24000],
            lvls: [0,1,2,3,4,5,6],
            lvl: 0,
            time: 1800,
            space: 2,
            amount: 0
        },
        {
            id: 1,
            unit: "healing",
            name: "Healing",
            folder: "troops/spells",
            cost: [0,15000,16500,18000,20000,22000,24000],
            lvls: [0,1,2,3,4,5,6],
            lvl: 0,
            time: 1800,
            space: 2,
            amount: 0
        },
        {
            id: 2,
            unit: "rage",
            name: "Rage",
            folder: "troops/spells",
            cost: [0,23000,25000,27000,30000,33000],
            lvls: [0,1,2,3,4,5],
            lvl: 0,
            time: 2700,
            space: 2,
            amount: 0
        },
        {
            id: 3,
            unit: "jump",
            name: "Jump",
            folder: "troops/spells",
            cost: [0,23000,27000,31000],
            lvls: [0,1,2,3],
            lvl: 0,
            time: 2700,
            space: 2,
            amount: 0
        },
        {
            id: 4,
            unit: "freeze",
            name: "Freeze",
            folder: "troops/spells",
            cost: [0,26000,29000,31000,33000,35000],
            lvls: [0,1,2,3,4,5],
            lvl: 0,
            time: 2700,
            space: 2,
            amount: 0
        }
];

export default lightSpells;