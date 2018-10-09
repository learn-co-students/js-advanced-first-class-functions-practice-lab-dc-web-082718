// Code your solution in this file!
const logDriverNames = function(driverObjects){
  driverObjects.forEach(driver => console.log(driver.name))
}

const logDriversByHometown = function(driverObjects, location){
  let filteredDrivers = driverObjects.filter(driver => driver.hometown === location)
  filteredDrivers.forEach(driver => console.log(driver.name))
}

const driversByRevenue = function(driverObjects){
  return driverObjects.slice().sort(function(driverA, driverB){
    return driverA.revenue - driverB.revenue
  })
}


const driversByName = function(driverObjects){
  return driverObjects.slice().sort(function(driverA, driverB) {
  return driverA["name"].localeCompare(driverB["name"]);
  })
}

const totalRevenue = function(driverObjects){
  const reducer = (accumulator, currentValue) => accumulator + currentValue

  let revenues = driverObjects.map(driver => driver.revenue)
  return revenues.reduce(reducer)
}

const averageRevenue = function(driverObjects){
  return totalRevenue(driverObjects) / (driverObjects.length)
}
