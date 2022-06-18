export default function initEmojiQuestionModel(sequelize, DataTypes) {
  return sequelize.define(
    "emoji_question",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      question: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      answer: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      options: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
}
