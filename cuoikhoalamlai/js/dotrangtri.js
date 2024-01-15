const products = [
    {
        "id": 1,
        "name": "Đèn lồng hình hoa đào",
        "image": "../img/dotrangtri/longden.png",
        "price": 150000
    },
    {
        "id": 2,
        "name": "Bàn thờ phong cách truyền thống",
        "image": "../img/dotrangtri/bantho.png",
        "price": 500000
    },
    {
        "id": 3,
        "name": "Tranh treo tường nghệ thuật Tết",
        "image": "../img/dotrangtri/tranhrong.png",
        "price": 300000
    },
    {
        "id": 4,
        "name": "Cây mai giả cao cấp",
        "image": "../img/dotrangtri/maigia.png",
        "price": 800000
    },
    {
        "id": 5,
        "name": "Bộ trang trí cổng hoa mai vàng",
        "image": "../img/dotrangtri/cong.png",
        "price": 1200000
    },
    {
        "id": 6,
        "name": "Hoa quả trang trí Tết",
        "image": "../img/dotrangtri/qua.png",
        "price": 200000
    },
    {
        "id": 7,
        "name": "Bộ trang trí cây Tết",
        "image": "../img/dotrangtri/treocay.png",
        "price": 600000
    },
    {
        "id": 8,
        "name": "Khung hình trang trí Tết",
        "image": "../img/dotrangtri/khunganh.png",
        "price": 100000
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