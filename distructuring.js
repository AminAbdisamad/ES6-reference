const companies = [
  {
    name: "Asal",
    location: "Mogadishu"
  },
  {
    name: "Loopysec",
    location: "Hargeisa"
  },
  {
    name: "asal Academy",
    address: [
      {
        address1: "Mogadishu",
        address2: "boosaaso",
        address3: "kismaayo"
      }
    ]
  }
];

const [
  { location },
  loopy,
  {
    address: [{ address1, address2, address3 }]
  }
] = companies;
location;
loopy;
address1;
address2;
address3;

const google = {
  location1: ["Mountain view", "newyork", "london"]
};

// lets access london

const {
  location1: [view, newyork, london]
} = google;
london;

const points = [[10, 3], [94, 5], [54, 67], [23, 54]];
// lets return object with {x:10,y:50}

const p = points.map(pair => {
  const [x, y] = pair;
  return { x, y };
});
p;
