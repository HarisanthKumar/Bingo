var hid = document.querySelector("#res");
var sty = document.querySelector("#style1");
var sty2 = document.querySelector("#style2");
var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var playing = false;
var role = "";
var pn = "";
var code = "";
var w = "";
var h = "";
var s = q => sty.innerHTML += q;
var s2 = q => sty2.innerHTML += q;
var get = (a, b, c) => {
    if (c == 0) return ext(window.getComputedStyle(a)[b]);
    else return ext(window.getComputedStyle(document.querySelector(a))[b]);
};
var get2 = (a, b) => {
    qwerty = window.getComputedStyle(document.querySelector(a))[b];
    if (qwerty == "rgb(0, 128, 0)") {
        return "green";
    } else if (qwerty == "rgb(0, 255, 255)") {
        return "cyan";
    } else {
        return qwerty;
    };
};
var ext = c => {
    r = ""
    for (q = 0; q < c.length - 2; q++) {
        r += c[q];
    };
    return Number(r);
};
const firebaseConfig = {
    apiKey: "AIzaSyDoDxn2YU6Jjk7b2hNaptHjwxg06Y2GKeM",
    authDomain: "bingo-f76d1.firebaseapp.com",
    databaseURL: "https://bingo-f76d1-default-rtdb.firebaseio.com",
    projectId: "bingo-f76d1",
    storageBucket: "bingo-f76d1.appspot.com",
    messagingSenderId: "744971445434",
    appId: "1:744971445434:web:13c8697adeea397e6a8e83",
    measurementId: "G-79B602PK6J",
    databaseURL: "https://bingo-f76d1-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(firebaseConfig);
var d = {};
var z = [];
setInterval(() => {
    d = {};
    z = [];
    firebase.database().ref("Game").on("value", (snapshot) => {
        snapshot.forEach((childsnapshot) => {
            d[childsnapshot.key] = childsnapshot.val();
            z.push(childsnapshot.key);
        });
    });
    update();
}, 9);
var some1 = false;
var zxcvb = 0;
var update = () => {
    if (code !== "") {
        if (d[code].p == 2) {
            if (some1 == false) {
                s2("#container{display: flex;}#label{display: none;}");
                if (role == "host") s2("#btn2{display: block;}");
                document.querySelector("#p2").innerHTML = d[code].player2;
                some1 = true;
            };
        };
        if (d[code].play == "true") {
            playing = true;
            s2("#bingo{display: flex;}");
            if (d[code].data !== zxcvb) {
                zxcvb = d[code].data;
                if (document.querySelector("#btn_1").innerHTML == d[code].data) s2("#btn_1{background-color: green !important;}");
                else if (document.querySelector("#btn_2").innerHTML == d[code].data) s2("#btn_2{background-color: green !important;}");
                else if (document.querySelector("#btn_3").innerHTML == d[code].data) s2("#btn_3{background-color: green !important;}");
                else if (document.querySelector("#btn_4").innerHTML == d[code].data) s2("#btn_4{background-color: green !important;}");
                else if (document.querySelector("#btn_5").innerHTML == d[code].data) s2("#btn_5{background-color: green !important;}");
                else if (document.querySelector("#btn_6").innerHTML == d[code].data) s2("#btn_6{background-color: green !important;}");
                else if (document.querySelector("#btn_7").innerHTML == d[code].data) s2("#btn_7{background-color: green !important;}");
                else if (document.querySelector("#btn_8").innerHTML == d[code].data) s2("#btn_8{background-color: green !important;}");
                else if (document.querySelector("#btn_9").innerHTML == d[code].data) s2("#btn_9{background-color: green !important;}");
                else if (document.querySelector("#btn_10").innerHTML == d[code].data) s2("#btn_10{background-color: green !important;}");
                else if (document.querySelector("#btn_11").innerHTML == d[code].data) s2("#btn_11{background-color: green !important;}");
                else if (document.querySelector("#btn_12").innerHTML == d[code].data) s2("#btn_12{background-color: green !important;}");
                else if (document.querySelector("#btn_13").innerHTML == d[code].data) s2("#btn_13{background-color: green !important;}");
                else if (document.querySelector("#btn_14").innerHTML == d[code].data) s2("#btn_14{background-color: green !important;}");
                else if (document.querySelector("#btn_15").innerHTML == d[code].data) s2("#btn_15{background-color: green !important;}");
                else if (document.querySelector("#btn_16").innerHTML == d[code].data) s2("#btn_16{background-color: green !important;}");
                else if (document.querySelector("#btn_17").innerHTML == d[code].data) s2("#btn_17{background-color: green !important;}");
                else if (document.querySelector("#btn_18").innerHTML == d[code].data) s2("#btn_18{background-color: green !important;}");
                else if (document.querySelector("#btn_19").innerHTML == d[code].data) s2("#btn_19{background-color: green !important;}");
                else if (document.querySelector("#btn_20").innerHTML == d[code].data) s2("#btn_20{background-color: green !important;}");
                else if (document.querySelector("#btn_21").innerHTML == d[code].data) s2("#btn_21{background-color: green !important;}");
                else if (document.querySelector("#btn_22").innerHTML == d[code].data) s2("#btn_22{background-color: green !important;}");
                else if (document.querySelector("#btn_23").innerHTML == d[code].data) s2("#btn_23{background-color: green !important;}");
                else if (document.querySelector("#btn_24").innerHTML == d[code].data) s2("#btn_24{background-color: green !important;}");
                else if (document.querySelector("#btn_25").innerHTML == d[code].data) s2("#btn_25{background-color: green !important;}");
                find();
            };
        };
        if (d[code].winner == 1) modal("Game Over", d[code].player1 + " Won !!!<br>Click Yes To Redirect To Main Menu.", "5");
        if (d[code].winner == 2) modal("Game Over", d[code].player2 + " Won !!!<br>Click Yes To Redirect To Main Menu.", "5");
    };
};
var yes = () => {
    leave();
    close3();
};
var write = (drl, data) => firebase.database().ref(drl).update(data);
var createcode = () => {
    code = Math.random() * 1000000;
    code = code.toFixed();
    if (code.length == 6) {
        accpt = true;
        for (f3 = 0; f3 < z.length; f3++)
            if (z[f3] == code) accpt = false;
        if (accpt == false) {
            createcode();
        };
    } else createcode();
};
var pc = 0;
var check2 = () => {
    createcode();
    pn = input1.value;
    pc = 1;
    write("Game/" + code, {
        player1: pn,
        p: 1,
        savestat: {
            player1: "pending",
            player2: "pending"
        },
        data: 0,
        chance: 1,
        winner: 3,
        play: "false"
    });
    role = "host";
    label.innerHTML = "Game Code : " + code;
    setTimeout(() => {
        s2("#section1, #float, #container{display: flex;}#l1, #l2, #l3{display: none;}");
        document.querySelector("#p1").innerHTML = d[code].player1;
        document.querySelector("#p2").innerHTML = d[code].player2;
    }, 1000);
};
var check3 = () => {
    n = input2.value;
    cd = input3.value;
    accept = false;
    setTimeout(() => {
        for (something = 0; something < z.length; something++) {
            if (z[something] == cd) {
                accept = true;
                code = cd;
            };
        }
        if (accept == false) {
            modal("Invalid User Input", "Provided Game Code Does Not Exist.", "2");
            input2.value = "";
            input3.value = "";
        } else {
            if ((d[code].player1).toLowerCase() == n.toLowerCase()) {
                modal("Invalid User Input", "Player Names Cannot Be The Same.", "2");
                input2.value = "";
                input3.value = "";
            } else if (accept == true) {
                if (d[code].p == 1) {
                    pn = n;
                    write("Game/" + code, {
                        player2: pn,
                        p: 2
                    });
                    pc = 2;
                    role = "player";
                    setTimeout(() => {
                        s2("#section1, #float{display: flex;}#l1, #l2, #l3{display: none;}");
                        document.querySelector("#p1").innerHTML = d[code].player1;
                        document.querySelector("#p2").innerHTML = d[code].player2;
                    }, 1000);
                } else {
                    modal("Invalid User Input", "Cannot Join Because Game Is Full.", "2");
                    input2.value = "";
                    input3.value = "";
                };
            };
        };
    }, 500);
};
var response = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    sty.innerHTML = "";
    s(".heading{font-size: " + 120 * w / 1906 + "px;}.lb1{font-size: " + 50 * w / 1906 + "px;}input{font-size: " + 30 * w / 1906 + "px;}.login{padding: " + 50 * w / 1906 + "px}.btn{font-size: " + 30 * w / 1500 + "px;}");
    if (120 * w / 1906 < 50) s(".heading{font-size: 50px}");
    if (50 * w / 1906 < 25) s(".lb1{font-size: 25px;}");
    if (30 * w / 1906 < 25) s("input{font-size: 25px;}.btn{font-size: 25px;}");
    s("#heading1{text-shadow: lawngreen " + get("#heading1", "width") * 5 / 330 + "px " + get("#heading1", "width") * 5 / 380 + "px 0px;}#heading2{text-shadow: lawngreen " + get("#heading2", "width") * 5 / 330 + "px " + get("#heading2", "width") * 5 / 380 + "px 0px;}#heading3{text-shadow: lawngreen " + get("#heading3", "width") * 5 / 330 + "px " + get("#heading3", "width") * 5 / 380 + "px 0px;}");
};
response();
setInterval(() => {
    if (get(hid, "width", 0) !== w || get(hid, "height", 0) !== h) response();
}, 0);
var create_i = () => chec(1);
var join_i = () => chec(0);
var create = () => {
    s2("#l1{display: none;}#l2{display: flex;}");
    response();
};
var join = () => {
    s2("#l1{display: none;}#l3{display: flex;}");
    response();
};
var back = () => {
    s2("#l2, #l3{display: none;}#l1{display: flex;}");
    response();
    input1.value = "";
    input2.value = "";
    input3.value = "";
};
var chec = a => {
    if (a == 1) pn = input1.value;
    else pn = input2.value;
    cd = input3.value;
    acc = false;
    acca = false;
    for (q = 0; q < pn.length; q++)
        if (pn[q] !== " ") acc = true;
    if (pn !== "" && pn !== null && acc == true) {
        if (a == 0) {
            for (t = 0; t < cd.length; t++)
                if (cd[t] !== " ") acca = true;
            if (cd !== "" && cd !== null && acca == true) {
                d = {};
                z = [];
                check3();
            } else modal("Invalid User Input", "Game Code Required", "2");
        } else {
            check2();
        };
    } else modal("Invalid User Input", "Player Name Required", "2");
    input1.value = "";
    input2.value = "";
    input3.value = "";
};
var leave = () => {
    role = "";
    pn = "";
    code = "";
    pc = 0;
    playing = false;
    some1 = false;
    zxcvb = 0;
    document.querySelector("#style2").innerHTML = "";
    document.querySelector("#btn_1").innerHTML = "";
    document.querySelector("#btn_2").innerHTML = "";
    document.querySelector("#btn_3").innerHTML = "";
    document.querySelector("#btn_4").innerHTML = "";
    document.querySelector("#btn_5").innerHTML = "";
    document.querySelector("#btn_6").innerHTML = "";
    document.querySelector("#btn_7").innerHTML = "";
    document.querySelector("#btn_8").innerHTML = "";
    document.querySelector("#btn_9").innerHTML = "";
    document.querySelector("#btn_10").innerHTML = "";
    document.querySelector("#btn_11").innerHTML = "";
    document.querySelector("#btn_12").innerHTML = "";
    document.querySelector("#btn_13").innerHTML = "";
    document.querySelector("#btn_14").innerHTML = "";
    document.querySelector("#btn_15").innerHTML = "";
    document.querySelector("#btn_16").innerHTML = "";
    document.querySelector("#btn_17").innerHTML = "";
    document.querySelector("#btn_18").innerHTML = "";
    document.querySelector("#btn_19").innerHTML = "";
    document.querySelector("#btn_20").innerHTML = "";
    document.querySelector("#btn_21").innerHTML = "";
    document.querySelector("#btn_22").innerHTML = "";
    document.querySelector("#btn_23").innerHTML = "";
    document.querySelector("#btn_24").innerHTML = "";
    document.querySelector("#btn_25").innerHTML = "";
    response();
};
var begin = () => {
    if (d[code].p >= 2)
        if (d[code].savestat.player1 !== "pending" && d[code].savestat.player2 !== "pending") {
            s2("#btn2, .float{display: none;}");
            playing = true;
            write("Game/" + code, {
                play: "true"
            });
        } else modal("Cannot Start Game", "Either/ Both The Players Have Not Filled In The Boxes", "2");
    else modal("Cannot Start Game", "Needs A Minimum No. Of Two Players", "2");
};
var save = () => {
    if (num == 25) {
        write("Game/" + code + "/savestat", {
            ["player" + pc]: "saved"
        });
        s2(".float{display: none;}");
    } else modal("Invalid User Input", "Please Fill the Grid Box Given To Save It.", "2");
};
var num = 0;
var addstuff = stuff => {
    if (playing == false) {
        if (document.querySelector("#btn_" + stuff).innerHTML == "") {
            num++;
            document.querySelector("#btn_" + stuff).innerHTML = num;
        };
    } else {
        if (role == "host" && d[code].chance == 1) {
            if (get2("#btn_" + stuff, "backgroundColor") !== "green") {
                s2("#btn_" + stuff + "{background-color: green !important;}");
                write("Game/" + code, {
                    data: document.querySelector("#btn_" + stuff).innerHTML
                });
                write("Game/" + code, {
                    chance: 0
                });
                find();
            };
        } else if (role == "player" && d[code].chance == 0) {
            if (get2("#btn_" + stuff, "backgroundColor") !== "green") {
                write("Game/" + code, {
                    data: document.querySelector("#btn_" + stuff).innerHTML
                });
                s2("#btn_" + stuff + "{background-color: green !important;}");
                write("Game/" + code, {
                    chance: 1
                });
                find();
            };
        };
    };
};
var find = () => {
    response();
    s2("#bingo1, #bingo2, #bingo3, #bingo4, #bingo5 {background-color: cyan;}");
    if (get2("#btn_1", "backgroundColor") == "green" && get2("#btn_2", "backgroundColor") == "green" && get2("#btn_3", "backgroundColor") == "green" && get2("#btn_4", "backgroundColor") == "green" && get2("#btn_5", "backgroundColor") == "green") f_e();
    if (get2("#btn_6", "backgroundColor") == "green" && get2("#btn_7", "backgroundColor") == "green" && get2("#btn_8", "backgroundColor") == "green" && get2("#btn_9", "backgroundColor") == "green" && get2("#btn_10", "backgroundColor") == "green") f_e();
    if (get2("#btn_11", "backgroundColor") == "green" && get2("#btn_12", "backgroundColor") == "green" && get2("#btn_13", "backgroundColor") == "green" && get2("#btn_14", "backgroundColor") == "green" && get2("#btn_15", "backgroundColor") == "green") f_e();
    if (get2("#btn_16", "backgroundColor") == "green" && get2("#btn_17", "backgroundColor") == "green" && get2("#btn_18", "backgroundColor") == "green" && get2("#btn_19", "backgroundColor") == "green" && get2("#btn_20", "backgroundColor") == "green") f_e();
    if (get2("#btn_21", "backgroundColor") == "green" && get2("#btn_22", "backgroundColor") == "green" && get2("#btn_23", "backgroundColor") == "green" && get2("#btn_24", "backgroundColor") == "green" && get2("#btn_25", "backgroundColor") == "green") f_e();
    if (get2("#btn_1", "backgroundColor") == "green" && get2("#btn_6", "backgroundColor") == "green" && get2("#btn_11", "backgroundColor") == "green" && get2("#btn_16", "backgroundColor") == "green" && get2("#btn_21", "backgroundColor") == "green") f_e();
    if (get2("#btn_2", "backgroundColor") == "green" && get2("#btn_7", "backgroundColor") == "green" && get2("#btn_12", "backgroundColor") == "green" && get2("#btn_17", "backgroundColor") == "green" && get2("#btn_22", "backgroundColor") == "green") f_e();
    if (get2("#btn_3", "backgroundColor") == "green" && get2("#btn_8", "backgroundColor") == "green" && get2("#btn_13", "backgroundColor") == "green" && get2("#btn_18", "backgroundColor") == "green" && get2("#btn_23", "backgroundColor") == "green") f_e();
    if (get2("#btn_4", "backgroundColor") == "green" && get2("#btn_9", "backgroundColor") == "green" && get2("#btn_14", "backgroundColor") == "green" && get2("#btn_19", "backgroundColor") == "green" && get2("#btn_24", "backgroundColor") == "green") f_e();
    if (get2("#btn_5", "backgroundColor") == "green" && get2("#btn_10", "backgroundColor") == "green" && get2("#btn_15", "backgroundColor") == "green" && get2("#btn_20", "backgroundColor") == "green" && get2("#btn_25", "backgroundColor") == "green") f_e();
    if (get2("#btn_1", "backgroundColor") == "green" && get2("#btn_7", "backgroundColor") == "green" && get2("#btn_13", "backgroundColor") == "green" && get2("#btn_19", "backgroundColor") == "green" && get2("#btn_25", "backgroundColor") == "green") f_e();
    if (get2("#btn_5", "backgroundColor") == "green" && get2("#btn_9", "backgroundColor") == "green" && get2("#btn_13", "backgroundColor") == "green" && get2("#btn_17", "backgroundColor") == "green" && get2("#btn_21", "backgroundColor") == "green") f_e();
};
var f_e = () => {
    if (get2("#bingo1", "backgroundColor") == "cyan") s("#bingo1{background-color: blue !important;}");
    else if (get2("#bingo2", "backgroundColor") == "cyan") s("#bingo2{background-color: blue !important;}");
    else if (get2("#bingo3", "backgroundColor") == "cyan") s("#bingo3{background-color: blue !important;}");
    else if (get2("#bingo4", "backgroundColor") == "cyan") s("#bingo4{background-color: blue !important;}");
    else if (get2("#bingo5", "backgroundColor") == "cyan") {
        s("#bingo5{background-color: blue !important;}");
        write("Game/" + code, {
            winner: pc
        });
    };
};
var reload = () => {
    num = 0;
    data_game = {};
    for (stuff = 1; stuff <= 25; stuff++) document.querySelector("#btn_" + stuff).innerHTML = "";
};
var modal1 = document.querySelector("#modal");
var title = document.querySelector("#title");
var message = document.querySelector("#content1");
var modalhr = document.querySelector("#modalhr");
var modalhr3 = document.querySelector("#modalhr3");
var spanmodal = document.querySelector("#spanmodal");
var spanmton = document.querySelector("#spanmodal button");
var yes3 = document.querySelector("#yes");
var no3 = document.querySelector("#no");
var close9 = document.querySelector("#close");
var modalcover = document.querySelector("#modalbgcover");
modal1.style.cssText = "margin-top: 10px;padding: 15px;border-radius: 9px;border: 3px solid blue;background-color: aliceblue;display: flex;flex-direction: column;";
title.style.cssText = "font-weight: 600;font-size: 25px;text-align: center;color: green;margin: 9px 0px 10px;";
message.style.cssText = "text-align: center;font-size: 18px;margin: 25px 0px 30px;";
modalhr.style.cssText = "height: 1px;background-color: red;width: 100%;";
modalhr3.style.cssText = "height: 1px;background-color: red;width: 100%;";
spanmodal.style.cssText = "display: flex;justify-content: space-evenly;margin-top: 15px;";
spanmton.style.cssText = "font-size: 20px;";
yes3.style.cssText = "border: 2px solid darkgreen;padding:5px;color: green;background-color: lawngreen;margin-left: auto;margin-right: auto;";
no3.style.cssText = "border: 2px solid darkred;padding:5px;color: rgb(179, 0, 0);background-color: orangered;margin-left: auto;margin-right: auto;";
close9.style.cssText = "border: 2px solid darkred;color: rgb(179, 0, 0);background-color: orangered;padding: 0px 7px 0px 7px;font-size: 27px !important;margin-left: auto;";
modalcover.style.cssText = "position: absolute;top: 0;width: 100vw;height: 100vh;display: none;justify-content: center;align-items: start;background-color: rgba(0, 0, 0, 0.295);";

var change = () => {
    w1 = window.innerWidth;
    modal1.style.width = "500px";
    modal1.style.padding = "15px";
    if (w1 <= 620) modal1.style.width = (w1 * 90 / 100 - 30) + "px";
    if (w1 <= 370) {
        modal1.style.padding = "10px";
        modal1.style.width = (w1 * 95 / 100 - 30) + "px";
    };
};
change();
window.addEventListener("resize", change);

var modal = (title1, message1, type, ih) => {
    modalcover.style.display = "flex";
    title.innerHTML = title1;
    message.innerHTML = message1;
    if (type == "1") {
        yes3.style.display = "block";
        no3.style.display = "block";
        close9.style.display = "none";
    } else if (type == "2") {
        yes3.style.display = "none";
        no3.style.display = "none";
        close9.style.display = "block";
    } else if (type == "3") {
        yes3.style.display = "block";
        no3.style.display = "none";
        close9.style.display = "block";
    } else if (type == "4") {
        yes3.style.display = "none";
        no3.style.display = "block";
        close9.style.display = "block";
    } else if (type == "5") {
        yes3.style.display = "block";
        no3.style.display = "none";
        close9.style.display = "none";
    };
    if (ih !== undefined) message.innerHTML += ih;
};

var close3 = () => {
    title.innerHTML = "";
    message.innerHTML = "";
    modalcover.style.display = "none";
};