Vue.component('product', {
  template: `
  <div id="product">
    <div class="product-image">
    <img :src="image" :alt="altText" />      
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <h2>Details</h2>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <h3>Colors:</h3>
      <div v-for="variant in variants" :key="variant.id">
        <div class="color-box" :style="{ backgroundColor: variant.color }" @mouseover="updateProduct(variant.image, variant.quantity)"></div>
      </div>

      <div class="cart">
        <p>{{ cart }} items in cart</p>
        <button :class="{ disabledButton: !inStock }" v-on:click="addToCart" :disabled="!inStock">Add to Cart</button>
      </div>

    </div>
  </div>
  `,
  data: function() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      image: "https://www.sockittome.com/images/detailed/3/F0247.jpg",
      altText: "A pair of socks",
      quantity: 2,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          id: 1,
          quantity: 15,
          color: "green",
          image: "https://www.sockittome.com/images/detailed/3/F0247.jpg"      
        },
        {
          id: 2,
          quantity: 0,
          color: "blue",
          image: "https://www.sockittome.com/images/detailed/6/F0374.jpg" 
        }
      ],
      cart: 0
    }
  },
  methods: {
    addToCart: function() {
      this.cart += 1
    },
    updateProduct: function(variantImage, variantQuantity) {
      this.image = variantImage
      this.quantity = variantQuantity
    }
  },
  computed: {
    title: function () {
      return this.brand + ' ' + this.product
    },
    inStock: function () {
      if (this.quantity > 0) {
        return true
      } else {
        return false
      }
    }
  }
})



var app = new Vue({
  el: '#app'
})