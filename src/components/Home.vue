<template>
    <v-content id="home" v-on:scroll.passive="onScroll">
        <Presentation
                class="mb-5"
                :offset-top="offsetTop"
                background-url="https://i.imgur.com/5ki25Hp.jpg"
                title="home.title"
                subtitle="home.subtitle"
        />
        <Who class="mb-1"/>
        <Gallery class="mb-1" :images="images" :redirect-callback="redirectCallback" :redirect="true"/>
        <FindUs class="mb-5"/>
    </v-content>
</template>

<script>
    import Presentation from './Presentation';
    import Gallery from './Gallery';
    import FindUs from "./FindUs";
    import Who from "./Who";
    import json from "../data/products";

    export default {
        name: "Home",
        components: {
            Presentation,
            Gallery,
            FindUs,
            Who
        },
        data: () => ({
            offsetTop: 0,
            images: []
        }),
        methods : {
            onScroll (e) {
                this.offsetTop = e.target.scrollTop;
            },
            redirectCallback(id){
                this.goTo({to: '/products/' + id, ref:'#products' })
            },
            goTo(ref){
                if(ref.ref && ref.to) this.toPath(ref.to, () => setTimeout(()=>this.toId(ref.ref), 300));
                else if(ref.ref) this.toId(ref.ref);
                else if(ref.to) this.toPath(ref.to);
            },
            toPath(to, onComplete){
                this.$router.push({ path: to }, onComplete);
                // this.$router.go(0);
            },
            toId(id){
                this.$vuetify.goTo(id);
            },
        },
        created() {
            let formatUrl = (img) => img.includes('http') ? img : ('../imgs/' + img + '.jpeg');
            this.images = json.products.map(p => ({ id: p.id, translate : 'product-' + p.id, img : formatUrl(p.backgroundImage) }));
        }
    }
</script>

<style scoped>

</style>