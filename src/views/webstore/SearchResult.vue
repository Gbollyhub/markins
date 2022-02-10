<template>
  <div class="category-section diff wf-section">
    <div class="search-top-actions">
      <div class="bread-crumb">Products &gt; Nikon 450x Camera</div>
      <div class="filter-icon-mobile"></div>
    </div>
    <div class="search-result-row">
      <div class="searh-result-col-1">
        <div class="filter-card">
          <div class="filter-slot">
            <div class="global-card-action">
              <div class="filter-action-1">
                <div class="filter-header">Browse Category</div>
              </div>
              <div class="filter-action-2">
                <div class="filter-header">-</div>
              </div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
            <div class="global-card-action value">
              <div class="category-value">&gt; Category Name</div>
              <div class="category-value">(100)</div>
            </div>
          </div>
          <div class="filter-slot">
            <div class="global-card-action">
              <div class="filter-action-1">
                <div class="filter-header">Price Range</div>
              </div>
              <div class="filter-action-2">
                <div class="filter-header">-</div>
              </div>
            </div>
            <div class="w-form">
              <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get">
                <div class="filter-form-row"><input type="text" class="filter-field w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="N(Min)" id="name-3"><input type="email" class="filter-field w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="N(Min)" id="email-2" required=""></div>
                <a href="#" class="primary-button full-width">APPLY</a>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div class="filter-slot">
            <div class="global-card-action">
              <div class="filter-action-1">
                <div class="filter-header">Date</div>
              </div>
              <div class="filter-action-2">
                <div class="filter-header">-</div>
              </div>
            </div>
            <div class="w-form">
              <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get">
                <div class="filter-form-row"><input type="text" class="filter-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="N(Min)" id="name-2"><input type="email" class="filter-field w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="N(Min)" id="email-2" required=""></div>
                <a href="#" class="primary-button full-width">APPLY</a>
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
      </div>
      <div class="search-result-col-2">
        <div class="filter-card">
          <div class="filter-slot">
            <div class="global-card-action">
              <div class="filter-action-1">
                <div class="filter-header">Computer Accessories</div>
              </div>
              <div class="filter-action-2">
                <div class="category-value">Showing 1-12 0f 1000</div>
              </div>
            </div>
          </div>
          <div class="product-row-search-result">
            <div class="product-col search-result" v-for="(item, index) in 12" :key="index">
              <router-link to="/product/1" class="product-card-link">
                <div class="product-card">
                  <div class="product-image-div"><img src="../../assets/images/Mask-Group-3.png" loading="lazy" alt="" class="product-image"></div>
                </div>
                <div class="product-title">Apple Iphone 1s3</div>
                <div class="product-card-actions">
                  <div class="product-price">N300,000</div>
                  <div class="like-button"></div>
                </div>
              </router-link>
            </div>
            
          </div>
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