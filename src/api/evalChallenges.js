import challengesData from "./db/challenges.json";
import usersData from "./db/users.json";

export function getChallenges() {
  return challengesData;
}

export function getNumberOfChallenges() {
  return challengesData.length;
}

export function getNumberOfChallengesByLevel(level) {
  if (level !== "Easy" && level !== "Moderate" && level !== "Hard") {
    throw new Error("Invalid Level");
  }
  return challengesData.reduce((count, challenge) => {
    if (challenge.level === level) {
      count += 1;
    }
    return count;
  }, 0);
}

export function getCompletedChallengesByLevel(user, level) {
  if (level !== "Easy" && level !== "Moderate" && level !== "Hard") {
    throw new Error("Invalid Level");
  }
  return challengesData.reduce((count, challenge) => {
    if (challenge.level === level && user.completed.includes(challenge.id)) {
      count += 1;
    }
    return count;
  }, 0);
}

export function getUsers() {
  return usersData;
}
