const loadPhones = async (searchText = 'iphone') => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  console.log(phones);
  const phonesContainer = document.getElementById('phones-container');
  phonesContainer.innerHTML = ``;
  phones.forEach((phone) => {
    const phoneCard = document.createElement('div');
    phoneCard.classList.add('col');
    phoneCard.innerHTML = `
            <div class="card">
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
};

const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', function () {
  const searchField = document.getElementById('form-input');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhones(searchText);
});

loadPhones();
