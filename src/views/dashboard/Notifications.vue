<template>
      <div class="category-section diff wf-section">
    <div class="dashboard-row">
      <SideNav/>
           <div class="dashboard-col-2">
        <div class="dasboard-card col-2">
          <div class="cart-card-action dashboard">
            <div class="filter-action-1">
              <div class="cart-header">Notifications</div>
            </div>
          </div>
          <div class="not-row">
            <div class="not-col-1">
              <div class="not-card active" v-for="(item,index) in 3" :key="index">
                <div class="icon-div"></div>
                <div class="not-card-col-2">
                  <div class="not-card-headding">Dear Wale, your order with ID 28338223 has already been shipped and will arrive on the 4th of Dec...</div>
                  <div class="not-actions">
                    <a href="#" class="not-action-text date">Tues 5th, 2020</a>
                    <a href="#" class="not-action-text delete">Delete</a>
                  </div>
                </div>
              </div>


          </div>
           <div class="not-col-2">
              <div class="not-description">
                <div class="empty-not">
                  <div class="not-empty-icon">
                    <div class="icon-div description"></div>
                  </div>
                  <div class="not-empty-text">Select a notification to see its content</div>
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