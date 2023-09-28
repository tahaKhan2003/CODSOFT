let string = "";
let memory = 0; 

let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            document.querySelector(".text").value = string;
        }

        else if (e.target.innerHTML === "C") {
            string = "";
            document.querySelector(".text").value = string;
        }
        
        else if (e.target.innerHTML === "M+") {
            const currentValue = parseFloat(eval(string));
            memory += currentValue;
        }
        
        else if (e.target.innerHTML === "M-") {
            const currentValue = parseFloat(eval(string));
            memory -= currentValue;
        } 

        else if (e.target.innerHTML === "%") {
            const currentValue = parseFloat(eval(string));
            string = (currentValue / 100).toString();
            document.querySelector(".text").value = string;
        } 
        
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector(".text").value = string;
        }
    });
});
