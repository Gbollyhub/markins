<template>

 <div class="category-section diff wf-section">
    <div class="bread-crumb">Products &gt; Nikon 450x Camera</div>
    <div class="single-product-row">
      <div class="single-product-col-1"><img src="../../assets/images/photo_camera_PNG101639-2.png" loading="lazy" width="241" alt=""></div>
      <div class="single-product-col-2">
        <div class="single-product-col-2-header">NiKon 450x Camera</div>
        <div class="other-sub-info">Brand: Samsung</div>
        <div class="price-box">
          <div class="price-heading">
            <div class="real-price">N260,000</div>
            <div class="slash-price">N290,000</div>
          </div>
          <div class="price-note">You saved N30,000</div>
        </div>
        <div class="quantity-bbox">
          <div class="text-block-2">Quantity</div>
          <div class="quantity-row">
            <div class="quantity-slot">-</div>
            <div class="quantity-slot">1</div>
            <div class="quantity-slot last">+</div>
          </div>
        </div>
        <div class="button-box">
          <router-link to="/cart" class="primary-button product-page">ADD TO CART</router-link>
          <a href="#" class="wishlist-btn"></a>
        </div>
        <div class="social-box">
          <div class="social-text">Share with your friends</div>
          <div class="social-link"><span class="social-span-1"></span> <span class="social-span-2"></span> <span class="social-span-3"></span></div>
        </div>
      </div>
    </div>
    <div class="product-infor-box">
      <div class="tab-headers-row">
        <div class="descp-tab-link link-active">Description</div>
        <div class="descp-tab-link">Shipping</div>
        <div class="descp-tab-link">Reviews</div>
      </div>
      <div class="descrip-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met, consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla duis semper lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce platea consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met, consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla duis semper lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce platea consectetur.</div>
      <div class="descrip-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met, consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla duis semper lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce platea consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia nulla nunc pulvinar met, consectetur cum. In auctor in venenatis non. Ut a risus in pretium, vitae nulla h. Nulla duis semper lectus faucibus sed netus dis. Justo vulputate vel mentum eu. Ipsum tellus, at fusce platea consectetur.</div>
    </div>
    <div class="product-section">
      <div class="product-cat-header">
        <div class="section-header">Similar Products</div>
        <a href="#" class="category-viewall">View all</a>
      </div>
      <div class="product-row">
          <div class="product-col" v-for="(item, index) in 5" :key="index">
          <div class="product-card">
            <div class="product-image-div white"><img src="../../assets/images/Mask-Group-3.png" loading="lazy" alt="" class="product-image"></div>
          </div>
          <div class="product-title">Apple Iphone 13</div>
          <div class="product-card-actions">
            <div class="product-price">N300,000</div>
            <div class="like-button"></div>
          </div>
        </div>

      </div>
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
