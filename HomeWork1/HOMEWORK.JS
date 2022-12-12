// Bài tập 1: Tiền lương nhân viên
// INPUT: Lương 1 ngày : 100.000 
// cho số liệu người dùng
// B1: Tạo biến tiền lương, nhân viên số ngày làm,tổng tiên luong
// B2: Gán giá trị cho từng biến
// B3: Gán phép tính vào biến tổng 
let wages ="100.000";
console.log(wages);
let agent ="31";
console.log(agent);
let sum = wages*agent;
console.log("Tổng =",sum);
// OUTPUT : Tổng tiền lương nhân viên

// Bài tập 2: Tính trung bình 5 số thực
// INPUT: có số thực,
// B1: Tạo các biến x có số thực,biến trung bình
// B2: Gán giá trị cho bién
// B3: Gán phép tính vào biến trung bình
let x1= 2;
console.log(x1);
let x2= 10;
console.log(x2);
let x3= 5;
console.log(x3);
let x4= 6;
console.log(x4);
let x5= 3;
console.log(x5);
let total = x1 + x2 + x3 + x4 + x5 
console.log("Tổng cộng =",total);
let medium = Math.floor(total/5) ;
console.log("Trung bình =",medium);
//OUTPUT: Trung bình của 5 số thực

//Bài tập 3: Quy đổi tiền
//INPUT:Tiền 1 usd bằng : 23.500vnd
//B1: Tạo biến usd,vnd
//B2: Gán giá trị usd,vnd
//B3: Gán phép tính vào totalvnd
let usd=3;
console.log(usd);
let vnd= 23.500;
console.log(vnd);
let totalvnd= Math.floor(usd*vnd);
console.log("Tổng tiền quy đổi =",totalvnd);
//OUTPUT: Số tổng tiền quy đổi vnd

//Bài tập 4:
//INPUT: AC,AB,CD,BD
//B1: Tạo biến AC,AB,CD,BD,TỔNG CHIỀU DÀI, TỔNG CHIỀU DÀI CHU VI, DIEN TICH
//B2: Gán giá trị cho từng biến
//B3: Gán phét tính cho CHU VI,DIEN TICH
let AB = 15;
console.log(AB);
let BC = 25;
console.log(BC);
let CD = 15;
console.log(CD);
let AD = 25;
console.log(AD);
let area = AB*BC;
console.log("DIỆN TÍCH =",area);
let perimeter =(AB+BC)*2;
console.log("CHU VI =",perimeter);
//OUTPUT: TÍNH DIỆN TÍCH, CHU VI

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