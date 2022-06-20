class GameController {
  constructor(db) {
    this.db = db;
  }

  postNewGame = async (request, response) => {
    try {
      // body to contain user_id
      const payload = request.body;
      console.log(payload);
      const userId = payload.user_id;
      const body = {
        userId: userId,
        numberOfQuestions: 1,
        currentQuestion: 1,
        score: 0,
        state: "IN_PROGRESS",
        history: JSON.stringify({
          history: [],
        }), // keep track of current question (int), current score (int)
      };

      // write to db
      const result = await this.db.Game.create(body);
      console.log("postNewGame result: ", result);
      console.log("postNewGame result id: ", result.id);
      response.send(`Successfully created new game with id: ${result.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  putUpdateGame = async (request, response) => {
    try {
      const updates = request.body; // update body to contain current_question, score (for current question),
      console.log(updates);
      const gameId = request.params.id;
      let updatedState;
      // 1. get current game
      const game = await this.db.Game.findOne({ where: { id: gameId } });
      console.log("game: ", game);
      console.log("gameHistory: ", game.history);

      // 2. compare current game state with updates
      // 2.1. Do no update game if game state is ended fail with not allowed
      if (game.state === "ENDED") {
        response
          .status(400)
          .send(
            `game with id:${gameId} has already ended, unable to perform update`
          );
      }
      // 2.2. update current game state
      if (updates.current_question !== game.currentQuestion) {
        updatedState =
          updates.current_question <= game.numberOfQuestions
            ? "IN_PROGRESS"
            : "ENDED";
      }

      // 2.3 update game history
      let currentHistory = JSON.parse(game.history);
      console.log("currentHistory: ", currentHistory);
      currentHistory = currentHistory["history"];
      const historyCopy = [...currentHistory];
      console.log("currentHistory.history: ", historyCopy);
      const newEntry = {
        question: game.currentQuestion,
        score: updates.score,
      };
      historyCopy.push(newEntry);
      console.log("newHistory: ", historyCopy);

      const updateBody = {
        currentQuestion: updates.current_question,
        state: updatedState,
        score: parseInt(game.score) + parseInt(updates.score),
        history: JSON.stringify({ history: historyCopy }),
      };

      // 3. update game
      game.set(updateBody);
      const result = await game.save();

      console.log("update game result: ", result);
      console.log("update game result id: ", result.id);

      response.send(result);
    } catch (err) {
      console.error(err);
    }
  };
}

export default GameController;
