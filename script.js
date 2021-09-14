setInterval(setClock, 1000)


const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds()/60
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60
    const hourRatio = (minuteRatio + currentDate.getHours())/12

    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
   

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}

const number1 = document.getElementById('num1')
const number2 = document.getElementById('num2')
const number3 = document.getElementById('num3')
const number4 = document.getElementById('num4')
const number5 = document.getElementById('num5')
const number6 = document.getElementById('num6')
const number7 = document.getElementById('num7')
const number8 = document.getElementById('num8')
const number9 = document.getElementById('num9')
const number10 = document.getElementById('num10')
const number11= document.getElementById('num11')
const number12= document.getElementById('num12')


function changeNumber(){
    const currentDate = new Date()
    if(currentDate.getHours()>= 12 && currentDate.getHours()<= 23){
        number1.textContent = '13'
        number2.textContent = '14'
        number3.textContent = '15'
        number4.textContent = '16'
        number5.textContent = '17'
        number6.textContent = '18'
        number7.textContent = '19'
        number8.textContent = '20'
        number9.textContent = '21'
        number10.textContent = '22'
        number11.textContent = '23'
        number12.textContent = '0'
       


    
}


}

changeNumber()
setClock()

