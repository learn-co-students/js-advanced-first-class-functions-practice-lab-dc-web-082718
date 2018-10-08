// Code your solution in this file!

function logDriverNames(arr) {
  arr.forEach( (elem) => {
    console.log(elem.name);
  })
}

function logDriversByHometown(arr, home) {
  arr.forEach( (elem) => {
    if (elem.hometown === home) {
      console.log(elem.name);
    }
  })
}

function driversByRevenue(arr) {
  let newArr = [...arr];
  return newArr.sort( (a, b) => {
    return a.revenue - b.revenue;
  })
}

function driversByName(arr) {
  let newArr = [...arr];
  return newArr.sort( (a, b) => {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(arr) {
  let initialValue = 0;
  return arr.reduce( (sum, obj) => {
    return sum + obj.revenue;
  }, initialValue)
}

function averageRevenue(arr) {
  return (totalRevenue(arr) / arr.length)
}
