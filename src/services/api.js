import axios from 'axios';


const ApiProviders = {
  MUSICOVERY_API_TAG: "https://localhost:44362/api/tracks/",
  SPOTIFY_AUTH_API: "https://localhost:44362/api/spotify/auth",
  SPOTIFY_TRACK_API: "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
  LAST_FM_API: 'http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&api_key=e5d72f17e62405282fe70f0dc599ab23&format=json'
};


export default {
  // async search(tag) {
  //   return fetch(ApiProviders.MUSICOVERY_API_TAG + tag);
  // },
  async search(tag) {

    return axios.get(ApiProviders.LAST_FM_API + '&tag=' + tag)
    // axios.get(ApiProviders.MUSICOVERY_API_TAG + tag);
  },
  getMoodPlaylist() {

    return moodApiResult;
  },
  getAllTracks() {

    return allTracksResult;
  },
  spotifyAuth() {
      
    return axios.get(ApiProviders.SPOTIFY_AUTH_API);
  },
  spotifyGetTrack() {
   
    const AuthStr = 'Bearer '.concat(this.spotify_token);
    axios.get(ApiProviders.SPOTIFY_TRACK_API, { headers: { Authorization: AuthStr } })
         .then(response => {
            // If request is good...
            console.log(response.data);
          })
          .catch((error) => {
            console.log('error 3 ' + error);
          });
  },
  spotify_token:''
};

const allTracksResult = {

    tracks: [
        {
            "id": "129208",
            "title": "Strawberry Fields Forever",
            "artist": {
                "mbid": "9478e346-7c52-4780-9555-3d1577f0b905",
                "name": "Me First and the Gimme Gimmes",
                "genre": "rock"
            },
            "releasedate": "2004",
            "genre": "rock",
            "arousal": "916284",
            "valence": "404100",
            "popularity": "35",
            "originalid": [],
            "ASIN": "B0002XL26G",
            "favorite": "0"
        },
        {
            "id": "105102",
            "title": "Misfits",
            "artist": {
                "mbid": "92a42e82-b36f-4308-82c1-68bad2e03c89",
                "name": "Third Eye Blind",
                "genre": "rock"
            },
            "releasedate": "2003",
            "genre": "rock",
            "arousal": "651775",
            "valence": "401895",
            "popularity": "60",
            "originalid": [],
            "favorite": "0"
        },
        {
            "id": "58898",
            "title": "So Good to Me",
            "artist": {
                "mbid": "4c376603-5ad0-40c9-aa03-d2a8325a4f86",
                "name": "Sly & The Family Stone",
                "genre": "randb"
            },
            "releasedate": "1975",
            "genre": "randb",
            "arousal": "0",
            "valence": "0",
            "popularity": "60",
            "originalid": [],
            "favorite": "0"
        },
        {
            "id": "183256",
            "title": "Turbosteppa",
            "artist": {
                "mbid": "3956e10d-9c6a-452c-b2ee-534e682cd1e8",
                "name": "Claude VonStroke",
                "genre": "electro"
            },
            "releasedate": "2012",
            "genre": "electro",
            "arousal": "722000",
            "valence": "641363",
            "popularity": "35",
            "originalid": [],
            "favorite": "0"
        },
        {
            "id": "1001628",
            "title": "Everybody Wants A Piece",
            "artist": {
                "mbid": "7c83dbe6-097d-4d4c-9353-9f772a4f756c",
                "name": "Joe Louis Walker",
                "genre": "blues"
            },
            "releasedate": "2015",
            "genre": "blues",
            "arousal": "0",
            "valence": "0",
            "popularity": "35",
            "originalid": "0",
            "favorite": "0"
        },
        {
            "id": "179176",
            "title": "Wild Tigers I Have Known",
            "artist": {
                "mbid": "0fa6cc65-79f0-4cc4-9f84-75e67961b4d4",
                "name": "Emily Jane White",
                "genre": "folk"
            },
            "releasedate": "2008",
            "genre": "folk",
            "arousal": "246167",
            "valence": "434454",
            "popularity": "35",
            "originalid": [],
            "ASIN": "B001UDURC2",
            "favorite": "0"
        },
        {
            "id": "72358",
            "title": "KC Doppler",
            "artist": {
                "mbid": "1b698a5a-259f-4b6f-b39f-b15400bd1990",
                "name": "Slide Five",
                "genre": "electro"
            },
            "releasedate": "1997",
            "genre": "electro",
            "arousal": "493000",
            "valence": "499534",
            "popularity": "60",
            "originalid": [],
            "favorite": "0"
        },
        {
            "id": "10323",
            "title": "Prepare for the fight",
            "artist": {
                "mbid": "2d4c777e-e49f-4498-8f5b-2e89c4621d15",
                "name": "The Lovemakers",
                "genre": "rock"
            },
            "releasedate": "2006",
            "genre": "rock",
            "arousal": "728000",
            "valence": "206764",
            "popularity": "35",
            "originalid": [],
            "ASIN": "B000COQ8FU",
            "favorite": "0"
        },
        {
            "id": "60587",
            "title": "Black Widow",
            "artist": {
                "mbid": "e2f41b6e-7045-44e8-86bf-deee758532e2",
                "name": "Michelle Shocked",
                "genre": "folk"
            },
            "releasedate": "1988",
            "genre": "folk",
            "arousal": "493000",
            "valence": "206734",
            "popularity": "35",
            "originalid": [],
            "ASIN": "B0000CBLA8",
            "favorite": "0"
        },
        {
            "id": "132274",
            "title": "The Light",
            "artist": {
                "mbid": "ef2c6449-d02b-415b-ad8c-c14c08266552",
                "name": "Sun Kil Moon",
                "genre": "folk"
            },
            "releasedate": "2008",
            "genre": "folk",
            "arousal": "330834",
            "valence": "360429",
            "popularity": "35",
            "originalid": "132263",
            "ASIN": "B00158FK42",
            "favorite": "0"
        },
        {
            "id": "9427",
            "title": "It ain't no fun to me",
            "artist": {
                "mbid": "25b83e80-5056-4741-8558-6f45551b078c",
                "name": "Graham Central Station",
                "genre": "randb"
            },
            "releasedate": "2003",
            "genre": "randb",
            "arousal": "716000",
            "valence": "641363",
            "popularity": "35",
            "originalid": [],
            "favorite": "0"
        },
        {
            "id": "1003110",
            "title": "A Little More (feat. Sansa)",
            "artist": {
                "mbid": "29ed4a49-fb99-4a5c-8713-609cabe6f34a",
                "name": "Kaskade",
                "genre": "electro"
            },
            "releasedate": "2015",
            "genre": "electro",
            "arousal": "0",
            "valence": "0",
            "popularity": "35",
            "originalid": "0",
            "favorite": "0"
        },
        {
            "id": "108228",
            "title": "Spaceman",
            "artist": {
                "mbid": "efef848b-63e4-4323-8ef7-69a48fbdd51d",
                "name": "4 Non Blondes",
                "genre": "rock"
            },
            "releasedate": "1992",
            "genre": "rock",
            "arousal": "590000",
            "valence": "213347",
            "popularity": "60",
            "originalid": [],
            "ASIN": "B000001Y5E",
            "favorite": "0"
        },
        {
            "id": "184113",
            "title": "Just A Little",
            "artist": {
                "mbid": "f6f3a309-9d14-4b7c-895a-166333c25f9c",
                "name": "The Beau Brummels",
                "genre": "rock"
            },
            "releasedate": "2013",
            "genre": "rock",
            "arousal": "614000",
            "valence": "383148",
            "popularity": "60",
            "originalid": [],
            "favorite": "0"
        },
        {
            "id": "14041",
            "title": "Ordinary",
            "artist": {
                "mbid": "bfd5aec5-62a2-4560-a316-7c46c17babda",
                "name": "Train",
                "genre": "soundtrack"
            },
            "releasedate": "2004",
            "genre": "soundtrack",
            "arousal": "884000",
            "valence": "316791",
            "popularity": "35",
            "originalid": [],
            "favorite": "0"
          }
        ]
    };

//const DataService =
const moodApiResult = {
   
    tracks: [
      {
        id: "123000",
        title: "First Snow",
        artist: {
          mbid: "fc015f11-be38-4b7d-b3e8-5d809242ecec",
          name: "Clint Mansell",
          genre: "soundtrack"
        },
        releasedate: "2006",
        genre: "soundtrack",
        arousal: "148000",
        valence: "206690",
        popularity: "60",
        originalid: [],
        ASIN: "B000IU3YKU",
        favorite: "0"
      },
      {
        id: "176733",
        title: "Si peu de choses",
        artist: {
          mbid: "11be59d7-2abe-4f66-ac62-b0ad28c39e4c",
          name: "Jean-Philippe Viret",
          genre: "jazz"
        },
        releasedate: "2008",
        genre: "jazz",
        arousal: "83201",
        valence: "326123",
        popularity: "35",
        originalid: [],
        ASIN: "B001CWODC6",
        favorite: "0"
      },
      {
        id: "173467",
        title: "Requiem",
        artist: {
          mbid: "2382cbc9-dd4e-4fc8-a92e-5391f70bd3b2",
          name: "Alfred Schnittke",
          genre: "classical"
        },
        releasedate: "1950",
        genre: "classical",
        arousal: "98646",
        valence: "314718",
        popularity: "35",
        originalid: [],
        ASIN: "B000004AL7",
        favorite: "0"
      },
      {
        id: "179998",
        title: "Communion - Katie's Absence",
        artist: {
          mbid: "6db1231d-8682-4760-9536-ff6b299ba6e4",
          name: "Clint Eastwood",
          genre: "soundtrack"
        },
        releasedate: "2003",
        genre: "soundtrack",
        arousal: "120336",
        valence: "246627",
        popularity: "60",
        originalid: [],
        ASIN: "B0000DBK8C",
        favorite: "0"
      },
      {
        id: "5971",
        title: "I've got to see you again",
        artist: {
          mbid: "985c709c-7771-4de3-9024-7bda29ebe3f9",
          name: "Norah Jones",
          genre: "jazz"
        },
        releasedate: "2002",
        genre: "jazz",
        arousal: "120000",
        valence: "246289",
        popularity: "60",
        originalid: [],
        ASIN: "B008ZXRBMY",
        favorite: "0"
      },
      {
        id: "8290",
        title: "Comptine d'un autre été l'après-midi",
        artist: {
          mbid: "12d432a3-feb0-49b1-a107-d20751880764",
          name: "Yann Tiersen",
          genre: "soundtrack"
        },
        releasedate: "2001",
        genre: "soundtrack",
        arousal: "176000",
        valence: "206691",
        popularity: "60",
        originalid: [],
        favorite: "0"
      },
      {
        id: "161829",
        title: "Georgia On My Mind",
        artist: {
          mbid: "611700cf-27f0-4dc9-ae80-c513a767853e",
          name: "Michael Bublé",
          genre: "jazz"
        },
        releasedate: "2009",
        genre: "jazz",
        arousal: "171105",
        valence: "381271",
        popularity: "60",
        originalid: "6708",
        ASIN: "B002OEBEMS",
        favorite: "0"
      },
      {
        id: "40296",
        title: "The Boulevard Of Broken Dreams",
        artist: {
          mbid: "67d2cb7a-9ddb-4a7f-82bf-5a2d1a038e98",
          name: "Diana Krall",
          genre: "jazz"
        },
        releasedate: "2006",
        genre: "jazz",
        arousal: "120000",
        valence: "365689",
        popularity: "60",
        originalid: [],
        ASIN: "B001QDMRYW",
        favorite: "0"
      },
      {
        id: "154579",
        title: "Tuning notes",
        artist: {
          mbid: "a1235272-3650-4ed7-9317-5a55a08701ec",
          name: "Lee Morgan",
          genre: "jazz"
        },
        releasedate: "1955",
        genre: "jazz",
        arousal: "103540",
        valence: "336692",
        popularity: "60",
        originalid: [],
        ASIN: "B000024YIG",
        favorite: "0"
      },
      {
        id: "149731",
        title: "La nativite du seigneur",
        artist: {
          mbid: "c6e5c5f4-984e-432a-87b8-b6afa288bca1",
          name: "Olivier Messiaen",
          genre: "classical"
        },
        releasedate: "1899",
        genre: "classical",
        arousal: "112395",
        valence: "301447",
        popularity: "35",
        originalid: [],
        ASIN: "B00005UOVM",
        favorite: "0"
      },
      {
        id: "26796",
        title: "Phidyle",
        artist: {
          mbid: "0e2cc2e5-c60b-415c-811b-f3c9630169c1",
          name: "Henri Duparc",
          genre: "classical"
        },
        releasedate: "1899",
        genre: "classical",
        arousal: "88469",
        valence: "296077",
        popularity: "35",
        originalid: [],
        ASIN: "B003WGPC5C",
        favorite: "0"
      },
      {
        id: "40571",
        title: "La Saison Des Pluies",
        artist: {
          mbid: "7cd536a1-8d66-49e3-bf14-e1be74a06363",
          name: "Stacey Kent",
          genre: "jazz"
        },
        releasedate: "2007",
        genre: "jazz",
        arousal: "155000",
        valence: "394490",
        popularity: "60",
        originalid: [],
        ASIN: "B007U63YVE",
        favorite: "0"
      },
      {
        id: "137158",
        title: "Down The Drain",
        artist: {
          mbid: "a32e4aac-1db8-4dc6-be34-a813c4530627",
          name: "Jon Brion",
          genre: "soundtrack"
        },
        releasedate: "2004",
        genre: "soundtrack",
        arousal: "87366",
        valence: "308351",
        popularity: "35",
        originalid: [],
        favorite: "0"
      },
      {
        id: "95748",
        title: "Piece by Piece",
        artist: {
          mbid: "39e32995-6515-40b2-a6f0-841524047edc",
          name: "Katie Melua",
          genre: "folk"
        },
        releasedate: "2005",
        genre: "folk",
        arousal: "134000",
        valence: "229489",
        popularity: "60",
        originalid: [],
        ASIN: "B000VT6F36",
        favorite: "0"
      }
    ]
};
