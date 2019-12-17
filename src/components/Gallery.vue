<template>
    <v-container id="gallery" fluid>
        <v-row>
            <v-col cols="12" sm="12" offset-sm="0">
                <v-card>
                    <v-container fluid>
                        <v-row>
                            <v-col
                                    v-for="(item, index) in images"
                                    :key="index"
                                    class="d-flex child-flex"
                                    cols="2"
                            >
                                <v-hover v-slot:default="{ hover }" :key="index">
                                    <v-card flat tile :elevation="hover ? 12 : 2" @click="showDialog(item, index)" >
                                        <v-img
                                                :height="hover ? 200 : 280"
                                                :src="item.img"
                                                :lazy-src="item.img"
                                                aspect-ratio="1"
                                                class="grey lighten-2"
                                        >
                                                <v-btn text class="font-weight-medium uppercase text-white">
                                                    {{item.title}}
                                                </v-btn>
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                            <v-card-text v-if="hover">
                                                Visit ten places on our planet that are undergoing the biggest changes today.
                                            </v-card-text>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog.show" max-width="1100">
            <v-layout text-center wrap class="background-white">
                <v-col max-width="1000" cols="12">
                    <v-img :src="dialog.img" :lazy-src="dialog.img">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-layout>
        </v-dialog>
    </v-container>
</template>

<script>
    export default {
        name: "Gallery",
        data: ()=>({
            dialog: { show: false },
            images: [
                { title:'who 1',  img: `https://picsum.photos/500/300?image=${0 * 5 + 10}` },
                { title:'who 2',  img: `https://picsum.photos/500/300?image=${1 * 5 + 10}` },
                { title:'who 3',  img: `https://picsum.photos/500/300?image=${2 * 5 + 10}` },
                { title:'who 4',  img: `https://picsum.photos/500/300?image=${3 * 5 + 10}` },
                { title:'who 5',  img: `https://picsum.photos/500/300?image=${4 * 5 + 10}` },
                { title:'who 6',  img: `https://picsum.photos/500/300?image=${5 * 5 + 10}` },
                { title:'who 7',  img: `https://picsum.photos/500/300?image=${6 * 5 + 10}` },
                { title:'who 8',  img: `https://picsum.photos/500/300?image=${7 * 5 + 10}` },
                { title:'who 9',  img: `https://picsum.photos/500/300?image=${8 * 5 + 10}` },
                { title:'who 10', img: `https://picsum.photos/500/300?image=${9 * 5 + 10}` },
                { title:'who 11', img: `https://picsum.photos/500/300?image=${10 * 5 + 10}` },
                { title:'who 12', img: `https://picsum.photos/500/300?image=${11 * 5 + 10}` },
            ]
        }),
        methods:{
            showDialog(item, index){
                this.dialog = {
                    show: true,
                    index: index,
                    img: item.img
                };
            }
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
</style>