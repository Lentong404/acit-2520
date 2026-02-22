import type { TTip } from "./types";
import { randomUUID } from "crypto";

// TODO: replace any with the correct type here!
let tips: TTip[] = [
  {
    id: randomUUID(),
    text: "Prefer const over let when you can.",
    likes: 2,
    createdAt: Date.now() - 10000,
  },
  {
    id: randomUUID(),
    text: "Name things clearly, future you will thank you.",
    likes: 5,
    createdAt: Date.now() - 5000,
  },
];

export function getTips() {
  return tips;
}

// TODO: replace any with the correct type here!
export function addTip(text: string) {
  // TODO: 🚀 Create a tip of type of TTIP and push into tips.
  //          - id: generate a random id using node crypto
  //          - text: use incoming text
  //          - likes: by default should be 0
  //          - createdAt: just use Date.now()
  //       return the created tip when you're done.
  const newTip = {
    id: randomUUID(),
    text: text,
    likes: 0,
    createdAt: Date.now(),
  };
  tips.push(newTip);
  return newTip;
}

// TODO: replace any with the correct type here!
export function like(id: string) {
  // TODO: 🚀 Find the tip from tips, based on id.
  //          - increment the number of likes
  //          - return the found and liked tip
  const currentTip = tips.find((t) => t.id === id);
  if (currentTip) {
    currentTip.likes += 1;
    return currentTip;
  }
}

// TODO: replace any with the correct type here!
export function dislike(id: string) {
  // TODO: 🚀 Find the tip from tips, based on id.
  //          - decrement the number of likes if greater than 0
  //          - return the found and disliked tip
  const currentTip = tips.find((t) => t.id === id);
  if (currentTip) {
    if (currentTip.likes > 0) {
      currentTip.likes -= 1;
      return currentTip;
    }
  }
}

export function remove(id: string) {
  // TODO: 🚀 - remove the tip from tips by id by using .filter.
  //          - filter should give you back an array of all tips
  //            MINUS the one you are trying to remove. set tips
  //            equal to this newly filtered list.
  //          - return true if removed, false if no change.
  if (tips.find((t) => t.id === id)) {
    const newTips = tips.filter((t) => t.id !== id);
    tips = newTips;
    return true;
  } else return false;
}
