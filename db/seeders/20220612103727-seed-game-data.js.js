const jsSHA = require("jssha");
const salt = process.env.SALT;

const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
const pw = `${salt}-password`;
shaObj.update(pw);
const hash = shaObj.getHash("HEX");

const questions = [
  {
    question: "🐝➖",
    answer: "Bee Line",
    options: ["Bee Dash", "Bee Line", "Bug Queue", "Bug Line"],
  },
  {
    question: "🚿🎓",
    answer: "Shower Cap",
    options: ["Swimming Cap", "Graduation Shower", "Water Cap", "Shower Cap"],
  },
  {
    question: "🔵🌛",
    answer: "Blue Moon",
    options: ["Blue Cresent", "Mixed Feelings", "Blue Moon", "Blue Half"],
  },
  {
    question: "⌚✈️",
    answer: "Time Flies",
    options: [
      "Time Flies",
      "Flying out of time",
      "Missed Flight",
      "Plane Watching",
    ],
  },
  {
    question: "🎡💰💰",
    answer: "Wheel of Fortune",
    options: [
      "Money Wheel",
      "Bag of Wheels",
      "Ferris Wheel Money",
      "Wheel of Fortune",
    ],
  },
  {
    question: "🍳☕🍞♣️",
    answer: "Breakfast Club",
    options: [
      "Breakfast Club",
      "Brunch Cafe",
      "Coffee Club",
      "Cafeteria Cards",
    ],
  },
  {
    question: "🌴📖",
    answer: "Jungle Book",
    options: [
      "Palm Tree Paper",
      "Jungle Book",
      "Deforestation",
      "Vacation Reading",
    ],
  },
  {
    question: "👊💥🐼",
    answer: "Kung Fu Panda",
    options: ["One Punch Panda", "Panda Eye", "Kung Fu Panda", "Kill Panda"],
  },
  {
    question: "⭐🔫💣",
    answer: "Star Wars",
    options: ["Stardom", "Shooting Star", "Top Gun", "Star Wars"],
  },
  {
    question: "🎨⚽",
    answer: "Paint Ball",
    options: ["Paint Ball", "Color Ball", "Color Soccer", "Ball Painting"],
  },
  {
    question: "✈️🇺🇸1️⃣",
    answer: "Air Force One",
    options: [
      "Flying to the USA",
      "Air Force One",
      "Made in the USA",
      "USA One",
    ],
  },
  {
    question: "🌎🐵🐵🐵",
    answer: "Planet of the Apes",
    options: [
      "3 Monkeys",
      "George of the Jungle",
      "Planet of the Apes",
      "Ace Ventura",
    ],
  },
  {
    question: "🎩🔎🔫",
    answer: "Sherlock Holmes",
    options: ["Peaky Blinders", "Kingsman", "Mystery Inc", "Sherlock Holmes"],
  },
  {
    question: "🔴🆚🔵💊",
    answer: "Matrix",
    options: ["Matrix", "Overdose", "Flatline", "Doctor Strange"],
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("emoji_questions", questions, {});
    await queryInterface.bulkInsert("users", [
      {
        email: "cheatcodes@gmail.com",
        id: "QRN5QT",
        name: "CheatCodes",
        password: "password",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("emoji_questions", null, {});
  },
};
