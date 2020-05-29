// Lightning exercises in second group

// Predefined code from the chapter
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Lightning exercise 1
console.log(`1. The dimensions of the Empire State Building are below.
height: ${empireStateBuilding.height}
stories: ${empireStateBuilding.stories}
length from east to west: ${empireStateBuilding.eastWestLength}
length from north to south: ${empireStateBuilding.northSouthLength}
square feet: ${empireStateBuilding.squareFeet}`);

// Lightning exercise 2
const buildingStats = ["address","constructionDate", "cost", "owner", "architect"];

console.log("2. More stats for the Empire State Building are below.");

for (const stat of buildingStats) {
    console.log(`${stat}: ${empireStateBuilding[stat]}`);
}