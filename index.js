const logDriverNames = function(drivers) {
  console.log("logDriverNames")
  return drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location) {
  console.log('logDriversByHometown')
  const hometownDrivers = drivers.filter(x => x.hometown === location);

  return hometownDrivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

const driversByRevenue = function(drivers) {
  console.log('driversByRevenue');

  const copy = [...drivers];

  return copy.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function(drivers) {
  console.log('driversByName');

  const copy = [...drivers];

  return copy.sort(function(a, b)
    {
    return a.name.localeCompare(b.name);
    }
  )
}

const reduceRevenue = function(agg, el, i, arr) {
  return agg + el.revenue;
}

const totalRevenue = function(drivers) {
  return drivers.reduce(reduceRevenue, 0);
}

const averageRevenue = function(drivers) {
  const total = totalRevenue(drivers);
  return total / drivers.length;
}
