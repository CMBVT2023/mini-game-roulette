const userInputs = document.getElementById('userInputs').querySelectorAll('input');
const madLib = document.getElementById('madLib');
const madLibDisplays = document.getElementById('madLibDisplay').querySelectorAll('span');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');


function displayMadLib(arr) {
    madLib.classList.remove('hidden');

    for (const index in madLibDisplays) {
        if (index == 0 || index == 9) {
            madLibDisplays[index].innerHTML = ((arr[index][0] == 'a' ? 'an ' : 'a ') + arr[index]);
        } else {
            madLibDisplays[index].innerHTML = arr[index];
        }
    }

    clearBtn.addEventListener('click', () => {
        madLib.classList.add('hidden');
        for (const item of madLibDisplays) {
            item.innerHTML = '';
        }
        for (const input of userInputs) {
            input.value = '';
        }
    })
}

function loadEventListeners() {
    generateBtn.addEventListener('click', () => {
        let madLibWords = [];
        for (const input of userInputs) {
            madLibWords.push(input.value);
        }
        displayMadLib(madLibWords);
    })
}

loadEventListeners();