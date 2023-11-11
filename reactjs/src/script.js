const data = "Home is not Home it is heaven";
const init="home"
const final="not"
//count words 

function countWords(data) {
  let count = 0;
  let arr = data.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      count++;
    }
  }
  return count;
}

function tocapitalize(data) {
  let word = "";
  for (i = 0; i < data.length; i++) {
    ch = data.charAt(i).toUpperCase();
    word += ch;
  }
  return word;
}

function todecapitalize(data) {
  let word = "";
  for (i = 0; i < data.length; i++) {
    ch = data.charAt(i).toLowerCase();
    word += ch;
  }
  return word;
}

function tosentencecase(data) {
  let word = "";
  let str = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  return str;
}

function linecount(data) {
  let count = 0;
  const lines = data.split("\n");
  return lines.length;
}

function swap(data, init, final) {
  const regex = new RegExp(init, 'g');
  const word=data.replace(regex, final);
  return word ;
}

k=swap(data,init,final);
console.log(k);
