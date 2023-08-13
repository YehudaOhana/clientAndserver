const fetchData = async () => {
  const responsive = await fetch(`https://randomuser.me/api`);
  // console.log(responsive);
  let data = await responsive.json()
  console.log(data);
}
let button = document.getElementById(`button`)
button.addEventListener(`click`, () => fetchData())
