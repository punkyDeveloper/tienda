var productDetail = new Vue({
    el: "#app",
    data: {
      productTitle: "Round Neck Vue Logo T-Shirt",
      productPrice: "$20",
      productChecks: [
        "100% cotton on the neckline",
        "certified and safe",
        "ash in color",
        "Smooth in quality"
      ],
      bannerImage: "https://i.imgur.com/Nmuu6Jh.jpg",
      productImages: [
        {
          id: 3435,
          imageUrl: "https://i.imgur.com/Nmuu6Jh.jpg"
        },
        {
          id: 3436,
          imageUrl: "https://i.imgur.com/VFcTYyU.jpg"
        }
      ],
      cart: 0,
      stockAvailability: true,
      activeClass: 0
    },
    methods: {
      addToCart: function () {
        this.cart = this.cart + 1;
      },
      currentThumnail: function (image, index) {
        this.bannerImage = image;
        this.activeClass = index;
      }
    }
  });
  