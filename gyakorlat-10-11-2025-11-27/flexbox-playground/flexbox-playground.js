const container = document.getElementById('container');

function addItem() {
    const item = document.createElement('div');
    item.className = 'item';
    item.textContent = container.children.length + 1;
    container.appendChild(item);
}

function reset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.style.alignItems = null;
    container.style.flexDirection = null;
    container.style.justifyContent = null;
    container.style.flexWrap = null;
    document.getElementById('flex-direction-select').value = "";
    document.getElementById('justify-content-select').value = "";
    document.getElementById('align-items-select').value = "";
    document.getElementById('flex-wrap-select').value = "";
}

function changeFlexDirection(event) {
    const value = event.currentTarget.value;
    console.log(`flex-direction is set to ${value}`);
    container.style.flexDirection = value;
}

function changeJustifyContent(event) {
    const value = event.currentTarget.value;
    console.log(`justify-content is set to ${value}`);
    container.style.justifyContent = value;
}

function changeAlignItems(event) {
    const value = event.currentTarget.value;
    console.log(`align-items is set to ${value}`);
    container.style.alignItems = value;
}

function changeFlexWrap(event) {
    const value = event.currentTarget.value;
    console.log(`flex-wrap is set to ${value}`);
    container.style.flexWrap = value;
}

document.getElementById('add-item-btn').addEventListener('click', addItem);
document.getElementById('reset-btn').addEventListener('click', reset);
document.getElementById('flex-direction-select').addEventListener('change', changeFlexDirection);
document.getElementById('justify-content-select').addEventListener('change', changeJustifyContent);
document.getElementById('align-items-select').addEventListener('change', changeAlignItems);
document.getElementById('flex-wrap-select').addEventListener('change', changeFlexWrap);
