document.getElementById("date").innerHTML = new Date();
function select(obj, id){
    obj.setAttribute("class", "chosen");
    pli = obj.parentNode.parentNode;
    pdiv = obj.parentNode.parentNode.parentNode;
    pli.setAttribute("class", "done");
    ndiv = document.getElementById(id);
    ndiv.setAttribute("class", "display");
}

function endtest1(obj){
    obj.setAttribute("class", "chosen");
    pli = obj.parentNode.parentNode;
    pdiv = obj.parentNode.parentNode.parentNode;
    pli.setAttribute("class", "done");
    window.location.assign("../script/result1.html");
}
function endtest2(obj){
    obj.setAttribute("class", "chosen");
    pli = obj.parentNode.parentNode;
    pdiv = obj.parentNode.parentNode.parentNode;
    pli.setAttribute("class", "done");
    window.location.assign("../script/result2.html");
}
function endtest3(obj){
    obj.setAttribute("class", "chosen");
    pli = obj.parentNode.parentNode;
    pdiv = obj.parentNode.parentNode.parentNode;
    pli.setAttribute("class", "done");
    window.location.assign("../script/result3.html");
}
function endtest4(obj){
    obj.setAttribute("class", "chosen");
    pli = obj.parentNode.parentNode;
    pdiv = obj.parentNode.parentNode.parentNode;
    pli.setAttribute("class", "done");
    window.location.assign("../script/result4.html");
}
function endtest5(obj){
    obj.setAttribute("class", "chosen");
    pli = obj.parentNode.parentNode;
    pdiv = obj.parentNode.parentNode.parentNode;
    pli.setAttribute("class", "done");
    window.location.assign("../script/result5.html");
}

var names=["Arya Stark","Cersei Lannister","Petyr Baelish","Eddard Stark","Tyrion Lannister","John Snow","Daenerys Targaryen","Ser Jaime Lannister","Theon Greyjoy","Joffrey Baratheon"];
document.getElementById("myresult").innerHTML = names;

function myFunction() {
    var itm = document.getElementById("copy");
    var cln = itm.cloneNode(true);
    document.getElementById("paste").appendChild(cln);
}
