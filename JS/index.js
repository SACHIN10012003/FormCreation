function fun1() {
    var mbox1 = document.querySelector("#mainbox1");
    mbox1.style.display = "block";
    var s1 = document.querySelector("#select1").value;
    var nav1btn1 = document.querySelector("#nav1btn1");
    var m1b1 = document.createElement("div");
    var m1b11 = document.createElement("div");
    var m1b12 = document.createElement("div");
    var inp1 = document.createElement("input");
    inp1.className = "inp1";
    inp1.placeholder = " Lable";
    var inp2 = document.createElement("input");
    inp2.className = "inp2";
    var btn1 = document.createElement("button");
    btn1.innerHTML = "ADD";
    btn1.setAttribute("class", "btng1");
    var btn2 = document.createElement("button");
    btn2.innerHTML = "X";
    btn2.setAttribute("class", "btng1");
    m1b1.className = "m1b1";
    m1b11.className = "m1b11";
    m1b12.className = "m1b12";
    btn1.setAttribute("onclick", "fun2(this)");
    btn2.setAttribute("onclick", "fun5(this)");
    if (s1 == 0) {
        alert("Please Select The Option First");
    }
    if (s1 == 1) {
        mbox1.appendChild(m1b1);
        m1b1.appendChild(m1b11);
        m1b1.appendChild(m1b12);
        m1b11.appendChild(inp1);
        m1b11.appendChild(btn1);
        m1b12.appendChild(inp2);
        m1b12.appendChild(btn2);
        inp2.disabled = true;
        inp2.placeholder = " Text";
        inp1.setAttribute("oninput", "fun6(this)")
        document.getElementById("select1").value = "0";
        if (inp1.value == "") {
            alert("Please Add Lable First");
            btn1.disabled = true;
        }
    }
    else if (s1 == 2) {
        mbox1.appendChild(m1b1);
        m1b1.appendChild(m1b11);
        m1b1.appendChild(m1b12);
        m1b11.appendChild(inp1);
        m1b11.appendChild(btn1);
        m1b12.appendChild(inp2);
        m1b12.appendChild(btn2);
        inp2.disabled = true;
        inp2.placeholder = " Number";
        inp1.setAttribute("oninput", "fun6(this)")
        document.getElementById("select1").value = "0";
        if (inp1.value == "") {
            alert("Please Add Lable First");
            btn1.disabled = true;
        }
    }
    else if (s1 == 3) {
        mbox1.appendChild(m1b1);
        m1b1.appendChild(m1b11);
        m1b1.appendChild(m1b12);
        m1b11.appendChild(inp1);
        m1b11.appendChild(btn1);
        m1b12.appendChild(inp2);
        m1b12.appendChild(btn2);
        inp2.disabled = true;
        inp2.placeholder = " Email";
        inp1.setAttribute("oninput", "fun6(this)")
        document.getElementById("select1").value = "0";
        if (inp1.value == "") {
            alert("Please Add Lable First");
            btn1.disabled = true;
        }
    }
    else if (s1 == 4) {
        var rbtn1 = document.createElement("button");
        rbtn1.innerHTML = "ADD";
        rbtn1.setAttribute("class", "btng1");
        var para56 = document.createElement("div");
        para56.classList = "para56";
        rbtn1.setAttribute("onclick", "fun8(this)");
        mbox1.appendChild(m1b1);
        m1b1.appendChild(m1b11);
        m1b1.appendChild(m1b12);
        m1b11.appendChild(inp1);
        m1b11.appendChild(btn1);
        m1b12.appendChild(inp2);
        m1b12.appendChild(rbtn1);
        m1b12.appendChild(btn2);
        m1b12.appendChild(para56);
        inp2.disabled = false;
        inp2.placeholder = " Radio";
        inp2.setAttribute("oninput", "fun9(this)");
        inp1.setAttribute("oninput", "fun6(this)")
        rbtn1.disabled = true;
        document.getElementById("select1").value = "0";
        if (inp1.value == "") {
            alert("Please Add Lable First");
            btn1.disabled = true;
        }
    }
    else if (s1 == 5) {
        var rbtn1 = document.createElement("button");
        rbtn1.innerHTML = "ADD";
        rbtn1.setAttribute("class", "btng1");
        var para56 = document.createElement("div");
        para56.classList = "para56";
        rbtn1.setAttribute("onclick", "fun10(this)");
        mbox1.appendChild(m1b1);
        m1b1.appendChild(m1b11);
        m1b1.appendChild(m1b12);
        m1b11.appendChild(inp1);
        m1b11.appendChild(btn1);
        m1b12.appendChild(inp2);
        m1b12.appendChild(rbtn1);
        m1b12.appendChild(btn2);
        m1b12.appendChild(para56);
        var inp8 = document.createElement("select");
        inp8.setAttribute("class", "select2");
        var option = document.createElement("option");
        option.text = "---Select---";
        inp8.appendChild(option);
        para56.appendChild(inp8);
        inp2.disabled = false;
        inp2.placeholder = " Select";
        inp2.setAttribute("oninput", "fun9(this)");
        inp1.setAttribute("oninput", "fun6(this)")
        rbtn1.disabled = true;
        document.getElementById("select1").value = "0";
        if (inp1.value == "") {
            alert("Please Add Lable First");
            btn1.disabled = true;
        }
    }
    else if (s1 == 6) {
        var rbtn1 = document.createElement("button");
        rbtn1.innerHTML = "ADD";
        rbtn1.setAttribute("class", "btng1");
        var para56 = document.createElement("div");
        para56.classList = "para56";
        rbtn1.setAttribute("onclick", "fun11(this)");
        mbox1.appendChild(m1b1);
        m1b1.appendChild(m1b11);
        m1b1.appendChild(m1b12);
        m1b11.appendChild(inp1);
        m1b11.appendChild(btn1);
        m1b12.appendChild(inp2);
        m1b12.appendChild(rbtn1);
        m1b12.appendChild(btn2);
        m1b12.appendChild(para56);
        inp2.disabled = false;
        inp2.placeholder = " Checkbox";
        inp2.setAttribute("oninput", "fun9(this)");
        inp1.setAttribute("oninput", "fun6(this)")
        rbtn1.disabled = true;
        document.getElementById("select1").value = "0";
        if (inp1.value == "") {
            alert("Please Add Lable First");
            btn1.disabled = true;
        }
    }
    else if (s1 == 7) {
        alert("Is Your Form Complete ?");
        mbox1.appendChild(m1b1);
        var btn3 = document.createElement("button");
        btn3.innerHTML = "SUBMIT";
        btn3.setAttribute("class", "btng1");
        btn3.setAttribute("onclick", "fun3(this)");
        m1b1.appendChild(btn3);
        document.getElementById("select1").value = "0";
    }

    for (var i = 0; i <= mbox1.children.length - 1; i++) {
        for (var j = 0; j <= mbox1.children[i].children.length - 1; j++) {
            if (mbox1.children[i].children[j].innerHTML == "SUBMIT") {
                nav1btn1.disabled = true;
            }
            for (var k = 0; k <= mbox1.children[i].children[j].children.length - 1; k++) {
                if (mbox1.children[i].children[j].children[k].tagName == "INPUT") {
                    if (mbox1.children[i].children[j].children[k].disabled == false) {
                        if (mbox1.children[i].children[j].children[k].value == "") {
                            // nav1btn1.disabled = true ;
                        }
                    }
                }
                // else if(mbox1.children[i].children[j].children[k].tagName == "BUTTON")
                // {
                //     console.log(mbox1.children[i].children[j].children[k].innerHTML);
                // }
            }
        }
    }
}
function fun2(a) {
    var para1 = document.createElement("p");
    para1.innerHTML = a.previousSibling.value.toUpperCase() + " :-";
    para1.style.margin = "2px";
    a.parentElement.appendChild(para1);
    a.previousSibling.remove();
    var img1 = document.createElement("img");
    a.innerHTML = "EDIT";
    a.setAttribute("class", "btng1");
    a.setAttribute("onclick", "fun12(this)");
}
function fun12(p) {
    p.nextSibling.remove();
    var inp3 = document.createElement("input");
    var btn34 = document.createElement("button");
    p.parentElement.appendChild(inp3);
    btn34.innerHTML = "ADD";
    btn34.setAttribute("onclick", "fun2(this)");
    btn34.setAttribute("class", "btng1");
    p.parentElement.appendChild(btn34);
    p.remove();
}
function fun3(c) {
    var nkm = document.querySelector("#nav1div2");
    nkm.style.display = "none";
    var ibar = document.querySelector("#inner-bar");
    var ibtn = document.querySelector("#n1b3btn1");
    ibar.style.width = "70%";
    ibtn.innerHTML = "70%";
    var mbox2 = document.querySelector("#mainbox2");
    var mbox1 = document.querySelector("#mainbox1");
    mbox2.style.display = "block";
    mbox1.style.display = "none";
    mbox2.innerHTML = c.parentElement.parentElement.innerHTML;
    var btn4 = document.createElement("button");
    btn4.innerHTML = "SUBMIT";
    btn4.setAttribute("class", "btng1");
    mbox2.lastChild.appendChild(btn4);
    btn4.previousSibling.remove();
    btn4.setAttribute("onclick", "fun4(this)");
    var sum = "";
    for (var i = 0; i <= mbox2.children.length - 1; i++) {
        for (var j = 0; j <= mbox2.children[i].children.length - 1; j++) {
            for (var k = 0; k <= mbox2.children[i].children[j].children.length - 1; k++) {
                if (mbox2.children[i].children[j].children[k].tagName == "DIV") {
                    for (var n = 0; n <= mbox2.children[i].children[j].children[k].children.length - 1; n++) {
                        if (mbox2.children[i].children[j].children[k].children[n].tagName == "INPUT") {
                            if (mbox2.children[i].children[j].children[k].children[n].getAttribute("type") == "radio") {
                                for (var p = 0; p <= mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children.length - 1; p++) {
                                    // console.log(mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].tagName);
                                    if (mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].tagName == "INPUT") {
                                        mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].style.display = "none";
                                    }
                                    else if (mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].tagName == "BUTTON") {
                                        mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].style.display = "none";
                                    }
                                }
                            }
                            else if (mbox2.children[i].children[j].children[k].children[n].getAttribute("type") == "checkbox") {
                                for (var p = 0; p <= mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children.length - 1; p++) {
                                    // console.log(mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].tagName);
                                    if (mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].tagName == "INPUT") {
                                        mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].style.display = "none";
                                    }
                                    else if (mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].tagName == "BUTTON") {
                                        mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[p].style.display = "none";
                                    }
                                }
                            }
                        }
                        else if (mbox2.children[i].children[j].children[k].children[n].tagName == "SELECT") {
                            for (var q = 0; q <= mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children.length - 1; q++) {
                                // console.log(mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[q]);
                                if (mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[q].tagName == "INPUT") {
                                    mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[q].style.display = "none";
                                }
                                else if (mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[q].tagName == "BUTTON") {
                                    mbox2.children[i].children[j].children[k].children[n].parentElement.parentElement.children[q].style.display = "none";
                                }
                            }
                        }
                    }
                }
                var p78 = mbox2.children[i].children[j].children[k].innerHTML;
                for (var m = 0; m <= p78.length - 1; m++) {
                    if (m != (p78.length - 1) && (m != p78.length - 2) && (m != p78.length - 3)) {
                        sum += p78[m];
                    }
                }
                // console.log(sum);
                if (mbox2.children[i].children[j].children[k].tagName == "INPUT") {
                    if (mbox2.children[i].children[j].children[k].disabled == true) {
                        mbox2.children[i].children[j].children[k].disabled = false;
                        // mbox2.children[i].children[j].children[k].placeholder = "ENTER YOUR "+sum;
                        mbox2.children[i].children[j].children[k].setAttribute("oninput", "fun7(this)");
                        if (mbox2.children[i].children[j].children[k].value == "") {
                            mbox2.lastChild.style.display = "none";
                        }
                    }
                }
                else if (mbox2.children[i].children[j].children[k].tagName == "BUTTON") {
                    mbox2.children[i].children[j].children[k].remove();
                }
            }
        }
        sum = "";
    }
}
function fun4(d) {
    var ibar = document.querySelector("#inner-bar");
    var ibtn = document.querySelector("#n1b3btn1");
    ibar.style.width = "100%";
    ibtn.innerHTML = "100%";
    ibtn.style.backgroundColor = "green";
    alert("Is Your Form Complete ?");
    var mbox3 = document.querySelector("#mainbox3");
    var mbox2 = document.querySelector("#mainbox2");
    mbox3.style.display = "block";
    mbox2.style.display = "none";
    for (var i = 0; i <= d.parentElement.parentElement.children.length - 1; i++) {
        // console.log(d.parentElement.parentElement.children[i]);
        var m1b1 = document.createElement("div");
        var m1b11 = document.createElement("div");
        var m1b12 = document.createElement("div");
        m1b1.className = "m1b1";
        m1b11.className = "m1b11";
        m1b12.className = "m1b12";
        mbox3.appendChild(m1b1);
        m1b1.appendChild(m1b11);
        m1b1.appendChild(m1b12);
        for (var j = 0; j <= d.parentElement.parentElement.children[i].children.length - 1; j++) {
            for (var k = 0; k <= d.parentElement.parentElement.children[i].children[j].children.length - 1; k++) {
                if (d.parentElement.parentElement.children[i].children[j].children[k].tagName == "INPUT") {
                    m1b12.innerHTML = d.parentElement.parentElement.children[i].children[j].children[k].value;
                }
                else if (d.parentElement.parentElement.children[i].children[j].children[k].tagName == "P") {
                    m1b11.innerHTML = d.parentElement.parentElement.children[i].children[j].children[k].innerHTML;
                }
                for (var m = 0; m <= d.parentElement.parentElement.children[i].children[j].children.length - 1; m++) {
                    if (d.parentElement.parentElement.children[i].children[j].children[m].tagName == "DIV") {
                        for (var n = 0; n <= d.parentElement.parentElement.children[i].children[j].children[m].children.length - 1; n++) {
                            if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].tagName == "INPUT") {
                                if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].getAttribute("type") == "radio") {
                                    if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].checked == true) {
                                        m1b12.innerHTML = d.parentElement.parentElement.children[i].children[j].children[m].children[n].nextSibling.innerHTML;
                                    }
                                }
                                else if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].getAttribute("type") == "checkbox") {
                                    if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].checked == true) {
                                        // m1b12.innerHTML += d.parentElement.parentElement.children[i].children[j].children[m].children[n].nextSibling.innerHTML;
                                        if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].nextSibling.tagName == "LABLE") {
                                            // m1b12.appendChild(d.parentElement.parentElement.children[i].children[j].children[m].children[n].nextSibling.innerHTML);
                                            m1b12.appendChild(d.parentElement.parentElement.children[i].children[j].children[m].children[n].nextSibling);
                                        }
                                    }
                                    else if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].checked == false) {
                                        d.parentElement.parentElement.children[i].children[j].children[m].children[n].style.display = "none";
                                        d.parentElement.parentElement.children[i].children[j].children[m].children[n].nextSibling.style.display = "none";
                                    }
                                }
                            }
                            else if (d.parentElement.parentElement.children[i].children[j].children[m].children[n].tagName == "SELECT") {
                                m1b12.innerHTML = d.parentElement.parentElement.children[i].children[j].children[m].children[n].value;
                            }
                        }
                    }
                }
            }
        }
    }
    mbox3.lastChild.remove();
}
var bm;
function fun5(e) {
    e.setAttribute("id", "closebtn34");
    var mb1btn1 = document.querySelector("#mb1btn1");
    var mb1btn2 = document.querySelector("#mb1btn2");
    var mm = document.querySelector("#main-modal");
    var mb2 = document.querySelector("#modal-body2");
    mm.style.display = "flex";
    var count = 100;
    mb2.style.width = count + "%";
    bm = setInterval(MyModal1, 30);
    function MyModal1() {
        if (count >= 1) {
            count--;
            mb2.style.width = count + "%";
        }
        else {
            clearInterval(bm);
            e.parentElement.parentElement.remove();
        }
    }
    var am = setTimeout(MyModal2, 3000);
    function MyModal2() {
        mm.style.display = "none";
    }
}
function fun13(v) {
    var closebtn34 = document.getElementById("closebtn34");
    // console.log(v.value);
    var mm = document.querySelector("#main-modal");
    if (v.value == "open") {
        mm.style.display = "none";
        clearInterval(bm);
    }
    else if (v.value == "close") {
        mm.style.display = "none";
        clearInterval(bm);
        closebtn34.parentElement.parentElement.remove();
    }
}
function fun6(f) {
    f.nextSibling.disabled = false;
    var s1 = document.querySelector("#select1");
    s1.nextElementSibling.disabled = false;
}
function fun7(g) {
    if (g.value != "") {
        g.parentElement.parentElement.parentElement.lastChild.style.display = "flex";
    }
}
function fun8(h) {
    if (h.previousSibling.value != "") {
        h.nextSibling.nextSibling.style = "text-align: left";
        var para90 = document.createElement("input");
        var para91 = document.createElement("lable");
        para90.setAttribute("type", "radio");
        para90.setAttribute("name", "gender");
        para91.innerHTML = "&nbsp" + h.previousSibling.value + "<br>";
        h.nextSibling.nextSibling.appendChild(para90);
        h.nextSibling.nextSibling.appendChild(para91);
    }
    h.previousSibling.value = "";
}
function fun9(i) {
    if (i.value != "") {
        i.nextSibling.disabled = false;
    }
}
function fun10(j) {
    var option = document.createElement("option");
    option.text = j.previousElementSibling.value;
    for (var i = 0; i <= j.nextSibling.nextSibling.children.length - 1; i++) {
        j.nextSibling.nextSibling.children[i].appendChild(option);
    }
    j.previousElementSibling.value = "";
}
function fun11(k) {
    if (k.previousSibling.value != "") {
        k.nextSibling.nextSibling.style = "text-align: left";
        var para90 = document.createElement("input");
        var para91 = document.createElement("lable");
        para90.setAttribute("type", "checkbox");
        para91.innerHTML = " " + k.previousSibling.value + "<br>";
        k.nextSibling.nextSibling.appendChild(para90);
        k.nextSibling.nextSibling.appendChild(para91);
    }
    k.previousSibling.value = "";
}
function fun45() {
    var s1 = document.querySelector("#nav1div2");
    var mbox4 = document.querySelector("#mainbox4");
    s1.style.display = "block";
    mbox4.style.display = "none";
    alert("Please Select Options To Build Form")
    var ibar = document.querySelector("#inner-bar");
    var ibtn = document.querySelector("#n1b3btn1");
    ibar.style.width = "20%";
    ibtn.innerHTML = "20%";
}
function fun46() {
    var mm = document.querySelector("#main-modal");
    mm.style.display = "none";
}