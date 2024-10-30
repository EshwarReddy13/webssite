function isScrolledToBottom() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const footer = document.getElementById('footer');

    return scrollTop + windowHeight >= documentHeight - 1; 
}

function showFooter() {
    const footer = document.getElementById('footer');
    if (isScrolledToBottom()) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

window.addEventListener('scroll', showFooter);

const button = document.getElementById("Change-color");

function blinkColors() {
  let colors = ["red", "yellow"];
  let textColors = ["yellow", "red"];
  let currentIndex = 0;

  function changeColor() {
    button.style.backgroundColor = colors[currentIndex];
    button.style.color = textColors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }

  setInterval(changeColor, 500); // Change color every 0.5 seconds (500 milliseconds)
}

function toggleStyleSheet(){
    var currStyle = document.getElementById("Main-style-sheet");

    var currStyleLink = currStyle.getAttribute("href");

    var stylesheets = ["style.css", "style-change.css"];

    var currentIndex = stylesheets.indexOf(currStyleLink);
    var newIndex = (currentIndex + 1) % stylesheets.length;
    var newStylesheet = stylesheets[newIndex];

    currStyle.setAttribute("href", newStylesheet);

    localStorage.setItem("currentStylesheet", newStylesheet);
}


window.onload = function(){
    var currentStylesheet = localStorage.getItem("currentStylesheet");

    var styleElement = document.getElementById("Main-style-sheet");

    if (currentStylesheet) {
        styleElement.setAttribute("href", currentStylesheet);
    }
    
}


blinkColors();
showFooter();