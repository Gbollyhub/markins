<template>
      <div class="category-section diff wf-section">
    <div class="dashboard-row">
      <SideNav/>
      <div class="dashboard-col-2">
        <div class="dasboard-card col-2">
          <div class="cart-card-action dashboard">
            <div class="filter-action-1">
              <div class="cart-header">Saved Items</div>
            </div>
          </div>
          <div class="cart-row">
            <div class="cart-col-1"><img src="images/Mask-Group-3.png" loading="lazy" width="71" alt="" class="product-image"></div>
            <div class="cart-col-2">
              <div class="cart-col-2-row-1 profile">
                <div class="cart-inner-row-col">
                  <div class="cart-label">Product</div>
                  <div class="cart-value">Apple Iphone 13 Pro Max</div>
                </div>
                <div class="div-block-7">
                  <div class="cart-inner-row-col">
                    <div class="cart-value add-to-cart">Add to Cart</div>
                  </div>
                  <div class="cart-inner-row-col">
                    <div class="cart-value add-to-cart remove">Remove</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideNav from "@/components/dashboard/SideNav.vue"
export default {
  components: {
    SideNav
  },
        mounted () {
  window.scrollTo(0, 0)
},
}
</script>