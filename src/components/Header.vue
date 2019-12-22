<template>
    <v-app-bar app :color="color">
        <!-- MENU MOBILE -->
        <v-menu class="hidden-md-and-up" transition="scroll-y-transition" offset-x bottom>
            <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>
            <v-list>
                <v-list-item v-for="ref in links" :key="ref.order" @click="goTo(ref)" style="min-width: 250px; padding: 15px">
                    <v-icon large>{{ref.icon}}</v-icon>
                    <v-list-item-title class="big-text" style="padding-left: 15px">{{ $t(ref.text) }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn class="ma-2" @click="goTo(icon)" text>
            {{ $t(icon.text) }}
        </v-btn>

        <!-- MENU NON MOBILE -->
        <div class="hidden-sm-and-down">
            <v-btn v-for="link in links" :key="link.order" class="ma-2" @click="goTo(link)" text>
                {{ $t(link.text) }}
            </v-btn>

            <v-menu transition="scroll-y-transition" open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn class="ma-2" v-on="on" @click="goTo(products.link)" text>
                        {{ $t(products.link.text) }}
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(prod, i) in products.list" :key="i">
                        <v-list-item-title class="heading">
                            <v-btn text @click="goTo({to: '/products/' + prod.id, ref:'#products' })">
                                {{ $t(prod.name) }}
                            </v-btn></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
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
    import json from '../products/products.json';

    export default {
        name: "Header",
        props: ['offsetTop'],
        created: function () {
            this.products.list = json.products.map(p => {
                return { id: p.id, name : p.name};
            });
        },
        data: () => ({
            drawer: null,
            icon: { id: 1, order: 1, ref: '#home', text: "header.icon", icon:'mdi-account-circle', to: '/home' },
            links: [
                { id: 1, order: 1, ref: '#home', text: "header.home", icon:'mdi-account-home', to: '/home' },
                { id: 2, order: 2, ref: '#who', text: "header.who", icon:'mdi-account-circle', to: '/home' },
                { id: 4, order: 4, ref: '#find-us', text: "header.find-us", icon:'mdi-crosshairs-gps', to: '/home' }
            ],
            products: {
                link: { id: 5, order: 5, ref: '#gallery', text: "header.products", icon:'mdi-crosshairs-gps', to: '/home' },
                list: []
            }
        }),
        computed: {
            isMobile,
            color(){
                return this.offsetTop < 100 ? 'transparent' : 'white';
            }
        },
        methods: {
            goTo(ref){
                if(ref.ref && ref.to && !this.isCurrentLocation(ref.to)) this.toPath(ref.to, () => setTimeout(()=>this.toId(ref.ref), 300));
                else if(ref.ref) this.toId(ref.ref);
                else if(ref.to) this.toPath(ref.to);
            },
            isCurrentLocation(path){
                return this.$router.currentRoute.path.includes(path);
            },
            toPath(to, onComplete){
                this.$router.push({ path: to }, onComplete);
                // this.$router.go(0);
            },
            toId(id){
                this.$vuetify.goTo(id);
            },

        }
    }
</script>

<style scoped>
    .big-text{
        font-size: 1.5em;
    }
</style>