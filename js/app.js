//create a class for tamagotchi
class Tamagotchi {
    constructor(name) {
        this.name = name
        this.age = 0
        this.hunger = 0
        this.sleep = 0
        this.boredom = 0
    }
    eat() {
        if (this.hunger != 0) {
            this.hunger -= 1
        }
        updateStatCounter()
    }
    sleeps() {
        if (this.sleep != 0) {
            this.sleep -= 1
        }
        updateStatCounter()
    }
    play() {
        if (this.boredom != 0) {
            this.boredom -= 1
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
    document.getElementById('sleepTracker').innerHTML = myTamagotchi.sleep
    document.getElementById('boredomTracker').innerHTML = myTamagotchi.boredom
}
const increaseStats = () => {
    myTamagotchi.hunger += 1
    myTamagotchi.sleep += 1
    myTamagotchi.boredom += 1
}
const interval = () => {
    increaseStats()
    updateStatCounter()
}

const interactionButtons = document.querySelector('.interaction-buttons')
interactionButtons.addEventListener('click', function(event) {
    event.preventDefault()
    if (event.target.name === 'eat') {
        myTamagotchi.eat()
    }
    else if (event.target.name === 'sleep') {
        myTamagotchi.sleeps()
    }
    else {
        myTamagotchi.play()
    }
})

//instantiate tamagatchi
const myTamagotchi = new Tamagotchi('Kevin')
console.log(myTamagotchi)



setInterval(increaseStats, 5000, myTamagotchi)
//function for increasing tamgachi age at an interval