const bodyContainer = document.querySelector(".body-container");

function createBoard() {
  for (let i = 1; i <= 25; i++) {
    for (let j = 1; j <= 40; j++) {
      if (i <= 8) {
        const sky = document.createElement("div");
        sky.classList.add("sky");
        bodyContainer.appendChild(sky);
      } else if (i === 9) {
        if ([6, 7, 17, 18, 25, 26].includes(j)) {
          const leaves1 = document.createElement("div");
          leaves1.classList.add("leaves1");
          bodyContainer.appendChild(leaves1);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i === 10) {
        if ([5, 6, 7, 8, 16, 17, 18, 19, 24, 25, 26, 27].includes(j)) {
          const leaves1 = document.createElement("div");
          leaves1.classList.add("leaves1");
          bodyContainer.appendChild(leaves1);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i === 11) {
        if (
          [
            4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28,
          ].includes(j)
        ) {
          const leaves1 = document.createElement("div");
          leaves1.classList.add("leaves1");
          bodyContainer.appendChild(leaves1);
        } else if ([32, 34].includes(j)) {
          const creeperFace = document.createElement("div");
          creeperFace.classList.add("creeperFace");
          bodyContainer.appendChild(creeperFace);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i === 12) {
        if ([17, 18, 25, 26].includes(j)) {
          const wood1 = document.createElement("div");
          wood1.classList.add("wood1");
          bodyContainer.appendChild(wood1);
        } else if ([3, 4, 5, 6, 7, 8, 9, 10, 13].includes(j)) {
          const leaves1 = document.createElement("div");
          leaves1.classList.add("leaves1");
          bodyContainer.appendChild(leaves1);
        } else if ([32, 34].includes(j)) {
          const creeperBody = document.createElement("div");
          creeperBody.classList.add("creeperBody");
          bodyContainer.appendChild(creeperBody);
        } else if ([37].includes(j)) {
          const creeperFace = document.createElement("div");
          creeperFace.classList.add("creeperFace");
          bodyContainer.appendChild(creeperFace);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i === 13) {
        if ([6, 7, 17, 18, 25, 26].includes(j)) {
          const wood1 = document.createElement("div");
          wood1.classList.add("wood1");
          bodyContainer.appendChild(wood1);
        } else if ([12, 13, 14].includes(j)) {
          const leaves1 = document.createElement("div");
          leaves1.classList.add("leaves1");
          bodyContainer.appendChild(leaves1);
        } else if ([32, 34, 37].includes(j)) {
          const creeperBody = document.createElement("div");
          creeperBody.classList.add("creeperBody");
          bodyContainer.appendChild(creeperBody);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i === 14) {
        if ([6, 7, 13, 17, 18, 25, 26].includes(j)) {
          const wood1 = document.createElement("div");
          wood1.classList.add("wood1");
          bodyContainer.appendChild(wood1);
        } else if ([32, 34, 37].includes(j)) {
          const creeperBody = document.createElement("div");
          creeperBody.classList.add("creeperBody");
          bodyContainer.appendChild(creeperBody);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i === 15) {
        if ([6, 7, 13, 17, 18, 25, 26].includes(j)) {
          const wood1 = document.createElement("div");
          wood1.classList.add("wood1");
          bodyContainer.appendChild(wood1);
        } else if ([32, 34, 36, 38].includes(j)) {
          const creeperBody = document.createElement("div");
          creeperBody.classList.add("creeperBody");
          bodyContainer.appendChild(creeperBody);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i === 16) {
        if ([6, 7, 13].includes(j)) {
          const wood1 = document.createElement("div");
          wood1.classList.add("wood1");
          bodyContainer.appendChild(wood1);
        } else if (j >= 16) {
          const grass1 = document.createElement("div");
          grass1.classList.add("grass1");
          bodyContainer.appendChild(grass1);
        } else {
          const sky = document.createElement("div");
          sky.classList.add("sky");
          bodyContainer.appendChild(sky);
        }
      } else if (i >= 17 && i <= 19) {
        const soil1 = document.createElement("div");
        soil1.classList.add("soil1");
        bodyContainer.appendChild(soil1);
      } else if (i === 20) {
        if (j <= 5) {
          const soil1 = document.createElement("div");
          soil1.classList.add("soil1");
          bodyContainer.appendChild(soil1);
        } else {
          const stone1 = document.createElement("div");
          stone1.classList.add("stone1");
          bodyContainer.appendChild(stone1);
        }
      } else {
        const stone1 = document.createElement("div");
        stone1.classList.add("stone1");
        bodyContainer.appendChild(stone1);
      }
    }
  }
}
function placestone() {
  const stones = document.querySelectorAll(".stone1");
  stones.forEach((stone1) => {
    const rand = Math.random();
    if (rand < 0.2) {
      stone1.classList.add("redstone");
    } else if (rand < 0.4) {
      stone1.classList.add("gold");
    } else if (rand < 0.6) {
      stone1.classList.add("diamond");
    } else if (rand < 0.8) {
      stone1.classList.add("coal");
    }
  });
}
function removeImg() {
  let toolNow = null;
  const toolsNow = document.querySelectorAll(".tool");
  toolsNow.forEach((tool) => {
    tool.addEventListener("click", (e) => {
      toolNow = tool.className;
    });
  });
  const dives = document.querySelectorAll(".body-container div");
  dives.forEach((div) => {
    div.addEventListener("click", (e) => {
      const divnow = div.className;

      if (
        (divnow === "leaves1" || divnow === "wood1") &&
        toolNow === "axe tool"
      ) {
        div.className = "sky";
      } else if (
        (divnow === "soil1" || divnow === "grass1") &&
        toolNow === "shovel tool"
      ) {
        div.className = "sky";
      } else if (
        (divnow === "stone1" ||
          divnow === "stone1 coal" ||
          divnow === "stone1 gold" ||
          divnow === "stone1 redstone" ||
          divnow === "stone1 diamond") &&
        toolNow === "pickaxe tool"
      ) {
        div.className = "sky";
      } else if (
        (divnow === "creeperFace" || divnow === "creeperBody") &&
        toolNow === "sword tool"
      ) {
        div.className = "sky";
      }
    });
  });
}
function boxs() {
  const boxContent2 = document.querySelector(".box-content2");
  const box = document.querySelector(".box");
  box.addEventListener("click", (e) => {
    boxContent2.classList.toggle("box-content");
  });
}
function resetGame() {
  const bodyContainer = document.querySelector(".body-container");
  const reset = document.querySelector(".reset");
  reset.addEventListener("click", (e) => {
    bodyContainer.innerHTML = "";
    startGame();
  });
}
function startGame() {
  createBoard();
  placestone();
  removeImg();
  resetGame();
}
startGame();
boxs();
