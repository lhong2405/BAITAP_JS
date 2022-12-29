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


//BÀI TẬP JS 4
//BAI TAP 1
//INPUT NHẬP NGÀY THÁNG NĂM
//TẠO BIẾN NGÀY THÁNG NĂM IF-ELSE
//OUTPUT: TẠO RA HIỆN NGÀY HÔM QUA VÀ NGÀY HÔM KIA
  document.getElementById("datebefore").onclick = function () {
    let yesterdayDate = today.valueAsDate;
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    let day = yesterdayDate.getDate();
    let month = yesterdayDate.getMonth() + 1;
    let year = yesterdayDate.getFullYear();
    daybefore = month + "/" + day + "/" + year;
    document.getElementById("bt1").value = daybefore;
  };
  
  document.getElementById("dateafter").onclick = function () {
    let tomorrowDate = today.valueAsDate;
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    let day = tomorrowDate.getDate();
    let month = tomorrowDate.getMonth() + 1;
    let year = tomorrowDate.getFullYear();
    dayafter = month + "/" + day + "/" + year;
    document.getElementById("bt1").value = dayafter;
  };
    



//BAI TAP 2
document.getElementById("btntinh").onclick = function () {
    let day = 0;
    let moth2E = +document.getElementById("month2").value;
    let year2E = +document.getElementById("year2").value;
    if (moth2E > 12 && moth2E < 1) {
      alert("Tháng phải lớn hơn 0 và nhỏ hơn 13");
    } else if (year2E < 1900) {
      alert("năm phải lớn hơn 1900");
    }
    if (year2E % 4 == 0) {
      switch (moth2E) {
        case 1:
          day = 31;
          break;
        case 2:
          day = 29;
          break;
        case 3:
          day = 31;
          break;
        case 4:
          day = 30;
          break;
        case 5:
          day = 31;
          break;
        case 6:
          day = 30;
          break;
        case 7:
          day = 31;
          break;
        case 8:
          day = 31;
          break;
        case 9:
          day = 30;
          break;
        case 10:
          day = 31;
          break;
        case 11:
          day = 30;
          break;
        case 12:
          day = 31;
          break;
      }
    } else {
      switch (moth2E) {
        case 1:
          day = 31;
          break;
        case 2:
          day = 28;
          break;
        case 3:
          day = 31;
          break;
        case 4:
          day = 30;
          break;
        case 5:
          day = 31;
          break;
        case 6:
          day = 30;
          break;
        case 7:
          day = 31;
          break;
        case 8:
          day = 31;
          break;
        case 9:
          day = 30;
          break;
        case 10:
          day = 31;
          break;
        case 11:
          day = 30;
          break;
        case 12:
          day = 31;
          break;
      }
    };
    document.getElementById("btnbai2").value =  + day + " ngày";
  };

//BAI TAP 3:
document.getElementById("read").onclick = function () {
    let number3El = +document.getElementById("number3").value;
    if (number3El < 100 || number3El > 999) {
      alert("Dữ liệu không hợp lệ");
    }
    let a1 = number3El % 10;
    let text1 = "1";
    switch (a1) {
      case 1:
        text1 = "một";
        break;
      case 2:
        text1 = "hai";
        break;
      case 3:
        text1 = "ba";
        break;
      case 4:
        text1 = "bốn";
        break;
      case 5:
        text1 = "năm";
        break;
      case 6:
        text1 = "sáu";
        break;
      case 7:
        text1 = "bảy";
        break;
      case 8:
        text1 = "tám";
        break;
      case 9:
        text1 = "chín";
        break;
    }
    number3El = number3El / 10;
    number3El = Math.floor(number3El);
    let a2 = number3El % 10;
    let text2 = "1";
    switch (a2) {
      case 1:
        text2 = "một";
        break;
      case 2:
        text2 = "hai";
        break;
      case 3:
        text2 = "ba";
        break;
      case 4:
        text2 = "bốn";
        break;
      case 5:
        text2 = "năm";
        break;
      case 6:
        text2 = "sáu";
        break;
      case 7:
        text2 = "bảy";
        break;
      case 8:
        text2 = "tám";
        break;
      case 9:
        text2 = "chín";
        break;
    }
    number3El = number3El / 10;
    number3El = Math.floor(number3El, 0);
    let a3 = number3El;
    let text3 = "";
    switch (a3) {
      case 1:
        text3 = "một";
        break;
      case 2:
        text3 = "hai";
        break;
      case 3:
        text3 = "ba";
        break;
      case 4:
        text3 = "bốn";
        break;
      case 5:
        text3 = "năm";
        break;
      case 6:
        text3 = "sáu";
        break;
      case 7:
        text3 = "bảy";
        break;
      case 8:
        text3 = "tám";
        break;
      case 9:
        text3 = "chín";
        break;
    }
    if (a1 == 0 && a2 == 0) {
      document.getElementById("btnbai3").value = text3 + " trăm ";
    } else if (a1 == 0 && a2 != 0) {
      document.getElementById("btnbai3").value =
        text3 + " trăm " + text2 + " mươi ";
    } else if (a1 != 0 && a2 == 0) {
      document.getElementById("btnbai3").value = text3 + " trăm  lẻ " + text1;
    } else {
      document.getElementById("btnbai3").value =
     text3 + " trăm " + text2 + " mươi " + text1;
    }
  };

  //Bài tâp 4:
  document.getElementById("find").onclick = function () {
    let xsv1 = +document.getElementById("xsv1").value;
    let ysv1 = +document.getElementById("ysv1").value;
    let xsv2 = +document.getElementById("xsv2").value;
    let ysv2 = +document.getElementById("ysv2").value;
    let xsv3 = +document.getElementById("xsv3").value;
    let ysv3 = +document.getElementById("ysv3").value;
    let x4 = +document.getElementById("x4").value;
    let y4 = +document.getElementById("y4").value;
    console.log(y4);
    let d1 = (xsv1 - x4) * (xsv1 - x4) + (ysv1 - y4) * (ysv1 - y4);
    d1 = Math.sqrt(d1, 2);
    console.log(d1);
    let d2 = (xsv2 - x4) * (xsv2 - x4) + (ysv2 - y4) * (ysv2 - y4);
    d2 = Math.sqrt(d2, 2);
    let d3 = (xsv3 - x4) * (xsv3 - x4) + (ysv3 - y4) * (ysv3 - y4);
    d3 = Math.sqrt(d3, 2);
    if (d1 > d2 && d1 > d3) {
      let namesv1 = document.getElementById("namesv1").value;
      document.getElementById("btnbai4").value =
         namesv1;
    }
    if (d2 > d1 && d2 > d3) {
      let namesv2 = document.getElementById("namesv2").value;
      document.getElementById("btnbai4").value =
         namesv2;
    }
    if (d3 > d1 && d3 > d2) {
      let namesv3 = document.getElementById("namesv3").value;
      document.getElementById("btnbai4").value =
         namesv3;
    }
  };

//BÀI TẬP 5: 
document.getElementById("btn5").onclick = function(){
    let num1 = +document.getElementById("num1").value
    let num2 = +document.getElementById("num2").value
    let num3 = +document.getElementById("num3").value
    if (num1 >= num2){
        let tmp1 = num1
        num1 = num2
        num2 = tmp1
    }
    if(num2 >= num3){
        let tmp2 = num2
        num2 = num3
        num3 = tmp2
    }
    if (num1 >= num2){
        let tmp1 = num1
        num1 = num2
        num2 = tmp1
    }
    document.getElementById("btnbai5").value = num1 + " " + num2 + " " + num3
}


// BÀI TAP 6 
function ex1() {
    let family = document.getElementById("family").value;
    let hi;
    switch (family) {
      case "B":
        hi = "hi sugar daddy";
        break;
      case "M":
        hi = "hiii mommm";
        break;
      case "E":
        hi = "hi girlssss";
        break;
      case "A":
        hi = "hii brooo";
        break;
      default:
        hi = "nope";
        break;
    }
    document.getElementById("btnbai6").value = hi;
  }
// BAI TAP 7 :
document.getElementById("đem").onclick = function(){
    let n1 = +document.getElementById("name1").value
    let n2 = +document.getElementById("name2").value
    let n3 = +document.getElementById("name3").value
    let odd = 0;
    let even = 0;
    if(n1 % 2 == 0){
        even++;
    }else{
        odd++
    }
    if(n2 % 2 == 0){
        even++;
    }else{
        odd++
    }
    if(n3 % 2 == 0){
        even++;
    }else{
        odd++
    }
    document.getElementById("btnbai7").value = "Có " + even + " số chẵn và "+ odd +" số lẻ" 
}    


   
//BAI TAP 8: 
document.getElementById('btn_bt8').onclick = function(){
   let canh1El=  +document.getElementById("canh1").value
   let canh2El=  +document.getElementById("canh2").value
   let canh3El=  +document.getElementById("canh3").value

   let btnbai8 = 0
   if (canh1El===canh2El && canh2===canh3){
    btnbai8 = 'tam giác đều'
   }
   else {
    if (  
        canh1 ^ (2 == canh2) ^ (2+canh3) ^2 || 
        canh2 ^ (2 == canh1) ^ (2+canh3) ^2 ||
        canh3 ^ (2 == canh1) ^ (2+canh2) ^2 
    ) 
    {
        btnbai8 = "tam giác vuông"
    }
    if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3 ) {
        btnbai8= "tam giác cân"   
    } else {
        btnbai8 = "tam giác thường"  
    }
}
document.getElementById('btnbai8').value= btnbai8
}

// JS 5 BÀI 1 

//bài tập 1:
//input: điểm chuẩn, điểm 3 môn, khu vực (A,B,C,X), loại đối tượng (1,2,3,0)

//porcess:
//bước 1: lấy input (user interface UI)
//bước 2: tính điểm ưu tiên
//2.1: theo khu vực (if else)
//2.2: theo đối tượng (if else)
//bước 3: tính tổng điểm = điểm 3 môn + điểm ưu tiên
//bước 4: kiểm tra kết quả: (if else)
//output: tính tổng điểm, kết quả

// có 2 cách để làm function
// cách 1:
//input:area => return điểm
function calcAreaGrade(area) {
    switch (area) {
      case "A":
        return 2;
        break;
  
      case "B":
        return 1;
        break;
  
      case "C":
        return 0.5;
        break;
      default:
        return 0;
        break;
    }
  }
   //input:type => return điểm
  // function calcTypeGrade(tpye) {
  //   switch (type) {
  //     case "1":
  //       return 2.5;
  //       break;
  
  //     case "2":
  //       return 1.5;
  //       break;
  //     case "3":
  //       return 1;
  //       break;
  //     default:
  //       break;
  //   }
  // }
 
  
  function ex1() {
    let txtStandardGrade = +document.getElementById("txtStandardGrade").value;
    let txtSubject1 = +document.getElementById("txtSubject1").value;
    let txtSubject2 = +document.getElementById("txtSubject2").value;
    let txtSubject3 = +document.getElementById("txtSubject3").value;
    let area = document.getElementById("area").value;
    let type = document.getElementById("type").value;
    let result= document.getElementById("grade_result");
    let totalGrade = 0;
    let areaGrade = calcAreaGrade(area);
    let typeGrade = 0;
    switch (type) {
      case "1":
        typeGrade = 2.5;
        break;
  
      case "2":
        typeGrade = 1.5;
        break;
      case "3":
        typeGrade = 1;
        break;
      default:
        break;
    }
    totalGrade = txtSubject1 + txtSubject2 + txtSubject3 + areaGrade + typeGrade;
    if (
      txtSubject1 > 0 &&
      txtSubject2 > 0 &&
      txtSubject3 > 0 &&
      totalGrade >= txtStandardGrade
    )
        result.value= "Đậu " + totalGrade;
    else
        result.value= "Rớt " + totalGrade;
    
  }
// bài 2 :
function $(id) {
    return window.document.getElementById(id);
}

function ex5_2(){
    let kw= $("value2").value;
    let total= 0;
    const price1= 500;
    const price2= 650;
    const price3= 850;
    const price4= 1100;
    const price5 = 1300;
    let result= $("totalprice");

    if(kw <= 50)
        total += kw * price1;
    else {
        kw -= 50;
        total += 50 * price1;

        if (kw <= 50)
            total += kw * price2;
        else {
            kw -= 50;
            total += 50 * price2;

            if (kw <= 100)
                total += kw * price3;
            else {
                kw -= 100;
                total += 100 * price3;

                if (kw <= 150)
                    total +=  kw * price4;
                else {
                    kw -= 150;
                    total += 150 * price4 + kw * price5;
                }
            }
        }
        
    }
    result.value= total;
}

function ex5_3() {
    let tongthunhap= $("vat3").value;
    let songuoiphuthuoc= $("people3").value;
    let result= $("totalvat");

    let thunhapchiuthue= tongthunhap - 4e+6 - songuoiphuthuoc * 1.6e+6;
    if (thunhapchiuthue < 0)
        thunhapchiuthue= 0;
    let thuesuat= 0;

    if (thunhapchiuthue <= 60e+6)
        thuesuat= 0.05;
    else if (thunhapchiuthue <= 120e+6)
        thuesuat= 0.1;
    else if (thunhapchiuthue <= 210e+6)
        thuesuat= 0.15;
    else if (thunhapchiuthue <= 384e+6)
        thuesuat= 0.2;
    else if (thunhapchiuthue <= 624e+6)
        thuesuat= 0.25;
    else if (thunhapchiuthue <= 960e+6)
        thuesuat= 0.3;
    else
        thuesuat= 0.35;

    let thue= thunhapchiuthue * thuesuat;
    result.value= thue;      
}

$("connection4").style.display= "none";

function displayconnection () {
    let loaikhachhang= $("custtype4").value;
    if (loaikhachhang == ""  || loaikhachhang == "home")
        $("connection4").style.display= "none";
    else
        $("connection4").style.display= "inline";
}

function ex5_4() {
    let loaikhachhang= $("custtype4").value;
    let sokenhcaocap= $("premium4").value;
    let soketnoi= $("connection4").value;
    let result= $("totalfee4");
    let phixulyhoadon= 0;
    let phidichvucoban= 0;
    let phithuekenhcaocap= 0;
    let tiencap= 0;

    switch(loaikhachhang) {
        case "home":
            phixulyhoadon= 4.5;
            phidichvucoban= 20.5;
            phithuekenhcaocap= sokenhcaocap * 7.5;
            break;
        case "company":
            phixulyhoadon= 15;
            if (soketnoi <= 10)
                phidichvucoban= 75;
            else
                phidichvucoban= (soketnoi - 10 ) * 5 + 75;
            phithuekenhcaocap= sokenhcaocap * 50;
    }

    tiencap= phixulyhoadon + phithuekenhcaocap + phidichvucoban;
    result.value= tiencap + " $";
}