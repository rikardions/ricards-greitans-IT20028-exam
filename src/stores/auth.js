import { reactive } from 'vue'
import router from '../router/index.js';

export const auth = reactive({
    user:{
        name: "Richard",
        surname: "Greitans",
        code: "IT20028",
        favorite_songs: localStorage.favorite_songs ?? []
    },
    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
        this.user.name = name
        this.user.surname = surname
        this.user.code = code
    },

    authenticate(email, password) {
        if (email=="richards@lvkv.lv"&&password=="Rich8via") {
            localStorage.is_authenticated = true
            this.is_authenticated = true
            router.push("/")
        }
    },

    logout() {
        localStorage.clear();
        this.is_authenticated = false
        router.push("/login")
    },

    toggleFavorite(songID) {
        if (user.favorite_songs.includes(songID)) {
            user.favorite_songs.splice(user.favorite_songs.indexOf(songID), 1)
        } else {
            user.favorite_songs.push(songID);
        }
        localStorage.favorite_songs = user.favorite_songs;  
    },

    getFavoriteSongs() {
        return user.favorite_songs
    }
})