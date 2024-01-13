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

  const titleArr = [];
  const timeFrames = [];
  for (let i of data) {
    titleArr.push(i.title);
    timeFrames.push(i.timeframes);
  }
  console.log(timeFrames);

  const btnDay = document.querySelector(".btn");

  btnDay.addEventListener("click", function () {
    const titleDiv = document.querySelectorAll(".subtitle");
    console.log(titleDiv);
    console.log(titleArr.map((title) => title));

    titleDiv.forEach((item, i) => (item.textContent = titleArr[i]));
  });
}
timeTrackingData();
