import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
	close = document.querySelector(".header__menu-close"),
	menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
	menu.classList.add("header__menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header__menu_active");
	document.body.style.overflow = "";
});

try {
// init Swiper:
new Swiper('.works__slider', {
  // configure Swiper to use modules
  slideesPerView: 1,
  loop: true,
  modules: [Navigation, Pagination], 
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },

  navigation: {
    nextEl: ".icon-right-open",
    prevEl: ".icon-left-open",
    },

  breakpoints: {
    1200: {
        slidesPerView: 3,
        spaceBetween: 5,
    },
    1920: {
        spaceBetween: 35,
        slidesPerView: 3,
        },
    },
   
});
} catch(e) {

}

try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Удаляем активный класс у всех табов и контента
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			contents.forEach((c) => (c.style.display = "none"));

			// Добавляем активный класс к нажатому табу и показываем соответствующий контент
			tab.classList.add("catalog__tab_active");
			contents[index].style.display = "flex";
		});
	});

	// Показываем первый контент при загрузке
	contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}

// Обратите внимание, что значение block (в двух местах) можно спокойно поменять на flex, если вам это необходимо

try {
const validator = new JustValidate('.touch__form');
validator.addField('#name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 2,
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
    },
    {
      rule: 'email'
    },
  ])
  .addField('#question', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 5,
    },
  ], {
    errorsContainer: document
      .querySelector('#question')
      .parentElement.querySelector('.error-message'),
  })
  .addField('#checkbox', [
    {
      rule: 'required',
    },
  ], {
    errorsContainer: document
      .querySelector('#checkbox')
      .parentElement.parentElement.querySelector('.checkbox-error-message'),
  })

  .onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
				});
		}); 
} catch (e) {}

try {
const validatorFooter = new JustValidate('.news__form');
validatorFooter.addField('#email-news', [
    {
      rule: 'required',
    },
    {
      rule: 'email'
    },
  ], {
    errorsContainer: document
      .querySelector('#email-news')
      .parentElement.querySelector('.error-email-footer-message'),
  })
  .addField('#checkbox-news', [
    {
      rule: 'required',
    },
  ], {
    errorsContainer: document
      .querySelector('#checkbox-news')
      .parentElement.parentElement.querySelector('.checkbox-error-message-footer'),
  });
} catch (e) {

}