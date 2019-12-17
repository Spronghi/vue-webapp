<template>
    <v-card id="find-us" class="pa-4" flat height="600px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg">
        <v-row>
            <v-col class="text-left" cols="8" offset-sm="1" style="padding-bottom: 0">
                <v-card color="transparent" class="d-md-flex text-left no-border" outlined>
                    <v-card-text class="headline text-left" style="padding-bottom: 0">
                        <span class="buy-us">Find</span>
                        <span class="buy-us font-weight-black"> Us</span>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2">
                <v-card class="mx-auto" max-width="300">
                    <v-card-title>Via Poporo Pondo</v-card-title>
                    <v-card-subtitle>73100 Lecce</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "FindUs"
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