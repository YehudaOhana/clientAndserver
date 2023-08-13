const fetchData = async () => {
  const responsive = await fetch(`https://randomuser.me/api`)
  .then(data => data.json())
  .then(users => console.log(users));
}
let button = document.getElementById(`button`)
button.addEventListener(`click`, () => fetchData())
