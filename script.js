let all = document.querySelector('.all').onclick = ChangeOnAll;
let man = document.querySelector('.man').onclick = ChangeOnMan;
let female = document.querySelector('.female').onclick = ChangeOnFemale;
let kids = document.querySelector('.kids').onclick = ChangeOnKids;

function ChangeOnAll () {
	let a = document.querySelectorAll(".card-title");
	a.forEach(element => {
  	element.textContent = 'Не привет'
  })
}


function ChangeOnMan () {
	let a = document.querySelectorAll(".card-title");
	a.forEach(element => {
  	element.textContent = 'Привет'
  })
}

function ChangeOnFemale () {
	let a = document.querySelectorAll(".card-title");
	a.forEach(element => {
  	element.textContent = 'Не привет'
  })
}

function ChangeOnKids () {
	let a = document.querySelectorAll(".card-title");
	a.forEach(element => {
  	element.textContent = 'Привет'
  })
}