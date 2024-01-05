const products = [
    {
      id: 1,
      name: "Câu đối tết",
      price: 50.000,
      image: "../img/caudoitet.png"
    },
    {
      id: 2,
      name: "Đồ trang trí cây",
      price: 50.000,
      image: "../img/dotrangtricay.png"
    },
    {
      id: 3,
      name: "Khung trang trí",
      price: 50.000,
      image: "../img/khungtrangtri.png"
    },
    {
      id: 4,
      name: "Cây đào",
      price: 50.000,
      image: "../img/caydao.png"
    },
    {
      id: 5,
      name: "Cây mai",
      price: 499,
      image: "../img/caymai.png"
    },
    {
      id: 6,
      name: "Cây quất",
      price: 149,
      image: "../img/cayquat.png"
    }
  ];
  



let boxMember = document.querySelector(".box-member")
let sumOfProduct=``;

let sum =0
for(let key of products){
  if(sum<3){
    sumOfProduct += `
    <div class="img-box">
               <div class="img-cake"><img src="${key.image}" class="img" alt=""></div>
               <div class="text">
                 <p>${key.name}</p>
                 <p>Giá: ${key.price} vđ</p>
                 <div class="text-box">
                   <button type="submit"><a href="trangcon.html">Xem</a></button>
                 </div>
               </div>
             </div>
    `;
  }
 sum++
}
console.log(sumOfProduct);

boxMember.innerHTML = sumOfProduct