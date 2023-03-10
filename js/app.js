//create a class for tamagotchi
class Tamagotchi {
    constructor(name, images) {
        this.name = name
        this.images = images
        this.age = 0
        this.hunger = 0
        this.exahstion = 0
        this.boredom = 0
    }
    eat() {
        if (this.hunger != 0) {
            this.hunger -= 1
            clearInterval(hungerInterval)
            hungerInterval = setInterval(increaseHunger, 3500, myTamagotchi)
        }
        updateStatCounter()
    }
    sleep() {
        if (this.exahstion != 0) {
            this.exahstion -= 1
            clearInterval(exahstionInterval)
            exahstionInterval = setInterval(increaseExahstion, 5000, myTamagotchi)
        }
        updateStatCounter()
    }
    play() {
        if (this.boredom != 0) {
            this.boredom -= 1
            clearInterval(boredomInterval)
            boredomInterval = setInterval(increaseBoredom, 2500, myTamagotchi)
        }
        updateStatCounter()
    }
    ageUp() {
        this.age += 1
    }
    morph() {
        if (this.age === 6) {
            document.getElementById("animation").style.height = '160px'
            document.getElementById("animation").style.width = '160px'
            document.getElementById("animation").style.backgroundImage = `url('${this.images[1]}')`
            clearInterval(animation)
            animate(160, 4)
        }
        else if (this.age === 12) {
            document.getElementById("animation").style.height = '320px'
            document.getElementById("animation").style.width = '320px'
            document.getElementById("animation").style.backgroundImage = `url('${this.images[2]}')`
            clearInterval(animation)
            animate(320, 8)
        }
        
    }
}

const updateStatCounter = () => {
    document.getElementById('hungerTracker').innerHTML = myTamagotchi.hunger
    document.getElementById('exahstionTracker').innerHTML = myTamagotchi.exahstion
    document.getElementById('boredomTracker').innerHTML = myTamagotchi.boredom
    document.getElementById('ageTracker').innerHTML = myTamagotchi.age
    console.log(myTamagotchi)
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
const increaseAge = () => {
    myTamagotchi.ageUp()
    if (myTamagotchi.age == 6 || myTamagotchi.age == 12) {
        myTamagotchi.morph()
    }
    updateStatCounter()
}
const setGameIntervals = () => {
    hungerInterval = setInterval(increaseHunger, 4000)
    exahstionInterval = setInterval(increaseExahstion, 6000)
    boredomInterval = setInterval(increaseBoredom, 2000)
    ageInterval = setInterval(increaseAge, 4000)
    statChecker = setInterval(checkIfLose, 100, myTamagotchi)
}
const startGame = () => {
    const monsterName = document.getElementById('monsterName').value
    const images = ['../assets/floating-monster/FloatingEyeIdleFront.png', 'assets/floating-monster/MalignantGazerIdleFront.png', 'assets/floating-monster/GlaringOverlordIdleFront.png']
    myTamagotchi = new Tamagotchi(monsterName, images)
    document.getElementById('monsterNameContainer').innerHTML = myTamagotchi.name
    document.getElementById('start-screen').style.display = 'none'
    document.getElementById('test-container').style.display = 'flex'
    setGameIntervals()
    changeDayNightCycle()
    animate(160, 4)
}

const endGame = () => {
    document.getElementById('test-container').style.display = 'none'
    document.getElementById('end-container').style.display = 'flex'
}


const checkIfLose = (myTamagotchi) => {
    if (myTamagotchi.hunger >= '10' || myTamagotchi.exahstion >= '10' || myTamagotchi.boredom >= '10') {
        endGame()
    }
}

const animate = (num1, num2) => {
    const frameWidth = num1;
    const frames = num2;
    const animationDiv = document.getElementById("animation");
    let frame = 0;
    animation = setInterval(function () {
        const frameOffset = (++frame % frames) * -frameWidth;
        console.log(frameOffset)
        animationDiv.style.backgroundPosition = frameOffset + "px " + "0px";
    }, 500);
}

const changeDayNightCycle = () => {
    const dayNightScreen = document.getElementById('test-container')
    let brightnessInterval = 0.00
    let testDayNight = true
    dayNightCycle = setInterval(function () {
        console.log(brightnessInterval)
        dayNightScreen.style.background = `radial-gradient(circle, rgba(0,0,0, ${brightnessInterval}) 0%, rgba(0,0,0,0.904359243697479) 90%)`;
        if (testDayNight === true) {
            brightnessInterval += .01
            if (brightnessInterval >= 0.90) {
                testDayNight = false
            }
        }
        else {
            brightnessInterval -= .01
            if (brightnessInterval <= 0.01) {
                testDayNight = true
            }
        }
    }, 100);
}

const interactionButtons = document.querySelector('.interaction-buttons')
interactionButtons.addEventListener('click', function (event) {
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

let myTamagotchi
let hungerInterval
let exahstionInterval
let boredomInterval
let ageInterval
let statChecker
let animation
let dayNightCycle

document.getElementById("start-button").addEventListener("click", startGame);