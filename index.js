function distanceFromHqInBlocks (blocks) {
    let distance = Math.abs(blocks - 42);
    return distance;
}

function distanceFromHqInFeet(blocks) {
    let distance = Math.abs((blocks - 42) * 264);
    return distance;
}

function distanceTravelledInFeet(start, end) {
    let distance = Math.abs((start - end) * 264);
    return distance;
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs((start - destination) * 264);
    if (distance <= 400) {
        return 0;
    }
    else if (distance >= 400 && distance < 2000) {
        return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return distance = 25;
    }
    else if (distance > 2500) {
        return distance = "cannot travel that far"
    }
}
