const drag_item = document.querySelectorAll('.drag-item');
const drag_list = document.querySelectorAll('.drag-item-list');
const button = document.getElementById('button');
const form = document.getElementById('form')
const input = document.getElementById('input')
let selectItem;

// รายการ
drag_item.forEach((item) => {
    item.addEventListener('dragstart', ondragstart);
});

// หมวดหมู่
drag_list.forEach((list) => {
    list.addEventListener('dragover', ondragover);
    list.addEventListener('dragenter', ondragenter);
    list.addEventListener('drop', ondrop);
});

function ondragstart() {
    selectItem = this;
    console.log(selectItem);
}

function ondrop() {
    if (selectItem) {
        this.append(selectItem);
        selectItem = null;
    }
}

// ปิด drag over และ drag enter
function ondragover(e) {
    e.preventDefault();
}

function ondragenter(e) {
    e.preventDefault();
}

form.addEventListener('submit', addcontent);

function addcontent(e) {
    e.preventDefault()

    const first = document.querySelector('.first');
    let item = document.createElement('li');
    item.classList.add('drag-item');
    item.textContent = `${input.value}`;
    item.draggable = true;
    first.appendChild(item);

    // Add drag event listeners to the newly created item
    item.addEventListener('dragstart', ondragstart);
}