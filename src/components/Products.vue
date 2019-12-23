<template>
  <v-content id="products">
    <Presentation
            class="mb-5"
            :background-url="product.backgroundImage"
            :description="product.description"
            :title="product.title"
            :title-black="product.titleBlack"
    />
    <Gallery
            class="mb-1"
            :images="product.images"
    />
  </v-content>
</template>

<script>
    import Presentation from "./Presentation";
    import Gallery from "./Gallery";
    import json from '../data/products.json';
    export default {
        name: "Products",
        components: { Gallery, Presentation },
        computed: {
            product(){
                let product = json.products.find(p => p.id == this.$route.params.id);

                return {
                    backgroundImage : '../imgs/' + product.backgroundImage + '.jpeg',
                    description : product.description,
                    title : product.name,
                    titleBlack : product.titleBlack,
                    images : product.images
                }
            }
        }

    }
</script>

<style scoped>

</style>