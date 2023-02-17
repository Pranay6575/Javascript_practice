let extantFish = [
    {name: "Whale Shark", length: "61.7" },
    { name: "Basking Shark", length: "46" },
    { name: "Tiger Shark", length: "25" },
    { name: "White Shark", length: "23" }
];
extantFish.sort(function (a, b) { return a.length - b.length })