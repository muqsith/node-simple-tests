let str = "apples;bananas;oranges,grapes,pears watermelon muskmelon";

function split(text, splitters) {
  let _splitted = splitters.reduce((accumulator, splitter) => {
    return accumulator.split(splitter).join(" ");
  }, text);
  return _splitted.split(" ");
}

console.log(split(str, [",", ";", " "]));
