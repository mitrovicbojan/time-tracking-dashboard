// import data from "/data.json" assert { type: "json" };
// let subtitle = document.querySelector(".box");
// let setData = [];

// for (let [i, time] of data.entries(data)) {
//   setData.push(time);
// }
// const titlesArr = setData.map((title) => title.title);

async function timeTrackingData() {
  const response = await fetch("/data.json");
  const data = await response.json();
  console.log(data);
}
timeTrackingData();
