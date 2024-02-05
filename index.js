// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  let hq = 42;
  if (pickup < hq) {
    return hq - pickup;
  } else {
    return pickup - 42;
  }
}

function distanceFromHqInFeet(blocks) {
  let cityBlock = 264;
  return distanceFromHqInBlocks(blocks) * cityBlock;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTraveled = Math.abs(start - destination);
  const feetTraveled = blocksTraveled * 264;
  return feetTraveled;
}

function calculatesFarePrice(start, destination) {
  let ride = distanceTravelledInFeet(start, destination);
  if (ride <= 400) {
    return 0;
  } else if (ride > 400 && ride <= 2000) {
    return (ride - 400) * 0.02;
  } else if (ride >= 2000 && ride <= 2500) {
    return 25;
  } else if (ride > 2500) {
    return "cannot travel that far";
  }
}
