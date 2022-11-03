// Speed Limit = 70
// Speed 5 + -> 1 point. 1 Point for every 5 
// Use Math.Floor
//If a driver gets more than 12 points -> License Suspended

checkSpeed(130);

function checkSpeed (speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  
  if (speed <= speedLimit)
  console.log('Ok');
  
  else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
    console.log('License is suspended');
    else
    console.log('Points', points);
  }
  
}