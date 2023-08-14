function createCARD(user) {
  let main = document.getElementById(`main`);
  let newUser = document.createElement(`div`);
  main.appendChild(newUser);
  newUser.id = `newUser`;
  let imgCard = document.createElement(`div`);
  newUser.appendChild(imgCard);
  imgCard.id = `imgCard`;
  let image = document.createElement(`img`);
  imgCard.appendChild(image);
  image.id = `image`;
  image.src = user.results[0].picture.thumbnail;
  let centerCard = document.createElement(`div`);
  newUser.appendChild(centerCard);
  centerCard.id = `centerCard`;
  let name = document.createElement(`h2`);
  centerCard.appendChild(name);
  name.id = `name`;
  name.innerText = user.results[0].name.first + ` ` + user.results[0].name.last;
  let email = document.createElement(`p`);
  newUser.appendChild(email);
  email.innerText = user.results[0].email;
  let age = document.createElement(`p`);
  newUser.appendChild(age);
  age.innerText = user.results[0].registered.age;
}

const fetchData1 = async () => {
  const responsive = await fetch(`https://randomuser.me/api`);
  let data = await responsive.json();
  createCARD(data);
};

let button1 = document.getElementById(`button1`);
button1.addEventListener(`click`, () => fetchData1());

let button2 = document.getElementById(`button2`);
button2.addEventListener(`click`, () => fetchData2());

const fetchData2 = async () => {
  const responsive = await fetch(
    `https://randomuser.me/api/?results=5&gender=male`
  );
  let data = await responsive.json();
  console.log(data);
};
