import { task } from "nanostores"

export const $personData = task(async () => ({
    name: "Roman Lamsal",
    imageUrl: "/roman-makes-music/1710250811437.jpg",
    instruments: ["vocals", "bass"],
}))
