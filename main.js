/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "img/2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/Game/Goblin.js

class Goblin {
  constructor() {
    this.element = document.createElement("img");
    this.element.classList.add("goblin");
    this.element.src = goblin_namespaceObject;
  }
}
;// CONCATENATED MODULE: ./src/js/Game/GameField.js

class GameField {
  constructor() {
    this.field = document.querySelector(".game-field");
    this.size = 4;
    this.arrCell = [];
    this.goblin = new Goblin();
    this.prevPosition = null;
  }
  createCell() {
    const cell = document.createElement("li");
    cell.classList.add("game-field_cell");
    return cell;
  }
  renderingField() {
    for (let i = 0; i < Math.pow(this.size, 2); i++) {
      const li = this.createCell();
      this.arrCell.push(li);
      this.field.append(li);
    }
  }
  generateIndex() {
    let index = -1;
    const max = Math.pow(this.size, 2);
    do {
      index = Math.floor(Math.random() * max);
    } while (index === this.prevPosition);
    return index;
  }
  removeGoblin() {
    if (this.prevPosition) {
      const goblin = this.arrCell[this.prevPosition].querySelector("img");
      goblin.remove();
    }
  }
  addGoblin() {
    const index = this.generateIndex();
    this.arrCell[index].append(this.goblin.element);
    this.prevPosition = index;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

const gameField = new GameField();
gameField.renderingField();
gameField.addGoblin();
setInterval(() => {
  gameField.removeGoblin();
  gameField.addGoblin();
}, 2000);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;