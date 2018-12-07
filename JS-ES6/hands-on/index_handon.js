const video = {
    genere: "Sc fi",
    list: ['a', 'b', 'c'],
    findMovies() {
        this.list.forEach((movie,index) => {
            console.log(this.genere + ' ,' + movie);
        })
    }
}
video.findMovies();