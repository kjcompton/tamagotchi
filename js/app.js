//create a class for tamagotchi
class Tamagotchi {
    constructor(name) {
        this.name = name
        this.age = 0
        this.hunger = 0
        this.exahstion = 0
        this.boredom = 0
    }
    eat() {
        if (this.hunger != 0) {
            this.hunger -= 1
            clearInterval(hungerInterval)
            hungerInterval= setInterval(increaseHunger, 5000, myTamagotchi)
        }
        updateStatCounter()
    }
    sleep() {
        if (this.exahstion != 0) {
            this.exahstion -= 1
            clearInterval(exahstionInterval)
            exahstionInterval= setInterval(increaseExahstion, 5000, myTamagotchi)
        }
        updateStatCounter()
    }
    play() {
        if (this.boredom != 0) {
            this.boredom -= 1
            clearInterval(boredomInterval)
            boredomInterval = setInterval(increaseBoredom, 5000, myTamagotchi)
        }
        updateStatCounter()
    }
    age() {
        this.age += 1
    }
    morph() {
        
    }
}

const updateStatCounter = () => {
    document.getElementById('hungerTracker').innerHTML = myTamagotchi.hunger
    document.getElementById('exahstionTracker').innerHTML = myTamagotchi.exahstion
    document.getElementById('boredomTracker').innerHTML = myTamagotchi.boredom
}
const increaseHunger = () => {
    myTamagotchi.hunger += 1
    updateStatCounter()
}
const increaseExahstion = () => {
    myTamagotchi.exahstion += 1
    updateStatCounter()
}
const increaseBoredom = () => {
    myTamagotchi.boredom += 1
    updateStatCounter()
}

const interactionButtons = document.querySelector('.interaction-buttons')
interactionButtons.addEventListener('click', function(event) {
    event.preventDefault()
    if (event.target.name === 'eat') {
        myTamagotchi.eat()
    }
    else if (event.target.name === 'sleep') {
        myTamagotchi.sleep()
    }
    else {
        myTamagotchi.play()
    }
})

//instantiate tamagatchi
const myTamagotchi = new Tamagotchi('Kevin')
console.log(myTamagotchi)


let hungerInterval = setInterval(increaseHunger, 5000, myTamagotchi)
let exahstionInterval = setInterval(increaseExahstion, 5000, myTamagotchi)
let boredomInterval = setInterval(increaseBoredom, 5000, myTamagotchi)

//function for increasing tamgachi age at an interval