// Code your solutions in this file
const people = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise"

function writeCards(people, event) {
    const copyofPeople = [...people]
    copyofPeople.splice(0,3,"Thank you, Guadalupe, for the wonderful surprise gift!", "Thank you, Ollie, for the wonderful surprise gift!", "Thank you, Aki, for the wonderful surprise gift!")
    return copyofPeople
}

writeCards

const b = 4

function countDown(b) {
    while (b >= 0) {
        console.log(b--);
    }
    return b
}

countDown(b)