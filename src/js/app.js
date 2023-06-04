// TODO: write code here
import GameField from "./Game/GameField";

const gameField = new GameField();

gameField.renderingField();

gameField.addGoblin();
setInterval(() => {
  gameField.removeGoblin();
  gameField.addGoblin();
}, 2000);

