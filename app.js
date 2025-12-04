document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica de Navegación (Mostrar/Ocultar Secciones) ---
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.content-section, #hero');

    function showSection(targetId) {
        // 1. Ocultar todas las secciones
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        // 2. Mostrar la sección deseada
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
    }

    // 3. Evento para los botones de navegación (INFO, TRABAJOS, CONTACTO)
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('data-section');
            showSection(targetId);

            // Resaltar el botón activo
            navButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // 4. Lógica para que el logo regrese al "Hero"
    const logo = document.querySelector('.logo-large'); 
    logo.addEventListener('click', () => {
        showSection('hero');
        // Quitar la selección del botón del menú
        navButtons.forEach(btn => btn.classList.remove('active'));
    });
    
    
    // --- 2. Lógica del Video Pop-Up ---
    const showVideoBtn = document.getElementById('show-video-btn');
    const videoContainer = document.getElementById('video-container');
    const closeBtn = document.querySelector('.close-btn'); // Correcto: selecciona el botón de cierre
    const mp4Player = document.getElementById('mp4-player');

    // Función para detener el video al cerrarse
    function stopVideo() {
        mp4Player.pause(); // Pausa el video
        mp4Player.currentTime = 0; // Opcional: rebobina al inicio
        videoContainer.classList.remove('active');
    }

    // Evento: Abrir el video al hacer clic en el CTA
    showVideoBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        videoContainer.classList.add('active');
    });

    // Evento: Cerrar el video al hacer clic en el botón 'X'
    closeBtn.addEventListener('click'), () => 
        stopVideo();
    
    });

    // Evento: Cerrar el video al hacer clic en el fondo oscuro (overlay)
    videoContainer.addEventListener('click', (e) => {
        if (e.target === videoContainer) {
            stopVideo();
        }
    });
