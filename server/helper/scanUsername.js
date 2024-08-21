require("dotenv").config();

async function scanUsername(users, username) {
  const nameExists = await users.findOne({ username: username });

  if (nameExists) {
    return new Promise((resolve) => resolve({ result: "username exists" }));
  }

  const forbiddenWords = process.env.FORBIDDEN_WORDS.split(",");

  for (let i = 0; i < forbiddenWords.length; i++) {
    if (username.includes(forbiddenWords[i])) {
      return new Promise((resolve) =>
        resolve({ result: "username forbidden" })
      );
    }
  }

  return new Promise((resolve) => resolve({ result: "ok" }));
}

module.exports = scanUsername;
