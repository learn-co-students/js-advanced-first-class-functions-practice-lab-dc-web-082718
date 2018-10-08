// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(function(driver){ console.log(driver.name)});
}

function logDriversByHometown(drivers,hometown){
    drivers.filter(function(driver) { return driver.hometown === hometown;}).forEach(function(driver){ console.log(driver.name)});
}

function driversByRevenue(drivers){
    // or drivers.slice(0) to get duplicate
    return [...drivers].sort(function(driver1,driver2){ return driver1.revenue - driver2.revenue;});
}

function driversByName(drivers){
    return drivers.slice(0).sort(function(driver1,driver2){ return driver1.name.localeCompare(driver2.name)});
}

function totalRevenue(drivers){
    const reducer = function(total, driver){ return total + driver.revenue;};
    return drivers.reduce(reducer,0);
}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
}
