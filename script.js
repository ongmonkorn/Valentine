// let clickCount = 0;

// function typeText(element, text, speed = 65) {
//   element.innerHTML = "";
//   element.classList.remove("glow");
//   let i = 0;

//   const typing = setInterval(() => {
//     if (i < text.length) {
//       element.innerHTML += text.charAt(i);
//       i++;
//     } else {
//       clearInterval(typing);
//       element.classList.add("glow");
//     }
//   }, speed);
// }

// function handleClick() {
//   const textEl = document.getElementById("loveText");
//   const btn = document.getElementById("loveBtn");

//   clickCount++;

//   if (clickCount === 1) {
//     textEl.className = "text-effect";
//     typeText(textEl, "ดีใจนะ ที่ได้คุยกับที่รัก 🌸");
//     btn.innerHTML = "กดอีกที 😊";
//   } else if (clickCount === 2) {
//     textEl.className = "text-effect";
//     typeText(textEl, "ถ้าที่รักยังอยากคุย… เค้าก็อยากคุยเหมือนกันนะ 💗", 65);
//     btn.style.display = "none";
//   }
// }

let clickCount = 0;

function typeText(element, text, speed = 65) {
  element.innerHTML = "";
  element.classList.remove("glow");
  let i = 0;

  const typing = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      element.classList.add("glow");
    }
  }, speed);
}

function handleClick() {
  const textEl = document.getElementById("loveText");
  const btn = document.getElementById("loveBtn");

  clickCount++;

  if (clickCount === 1) {
    textEl.className = "text-effect";
    typeText(textEl, "ดีใจนะ ที่ได้คุยกับเธอ 🌸");
    btn.innerHTML = "กดอีกที 😊";
  } else if (clickCount === 2) {
    textEl.className = "text-effect";
    typeText(textEl, "ช่วงนี้คุยเธอกับแล้วรู้สึกสบายใจมากเลย 🙂");
    btn.innerHTML = "กดอีกนิดนะ 💗";
  } else if (clickCount === 3) {
    textEl.className = "text-effect";
    typeText(
      textEl,
      "ไม่รู้ว่าอนาคตจะเป็นยังไง แต่ตอนนี้เค้าอยากมีเธออยู่ในทุกวันนะ 🌷",
      70,
    );
    btn.style.display = "none"; // ซ่อนปุ่ม
  }
}

// 🌸 ดอกไม้รัวเต็มจอ
setInterval(() => {
  for (let i = 0; i < 5; i++) {
    // จำนวนต่อรอบ (เพิ่มได้)
    createFlower();
  }
}, 120); // ยิ่งน้อย = ยิ่งรัว

function createFlower() {
  const container = document.querySelector(".flowers");
  const flowers = ["🌸", "🌼", "🌷", "💐", "🌹"];

  const flower = document.createElement("span");
  flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.bottom = "-40px";

  container.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 3000);
}
