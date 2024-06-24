# Nikolay Shinkarenko

## Contact information

- **E-mail**: nschink89@gmail.com
- **GitHub**: [NickWebD] https://github.com/NickWebD
- **Phone**: +7(911)218-15-31
- **Telegram**: @Isenhor
- **Discord**: Isenhor (@NickWebD)

## About Me

I became interested in web development when I stumbled upon a course on the basics of HTML. Upon completing it, I was able to build a simple website, sparking a desire to delve deeper into this field. Gradually, I started working on more complex projects, learning something new each time and mastering new technologies and tools.

My goal is to become a highly skilled professional in web development, capable not only of creating functional and aesthetically appealing interfaces but also of applying cutting-edge technologies to solve complex problems.

## Skills

- HTML&CSS
- SASS/SCSS
- Gulp/Pug
- JS
- Git
- Figma, Photoshop

## Code example

A browser version of something between a sketchpad and an Etch-A-Sketch

### HTML

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Etch-a-Sketch</title>
  </head>
  <body>
    <div class="container container--flex">
      <div class="content">
        <h1>Etch-a-sketch</h1>
        <p>Hold LMB to draw</p>
        <div class="grid-field"></div>
        <div class="controls">
          <button class="color-btn" id="black">Black</button>
          <button class="color-btn" id="grey">Grey</button>
          <button class="color-btn" id="random">Random</button>
          <button class="color-btn" id="eraser">Eraser</button>
        </div>
        <div class="size-wrapper">
          <input id="size" type="number" placeholder="Size of Board" value="16" />
          <button id="set-size">Set Size</button>
        </div>
        <div class="error"></div>
      </div>
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

### CSS

```
* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  background: linear-gradient(rgba(96, 79, 252, 0.082), white);
}

.container {
  width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}

.container--flex {
  display: flex;
  justify-content: center;
}

.grid-field {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  background-color: #fff;
  width: 600px;
  height: 600px;
  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 0.3em rgba(0, 0, 0, 0.3);
}

.grid-field__item {
  border: 1px solid rgba(255, 0, 255, 0.13);
}

.controls {
  margin-bottom: 20px;
  display: flex;
  gap: 30px;
  justify-content: center;
}
.color-btn {
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.2em;

  font-weight: 600;
  text-align: center;
}
.size-wrapper {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.error {
  text-align: center;
}
```

### JS

```
//default grid size on page loaded
document.addEventListener("DOMContentLoaded", () => {
  createField();
});

const gridField = document.querySelector(".grid-field");
let gridSize = document.querySelector("#size").value;
const setSizeBtn = document.querySelector("#set-size");
let isDrawing = false;
const colorBtn = document.querySelectorAll(".color-btn");
let color = "black";
const errorText = document.querySelector(".error");

//function to clear field
function clearField() {
  while (gridField.firstChild) {
    gridField.removeChild(gridField.firstChild);
  }
}

//fuction to create field
function createField(size = 16) {
  clearField();

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.addEventListener("mouseover", () => {
      if (isDrawing) {
        let currentColor = color;
        if (color === "random") {
          currentColor = generateRandomColor();
        }
        square.style.backgroundColor = currentColor;
      }
    });

    square.addEventListener("mousedown", () => {
      isDrawing = true;
    });

    square.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    square.classList.add("grid-field__item");
    square.style.flex = `1 0 calc(100% / ${gridSize})`;
    square.style.aspectRatio = "1/1";
    gridField.appendChild(square);
  }
}

//define grid size using input
setSizeBtn.addEventListener("click", () => {
  gridSize = document.querySelector("#size").value;

  if (gridSize < 2 || gridSize > 100) {
    errorText.textContent = "You need to choose number between 2 and 100.";
  } else {
    errorText.textContent = "";
    createField(gridSize);
  }
});

//function to generate random color
function generateRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

//listener for color choosing buttons
colorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "eraser") {
      color = "white";
    } else {
      color = e.target.id;
    }
  });
});
```
