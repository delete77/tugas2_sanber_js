const prompt = require('prompt-sync')({ sigint: true });

function akarPangkatDua(x) {
    // Cek apakah x negatif
    if (x < 0) {
        throw new Error("Tidak bisa input bilangan negatif");
    }
    // Cek apakah x ganjil
    if (x % 2 !== 0) {
        throw new Error("Tidak bisa input bilangan ganjil");
    }
    // Hitung akar pangkat dua dari x
    return Math.sqrt(x);
}

try {
    // User input
    let Input = prompt("Masukkan bilangan genap positif:");

    // Parse input menjadi angka
    let angka = parseInt(Input);

    // Memanggil fungsi akarPangkatDua dengan input dari user
    let hasil = akarPangkatDua(angka);

    // Menampilkan hasil
    console.log("Akar pangkat dua dari", angka, "adalah:", hasil);
} catch (error) {
    // Menangkap error dan menampilkan pesan error
    console.log(error.message);
}
