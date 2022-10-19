function findUserByUsername(arr, userName){
    return arr.find(function(a){
        return a.username === userName
    })
  }

  function removeUser(users, userName) {
    let found_user
    let i = users.findIndex(function(user){
        return user.username === userName
    })
    if (i !== -1)
    {
        found_user = users.splice(i, 1)
        return found_user
    }
  }

  // ------------

  function extractValue(arr, key){
    return arr.reduce(function(accum, next, []){
        return [].push(accum[key]).push(next)
    })
  }

  const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

  console.log(extractValue(arr, 'name'))