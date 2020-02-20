<template>
  <div class="projects">
    <h1 class="section-header">Projects</h1>
    <div class="md-layout" style="padding: 8px 32px;">
      <div
        class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100"
        v-for="project in projects"
        :key="project.name"
      >
        <transition name="fade">
          <md-card md-with-hover v-show="project.loaded" style="border-radius: 4px;">
            <md-card-header>
              <div class="md-title">
                <a :href="project.mainURL" target="_blank">{{project.name}}</a>
              </div>
              <div class="md-subhead" style="font-weight: 800;">{{project.years.join(", ")}}</div>
            </md-card-header>
            <md-card-media v-if="project.image" md-ratio="16:9">
              <img v-bind:src="'../static/images/projects/' + project.image" alt="Project Image" />
            </md-card-media>
            <md-card-content>
              {{project.description}}
              <div v-if="project.name == 'Audium'" class="md-caption" style="margin-top: 10px;">
                *You can create your own account or use a demo user:
                <ul style="margin: 0px;">
                  <li>
                    user:
                    <b>johndoe</b> ; password:
                    <b>password</b>
                  </li>
                </ul>
              </div>
            </md-card-content>
            <md-card-actions>
              <md-button
                v-if="project.codeURL"
                :href="project.codeURL"
                target="_blank"
                class="md-icon-button md-accent"
              >
                <md-icon class="md-accent">
                  code
                  <md-tooltip md-direction="top">View Code</md-tooltip>
                </md-icon>
              </md-button>
              <md-button
                v-if="project.mainURL"
                :href="project.mainURL"
                target="_blank"
                class="md-icon-button md-accent"
              >
                <md-icon>
                  open_in_new
                  <md-tooltip md-direction="top">View Project</md-tooltip>
                </md-icon>
              </md-button>
            </md-card-actions>
          </md-card>
        </transition>
      </div>
    </div>
    <div class="bonus">
      <a :href="robot_arm_link" target="_blank">Bonus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  mounted () {
    for (let i = 0; i < this.projects.length; i++) {
      setTimeout(() => (this.projects[i].loaded = true), 500 * (i + 1))
    }
  },
  data: () => ({
    robot_arm_link: 'https://youtube.com/watch?v=8djFpIzg-RA',
    loaded: false,
    projects: [
      {
        name: 'Jotter',
        years: [2020],
        mainURL: 'https://thejotter.xyz',
        codeURL: 'https://github.com/ssparvez/jotter',
        image: 'jotter.png',
        description:
          'A full-stack web app for quickly taking and organizing notes. Built on React with Redux and Node.js with Express integrated with MongoDB.',
        loaded: false
      },
      {
        name: 'Line Tab',
        years: [2019],
        mainURL:
          'https://chrome.google.com/webstore/detail/line-tab/flfjdodphlkeahmbnchjjjkoooahhkio?hl=en-US',
        codeURL: 'https://github.com/ssparvez/line-tab',
        image: 'linetab.png',
        description:
          'A CLI-based new tab Google Chrome extension. Built with Vanilla JS.',
        loaded: false
      },
      {
        name: 'Cryptofy',
        years: [2018],
        image: 'cryptofy.jpg',
        mainURL: 'https://ssparvez.github.io/cryptofy/',
        codeURL: 'https://github.com/ssparvez/cryptofy',
        description:
          'A mobile app that tracks the prices and latest news on top cryptocurrencies with the coinmarketcap API. Built on Ionic with Angular and Firebase.',
        loaded: false
      },
      {
        name: 'Audium',
        years: [2017],
        image: 'audium.png',
        mainURL: 'http://app.audium.io.s3-website.us-east-2.amazonaws.com/',
        codeURL: 'https://github.com/ssparvez/AudiumFrontEnd',
        description:
          'A full-stack web application based on Spotify. It uses Angular 4, Spring Boot and MySQL.',
        loaded: false
      },
      {
        name: 'GeometricVR',
        years: [2017],
        image: 'geometricvr.png',
        mainURL:
          'https://drive.google.com/file/d/1b6D29qBMbOsCPq_k_hg5pFzTj9bmwRWF/view?usp=sharing',
        codeURL: 'https://github.com/ssparvez/geometric-vr',
        description:
          'A virtual reality app that visualizes 3D shapes for iOS/Android. Created in the Unity3D environment with the GoogleVR SDK and behavior scripts written in C#',
        loaded: false
      },
      {
        name: 'PL Data Visualization',
        years: [2016],
        image: 'pldata.png',
        mainURL: 'https://ssparvez.github.io/premier-league-data/',
        codeURL: 'https://github.com/ssparvez/premier-league-data',
        description:
          'An interactive website that visualizes a soccer data set with D3.js and Materialize for the front-end design.',
        loaded: false
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.projects {
  min-height: 100vh;
  background-color: #212121;
}
.md-card {
  margin: 10px;
  background-color: #212121;
  cursor: default;
}

.bonus {
  a {
    color: #ccc !important;
  }
  display: flex;
  justify-content: center;
}

a {
  color: white !important;
}

// not sure why this transition isnt inherited from App.vue
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter {
  opacity: 0;
}
</style>
