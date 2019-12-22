<template>
    <v-container id="gallery" fluid>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-container fluid>
                        <v-row>
                            <v-col
                                    v-for="(item, index) in images"
                                    :key="index"
                                    :class="{'col-3' : !isMobile, 'col-12' : isMobile}"
                            >
                                <v-hover v-slot:default="{ hover }" :key="index">
                                    <v-card flat tile :elevation="hover ? 12 : 2" @click="clickCard(item, index)" >
                                        <v-img
                                                height="350"
                                                :src="item.img"
                                                :lazy-src="item.img"
                                                aspect-ratio="0.7"
                                                class="grey lighten-2"
                                        >
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                        <v-card-title primary-title v-if="item.translate">
                                            <h3 class="headline mb-0">{{$t(item.translate + '.title')}}</h3>
                                        </v-card-title>
                                        <v-card-text v-if="!isMobile && item.translate" height="180" >
                                            {{$t(item.translate + '.description')}}
                                        </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog.show" max-width="900">
            <v-layout text-center wrap class="background-white">
                <v-col max-width="800" cols="12">
                    <v-img :src="dialog.img" :lazy-src="dialog.img">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                    <v-card-text v-if="dialog.translate">
                        {{$t(dialog.translate + '.description')}}
                    </v-card-text>
                </v-col>
            </v-layout>
        </v-dialog>
    </v-container>
</template>

<script>
    import isMobile from "./utils/Mobile";
    export default {
        name: "Gallery",
        props: {
            images: Array,
            redirect: Boolean,
            redirectCallback: { Function, required: false }
        },
        data: ()=>({
            dialog: { show: false }
        }),
        methods:{
            clickCard(item, index){
                if(!this.redirect){
                    this.dialog = {
                        show: true,
                        index: index,
                        translate: item.translate,
                        img: item.img
                    };
                } else {
                    this.redirectCallback(item.id);
                }
            }
        },
        computed: {
            isMobile
        }
    }
</script>

<style scoped>
    .uppercase {
        text-transform: uppercase;
    }
    .text-white {
        color:white;
    }
    .background-white {
        background-color: white;
    }
    .text-primary {
        color: #8bc34a !important;
    }

    .v-dialog:not(.v-dialog--fullscreen) {
        max-height: none !important;
    }
</style>