import jsSha from "jssha";

const SALT = process.env.SALT;

export const generateHash = (string) => {
  const shaObj = new jsSha("SHA-512", "TEXT", { encoding: "UTF8" });
  const unhashedCookieString = `${string}-${SALT}`;
  shaObj.update(unhashedCookieString);
  const hashedCookieString = shaObj.getHash("HEX");
  return hashedCookieString;
};

// compare 2 hashes, return true/false
export const verifyHash = (input, hashExpected) => {
  const g = generateHash(input);
  return g === hashExpected;
};
