<template>

<div class="category-section diff wf-section">
    <div class="checkout-row">
      <div class="checkout-col-1">
        <div class="checkout-card">
          <div class="global-card-action">
            <div class="filter-action-1">
              <div class="filter-header">Billing Address</div>
            </div>
          </div>
          <div class="w-form">
            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get">
              <div class="filter-form-row">
                <div class="auth-div col"><label for="name-3" class="auth-label">First Name</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col"><label for="name-4" class="auth-label">Last Name</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col full-width"><label for="name-4" class="auth-label">Email Address</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col full-width"><label for="name-4" class="auth-label">Street Address</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col"><label for="name-4" class="auth-label">City</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col"><label for="name-4" class="auth-label">State</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col"><label for="name-4" class="auth-label">Zip Code</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col"><label for="name-4" class="auth-label">Mobile Number</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
                <div class="auth-div col full-width"><label class="w-checkbox global-checkbox"><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" class="w-checkbox-input"><span class="auth-label w-form-label" for="checkbox">My billing and shipping address are the same</span></label><label class="w-checkbox global-checkbox"><input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" class="w-checkbox-input"><span class="auth-label w-form-label" for="checkbox-2">Create an account for later use</span></label></div>
              </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div class="checkout-card">
          <div class="global-card-action">
            <div class="filter-action-1">
              <div class="filter-header">Payment Method</div>
            </div>
          </div>
          <div class="w-form">
            <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get">
              <div class="payment-method-box"><label class="global-radio w-radio"><input type="radio" data-name="Radio" id="radio" name="radio" value="Radio" class="w-form-formradioinput w-radio-input"><span class="auth-label w-form-label" for="radio">Pay on Delivery</span></label>
                <div class="category-value">You will be redirected to the PayPal website after submitting your order</div>
              </div>
              <div class="payment-method-box"><label class="global-radio w-radio"><input type="radio" data-name="Radio 2" id="radio-2" name="radio" value="Radio" class="w-form-formradioinput w-radio-input"><span class="auth-label w-form-label" for="radio-2">Pay with Credit Card</span></label>
                <div class="category-value">You will be redirected to the PayPal website after submitting your order</div>
              </div>
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
      <div class="checkout-col-2">
        <div class="checkout-card">
          <div class="global-card-action">
            <div class="filter-action-1">
              <div class="filter-header">Order Review</div>
            </div>
            <div class="filter-action-2">
              <div class="filter-header">-</div>
            </div>
          </div>
          <div class="cart-row overview" v-for="(item, index) in 3" :key="index">
            <div class="cart-col-1"><img src="../../assets/images/Mask-Group-3.png" loading="lazy" width="47" alt="" class="product-image"></div>
            <div class="cart-col-2">
              <div class="cart-col-2-row-1 overview">
                <div class="cart-inner-row-col">
                  <div class="cart-value checkout">Apple Iphone 13 Pro Max</div>
                  <div class="cart-value checkout">N270,000</div>
                  <div class="cart-value checkout">Qty:1</div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div class="checkout-card">
          <div class="global-card-action">
            <div class="filter-action-1">
              <div class="filter-header">Discount Codes</div>
            </div>
          </div>
          <div class="w-form">
            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get">
              <div class="filter-form-row overview">
                <div class="auth-div col full-width overview"><label for="name-4" class="auth-label">Coupon Code</label><input type="text" class="auth-filed w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="John Doe" id="name-3"></div>
              </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div class="checkout-card">
          <div class="global-card-action">
            <div class="filter-action-1">
              <div class="filter-header">Billing Summary</div>
            </div>
          </div>
          <div class="global-card-action value">
            <div class="category-value">Subtotal</div>
            <div class="category-value">N200,000</div>
          </div>
          <div class="global-card-action value">
            <div class="category-value">Discount</div>
            <div class="category-value">-N0.00</div>
          </div>
          <div class="global-card-action value">
            <div class="category-value">Shipping</div>
            <div class="category-value">N0.00</div>
          </div>
          <div class="global-card-action overview">
            <div class="filter-action-1">
              <div class="filter-header">Grand Total</div>
            </div>
            <div class="filter-header">N200,000</div>
          </div>
          <router-link to="/transaction-status" class="primary-button full-width">PAY N200,000</router-link>
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
