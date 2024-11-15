<script>
    // Tambahkan event listener untuk semua gambar dengan class "zoomable"
    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            modal.addEventListener('click', () => document.body.removeChild(modal));
            document.body.appendChild(modal);
            modal.style.display = 'flex'; // Tampilkan modal
        });
    });
</script>

