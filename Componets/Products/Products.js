class Products {
  // Создание общего класса Products c методом render для вывода
  render() {
    // Содание переменной для хранения данных из эллементов li
    let HtmlCatalog = "";
    // Перебор всех эллементов переменной Catalog
    CATALOG.forEach(({ name, img, price, filter, id,text }) => {
      // Добавление данных
      HtmlCatalog += `
            <li onclick = "openModal('${name}', '${img}', '${text}')", class='list__item ${filter}' data-path=''>
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
        <li data-f = 'middle'>Средние</li>
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
// Вывод экземпляр
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
let ReadModal = `
  <div class='modal__content'>
      <div id='modal__close' class='modal__close'>&#10006</div>
      <div id='modal__title' class='modal__title'><p></p></div>
      <div id='modal__image' class='modal__image'><img src=''></div>
      <div id='modal__text' class='modal__text'><p></p></div>
      <div class='modal__price' id='modal__price'></div>
  </div>
`
RootModal.innerHTML = ReadModal;
window.addEventListener("scroll", loadBlocks); // добавляем обработчик события прокрутки
loadBlocks(); // вызываем функцию при загрузке страницы для подгрузки блоков, которые уже находятся в видимой области

const OpenProjectPopUp = document.querySelectorAll(".item__image");
const CloseProjectPopUp = document.getElementById("modal__close");
const PopUpProject = document.getElementById("modal");


OpenProjectPopUp.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.classList.contains("item__image")) {
      PopUpProject.classList.toggle("active");
      document.body.style.overflow = "hidden";
    }
  });
});
CloseProjectPopUp.addEventListener("click", () => {
  PopUpProject.classList.remove("active");
  document.body.style.overflow = "auto";
});

function openModal(name, img, text) {
  const ModalTitle = document.getElementById("modal__title");
  const ModalImage = document.getElementById("modal__image");
  const Modaltext = document.getElementById("modal__text");
  ModalTitle.innerHTML = name;
  ModalImage.innerHTML = `<img src='${img}'>`;
  Modaltext.innerHTML = text;
}

