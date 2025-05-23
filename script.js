const map = L.map('map').setView([-7.799509, 110.398194], 18); // Yogyakarta

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([-7.799488, 110.398135]).addTo(map)
  .bindPopup('Sungai Gajahwong dekat SMAN 8 YK')
  .openPopup();

  function tampilkanGrafik(parameter) {
    // Sembunyikan semua grafik
    const semuaGrafik = document.querySelectorAll('.grafik-box');
    semuaGrafik.forEach(grafik => grafik.style.display = 'none');
  
    // Sembunyikan semua interpretasi
    const semuaInterpretasi = document.querySelectorAll('.ph-interpretasi');
    semuaInterpretasi.forEach(interpretasi => interpretasi.style.display = 'none');
  
    // Tampilkan grafik dan interpretasi sesuai parameter
    const grafikId = `grafik-${parameter}`;
    const interpretasiId = `interpretasi-${parameter}`;
    
    const grafikElement = document.getElementById(grafikId);
    const interpretasiElement = document.getElementById(interpretasiId);
  
    if (grafikElement) grafikElement.style.display = 'block';
    if (interpretasiElement) interpretasiElement.style.display = 'block';
  }
  const statusElement = document.getElementById("status-ph");
  const phValue = 4.5;
  
  if (phValue < 5) {
    statusElement.className = "quality-sangat-buruk";
  } else if (phValue < 6) {
    statusElement.className = "quality-buruk";
  } else if (phValue < 7) {
    statusElement.className = "quality-cukup";
  } else if (phValue < 8) {
    statusElement.className = "quality-baik";
  } else {
    statusElement.className = "quality-sangat-baik";
  }
    