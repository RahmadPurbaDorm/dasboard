// JavaScript untuk menangani klik pada gambar dan memperbesar gambar dalam modal
const images = document.querySelectorAll('.zoom-image');
const modal = document.getElementById('zoomModal');
const modalImg = document.getElementById('modalImg');

images.forEach(image => {
    image.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src; // Menampilkan gambar yang diklik di dalam modal
    });
});

// Menutup modal saat klik tombol close
function closeZoom() {
    modal.style.display = 'none';
}
