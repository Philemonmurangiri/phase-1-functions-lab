function distanceFromHqInBlocks(newlocation) {
   const hqlocation = 42
   
if (newlocation >=42){
    return newlocation-hqlocation    
 } else if (newlocation < 42){
    return hqlocation-newlocation
 }
}
 hv
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(distance1, distance2) {
    const oneBlockFeets = 264;
    if (distance1 <= distance2) {
      return (distance2 - distance1) * oneBlockFeets;
    } else {
      return (distance1 - distance2) * oneBlockFeets;
    }
  }
function calculatesFarePrice(from, to){
        const perFootCharge = 0.02;
        const maxDistance = 2000;
        const maxAllowedDistance = 2500;
        const maxDistanceCharge = 25;
      
        const distance = Math.abs(from - to) * 264;
      
        if (distance <= 400) {
          return 0;
        } else if (distance <= maxDistance) {
          return (distance - 400) * perFootCharge;
        } else if (distance <= maxAllowedDistance) {
          return maxDistanceCharge;
        } else {
          return 'cannot travel that far';
        }
      

    
}