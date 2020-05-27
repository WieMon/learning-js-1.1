const btn = document.querySelector('button');
const list = document.querySelector("ul");
let number = 1;

btn.addEventListener('click', function() {
  const li = document.createElement('li');
  li.textContent = number;
  list.appendChild(li)
  //document.body.appendChild(li);
  if (number%3 == 0) {
    li.classList.add('big')
  }
  //number = number + 2;
  number += 2;
});