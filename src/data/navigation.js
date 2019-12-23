import json from "./products";

const navigation = {
    links: [
        { id: 1, order: 1, ref: '#home', text: "header.home", icon:'mdi-home-circle-outline', to: '/home' },
        { id: 2, order: 2, ref: '#who', text: "header.who", icon:'mdi-account-circle', to: '/home' },
        { id: 4, order: 4, ref: '#find-us', text: "header.find-us", icon:'mdi-crosshairs-gps', to: '/home' }
    ],
    products: {
        link: { id: 5, order: 5, ref: '#gallery', text: "header.products", icon:'mdi-animation-outline', to: '/home' },
        list: []
    },
    icon: { id: 1, order: 1, ref: '#home', text: "header.icon", icon:'mdi-account-circle', to: '/home' },
    goTo(ref){
        if(ref.ref && ref.to && !this.isCurrentLocation(ref.to)) this.toPath(ref.to, () => setTimeout(()=>this.toId(ref.ref), 300));
        else if(ref.ref) this.toId(ref.ref);
        else if(ref.to) this.toPath(ref.to);

        this.drawerComp = false;
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
};

navigation.products.list = json.products.map(p => {
    return { id: p.id, name : p.name};
});

export default navigation;