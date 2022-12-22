<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <button id="btn-edit" @click="setEditText()" :class="[editText == 'Cancel' ? 'active' : '']">{{editText}}</button>
                <button id="btn-save" @click="changeData(name, surname, code)" v-bind:disabled="fieldsAreFilled(name, surname, code)" v-if="editText == 'Cancel'">Save Form</button>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <input id="input-name" v-model="name" v-if="editText == 'Cancel'"/>
                <p id="txt-name">{{getName()}}</p>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <input id="input-surname" v-model="surname" v-if="editText == 'Cancel'"/>
                <p id="txt-surname">{{getSurname()}}</p>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <input id="input-code" v-model="code" v-if="editText == 'Cancel'"/>
                <p id="txt-code">{{getIDCode()}}</p>
            </div>
            <div class="wrapper-songs">
                <label>FAVORITE SONGS</label>
                
                <ul>
                    <li>
                        <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                        <div class="song-info">
                            <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                            <p id="txt-artist" class="song-artists">Example</p>
                        </div>
                    </li>
                </ul>
                <div id="txt-empty" class="empty">NO SONGS FOUND</div>

            </div>
        </form>
    </div>
</template>
<script>
    import { auth } from "../stores/auth";
    export default {
        methods: {
            getName(){
                return auth.user.name;
            },
            getSurname(){
                return auth.user.surname;
            },
            getIDCode(){
                return auth.user.code;
            },
            getFavoriteSongs(){
                return auth.getFavoriteSongs();
            },
            setEditText(){
                if(this.editText == "Edit Form") {
                    this.editText = "Cancel";
                } else {
                    this.editText = "Edit Form";
                }
            },
            fieldsAreFilled(name, surname, code){
                if(name != "" && surname != "" && code != ""){
                    return false;
                }
                return true;
            },
            changeData(name, surname, code){
                this.name = name,
                this.surname = surname,
                this.code = code
                auth.setUserData(name, surname, code)
                this.setEditText()
            }
        },
        data(){
            return{
                editText: "Edit Form",
                name: "",
                surname: "",
                code: ""
            }
        }
    }
</script>