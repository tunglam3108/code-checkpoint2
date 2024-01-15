const products = [
    {
        "id": 1,
        "name": "Cây quất",
        "image": "../img/cay/cayquat.png",
        "price": 500000
    },
    {
        "id": 2,
        "name": "Cây mai",
        "image": "../img/cay/caymai.png",
        "price": 800000
    },
    {
        "id": 3,
        "name": "Cây lưỡi hổ",
        "image": "../img/cay/cayluoi.png",
        "price": 300000
    },
    {
        "id": 4,
        "name": "Cây phát tài",
        "image": "../img/cay/phattai.png",
        "price": 600000
    },
    {
        "id": 5,
        "name": "Cây đào",
        "image": "../img/cay/caydao.png",
        "price": 200000
    },
    {
        "id": 6,
        "name": "Cây phong lan",
        "image": "../img/cay/caylan.png",
        "price": 400000
    },
    {
        "id": 7,
        "name": "Cây tuyết mai",
        "image": "../img/cay/caytuyet.png",
        "price": 350000
    },
    {
        "id": 8,
        "name": "Cây bạch đàn",
        "image": "../img/cay/caybach.png",
        "price": 250000
    }
]

let productLis = document.querySelector(".product-list")
let sumOfProduct = ``;

let sum = 0
for (let key of products) {
  if (sum < 8) {
    sumOfProduct += `
    <div class="product">
                <div class="images"> <img src="${key.image}" alt=""></div>
                 <h3>${key.price}</h3>
                 <p>${key.name}</p>
                 <a href="chitiet.html">Xem thêm</a>
                </div>
    `;
  }
  sum++
}
console.log(sumOfProduct);

productLis.innerHTML = sumOfProduct