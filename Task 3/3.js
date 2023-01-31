const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.btn');
const inputNode = document.querySelector('input');
const url = (num) => `https://picsum.photos/v2/list/?limit=${num}`;

function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Статус ответа: ${xhr.status}`);
        } else {
            // console.log(`Статус ответа: ${xhr.status}`);
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log(`Ошибка! Статус ответа: ${xhr.status}`);
    };

    xhr.send();
}

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img class="image" src="${item.download_url}" />
        <p class="autor">${item.author}</p>
      </div>
    `;

        cards = cards + cardBlock;
    });


    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    num = inputNode.value;
    if (num > 0 && num <=10) {
        useRequest(url(num), displayResult);
    } else {
        console.log(`${num} - число вне диапазона от 1 до 10`);
        resultNode.innerHTML = `Вы указали количество вне диапазона от 1 до 10`;
    }
});