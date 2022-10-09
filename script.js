document.addEventListener("DOMContentLoaded", function () {
  let query = document.getElementById("search");
  let searchBtn = document.getElementById("search-btn");

  const form = document
    .getElementById("form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let url = "https://www.google.com/search?q=" + query.value;
      window.open(url, "_self");
    });

  searchBtn.addEventListener("click", function () {
    let url = "https://www.google.com/search?q=" + query.value;
    window.open(url, "_self");
  });

  // time

  const time = getTime();
  document.getElementById("time").textContent = time;
  setInterval(() => {
    const time = getTime();
    document.getElementById("time").textContent = time;
  }, 1000);

  function getTime() {
    const today = new Date();
    let min = today.getMinutes();
    let hr = today.getHours();
    if (today.getMinutes() < 10) {
      min = "0" + today.getMinutes();
    }
    if (today.getHours() <= 9) {
      hr = "0" + today.getHours();
    }
    const time = hr + ":" + min;

    return time;
  }
});
