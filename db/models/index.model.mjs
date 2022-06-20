import { Sequelize } from "sequelize";
import allConfig from "../../sequelize.config.cjs";

import initGameModel from "./game.model.mjs";
import initEmojiQuestionModel from "./emojiQuestion.model.mjs";
import initUserModel from "./user.model.mjs";

const env = process.env.NODE_ENV || "development";
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Game = initGameModel(sequelize, Sequelize.DataTypes);
db.EmojiQuestion = initEmojiQuestionModel(sequelize, Sequelize.DataTypes);

db.User.belongsTo(db.Game, { as: "user", foreignKey: "id" });
db.Game.hasMany(db.User, { foreignKey: "id" });

db.sequelize = sequelize;

export default db;
