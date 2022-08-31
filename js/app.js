const loadPhones = async (searchText = 'iphone', dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log('hello show all', searchText, data.data, dataLimit);
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
    toggleSpinner(false);
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
  console.log(searchText);
  //   searchField.value = ``;
};

const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', function () {
  processSearch(9);
});

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
// loadPhones();
