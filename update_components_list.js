//const list = document.getElementById('component-list');

//grab .txt list info
fetch('components_list.txt')
.then(response => response.text())
.then(text =>{
    //split the received text into array
    const lines = text.split(/\r?\n/);
    lines.forEach((line, index) => {
        console.log(line);
    })
})