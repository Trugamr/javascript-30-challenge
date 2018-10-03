const panels = Array.from(document.querySelectorAll('.panel'));

function toggleOpen(e) {
    console.log()
    this.classList.toggle('open');

    // closing or removing open and open-active classes from others
    const clickedPanel = e.target.classList[1];
    let otherPanels = panels.filter(panel => !panel.classList.contains(clickedPanel));
    otherPanels.forEach(panel => {
        panel.classList.remove('open');
        console.log(panel.classList);
    })
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => { panel.addEventListener('click', toggleOpen) });
panels.forEach(panel => { panel.addEventListener('transitionend', toggleActive) });
