const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(itemsArray);
document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item");
    createItem(item);
});

function displayItems() {
    let items = "";
    for (let i = 0; i < itemsArray.length; i++) {
        items += `    <div class="item">
    <div class="input-controller">

        <textarea disabled>${itemsArray[i]}</textarea>
        <div class=" edit-controller">
            <button class="done" title="Done"><img src="done.png" alt="done" class=""> </button>
            <button class="edit" title="Edit"><img src="edit.png" alt="edit"></button>
        </div>
    </div>

    <div class="update-controller">
        <button class="saveBtn" title="Save">Save</button>
        <button class="cancelBtn" title="Cancel">Cancel</button>

    </div>
</div>`


    }

    document.querySelector(".to-do-list").innerHTML = items;
    activateDeleteListners();
    activateEditListners();
    activateSaveListners();
    activateCancelListners();


}


function activateDeleteListners() {
    let deleteBtn = document.querySelectorAll(".done")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => {
            deleteItem(i);
        })
    })
};

function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}


function activateEditListners() {
    const editBtn = document.querySelectorAll(".edit")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea");
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            updateController[i].style.display = "block";
            inputs[i].disabled = false;
        })

    });

}

function activateSaveListners() {
    const saveBtn = document.querySelectorAll(".saveBtn");
    const inputs = document.querySelectorAll(".input-controller textarea");
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i);
        });
    });
}

function updateItem(text, i) {
    itemsArray[i] = text;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();

}


function activateCancelListners() {
    const cancelBtn = document.querySelectorAll(".cancelBtn");
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true;
        });
    })
}




function createItem(item) {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}

function displayDate() {
    let date = new Date();
    date = date.toString().split(" ");
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
    // console.log(date);
}

window.onload = function () {
    displayDate();
    displayItems();
}
