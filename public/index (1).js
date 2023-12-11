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

let filteredBeverages = [];

// Початкове завантаження напоїв з сервера
fetchBeverages();

function fetchBeverages() {
    fetch('/beverages')
        .then(response => response.json())
        .then(data => {
            filteredBeverages = data;
            renderBeverages(filteredBeverages);
            calculateTotalPrice();
        })
        .catch(error => console.error('Помилка:', error));
}

function renderBeverages(beverages) {
    const beverageList = document.getElementById('beverage-list');
    beverageList.innerHTML = '';

    beverages.forEach((beverage, index) => {
        const beverageItem = document.createElement('div');
        beverageItem.classList.add('beverage-item');
        beverageItem.innerHTML = `
            <img src="${beverage.image}" alt="${beverage.brand} ${beverage.name}" width="200">
            <p>Бренд: ${beverage.brand}</p>
            <p>Назва: ${beverage.name}</p>
            <p>Ціна: ${beverage.price}₴</p>
            <p>Об'єм: ${beverage.volume}</p>
            <p>Опис: ${beverage.description}</p>
            <button class="edit-button">Редагувати</button>
        `;
        beverageList.appendChild(beverageItem);

        const editButton = beverageItem.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            openEditModal(beverage, index);
        });
    });
}

function calculateTotalPrice() {
    const totalAmount = filteredBeverages.reduce((total, beverage) => total + beverage.price, 0);
    document.getElementById('total-amount').textContent = totalAmount + '₴';
}

document.getElementById('sort-by-price').addEventListener('click', () => {
    const sortedBeverages = [...filteredBeverages].sort((a, b) => a.price - b.price);
    renderBeverages(sortedBeverages);
});

document.getElementById('sort-by-brand').addEventListener('click', () => {
    const sortedBeverages = [...filteredBeverages].sort((a, b) => a.brand.localeCompare(b.brand));
    renderBeverages(sortedBeverages);
});

// Відкриття модального вікна для додавання товару
function openCreateModal() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "block";
}

document.getElementById("open-create-modal-button").addEventListener("click", openCreateModal);

// Додавання нового товару
function createBeverage() {
    const brand = document.getElementById("create-brand").value;
    const name = document.getElementById("create-name").value;
    const price = parseFloat(document.getElementById("create-price").value);
    const volume = document.getElementById("create-volume").value;
    const description = document.getElementById("create-description").value;
    const image = document.getElementById("create-image").value;

    fetch('/beverages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brand, name, price, volume, description, image })
    })
    .then(response => response.json())
    .then(() => {
        closeModalCreate();
        fetchBeverages();
    })
    .catch(error => console.error('Помилка:', error));
}

document.getElementById("create-modal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    createBeverage();
});

function closeModalCreate() {
    const createModal = document.getElementById("create-modal");
    createModal.style.display = "none";
}

// Функція для закриття модального вікна для редагування товару
function closeModalEdit() {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "none";
}

// Відкриття модального вікна для редагування товару
function openEditModal(beverage, index) {
    const editModal = document.getElementById("edit-modal");
    editModal.style.display = "block";

    // Заповнення форми поточними даними об'єкта
    document.getElementById("edit-brand").value = beverage.brand;
    document.getElementById("edit-name").value = beverage.name;
    document.getElementById("edit-price").value = beverage.price;
    document.getElementById("edit-volume").value = beverage.volume;
    document.getElementById("edit-description").value = beverage.description;
    document.getElementById("edit-image").value = beverage.image;

    // Видалення попереднього обробника події, якщо він існував
    const form = document.getElementById("edit-modal-form");
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    // Додавання обробника події для збереження редагованого товару
    newForm.addEventListener("submit", function(event) {
        event.preventDefault();
        saveEditedBeverage(beverage, index);
    });
}

function saveEditedBeverage(beverage, index) {
    const brand = document.getElementById("edit-brand").value;
    const name = document.getElementById("edit-name").value;
    const price = parseFloat(document.getElementById("edit-price").value);
    const volume = document.getElementById("edit-volume").value;
    const description = document.getElementById("edit-description").value;
    const image = document.getElementById("edit-image").value;

    fetch(`/beverages/${beverage._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brand, name, price, volume, description, image })
    })
    .then(response => response.json())
    .then(() => {
        closeModalEdit();
        fetchBeverages();
    })
    .catch(error => console.error('Помилка:', error));
}

document.getElementById("close-create-modal").addEventListener("click", closeModalCreate);
document.getElementById("close-edit-modal").addEventListener("click", closeModalEdit);
