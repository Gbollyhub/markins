<template>
      <div class="category-section diff wf-section">
    <div class="dashboard-row">
      <SideNav/>
            <div class="dashboard-col-2">
        <div class="dasboard-card col-2">
          <div class="cart-card-action dashboard">
            <div class="filter-action-1">
              <div class="cart-header">Account Information</div>
            </div>
          </div>
          <div class="form-block-3 w-form">
            <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get">
              <div class="profile-row">
                <div class="profile-col-1">
                  <div class="profile-label">Change Profile Picture</div>
                  <div class="profile-description">Choose a new avatar to be used across the app</div>
                </div>
                <div class="profile-col-2">
                  <div class="profile-picture-action">
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="profile-row">
                <div class="profile-col-1">
                  <div class="profile-label">Full Name</div>
                  <div class="profile-description">Customize your account name</div>
                </div>
                <div class="profile-col-2">
                  <div class="profile-col-row">
                    <div class="profile-row-col"><input type="text" class="profile-textfield w-input" maxlength="256" name="field" data-name="Field" placeholder="Example Text" id="field" required=""></div>
                    <div class="profile-row-col _2"><input type="text" class="profile-textfield w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Example Text" id="field-2" required=""></div>
                  </div>
                </div>
              </div>
              <div class="profile-row">
                <div class="profile-col-1">
                  <div class="profile-label">Phone Number</div>
                  <div class="profile-description">Customize your phone number</div>
                </div>
                <div class="profile-col-2"><input type="text" class="profile-textfield w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Example Text" id="field-3" required=""></div>
              </div>
              <div class="profile-row">
                <div class="profile-col-1">
                  <div class="profile-label">Email Address</div>
                  <div class="profile-description">Customize your email address</div>
                </div>
                <div class="profile-col-2"><input type="text" class="profile-textfield w-input" maxlength="256" name="field-3" data-name="Field 3" placeholder="Example Text" id="field-3" required=""></div>
              </div>
              <div class="profile-row">
                <div class="profile-col-1">
                  <div class="profile-label">Shipping Address</div>
                  <div class="profile-description">Customize your shipping address</div>
                </div>
                <div class="profile-col-2"><textarea placeholder="Example Text" maxlength="5000" id="field-4" name="field-4" data-name="field" class="profile-textarea w-input"></textarea></div>
              </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <a href="#" class="primary-button profile">UPDATE</a>
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