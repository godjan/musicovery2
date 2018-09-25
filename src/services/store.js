class FilterStore  {

    constructor() {

        this.state = { 
                       genres : [],
                       decades: []
                     };
    }
    
    getState() {

        return this.state;
    }

    getGenres() {

        return this.state.genres;
    }

    setGenres(genres) {

        this.state.genres = genres;
        //console.log('genres set to ' + genres)
    }
    clearGenres() {

        this.state.genres = [];
    }
    getDecades() {

        return this.state.decades;
    }

    setDecades(decades) {

        this.state.decades = decades;
       // console.log('decades set to ' + decades)
    }

    toggleGenre(genre) {

        this.toggleElement(this.state.genres, genre);
    }

    toggleDecade(decade) {

        this.toggleElement(this.state.decades, decade);
    }

    toggleElement(arr, element) {

        if (!arr.includes(element)) {
            arr.push(element);
        } else {
            var index = arr.indexOf(element);
            if (index != -1) arr.splice(index, 1);
        }
    }
}


export default new FilterStore();