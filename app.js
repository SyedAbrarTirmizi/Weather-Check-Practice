let myInput = document.querySelector("#myInput");
let result = document.querySelector("#result");
let form = document.querySelector("#weatherForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Input ki value: ", myInput.value);

    if (myInput.value > 20) {
        console.log("Garmi");
        result.innerText = "Today weather is hot"
    } else {
        console.log("Sardi");
        result.innerText = "Today weather is cold"
    }
});


