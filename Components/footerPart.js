async function getFooter(){
    return `<footer class="footer">
    <div id="footContainer">
        <div id="divRow1">
            <strong>Bas Bajna Chahiye Gaana</strong>
            <p>Gaana is the one-stop solution for all your music needs. Gaana offers you free, unlimited access to over 30 million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.</p>
        </div>
        <hr/>
        <div id="divRow2">
            <!-- Add social media icons here -->
            <a href="https://www.facebook.com/gaana.com" id="f"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeB6lasDXrKdM8ajLWl5NVlmh_KCaP9CkfA&usqp=CAU" alt=""></a>
            <a href="https://twitter.com/gaana" id="t"><img src="data:image/png;base64,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" alt=""></a>
        </div>
        <hr/>
        <div id="divRow3">
            <a href="#">
                <span>Advertise on Gaana.com</span>
            </a>
            <a href="#">
                <span>Terms of Use</span>
            </a>
            <a href="#">
                <span>Privacy Policy</span>
            </a>
            <a href="#">
                <span>Feedback</span>
            </a>
            <a href="#">
                <span>Report an Issue</span>
            </a>
            <a href="#">
                <span>Partners</span>
            </a>
            <a href="#">
                <span>Sitemap</span>
            </a>
            <a href="#">
                <span>FAQ</span>
            </a>
        </div>
        <hr/>
        <strong id="strng">Quicklinks</strong>
        <div id="divRow4">
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Albums</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">English</a>
                    <a href="#">Hindi</a>
                    <a href="#">Telugu</a>
                    <a href="#">Punjabi</a>
                    <a href="#">Tamil</a>
                    <a href="#">Kannada</a>
                    <a href="#">Bhojpuri</a>
                    <a href="#">Malayalam</a>
                    <a href="#">Marathi</a>
                    <a href="#">Bengali</a>
                    <a href="#">Gujarati Songs</a>
                    <a href="#">Haryanvi</a>
                    <a class="viewAll" href="../HTML/album.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Genres</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">Bollywood Songs</a>
                    <a href="#">Meditation</a>
                    <a href="#">Devotional Songs</a>
                    <a href="#">Ghazals</a>
                    <a href="#">Bhajan</a>
                    <a href="#">Patriotic Songs</a>
                    <a href="#">Kids Songs</a>
                    <a href="#">Rock Songs</a>
                    <a href="#">Disco Songs</a>
                    <a href="#">Sufi Songs</a>
                    <a href="#">Love Songs</a>
                    <a class="viewAll" href="../HTML/popularInHindi.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Artists</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">Arijit Singh</a>
                    <a href="#">Honey Singh</a>
                    <a href="#">Atif Aslam</a>
                    <a href="#">A R Rahman</a>
                    <a href="#">Lata Mangeshkar</a>
                    <a href="#">Kishore Kumar</a>
                    <a href="#">Armaan Malik</a>
                    <a href="#">Sunidhi Chauhan</a>
                    <a href="#">Nusrat Fateh Ali Khan</a>
                    <a href="#">Mohammed Rafi</a>
                    <a href="#">Guru Randhawa</a>
                    <a href="#">Justin Bieber</a>
                    <a href="#">BTS</a>
                    <a class="viewAll" href="../HTML/artist.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>New Release</span>
                </div>
                <div class="lowerDiv">                     
                    <a href="#">English Songs</a>
                    <a href="#">Hindi Songs</a>
                    <a href="#">Punjabi Songs</a>
                    <a href="#">Tamil Songs</a>
                    <a href="#">Telugu Songs</a>
                    <a href="#">Kannada Songs</a>
                    <a href="#">Bhojpuri Songs</a>
                    <a href="#">Malayalam Songs</a>
                    <a href="#">Marathi Songs</a>
                    <a href="#">Bengali Songs</a>
                    <a href="#">Assamese Songs</a>
                    <a href="#">Gujarati</a>
                    <a href="#">Haryanvi Songs</a>
                    <a href="#">Odia Songs</a>
                    <a href="#">Urdu Songs</a>
                    <a class="viewAll" href="../HTML/newSongs.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Trending Songs</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">Vibe Song</a>
                    <a href="#">Hanuman Chalisa</a>
                    <a href="#">Manike Mage Hithe</a>
                    <a href="#">Baarish Ki Jaaye</a>
                    <a href="#">Bachpan Ka Pyaar</a>
                    <a href="#">Rakhungi Karwa Chauth Ka Vrat</a>
                    <a href="#">Chand Chhupa Badal Mein</a>
                    <a href="#">295</a>
                    <a href="#">Chori Chori</a>
                    <a href="#">Rim Jhim</a>
                    <a href="#">Black & White</a>
                    <a href="#">Bole Chudiyan</a>
                    <a href="#">Stay</a>
                    <a href="#">Jalebi Baby</a>
                    <a href="#">Raataan Lambiyan</a>
                    <a class="viewAll" href="../HTML/trendingSongs.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Trending Albums</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">Happy Birthday Songs</a>
                    <a href="#">Sad Songs</a>
                    <a href="#">PK Songs</a>
                    <a href="#">Karwa Chauth Songs</a>
                    <a href="#">Durga Maa Songs</a>
                    <a href="#">Karwa Chauth Special</a>
                    <a href="#">Moosetape</a>
                    <a href="#">Santoshi Maa Song</a>
                    <a href="#">Moonchild Era</a>
                    <a href="#">Aala Vaikunthapurramuloo</a>
                    <a href="#">Vakeel Saab</a>
                    <a href="#">Uppena</a>
                    <a href="#">Durga Maa Ki Aarti</a>
                    <a href="#">Shershaah</a>
                    <a href="#">Bell Bottom</a>
                    <a class="viewAll" href="../HTML/topCharts.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Lyrics</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">Tum Hi Ho</a>
                    <a href="#">Jab Koi Baat Bigad Jaye</a>
                    <a href="#">Nazm Nazm</a>
                    <a href="#">Top Notch Gabru Lyrics</a>
                    <a href="#">Cheap Thrills</a>
                    <a href="#">Gayatri Mantra</a>
                    <a href="#">Vande Mataram Lyrics</a>
                    <a href="#">Sukhkarta Dukhharta Lyrics</a>
                    <a href="#">Durga Maa Bhajan Lyrics</a>
                    <a href="#">Durga Maa Aarti lyrics</a>
                    <a href="#">Durga Chalisa Lyrics</a>
                    <a href="#">Jana Gana Mana Lyrics</a>
                    <a href="#">Navratri Song Lyrics</a>
                    <a href="#">Garba Song Lyrics</a>
                    <a href="#">Ambe Maa Aarti Lyrics</a>
                    <a class="viewAll" href="../HTML/album.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Old Songs</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">Old Hindi Songs</a>
                    <a href="#">Old English Songs</a>
                    <a href="#">Old Punjabi Songs</a>
                    <a href="#">Old Telugu Songs</a>
                    <a href="#">Old Tamil Songs</a>
                    <a href="#">Old Bhojpuri Songs</a>
                    <a href="#">Old Bengali Songs</a>
                    <a href="#">Old Malayalam Songs</a>
                    <a href="#">Old Kannada Songs</a>
                    <a href="#">Old Marathi Songs</a>
                    <a href="#">Old Gujarati Songs</a>
                    <a href="#">Old Haryanvi Songs</a>
                    <a href="#">Old Urdu Songs</a>
                    <a href="#">Old Assamese Songs</a>
                    <a href="#">Old Rajasthani Songs</a>
                    <a class="viewAll" href="../HTML/oldSongs.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Video</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">Wakhra Swag</a>
                    <a href="#">Kalla Sohna Nai</a>
                    <a href="#">Tibbeyan Ala Jatt</a>
                    <a href="#">Aafat Waapas</a>
                    <a href="#">Meri Odhe Naal</a>
                    <a href="#">Dheeme Dheeme</a>
                    <a href="#">Hawa Banke</a>
                    <a href="#">Nain Tere</a>
                    <a href="#">8 Parche</a>
                    <a href="#">Chal Oye</a>
                    <a href="#">Waake</a>
                    <a href="#">Prada</a>
                    <a class="viewAll" href="../HTML/radio.html">View all</a>
                </div>
            </div>
            <div class="qlinks">
                <div class="upperDiv">
                    <span>Podcasts</span>
                </div>
                <div class="lowerDiv">
                    <a href="#">The Robin Sharma Mastery Sessions</a>
                    <a href="#">Purpose With Gaur Gopal Das</a>
                    <a href="#">Story Podcasts</a>
                    <a href="#">Life Ki Rann Neeti</a>
                    <a href="#">Motivation Podcasts</a>
                    <a href="#">Raavn</a>
                    <a href="#">Ummeed With Zakir</a>
                    <a href="#">MD Motivation</a>
                    <a href="#">RJ Kartik Motivation</a>
                    <a href="#">Choti Si Kahani</a>
                    <a class="viewAll" href="../HTML/podcast.html">View all</a>
                </div>
            </div>
        </div>
        <hr/>
        <p id="copyRight">© Gamma Gaana Ltd. 2021, All Rights Reserved</p>
    </div>
</footer>`
}

export default getFooter