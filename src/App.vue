<template>
  <div id="app">
    <md-app md-mode="fixed">
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
        <transition :name="transitionName" mode="out-in">
          <router-view style="margin-top: 50px;"/>
        </transition>
      </md-app-content>
    </md-app>
    <md-speed-dial md-direction="top" class="md-bottom-right md-fixed">
      <md-speed-dial-target class="md-primary">
        <md-icon class="md-morph-initial">expand_more</md-icon>
        <md-icon class="md-morph-final">expand_less</md-icon>
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
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    transitionName: 'slide-left' // default
  }),
  // watch the `$route` to determine the transition to use
  watch: {
    '$route' (to) { this.transitionName = to.meta.transitionName }
  }
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

#app { font-family: 'Raleway'; }

#page-title {
  margin-left: 16px; 
  font-weight: 600; 
  font-size: 40px;
}

.md-app { min-height: 100vh; }

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-left, .slide-right {
  &-enter-active {
    transition: all 1s ease;
    will-change: all;
  }
  &-leave-active {
    transition: all .5s ease;
    will-change: all;
  }
}

.slide-left {
  &-enter {
    transform: translateX(100vw);

  }
  &-leave-to {
    transform: translateX(-100vw);
  }
}

.slide-right {
  &-enter {
    transform: translateX(-100vw);

  }
  &-leave-to {
    transform: translateX(100vw);
  }
}
</style>