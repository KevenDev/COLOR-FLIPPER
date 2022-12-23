const hexadecimal = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 'A', 'B', 'C', 'D', 'E', 'F']
const button = document.getElementById("btn-click")
const color = document.querySelector(".color")

button.addEventListener('click', function() {
  let hexcolor = '#'

  for(let i = 0; i < 6; i++) {
  hexcolor += hexadecimal[RandomNumber()];
}
color.textContent = hexcolor
document.body.style.backgroundColor = hexcolor; 
})

function RandomNumber() {
  return Math.floor(Math.random() * hexadecimal.length);
}