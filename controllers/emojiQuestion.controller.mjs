class EmojiQuestionController {
  constructor(db) {
    this.db = db;
  }

  getEmojiQuestion = async (request, response) => {
    try {
      const questionId = request.params.id;
      const result = await this.db.EmojiQuestion.findOne({
        where: { id: questionId },
      });
      console.log("getEmojiQuestion result: ", result.toJSON());

      response.send(result);
    } catch (err) {
      console.error(err);
    }
  };
}

export default EmojiQuestionController;
