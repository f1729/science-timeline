console.log(Vue2Leaflet);

const { LMap, LTileLayer, LMarker, LPopup } = Vue2Leaflet;
console.log(L.latLng(47.413220, -1.219482));
new Vue({
  el: '#app',
  components: { LMap, LTileLayer, LMarker, LPopup },
  data() {
    return {
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: L.latLng(47.413220, -1.219482),
      scientists: [
          {
              name: 'Stephen Hawking',
              birth: 'xxxx',
              icon: L.icon({
                  iconUrl: 'https://www.famousbirthdays.com/faces/hawking-stephen-image.jpg',
                  iconSize: [50, 50],
                  iconAnchor: [22, 94],
                  popupAnchor: [-3, -76],
              }),
              marker: L.latLng(47.413220, -1.219482),
              biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
          {
              name: 'Albert Einstein',
              icon: L.icon({
                  iconUrl: 'https://i.ebayimg.com/images/g/XAAAAMXQ8odRGWQv/s-l300.jpg',
                  iconSize: [50, 50],
                  iconAnchor: [22, 94],
                  popupAnchor: [-3, -76],
              }),
              birth: 'xxxx',
              marker: L.latLng(17.413220, -21.219482),
              biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
          {
              name: 'Nikola Tesla',
              icon: L.icon({
                  iconUrl: 'https://www.famousbirthdays.com/faces/tesla-nikola-image.jpg',
                  iconSize: [50, 50],
                  iconAnchor: [22, 94],
                  popupAnchor: [-3, -76],
              }),
              birth: 'xxxx',
              marker: L.latLng(45.413220, 31.219482),
              biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
      ],
    }
  },
  methods: {
    cambiarSaludo() {
        setTimeout(() => {
            this.message = "Hola!!!";
        }, 2000);
    },
    agregarUsuario() {
        this.cambiarSaludo();
        this.usuarios.push('OTRO');
    }
  }
})
