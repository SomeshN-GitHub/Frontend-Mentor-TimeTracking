var data;

// const daily = document.getElementById('daily');
// const weekly = document.getElementById('weekly');
// const monthly = document.getElementById('monthly');

document.onload(dailyData());
async function ldJson() {
  let url = "data.json";
  data = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data1) => (data = data1));
  console.log(typeof data);
  console.log(data[0]["timeframes"]["daily"]["current"]);
  // console.log(work);
}


const work = document.getElementsByClassName("work");
const play = document.getElementsByClassName("play");
const study = document.getElementsByClassName("study");
const exercise = document.getElementsByClassName("exercise");
const social = document.getElementsByClassName("social");
const selfCare = document.getElementsByClassName("selfCare");

async function dailyData() {
    await ldJson();
  const frontCard = document.getElementsByClassName("frontCard");
  await Array.from(frontCard).forEach((fCard) => {
    data.forEach((category) => {
      if (fCard.children[0].innerText.includes(category["title"])) {
        fCard.children[1].innerText =
          category["timeframes"]["daily"]["current"]+'hrs';
        fCard.children[2].children[0].innerText =
          category["timeframes"]["daily"]["previous"]+'hrs';
      }
    });
  });
}

async function weeklyData() {
    await ldJson();
  const frontCard = document.getElementsByClassName("frontCard");

  await Array.from(frontCard).forEach((fCard) => {
    data.forEach((category) => {
      if (fCard.children[0].innerText.includes(category["title"])) {
        fCard.children[1].innerText =
          category["timeframes"]["weekly"]["current"]+'hrs';
        fCard.children[2].children[0].innerText =
          category["timeframes"]["weekly"]["previous"]+'hrs';
      }
    });
  });
}

async function monthlyData() {
    await ldJson();
  const frontCard = document.getElementsByClassName("frontCard");

  await Array.from(frontCard).forEach((fCard) => {
    data.forEach((category) => {
      if (fCard.children[0].innerText.includes(category["title"])) {
        fCard.children[1].innerText =
          category["timeframes"]["monthly"]["current"]+'hrs';
        fCard.children[2].children[0].innerText =
          category["timeframes"]["monthly"]["previous"]+'hrs';
      }
    });
  });
}

