<template>
     <div class="filter-mobile">
    <div class="filter-slot">
      <div class="global-card-action mobile-header">
        <div class="filter-action-1">
          <div class="filter-header mobile">Welcome Guest!</div>
        </div>
        <div class="filter-action-2">
          <div style="cursor:pointer" @click="close" class="filter-header mobile-icon"></div>
        </div>
      </div>
      <div class="mobile-menu-action">
        <router-link to="/login" class="oulined-button">Login</router-link>
        <router-link to="/create-account" class="primary-button mobile-menu">REGISTER</router-link>
      </div>
      <router-link to="/user/profile" class="global-card-action">
        <div class="filter-action-1">
          <div class="filter-header">Profile</div>
        </div>
        <div class="category-value">&gt;</div>
      </router-link>

      <router-link to="/user/orders" class="global-card-action">
        <div class="filter-action-1">
          <div class="filter-header">Orders</div>
        </div>
        <div class="category-value">&gt;</div>
      </router-link>
      <router-link to="/user/saved-items" class="global-card-action">
        <div class="filter-action-1">
          <div class="filter-header">Saved Items</div>
        </div>
        <div class="category-value">&gt;</div>
      </router-link>
      <router-link to="/user/notifications" class="global-card-action">
        <div class="filter-action-1">
          <div class="filter-header">Notifications</div>
        </div>
        <div class="category-value">&gt;</div>
      </router-link>
      <router-link to="/user/settings" class="global-card-action">
        <div class="filter-action-1">
          <div class="filter-header">Settings</div>
        </div>
        <div class="category-value">&gt;</div>
      </router-link>
      <router-link to="/" class="global-card-action">
        <div class="filter-action-1">
          <div class="filter-header">Track an Order</div>
        </div>
        <div class="category-value">&gt;</div>
      </router-link>
      <div class="global-card-action">
        <div class="filter-action-1">
          <div class="filter-header">Browse Category</div>
        </div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
      <div class="global-card-action value">
        <div class="category-value">Category Name</div>
        <div class="category-value">&gt;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        close(event){
            let value = false
             this.$emit("closeMenu", value)
        }
    }
}
</script>
<style scoped>
a {text-decoration: none;}
</style>