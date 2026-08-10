let manhwaList = ["Solo Leveling", "Tower of God", "The Beginning After The End", "Windbreaker"];
let currentChapter = 1;
let currentTitle = "";

function buildHomepage(filteredList) {
  let listToShow = filteredList || manhwaList;
  let cardsHTML = "";
  for (let i = 0; i < listToShow.length; i++) {
    cardsHTML += "<div class='manhwa-card'><div class='cover'>Cover</div><p>" + listToShow[i] + "</p><button onclick=\"readManhwa('" + listToShow[i] + "')\">Read Now</button></div>";
  }
  document.body.innerHTML = "<h1>Ptoject Asta</h1><p>Read your favorite manhwa, anytime.</p>" +
    "<input type='text' id='searchBox' placeholder='Search manhwa...' oninput='searchManhwa()'>" +
    "<div class='manhwa-grid' id='grid'>" + cardsHTML + "</div>";
}

function searchManhwa() {
  let query = document.getElementById("searchBox").value.toLowerCase();
  let results = manhwaList.filter(function(title) {
    return title.toLowerCase().includes(query);
  });
  let cardsHTML = "";
  for (let i = 0; i < results.length; i++) {
    cardsHTML += "<div class='manhwa-card'><div class='cover'>Cover</div><p>" + results[i] + "</p><button onclick=\"readManhwa('" + results[i] + "')\">Read Now</button></div>";
  }
  document.getElementById("grid").innerHTML = cardsHTML;
}

function readManhwa(title) {
  currentTitle = title;
  currentChapter = 1;
  showChapter();
}

function showChapter() {
  document.body.innerHTML = "<h1>" + currentTitle + "</h1>" +
    "<p>Chapter " + currentChapter + "</p>" +
    "<p>This is where the manhwa pages would go...</p>" +
    "<button onclick='prevChapter()'>Previous</button>" +
    "<button onclick='nextChapter()'>Next</button>" +
    "<button onclick='downloadChapter()'>Download</button>" +
    "<br><br>" +
    "<button onclick='location.reload()'>Back to Home</button>";
}

function downloadChapter() {
  let content = currentTitle + " - Chapter " + currentChapter + "\n\nThis is where the manhwa pages would go...";
  let blob = new Blob([content], { type: "text/plain" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = currentTitle + "_Chapter" + currentChapter + ".txt";
  link.click();
}

function nextChapter() {
  currentChapter = currentChapter + 1;
  showChapter();
}

function prevChapter() {
  if (currentChapter > 1) {
    currentChapter = currentChapter - 1;
    showChapter();
  }
}

window.onload = function() { buildHomepage(); };
