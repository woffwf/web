const nameInput = document.getElementById("name_input");
const locationInput = document.getElementById("location_input");
const areaInput = document.getElementById("area_input");
const capacityInput = document.getElementById("capacity_input");

const itemsContainer = document.getElementById("zoo_container");

// local functions
const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, location, area, capacity }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
  <img
    src="https://img.freepik.com/free-vector/group-wild-animals_1308-43813.jpg"
    class="item-container__image card-img-top" alt="card">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Locates in ${location}</p>
    <p class="card-text">${area} km^2</p>
    <p class="card-text">${capacity} animals</p>
  </div>
</li>`;

// exposed functions
export const clearInputs = () => {
  nameInput.value = "";
  locationInput.value = "";
  areaInput.value = "";
  capacityInput.value = "";
};

export const addItemToPage = ({ id, name, location, area, capacity }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, location, area, capacity })
  );

  const element = document.getElementById(id);


};

export const renderItemsList = (items) =>{
  itemsContainer.innerHTML="";

  for (const item of items){
    addItemToPage(item);
  }
}



export const getInputValues = () => {
  return {
    name: nameInput.value,
    location: locationInput.value,
    area: areaInput.value,
    capacity: capacityInput.value,
  };
};