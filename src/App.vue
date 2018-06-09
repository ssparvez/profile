<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title" @click="scrollMeTo('hello')">Shahryar Parvez</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-tabs class="md-primary" :md-active-tab="activeTab">
            <!--<md-tab id="tab-about" md-label="About Me" to="/"></md-tab>
            <md-tab id="tab-projects" md-label="Projects" to="/projects"></md-tab>-->
            <md-tab id="tab-about" md-label="About Me" @click="scrollMeTo('about')"></md-tab>
            <md-tab id="tab-projects" md-label="Projects" @click="scrollMeTo('projects')"></md-tab>
          </md-tabs>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content style="padding: 0px;" id="content">
        <section ref="hello" id="hello">
          <hello></hello>
        </section>
        <section ref="about" id="about">
          <about></about>
        </section>
        <section ref="projects" id="projects">
          <projects ></projects>
        </section>
        
      </md-app-content>
    </md-app>
    <md-speed-dial md-direction="top" class="md-bottom-right md-fixed">
      <md-speed-dial-target class="md-primary" @click="scrollMeTo('hello')">
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
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  },
  mounted () {
    console.log(window.location.hash.replace('#/', ''))
    this.scrollMeTo(window.location.hash.replace('#/', ''))
  },
  methods: {
    scrollMeTo (refName) {
      let element = this.$refs[refName]
      let top = element.offsetTop
      console.log(top)
      if (refName === 'hello') top = 0

      window.scroll({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
      if (history.pushState) history.pushState(null, null, '#' + refName)
      else location.hash = '#' + refName
    },
    onScroll () {
      if (this.timer !== null) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        const scrollPosition = document.documentElement.scrollTop
        console.log(scrollPosition)
        if (scrollPosition < this.sections[0].offsetTop) location.hash = "#"
        else {
          for (let i = 0; i < this.sections.length; i++) {
            const sectionHeight = this.sections[i].offsetHeight
            const sectionOffset = this.sections[i].offsetTop
            if (scrollPosition > sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
              if (history.pushState) history.pushState(null, null, '#' + this.sections[i].id)
              else location.hash = '#' + this.sections[i].id
            }
          }
        }
      }, 150)
    }
  },
  data: () => ({
    timer: null,
    sections: document.getElementsByTagName('section'),
    activeTab: 'null'
  })
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

.md-app {
  //max-height: 100vh;
}

</style>