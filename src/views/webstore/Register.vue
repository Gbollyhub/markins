<template>

 <div class="category-section diff aauth wf-section">
    <div class="auth-card register">
      <div class="auth-header">Register for an your account</div>
      <div class="auth-sub">Fill in your valid credentials to continue</div>
      <div class="form-block-2 w-form">
        <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get">
          <div class="form-row">
            <div class="auth-div col"><label for="name-3" class="auth-label">First Name</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
            <div class="auth-div col-2"><label for="name-3" class="auth-label">Last Name</label><input type="password" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Password" id="name-3"></div>
            <div class="auth-div col-2"><label for="name-3" class="auth-label">Email Address</label><input type="email" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="john@gmail.com" id="name-3"></div>
            <div class="auth-div col-2"><label for="name-3" class="auth-label">Phone Number</label><input type="tel" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="2347083947443" id="name-3"></div>
            <div class="auth-div col-2"><label for="name-4" class="auth-label">Password</label><input type="password" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Password" id="name-3"></div>
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <a href="#" class="primary-button full-width">REGISTER</a>
      <router-link to="/login" class="auth-sub footer-text">Already a member? Login into your account</router-link>
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


