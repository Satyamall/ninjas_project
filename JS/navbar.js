function navbar() {
    return `
    <nav id="navbar">
    <button class="openbtn" id="opensidebar">☰</button>
    <div id="icon-box">
        <a href="../HTML/index.html" class="nav-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDGbnzK1jpaDDIMO_HMj7s51AHR-_eoN_Fw&usqp=CAU"
                alt="">
            <img class="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzl9aLImLkCN0w7ofxWK4vlHKwdGPhELbUA&usqp=CAU"
                alt="">
        </a>
    </div>
    <div id="search-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXI_JyOVRGL5fOKjn9qMUF3pWkgFcfDm1oQ&usqp=CAU"
            alt="" class="search-icon" />
        <input type="text" id="search" placeholder="Search Artists, Songs, Albums">
    </div>
    <div id="subscription">
        <a href="" class="ad-free">Go Ad free <span class="ad-free-top">New</span></a>
        <a href="" class="gaana-plus">Get Gaana Plus</a>
    </div>
    <div id="after-login">
        <a href="" class="renew">Renew Gaana Plus</a>
    </div>
    <div id="language">
        <div id="text">
            <span class="text-en">A</span>
            <span class="text-hn">अ</span>
            <div id="dropDown" class="languages">
                <h1>Music Language</h1>
                <div class="lan-content">
                    <small>हिन्दी HINDI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>ENGLISH</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>ਪੰਜਾਬੀ PUNJABI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>తెలుగు TELUGU</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>தமிழ் TAMIL</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>भोजपुरी BHOJPURI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>বাংলা BENGALI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>മലയാളം MALAYALAM</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>ಕನ್ನಡ KANNADA</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>मराठी MARATHI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>ગુજરાતી GUJARATI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>हरयाणवी HARYANVI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>اردو URDU</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>অসমীয়া ASSAMESE</small>
                    <input type="checkbox">
                </div>
                <div>
                    <small>राजस्थानी RAJASTHANI</small>
                    <input type="checkbox">
                </div>
                <div class="lan-content">
                    <small>ଓଡ଼ିଆ ODIA</small>
                    <input type="checkbox">
                </div>
                <div class="bottom">
                    <button class="cancle">Cancle</button>
                    <button class="update">Update</button>
                </div>
            </div>
        </div>
    </div>
    <div id="toggle">
        <img src="https://cdn-icons-png.flaticon.com/128/606/606807.png" alt="">
    </div>
    <div id="toggle1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlIjKnp1RxYC3eLSzzfchdY7P0TYycGoZ5A&usqp=CAU"
            alt="">
    </div>
    <div id="user">
        <button onclick="document.getElementById('login').style.display='block'" style="width:auto;">Log In
            /</button>
        <button onclick="document.getElementById('signup').style.display='block'" style="width:auto;">Sign
            Up</button>
    </div>
    <div id="profile">
        <div id="profile-img">
            <img src="https://a10.gaanacdn.com/images/users/559/crop_110x110_187866559.jpg" alt="" id="profileImg">
            <div id="profileData" class="dataProfile">
                <a href="" class="atag">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU">
                    Profile
                </a>
                <div id="text-lan">
                    <span class="text-en">A</span>
                    <span class="text-hn">अ</span>
                    Languages
                    <div id="dropDown-lan" class="languages dropDown">
                        <h1>Music Language</h1>
                        <div class="lan-content">
                            <small>हिन्दी HINDI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>ENGLISH</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>ਪੰਜਾਬੀ PUNJABI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>తెలుగు TELUGU</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>தமிழ் TAMIL</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>भोजपुरी BHOJPURI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>বাংলা BENGALI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>മലയാളം MALAYALAM</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>ಕನ್ನಡ KANNADA</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>मराठी MARATHI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>ગુજરાતી GUJARATI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>हरयाणवी HARYANVI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>اردو URDU</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>অসমীয়া ASSAMESE</small>
                            <input type="checkbox">
                        </div>
                        <div>
                            <small>राजस्थानी RAJASTHANI</small>
                            <input type="checkbox">
                        </div>
                        <div class="lan-content">
                            <small>ଓଡ଼ିଆ ODIA</small>
                            <input type="checkbox">
                        </div>
                        <div class="bottom">
                            <button class="cancle">Cancle</button>
                            <button class="update">Update</button>
                        </div>
                    </div>
                </div>
                <a href="" class="atag">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfZn1xqIoMwQHNppa1-MOY2I1tA9864XWJw&usqp=CAU"
                        alt="">
                    Settings
                </a>
                <div id="logOut">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Mzix3R-djfnYB4mlXEuYn9RyYbn_jfc8qQ&usqp=CAU"
                        alt="">
                    Log Out
                </div>
                <div id="toggle-nightmode">
                    <img src="https://cdn-icons-png.flaticon.com/128/606/606807.png" alt="">
                    Night Mode
                    <input type="checkbox" id="night">
                </div>
            </div>
        </div>
    </div>
</nav>

<!-- Sider bar code -->
<div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" id="closesidebar">×</a>
    <div class="user-detail">
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU"
                alt="" class="user-profile">
        </div>
        <div id="userName">
            <a href="">Log In /</a>
            <a href="">Sign Up</a>
        </div>
    </div>
    <a href="../HTML/index.html">Home</a>
    <a href="../HTML/radio.html">Radio</a>
    <a href="../HTML/podcast.html">Podcast</a>
    <a href="../HTML/mymusic.html">My Music</a>
    <a href="../HTML/popularInHindi.html">India's Music</a>
    <a href="">
        Language
        <div>(Set Music language)</div>
    </a>
    <br>
    <a href="">
        Night Mode
        <!-- <input id="nightmode" type="checkbox"/> -->
    </a>
    <hr>
    <a href="">
        <h1>Go Premium</h1>
    </a>
    <a href="">Go Ad-Free</a>
    <a href="">Get Gaana Plus</a>
    <hr>
    <a href="">
        <h1>Quick Access</h1>
    </a>
    <a href="../HTML/trendingSongs.html">Trending Songs</a>
    <a href="../HTML/newSongs.html">New Songs</a>
    <a href="../HTML/oldSongs.html">Old Songs</a>
    <a href="../HTML/album.html">Album</a>
    <a href="../HTML/artist.html">Artist</a>
    <a href="../HTML/oldSongs.html">Lyrics</a>
    <a href="../HTML/topCharts.html">Music Lables</a>
    <a href="../HTML/popularInHindi.html">Genres</a>
    <hr>
    <a href="">
       <h1>Account</h1>
    </a>
    <a href="">Profile</a>
    <a href="">Settings</a>
    <a href="" id="log-Out">Log Out</a>
    <div class="space"></div>
</div>

<!-- Login by Popup code-->
<div id="login" class="modal">

    <div class="modal-content animate">
        <div class="imgcontainer">
            <h1>Over 30 million songs to suit every mood & occasion</h1>
            <span onclick="document.getElementById('login').style.display='none'" class="close"
                title="Close Modal">&times;</span>
            <img src="https://a10.gaanacdn.com/gn_img/images/login_bg_v1_1621430866.jpg" alt="Avatar"
                class="avatar">
        </div>
        <div class="container">
            <div href="" class="nav-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDGbnzK1jpaDDIMO_HMj7s51AHR-_eoN_Fw&usqp=CAU"
                    alt="">
                <img class="logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzl9aLImLkCN0w7ofxWK4vlHKwdGPhELbUA&usqp=CAU"
                    alt="">
            </div>
            <h2>Login/Signup</h2>
            <p style="color: rgb(142,142,147);">Get a personalized experience, and access all your music</p>
            <input type="text" placeholder="Enter Email or Mobile Number" id="loginEmail">
            <input type="Current-password" placeholder="Enter Your Password" id="loginPassword">
            <button id="submit">Countinue</button>
            <a href="">Forget Password?</a>
            <p class="p"><span>or continue With</span></p>

            <div class="social">
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=183019041719404&kid_directed_site=0&app_id=183019041719404&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv6.0%2Fdialog%2Foauth%3Fapp_id%3D183019041719404%26cbt%3D1635680012580%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df145dd2187281d4%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%26client_id%3D183019041719404%26display%3Dpopup%26domain%3Dgaana.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgaana.com%252F%26locale%3Den_US%26logger_id%3Df1cf3d4d1e0ad08%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd07554cddef9c%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%2526frame%253Df399fbb993898c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Dpublic_profile%252C%2Bemail%26sdk%3Djoey%26version%3Dv6.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd07554cddef9c%26domain%3Dgaana.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgaana.com%252Ffe9fbb0757a3e8%26relation%3Dopener%26frame%3Df399fbb993898c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"
                    class="facebook">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyo8oGN8k31BlZ9irWpfivk7reIIP2SfrfIA&usqp=CAU"
                        alt="">
                    Facebook
                </a>
                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fgaana.com%3Fid%3Dauth149424&response_type=code%20permission%20id_token&scope=openid%20profile%20email&openid.realm&include_granted_scopes=true&client_id=776891288343-9qek5kfpa2fha96pdo4i8g744m75pmrg.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fgaana.com&access_type=offline&prompt=consent&origin=https%3A%2F%2Fgaana.com&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                    class="google">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbcMeSAwd5Dmy4yldbBKSpB8BBV9DjnLeNA&usqp=CAU"
                        alt="">
                    Google
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Sign Up by Popup code-->
<div id="signup" class="modal">

    <div class="modal-content animate">
        <div class="imgcontainer">
            <h1>Over 30 million songs to suit every mood & occasion</h1>
            <span onclick="document.getElementById('signup').style.display='none'" class="close"
                title="Close Modal">&times;</span>
            <img src="https://a10.gaanacdn.com/gn_img/images/login_bg_v1_1621430866.jpg" alt="Avatar"
                class="avatar">
        </div>
        <div class="container">
            <div href="" class="nav-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDGbnzK1jpaDDIMO_HMj7s51AHR-_eoN_Fw&usqp=CAU"
                    alt="">
                <img class="logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzl9aLImLkCN0w7ofxWK4vlHKwdGPhELbUA&usqp=CAU"
                    alt="">
            </div>
            <h2>Login/Signup</h2>
            <p style="color: rgb(142,142,147);">Get a personalized experience, and access all your music</p>
            <input type="text" placeholder="User Name" id="name">
            <input type="number" placeholder="Enter your Mobile Number" id="number">
            <input type="text" placeholder="Enter your Email" id="email">
            <input type="Current-password" placeholder="Enter Your Password" id="password">
            <button id="sign">Countinue</button>
            <p class="p"><span>or continue With</span></p>

            <div class="social">
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=183019041719404&kid_directed_site=0&app_id=183019041719404&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv6.0%2Fdialog%2Foauth%3Fapp_id%3D183019041719404%26cbt%3D1635680012580%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df145dd2187281d4%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%26client_id%3D183019041719404%26display%3Dpopup%26domain%3Dgaana.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fgaana.com%252F%26locale%3Den_US%26logger_id%3Df1cf3d4d1e0ad08%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd07554cddef9c%2526domain%253Dgaana.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fgaana.com%25252Ffe9fbb0757a3e8%2526relation%253Dopener%2526frame%253Df399fbb993898c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Dpublic_profile%252C%2Bemail%26sdk%3Djoey%26version%3Dv6.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd07554cddef9c%26domain%3Dgaana.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgaana.com%252Ffe9fbb0757a3e8%26relation%3Dopener%26frame%3Df399fbb993898c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0"
                    class="facebook">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyo8oGN8k31BlZ9irWpfivk7reIIP2SfrfIA&usqp=CAU"
                        alt="">
                    Facebook
                </a>
                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fgaana.com%3Fid%3Dauth149424&response_type=code%20permission%20id_token&scope=openid%20profile%20email&openid.realm&include_granted_scopes=true&client_id=776891288343-9qek5kfpa2fha96pdo4i8g744m75pmrg.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fgaana.com&access_type=offline&prompt=consent&origin=https%3A%2F%2Fgaana.com&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                    class="google">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbcMeSAwd5Dmy4yldbBKSpB8BBV9DjnLeNA&usqp=CAU"
                        alt="">
                    Google
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Second Navbar -->
<div class="topnav" id="mytopnav">
    <a href="../HTML/index.html" class="active">All</a>
    <a href="../HTML/trendingSongs.html">Trending Songs</a>
    <a href="../HTML/newSongs.html">New Songs</a>
    <a href="../HTML/oldSongs.html">Old Songs</a>
    <div class="dropdown">
        <button class="dropbtn">Moods & Genres
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="#">Festivals</a>
            <a href="#">Romance</a>
            <a href="#">90s & Early 2000s</a>
            <a href="#">Party</a>
            <a href="#">Retro</a>
            <a href="#">Indie</a>
            <a href="#">Bhakti</a>
            <a href="#">EDM</a>
            <a href="#">Ghazals</a>
            <a href="#">Workout</a>
            <a href="#">Stars</a>
            <a href="#">Wedding</a>
            <a href="#">Kids</a>
            <a href="#">Dance</a>
            <a href="#">Friendship</a>
        </div>
    </div>
    <a href="../HTML/album.html">Album</a>
    <a href="../HTML/radio.html">Radio</a>
    <a href="../HTML/podcast.html">Podcast</a>
    <a href="../HTML/mymusic.html">My Music</a>
</div>

<div id="myOverlay" class="overlay">
    <span class="closebtn" id="closeSearch" title="Close Overlay">×</span>
    <div class="overlay-content">
    <div class="display">
    <div class="tag">
        <h2 class="h-tag">Trending Songs</h2>
        <a href="../HTML/trendingSongs.html" class="a-tag">See All</a>
    </div>
    <div class="cards_carousel carousel trend">
        <button class="b1 form"><</button>
        <button class="b2 later">></button>
    </div>
    </div>
    </div>
</div>`
}

export default navbar;