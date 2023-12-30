import data from "/data.json" assert { type: "json" };
let subtitle = document.querySelector(".subtitle");
let setData = [];

for (let [i, time] of data.entries(data)) {
  setData.push(time);
}
let neArr = [];
setData.forEach((el) => {
  neArr.push(el.title);
  subtitle.textContent = `${el.title}`;
});
