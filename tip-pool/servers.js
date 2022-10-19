let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr, 'server');

    serverTbody.append(newTr);
  }
}

function myMap(arr, callback){
  let result = []
  arr.forEach(function(a){
    result.push(callback(a))
  })
  return result
}

function myFilter(arr, callback){
  let result = []
  arr.forEach(function(a, i, arr){
    if (callback(a, i, arr)) result.push(a)
  })
  return result
}


function doubleValues(arr){
  return arr.map(function(a) {
    return a*2
  })
}

function onlyEvenValues(arr){
  return arr.filter(function(a){
    return a % 2 === 0
  })
}

function showFirstAndLast(arr){
  return arr.map(function(s){
    return s[0] + s[s.length-1]
  })
}

function addKeyAndValue(arr, key, value){
  return arr.map(function(a){
    a[key] = value
    return a
  })
}

function vowelCount(s){
  let result = {}
  let v_arr = Array.from(s).filter(function(a){
    return "aeiou".includes(a.toLowerCase())
  })
  v_arr.forEach(function(v){
    v = v.toLowerCase()
    if (!result[v]){
      result[v] = 1
    } else {
      result[v] ++
    }
  })
  return result
}

function doubleValuesWithMap(arr){
  return arr.map(function(a) {
    return a * 2
  })
}

function extractKey(arr, key){
  return arr.map(function(a){
    return a[key]
  })
}

function extractFullName(arr) {
  return arr.map(function(a){
    return a['first'] + ' ' + a['last']
  })
}

function filterByValue(arr, key){
  return arr.filter(function(a){
    return a[key]
  })
}

function findInObj(arr, key, val){
  let obj 
  arr.forEach(function(a){
    if (a[key] === val && !obj) obj = a
  })
  return obj
}

function removeVowels(s){
  return Array.from(s.toLowerCase()).filter(function(a) {
    return !('aeiou'.includes(a))
  }).join('')
}

function doubleOddNumbers(arr){
  return arr.filter(function(a){
    return (a % 2)
  }).map(function(a){
    return a * 2
  })
}