export default function initGameModel(sequelize, DataTypes) {
  return sequelize.define(
    "game",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      createdBy: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      numberOfPlayers: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      numberOfQuestions: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      currentQuestion: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      playerScores: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
      },
    },
    {
      underscored: true,
    }
  );
}
