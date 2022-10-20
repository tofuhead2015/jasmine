function createInstructor(fname, lname){
    return {
        fname,
        lname
    }
}

let favoriteNumber = 42
let instructor = {firstName: "Colt"}
instructor[favoriteNumber] = 'That is my favorite"'

let instructor2 = {
    firstName: "Colt",
    sayHi () {return 'Hi!'},
    sayBye () {return `${this.firstName} says bye!`}
}

function createAnimal(specie, action, sound){
    return {
        species,
        [action](){console.log(sound)}}
}