const getSomethings = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        reject("Got some error");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};
getSomethings("Todos/hlahla.json")
  .then((res) => {
    console.log(res);
    return getSomethings("Todos/mgmg.json");
  })
  .then((res) => {
    console.log(res);
    return getSomethings("todo.json");
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
