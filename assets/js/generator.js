const li = document.querySelectorAll('.li');
const button = document.querySelector('.btn');

const lists = [
    {
        name: 'It is easy to sit up and take notice, whats difficult is getting up and taking action.',
    },
    {
        name: 'If you want to be more, you have to be more than you are right now.',
    },
    {
        name: 'The greatest enrichment you can make in your life is to do what you love.',
    },
    {
        name: 'The most beautiful thing in life is the moment when a person discovers herself.',
    },
];

button.addEventListener('click', renderList);

function renderList() {
    const randomIndex = Math.floor(Math.random() * lists.length);
    const listItem = lists[randomIndex];

    adviceList.innerHTML = `<li class='li'>${listItem.name}</li>`;
}