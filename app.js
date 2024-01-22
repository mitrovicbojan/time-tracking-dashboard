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

  const btnDay = document.querySelector(".btnDay");
  const btnWeek = document.querySelector(".btnWeek");
  const btnMonth = document.querySelector(".btnMonth");
  const titleDiv = document.querySelectorAll(".subtitle");
  const currDiv = document.querySelectorAll(".curr");
  const prevDiv = document.querySelectorAll(".previous");
  const activeCl = document.querySelector("article").querySelectorAll("a");

  //add active class to a tags
  activeCl.forEach((item) => {
    item.addEventListener("click", function () {
      activeCl.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
  // titleDiv.forEach((item, i) => (item.textContent = titleArr[i]));
  const mapa = data.map((el) => el.title);
  titleDiv.forEach((item, i) => {
    item.textContent = mapa[i];
  });

  activeCl.forEach((el) => {
    el.addEventListener("click", function (e) {
      const timePeriod = e.target.textContent;

      const timesCurr = data.map((time) => {
        return time.timeframes[timePeriod].current;
      });
      const timesPrev = data.map((time) => {
        return time.timeframes[timePeriod].previous;
      });

      currDiv.forEach((item, i) => (item.textContent = `${timesCurr[i]}hrs`));
      prevDiv.forEach(
        (item, i) => (item.textContent = `PREVIOUS - ${timesPrev[i]}hrs`)
      );
    });
  });

  // btnDay.addEventListener("click", function () {
  //   const curArr = timeFrames.map((current) => current.daily.current);
  //   const prevArr = timeFrames.map((current) => current.daily.previous);

  //   currDiv.forEach((item, i) => (item.textContent = `${curArr[i]}hrs`));
  //   prevDiv.forEach(
  //     (item, i) => (item.textContent = `PREVIOUS - ${prevArr[i]}hrs`)
  //   );
  // });
  // btnWeek.addEventListener("click", function () {
  //   const curArr = timeFrames.map((current) => current.weekly.current);
  //   const prevArr = timeFrames.map((current) => current.weekly.previous);

  //   currDiv.forEach((item, i) => (item.textContent = `${curArr[i]}hrs`));
  //   prevDiv.forEach(
  //     (item, i) => (item.textContent = `PREVIOUS - ${prevArr[i]}hrs`)
  //   );
  // });
  // btnMonth.addEventListener("click", function (e) {
  //   console.log(e.target.textContent);
  //   // const clickedBtn = e.target.textContent;
  //   // console.log(clickedBtn.toLowerCase());

  //   const curArr = timeFrames.map((current) => current.monthly.current);
  //   const prevArr = timeFrames.map((current) => current.monthly.previous);

  //   currDiv.forEach((item, i) => (item.textContent = `${curArr[i]}hrs`));
  //   prevDiv.forEach(
  //     (item, i) => (item.textContent = `PREVIOUS - ${prevArr[i]}hrs`)
  //   );
  // });
}
timeTrackingData();
