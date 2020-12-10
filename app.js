document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    let buttons = document.getElementsByName('button');
    let numOfDiv = 0

    let randomColors = [
        "blue",
        "green",
        "grey",
        "orange",
        "pink",
        "lightblue",
        "brown"
    ];

    button.addEventListener("click", function() {
        let divElem = document.createElement('div');
        document.body.appendChild(divElem);
        
        divElem.className = 'theDiv';
        divElem.id = `${numOfDiv++}`;
        divElem.addEventListener('mouseenter', function() {
            let idText = document.createTextNode(divElem.id);
            divElem.appendChild(idText);
        });
        divElem.addEventListener('mouseleave', function() {
            divElem.innerHTML = '';
        });
        divElem.addEventListener('click', function() {
            divElem.style.backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
        });
        divElem.addEventListener("dblclick", function() {
            if ((divElem.id % 2) === 0) {
                if (divElem.nextElementSibling !== null) {
                    divElem.nextElementSibling.remove();
                } else {
                    alert("There is not a previous box!")
                };
            } else if ((divElem.id % 2) !== 0) {
                if (divElem.previousElementSibling !== null) {
                    divElem.previousElementSibling.remove();
                } else {
                    alert("There is not a box after that one!")
                };
            };
        });
    });
});