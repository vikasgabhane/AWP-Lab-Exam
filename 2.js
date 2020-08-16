function submitfun() {

    let uname = document.querySelector("#input1").value;
    let pwd = document.querySelector("#input2").value;

    let newEle = document.createElement("div");

    newEle.style.border = "1px black solid";
    newEle.style.margin = "10px";
    newEle.style.padding = "10px 80px 10px 80px";
    newEle.style.borderRadius = "8px";

    let uEle = document.createElement("div");
    let pEle = document.createElement("div");

    uEle.textContent = "User Name : " + uname;
    pEle.textContent = "Password  : " + pwd;

    newEle.appendChild(uEle);
    newEle.appendChild(pEle);

    const userData = document.querySelector("#data");

    userData.insertBefore(newEle, userData.firstChild);

    document.querySelector("#input1").value = "";

    document.querySelector("#input2").value = "";

}