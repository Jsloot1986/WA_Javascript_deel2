const myFavMovie = {
    title: "Puff the Magic Dragon",
    duration: 220,
    stars: ["Puff","Jackie","Living sneezes"]
};

const printMovie = function(movie){
    console.log(movie.title + "last for" + movie.duration + "minutes.");
    console.log("Stars:" + movie.stars.join(","));
}
printMovie(myFavMovie);