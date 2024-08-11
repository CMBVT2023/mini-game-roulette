const waldoContainer = document.getElementById('waldo-container');

function summonWaldo() {
    const waldo = document.createElement('div');
    waldo.innerHTML = 'Waldo';
    waldo.setAttribute('id', 'waldoElement');

    waldoContainer.appendChild(waldo);
    waldo.style.position = 'absolute';

    let top = (Math.random() * 100);
    let left = (Math.random() * 100);
    waldo.style.top = `${top}%`;
    waldo.style.left = `${left}%`;
}

summonWaldo()