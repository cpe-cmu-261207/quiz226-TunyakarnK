const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
let check = false;
const btn_search = document.getElementById('search')
const text = document.querySelector('#text')
const btn_reset = document.querySelector('#reset')


btn_toggle.onclick = () => {
  if (check == false) {
    author.innerHTML = 630610740+parseInt(length.value); 
    btn_toggle.innerHTML = 'Show Author' 
    check = true; 
} else if (check == true) {
    author.innerHTML = '630610740 TUNYAKARN KITCHON'
    btn_toggle.innerHTML = 'Show Calculation'
    check = false;
}
}

function coloredText() {
  const space = text.innerText.split(" ");
  let textOutput = "";
  let coloredWord = "";
    for (let i = 0; i < space.length; i++) {
        let word = space[i];
        if (word.length > length.value) {
          coloredWord = "<span style='color:" + color.value + "'>" + word + "</span>"
        } else {
          coloredWord = word;
        }
        textOutput = textOutput + " " + coloredWord + " ";
    }
    return textOutput
}

function reset() {
  const space = text.innerText.split(" ");
  let textOutput = "";
  let coloredWord = "";
    for (let i = 0; i < space.length; i++) {
        let word = space[i];
        if (word.length > length.value) {
          coloredWord = "<span style='color:black'>" + word + "</span>"
        } else {
          coloredWord = word;
        }
        textOutput = textOutput + " " + coloredWord + " ";
    }
    return textOutput
}


btn_search.onclick = () => {
    text.innerHTML = coloredText() 
}


btn_reset.onclick = () => {
    text.innerHTML = reset() 
}






