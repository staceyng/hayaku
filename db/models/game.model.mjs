export default function initGameModel(sequelize, DataTypes) {
  return sequelize.define(
    "game",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: "users",
          key: "id",
        },
      },
      currentQuestion: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      numberOfQuestions: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      score: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      history: {
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
