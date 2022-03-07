function angka1 (){
    let frm = document.getElementById("formulir")
    frm.a1.value ="";
}
function angka2 (){
    let frm = document.getElementById("formulir")
    frm.a2.value ="";
}
function kosongAll(){
    let frm = document.getElementById ("formulir")
    frm.a1.value="";
    frm.a2.value="";
    frm.hasil.value="";
}

function ftambah (){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;

    if (isNaN(a1) || a1 == ''){
        alert ("Data angka 1 salah , Masukkan Ulang angka!");
        
    }
    else if (isNaN (a2) || a2 ==''){    
        alert ("Data angka 2 salah , Masukkan Ulang angka!");
    }
    else {

    let tambah = Number (a1) +Number (a2) ;
    frm.hasil.value = tambah;
    }
}
function fkurang (){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;

    if (isNaN(a1) || a1 == ''){
        alert ("Data angka 1 salah , Masukkan Ulang angka!");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Data angka 2 salah , Masukkan Ulang angka!");
    }
    else {

    let kurang = Number (a1) - Number (a2) ;
    frm.hasil.value = kurang;
    }
}

function fbagi (){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;

    if (isNaN(a1) || a1 == ''){
        alert ("Data angka 1 salah");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Data angka 2 salah , Masukkan Ulang angka!");
    }
    else {

    let bagi = Number (a1) / Number (a2) ;
    frm.hasil.value = bagi;
    }
}
function fkali (){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;

    if (isNaN(a1) || a1 == ''){
        alert ("Data angka 1 salah , Masukkan Ulang angka!");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Data angka 2 salah , Masukkan Ulang angka!");
    }
    else {

    let kali = Number (a1) * Number (a2) ;
    frm.hasil.value = kali;

    }
}

function fpangkat(){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;

    if (isNaN(a1) || a1 == ''){
        alert ("Data angka 1 salah , Masukkan Ulang angka!");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Data angka 2 salah , Masukkan Ulang angka!");
    }
    else {

    let pangkat = Math.pow(Number (a1),Number (a2)) ;
    frm.hasil.value = pangkat;

   
    }
}


