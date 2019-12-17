<template>
    <v-app-bar app :color="color">

        <v-menu v-if="isMobile" transition="scroll-y-transition" bottom>
            <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>
            <v-list>
                <v-list-item v-for="(ref, i) in links" :key="i" @click="$vuetify.goTo(ref.ref)" style="min-width: 250px; padding: 15px">
                    <v-icon large>{{ref.icon}}</v-icon>
                    <v-list-item-title class="big-text" style="padding-left: 15px">{{ $t(ref.text) }}</v-list-item-title>
                    <v-divider v-if="i !== links.length" :key="`divider-${i}`"></v-divider>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn class="ma-2" @click="$vuetify.goTo(home.ref)" text>
            {{ $t(home.text) }}
        </v-btn>

        <div v-if="!isMobile" >
            <v-btn class="ma-2" v-for="link in links" :key="link.ref" @click="$vuetify.goTo(link.ref)" text>
                {{ $t(link.text) }}
            </v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-btn class="ma-1" href="" target="_blank" text icon>
            <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn class="ma-1" href="" target="_blank" text icon>
            <v-icon>mdi-instagram</v-icon>
        </v-btn>

        <v-btn class="ma-1" href="" target="_blank" text icon>
            <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn class="ma-1" href="" target="_blank" text icon>
            <v-icon>mdi-reddit</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    import isMobile from "./utils/Mobile";

    export default {
        name: "Header",
        props: ['offsetTop'],
        data: () => ({
            drawer: null,
            home: { ref: '#home', text: "header.title" },
            links: [
                { ref: '#who', text: "header.who", icon:'mdi-account-circle' },
                { ref: '#gallery', text: "header.gallery", icon:'mdi-image-filter' },
                { ref: '#find-us', text: "header.find-us", icon:'mdi-crosshairs-gps' }
            ]
        }),
        computed: {
            isMobile: isMobile,
            color(){
                return this.offsetTop < 100 ? 'transparent' : 'white';
            }
        },
        methods: {
            toggle(){
                this.drawer = !this.drawer;
            }
        }
    }
</script>

<style scoped>
    .big-text{
        font-size: 1.5em;
    }
</style>