const jsSHA = require("jssha");
const salt = process.env.SALT;

const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
const pw = `${salt}-password`;
shaObj.update(pw);
const hash = shaObj.getHash("HEX");

const questions = [
  {
    question: "πβ",
    answer: "Bee Line",
    options: ["Bee Dash", "Bee Line", "Bug Queue", "Bug Line"],
  },
  {
    question: "πΏπ",
    answer: "Shower Cap",
    options: ["Swimming Cap", "Graduation Shower", "Water Cap", "Shower Cap"],
  },
  {
    question: "π΅π",
    answer: "Blue Moon",
    options: ["Blue Cresent", "Mixed Feelings", "Blue Moon", "Blue Half"],
  },
  {
    question: "ββοΈ",
    answer: "Time Flies",
    options: [
      "Time Flies",
      "Flying out of time",
      "Missed Flight",
      "Plane Watching",
    ],
  },
  {
    question: "π‘π°π°",
    answer: "Wheel of Fortune",
    options: [
      "Money Wheel",
      "Bag of Wheels",
      "Ferris Wheel Money",
      "Wheel of Fortune",
    ],
  },
  {
    question: "π³βπβ£οΈ",
    answer: "Breakfast Club",
    options: [
      "Breakfast Club",
      "Brunch Cafe",
      "Coffee Club",
      "Cafeteria Cards",
    ],
  },
  {
    question: "π΄π",
    answer: "Jungle Book",
    options: [
      "Palm Tree Paper",
      "Jungle Book",
      "Deforestation",
      "Vacation Reading",
    ],
  },
  {
    question: "ππ₯πΌ",
    answer: "Kung Fu Panda",
    options: ["One Punch Panda", "Panda Eye", "Kung Fu Panda", "Kill Panda"],
  },
  {
    question: "β­π«π£",
    answer: "Star Wars",
    options: ["Stardom", "Shooting Star", "Top Gun", "Star Wars"],
  },
  {
    question: "π¨β½",
    answer: "Paint Ball",
    options: ["Paint Ball", "Color Ball", "Color Soccer", "Ball Painting"],
  },
  {
    question: "βοΈπΊπΈ1οΈβ£",
    answer: "Air Force One",
    options: [
      "Flying to the USA",
      "Air Force One",
      "Made in the USA",
      "USA One",
    ],
  },
  {
    question: "ππ΅π΅π΅",
    answer: "Planet of the Apes",
    options: [
      "3 Monkeys",
      "George of the Jungle",
      "Planet of the Apes",
      "Ace Ventura",
    ],
  },
  {
    question: "π©ππ«",
    answer: "Sherlock Holmes",
    options: ["Peaky Blinders", "Kingsman", "Mystery Inc", "Sherlock Holmes"],
  },
  {
    question: "π΄ππ΅π",
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
