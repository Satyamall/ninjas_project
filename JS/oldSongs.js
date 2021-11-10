window.addEventListener("load", () => {getData()});
        
function fetchingPlayList(){
    return fetch(`http://127.0.0.1:5000/result/?query=https://www.jiosaavn.com/featured/hindi_70s/Pgp0Amd0LZnuCJW60TJk1Q__&lyrics=false`)
    .then(res => res.json())
}

async function getData(){
    try{
        const result = await fetchingPlayList()
        // console.log('result: ', result);
        makeChanges(result);

    }
    catch(err) {
        console.log("Error");
    }
    
}

function makeChanges(dataFromAPI){
    const posterImage = document.getElementById("posterImage");
    posterImage.src = dataFromAPI.image;

    const numberOfTracks = document.getElementsByClassName("numberOfTracks");
    numberOfTracks[0].textContent = "";
    numberOfTracks[0].textContent += dataFromAPI.songs.length + " Tracks";

    const wholeContainer = document.getElementById("wholeContainer");
    console.log(dataFromAPI.songs.length);
    for(let i = 0; i < dataFromAPI.songs.length; i++){
        let sec = createCardsForSongs(dataFromAPI.songs[i]);
        wholeContainer.append(sec);
        wholeContainer.innerHTML += "<hr/>"
    }
    
    
}


function createCardsForSongs(dataFromAPI){
    
    //creating section for each track/song
    const section = document.createElement("section");
    section.className = "song-list";

    //creating ul for each track which will be appended inside section created above
    const ul = document.createElement("ul");
    ul.className = "row-heading";

    //creating li for image
    const liForImage = document.createElement("li");
    liForImage.className = "individual-li";

    const imgForPoster = document.createElement("img");
    imgForPoster.className = "track-Poster";
    imgForPoster.src = dataFromAPI.image;

    //appending img element inside li
    liForImage.append(imgForPoster);

    //appending li element inside ul
    

    //creating i for song name
    const liForSongName = document.createElement("li");
    liForSongName.className = "individual-li";

    //creating div inside song Name
    const divForSongName = document.createElement("div");
    divForSongName.className = "song-div-track";

    //creating a tag for song 
    const aTagForSong = document.createElement("a");
    aTagForSong.className = "song-a-track";
    aTagForSong.textContent = dataFromAPI.song;
    aTagForSong.href = "#"

    //appending
    divForSongName.append(aTagForSong);
    liForSongName.append(divForSongName);
    
    //creating li for artist names
    const liForArtistName = document.createElement("li");
    liForArtistName.className = "individual-li";

    const divForArtistName = document.createElement("div");
    divForArtistName.className = "song-div-artists";
    
    const aTagForArtistName = document.createElement("a");
    aTagForArtistName.href = "#";
    aTagForArtistName.textContent = dataFromAPI.primary_artists;
    aTagForArtistName.className = "song-a-artists";

    divForArtistName.append(aTagForArtistName);
    liForArtistName.append(divForArtistName);


    //creating li for duration
    const liForDuration = document.createElement("li");
    liForDuration.className = "individual-li";

    const divForDuration = document.createElement("div");
    divForDuration.textContent = getDurationInMinutes(dataFromAPI.duration);
    divForDuration.className = "song-div-duration"

    liForDuration.appendChild(divForDuration);

    ul.appendChild(liForImage);
    ul.appendChild(liForSongName);
    ul.appendChild(liForArtistName);
    ul.appendChild(liForDuration);
    



    section.appendChild(ul);

    return section;

    

    // wholeContainer.appendChild(section);

}


function getDurationInMinutes(duration){
    const minutes = Math.floor(duration/60);
    const seconds = Math.floor(duration % 60);

    return `${minutes}:${seconds}`

}