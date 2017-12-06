Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div>
    
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
    <review-form @review-submitted="addReview"></review-form>    
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
      ],
      reviews: []
    }
  },
  methods: {
    addToCart: function() {
      this.$emit('add-to-cart', this.id)
    },
    updateProduct: function(variantImage, variantQuantity, variantId) {
      this.image = variantImage
      this.quantity = variantQuantity
      this.id = variantId
    },
    addReview: function (review) {
      this.reviews.push(review)
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


Vue.component('review-form', {
  template: `
    <form class="review-form" v-on:submit.prevent="onSubmit">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </div>

      <div>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </div>

      <div>
        <label for="rating">Rating:</label>
        <select id="rating" v-model="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </div>

      <button >Submit</button>
    </form>
  `,
  data: function () {
    return {
      name: '',
      review: '',
      rating: 5,
    }
  },
  methods: {
    onSubmit: function () {
      let review = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }
      this.$emit('review-submitted', review)
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