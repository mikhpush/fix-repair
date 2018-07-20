const onSuccessWindow = `
	<legend class="form__legend">
    <h2 class="form__title">Узнайте о запуске сервиса первым</h2>
  </legend>
  <div class="form__success">
    <img class="form__flag-pic" src="img/shape-flag.svg">
    <p class="form__success-text">Спасибо! Мы будем держать
    вас в курсе обновлений</p>
  </div>
`;

const form = document.querySelector('.form__form-container');
const scrollToForm = document.querySelector('.welcome__button');
const scrollToFooter = document.querySelector('.welcome__contacts');
const scrollPageDown = document.querySelector('.welcome__scroll');
const formWindow = document.querySelector('.form__wrapper');

const sendData = () => {
  const xhr = new XMLHttpRequest();
  const myData = new FormData(form);

  xhr.addEventListener("load", function(evt) {
    alert(evt.target.responseText);
  });

  xhr.addEventListener("error", function(evt) {
    alert('Что-то пошло не так...');
  });

  xhr.open("POST", "some.php");
  xhr.send(myData);
}

scrollToForm.addEventListener(`click`, () => {
	const formEl = document.querySelector('.form')
	formEl.scrollIntoView({
		behavior: 'smooth',
		block: 'center'
	})
});

scrollToFooter.addEventListener(`click`, () => {
	const footerEl = document.querySelector('.footer')
	footerEl.scrollIntoView({
		behavior: 'smooth',
		block: 'center'
 })
});

scrollPageDown.addEventListener(`click`, () => {
	window.scroll({
		top: window.innerHeight,
		left: 0,
		behavior: 'smooth',
 })
});

form.addEventListener(`submit`, (evt) => {
	evt.preventDefault();
	sendData();
	formWindow.style.display = 'none';
	const fieldsetEl = document.createElement('fieldset')
	fieldsetEl.className = 'form__wrapper-success';
	fieldsetEl.innerHTML = onSuccessWindow;
	document.querySelector('.form').appendChild(fieldsetEl);
})
