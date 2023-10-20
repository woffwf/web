    class Beverage {
        constructor(brand, name, price, volume, description, image) {
            this.brand = brand;
            this.name = name;
            this.price = price;
            this.volume = volume;
            this.description = description;
            this.image = image;
        }
    }

    
    const beveragesData = [
      new Beverage('Coca Cola', 'Blackcurrant Royale', 39, '0.5л', 'Non-alcoholic beverage with blackcurrant flavor', './img/кола копія.png'),
     new Beverage('Живчик', 'Garden Spritz', 30, '0.5л', 'Refreshing non-alcoholic spritz', './img/живчик копія.png'),
     new Beverage('Спрайт', 'Tale of Forest', 32, '0.5л', 'Non-alcoholic beverage Tale of Forest', './img/спрайт копія.png'),
      new Beverage('Доктор пепер', 'Blueberry Juniper', 49, '0.5л', 'Non-alcoholic beverage with hazelnut flavor', './img/доктор пепер копія.png')
    ];


let filteredBeverage = beveragesData;

function renderBeverages(beverages) {
    const beverageList = document.getElementById('beverage-list');
    beverageList.innerHTML = '';

    beverages.forEach(beverage => {
        const beverageItem = document.createElement('div');
        beverageItem.classList.add('beverage-item');
        beverageItem.innerHTML = `
            <img src="${beverage.image}" alt="${beverage.brand} ${beverage.name}" width="200">
            <p>Бренд: ${beverage.brand}</p>
            <p>Назва: ${beverage.name}</p>
            <p>Ціна: ${beverage.price}₴</p>
            <p>Об'єм: ${beverage.volume}</p>
            <p>Опис: ${beverage.description}</p>
        `;
        beverageList.appendChild(alcoholItem);

        const editButton = beverageItem.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            openEditModal(beverages[index]);
        });
    });
}

renderBeverages(filteredBeverages);

const cancelSearchButton = document.getElementById("cancel-search-button");

cancelSearchButton.addEventListener("click", () => {
    document.getElementById('search-input').value = "";
    filteredBeverages = beveragesData;
    renderBeverages(filteredABeverages);
    calculateTotalPrice();
});

document.getElementById('sort-by-price').addEventListener('click', () => {
    const sortedBeverages = [...filteredBeverages].sort((a, b) => a.price - b.price);
    renderAlcohols(sortedBeverages);
});

document.getElementById('sort-by-brand').addEventListener('click', () => {
    const sortedAlcohols = [...filteredBeverages].sort((a, b) => a.brand.localeCompare(b.brand));
    renderAlcohols(sortedBeverages);
});

function calculateTotalPrice() {
    const totalAmount = filteredBeverages.reduce((total, beverage) => total + beverage.price, 0);
    document.getElementById('total-amount').textContent = totalAmount;
}

calculateTotalPrice();


// відкриття модального вікна для додавання товару
function openCreateModal() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "block";
}

// додати слухача події для кнопки "Додати товар"
document.getElementById("open-create-modal-button").addEventListener("click", openCreateModal);

// додавання нового товару
function createBeverage() {
    const brand = document.getElementById("create-brand").value;
    const name = document.getElementById("create-name").value;
    const price = parseFloat(document.getElementById("create-price").value);
    const volume = parseFloat(document.getElementById("create-volume").value);
    const image = document.getElementById("create-image").value;

    const newBeverage = new Beverage(brand, name, price, volume, image);
    alcoholsData.push(newBeverage);

    closeModalCreate();

    renderBeverages(beveragesData);
    calculateTotalPrice();
}

// Додавання слухача події для кнопки "зберегти" в модальному вікні для додавання товару
document.getElementById("create-modal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    createAlcohol();
});

//закриття модального вікна для додавання товару
function closeModalCreate() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "none";
}

//функцію для закриття модального вікна для редагування товару
function closeModalEdit() {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "none";
}

//додавання слухачі подій для закриття модальних вікон
document.getElementById("close-create-modal").addEventListener("click", closeModalCreate);
document.getElementById("close-edit-modal").addEventListener("click", closeModalEdit);

// відкриття модального вікна для редагування товару
function openEditModal(alcohol) {
const editModal = document.getElementById("edit-modal");
editModal.style.display = "block";

// редагування
document.getElementById("edit-brand").value = beverage.brand;
document.getElementById("edit-name").value = beverage.name;
document.getElementById("edit-price").value = beverage.price;
document.getElementById("edit-volume").value = beverage.volume;
document.getElementById("edit-image").value = beverage.image;

//обробник події для збереження редагованого товару
document.getElementById("edit-modal-form").addEventListener("submit", function(event) {
event.preventDefault(); 
saveEditedBeverage(alcohol);
});

function saveEditedBeverage(beverage) {
// оновлення редагування
beverage.brand = document.getElementById("edit-brand").value;
beverage.name = document.getElementById("edit-name").value;
beverage.price = parseFloat(document.getElementById("edit-price").value);
beverage.volume = parseFloat(document.getElementById("edit-volume").value);
beverage.image = document.getElementById("edit-image").value;

closeModalEdit();

renderBeverages(filteredBeverages);
calculateTotalPrice();
}
}

//обробник події для кнопки "зберегти зміни" в модальному вікні для редагування товару
document.getElementById("save-edit-button").addEventListener("click", saveEditedBeverage);

//функція для закриття модального вікна для редагування товару
function closeModalEdit() {
const editModal = document.getElementById("edit-modal");
editModal.style.display = "none";
}
