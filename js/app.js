const loadPhones = async (searchText = 'iphone', dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
  //   console.log(phones);
  const phonesContainer = document.getElementById('phones-container');
  phonesContainer.innerHTML = ``;

  const showAll = document.getElementById('see-more-item');
  if (dataLimit && phones.length > 9) {
    //display only 9 phones
    phones = phones.slice(0, 9);
    showAll.classList.remove('d-none');
  } else {
    showAll.classList.add('d-none');
  }

  //display no found message
  const msg = document.getElementById('no-found-msg');
  if (phones.length === 0) {
    msg.classList.remove('d-none');
    toggleSpinner(true);
  } else {
    msg.classList.add('d-none');
  }

  //   console.log(phones);

  phones.forEach((phone) => {
    const phoneCard = document.createElement('div');
    phoneCard.classList.add('col');
    phoneCard.className = 'mb-4';
    phoneCard.innerHTML = `
            <div class="card p-2">
              <img src="${phone.image}" alt="phone-img" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">
                  Brand: ${phone.brand}
                </p>
                <button 
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"  
                    onclick="loadPhoneDetails('${phone.slug}')" 
                    href="#" 
                    class="btn btn-primary"
                    > Show Details </button>
              </div>
            </div>
  `;
    phonesContainer.appendChild(phoneCard);
  });
  toggleSpinner(false);
};
const processSearch = (dataLimit) => {
  toggleSpinner(true);
  const searchField = document.getElementById('form-input');
  const searchText = searchField.value;
  loadPhones(searchText, dataLimit);
  //   searchField.value = ``;
};

const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', function () {
  processSearch(9);
});

const inputField = document.getElementById('form-input');
inputField.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    processSearch(9);
  }
});

// spinner
const toggleSpinner = (isLoading) => {
  const laoderSection = document.getElementById('loader');
  if (isLoading) {
    laoderSection.classList.remove('d-none');
  } else {
    laoderSection.classList.add('d-none');
  }
};

const showAllBtn = document.getElementById('show-all');
showAllBtn.addEventListener('click', function () {
  processSearch();
});

const loadPhoneDetails = async (productId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${productId}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhoneDetails(data.data);
};

const displayPhoneDetails = (phone) => {
  console.log(phone);
  console.log(phone.mainFeatures.sensors);
  const [face, accelometer, gryo, proximity, compass] =
    phone.mainFeatures.sensors;
  const modalTitle = document.getElementById('exampleModalLabel');
  modalTitle.innerText = phone.name;
  const bodyLeft = document.getElementById('body-left');
  bodyLeft.innerHTML = `
        <img src="${phone.image}" alt="" />
  `;
  const bodyRight = document.getElementById('body-right');
  bodyRight.innerHTML = `
        <h5>Features:</h5>
        <p>Chipset:  ${phone.mainFeatures.chipSet}</p>
        <p>Display Size:  ${phone.mainFeatures.displaySize}</p>
        <p>Memory:  ${phone.mainFeatures.memory}</p>
        <p>Sensors:  ${face}, ${accelometer}, ${gryo}, ${proximity}, ${compass}</p>
        <p>Storage:  ${phone.mainFeatures.storage}</p>
  `;
};

loadPhones();

/**
 * synchronous vs asynchronous
 *
 */
