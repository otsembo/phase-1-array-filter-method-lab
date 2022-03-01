// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(function (i) {
    return i.toLowerCase() === name.toLowerCase();
  })
}


function  fuzzyMatch(persons, name){
  return persons.filter(function (i) {
    return i.toLowerCase().substring(0,2) === name.toLowerCase().substring(0,2);
  })
}

function matchName(persons, name){
  return persons.filter(function (i){
    const actualName = i.name;
    return actualName.toLowerCase() === name.toLowerCase();
  });
}
