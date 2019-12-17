<template>
    <v-app-bar app :color="color">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn class="ma-2" v-for="link in links" :key="link.ref" @click="$vuetify.goTo(link.ref)" text>
            {{ $t(link.text) }}
        </v-btn>

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

    export default {
        name: "Header",
        props: ['offsetTop'],
        data: () => ({
            drawer: null,
            links: [
                { ref: '#home', text: "header.title" },
                { ref: '#who', text: "header.who" },
                { ref: '#gallery', text: "header.gallery" },
                { ref: '#find-us', text: "header.find-us" }
            ]
        }),
        computed: {
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

</style>