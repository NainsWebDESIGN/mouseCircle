const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const el = document.querySelectorAll("span");
for (let i = 0; i < el.length; i++) {
  el[i].style.transform = "rotate(" + i * 19 + "deg)";
}

document.addEventListener("mousemove", (e) => {
  text.style.left = e.pageX + "px";
  text.style.top = e.pageY + "px";
});
