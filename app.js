const main = document.createElement('main');
main.classList.add('maincenter');
document.body.appendChild(main);

const supercontainer = document.createElement('div');
main.appendChild(supercontainer);
supercontainer.classList.add('supercontainer');

const inputgame = document.querySelector('.gameinput');
const resultdata = document.querySelector('.result-data-info');

const timeelement = document.querySelector(".timer");


let num = 1;

function start() {

    let a = [];

    for (let index = 0; index < inputgame.value * inputgame.value; index++) {
        a[index] = index + 1;
    }




    function shuffleArray(a) {
        a.sort(() => Math.random() - 0.5);
    }

    shuffleArray(a)

    supercontainer.style.width = `${inputgame.value * 100}px`;

    for (let index = 0; index < inputgame.value * inputgame.value; index++) {
        const container = document.createElement('div');
        supercontainer.appendChild(container);
        container.classList.add('container');

        container.innerText = a[index];

    }




    game();

}




function game() {


    //timer logic

    let time = 0;

    const updateTime = ()=> {
        var min = Math.floor(time / 60);
        var sec = time % 60;

        timeelement.innerText = `${min}:${sec}s`;
        time++;
    }


    var timmer = setInterval(updateTime, 1000);


    function displaytime() {
        supercontainer.style.display = "none"
        resultdata.style.display = "block"
        clearInterval(timmer);
    }

    //timer logic end


    const gamebox = document.querySelectorAll('.container');
    gamebox.forEach(e => {
        e.addEventListener('click', () => {

            if (num == e.innerText) {

                e.style.backgroundColor = "rgb(1, 104, 1)"
                num++;

            }
            else if (num != e.innerText && e.style.backgroundColor != "rgb(1, 104, 1)") {
                e.style.backgroundColor = "rgb(190, 0, 0)"

                setTimeout(() => {
                    e.style.backgroundColor = "white"
                }, 900);

            }

            if (num == inputgame.value * inputgame.value + 1) {
                displaytime();
            }
        });


    });

}

