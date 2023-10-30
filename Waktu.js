function tampilkanWaktuIndonesia() {
    const waktuSekarang = new Date();
    const jam = waktuSekarang.getHours().toString().padStart(2,'0');
    const menit = waktuSekarang.getMinutes().toString().padStart(2,'0');
    const detik = waktuSekarang.getSeconds().toString().padStart(2,'0');
    const waktu = jam + ':' + menit + ":" + detik;

    const elemenWaktu = document.getElementById('Date').textContent = "Pukul : " + waktu + " WIB"
}
tampilkanWaktuIndonesia();

setInterval(tampilkanWaktuIndonesia, 1000);