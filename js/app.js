//create a class for tamagotchi
class Tamagotchi {
    constructor (name) {
        this.name = name
        this.age = 0
        this.hunger = 0
        this.sleep = 0
        this.boredom = 0
    }
    eat () {
        this.eat -= 1
    }
    sleep () {
        this.sleep -= 1
    }
    play () {
        this.boredom -= 1
    }
    age () {
        this.age += 1
    }
    morph () {
        
    }
}
const increaseStats = (test) => {

    test.hunger += 1
    test.sleep += 1
    test.boredom += 1
    hungerTracker.innerHTML = test.hunger
    sleepTracker.innerHTML = test.sleep
    boredomTracker.innerHTML = test.boredom
}


//instantiate tamagatchi
const test = new Tamagotchi('Kevin')
//method function for naming pet
let hungerTracker = document.getElementById('hungerTracker')
let sleepTracker = document.getElementById('sleepTracker')
let boredomTracker = document.getElementById('boredomTracker')


setInterval(increaseStats, 5000, test)
//function for increasing tamgachi age at an interval