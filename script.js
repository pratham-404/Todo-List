let plus = document.getElementById("plus");
let list = document.getElementById("list");
let input = document.getElementById("input");

// takes input after pressing Enter
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
        todo();
    }
});

// takes input when the plus is clicked
plus.addEventListener("click", function () {
    todo();
});

function todo() {
    if (input.value.trim().length != 0) {
        // creating a <p></p>
        var para = document.createElement("li");
        // adding class for styling in para
        para.classList.add("para-style");

        para.innerText = input.value;

        var trash_button = document.createElement("button");
        var trash = document.createElement("img");
        trash.src = "static/icons/trash.svg";
        trash_button.appendChild(trash);
        para.appendChild(trash_button);

        list.appendChild(para);
        input.value = "";

        trash_button.addEventListener("click", function () {
            list.removeChild(para);
        });
    }
}
