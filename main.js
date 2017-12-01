
var app = new Vue({
  el: '#app',
  data: {
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






// //////////////////////////////////////////////////PRODUCT-DISPLAY//

// Vue.component('product-display', {
//   props: ['title', 'desc','price', 'stocked', 'image', 'variants'],
//   template: `
//     <div class="container" style="padding-top: 30px;">
//       <div class="columns">

//         <div class="column">
//           <div class="card">
//             <div class="card-image">
//               <img :src="image"/>
//             </div>
//           </div>
//         </div>

//         <div class="column">
//           <h2 class="title">{{ title }}</h2>
//           <p class="subtitle">{{ desc }}</p>
//           <p>Price: {{ price }}</p>
//           <p v-if="stocked">In Stock</p>
//           <p v-else="stocked">Out of Stock</p>
//           <hr>
//           <div>
//             <p>Color Options:</p>

//             <ul>
//               <li v-for="variant in variants" :key="variant.id">
//                 <div :style="{ backgroundColor: variant.color }" style="width: 40px; height: 40px; margin: 10px;" v-on:mouseover="updateImage(variant.image)"></div>
//               </li>
//             </ul>
  
//             </div>
//         </div>
//       </div>
//     </div>
//   `,
//   methods: {
//     updateImage(image) {
//       this.$emit('update-image', image)
//     }
//   }
// })

// //////////////////////////////////////////////////////////////TABS//

// Vue.component('tabs', {
//   template: `
//   <div class="container">
//     <div class="tabs">
//       <ul>
//         <li v-for="tab in tabsArray" :class="{ 'is-active' : tab.isActive }">
//           <a @click="selectTab(tab)">{{ tab.name }}</a>
//         </li>
//       </ul>
//     </div>

//     <div>
//       <slot></slot>
//     </div>
//   </div>
//   `,
//   data() {
//     return {
//       tabsArray: []
//     }
//   },
//   mounted() {
//     this.tabsArray = this.$children;
//   },
//   methods: {
//     selectTab(clickedTab) {
//       this.tabsArray.forEach(tab =>
//         tab.isActive = (tab === clickedTab)
//       )
//     }
//   }
// })

// ////////////////////////////////////////////////////////////TAB//

// Vue.component('tab', {
//   template: `
//     <div v-show="isActive">
//       <slot></slot>
//     </div>
//   `,
//   props: { 
//     name: { required: true },
//     selected: { default: false }
//   },
//   data() {
//     return {
//       isActive: false
//     }
//   },
//   mounted() {
//     this.isActive = this.selected
//   }
// })

// ////////////////////////////////////////////////////////////REVIEWS//

// Vue.component('reviews', {
//   props: ['reviews'],
//   template: `
//   <div>
//     <div v-for="review in reviews" style="padding-bottom: 20px;" :key="review.id">
//       <span>Rating: {{ review.rating }}</span>
//       <p>{{ review.date }}</p>            
//       <p>{{ review.text }}</p>
//       <p>by {{ review.author }}</p>
//     </div>
//   </div>
//   `
// })

// ////////////////////////////////////////////////////////////REVIEW-FORM//

// Vue.component('review-form', {
//   template: `
//   <div>
//     <h1>Leave a review:</h1>

//     <div class="field">
//      <input class="input" type="text" placeholder="Your Name" v-model="name">      
//     </div>

//     <div class="field">    
//      <textarea class="textarea" placeholder="Review" v-model="text"></textarea>
//     </div>

//     <div class="field">        
//       <div class="select">
//         <select v-model="rating">
//           <option>Rating</option>
//           <option>5</option>
//           <option>4</option>
//           <option>3</option>
//           <option>2</option>
//           <option>1</option>
//         </select>
//       </div>
//     </div>
    
//     <div class="control">
//       <button class="button is-info" @click="submitReview">Submit</button>
//     </div>

//   </div>
//   `,
//   data() {
//     return {
//       name: "",
//       text: "",
//       rating: ""
//     }
//   },
//   methods: {
//     submitReview() {
//       this.$emit('submit-review', this.data)      
//     }
//   }
// })

// ////////////////////////////////////////////////////////////ROOT//

// var app = new Vue({
//   el: '#root',
//   data: {
//     greeting: "Hello, Vue Master",
//     product: {
//       id: 1,
//       title: 'Flannel Shirt',
//       desc: 'The finest shirt you will ever wear',
//       price: 25.00,
//       image: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2015/09/stormy-kromer-flannel.png",
//       stocked: true,
//       rating: 5,
//       variants: [
//         {
//           id: 234,
//           color: "Red",
//           quantity: 5,
//           image: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2015/09/stormy-kromer-flannel.png"
//         },
//         {
//           id: 235,
//           color: "Blue",
//           quantity: 3,
//           image: "https://i5.walmartimages.com/asr/56135c24-a32d-4765-b528-2f7480e4fb8d_1.b112247c8a6b575c89b9749f7b118462.jpeg"
//         }
//       ],
//       details: {
//         brand: 'Vuetiful',
//         material: 'organic cotton',
//         shipping: 3.99
//       },
//       reviews: [ 
//         {
//           id: 12,
//           productId: 1,
//           date: "Nov 21, 2017",
//           author: "Mary Cohlman",
//           text: "I love this item. Great quality. Just what I needed!"
//         },
//         {
//           id: 13,
//           productId: 1,
//           date: "Nov 1, 2017",
//           author: "Al Ghettin",
//           text: "Pretty nice. Color was a bit darker than expected but good overall."
//         },
//         {
//           id: 14,
//           productId: 1,
//           date: "Oct 11, 2017",
//           author: "Denny Hondly",
//           text: "Don't even think about buying this."
//         }
//       ]
//     }
//   },
//   methods: {
//     updateImage(url) {
//       this.product.image = url
//     },
//     submitReview(data) {
//       this.product.reviews.push(data)
//     }
//   }
// })