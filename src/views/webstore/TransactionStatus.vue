<template>

 <div class="category-section diff aauth wf-section">
    <div class="auth-card status">
      <div class="success-icon"></div>
      <div class="status-heading">
        <div class="status-header">Successful Transaction</div>
        <div class="status-sub">Your transaction was successful</div>
      </div>
      <router-link to="/search" class="primary-button full-width">CONTINUE SHOPPING</router-link>
      <router-link to="/user/orders" class="auth-sub footer-text with-style">View Order</router-link>
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
