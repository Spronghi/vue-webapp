<template>
    <v-app-bar app :color="color">
        <v-app-bar-nav-icon v-if="isMobile" @click="toggleDrawer()"></v-app-bar-nav-icon>

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
                            <v-btn text @click="goTo({ to: '/products/' + prod.id, ref:'#products' })">
                                {{ $t(prod.name) }}
                            </v-btn>
                        </v-list-item-title>
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
    import navigation from '../data/navigation';

    export default {
        name: "Header",
        props: {
            offsetTop: Number,
            drawer: Boolean
        },
        data: () => ({
            icon: navigation.icon,
            links: navigation.links,
            products: navigation.products
        }),
        computed: {
            isMobile,
            color(){
                return this.offsetTop < 100 ? 'transparent' : 'white';
            }
        },
        methods: {
            toggleDrawer(){
                this.toId('#navigation-drawer');
                this.$emit('update-drawer', true);
            },
            goTo(ref){
                navigation.goTo.call(this, ref)
            },
            isCurrentLocation(path){
                return navigation.isCurrentLocation.call(this, path)
            },
            toPath(to, onComplete){
                navigation.toPath.call(this, to, onComplete);
            },
            toId(id){
                navigation.toId.call(this, id);
            },
        }
    }
</script>

<style scoped>
    .big-text{
        font-size: 1.5em;
    }
</style>