<template>
  <div class="home">
  
    <div class="hero-banner">
    <div class="hero-banner-col-1">
      <div class="banner-header">All your electronics needs satisfied</div>
      <div class="banner-sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met, consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h.</div>
      <router-link to="/category/1" class="primary-button">SHOP NOW</router-link>
    </div>
    <div class="hero-banner-col-2"><img src="../../assets/images/Right-col.png" loading="lazy" width="668" sizes="(max-width: 767px) 90vw, 62vw" srcset="../../assets/images/Right-col-p-500.png 500w, ../../assets/images/Right-col-p-800.png 800w, ../../assets/images/Right-col.png 903w" alt="" class="banner-image"></div>
  </div>
  <div class="category-section wf-section">
    <div class="section-header">Categories</div>
    <div class="category-row">
      <router-link to="/product/1" class="category-col" v-for="(item, index) in 4" :key="index">
        <div class="catgory-card">
          <div class="card-col-1">
            <div class="card-title">Smartphones<br>&amp; Tablets</div>
            <div class="div-block">
              <a href="search-result.html" class="card-action">SHOP NOW</a>
              <a href="#" class="card-action-span"><span class="card-action-span"></span></a>
            </div>
          </div>
          <div class="card-col-2"><img src="../../assets/images/Mask-Group-2_1.png" loading="lazy" alt="" class="card-img"></div>
        </div>
      </router-link>
     
    </div>
    <div class="section-header">Special Deals</div>
    <div class="section-ad-1"></div>
    <div class="section-ad-row">
      <div class="ad-col-1">
        <div class="ad-col-1-img"></div>
      </div>
      <div class="ad-col-2">
        <div class="ad-3"></div>
        <div class="ad-4"></div>
      </div>
    </div>
    <div class="product-section">
      <div class="product-cat-header">
        <div class="section-header">Best Sellers</div>
        <a href="#" class="category-viewall">View all</a>
      </div>
      <div class="product-row">
        <div class="product-col" v-for="(item,index) in 5" :key="index">
          <router-link to="/product/1" class="product-card-link w-inline-block">
            <div class="product-card">
              <div class="product-image-div"><img src="../../assets/images/Mask-Group-3.png" loading="lazy" alt="" class="product-image"></div>
            </div>
            <div class="product-title">Apple Iphone 13</div>
            <div class="product-card-actions">
              <div class="product-price">N300,000</div>
              <div class="like-button"></div>
            </div>
          </router-link>
        </div>


      </div>
    </div>
    <div class="product-section">
      <div class="product-cat-header">
        <div class="section-header">Just for you</div>
        <a href="#" class="category-viewall">View all</a>
      </div>
      <div class="product-row">
        <div class="product-col"  v-for="(item,index) in 5" :key="index">
           <router-link to="/product/1" class="product-card-link w-inline-block">
            <div class="product-card">
              <div class="product-image-div"><img src="../../assets/images/Mask-Group-3.png" loading="lazy" alt="" class="product-image"></div>
            </div>
            <div class="product-title">Apple Iphone 13</div>
            <div class="product-card-actions">
              <div class="product-price">N300,000</div>
              <div class="like-button"></div>
            </div>
          </router-link>
        </div>
        

      </div>
    </div>
    <div class="product-section">
      <div class="product-cat-header">
        <div class="section-header">Deals for the day</div>
        <a href="#" class="category-viewall">View all</a>
      </div>
      <div class="product-row">
        <div class="product-col" v-for="(item,index) in 5" :key="index">
          <router-link to="/product/1" class="product-card-link w-inline-block">
            <div class="product-card">
              <div class="product-image-div"><img src="../../assets/images/Mask-Group-3.png" loading="lazy" alt="" class="product-image"></div>
            </div>
            <div class="product-title">Apple Iphone 13</div>
            <div class="product-card-actions">
              <div class="product-price">N300,000</div>
              <div class="like-button"></div>
            </div>
          </router-link>
        </div>
       
      </div>
    </div>
    <div class="footer-ad"></div>
  </div>
  </div>
</template>

<script>
export default {
      mounted () {
  window.scrollTo(0, 0)
},
}
</script>

<style scoped>
a { text-decoration: none;text-decoration-color: none;}
</style>
