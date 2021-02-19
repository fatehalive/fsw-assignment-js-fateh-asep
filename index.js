// DIKETAHUI
// ======================================================================================
let numbers = [20, 30, 40, 50, 60, 70];

// SOAL
// ======================================================================================
// 1. Carilah element array terkecil dan terbesar
// 2. Urutkan array secara descending
// 3. Cari tanggal hari ini, tanggal kemarin dan tanggal besok dengan format (D-M-YYYY)
// 4. Buatlah array numbers menjadi format string seperti ini: 39,59,79,99,119,139

// JAWAB
// ======================================================================================

// Nomor 1
const terkecil = Math.min.apply(null, numbers);
const terbesar = Math.max.apply(null, numbers);

// Nomor 2
const descending = numbers.reverse();

// Nomor 3
var date = new Date()
var d = date.getUTCDate(); // UTC Time
var m = date.getUTCMonth() + 1; // Januari dihitung dari 0
var y = date.getFullYear() // Relative Time client device
var saatIni = `(${d}-${m}-${y})` // Output string, custom format order
var kemarinIni = `(${d-1}-${m}-${y})`
var besokIni = `(${++d}-${m}-${y})`

// Nomor 4
const bikinPusing = numbers.map(function (value, index) {
    return value + (9 + (10 * (index + 1)));
});

// Print ini, mesin !!
console.log(`Jawaban nomor:
1. Element terkecil dan terbesar masing-masing: ${terkecil} dan ${terbesar}
2. Descending dari \'numbers\' menjadi: [${descending}]
3. Tanggal Saat ini: ${saatIni} | Kemarin: ${kemarinIni} | Besok: ${besokIni}
4. ${bikinPusing.toString()}`);