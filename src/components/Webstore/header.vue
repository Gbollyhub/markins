<template>
    <div>
          <div class="helper-nav">
    <div class="div-block-3">
      <div class="helper-nav-text"><span class="helper-span"></span></div>
      <div class="helper-nav-text">Call us: +2347083948447 </div>
    </div>
    <div class="div-block-4">
      <div class="helper-nav-text"><span class="helper-span"> </span></div>
      <div class="helper-nav-text">Track your order</div>
    </div>
  </div>
  <div class="top-nav-bar">
    <router-link to="/" class="brand-div"><img src="../../assets/images/Logo-1.png" loading="lazy" width="41" alt=""></router-link>
    <div class="top-nav-bar-2">
      <div class="form-block">
        <div class="form">
            <input type="text" class="top-nav-bar-search" placeholder="Search for  products, brands, categories">
          <div class="top-nav-bar-search-btn"></div>
        </div>
      </div>
    </div>
    <div class="top-nav-bar-3">
      <router-link to="/user/saved-items" class="nav-3-icons"></router-link>
      <router-link to="/cart" class="nav-3-icons"></router-link>
      <div class="w-dropdown">
        <div @click="isDropdownActive = !isDropdownActive" class="dropdown-toggle-2 w-dropdown-toggle">
          <div class="w-icon-dropdown-toggle"></div>
          <div class="nav-3-icons"></div>
        </div>
        <nav v-show="isDropdownActive" class="drop-down-list w-dropdown-list">
          <router-link to="/login" class="drop-down-link login w-dropdown-link">Login</router-link>
          <router-link to="/create-account" class="drop-down-link w-dropdown-link">Register</router-link>
        </nav>
      </div>
    </div>
  </div>
  <div class="top-nav-bar mobile">
    <router-link to="/" class="brand-div"><img src="../../assets/images/Logo-1.png" loading="lazy" width="41" alt=""></router-link>
    <div class="top-nav-bar-3">
      <div style="cursor: pointer" @click="isMobileMenu = true" href="#" class="nav-3-icons"></div>
    </div>
  </div>
  <MobileMenu v-show="isMobileMenu" @closeMenu= "closeMobileMenu"/>
    </div>
</template>
<script>
import MobileMenu from "./MobileMenu";
export default {
  components: {
  MobileMenu
  },
  data(){
    return{
      isDropdownActive: false,
      isMobileMenu: false,
    }
  },
  methods: {
    closeMobileMenu(value){
      this.isMobileMenu = value
    }
  }
}
</script>