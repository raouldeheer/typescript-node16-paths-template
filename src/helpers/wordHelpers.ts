import words from "#data/words.json";

export function getWord(key: keyof typeof words) {
    return words[key];
}
