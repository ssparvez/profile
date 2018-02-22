<template>
  <div class="projects">
    <h1 id="page-title">Projects</h1>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100" v-for="project in projects" :key="project.name">
        <md-card md-with-hover style="cursor: default;">
          <md-card-header>
            <div class="md-title" style="font-weight: 500;">{{project.name}}</div>
            <div class="md-subhead" style="font-weight: 600;">
              <span v-for="(year, index) in project.years" :key="year">
                {{(project.years.length > 1) && (index != (project.years.length - 1)) ? year + ", " : year}}
              </span>
            </div>
          </md-card-header>
          <md-card-media v-if="project.image" md-ratio="16:9">
            <img v-bind:src="'../static/images/' + project.image">
          </md-card-media>
          <md-card-media v-if="project.video">
            <iframe style="width: 560px; height: 220px;" v-bind:src="project.video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </md-card-media>
          <md-card-content>
            {{project.description}}
            <div v-if="project.name == 'Audium'" class="md-caption" style="margin-top: 10px;">
              *You can create your own account or use a demo user: 
              <ul style="margin: 0px;">
                <li>user: <b>johndoe</b> ; password: <b>password</b></li>
              </ul>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button v-if="project.codeURL" v-bind:href="project.codeURL" target="_blank" class="md-icon-button md-accent">
              <md-icon class="md-accent">
                code
                <md-tooltip md-direction="top">View Code</md-tooltip>
              </md-icon>
            </md-button>
            <md-button v-if="project.mainURL" v-bind:href="project.mainURL" target="_blank" class="md-icon-button md-accent">
              <md-icon>
                open_in_new
                <md-tooltip md-direction="top">View Project</md-tooltip>
              </md-icon>
            </md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          name: 'Cryptofy',
          years: [2018],
          image: 'cryptofy.jpg',
          codeURL: 'https://github.com/ssparvez/cryptofy',
          description: 'Currently building a hybrid web/mobile app that tracks the current prices and latest news on the top cryptocurrencies using the coinmarketcap API. It uses the Ionic Framework with Angular on the frontend and Firebase on the backend.'
        },
        {
          name: 'Audium',
          years: [2017],
          image: 'audium.png',
          mainURL: 'http://app.audium.io.s3-website.us-east-2.amazonaws.com/',
          codeURL: 'https://github.com/ssparvez/AudiumFrontEnd',
          description: 'Built a full-stack web application based on Spotify. It uses Angular 4, a Spring Boot REST API and a MySQL database.'
        },
        {
          name: 'GeometricVR',
          years: [2017],
          image: 'geometricvr.png',
          mainURL: 'https://drive.google.com/file/d/1b6D29qBMbOsCPq_k_hg5pFzTj9bmwRWF/view?usp=sharing',
          codeURL: 'https://github.com/ssparvez/geometric-vr',
          description: 'Built a virtual reality app that visualizes 3D shapes for iOS/Android. It was created in the Unity3D environment with the GoogleVR SDK and behavior scripts written in C#'
        },
        {
          name: 'Premier League Data Visualization',
          years: [2016],
          image: 'pldata.png',
          mainURL: 'https://ssparvez.github.io/premier-league-data/',
          codeURL: 'https://github.com/ssparvez/premier-league-data',
          description: 'Built an interactive website that visualized a soccer data set with D3.js and Materialize for the front-end design.'
        },
        {
          name: 'Robot Arm',
          years: [2012, 2013],
          video: 'https://www.youtube.com/embed/8djFpIzg-RA',
          mainURL: 'https://www.youtube.com/watch?v=8djFpIzg-RA',
          description: 'A high school project built to compete in the 2012 and 2013 NY Science Olympiad Competition.'
        },
        {
          name: 'Supplemental Security Income',
          years: [2015],
          description: 'Worked on converting a database built in Microsoft Access to SQL Server with Visual Basic .NET for the Suffolk County Dept. of Social Services.'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.md-card {
  vertical-align: top;
  margin: 4px;
}
</style>
