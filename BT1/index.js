let Array = [];
let i = 0;

function add() {
    let input = document.getElementById("input").value;
    if (input == "") {
        return 0;
    }
    else {
        Array.push(input);
        console.log(Array);
        document.getElementById("input").value = "";
    }
    load();
}

function load() {
    let q = document.getElementById("nd")
    q.innerHTML = "";
    for (let n in Array) {
        i = n;
        q.innerHTML += loadm(Array[i]);
    }
}

function xoa(id) {
    Array.splice(id, 1);
    console.log(Array);
    load(i);
}

function loadm(Array) {
    let temp = `
    <div id="` + i + `" class="in">
    <p class="data">` + Array + `</p>
    <button class="xoa" id="` + i + `" onclick="xoa(this.id)">Delete
    </button>
    <button class="sua" id="` + i + `" onclick="sua(this.id)">Sua
    </button>
    </div><br>
    `;
    return temp;
}

function sua(id) {
    let input = document.getElementById("input").value;
    if (input == "") {
        return 0;
    }
    else {
        Array[id] = input;
        load();
        document.getElementById("input").value = "";
    }
}
