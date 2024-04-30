import { task } from "nanostores"

export const $personData = task(async () => ({
    name: "Roman Lamsal",
    imageUrl: "/roman-makes-music/itsme.jpeg",
    instruments: ["vocals", "bass"],
}))
