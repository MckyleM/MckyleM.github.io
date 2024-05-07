const track = document.querySelector('.project-container');
let nextPercentage = 0;

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    track.dataset.isMouseDown = 'true';
}

window.onmousemove = e => {
    if (track.dataset.isMouseDown !== 'true') return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    nextPercentage = parseFloat(track.dataset.prevPercentage || 0) + percentage;
    nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);
    track.dataset.percentage = nextPercentage;
    track.style.transform = `translateX(${nextPercentage}%)`;
}

window.onmouseup = e => {
    track.dataset.isMouseDown = 'false';
    track.dataset.prevPercentage = track.dataset.percentage;
}