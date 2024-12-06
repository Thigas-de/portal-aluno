// scripts.js

// Filtrar cursos por categoria
document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filter-category');
    const courseItems = document.querySelectorAll('.course-item');

    filterSelect.addEventListener('change', () => {
        const selectedCategory = filterSelect.value;

        courseItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (selectedCategory === 'all' || category === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Inscrição em cursos
    const enrollButtons = document.querySelectorAll('.btn-inscrever');

    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseName = button.closest('.course-item').querySelector('h3').textContent;
            alert(`Você se inscreveu no curso: ${courseName}`);
        });
    });
});
