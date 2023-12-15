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