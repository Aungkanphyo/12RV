fetch("Todos/hlahla.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => console.log(res));

const doSomething = () => {
  return fetch("Todos/hlahla.json");
};
const data = doSomething();
console.log(data);
