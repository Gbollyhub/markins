<template>
      <div class="category-section diff wf-section">
    <div class="dashboard-row">
      <SideNav/>
      <div class="dashboard-col-2">
        <div class="dasboard-card col-2">
          <div class="cart-card-action dashboard">
            <div class="filter-action-1">
              <div class="cart-header">Settings</div>
            </div>
          </div>
          <div class="form-block-3 w-form">
            <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get">
              <div class="profile-row">
                <div class="profile-col-1">
                  <div class="profile-label">Old Password</div>
                  <div class="profile-description">Fill in your old password</div>
                </div>
                <div class="profile-col-2"><input type="text" class="profile-textfield w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Example Text" id="field-3" required=""></div>
              </div>
              <div class="profile-row">
                <div class="profile-col-1">
                  <div class="profile-label">New Password</div>
                  <div class="profile-description">Fill in your new password</div>
                </div>
                <div class="profile-col-2"><input type="text" class="profile-textfield w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Example Text" id="field-3" required=""></div>
              </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <a href="#" class="primary-button profile">UPDATE PASSWORD</a>
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