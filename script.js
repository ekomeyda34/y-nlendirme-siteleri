// Mobil Menü Açma/Kapama
document.querySelector('.slender-menu-icon').addEventListener('click', function () {
    const nav = document.querySelector('.slender-nav');
    nav.classList.toggle('active');
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '100px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 20px';
darkModeToggle.style.backgroundColor = '#004080';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '1000';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerText = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});