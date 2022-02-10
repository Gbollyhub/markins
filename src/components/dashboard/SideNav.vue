<template>
    <div class="dashboard-col-1">
        <div class="dasboard-card">
          <div class="profile-picture"></div>
          <div class="sidelink-div">
            <router-link to="profile" class="sidelink-row active">
              <div class="sidelink-icon"></div>
              <div class="sidelink-text">Profile</div>
            </router-link>
            <router-link to="orders" class="sidelink-row">
              <div class="sidelink-icon"></div>
              <div class="sidelink-text">Orders</div>
            </router-link>
            <router-link to="saved-items" class="sidelink-row">
              <div class="sidelink-icon"></div>
              <div class="sidelink-text">Saved Items</div>
            </router-link>
            <router-link to="notifications" class="sidelink-row">
              <div class="sidelink-icon"></div>
              <div class="sidelink-text">Notifications</div>
            </router-link>
            <router-link to="settings" class="sidelink-row">
              <div class="sidelink-icon"></div>
              <div class="sidelink-text">Settings</div>
            </router-link>
          </div>
          <div class="sidelink-row logout">
            <div class="sidelink-icon"></div>
            <div class="sidelink-text">Logout</div>
          </div>
        </div>
      </div>
</template>