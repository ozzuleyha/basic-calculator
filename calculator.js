function yazdir(deger) {
    document.getElementById("gosterge").value += deger;
}

function cozum() {
    let islem = document.getElementById("gosterge").value;
    let sonuc = eval(islem);

    if (sonuc == null) {
        document.getElementById("gosterge").value = 0;
    }
    else
        document.getElementById("gosterge").value = sonuc;
}

function temizle() {
    document.getElementById("gosterge").value = "";
}