<template>

<div class="category-section diff aauth wf-section">
    <div class="auth-card">
      <div class="auth-header">Login into your account</div>
      <div class="auth-sub">Fill in your valid credentials to continue</div>
      <div class="form-block-2 w-form">
        <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get">
          <div class="auth-div"><label for="name-3" class="auth-label">Username</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
          <div class="auth-div"><label for="name-3" class="auth-label">Password</label><input type="password" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Password" id="name-3"></div>
          <div class="auth-sub coloured">Forgot Password?</div>
          <router-link href="/user/profile" class="primary-button full-width">LOGIN</router-link>
          <router-link to="/create-account" class="auth-sub footer-text">Not a member? Register for an account</router-link>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
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
