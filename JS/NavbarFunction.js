
import navbar from "./navbar.js";

const nav = navbar()
const container = document.getElementById("navbar_container")

container.innerHTML = nav;
// toggle for language 
var btn = document.getElementById("text");
btn.addEventListener("click", showData);

function showData() {
    document.getElementById("dropDown").classList.toggle("show");
}
var lan = document.getElementById("text-lan");
lan.addEventListener("click", showLanguage);

function showLanguage() {
    document.getElementById("dropDown-lan").classList.toggle("show");
}

var profile = document.getElementById("profileImg");
profile.addEventListener("click", detailsProfile);

function detailsProfile() {
    document.getElementById("profileData").classList.toggle("view");
    document.getElementById("mytopnav").style.zIndex = "1";
}

// open and close for side bar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("navbar").style.marginLeft = "250px";
    document.getElementById("mytopnav").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("mytopnav").style.marginLeft = "0";
}
window.addEventListener("load",()=>{
    var openbtn = document.getElementById("opensidebar");
    openbtn.addEventListener("click",openNav)
    
    var closebtn = document.getElementById("closesidebar");
    closebtn.addEventListener("click",closeNav)
})


// * Toggle for night mode
var toggle = document.getElementById("toggle");
toggle.addEventListener("click", color);
var toggle1 = document.getElementById("toggle1");
toggle1.addEventListener("click", colorchange);

function color() {
    document.body.classList.toggle("bgcolor");
    document.getElementById("navbar").style.backgroundColor = "rgb(27, 27, 27)";
    document.getElementById("mytopnav").style.backgroundColor = "rgb(27, 27, 27)";
    document.getElementById("mytopnav").style.color = "white";
    toggle.style.display = "none";
    toggle1.style.display = "block";
}

function colorchange() {
    toggle1.style.display = "none";
    toggle.style.display = "block";
    document.body.classList.toggle("bgcolor1");
    document.getElementById("navbar").style.backgroundColor = "rgb(245, 245, 245)";
    document.getElementById("mytopnav").style.backgroundColor = "white";
    document.getElementById("mytopnav").style.color = "rgb(0, 0, 0, .75)";
}

var toggleNightmode = document.getElementById("toggle-nightmode");
toggleNightmode.addEventListener("click", colorNight);

function colorNight() {
    document.body.classList.toggle("bgcolor");
    document.getElementById("navbar").style.backgroundColor = "rgb(27, 27, 27)"
    document.getElementById("profileData").style.backgroundColor = "rgb(27, 27, 27)"
    document.getElementById("profileData").style.color = "white";
    toggle.style.display = "none";
    toggle1.style.display = "block";
}

// * closing of login and signup page on click in window
var modal = document.getElementById('login');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById('signup');
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


//* Login and Sign Function Code
var userData = [];

function addData() {
    // e.preventDefault();
    console.log("satya");
    var name = document.getElementById('name').value;
    var contact_no = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (!name || !contact_no || !email || !password) {
        alert("Mendetary to fill all boxes");
        return;
    }
    const userDetail = {
        userName: name,
        userContact: contact_no,
        userEmail: email,
        userPassword: password,
    }

    for (let j = 0; j < userData.length; j++) {
        if (userData[j].userEmail === userDetail.userEmail) {
            alert("Email is already signup");
            return;
        }

    }
    var div = document.getElementById("userName");
    div.innerHTML = "";
    var p = document.createElement("p");
    p.textContent = `Hello, ${name}`;
    div.append(p);
    userData.push(userDetail);
    localStorage.setItem("usersData", JSON.stringify(userData));
    document.getElementById("user").style.display = "none";
    document.getElementById("profile").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("subscription").style.display = "none";
    document.getElementById("after-login").style.display = "block";
}

function usersDataLoad() {
    const data = JSON.parse(localStorage.getItem("usersData"));
    if (data) {
        userData = data;
        //addData(data);
        loginData(data);
    }
}

window.addEventListener("load", function () {
    var btn = document.getElementById('sign');
    btn.addEventListener("click", addData);

    usersDataLoad();

    var loginBtn = document.getElementById('submit');
    loginBtn.addEventListener("click", loginData);
})

function loginData(data) {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    // if (!loginEmail || !loginPassword) {
    //     alert("Fill the details thenlogin");
    //     return;
    // }
    var uemail = "";
    var upassword = "";
    var username;
    for (var i = 0; i < data.length; i++) {
        if (loginEmail === data[i].userEmail) {
            uemail += loginEmail;
            username = data[i].userName;
        }
        if (loginPassword === data[i].userPassword) {
            upassword += loginPassword;
        }
    }
    if (uemail || upassword) {
        alert("invalid Credentials");
        return;
    }
    else {
        document.getElementById("user").style.display = "none";
        document.getElementById("profile").style.display = "block";
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "none";
        document.getElementById("subscription").style.display = "none";
        document.getElementById("after-login").style.display = "block";
        var div = document.getElementById("userName");
        div.innerHTML = "";
        var p = document.createElement("p");
        p.textContent = `Hello, ${username}`;
        div.append(p);
    }
}

// * Log Out account function
var logout = document.getElementById("logOut");
logout.addEventListener("click", afterLogout);

function afterLogout() {
    document.getElementById("user").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("subscription").style.display = "block";
    document.getElementById("after-login").style.display = "none";
}

var logout1 = document.getElementById("log-Out");
logout1.addEventListener("click", Logout);

function Logout() {
    document.getElementById("user").style.display = "block";
    document.getElementById("profile").style.display = "none";
    document.getElementById("subscription").style.display = "block";
    document.getElementById("after-login").style.display = "none";
}

var open = document.getElementById("search");
open.addEventListener("click",openSearch);
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  var close = document.getElementById("closeSearch");
  close.addEventListener("click",closeSearch);
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

async function requestData(type, query) {
    try {
        let res = await fetch(
            `http://127.0.0.1:5000/${type}/?query=${query}&lyrics=false`
        )
        let data = await res.json()
        console.log(data);
        return await data;
    } catch {
        console.log("Something went wrong");
    }
}

var display_card = (type, url, location) => {
    var data = requestData(type, url);
    data.then((value) => {
        let songs = value.songs;
        let doc = document.body;
        let cardsCarousel = doc.querySelector(`${location}`);
        for (var i = 0; i < songs.length; i++) {
            let card = document.createElement("a");
            card.setAttribute("class", "card");
            card.href = songs[i].media_url;
            let img = document.createElement("img");
            img.src = songs[i].image;
            let name = document.createElement("p");
            name.textContent = songs[i].song;
            name.style.margin = "0%";
            name.style.fontWeight = "bold";
            card.append(img, name);
            cardsCarousel.append(card);
        }
    })
}


var trending_cards = () => {
    var type = "result";
    var url = "https://www.jiosaavn.com/featured/trending-songs/Me5RridRfDk_";
    display_card(type, url, ".trend");
}
trending_cards();

// * Button controls for Trending
var form = document.body.querySelector(".form");
var later = document.body.querySelector(".later");

var size2 = 0;

var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size2 += 900;

    for (var i = 0; i < cards.length; i++) {
        // console.log(cards[i]);
        cards[i].style.transform = `translateX(${size2}%)`;
    }
    checkButton();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size2 -= 900;
    for (var i = 0; i < cards.length; i++) {
        // console.log(cards[i]);
        cards[i].style.transform = `translateX(${size2}%)`;
    }
    checkButton();
}
var checkButton = () => {
    // console.log(size2);
    if (size2 >= 0) {
        form.disabled = true;
    }
    else {
        form.disabled = false;
    }
}
checkButton();
form.addEventListener("click", back);
later.addEventListener("click", forward);


open.addEventListener("keyup",handleSearch);

function handleSearch(){
    var value = document.getElementById("search").value;
    if(value!=="")
    {
        display_c("result",value,".trend");
    }
    else{
        trending_cards();
    }
}

var display_c = (type, url, location) => {
    var data = requestData(type, url);
    data.then((value) => {
        let doc = document.body;
        let cardsCarousel = doc.querySelector(`${location}`);
        cardsCarousel.innerHTML="";
        doc.querySelector(".h-tag").innerHTML = `${url} Songs`;
        for (var i = 0; i < value.length; i++) {
            let card = document.createElement("a");
            card.setAttribute("class", "card");
            card.href = value[i].media_url;
            let img = document.createElement("img");
            img.src = value[i].image;
            let name = document.createElement("p");
            name.textContent = value[i].song;
            name.style.margin = "0%";
            name.style.fontWeight = "bold";
            card.append(img, name);
            cardsCarousel.append(card);
        }
    })
}
