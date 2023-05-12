let HtmlHeader = `
<button class="header__burger" id="burger">
    <span class='burger__wood'></span>
    <span class='burger__wood'></span>
    <span class='burger__wood'></span>
</button> 
<div class='header__container'>
    <ul class='header__list'>
        <li><a href='#Products'>Товары</a></li>
        <li><a href='https://vk.com/pank_ne_umer'>Вконтакте</a></li>
        <li><a href='https://vk.me/pank_ne_umer'>Связь</a></li>
        <li><a href='#Products'>Товары</a></li>
        <li><a href='https://vk.com/pank_ne_umer'>Вконтакте</a></li>
        <li><a href='https://vk.me/pank_ne_umer'>Связь</a></li>
        
        
    </ul>
</div>
<div class='shop open_pop_up' id='open_pop_up'>
<i class="fa-solid fa-basket-shopping"></i>
</div>

          <div class="pop_up" id="pop_up">
                    <div class="pop_up_container">
                        <div class="pop_up_body" id="pop_up_body">
                        <div class='content'></div>
                          <div class="pop_up_close" id="pop_up_close">&#10006</div>
                          <div class='buy'><a class="buy__link">Купить</a>
                        </div>
                    </div>
                </div>
`;

RootHeader.innerHTML = HtmlHeader;
const Headerpart = document.getElementById("header");
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    Headerpart.classList.toggle("plus");
  });
});

const x = document.querySelector(".fa-basket-shopping");
let isScrolled = false; // флаг, указывающий, было ли произведено прокручивание страницы
window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && !isScrolled) {
    // проверяем, что положение скролла больше 0 и событие еще не обработано
    x.classList.add("myClass");
    isScrolled = true; // устанавливаем флаг в значение true, чтобы предотвратить повторное добавление класса
  } else if (window.scrollY === 0 && isScrolled) {
    // проверяем, что положение скролла равно 0 и событие уже обработано
    x.classList.remove("myClass");
    isScrolled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                = false; // устанавливаем флаг в значение false, чтобы снова обработать событие при следующем прокручивании
  }
});

const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("pop_up_close");
const PopUp = document.getElementById("pop_up");

openPopUp.addEventListener("click", (e) => {
  alert("Для покупки скопируйте данные из корзины");
  e.preventDefault();
  PopUp.classList.add("active");
  document.body.style.overflow = "hidden";
});

closePopUp.addEventListener("click", () => {
  PopUp.classList.remove("active");
  document.body.style.overflow = "auto";
});

const BuyLink = document.querySelector('.buy__link');
BuyLink.addEventListener('click',()=>{
  window.open("https://vk.me/pank_ne_umer","","toolbar=no,scrollbars=yes,width=500, height=500, resizable=yes, top=100, left=500")
})


const asd = document.querySelectorAll(".iteem__btn");
const sd = document.querySelector(".fa-basket-shopping"); 
asd.forEach((item) => {
  item.addEventListener("click", () => {
      sd.classList.add("active"); 
  });
});