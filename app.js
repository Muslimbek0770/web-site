// document.body.style.color = "green"
// setTimeout(() => {
//     document.body.style.background = "yellow"
// }, 2000);




let container = document.querySelector(".container");
container.style.textAlign = "center";
container.style.fontSize = "40px";
setInterval(() => {
  let sana = new Date();
  container.innerHTML = `yil: ${sana.getFullYear()}, oy: ${sana.getMonth()} kun: ${sana.getDate()} vaqt: ${sana.getHours()}:${sana.getMinutes()}:${sana.getSeconds()}`;
}, 2000);

function Edit() {
  document.querySelector(".container").innerHTML = "Bugungi Kun"
}