import type { TTip } from "./types";
import { randomUUID } from "crypto";

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

export function addTip(text: string) {
  const newTip = {
    id: randomUUID(),
    text: text,
    likes: 0,
    createdAt: Date.now(),
  };
  tips.push(newTip);
  return newTip;
}


export function like(id: string) {
  const currentTip = tips.find((t) => t.id === id);
  if (currentTip) {
    currentTip.likes += 1;
    return currentTip;
  }
}


export function dislike(id: string) {

  const currentTip = tips.find((t) => t.id === id);
  if (currentTip) {
    if (currentTip.likes > 0) {
      currentTip.likes -= 1;
      return currentTip;
    }
  }
}

export function remove(id: string) {
  if (tips.find((t) => t.id === id)) {
    const newTips = tips.filter((t) => t.id !== id);
    tips = newTips;
    return true;
  } else return false;
}
