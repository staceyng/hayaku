class GameController {
  constructor(db) {
    this.db = db;
  }

  postNewGame = async (request, response) => {
    try {
      const payload = request.body;
      const playerName = payload.name;
      const body = {
        id: createNewGameID(),
        createdBy: playerName,
        numberOfPlayers: 2,
        numberOfQuestions: 3,
        currentQuestion: 1,
        state: "WAITING_TO_START",
        playerScores: JSON.stringify({ playerName: 0 }),
      };

      // write to db
      result = await this.db.create(body);
      console.log("postNewGame result: ", result);
      console.log("postNewGame result id: ", result.id);

      response.send(result);
    } catch (err) {
      console.error(err);
    }
  };

  putUpdateGame = async (request, response) => {
    try {
      const payload = request.body;
      const playerName = payload.name;
      const body = {
        id: this.createNewGameID(),
        createdBy: payload.name,
        numberOfPlayers: 1,
        numberOfQuestions: 3,
        currentQuestion: 1,
        state: "WAITING_TO_START",
        playerScores: JSON.stringify({ playerName: 0 }),
      };

      // write to db
      result = await this.db.create(body);
      console.log("postNewGame result: ", result);
      console.log("postNewGame result id: ", result.id);

      response.send(result);
    } catch (err) {
      console.error(err);
    }
  };
}

export default GameController;

createNewGameID = () => {
  let result = "";
  let allowedCharacters = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
  const characterLength = 5;
  for (let i = 0; i > characterLength; i += 1) {
    result += allowedCharacters.charAt(
      Math.floor(Math.random() * characterLength)
    );
  }
  return result;
};
