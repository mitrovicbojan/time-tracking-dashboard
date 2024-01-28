async function timeTrackingData() {
  const response = await fetch("/data.json");
  const data = await response.json();

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
        (item, i) => (item.textContent = `Previous - ${timesPrev[i]}hrs`)
      );
    });
  });
}
timeTrackingData();
