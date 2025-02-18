//fungsi umtuk layar kalkulator
function appendValue(nilai){
    document.getElementById("display").value += nilai;
    console.log("nilai:" + nilai);
}
function clearDisplay(){
    document.getElementById("display").value ="";
    console.log("clear display");
}
//fumgsi umtuk melakukan kalkulasi
function calculate(){
    const display = document.getElementById("display");
    
    try{
        display.value = eval(display.value); //mulai menghitung
        console.log("hasil: + display.value");
    }catch{
        display.value = "hasil";
        console.log("hasil matematika");
    }
}
//fungsi hapus
function hapus(){
    display.value = display.value.slice(0, -1);
}
//fungsi hitung persen (menjadi bilangan sederhana)
function langsungHitungPersen(){
    const nilai = document.getElementById("display");

    try{
        const bilangan = parseFloat(nilai.value);
        nilai.value = bilangan / 100;
        console.log("persen:" + nilai.value);
    } catch {
        nilai.value = "error";
        console.log(nilai.value);
    }
}