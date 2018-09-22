import axios from 'axios';


const ApiProviders = {
  MUSICOVERY_API_TAG: "https://localhost:44362/api/tracks/"
};


export default {
  // async search(tag) {
  //   return fetch(ApiProviders.MUSICOVERY_API_TAG + tag);
  // },
  async search(tag) {

    return axios.get(ApiProviders.MUSICOVERY_API_TAG + tag);
  },
  getMoodPlaylist() {
    return moodApiResult;
  }
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
