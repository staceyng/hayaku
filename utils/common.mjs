export const createNewUserID = () => {
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
