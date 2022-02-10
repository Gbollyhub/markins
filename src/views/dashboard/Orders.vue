<template>
      <div class="category-section diff wf-section">
    <div class="dashboard-row">
      <SideNav/>
           <div class="dashboard-col-2">
        <div class="dasboard-card col-2">
          <div class="cart-card-action dashboard">
            <div class="filter-action-1">
              <div class="cart-header">Orders</div>
            </div>
          </div>
          <div class="cart-row" v-for="(item,index) in 4" :key="index">
            <div class="cart-col-1"><img src="images/Mask-Group-3.png" loading="lazy" width="71" alt="" class="product-image"></div>
            <div class="cart-col-2">
              <div class="cart-col-2-row-1 profile">
                <div class="cart-inner-row-col">
                  <div class="cart-label">Product</div>
                  <div class="cart-value">Apple Iphone 13 Pro Max</div>
                </div>
                <div class="cart-inner-row-col">
                  <div class="cart-label">Price</div>
                  <div class="cart-value">N200,000</div>
                </div>
                <div class="cart-inner-row-col">
                  <div class="cart-label">Order Date</div>
                  <div class="cart-value">02/05.22</div>
                </div>
                <div class="cart-inner-row-col">
                  <div class="cart-label">Sub Total</div>
                  <div class="cart-value delivered">Delivered</div>
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