// Tampilkan bagian kalkulator segitiga dan sembunyikan jajar genjang
document.getElementById('triangle-btn').addEventListener('click', function() {
    document.getElementById('triangle-section').style.display = 'block';
    document.getElementById('parallelogram-section').style.display = 'none';
});

// Tampilkan bagian kalkulator jajar genjang dan sembunyikan segitiga
document.getElementById('parallelogram-btn').addEventListener('click', function() {
    document.getElementById('triangle-section').style.display = 'none';
    document.getElementById('parallelogram-section').style.display = 'block';
});

function segitiga() {
    document.getElementById('hasil Keli').innerHTML=parseFloat(ac.value)+parseFloat(bc.value*2);
    document.getElementById('hasil Luas').innerHTML=parseFloat(alas.value)*parseFloat(tinggi.value)/2;
}

// Hitung luas dan keliling jajar genjang
function calculateParallelogram() {
    const base = parseFloat(document.getElementById('alas-jjrgjg').value);
    const height = parseFloat(document.getElementById('tinggi-jjrgjg').value);
    const side = parseFloat(document.getElementById('miring-jjrgjg').value);

    if (isNaN(base) || isNaN(height) || isNaN(side) || base <= 0 || height <= 0 || side <= 0) {
        alert('Harap masukkan nilai yang valid.');
        return;
    }

    const area = base * height;
    const perimeter = 2 * (base + side);

    document.getElementById('parallelogram-result').innerHTML = `
        <h3>Hasil Perhitungan Jajar Genjang</h3>
        <p><b>Luas:</b> ${area.toFixed(2)}</p>
        <p><b>Keliling:</b> ${perimeter.toFixed(2)}</p>
    `;
}

