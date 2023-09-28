const container = document.querySelector("#container");

let divStyle = document.querySelector("div").style;


divStyle.border = "5px solid black";

function makeGrid(side) {
    for (let i = 0; i < side; i ++)
    {
        let row = document.createElement("div");
        row.className = "row";
        row.id = i;
        container.appendChild(row);
        for (let j = 0; j < side; j++)
        {
            let pixel = document.createElement("div");
            pixel.classList.add ("whitepixel");
            pixel.classList.add("pixel");
            row.appendChild(pixel);

            //make dive
        }
    }
}

makeGrid(16);



const button = document.querySelector("button");

button.addEventListener('click', () => {
    newLength = +prompt("Enter a length of the grid");

    if (typeof(newLength) != "number") {
        console.log(typeof(newLength));
        return;
    };
    if (newLength > 40) {
        return;
    };

    if (isNaN(newLength)) {
        return;
    }
    console.log(newLength);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    makeGrid(newLength);

    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {

        pixel.addEventListener('mouseleave', () => {
            if (pixel.classList.contains("whitepixel")) {
                pixel.classList.remove("whitepixel");
                pixel.classList.add("blackpixel");   
            } else {
                pixel.classList.remove("blackpixel");
                pixel.classList.add("whitepixel");
            }

        
        });

        
    });
});

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {

    pixel.addEventListener('mouseleave', () => {
        if (pixel.classList.contains("whitepixel")) {
            pixel.classList.remove("whitepixel");
            pixel.classList.add("blackpixel");   
        } else {
            pixel.classList.remove("blackpixel");
            pixel.classList.add("whitepixel");
        }

      
    });

    
});