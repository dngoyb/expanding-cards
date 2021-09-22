const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        if (!panel.classList.contains('active')) {
            panels.forEach((p) => {
                if (p.classList.contains('active')) {
                    p.classList.remove('active');
                }
            });
            panel.classList.add('active');
        }
    });
});
