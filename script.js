let clickCount = 0;
let typingInterval = null;
let isTyping = false;

function typeText(element, text, speed = 65, callback) {
  // หยุดการพิมพ์เก่าทันทีถ้ามี
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }

  element.innerHTML = "";
  element.classList.remove("glow");
  isTyping = true;

  let i = 0;
  typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      typingInterval = null;
      element.classList.add("glow");
      isTyping = false;
      if (callback) callback();
    }
  }, speed);
}

function handleClick() {
  // ⛔ กำลังพิมพ์อยู่ ไม่ให้กดซ้ำ
  if (isTyping) return;

  const textEl = document.getElementById("loveText");
  const btn = document.getElementById("loveBtn");

  clickCount++;

  if (clickCount === 1) {
    textEl.className = "text-effect";
    typeText(textEl, "ดีใจนะ ที่ได้คุยกับเธอ 🌸");
    btn.innerHTML = "กดอีกที 😊";
  } 
  else if (clickCount === 2) {
    textEl.className = "text-effect";
    typeText(textEl, "คุยกับเธอแล้วรู้สึกสบายใจมากเลย 🙂");
    btn.innerHTML = "กดอีกนิดนะ 💗";
  } 
  else if (clickCount === 3) {
    textEl.className = "text-effect";
    typeText(
      textEl,
      "เค้าชอบเธอนะ🫶🏻💗🌷",
      70,
      () => {
        btn.style.display = "none"; // ซ่อนปุ่มหลังพิมพ์เสร็จ
      }
    );
  }
}

// 🌸 ดอกไม้รัวเต็มจอ (อันนี้ใช้ได้เหมือนเดิม)
setInterval(() => {
  for (let i = 0; i < 5; i++) {
    createFlower();
  }
}, 120);

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
