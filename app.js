const button = document.createElement("button");
button.textContent = "Add a Box!";

const container = document.createElement("main");
container.className = "container";

document.body.appendChild(button);
document.body.appendChild(container);

let counter = 1;

class Box {
    constructor() {
        // element creation
        this.div = document.createElement("div");
        this.value = document.createTextNode(counter);
        
        // attributes
        this.div.className = "box";
        this.div.id = counter;
        
        // make it appear
        container.appendChild(this.div);
        this.div.addEventListener("mouseover", () => {
            this.div.appendChild(this.value);
        });
        this.div.addEventListener("mouseout", () => {
            this.div.removeChild(this.value);
        });
        this.div.addEventListener("click", () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            this.div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
        this.div.addEventListener("dblclick", () => {
            if (this.div.id % 2 === 0) {
                if (this.div.nextSibling === null) {
                    console.log("%cNo Next Box!", "background: red; border 2px solid black; color: white;");
                } else {
                    container.removeChild(this.div.nextSibling);
                }
            } else {
                if (this.div.previousSibling === null) {
                    console.log("%cNo Previous Box!", "background: red; border: 2px solid black; color: white;");
                } else {
                    container.removeChild(this.div.previousSibling);
                }
            }
        })
    }
}


button.addEventListener("click", function() {
    new Box();
    counter++; 
})