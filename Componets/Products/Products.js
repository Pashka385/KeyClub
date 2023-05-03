class Products {
  // Создание общего класса Products c методом render для вывода
  render() {
    // Содание переменной для хранения данных из эллементов li
    let HtmlCatalog = "";
    // Перебор всех эллементов переменной Catalog
    CATALOG.forEach(({ name, img, price, filter, id }) => {
      // Добавление данных
      HtmlCatalog += `
            <li class='list__item ${filter}' data-path=''>
            <div class='box1'></div>
            <div class='box2'></div>
                <div class='item__up'></div>
                  <div class='item__content'>
                <div class='item__title'>${name}</div>
                <div class='item__image'><img src=${img}></div>
                <div class='item__price'>${price}</div>
                <button class='iteem__btn plus act' data-id=${id}>Купить                                                                                                                                                                                                                                                                  </button>
                  </div>
                <div class='item__bottom'></div>
            </li>
            `;
    });
    // Добавление эллементов li в Ul лист
    const html = `
    <div class='list'>
      <ul class='filter__list'>
        <li data-f = 'all'>Все</li>
        <li data-f = 'rich'>Дорогие</li>
        <li data-f = 'chip'>Дешевые</li>
        <li data-f = 'middle'>Среднии</li>
     
      </ul>
    </div>
        <ul class = 'ul__list' id='ul__list'>
        ${HtmlCatalog}
         </ul>`;
    // Добавление HTML кода к узлу Products
    RootProducts.innerHTML = html;
  }
}
// Создание экземпляра для запуска
const productPage = new Products();
// Вывод экземпляра
productPage.render();
// Фильтрация
const FilterBox = document.querySelectorAll(".list__item"); //получаем экземпляры списка ul
document.querySelector(".filter__list").addEventListener("click", (event) => {                                                                                                                                                                                                            
  if (event.target.tagName !== "LI") return false; // Цепляемся за ul и ставим защиту от клика вне кнопок
  let FilterClass = event.target.dataset["f"]; // дастаём все эллементы с дата атрибутом
  FilterBox.forEach((element) => {
    // перебираем все эллементы
    element.classList.remove("hide"); // заранее удаляем у всех класс скрывания
    if (!element.classList.contains(FilterClass) && FilterClass !== "all") {
      element.classList.add("hide");
    }
  });
});
const blocks = document.querySelectorAll(".list__item"); // выбираем блоки, которые нужно подгрузить
function loadBlocks() {
  blocks.forEach((block) => {
    const rect = block.getBoundingClientRect(); // получаем координаты блока относительно видимой области страницы
    if (rect.top <= window.innerHeight) {
      // если верхняя граница блока находится в видимой области страницы
      block.classList.add("loaded"); // добавляем класс для показа блока
    }
  });
}

window.addEventListener("scroll", loadBlocks); // добавляем обработчик события прокрутки

loadBlocks(); // вызываем функцию при загрузке страницы для подгрузки блоков, которые уже находятся в видимой области

const res = document.querySelectorAll('.act');
res.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active')
  });
});