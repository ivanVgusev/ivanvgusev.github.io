// const filler = "*";
const fillers = ["*"];
const maxHeight = 15;
const maxLength = 2 * maxHeight + 1;

const elementDOM = document.getElementById("christmasTree");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function drawCristmasTree() {
    let christmasTree = "";
    const randomIndex = Math.floor(Math.random() * fillers.length);
    const filler = fillers[randomIndex];
    for (let i = 0; i < maxHeight; i++) {
        let stepFill;
        if (i % 2 == 0) {
            stepFill = i + 1;
        } else {
            stepFill = 2 * i + 1;
        }

        let airFill = (maxLength - stepFill) / 2;
        
        christmasTree += "&nbsp;".repeat(airFill) + filler.repeat(stepFill) + "&nbsp;".repeat(airFill) + "<br>";
        elementDOM.innerHTML = christmasTree;
        console.log(christmasTree)
        await sleep(500);
    }
    await sleep(2000);
}

async function cycle() {
    while (true) {
        await drawCristmasTree();
        elementDOM.innerHTML = ""
    }
}

cycle();