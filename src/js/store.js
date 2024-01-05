import { writable } from 'svelte/store';

export const showHome = writable(true);
export const showAnnouncements = writable(false);
export const showLeaderboard = writable(false);
export const showQuiz = writable(false);


export const quizOver = writable(false);

export const guessedBool = writable(false);

export const stopTimer = writable(false);

export const name = writable("");

export const activities = writable(["Paper Collection", "Donation Drive", "Daily Quiz"]);



export const profiles = writable([{}]);


export function addProfile(name, point) {
    profiles.update(dictionary => {
      dictionary[name] = { points: point };
      return dictionary;
    });
  }

  export function addPoints(name) {
    console.log("here")
    // console.log("profiles is ", profiles)
    profiles.update(dictionary => {
      if (dictionary[name]) {
        dictionary[name].points += 100;
        console.log("ADDED POINTS")
      }
      else {
        console.log(name, " is name which is not found")
      }
      return dictionary;
    });
  }