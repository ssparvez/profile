<template>
  <div id="app">
    <md-app md-mode="fixed-last">
      <md-app-toolbar class="md-primary md-elevation-5">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Shahryar Parvez</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-about" md-label="About Me" to="/"></md-tab>
            <md-tab id="tab-projects" md-label="Projects" to="/projects"></md-tab>
          </md-tabs>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
      </md-app-content>
    </md-app>
    <!--<footer style="height: 5vh; background-color: #18FFFF; color: black;">THIS IS MY FOOT</footer>-->
    <footer>
      <md-speed-dial md-direction="top" class="md-bottom-right md-xsmall-hide md-small-hide">
        <md-speed-dial-target class="md-primary">
          <md-icon>reply</md-icon>
          <md-tooltip md-direction="left"><b>Let's connect!</b></md-tooltip>
        </md-speed-dial-target>

        <md-speed-dial-content>
          <md-button class="md-icon-button" href="https://www.linkedin.com/in/syed-shahryar-parvez-560b6a93" target="_blank">
            <img src="./assets/images/LinkedIn.png">
            <md-tooltip md-direction="left">LinkedIn</md-tooltip>
          </md-button>
          <md-button class="md-icon-button" href="https://github.com/ssparvez" target="_blank">
            <img src="./assets/images/GitHub.png">
            <md-tooltip md-direction="left">GitHub</md-tooltip>
          </md-button>

          <md-button class="md-icon-button" href="mailto:shhrrparvez@gmail.com">
            <md-icon>mail</md-icon>
            <md-tooltip md-direction="left">Email</md-tooltip>
          </md-button>
        </md-speed-dial-content>
      </md-speed-dial>
      <!-- <div style="text-align: center">
          <a href="https://github.com/ssparvez"><img src="./assets/images/GitHub.png" height="30" width="30" style="margin-right: 30px;"></a>
          <a href="https://www.linkedin.com/in/syed-shahryar-parvez-560b6a93"><img src="./assets/images/LinkedIn.png" height="30" width="33" style="margin-left: 30px;"></a>
      </div> -->
      </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<!-- Global styles can go here -->
<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(indigo, A700), // The primary color of your application
  accent: md-get-palette-color(cyan, A200), // The accent or secondary color
  theme: dark // This can be dark or light
));

@import "~vue-material/dist/theme/all"; // Apply the theme

#app {
}

#page-title {
  margin-left: 16px; 
  font-weight: 600; 
  font-size: 40px;
}

.md-app {
  min-height: 100vh;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter 
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100vw);
}

.slide-fade-leave-to {
  transform: translateX(-100vw);

}

</style>
