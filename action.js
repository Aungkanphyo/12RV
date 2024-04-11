let output = document.getElementById("output");
let hla = document.getElementById("hla");
let mg = document.getElementById("mg");
const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState == 4) {
      callback("Something was wrong");
    }
  });
  request.open("GET", resource);
  request.send();
};
// getTodos("Todos/hlahla.json", (error, data) => {
//   let text = data.map((todo) => {
//     return `<span>${todo.title}</span><br>`;
//   });
//   hla.innerHTML = text;
//   getTodos("Todos/mgmg.json", (error, data) => {
//     let text = data.map((todo) => {
//       return `<span>${todo.title}</span><br>`;
//     });
//     mg.innerHTML = text;
//     getTodos("todo.json", (error, data) => {
//       let html = data.map((todos) => {
//         return `<span>${todos.content}</span><br>`;
//       });
//       output.innerHTML = html;
//     });
//   });
// });

const getSomethings = () => {
  return new Promise((resolve, reject) => {
    resolve("resolve is working.");
    // reject("reject is working.");
  });
};
// getSomethings().then((res) =>
//   console.log(res).catch((error) => console.log(error))
// );
console.log(getSomethings());
