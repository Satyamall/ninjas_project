// * Carousel 

var banner_carousel = document.body.querySelector(".banner_carousel");
var banner = banner_carousel.querySelectorAll(".banner");
var b1 = banner_carousel.querySelector(".b1");
var b2 = banner_carousel.querySelector(".b2");
// console.log(b1,b2);
var size = -50;
var delay = 2500;

var next = () => {
    size -= 102.04;
    // console.log(size);

    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = `translateX(${size}%)`;
    }

    if (size < -866) {
        size = -50;
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = "0s";
            banner[i].style.transform = `translateX(${size}%)`;
        }
    }
    else {
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = ".5s";
        }
    }
}

var previous = () => {
    size += 102.04;
    // console.log(size);

    for (var i = 0; i < banner.length; i++) {
        banner[i].style.transform = `translateX(${size}%)`;
    }

    if (size > -50) {
        size = -866;
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = "0s";
            banner[i].style.transform = `translateX(${size}%)`;
        }
    }
    else {
        for (var i = 0; i < banner.length; i++) {
            banner[i].style.transitionDuration = ".5s";
        }
    }
}

var play = setInterval(next, delay);

b1.addEventListener("click", previous);
b2.addEventListener("click", next);

// * Fetch request

// var type = "result";
// var query = "Meri Zindagi Hai Tu";

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

var display_c = (type, url, location) => {
    var data = requestData(type, url);
    data.then((value) => {
        let doc = document.body;
        let cardsCarousel = doc.querySelector(`${location}`);
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



var trending_cards = () => {
    var type = "result";
    var url = "https://www.jiosaavn.com/featured/trending-songs/Me5RridRfDk_";
    display_card(type, url, ".trending");
}
trending_cards();

var releases_cards = () => {
    var type = "result";
    var url = "https://www.jiosaavn.com/featured/taaza-tunes/Me5RridRfDk_";
    display_card(type, url, ".releases");
}
releases_cards();

var top_cards = () => {
    var type = "result";
    var url = "bollywood-masala";
    display_c(type, url, ".topCharts");
    display_c(type, "hindi-romantic-top", ".topCharts");
    display_c(type, "90s-hindi-top", ".topCharts");
    display_c(type, "top-searches", ".topCharts");
    display_c(type, "pop-top", ".topCharts");
    display_c(type, "hindi-dance-top", ".topCharts");
    display_c(type, "daily-top", ".topCharts");
    display_c(type, "Bhakti-top", ".topCharts");
    display_c(type, "punjabi-top", ".topCharts");
    display_c(type, "haryanavi-top", ".topCharts");
    display_c(type, "Arijit-singh-top", ".topCharts");
}
top_cards();

var popularInHindi_cards = () => {
    var type = "result";
    var url = "popular-in-hindi-songs";
    display_c(type, url, ".popularInHindi");
    display_c(type, url, ".popularInHindi");
}
popularInHindi_cards();

var artists = [["https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1631509967.webp", "Arijit Singh"],
["https://a10.gaanacdn.com/gn_img/artists/21GWwrR3pk/1GWwYz4DKp/size_m_1567610470.webp", "Tanishk Bagchi"],
["https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_m_1516707336.webp", "Pritam"],
["https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1516701680.webp", "Neha Kakkar"],
["https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp", "Badshah"],
["https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg", "B Praak"],
["https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1516802409.webp", "Yo Yo Honey Singh"],
["https://a10.gaanacdn.com/gn_img/artists/ZaP37OR3Dy/ZaP37lBWDy/size_m_1516796833.webp", "Lata Mangeshkar"],
["https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNgP763B/size_m_1595857138.webp", "Tony Kakkar"]];

var artists_card = (location) => {
    let doc = document.body;
    let cardsCarousel = doc.querySelector(`${location}`);
    for (var i = 0; i < artists.length; i++) {
        let card = document.createElement("a");
        card.setAttribute("class", "card");
        card.href = "";
        let img = document.createElement("img");
        img.src = artists[i][0];
        img.style.borderRadius = "50%";
        let name = document.createElement("p");
        name.textContent = artists[i][1];
        name.style.margin = "0%";
        name.style.fontWeight = "bold";
        card.append(img, name);
        cardsCarousel.append(card);
    }
}
artists_card(".artists")

var radios = [{ "station": "Meethi Mirchi Radio ...", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/qa4WEqWP1p/qa4WEqWP1p/size_m_1563783408.webp", "media_url": "https://gaana.com/radio/mirchiplay-meethi-mirchi" },
              { "station": "90'S Ki Cassette Radio ...", "image": "https://a10.gaanacdn.com/gn_img/g_radio_circle/4Z9bqZoKyQ/4Z9bqNPKyQ/size_m_1628848671.webp", "media_url": "https://gaana.com/gaanaradio/90s-ki-cassette-radio" },
              { "station": "Mirchi Toota Dil", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/6Zxb27K9wN/6Zxb27K9wN/size_m_1586325953.webp", "media_url": "https://gaana.com/radio/mirchi-toota-dil" },
              { "station": "Non Stop Party Diwali", "image": "https://a10.gaanacdn.com/gn_img/g_radio_circle/ZaP37RKDy7/ZaP37MXbDy/size_m_1635176288.webp", "media_url": "https://gaana.com/gaanaradio/non-stop-party-diwali" },
              { "station": "Mirchi 90'S Radio - Filmy Hits", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/DwPKOBbqVZ/DwPKOBbqVZ/size_m_1563783835.webp", "media_url": "https://gaana.com/radio/mirchiplay-mirchi-90s" },
              { "station": "Kuch Ghazalein Kuch Gaane Radio", "image": "https://a10.gaanacdn.com/gn_img/g_radio_circle/qa4WEqqWP1/qa4WEnYbP1/size_m_1628848632.webp", "media_url": "https://gaana.com/gaanaradio/kuch-ghazalein-kuch-gaane-radio" },
              { "station": "Mirchi Indies Radio", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/koMWQBbqLE/koMWQBbqLE/size_m_1628670390.webp", "media_url": "https://gaana.com/radio/mirchiplay-mirchi-indies" },
              { "station": "Happy Feels", "image": "https://a10.gaanacdn.com/gn_img/g_radio_circle/21GWwrR3pk/21GWwe4Kpk/size_m_1588760360.webp", "media_url": "https://gaana.com/gaanaradio/happy-feels-1" },
              { "station": "Filmy Mirchi Radio - Bollywood", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/a7LWBzWzXA/a7LWBzWzXA/size_m_1628670415.webp", "media_url": "https://gaana.com/radio/mirchiplay-filmy-mirchi" },
              { "station": "Riya's Retro Radio", "image": "https://a10.gaanacdn.com/gn_img/g_radio_circle/R7vKXr6Wmr/R7vKXNxWmr/size_m_1628848715.webp", "media_url": "https://gaana.com/gaanaradio/riyas-retro-radio" },
              { "station": "Mirchi Top 20 Radio", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/9En3peWXDV/9En3peWXDV/size_m_1563783889.webp", "media_url": "https://gaana.com/radio/mirchiplay-mirchi-top-20"},
              { "station": "Morning Radio", "image": "https://a10.gaanacdn.com/gn_img/g_radio_circle/10q3ZR1352/10q3Zm2K52/size_m_1563778678.webp", "media_url": "https://gaana.com/gaanaradio/morning-radio"},
              { "station": "Mirchi Retro", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/4Z9bqo3yQn/4Z9bqo3yQn/size_m_1619603652.webp", "media_url": "https://gaana.com/radio/mirchiplay-retro-hits"},
              { "station": "Sukoon Ke Pal", "image": "https://a10.gaanacdn.com/gn_img/g_radio_circle/P7m3GvNKqx/P7m3Gw63qx/size_m_1584715867.webp", "media_url": "https://gaana.com/gaanaradio/sukoon-ke-pal-1"},
              { "station": "Club Mirchi Radio - Party 24X7", "image": "https://a10.gaanacdn.com/gn_img/m_radio_circle/w4MKPObojg/w4MKPObojg/size_m_1563783532.webp", "media_url": "https://gaana.com/radio/mirchiplay-club-mirchi"}];

var radio_card = (location) => {
    let doc = document.body;
    let cardsCarousel = doc.querySelector(`${location}`);
    for (var i = 0; i < radios.length; i++) {
        let card = document.createElement("a");
        card.setAttribute("class", "card");
        card.href = radios[i].media_url;
        let img = document.createElement("img");
        img.src = radios[i].image;
        img.style.borderRadius = "50%";
        let name = document.createElement("p");
        name.textContent = radios[i].station;
        name.style.margin = "0%";
        name.style.fontWeight = "bold";
        card.append(img, name);
        cardsCarousel.append(card);
    }
}

radio_card(".radio");

var justArrived = [{"songs":"New Releases Hindi Songs","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVRgWkq/XWVVvo10Wk/size_m_1635572674.webp","media_url":"https://gaana.com/playlist/gaana-dj-new-releases-hot-50-hindi"},
                   {"songs":"New Releases English Songs","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Me3rMx/l3MZ7qeGWr/size_m_1635458856.webp","media_url":"https://gaana.com/playlist/gaana-dj-international-weekly-hot-20"},
                   {"songs":"New Releases Punjabi Songs","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/MmqK5EKwRO/qK57eLrXWw/size_m_1635418347.webp","media_url":"https://gaana.com/playlist/gaana-dj-new-release-hot-20-punjabi"},
                   {"songs":"Telugu Latest Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/D0PKLqr3Gl/PKLvZzqRWG/size_m_1635345467.webp","media_url":"https://gaana.com/playlist/gaana-dj-telugu-latest-hits-1"},
                   {"songs":"Latest In Dance","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/6Zxb27K9wN/xb2r9oA7b9/size_m_1635745407.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-dance-2018-hindi"},
                   {"songs":"Tamil Latest Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/qa4WEqqWP1/a4WEYARqWP/size_m_1635799765.jpg","media_url":"https://gaana.com/playlist/gaana-dj-tamil-latest-hits"},
                   {"songs":" Latest Dance - International","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Oxd3xzPbgV/d3xDxAmq3g/size_m_1635416004.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-dance-2021-international"},
                   {"songs":"Punjabi Latest Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/MmqK5EKwRO/qK5pXnVmbw/size_m_1633668191.jpg","media_url":"https://gaana.com/playlist/gaana-dj-punjabi-latest-hits"},
                   {"songs":"Telugu Latest Dance","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPObojg/MKPrz154Wo/size_m_1609832689.jpg","media_url":"https://gaana.com/playlist/gaana-dj-telugu-latest-dance"},
                   {"songs":"Latest In Love","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/0wrb4N3Lg7/rb4q9jJaKL/size_m_1635745393.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-in-love"},
                   {"songs":" Latest EDM - International","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Bp1bAynb02/1bALA4e4W0/size_m_1635457188.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-edm-2021"},
                   {"songs":"Tamil Dance Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Rz4W8vKxD5/z4W8pjQ6Wx/size_m_1630358671.jpg","media_url":"https://gaana.com/playlist/gaana-dj-tamil-dance-hits"},
                   {"songs":"Punjabi Latest Duets","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/21GWwR3pkg/GWwMAdwRKp/size_m_1579697308.png","media_url":"https://gaana.com/playlist/gaana-dj-punjabi-latest-duets"},
                   {"songs":"Latest Love Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Mye3rM/l3MRqwdyWr/size_m_1632505269.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-romantic-hits"},
                   {"songs":"Latest Love","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/10q3Zj1352/q3Z6gdr135/size_m_1634820012.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-romantic-hits-1"},
                   {"songs":" Latest Love - International","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mrWNQX/A3moMgGGbN/size_m_1635415931.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-love-2021-international"},
                   {"songs":"Trending In Telugu","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPgOboj/MKPrGDj4Wo/size_m_1627495627.jpg","media_url":"https://gaana.com/playlist/gaana-dj-trending-in-telugu"},
                   {"songs":"Kannada Latest Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GvNKqx/m3GPXge5Wq/size_m_1585742989.jpg","media_url":"https://gaana.com/playlist/gaana-dj-kannada-latest-hits"},
                   {"songs":"Latest Love Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/g4w3vr3jJB/w3vJd8oj3j/size_m_1632505196.jpg","media_url":"https://gaana.com/playlist/gaana-dj-trending-romantic-hits"},
                   {"songs":" Kannada Dance Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/JD2KJyAbOL/2KJkD0pm3O/size_m_1609848264.jpg","media_url":"https://gaana.com/playlist/gaana-dj-kannada-dance-hits"},
                   {"songs":"Trending In Kannada","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mar3NQ/A3mdropdKN/size_m_1627495667.jpg","media_url":"https://gaana.com/playlist/gaana-dj-trending-in-kannada"},
                   {"songs":" Latest Hip-Hop -International","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/4Z9bqo3yQn/9bq48dO1Wy/size_m_1631999847.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-hip-hop-2021-international"},
                   {"songs":"New Releases Bhojpuri Songs","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/koMWQ4B3qL/MWQgq2OaKq/size_m_1635418819.jpg","media_url":"https://gaana.com/playlist/gaana-dj-new-releases-hot-20-bhojpuri"},
                   {"songs":"Bhojpuri Latest Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/lJvKa63DV9/vKaL8Do4bD/size_m_1635011099.jpg","media_url":"https://gaana.com/playlist/gaana-dj-bhojpuri-latest-hits"},
                   {"songs":"Latest Love - Marathi","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP37RKDy7/P371YGB9bD/size_m_1635754978.jpg","media_url":"https://gaana.com/playlist/gaana-dj-marathi-top-20-romance"},
                   {"songs":"Latest Dance - Marathi","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Mye3rM/l3MmYgXB3r/size_m_1635754916.jpg","media_url":"https://gaana.com/playlist/gaana-dj-marathi-top-20-party"},
                   {"songs":"Latest Love","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/a7LWBzWzXA/LWBad1rO3z/size_m_1634820490.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-love-songs-of-malayalam"},
                   {"songs":"Malayalam Latest Hit","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVRgWkq/XWVRQyjwWk/size_m_1618394741.jpg","media_url":"https://gaana.com/playlist/gaana-dj-malayalam-latest-hits"},
                   {"songs":" Latest Rock - International","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36v3rGe/p36Bj7rR3r/size_m_1635415639.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-rock-2021-international"},
                   {"songs":"Latest Love - Gujarati","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Me3rMx/l3MXqQJBKr/size_m_1626412566.jpg","media_url":"https://gaana.com/playlist/gaana-dj-latest-love-gujarati"},
                   {"songs":"New Releases Haryanvi Songs","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1Rbk56/VW1eQNxLWk/size_m_1635419391.jpg","media_url":"https://gaana.com/playlist/gaana-dj-new-release-hot-20-haryanvi"},
                   {"songs":"New Indie Releases Indie","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1Rbk56/VW1QaOvRWk/size_m_1635473734.jpg","media_url":"https://gaana.com/playlist/gaana-dj-new-indie-pop-hot-50"},
                   ];

var justArrived_card = (location) =>{
    let doc = document.body;
    let cardsCarousel = doc.querySelector(`${location}`);
    for (var i = 0; i < justArrived.length; i++) {
        let card = document.createElement("a");
        card.setAttribute("class", "card");
        card.href = justArrived[i].media_url;
        let img = document.createElement("img");
        img.src = justArrived[i].image;
        let name = document.createElement("p");
        name.textContent = justArrived[i].songs;
        name.style.margin = "0%";
        name.style.fontWeight = "bold";
        card.append(img, name);
        cardsCarousel.append(card);
    }
}
justArrived_card(".arrived");

var retroPlaylists_cards = () => {
    var type = "result";
    var url = "retro-playlists";
    display_c(type, url, ".retro");
    display_c(type, url, ".retro");
}
retroPlaylists_cards();

var recommends = [{"songs":"90s Ka Shahrukh","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPgOboj/MKPg4qNObo/size_m_1532431594.webp","media_url":"https://gaana.com/playlist/gaana-dj-90s-ka-shahrukh"},
                  {"songs":" Feel Good Pop","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/z8k3yd1Krx/8k3yq4yP3r/size_m_1633072201.webp","media_url":"https://gaana.com/playlist/gaana-dj-mood-booster"},
                  {"songs":"Slow Romantic Hindi","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/XzVWRLKdqR/zVWRmox63d/size_m_1625063909.webp","media_url":"https://gaana.com/playlist/gaana-dj-slow-romantic-hindi"},
                  {"songs":" Soft Love","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDElKnL/JbDdEGZmbn/size_m_1635481113.webp","media_url":"https://gaana.com/playlist/gaana-dj-high-on-love"},
                  {"songs":"Old Is Gold","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3GOVNN3q/size_m_1635512409.webp","media_url":"https://gaana.com/playlist/gaana-dj-old-is-gold-1"},
                  {"songs":"International Pop Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDlbnL8/JbD7mmxqWn/size_m_1626453754.webp","media_url":"https://gaana.com/playlist/gaana-dj-pop-music"},
                  {"songs":"Desi Dance","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/YoEWlabzXB/oEWlYkoQbz/size_m_1630155961.webp","media_url":"https://gaana.com/playlist/gaana-dj-desi-dance"},
                  {"songs":"Hip Hop Now","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/DwPKOxB3qV/PKOR6PqBbq/size_m_1625155641.webp","media_url":"https://gaana.com/playlist/gaana-dj-hip-hop-now"},
                  {"songs":"Hits Of Akshay Kumar","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/kGxbnw0Ky4/GxbnA5aWy4/size_m_1628651413.webp","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-akshay-kumar"},
                  {"songs":" Acoustic Pop","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Dk9KNk23Bx/k9KNd9EBWB/size_m_1625464702.webp","media_url":"https://gaana.com/playlist/gaana-dj-acoustic-pop"},
                  {"songs":"2000s Top Romance","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9En3peWXDV/En3poxMEKX/size_m_1625833483.webp","media_url":"https://gaana.com/playlist/gaana-dj-top-2000-romance"},
                  {"songs":"90'S Mixtape","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/JD2KJyAbOL/2KJyvZEnbO/size_m_1625943711.webp","media_url":"https://gaana.com/playlist/gaana-dj-90s-mixtape"},
                  {"songs":"Bollywood Lo-Fi","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/JD2KJAbOLw/2KJpav1PWO/size_m_1626510086.webp","media_url":"https://gaana.com/playlist/gaana-dj-bollywood-lo-fi"},
                  {"songs":"Best Of K-POP","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/jBr3gLyWR1/r3gjkGMlKR/size_m_1629215423.webp","media_url":"https://gaana.com/playlist/gaana-dj-best-of-k-pop"},
                  {"songs":"Naughty Indipop","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Oxd3xP3gVY/d3xD4ro93g/size_m_1631440233.webp","media_url":"https://gaana.com/playlist/gaana-dj-naughty-indipop"},
                  {"songs":" Electronic Love","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Mye3rM/l3MymRg63r/size_m_1620581990.webp","media_url":"https://gaana.com/playlist/gaana-dj-electronic-love"},
                  {"songs":"Best Of Darshan Raval","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36PvbrG/p36V1R6R3r/size_m_1620037535.webp","media_url":"https://gaana.com/playlist/gaana-dj-best-of-darshan-raval"},
                  {"songs":" Repeat Mode On","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Oxd3xzPbgV/d3x79kLDKg/size_m_1515082701.jpg","media_url":"https://gaana.com/playlist/gaana-dj-repeat-mode-on"},
                  {"songs":"Indie Top 50","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/dwN39y83DP/N39l1RdvKD/size_m_1629185462.webp","media_url":"https://gaana.com/playlist/gaana-dj-top-50-indie-songs"},
                  {"songs":"Workout Beats","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9En3pqeWXD/En3pDq883X/size_m_1619805868.webp","media_url":"https://gaana.com/playlist/gaana-dj-workout-beats"},
                  {"songs":"Heartbreak Hits","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/d41WjznWPL/41WjdzEeKP/size_m_1632304093.webp","media_url":"https://gaana.com/playlist/gaana-dj-sad-songs-hindi"},
                  {"songs":" Viral Hits - English","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9En3pqeWXD/n3pd2GQ03X/size_m_1630096344.webp","media_url":"https://gaana.com/playlist/gaana-dj-viral-hits-english"},
                  {"songs":"Top Ghazals","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/6Zxb27K9wN/Zxb2GL6oK9/size_m_1515072965.webp","media_url":"https://gaana.com/playlist/gaana-dj-top-ghazals"},
                  {"songs":" EZ","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVgbkqL/XWVMVEeR3k/size_m_1621415476.webp","media_url":"https://gaana.com/playlist/gaana-dj-easy"},
                  {"songs":"Indie Electronic","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Rz4W8evbxD/4W8G0DG43x/size_m_1629196038.webp","media_url":"https://gaana.com/playlist/gaana-dj-indie-electronic"},
                  {"songs":"Daily Dose Of Energy","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/2lV3d1WRgB/V3dOEe9OKR/size_m_1631116878.webp","media_url":"https://gaana.com/playlist/gaana-dj-daily-dose-of-energy"}
                 ];
var recommends_cards = (location) => {
    let doc = document.body;
    let cardsCarousel = doc.querySelector(`${location}`);
    for (var i = 0; i < recommends.length; i++) {
        let card = document.createElement("a");
        card.setAttribute("class", "card");
        card.href = recommends[i].media_url;
        let img = document.createElement("img");
        img.src = recommends[i].image;
        let name = document.createElement("p");
        name.textContent = recommends[i].songs;
        name.style.margin = "0%";
        name.style.fontWeight = "bold";
        card.append(img, name);
        cardsCarousel.append(card);
    }
}
recommends_cards(".recommends");

var gaanaOriginals_card = ()=>{
    var type = "result";
    display_c(type,"hindi-top-songs",".originals");
    display_c(type,"fresh-hits",".originals");
    var url = "gaana-originals-bollywood";
    display_c(type, url, ".originals");
    display_c(type,"gaana",".originals");
}
gaanaOriginals_card();

var popularInEnglish_cards = ()=>{
    var type = "result";
    var url = "popular-in-english";
    display_c(type,"english-all-time-favourites",".popularInEnglish");
    display_c(type,url,".popularInEnglish");
}
popularInEnglish_cards();

var starGallery = [{"star":"Featuring Dev Anand","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/mGjKr1b6zX/GjKreMrjb6/size_m_1633416533.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-dev-anand"},
                   {"star":"Best Of Katrina Kaif","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/0wrb4N3Lg7/wrb4qjmLKL/size_m_1628651558.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-katrina-kaif-1"},
                   {"star":"Featuring Dharmendra","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Oxd3xP3gVY/xd3xzp7lbg/size_m_1633416645.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-dharmendra"},
                   {"star":"Hits Of Aishwarya Rai","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/koMWQBbqLE/oMWQ7GPkKq/size_m_1628661001.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-aishwariya-rai"},
                   {"star":"Best Of Hrithik Roshan","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/R7vKXr6Wmr/7vKX17z3mr/size_m_1628651870.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-hrithik-roshan"},
                   {"star":"Best Of Sanjay Dutt","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mar3NQ/A3m96Ekd3N/size_m_1628652282.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-sanjay-dutt-1"},
                   {"star":"Hits Of Ranbir Kapoor","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVgbkqL/OXWV59eL3k/size_m_1628653069.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-ranbir-kapoor"},
                   {"star":"Best Of Rani Mukherji","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9En3pqeWXD/n3pqve20WX/size_m_1628652946.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-rani-mukerji"},
                   {"star":"Hits Of Shraddha Kapoor","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Rz4W8vKxD5/z4W8QnJ4bx/size_m_1628652173.jpg","media_url":"https://gaana.com/playlist/gaana-dj-hits-of-shraddha-kapoor"},
                   {"star":"Best Of Sushmita Sen","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP37OR3Dy/aP37zpaXKD/size_m_1543322027.jpg","media_url":"https://gaana.com/playlist/gaana-dj-sushmita-sen"},
                   {"star":"90s Ajay Devgn","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Me3rMx/l3Mo4w75br/size_m_1515083310.jpg","media_url":"https://gaana.com/playlist/gaana-dj-90s-ajay-devgn"},
                   {"star":"Best Of Kajol","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36PvbrG/Lp36oVeGWr/size_m_1628652511.jpg","media_url":"https://gaana.com/playlist/gaana-dj-kajol"},
                   {"star":"Best Of Rekha","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/4Z9bqgo3yQ/Z9bqqLpyby/size_m_1634898089.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-rekha-1"},
                   {"star":"Best Of Sidharth Malhotra","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/kGxbnw0Ky4/xbn1qMP0Wy/size_m_1632816260.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-sidharth-malhotra"},
                   {"star":"Best Of Shahid Kapoor","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mrWNQX/1A3mZxJeWN/size_m_1628652011.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-shahid-kapoor"},
                   {"star":"Best Of Parineeti","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1Rbk56/rVW1DLmg3k/size_m_1628653013.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-parineeti"},
                   {"star":"90s Akshay Kumar","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/w4MKPObojg/MKP8Gz1GKo/size_m_1515083473.jpg","media_url":"https://gaana.com/playlist/gaana-dj-90s-akshay-kumar"},
                   {"star":"Best Of Saif Ali Khan","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Rz4W8vKxD5/z4W8BX0EKx/size_m_1628652324.jpg","media_url":"https://gaana.com/playlist/gaana-dj-nawaab-saif-ali-khan"},
                   {"star":"Hits Of Akshay Kumar","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/kGxbnw0Ky4/GxbnA5aWy4/size_m_1628651413.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-akshay-kumar"},
                   {"star":"Hits Of Sridevi","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/NOXWVgbkqL/OXWV04zLKk/size_m_1628653215.jpg","media_url":"https://gaana.com/playlist/gaana-dj-hits-of-sridevi"},
                   {"star":"Best Of Priyanka Chopra","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/qaLKY23pO4/aLKYgAB2Wp/size_m_1632816004.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-priyanka-chopra"},
                   {"star":"Best Of John Abraham","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/koMWQ7BKqL/oMWQ71EPKq/size_m_1628652046.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-best-of-john-abraham"},
                   {"star":"Hits Of Alia Bhatt","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/XYybzNrb2g/Yybz0XGE32/size_m_1628652460.jpg","media_url":"https://gaana.com/playlist/gaana-dj-hits-of-alia-bhatt"},
                   {"star":"Featuring Shahrukh","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/MmqK5pEbwR/mqK5pMvlbw/size_m_1628651695.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-best-of-srk"},
                   {"star":"Best Of Emraan Hashmi","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9En3peWXDV/En3p7aM0KX/size_m_1628652879.jpg","media_url":"https://gaana.com/playlist/gaana-dj-the-sensation-emraan-hashmi"},
                   {"star":"Best Of Deepika Padukone","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Dk9KNk23Bx/k9KNk52B3B/size_m_1628651730.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-deepika-padukone"},
                   {"star":"Best Of Anushka","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/kGxbn03y4r/GxbnL1RV3y/size_m_1515070952.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-anushka"},
                   {"star":"Best Of Aamir Khan","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/jBr3gLyWR1/Br3genGNbR/size_m_1628651789.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-best-of-aamir-khan"},
                   {"star":"90s Anil Kapoor","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/ZaP374RWDy/P37leO11WD/size_m_1515083318.jpg","media_url":"https://gaana.com/playlist/gaana-dj-90s-anil-kapoor-1"},
                   {"star":"Best Of Karisma Kapoor","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3G59Q9bq/size_m_1632815331.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-karisma-kapoor"},
                   {"star":"Best Of Vidya Balan","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/d41WjnWPLq/41WjPAm5KP/size_m_1628652419.jpg","media_url":"https://gaana.com/playlist/gaana-dj-happy-birthday-vidya"},
                   {"star":"Best Of Ranveer Singh","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9MAWe7KyJe/MAWeXBOq3y/size_m_1628651946.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-ranveer-singh"},
                   {"star":"Best Of Anil Kapoor","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/dwN398KDPa/wN39OZjZbD/size_m_1628652909.jpg","media_url":"https://gaana.com/playlist/gaana-dj-anil-kapoor-bday-special"},
                   {"star":"90s Ka Salman","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/JD2KJyAbOL/2KJypQ5NbO/size_m_1532520455.jpg","media_url":"https://gaana.com/playlist/gaana-dj-90s-ka-salman"},
                   {"star":"Best Of Tiger Shroff","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/zLp36PvbrG/p36JkjeB3r/size_m_1628652651.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-tiger-shroff"},
                   {"star":"Hits Of Madhuri Dixit","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/6Zxb27K9wN/Zxb2pPvw39/size_m_1628653036.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-hits-of-madhuri-dixit"},
                   {"star":"Best Of Jacqueline","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Rz4W8evbxD/z4W8Vo0JKx/size_m_1628660761.jpg","media_url":"https://gaana.com/playlist/gaana-dj-charming-jacqueline"},
                   {"star":"Best Of Ajay Devgn","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/Bp1bAynb02/p1bAmMy4b0/size_m_1628651594.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-ajay-devgan"},
                   {"star":"Best Of Kangana Ranaut","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/mGjKr1b6zX/GjKrmpAJb6/size_m_1632815294.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-kangna-ranaut"},
                   {"star":"Best Of Govinda","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Me3rMx/1l3MgezDbr/size_m_1515073446.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-govinda-1"},
                   {"star":"Best Of Sunny Leone","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/XzVWRyL3dq/VWRyYx2y3d/size_m_1515079328.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-sunny-leone-2"},
                   {"star":"Best Of Farhan Akhtar","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9En3pqeWXD/En3pqZgPWX/size_m_1515070453.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-best-of-farhan-akhtar"},
                   {"star":"Best Of R Madhavan","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/4Z9bqo3yQn/Z9bqordX3y/size_m_1515070984.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-best-of-madhavan"},
                   {"star":"Featuring Sonakshi Sinha","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/qa4WEqWP1p/a4WEPRLY3P/size_m_1632816297.jpg","media_url":"https://gaana.com/playlist/gaana-dj-hits-of-sonakshi-sinha"},
                   {"star":"Best Of Sonam Kapoor","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/JD2KJyAbOL/D2KJz7nmKO/size_m_1631777806.jpg","media_url":"https://gaana.com/playlist/gaana-dj-fashionista-sonam-kapoor"},
                   {"star":"Best Of Neetu Singh","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/01A3mar3NQ/1A3mGr1jbN/size_m_1632815875.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-neetu-singh"},
                   {"star":"Featuring Rajesh Khanna","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/oAJbDElKnL/AJbDljjlbn/size_m_1633416740.jpg","media_url":"https://gaana.com/playlist/gaana-dj-romantic-hits-of-rajesh-khanna"},
                   {"star":"Best Of Parveen Babi","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/2lV3dl13Rg/lV3dZBp1bR/size_m_1632815952.jpg","media_url":"https://gaana.com/playlist/inhouse-dj-best-of-parveen-babi"},
                   {"star":"Best Of Sanjeev Kumar","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/81l3Me3rMx/1l3M5JrB3r/size_m_1632816178.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-sanjeev-kumar"},
                   {"star":"Best Of Biswajeet","image":"https://a10.gaanacdn.com/gn_pl_img/playlists/9MAWe97WyJ/AWePmGPL3y/size_m_1513165311.jpg","media_url":"https://gaana.com/playlist/gaana-dj-best-of-biswajeet"},
                  ];

var starGallery_card=(location)=>{
    let doc = document.body;
    let cardsCarousel = doc.querySelector(`${location}`);
    for (var i = 0; i < starGallery.length; i++) {
        let card = document.createElement("a");
        card.setAttribute("class", "card");
        card.href = starGallery[i].media_url;
        let img = document.createElement("img");
        img.src = starGallery[i].image;
        let name = document.createElement("p");
        name.textContent = starGallery[i].star;
        name.style.margin = "0%";
        name.style.fontWeight = "bold";
        card.append(img, name);
        cardsCarousel.append(card);
    }
}
starGallery_card(".starGallery");

var bhakti_card=()=>{
    var type = "result";
    var url = "bhakti";
    display_c(type,url,".bhakti");
    display_c(type,"bhakti-krishana",".bhakti");
    display_c(type,"bhakti-durga",".bhakti");
    display_c(type,"bhakti-hanuman",".bhakti");
    display_c(type,"bhakti-ram",".bhakti");
}
bhakti_card();


var mehfilEGhazal_card =()=>{
    var type = "result";
    var url = "Mehafil-E-Ghazal";
    display_c(type,url,".mehfilEGhazal");
    display_c(type,"Sham-E-Ghazal",".mehfilEGhazal");
    display_c(type,"Best-Of-Mehdi-Hassan",".mehfilEGhazal");
    display_c(type,"Ghazal-Maestro-Ghulam-Ali",".mehfilEGhazal");
    display_c(type,"Great-Ghazals-By-Anup-Jalota",".mehfilEGhazal");
    display_c(type,"Great-Ghazals-By-Ashok-Khosla",".mehfilEGhazal");
    display_c(type,"Great-Ghazals-By-Hariharan",".mehfilEGhazal");
    display_c(type,"Top-Ghazals",".mehfilEGhazal");
    display_c(type,"Romantic-Ghazal",".mehfilEGhazal");
    display_c(type,"Ghazals-From-Films",".mehfilEGhazal");
    display_c(type,"Jagjit-Singh-Punjabi-Hits",".mehfilEGhazal");
}
mehfilEGhazal_card();


// * Button controls for Trending
var former = document.body.querySelector(".former");
var lateral = document.body.querySelector(".lateral");

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
        former.disabled = true;
    }
    else {
        former.disabled = false;
    }
}
checkButton();
former.addEventListener("click", back);
lateral.addEventListener("click", forward);


// * Button controls for New Releases
var former1 = document.body.querySelector(".former1");
var lateral1 = document.body.querySelector(".lateral1");
var size3 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size3 += 800;
    for (var i = 0; i < cards.length; i++) {
        // console.log(cards[i]);
        cards[i].style.transform = `translateX(${size3}%)`;
    }
    checkButton1();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    // console.log(cards);
    size3 -= 800;
    for (var i = 0; i < cards.length; i++) {
        // console.log(cards[i]);
        cards[i].style.transform = `translateX(${size3}%)`;
    }
    checkButton1();
}
var checkButton1 = () => {
    // console.log(size3);
    if (size3 >= 0) {
        former1.disabled = true;
    }
    else {
        former1.disabled = false;
    }
}
checkButton1();
former1.addEventListener("click", back);
lateral1.addEventListener("click", forward);


// * Button controls for Top Charts
var former2 = document.body.querySelector(".former2");
var lateral2 = document.body.querySelector(".lateral2");
var size4 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size4 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size4}%)`;
    }
    checkButton2();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size4 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size4}%)`;
    }
    checkButton2();
}
var checkButton2 = () =>{
    if (size4 >= 0) {
        former2.disabled = true;
    }
    else {
        former2.disabled = false;
    }
}
checkButton2();
former2.addEventListener("click", back);
lateral2.addEventListener("click", forward);


// * Button controls for Popular In Hindi 
var former3 = document.body.querySelector(".former3");
var lateral3 = document.body.querySelector(".lateral3");
var size5 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size5 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size5}%)`;
    }
    checkButton3();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size5 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size5}%)`;
    }
    checkButton3();
}
var checkButton3 = () => {
    if (size5 >= 0) {
        former3.disabled = true;
    }
    else {
        former3.disabled = false;
    }
}
checkButton3();
former3.addEventListener("click", back);
lateral3.addEventListener("click", forward);


// * Button controls for Featured Artists
var former4 = document.body.querySelector(".former4");
var lateral4 = document.body.querySelector(".lateral4");
var size6 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size6 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size6}%)`;
    }
    checkButton4();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size6 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size6}%)`;
    }
    checkButton4();
}
var checkButton4 = () => {
    if (size6 >= 0) {
        former4.disabled = true;
    }
    else {
        former4.disabled = false;
    }
}
checkButton4();
former4.addEventListener("click", back);
lateral4.addEventListener("click", forward);


// * Button controls for Radio
var former5 = document.body.querySelector(".former5");
var lateral5 = document.body.querySelector(".lateral5");
var size7 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size7 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size7}%)`;
    }
    checkButton5();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size7 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size7}%)`;
    }
    checkButton5();
}
var checkButton5 = () => {
    if (size7 >= 0) {
        former5.disabled = true;
    }
    else {
        former5.disabled = false;
    }
}
checkButton5();
former5.addEventListener("click", back);
lateral5.addEventListener("click", forward);


// * Button controls for Just Arrived
var former6 = document.body.querySelector(".former6");
var lateral6 = document.body.querySelector(".lateral6");
var size8 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size8 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size8}%)`;
    }
    checkButton6();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size8 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size8}%)`;
    }
    checkButton6();
}
var checkButton6 = () => {
    if (size8 >= 0) {
        former6.disabled = true;
    }
    else {
        former6.disabled = false;
    }
}
checkButton6();
former6.addEventListener("click", back);
lateral6.addEventListener("click", forward);


// * Button controls for Retro Playlists
var former7 = document.body.querySelector(".former7");
var lateral7 = document.body.querySelector(".lateral7");
var size9 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size9 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size9}%)`;
    }
    checkButton7();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size9 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size9}%)`;
    }
    checkButton7();
}
var checkButton7 = () => {
    if (size9 >= 0) {
        former7.disabled = true;
    }
    else {
        former7.disabled = false;
    }
}
checkButton7();
former7.addEventListener("click", back);
lateral7.addEventListener("click", forward);


// * Button controls for Gaana Recommends
var former8 = document.body.querySelector(".former8");
var lateral8 = document.body.querySelector(".lateral8");
var size10 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size10 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size10}%)`;
    }
    checkButton8();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size10 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size10}%)`;
    }
    checkButton8();
}
var checkButton8 = () => {
    if (size10 >= 0) {
        former8.disabled = true;
    }
    else {
        former8.disabled = false;
    }
}
checkButton8();
former8.addEventListener("click", back);
lateral8.addEventListener("click", forward);


// * Button controls for Gaana originals
var former9 = document.body.querySelector(".former9");
var lateral9 = document.body.querySelector(".lateral9");
var size11 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size11 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size11}%)`;
    }
    checkButton9();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size11 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size11}%)`;
    }
    checkButton9();
}
var checkButton9 = () => {
    if (size11 >= 0) {
        former9.disabled = true;
    }
    else {
        former9.disabled = false;
    }
}
checkButton9();
former9.addEventListener("click", back);
lateral9.addEventListener("click", forward);


// * Button controls for popular In English
var former10 = document.body.querySelector(".former10");
var lateral10 = document.body.querySelector(".lateral10");
var size12 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size12 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size12}%)`;
    }
    checkButton10();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size12 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size12}%)`;
    }
    checkButton10();
}
var checkButton10 = () => {
    if (size12 >= 0) {
        former10.disabled = true;
    }
    else {
        former10.disabled = false;
    }
}
checkButton10();
former10.addEventListener("click", back);
lateral10.addEventListener("click", forward);


// * Button controls for Star Gallery
var former11 = document.body.querySelector(".former11");
var lateral11 = document.body.querySelector(".lateral11");
var size13 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size13 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size13}%)`;
    }
    checkButton11();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size13 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size13}%)`;
    }
    checkButton11();
}
var checkButton11 = () => {
    if (size13 >= 0) {
        former11.disabled = true;
    }
    else {
        former11.disabled = false;
    }
}
checkButton11();
former11.addEventListener("click", back);
lateral11.addEventListener("click", forward);


// * Button controls for Bhakti
var former12 = document.body.querySelector(".former12");
var lateral12 = document.body.querySelector(".lateral12");
var size14 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size14 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size14}%)`;
    }
    checkButton12();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size14 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size14}%)`;
    }
    checkButton12();
}
var checkButton12 = () => {
    if (size14 >= 0) {
        former12.disabled = true;
    }
    else {
        former12.disabled = false;
    }
}
checkButton12();
former12.addEventListener("click", back);
lateral12.addEventListener("click", forward);


// * Button controls for Mehfil-E-Ghazal
var former13 = document.body.querySelector(".former13");
var lateral13 = document.body.querySelector(".lateral13");
var size15 = 0;
var back = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size15 += 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size15}%)`;
    }
    checkButton13();
}
var forward = (e) => {
    var cards = e.target.parentNode.querySelectorAll(".card");
    size15 -= 800;
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.transform = `translateX(${size15}%)`;
    }
    checkButton13();
}
var checkButton13 = () => {
    if (size15 >= 0) {
        former13.disabled = true;
    }
    else {
        former13.disabled = false;
    }
}
checkButton13();
former13.addEventListener("click", back);
lateral13.addEventListener("click", forward);

