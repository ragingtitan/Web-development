
/*const uppercase=document.getElementById("uppercase");
const lowercase=document.getElementById("lowercase");
const sentence=document.getElementById("sentence");
const linecount=document.getElementById("linecount");
const find=document.getElementById("find");
const findreplace=document.getElementById("findreplace");
*/
//count words 

/*function tocapitalize(data) {
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
  return "The total line count is "+lines.length;
}

function swap(data, init, final) {
  const regex = new RegExp(init, 'g');
  const word = data.replace(regex, final);
  return word;
}
*/
document.addEventListener('DOMContentLoaded', function () {
  let wordcount = document.getElementById('wordcount');
  let prompt = document.getElementById('pmt');
  let output = document.getElementById('out');

  wordcount.addEventListener('click', () => {
    let data = prompt.value;
    if (data !== "") {
      let count = 0;
      let arr = data.split(" ");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
          count++;
        }
      }
      output.value = "The total word count is " + count;
      console.log("The total word count is " + count);
    }
  });
});
