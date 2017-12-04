Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div id="product">
  
    <div class="product-image">
    <img :src="image" :alt="altText" />      
    </div>
    
    <div class="product-info">
    
      <h1>{{ title }}</h1>

      <p>Shipping: {{ shipping }}</p>
      
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      

      <h2>Details</h2>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <h3>Colors:</h3>
      <div v-for="variant in variants" :key="variant.id">
        <div class="color-box" :style="{ backgroundColor: variant.color }" @mouseover="updateProduct(variant.image, variant.quantity, variant.id)"></div>
      </div>

      <button :class="{ disabledButton: !inStock }" v-on:click="addToCart" :disabled="!inStock">Add to Cart</button>

    </div>
  </div>
  `,
  data: function() {
    return {
      id: "",
      product: "Socks",
      brand: "Vue Mastery",
      image: "https://www.sockittome.com/images/detailed/3/F0247.jpg",
      altText: "A pair of socks",
      quantity: 2,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          id: 2234,
          quantity: 15,
          color: "green",
          image: "https://www.sockittome.com/images/detailed/3/F0247.jpg"      
        },
        {
          id: 2235,
          quantity: 0,
          color: "blue",
          image: "https://www.sockittome.com/images/detailed/6/F0374.jpg" 
        }
      ]
    }
  },
  methods: {
    addToCart: function() {
      this.$emit('add-to-cart', { id: this.id })      
    },
    updateProduct: function(variantImage, variantQuantity, variantId) {
      this.image = variantImage
      this.quantity = variantQuantity
      this.id = variantId
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
    },
    shipping: function () {
      if (this.premium === true) {
        return 0.00
      } else {
        return 2.99
      }
    }
  }
})



var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []  
  },
  methods: {
    updateCart: function(product) {
      this.cart.push(product)
    }
  }
})