const App = {
  data() {
    return {
      counter: "ᐳ",
      counter_o: "ᐯ",
      show_kat: false,
      show_cen: false,
      show_mat: false,
      on_kat: true,
      on_cen: true,
      on_mat: true,
    };
  },
};

const menuTovarVue = {
  data() {
    return {
      showMenuVisuble: true,
      showMenuOtVisuble: false,
    };
  },
  methods: {
    showMenu() {
      this.showMenuVisuble = true;
      this.showMenuOtVisuble = false;
    },
    showMenuOt() {
      this.showMenuVisuble = false;
      this.showMenuOtVisuble = true;
    },
  },
};

const basketVue = {
  data() {
    return {
      count: 1,
      priceTovar: "545",
      sumTovar: 0,
      showBye: true,
    };
  },
  methods: {
    byeOpen() {
      this.showBye = true;
    },
  },
};

Vue.createApp(App).mount("#App");
Vue.createApp(menuTovarVue).mount("#menuTovarVue");
Vue.createApp(basketVue).mount("#basketVue");

let burgerBtn = document.querySelector(".burger");
let menuBurger = document.querySelector(".menu");
let btnClose = document.querySelector(".btn-menu-close");

burgerBtn.addEventListener("click", function () {
  menuBurger.classList.add("active");
  document.body.classList.add("body_active");
});

btnClose.addEventListener("click", () => {
  menuBurger.classList.remove("active");
  document.body.classList.remove("body_active");
});

let burgerBtnFilter = document.querySelector(".btn-filter-open");
let menuBurgerFilter = document.querySelector(".shop-item-filter");
let btnCloseFilter = document.querySelector(".close-filter");

burgerBtnFilter.addEventListener("click", function () {
  menuBurgerFilter.classList.add("active");
  document.body.classList.add("body_active");
});

btnCloseFilter.addEventListener("click", () => {
  menuBurgerFilter.classList.remove("active");
  document.body.classList.remove("body_active");
});
