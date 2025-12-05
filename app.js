document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Variables Globales de Navegación y Menú ---
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.content-section, #hero');
    const logo = document.querySelector('.logo-large'); 
    
    // Variables del Menú Hamburguesa
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');


    // --- 2. Lógica de Navegación (Mostrar/Ocultar Secciones) ---
    function showSection(targetId) {
        // Ocultar todas las secciones (incluida #hero)
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        // Mostrar SÓLO la sección deseada
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
    }

    // Evento para los botones de navegación (INFO, TRABAJOS, CONTACTO)
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('data-section');
            showSection(targetId);

            // Resaltar el botón activo
            navButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Lógica para que el logo vaya a la sección "TRABAJOS"
    logo.addEventListener('click', () => {
        showSection('work'); // <--- AHORA MUESTRA LA SECCIÓN DE TRABAJOS
        
        // Resalta el botón de 'TRABAJOS' para reflejar la sección activa
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Busca y añade la clase 'active' al botón de TRABAJOS
        const workButton = document.querySelector('.nav-button[data-section="work"]');
        if (workButton) {
             workButton.classList.add('active');
        }
    });
    
    
    // --- 3. Lógica del Menú Hamburguesa ---
    // Muestra/Oculta el menú al hacer clic en el botón
    hamburgerBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active'); 
        hamburgerBtn.classList.toggle('is-active'); 
    });

    // Cierra el menú al seleccionar una opción
    const menuItems = mobileNav.querySelectorAll('.nav-button');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Se cierra después de hacer clic en cualquier opción
            mobileNav.classList.remove('active');
            hamburgerBtn.classList.remove('is-active');
        });
    });
    
    
    // --- 4. Lógica del Video Pop-Up para MP4 ---
    const showVideoBtn = document.getElementById('show-video-btn');
    const videoContainer = document.getElementById('video-container');
    const closeBtn = document.querySelector('.close-btn');
    const mp4Player = document.getElementById('mp4-player'); 

    // Función para detener el video y cerrar el pop-up
    function stopVideo() {
        mp4Player.pause(); 
        mp4Player.currentTime = 0; 
        videoContainer.classList.remove('active');
    }

    // Evento: Abrir el video al hacer clic en el CTA
    showVideoBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        videoContainer.classList.add('active');
        
        // Empieza la reproducción
        mp4Player.play(); 
    });

    // Evento: Cerrar el video al hacer clic en el botón 'X'
    closeBtn.addEventListener('click', () => {
        stopVideo();
    });

    // Evento: Cerrar el video al hacer clic en el fondo oscuro (overlay)
    videoContainer.addEventListener('click', (e) => {
        if (e.target === videoContainer) {
            stopVideo();
        }
    });
    
});
