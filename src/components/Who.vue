<template>

    <v-container id="who" fluid>
        <v-layout text-center wrap>
            <v-col class="text-left" cols="12" offset-sm="1" style="padding-bottom: 0">
                <v-card class="d-md-flex text-left no-border" outlined>
                    <v-card-text class="headline text-left" style="padding-bottom: 0">
                        <span class="buy-us">Who we</span>
                        <span class="buy-us font-weight-black"> Are</span>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="6" offset-sm="3">
                <v-row>
                    <v-card class="d-md-flex no-border" outlined>
                        <v-card class="d-md-flex no-border" outlined>
                            <v-card-text class="headline text-left">
                                {{who}}
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" style="margin-bottom: 30px">
                <v-divider></v-divider>
            </v-col>
            <v-row>
                <v-col class="text-left" cols="12" offset-sm="1">
                    <v-card class="d-md-flex text-left no-border" outlined>
                        <v-card-text class="headline text-left">
                            <span class="buy-us">Why</span>
                            <span class="buy-us font-weight-black"> Buy From Us?</span>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6" offset-sm="2">
                    <v-row v-for="(item, index) in items" :key="index">
                        <v-card class="d-md-flex no-border" outlined>
                            <v-icon color="#8bc34a">mdi-check-outline</v-icon>
                            <v-card-text class="headline text-left">
                                {{item}}
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col cols="4">
                    <v-img
                            src="../imgs/who-1.png"
                            lazy-src="../imgs/who-1.png"
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
        })
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
</style>