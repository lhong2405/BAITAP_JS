// Bài tập 1: Tiền lương nhân viên
// INPUT: Lương 1 ngày : 100.000 
// cho số liệu người dùng
// B1: Tạo biến tiền lương, nhân viên số ngày làm,tổng tiên luong
// B2: Gán giá trị cho từng biến
// B3: Gán phép tính vào biến tổng 
// OUTPUT : Tổng tiền lương nhân viên

document.getElementById("total").onclick = function (e){
    e.preventDefault();
    let wagesEl = +document.getElementById("wages").value
    let agentEl = +document.getElementById("agent").value
    let result= wagesEl*agentEl;
    document.getElementById("result").value = result
}




// Bài tập 2: Tính trung bình 5 số thực
// INPUT: có số thực,
// B1: Tạo các biến x có số thực,biến trung bình
// B2: Gán giá trị cho bién
// B3: Gán phép tính vào biến trung bình
//OUTPUT: Trung bình của 5 số thực

document.getElementById("totalbaitap2").onclick = function (){
    
    let wagesEl1 = +document.getElementById("wages1").value
    let wagesEl2 = +document.getElementById("wages2").value
    let wagesEl3 = +document.getElementById("wages3").value
    let wagesEl4 = +document.getElementById("wages4").value
    let wagesEl5 = +document.getElementById("wages5").value
    let baitap2EL=(wagesEl1+wagesEl2+wagesEl3+wagesEl4+wagesEl5)/5;
    document.getElementById("baitap2").value = baitap2EL
}

//Bài tập 3: Quy đổi tiền
//INPUT:Tiền 1 usd bằng : 23.500vnd
//B1: Tạo biến usd,vnd
//B2: Gán giá trị usd,vnd
//B3: Gán phép tính vào totalvnd
// let usd=3;
// console.log(usd);
// let vnd= 23.500;
// console.log(vnd);
// let totalvnd= Math.floor(usd*vnd);
// console.log("Tổng tiền quy đổi =",totalvnd);


document.getElementById("rate").onclick = function (){ 
    let USDEl = +document.getElementById("USD").value
    let VNDEL= USDEl*24_390 ;
    document.getElementById("VND").value = VNDEL
}

//OUTPUT: Số tổng tiền quy đổi vnd

//Bài tập 4:
//INPUT: AC,AB,CD,BD
//B1: Tạo biến AC,AB,CD,BD,TỔNG CHIỀU DÀI, TỔNG CHIỀU DÀI CHU VI, DIEN TICH
//B2: Gán giá trị cho từng biến
//B3: Gán phét tính cho CHU VI,DIEN TICH
// let AB = 15;
// console.log(AB);
// let BC = 25;
// console.log(BC);
// let CD = 15;
// console.log(CD);
// let AD = 25;
// console.log(AD);
// let area = AB*BC;
// console.log("DIỆN TÍCH =",area);
// let perimeter =(AB+BC)*2;
// console.log("CHU VI =",perimeter);
//OUTPUT: TÍNH DIỆN TÍCH, CHU VI
document.getElementById('totalchuvi').onclick = function (){
    let ABEl = +document.getElementById('AB').value;
    let BCEl = +document.getElementById('BC').value;
    let chuviEl = (ABEl+BCEl)*2;
    document.getElementById('chuvi').value= chuviEl;
}
 
document.getElementById('totaldientich').onclick = function (){
    let ABEl = +document.getElementById('AB').value;
    let BCEl = +document.getElementById('BC').value;
    let dientichEl = ABEl*BCEl;
    document.getElementById('dientich').value= dientichEl
}
//Bài tập 5:
//INPUT: 1 biến có 2 chữ số,hàng đơn vị, hàng chục
//B1:Tạo biến x
//B2:Gán phép tính vào x và totalx
let x = 35;
console.log(x);
let hangchuc = x%10
console.log(hangchuc);
let hangdv = Math.floor(x/10);
console.log(hangdv);
let totalx = hangchuc+hangdv;
console.log("Tổng x =",totalx);
//OUTPUT: Tổng 2 biến cộng lại;
document.getElementById('numberbtn').onclick= function(){
let NUMBERRL = +document.getElementById('NUMBER').value;
let hangchuc = NUMBERRL%10
console.log(hangchuc);
let hangdv = Math.floor(NUMBERRL/10);
console.log(hangdv);
let totalx= hangchuc+hangdv;
document.getElementById('totalnumber').value= totalx
}

