function toggleStageDirections() {
    console.log('Button is clicked');
    document.querySelectorAll('.stagedir').forEach(stagedir => {
        const isShown = getComputedStyle(stagedir).display !== 'none';
        if (isShown) {
            stagedir.style.display = 'none';
        } else {
            stagedir.style.display = stagedir.tagName === 'DIV' ? 'block' : 'inline';
        }
    })
}
document.getElementById('toggle-stagedir-button').addEventListener('click', toggleStageDirections);
