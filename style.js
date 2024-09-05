const display = document.querySelector('#display')
//console.log(display)
const buttons = document.querySelectorAll('button')
//console.log(buttons)

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id === 'clear'){
            display.innerText = '';
        }else if(item.id === 'backspace'){
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length - 1)
        }else if(item.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText)
        }else if(item.innerText == '' && item.id == 'equal'){
            display.innerText = 'Empty!'
            setTimeout(()=>(display.innerText = ''),2000);
        }else{
            display.innerText += item.id
        }
    }
})

const themetoggler= document.querySelector('.theme-toggler')
const calculator  =document.querySelector('.calculator')
const togglericon = document.querySelector('.toggler-icon')
let isDark = true
themetoggler.onclick = ()=>{
    calculator.classList.toggle('dark');
    togglericon.classList.toggle('active');
    isDark = !isDark
}