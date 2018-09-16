
const { LMap, LTileLayer, LMarker, LPopup } = Vue2Leaflet;

new Vue({
  el: '#app',
  components: { LMap, LTileLayer, LMarker, LPopup },
  data() {
    return {
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: L.latLng(47.413220, -1.219482),
      marker: L.latLng(47.413220, -1.219482),
      icon: L.icon({
          iconUrl: 'https://www.famousbirthdays.com/faces/hawking-stephen-image.jpg',
          iconSize: [50, 50],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          shadowUrl: '',
          shadowSize: [68, 95],
          shadowAnchor: [22, 94]
      }),
      message: 'Hello Vue!',
      scientists: [
          {
              name: 'Stephen Hawking',
              img: 'https://www.famousbirthdays.com/faces/hawking-stephen-image.jpg',
              birth: 'xxxx',
              biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
          {
              name: 'Albert Einstein',
              img: 'https://i.ebayimg.com/images/g/XAAAAMXQ8odRGWQv/s-l300.jpg',
              birth: 'xxxx',
              biography: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
          {
              name: 'Nikola Tesla',
              img: 'https://www.famousbirthdays.com/faces/tesla-nikola-image.jpg',
              birth: 'xxxx',
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
