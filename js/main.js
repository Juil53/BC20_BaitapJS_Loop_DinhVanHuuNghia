// BÀI TẬP 1
function demChanLe() {
    var soChan = "";
    var soLe = "";
    for (var i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }
    }
    document.getElementById("b1txtResult").innerHTML = "Số chẵn: " + soChan + "<br>" + "Số lẻ: " + soLe;
}
document.getElementById("b1btnResult").onclick = demChanLe;

// BÀI TẬP 2
function chiaHetCho3() {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count += 1;
        }
    }
    document.getElementById("b2txtResult").innerHTML = "Số chia hết cho 3 dưới 1000 là: " + count;
}
document.getElementById("b2btnResult").onclick = chiaHetCho3;

//BÀI TẬP 3
function soNguyenDuong() {
    var i = 0;
        for(var sum = 0; sum < 10000;i++)
            sum = (i*(i+1))/2;
    document.getElementById("b3txtResult").innerHTML = "Số nguyên dương nhỏ nhất: " + (i-1);
}
document.getElementById("b3btnResult").onclick = soNguyenDuong;

//BÀI TẬP 4
function tongLuyThua(){
    var soX = Number(document.getElementById("b4num1").value);
    var soN = Number(document.getElementById("b4num2").value);
    var result = 0;
    var sum = 0;
    for(var i = 1;i <= soN; i++){
        result = Math.pow(soX,i); 
        sum += result;
    }
    document.getElementById("b4txtResult").innerHTML ="TỔNG CÁC SỐ LŨY THỪA LÀ: " + sum;
}
document.getElementById("b4btnResult").onclick = tongLuyThua;

//BÀI TẬP 5
function tinhGiaiThua(){
    var soX = Number(document.getElementById("b5num1").value);
    var result =1;
    for(var i = 1; i <= soX; i++){
        result *= i;
    }
    document.getElementById("b5txtResult").innerHTML ="GIAI THỪA LÀ: " + result;
}
document.getElementById("b5btnResult").onclick = tinhGiaiThua;

// BÀI TẬP 6
function taoThe(){
    var content = document.getElementById("b6content");
    for(var i = 1; i <= 10; i++){
        var divChan = document.createElement("div");
        divChan.style.background = "red";
        divChan.style.color ="white";
        divChan.innerHTML ="div Chan";
        var divLe = document.createElement("div");
        divLe.style.background = "blue";
        divLe.style.color ="white";
        divLe.innerHTML = "div Le";
        if(i % 2 == 0){
            content.appendChild(divChan);
        } else {
            content.appendChild(divLe);
        }
    }
}
document.getElementById("b6btnResult").onclick = taoThe;



//BÀI TẬP 7
function kiemTra(num){
    if(num<2)  return false;
    for(var i =2; i<num; i++){
        if(num % i ==0)
            return false;
    }
    return true;
}
function inSoNguyenTo(){
    var soX = Number(document.getElementById("b7num1").value);
    var result ="";
    for(var i = 0; i < soX; i++){
       if(kiemTra(i))
       result += " " + i;
       document.getElementById("b7txtResult").innerHTML = result;
    }
}
document.getElementById("b7btnResult").onclick = inSoNguyenTo;