<template>
  <v-navigation-drawer v-model="drawerComp" absolute temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>App Name</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item class="pt-1 pb-1" v-for="item in links" :key="item.id" link @click="goTo(item)">
        <v-list-item-icon>
          <v-icon large>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="subtitle-1">{{ $t(item.text) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item class="pt-1 pb-1" link @click="goTo(products.link)">
        <v-list-item-icon>
          <v-icon large>{{ products.link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="subtitle-1">{{ $t(products.link.text) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item class="pt-1 pb-1 pl-10" v-for="prod in products.list" :key="prod.id" link
                   @click="goTo({ to: '/products/' + prod.id, ref:'#products' })">
        <v-list-item-icon>
          <v-icon large></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $t(prod.name) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
    import navigation from "../data/navigation";

    export default {
        name: "NavigationDrawer",
        props:['drawer'],
        data: ()=>({
            icon: navigation.icon,
            links: navigation.links,
            products: navigation.products
        }),
        computed: {
            drawerComp: {
                get(){
                    return this.drawer;
                },
                set(newVal){
                    return this.$emit('update-drawer', newVal);
                }
            }
        },
        methods: {
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

</style>