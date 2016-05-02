/**
 * Darks Units model
 */
const darkUnits = [	
	{
		id: 0,
		unit: "minion",
		name: "Minion",
		folder: "troops/dark/minion",
		cost: [0,6,7,8,9,10,11],
		lvls: [0,1,2,3,4,5,6],
		lvl: 0,
		time: 45,
		space: 2,
		amount: 0
	},
	{
		id: 1,
		unit: "pig",
		name: "Hog Rider",
		folder: "troops/dark/pig",
		cost: [0,40,45,52,58,65],
		lvls: [0,1,2,3,4,5],
		lvl: 0,
		time: 120,
		space: 5,
		amount: 0
	},
	{
		id: 2,
		unit: "valkirye",
		name: "Valkirye",
		folder: "troops/dark/valkirye",
		cost: [0,70,100,130,160],
		lvls: [0,1,2,3,4],
		lvl: 0,
		time: 480,
		space: 8,
		amount: 0
	},
	{
		id: 3,
		unit: "golem",
		name: "Golem",
		folder: "troops/dark/golem",
		cost: [0,450,525,600,675,750],
		lvls: [0,1,2,3,4,5],
		lvl: 0,
		time: 2700,
		space: 30,
		amount: 0
	},
	{
		id: 4,
		unit: "witch",
		name: "Witch",
		folder: "troops/dark/witch",
		cost: [0,250,350],
		lvls: [0,1,2],
		lvl: 0,
		time: 1200,
		space: 12,
		amount: 0
	},
	{
		id: 5,
		unit: "lavahound",
		name: "Lava Hound",
		folder: "troops/dark/lavahound",
		cost: [0,390,450,510],
		lvls: [0,1,2,3],
		lvl: 0,
		time: 2700,
		space: 30,
		amount: 0
	}
];

export default darkUnits;