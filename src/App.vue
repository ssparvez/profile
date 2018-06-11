<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar style="background-color: none;">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title" @click="scrollTo('hello')">Shahryar Parvez</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button @click="scrollTo('about')">About Me</md-button>
            <md-button @click="scrollTo('projects')">Projects</md-button>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content style="padding: 0px;">
        <section ref="hello" id="hello">
          <hello></hello>
        </section>
        <section ref="about" id="about">
          <about></about>
        </section>
        <section ref="projects" id="projects">
          <projects></projects>
        </section>
      </md-app-content>
    </md-app>
    <md-speed-dial md-direction="top" class="md-bottom-right md-fixed">
      <md-speed-dial-target class="md-primary" @click="scrollTo('hello')">
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
import Hello from './components/Hello'
import About from './components/About'
import Projects from './components/Projects'

export default {
  name: 'app',
  components: {
    'hello': Hello,
    'about': About,
    'projects': Projects
  },
  mounted () {
    let ref = window.location.hash.replace('#/', '')
    if (ref !== '') this.scrollTo(ref)
  },
  methods: {
    scrollTo (ref) {
      let top = ref === 'hello' ? 0 : this.$refs[ref].offsetTop
      console.log(top)
      window.scroll({ top, behavior: 'smooth' })
      if (history.pushState) history.pushState(null, null, '#' + ref)
      else location.hash = '#' + ref
    }
  },
  data: () => ({ timer: null })
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

.md-app { /* max-height: 100vh; */ }
.md-content { border: 0px !important; }
.md-app-toolbar .md-button { font-weight: 800 !important; }
section>div { padding-top: 100px; }

.section-header {
  font-weight: 800; 
  font-size: 30px; 
  letter-spacing: 1px; 
  text-align: center;
}
.fade-enter-active { transition: opacity 2s; }
.fade-enter{ opacity: 0; }

</style>