const getList = document.querySelector(".list2");
const getBtn = document.querySelector(".btn");
const getTotelP = document.querySelector(".total-count");
const getPrice = document.querySelector(".total-price");
const getBtn2 = document.querySelector(".btn2");
const getCount2 = document.querySelector(".total-price2");
const getPrice2 = document.querySelector(".total-count2");
const getBtn3 = document.querySelector(".btn3");
const getPrice3 = document.querySelector(".total-price3");
const getCount3 = document.querySelector(".total-count3");
const getTotalC = document.querySelector(".title");
const getTotalP = document.querySelector(".title2");

getBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let sum = 0;
  let all = 0;
  let totalPrice = 0;
  let totalCount = 0;

  const createItem = document.createElement("li");
  createItem.classList.add("item2");

  const createImg = document.createElement("img");
  createImg.classList.add("image2");
  createItem.appendChild(createImg);

  const createInList = document.createElement("ul");
  createInList.classList.add("inner-text2");
  createItem.appendChild(createInList);

  const createInIt = document.createElement("li");
  createInIt.classList.add("inner-item2");
  createInIt.innerHTML =
    "IPhone 14 pro" + " " + "Color: Gold" + " " + "Region: LLA";
  createInList.appendChild(createInIt);

  const createBlock2 = document.createElement("div");
  createItem.appendChild(createBlock2);

  const createcount2 = document.createElement("strong");
  createcount2.classList.add("count2");
  createBlock2.appendChild(createcount2);

  getList.appendChild(createItem);

  getBtn.classList.add("button");

  document.querySelector(".button").disabled = true;

  const createBtn = document.createElement("button");
  createBtn.classList.add("addbtn");
  createBtn.innerHTML = "+";
  createItem.appendChild(createBtn);

  const createMinus = document.createElement("button");
  createMinus.classList.add("createminus");
  createMinus.innerHTML = "-";
  createItem.appendChild(createMinus);

  const createDelete = document.createElement("button");
  createDelete.classList.add("delete");
  createDelete.innerHTML = "X";
  createItem.appendChild(createDelete);

  const createInC = document.createElement("div");
  createInC.classList.add("innercount");
  createItem.appendChild(createInC);

  createMinus.addEventListener("click", () => {
    sum -= 1;
    all -= 1700;

    if (sum >= 0 && all >= 0) {
      getTotelP.innerHTML = "IPhone count: " + sum;
      getPrice.innerHTML = "IPhone price: " + "$" + all;
    } else {
      createItem.remove();
      document.querySelector(".button").disabled = false;
    }
  });

  createBtn.addEventListener("click", () => {
    sum += 1;
    all += 1700;

    getTotelP.innerHTML = "IPhone count: " + sum;
    getPrice.innerHTML = "IPhone price: " + "$" + all;
  });

  createDelete.addEventListener("click", () => {
    document.querySelector(".button").disabled = false;
    createItem.remove();

    getTotelP.innerHTML = "IPhone count: " + `${(sum = 0)}`;
    getPrice.innerHTML = "IPhone price: " + "$" + `${(all = 0)}`;
  });
});

getBtn2.addEventListener("click", (y) => {
  y.preventDefault();

  let sum = 0;
  let all = 0;

  const createItem = document.createElement("li");
  createItem.classList.add("item2");

  const createImg = document.createElement("img");
  createImg.classList.add("image3");
  createItem.appendChild(createImg);

  const createInList = document.createElement("ul");
  createInList.classList.add("inner-text2");
  createItem.appendChild(createInList);

  const createInIt = document.createElement("li");
  createInIt.classList.add("inner-item2");
  createInIt.innerHTML =
    "Redmi 11 pro" + " " + "Color: blue" + " " + "Region: KHA";
  createInList.appendChild(createInIt);

  const createBlock2 = document.createElement("div");
  createItem.appendChild(createBlock2);

  const createcount2 = document.createElement("strong");
  createcount2.classList.add("count2");
  createBlock2.appendChild(createcount2);

  getList.appendChild(createItem);

  getBtn2.classList.add("button2");

  document.querySelector(".button2").disabled = true;

  const createBtn = document.createElement("button");
  createBtn.classList.add("addbtn");
  createBtn.innerHTML = "+";
  createItem.appendChild(createBtn);

  const createMinus = document.createElement("button");
  createMinus.classList.add("createminus");
  createMinus.innerHTML = "-";
  createItem.appendChild(createMinus);

  const createDelete = document.createElement("button");
  createDelete.classList.add("delete");
  createDelete.innerHTML = "X";
  createItem.appendChild(createDelete);

  const createInC = document.createElement("div");
  createInC.classList.add("innercount");
  createItem.appendChild(createInC);

  createMinus.addEventListener("click", () => {
    sum -= 1;
    all -= 400;
    if (sum >= 0 && all >= 0) {
      getCount2.innerHTML = "Redmi count: " + sum;
      getPrice2.innerHTML = "Redmi price: " + "$" + all;
    } else {
      createItem.remove();
      document.querySelector(".button2").disabled = false;
    }
  });

  createBtn.addEventListener("click", () => {
    sum += 1;
    all += 400;

    getCount2.innerHTML = "Redmi count: " + sum;
    getPrice2.innerHTML = "Redmi price: " + "$" + all;
  });

  createDelete.addEventListener("click", () => {
    document.querySelector(".button2").disabled = false;
    createItem.remove();

    getCount2.innerHTML = "Redmi count: " + `${(sum = 0)}`;
    getPrice2.innerHTML = "Redmi price: " + "$" + `${(all = 0)}`;
  });
});

getBtn3.addEventListener("click", (h) => {
  h.preventDefault();

  let sum = 0;
  let all = 0;

  const createItem = document.createElement("li");
  createItem.classList.add("item2");

  const createImg = document.createElement("img");
  createImg.classList.add("image4");
  createItem.appendChild(createImg);

  const createInList = document.createElement("ul");
  createInList.classList.add("inner-text2");
  createItem.appendChild(createInList);

  const createInIt = document.createElement("li");
  createInIt.classList.add("inner-item2");
  createInIt.innerHTML =
    "Samsung A52" + " " + "Color: ligthblue" + " " + "Region: DU";
  createInList.appendChild(createInIt);

  const createBlock2 = document.createElement("div");
  createItem.appendChild(createBlock2);

  const createcount2 = document.createElement("strong");
  createcount2.classList.add("count2");
  createBlock2.appendChild(createcount2);

  getList.appendChild(createItem);

  getBtn3.classList.add("button3");

  document.querySelector(".button3").disabled = true;

  const createBtn = document.createElement("button");
  createBtn.classList.add("addbtn");
  createBtn.innerHTML = "+";
  createItem.appendChild(createBtn);

  const createMinus = document.createElement("button");
  createMinus.classList.add("createminus");
  createMinus.innerHTML = "-";
  createItem.appendChild(createMinus);

  const createDelete = document.createElement("button");
  createDelete.classList.add("delete");
  createDelete.innerHTML = "X";
  createItem.appendChild(createDelete);

  const createInC = document.createElement("div");
  createInC.classList.add("innercount");
  createItem.appendChild(createInC);

  createMinus.addEventListener("click", () => {
    sum -= 1;
    all -= 700;
    if (sum >= 0 && all >= 0) {
      getCount3.innerHTML = "Samsung count: " + sum;
      getPrice3.innerHTML = "Samsung price: " + "$" + all;
    } else {
      createItem.remove();
      document.querySelector(".button3").disabled = false;
    }
  });

  createBtn.addEventListener("click", () => {
    sum += 1;
    all += 700;

    getCount3.innerHTML = "Samsung count: " + sum;
    getPrice3.innerHTML = "Samsung price: " + "$" + all;
  });

  createDelete.addEventListener("click", () => {
    document.querySelector(".button3").disabled = false;
    createItem.remove();

    getCount3.innerHTML = "Samsung count: " + `${(sum = 0)}`;
    getPrice3.innerHTML = "Samsung price: " + "$" + `${(all = 0)}`;
  });
});
