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
  const titleDiv = document.querySelectorAll(".subtitle");
  const currDiv = document.querySelectorAll(".curr");
  const prevDiv = document.querySelectorAll(".previous");
  titleDiv.forEach((item, i) => (item.textContent = titleArr[i]));

  btnDay.addEventListener("click", function () {
    const curArr = timeFrames.map((current) => current.daily.current);
    const prevArr = timeFrames.map((current) => current.daily.previous);

    currDiv.forEach((item, i) => (item.textContent = `${curArr[i]}hrs`));
    prevDiv.forEach(
      (item, i) => (item.textContent = `PREVIOUS - ${prevArr[i]}hrs`)
    );
  });
}
timeTrackingData();
