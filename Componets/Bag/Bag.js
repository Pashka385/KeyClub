const shop = {
  el1: {
    name: "White",
    price: 300,
    count: 0,
  },
  el2: {
    name: "Black",
    price: 500,
    count: 0,
  },
  el3: {
    name: "Blue",
    price: 100,
    count: 0,
  },
};
const btn = document.querySelectorAll('.iteem__btn')
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) {
    PlusFunstion(e.target.dataset.id);
  }
});
const PlusFunstion = (id) => {
  shop[id]["count"]++;
  renderShop();
};
const renderShop = () => {
  const x = document.querySelector(".content");
  let html = "";
  let resPrice = 0;
  for (const key in shop) {
    if (shop[key].count > 0) {
      resPrice += shop[key].price * shop[key].count;
      html += `<p>${shop[key].name}: кол-во (${shop[key].count}), ${shop[key].price * shop[key].count}RUB</p>`;
    }
  }
  html += `<p>Итог: ${resPrice} RUB</p>`;
  x.innerHTML = html;
};

renderShop();
