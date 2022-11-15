import { wordConcat } from "#utils/stringconcat";
import { getWord } from "#helpers/wordHelpers";

const word1 = getWord("HELLO");
const word2 = getWord("WORLD");
const total = wordConcat(word1, word2);

console.log(total);
