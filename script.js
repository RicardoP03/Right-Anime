class anime{
    constructor(name, lastUpdate, srcCarusel, srcList, viewsLastWeek, viewLink, genders){
        this.name = name;
        this.lastUpdate = lastUpdate;
        this.srcCarusel = srcCarusel;
        this.srcList = srcList;
        this.viewsLastWeek = viewsLastWeek;
        this.viewLink = viewLink;
        this.genders = genders;
    }
}

function createCaruselCard(name, img, nrcard, link){
    let slider = document.getElementById("recently-updated-container");
    let card = document.createElement("div");
    card.classList.add("card-recentely-updated");
    let containerDetails = document.createElement("div");
    containerDetails.classList.add("recently-updated-container-details")


    let textcontainer = document.createElement("div")
    let text = document.createTextNode(name);
    textcontainer.appendChild(text);
    textcontainer.classList.add("textSliderCard");
    containerDetails.appendChild(textcontainer);


    let playButton = document.createElement("div");
    playButton.classList.add("play-now-button");
    let textPalyButton = document.createTextNode("Play now");
    playButton.appendChild(textPalyButton);


    let anchor = document.createElement('a');
    anchor.href = link;
    anchor.setAttribute('target', '_blank');
    anchor.style.textDecoration = "none";
    anchor.appendChild(playButton);
    containerDetails.appendChild(anchor);
    card.appendChild(containerDetails);


    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("imgContainer-Recentely-Update")
    let image = document.createElement("img");
    image.classList.add("imageCarousel");
    image.src = img;
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);
    slider.appendChild(card);


    let dotsContainer = document.getElementById("dotsCotainerRecentlyUpdated");
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", function() {
        showCards(nrcard);
    });
    dotsContainer.appendChild(dot);
}

function createCarusel(List){
    List.sort(function(a, b) {
        if (a.lastUpdate > b.lastUpdate) {
          return -1;
        } 
        else if (a.lastUpdate < b.lastUpdate) {
          return 1;
        } 
        else {
          return 0;
        }
    });
    for(let i = 0; i < 10; i++){
        createCaruselCard(List[i].name, List[i].srcCarusel, i + 1, List[i].viewLink);
    }
}

function plusCards(n) {
    cardIndex += n;
    showCards(cardIndex);
}

function cardInterval(){
    plusCards(1);
}

var timer = setInterval(cardInterval, 5000);

function showCards(n) {
    
    clearInterval(timer);
    timer = setInterval(cardInterval, 5000);

    let cards = document.getElementsByClassName("card-recentely-updated");
    let dots = document.getElementsByClassName("dot");

    if(n > cards.length) {cardIndex = 1}
    else if(n < 1) {cardIndex = cards.length}
    else cardIndex = n;

    for(let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    cards[cardIndex - 1].style.display = "flex";
    cards[cardIndex - 1].style.alignItems = "center";
    cards[cardIndex - 1].style.alignItems = "center";
    dots[cardIndex - 1].className += " active";
}

function createTopAnimeCell(name, src, nr, link){
    let container = document.getElementById("topAnimeContainer");


    let cell = document.createElement("div");
    cell.classList.add("cellTopAnime");


    let text = document.createTextNode(`${nr}`);
    let positionContainer = document.createElement("div");
    positionContainer.appendChild(text);
    cell.appendChild(positionContainer);


    let img = document.createElement("img");
    let imgContainer = document.createElement("div");
    img.src = src;
    imgContainer.appendChild(img);
    cell.appendChild(imgContainer);


    let cellText = document.createTextNode(name);


    let nameContainer =  document.createElement("div");
    nameContainer.classList.add("nameCellTopAnime");
    nameContainer.appendChild(cellText);
    cell.appendChild(nameContainer);


    let anchor = document.createElement('a');
    anchor.href = link;
    anchor.setAttribute('target', '_blank');
    anchor.style.textDecoration = "none";
    anchor.appendChild(cell);
    container.appendChild(anchor);
    

    nameContainer.style.width = "50%";
    nameContainer.style.display = "flex";
    positionContainer.style.alignItems = "center";
    positionContainer.style.width = "15%";
    positionContainer.style.display = "flex";
    positionContainer.style.justifyContent = "center";
    positionContainer.style.alignItems = "center";
    cell.style.height = "10vh";
    positionContainer.style.fontSize = "3.4vw";
    positionContainer.style.fontWeight = "bold";
    positionContainer.style.width = "4vw";
    imgContainer.style.backgroundColor = "white";
    imgContainer.style.width = "25%";
    imgContainer.style.height = "100%";
    imgContainer.style.overflow = "hidden";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.display = "block"
    nameContainer.style.height = "2.7vw";
}

function createTopAnime(List){
    List.sort(function(a, b) {
        if (a.viewsLastWeek > b.viewsLastWeek) {
          return -1;
        } 
        else if (a.viewsLastWeek < b.viewsLastWeek) {
          return 1;
        } 
        else {
          return 0;
        }
    });
    for(let i = 0; i < 10; i++){
        createTopAnimeCell(List[i].name, List[i].srcList, i + 1, List[i].viewLink);
    }
}

function cleanUp(){
    let elem1 = document.getElementById("textCardFormAns");
    if(elem1 !== null) elem1.remove();
    let elem2 = document.getElementById("imgCardFormAns");
    if(elem2 !== null) elem2.remove();
    let elem3 = document.getElementById("containerImgCardFormAns");
    if(elem3 !== null) elem3.remove();
    let elem4 = document.getElementById("textPlayCardFormAns");
    if(elem4 !== null) elem4.remove();
    let elem5 = document.getElementById("playCardFormAns");
    if(elem5 !== null) elem5.remove();
    let elem6 = document.getElementById("containerImgCardFormAns");
    if(elem6 !== null) elem6.remove();
    let elem7 = document.getElementById("textResetCardFormAns");
    if(elem7 !== null) elem7.remove();
    let elem8 = document.getElementById("resetCardFormAns");
    if(elem8 !== null) elem8.remove();
    let elem9 = document.getElementById("anchorCardFormAns");
    if(elem9 !== null) elem9.remove();
    let elem10 = document.getElementById("textNoAnimeCardFormAns");
    if(elem10 !== null) elem10.remove();
    let elem11 = document.getElementById("cardRecomandationFormAns");
    if(elem11 !== null) elem11.remove();
    let elem12 = document.getElementById("formAnsButtons");
    if(elem12 !== null) elem12.remove();
}

function getRecomandation(){
    let n = animeList.length;
    let obj = null;
    let max = -100;
    const relike = /\slike/;
    const redislike = /dislike/;

    cleanUp();

    for(let i = 0; i < n; i++){
        if(localStorage.getItem(animeList[i].name) === null){
            let nrGenders = animeList[i].genders.length;
            let score = 0;
            for(let j = 0; j < nrGenders; j++){
                let name = animeList[i].genders[j].toLowerCase();
                let ans = document.forms["FormRecomandation"][name].value;
                if(ans.search(relike) != -1) score++;
                else if(ans.search(redislike) != -1) score--;
            }
            if(score > max){
                max = score;
                obj = animeList[i];
            }
        }
    }

    let formContainer = document.getElementById("FormAnimeRecomandation");
    let buttonsContainer = document.createElement("formAnsButtons");
    if(obj === null){
        let textNoAnime = document.createElement("p");
        textNoAnime.textContent = "There are no more animes that have't been displayed yet";
        textNoAnime.setAttribute("id", "textNoAnimeCardFormAns");
        textNoAnime.style.display = "flex";
        textNoAnime.style.justifyContent = "center";
        textNoAnime.style.alignContent = "center"
        textNoAnime.style.fontSize = "2vw";
        formContainer.appendChild(textNoAnime);
    }
    else{
        let name = obj.name;
        localStorage.setItem(name, JSON.stringify(obj));


        let cardRecomandation = document.createElement("div");
        cardRecomandation.classList.add("cardRecomandation");
        cardRecomandation.setAttribute("id", "cardRecomandationFormAns");


        let text = document.createElement("p");
        text.textContent = obj.name;
        text.setAttribute("id", "textCardFormAns");
        cardRecomandation.appendChild(text);

        let containerImg = document.createElement("div");
        let img = document.createElement("img");
        img.src = obj.srcCarusel;
        img.classList.add("imageCarousel");
        img.setAttribute("id", "imgCardFormAns");
        containerImg.setAttribute("id", "containerImgCardFormAns");


        containerImg.appendChild(img);
        containerImg.style.marginBottom = "5vh";
        cardRecomandation.appendChild(containerImg);
        formContainer.appendChild(cardRecomandation);


        let playButton = document.createElement("div");
        playButton.classList.add("play-now-button");
        let textPlayButton = document.createElement("p");
        textPlayButton.textContent = "Play now";
        playButton.appendChild(textPlayButton);
        textPlayButton.setAttribute("id", "textPlayCardFormAns");
        playButton.setAttribute("id", "playCardFormAns");



        let anchor = document.createElement('a');
        anchor.href = obj.viewLink;
        anchor.setAttribute('target', '_blank');
        anchor.style.textDecoration = "none";
        anchor.appendChild(playButton);
        anchor.setAttribute("id", "anchorCardFormAns");
        buttonsContainer.appendChild(anchor);

        anchor.style.marginBottom = "5vh";
        anchor.style.display = "flex";
        anchor.style.alignItems = "center";
        anchor.style.justifyContent = "center";
    }


    let reset = document.createElement("div");
    reset.classList.add("play-now-button");
    let resetText  = document.createElement("p");
    resetText.textContent = "Reset Recommandations";

    reset.appendChild(resetText);
    resetText.setAttribute("id", "textResetCardFormAns");
    reset.setAttribute("id", "resetCardFormAns");

    reset.style.width = "15vw";
    reset.style.fontSize = "1.2vw";
    buttonsContainer.appendChild(reset);
    buttonsContainer.style.display = "flex";
    buttonsContainer.style.justifyContent= "space-evenly";

    formContainer.append(buttonsContainer);

    reset = document.getElementById("resetCardFormAns");

    reset.addEventListener("click", function(resetCardFormAns) {
        localStorage.clear();
        location.reload();
    });


}


var animeList = [new anime("Attack on Titan Final Season THE FINAL CHAPTERS Special", new Date("2023-03-04"), 
                            "poze/aot-fchap-sp1-carusel.jpg", "poze/aot-fchap-sp1-display.jpg", 543,
                            "https://9anime.to/watch/attack-on-titan-the-final-season-part-3.ll3mm/ep-1", 
                            ["Action", "Drama", "Fantasy", "Mystery", "Psychological"]),
new anime("BLUELOCK", new Date("2023-03-26"), "poze/Bluelock-carusel.jpg", "poze/Bluelock-display.jpg", 350,
          "https://9anime.to/watch/blue-lock.2o2mq/ep-1", ["Action", "Drama"]),
new anime("BOCCHI THE ROCK!", new Date("2022-12-25"), "poze/bocchi-carusel.jpg", "poze/bocchi-display.jpg", 280,
           "https://9anime.to/watch/bocchi-the-rock.1pyp/ep-1", ["Comedy", "Slice of Life"]),
new anime("Rascal Does Not Dream of Bunny Girl Senpai", new Date("2018-12-27"), "poze/bunny-girl-carusel.jpg", 
          "poze/bunny-girl-display.jpg", 219, "https://9anime.to/watch/rascal-does-not-dream-of-bunny-girl-senpai.263q/ep-1",
          ["Comedy", "Drama", "Mystery", "Psychological", "Romance"]),
new anime("Chainsaw Man", new Date("2022-12-28"), "poze/chainsawman-carusel.jpg", "poze/chainsawman-display.jpg" , 378, 
         "https://9anime.to/watch/chainsaw-man.8o9q/ep-1", ["Action", "Drama", "Fantasy"]),
new anime("Classroom of the Elite Season 2", new Date("2022-09-26"), "poze/coet-s2-carusel.jpg", "poze/coet-s2-display.jpg",
         "https://9anime.to/watch/classroom-of-the-elite-ii.w1o64/ep-1", 250, ["Drama", "Mystery", "Psychological"]),
new anime("CYBERPUNK: EDGERUNNERS", new Date("2022-09-12"), "poze/cyberpunk-carusel.jpg", "poze/cyberpunk-display.jpg" , 270, 
         "https://9anime.to/watch/cyberpunk-edgerunners.lw0z/ep-1", ["Action", "Drama", "Psychological", "Sci-Fi"]),
new anime("Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc", new Date("2023-05-21"), "poze/demon-slayer-swordsmitharc-carusel.jpg",
          "poze/demon-slayer-swordsmitharc-display.jpg" , 838,
          "https://9anime.to/watch/demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.3r7p6/ep-1",
          ["Action", "Adventure", "Drama", "Fantasy"]),
new anime("The Eminence in Shadow", new Date("2022-02-29"), "poze/eminence-carusel.jpg",
          "poze/eminence-display.jpg" , 678, "https://9anime.to/watch/the-eminence-in-shadow.4ylx/ep-1",
          ["Action", "Comedy", "Fantasy", "Isekai"]),
new anime("Hell’s Paradise", new Date("2023-05-20"), "poze/hells-paradise-carusel.jpg", "poze/hells-paradise-display.jpg",
         750, "https://9anime.to/watch/jigokuraku.kqk9/ep-1", ["Action", "Adventure", "Fantasy", "Mystery"]),
new anime("Kaguya-sama: Love is War Season 3", new Date("2022-06-25"), "poze/kaguya-s3-carusel.jpg", "poze/kaguya-s3-display.jpg",
         283, "https://9anime.to/watch/kaguya-sama-love-is-war-ultra-romantic.n10j/ep-1", 
         ["Comedy", "Psychological", "Romance", "Slice of Life"]),
new anime("KONOSUBA -God's blessing on this wonderful world! 2", new Date("2017-03-16"), "poze/konoshuba2-carusel.jpg",
          "poze/konoshuba2-display.jpg", 332, "https://9anime.to/watch/konosuba-gods-blessing-on-this-wonderful-world-2.5zrm/ep-1",
          ["Adventure", "Comedy", "Fantasy", "Isekai"]),
new anime("Mushoku Tensei: Jobless Reincarnation Cour 2", new Date("2021-12-20"), "poze/mushoku-tensei-carusel.jpg", 
          "poze/mushoku-tensei-display.jpg", 574, "https://9anime.to/watch/mushoku-tensei-jobless-reincarnation-part-2.4k3m/ep-1",
          ["Adventure", "Drama", "Fantasy", "Isekai"]),    
new anime("Oshi No Ko", new Date("2023-05-23"), "poze/Oshi-no-ko-carusel.jpg", "poze/Oshi-no-ko-display.jpg",
          707, "https://9anime.to/watch/oshi-no-ko2.4q1jm/ep-1", ["Drama", "Mystery", "Psychological"]),  
new anime("Overlord IV", new Date("2022-09-27"), "poze/over-lord-s4-carusel.jpg", "poze/over-lord-s4-display.jpg",
          364, "https://9anime.to/watch/overlord-iv.r77y/ep-1", ["Action", "Adventure", "Fantasy", "Isekai"]),
new anime("Re:ZERO -Starting Life in Another World- Season 2 Part 2", new Date("2021-03-24"), "poze/re-zero-s2p2-carusel.jpg",
          "poze/re-zero-s2p2-display.jpg", 453, "https://9anime.to/watch/rezero-starting-life-in-another-world-season-2-part-2.xk78/ep-1",
          ["Action", "Adventure", "Drama", "Fantasy", "Psychological", "Romance", "Isekai"]), 
new anime("The Rising of the Shield Hero Season 2", new Date("2022-06-29"), "poze/shield-hero-s2-carusel.jpg",
          "poze/shield-hero-s2-display.jpg", 398, "https://9anime.to/watch/the-rising-of-the-shield-hero.6kl0/ep-1",
          ["Action", "Adventure", "Drama", "Fantasy", "Isekai"]), 
new anime("TONIKAWA: Over The Moon For You Season 2", new Date("2023-05-19"), "poze/tonikawa-carousel.jpg",
          "poze/tonikawa-display.jpg", 553, "https://9anime.to/watch/tonikawa-over-the-moon-for-you-season-2.3rr92/ep-1",
           ["Comedy", "Romance", "Slice of Life"]),
new anime("Vinland Saga Season 2", new Date("2023-05-22"), "poze/vinland-saga-s2-carusel.jpg",
          "poze/vinland-saga-s2-display.jpg", 607, "https://9anime.to/watch/vinland-saga-season-2.kwo44/ep-1",
          ["Action", "Adventure", "Drama"]),
new anime("Violet Evergarden", new Date("2018-04-05"), "poze/violet-evergarden-carusel.jpg",
          "poze/violet-evergarden-display.jpg", 413, "https://9anime.to/watch/violet-evergarden.mymp/ep-1",
          ["Drama", "Fantasy", "Slice of Life"])];


var cardIndex = 1;

window.onload = function(){
    createCarusel(animeList);
    showCards(cardIndex);
    createTopAnime(animeList);
}
