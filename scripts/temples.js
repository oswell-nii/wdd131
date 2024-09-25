const now = new Date();
const year = now.getFullYear();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

document.getElementById('lastModified').textContent = document.lastModified;
document.getElementById('currentYear').textContent = year;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});