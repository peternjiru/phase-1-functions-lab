function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        const distanceInBlocks = someValue - 42;
        return distanceInBlocks;
    } else {
        const distanceInBlocks = 42 - someValue;
        return distanceInBlocks;
    }
}

//const distanceInBlocks = distanceFromHqInBlocks(50); //just for testing

function distanceFromHqInFeet(someValue) {
    if (someValue > 42) {
        const distanceInFeet = (someValue - 42) * 264;
        return distanceInFeet;
    } else {
        const distanceInFeet = (42 - someValue) * 264;
        return distanceInFeet;
    }
}

//const distanceInFeet = distanceFromHqInFeet(50); //just for testing

function distanceTravelledInFeet(start, end) {
    const distanceInFeet = (Math.abs((start - end)) * 264);
    return distanceInFeet;
}

//const feet = distanceTravelledInFeet(38, 34); //just for testing

function calculatesFarePrice(start, end) {
    const distanceInFeet = (Math.abs((start - end)) * 264);
    if (distanceInFeet < 400) {
        const fare = 0;
        return fare;
    } else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
        let fare = (distanceInFeet - 400) * 0.02;
        fare = Number.parseFloat(fare.toFixed(2))
        return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        const fare = 25;
        return fare;
    } else {
        return 'cannot travel that far';
    }

}

//const fare = calculatesFarePrice(44, 36); //just for testing
