<template>
    <div>
        <div class="ui grid">
    
            <div v-for="(track, index)  in topTracks" :key="track.id" class="column four wide">
                <div class="album">
                    <div class="ui one column grid ">
                        <div class="column" :class="index>0 ? 'inactive-track' : 'active-track'">
                            <strong>{{track.artist.name}}</strong>
                            <br>{{track.title}}  
                          
                            <span class="playerControl"> 
                                <a v-show="(audioPlayerPaused && playing.id == track.id) || (!autoplay && index == 0 && audioPlayerPaused)" 
                                    v-on:click.stop="play(track)"><i class="fas fa-play fa-2x"></i>
                                </a>

                                <a v-show="!audioPlayerPaused && playing.id == track.id" 
                                   v-on:click.stop="pause()"><i class="fas fa-pause fa-2x"></i>
                                </a>

                                <a v-on:click.stop="skip()"><i class="fas fa-forward fa-2x"></i></a>
                            </span>
                            <div class="trackOverlay" v-if="index>0"></div>
                            <div class="playingState" v-show="playing.id == track.id && !audioPlayerPaused">Playing...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- <audio id="audioPlayer" controls s="display:none">
            <source :src="trackAudio" type="audio/mpeg">
        </audio> -->
    </div>
</template>

<script>
    

    export default {
        props:["tracks", "autoplay"],
       
        data: function () {
            return {
               currentIndex:0,
               playlist:[],
               playing: {},
               trackAudio:'',
               audioPlayer: null,
               audioPlayerPaused: true
            }
        },
        mounted() {
            this.audioPlayer = new Audio();
        },
        watch: {
            tracks: {
                    handler: function (val, oldVal) { 
                        // new playlist 
                        console.log('Playlist : tracks changed autoplay is ' + this.autoplay )
                        if(val.length > 0 && this.autoplay) {
                            this.currentIndex = 0;
                            this.audioPlayer.pause();
                            this.play(val[0]);
                        }
                     },
                    immediate: true
                    },
        },
        computed: {
            topTracks() {
                return this.tracks.slice(this.currentIndex, this.currentIndex+ 4)
             }
        },
        methods: {
            skip(e) {
              
                if(this.currentIndex + 1 < this.tracks.length) {

                    this.currentIndex++;
                    this.pause();
                    this.play(this.tracks[this.currentIndex])
                }
            },
            play(track) {

                if(!track)
                    return;
               
                this.trackAudio = "https://ia802703.us.archive.org/15/items/CharlieParker-LegendaryJamSessions1952/01%20Funky%20Blues.mp3";
              
                if( track.id != this.playing.id) {
                    this.audioPlayer.src = this.trackAudio;
                }
                this.playing = track;
                this.audioPlayer.play();
                this.audioPlayerPaused = false;
           
                console.log('playing ' + track.title)
            },
            pause() {

                 this.audioPlayer.pause();
                 this.audioPlayerPaused = true;
            }
        }
    }
</script>

<style scoped >

.album {

   /* width:100%;
   height:90px; */
   padding:5px;
   /* background: #4d4b4b;  */
   color:white;
   font-size:12px;
       cursor:pointer;
}

.album a {
 color:white;
}

.cover {
    float:left;
}
.cover img {
    width:80px;
}
.trackinfo {
    float: left;
    width: 50%;
    padding: 10px 10px;
}

.active-track {
    background-color:#2e86de!important;/* #3c6382!important;*/
    color: #fff;
}

.inactive-track {
    background-color:#8395a7!important;/* #3c6382!important;*/
    color: #fff;
}

.playerControl {
    position: absolute;right: 10px;top: 31%;
    cursor:pointer;
}
.playerControl a {
    margin-left:10px;
}

.trackOverlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    /* background: white; */
    opacity: 0.7;
}

.playingState {
    position:absolute;
    bottom:2px;
    right:40%;
    color:#82ccdd;
}
</style>