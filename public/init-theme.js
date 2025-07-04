(function () {
    try {
        const theme = localStorage.getItem('hs_theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    } catch (e) { }
})();