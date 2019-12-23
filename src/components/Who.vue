<template>
    <v-container id="who" fluid>
        <v-layout text-center wrap>
            <!-- WHO WE ARE -->
            <v-col class="text-left pb-0" cols="12" offset-sm="1">
                <v-card class="d-md-flex text-left no-border" color="transparent" outlined>
                    <v-card-text class="headline text-left pb-0">
                        <span class="buy-us">{{$t('home.who.who-we-are-1')}}</span>
                        <span class="buy-us font-weight-black">{{$t('home.who.who-we-are-2')}}</span>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- DESCRIZIONE - WHO WE ARE -->
            <v-col class="col-lg-10 col-md-12" offset-lg="1">
                <v-row>
                    <v-card class="d-md-flex no-border" color="transparent" outlined>
                        <v-card color="transparent" class="d-md-flex no-border" outlined>
                            <v-card-text class="headline" :class="{'text-center' : isMobile, 'text-left':!isMobile }">
                                {{who}}
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" class="mb-3">
                <v-divider></v-divider>
            </v-col>
            <v-row class="light-green lighten-5 pb-10 pt-10">
                <!-- WHY BUY FROM US -->
                <v-col class="text-left" cols="12" offset-lg="1">
                    <v-card class="d-md-flex text-left no-border" color="transparent" outlined>
                        <v-card-text class="headline text-left">
                            <span class="buy-us">{{$t('home.who.why-buy-from-us-1')}}</span>
                            <span class="buy-us font-weight-black"> {{$t('home.who.why-buy-from-us-2')}}</span>
                        </v-card-text>
                    </v-card>
                </v-col>
                <!-- LISTA DESCRIZIONI - WHY BUY FROM US -->
                <v-col class="col-lg-6 col-md-8" color="transparent" offset="1">
                    <v-row v-for="(item, index) in items" :key="index">
                        <v-col cols="12" offset-md="1" class="text-left">
                            <v-icon color="#8bc34a" class="icon-check">mdi-check-outline</v-icon>
                            <span class="headline " v-text="item"></span>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- IMMAGINE SEDIA DEL CAZZO - WHY BUY FROM US -->
                <v-col v-if="!isMobile" class="hidden-sm-and-down" cols="col-lg-4">
                    <v-img
                            src="https://i.imgur.com/HFh5czk.png"
                            lazy-src="https://i.imgur.com/HFh5czk.png"
                            aspect-ratio="1"
                            max-width="500"
                            max-height="1000"
                    >
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    import isMobile from './utils/Mobile';

    export default {
        name: "Who",
        data: () => ({
            items:[
                "Design, marketing and production decision for developing and supplying your own home collections for private label stores or chain groups.",
                "Short delivery terms.",
                "Attractive minimum order quantities.",
                "Full cycle production lines with 40 years traditions and experience.",
                "All technologies for manufacturing of towels – woven and warp knitted.",
                "Quoting up to 24 hours.",
                "Oeko-tex 100 certificated.",
                "All interior collection from one producer.",
                "100% made in Bulgaria/EU."
            ],
            who: "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }),
        computed : {
            isMobile: isMobile
        }
    }
</script>

<style scoped>
    .no-border {
        border: 0 !important;
    }

    .buy-us {
        font-family: "Dosis";
        color: black;
        font-size: 2.3em;
    }

    .icon-check {
        position: relative;
        right: 24px;
        top: -2%;
        height: 0;
        width: 0;
    }
</style>