let newArr = [];

let data = fetch("./data.json")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((element) => {
      newArr.push(element);
    })
  );
console.log(newArr);
