function firstRoute(firstShip) {
    if (firstShip == "Aurora") {
        return "Ember";
    }
    if (firstShip == "Ember") {
        return "Nebula";
    }
    if (firstShip == "Nebula") {
        return "Rift";
    }
    if (firstShip == "Rift") {
        return "Aurora";
    }
}

function secondRoute(secondShip) {
    if (secondShip == "Ember") {
        return "Nebula";
    }
    if (secondShip == "Nebula") {
        return "Rift";
    }
    if (secondShip == "Rift") {
        return "Obsidian";
    }
    if (secondShip == "Obsidian") {
        return "Eclipse";
    }
    if (secondShip == "Eclipse") {
        return "Ember";
    }
}

function meet(firstShip, secondShip) {
    if (firstShip == secondShip) {
        return 0;
    }

    return 1 + meet(firstRoute(firstShip), secondRoute(secondShip));
}
console.log(meet("Aurora", "Ember"));
