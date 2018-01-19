<template>
  <div class="projects">
    <h1 id="page-title">Projects</h1>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-small-size-50 md-xsmall-size-100" v-for="project in projects" :key="project.name">
        <md-card md-with-hover>
          <md-card-header>
            <div class="md-title">{{project.name}}</div>
            <div class="md-subhead">
              <span v-for="(year, index) in project.years" :key="year">
                {{(project.years.length > 1) && (index != (project.years.length - 1)) ? year + ", " : year}}
              </span>
            </div>
          </md-card-header>
          <md-card-content>
            {{project.description}}
          </md-card-content>
          <md-card-actions >
            <md-button v-if="project.codeURL" v-bind:href="project.codeURL" target="_blank" class="md-icon-button">
              <md-icon>
                code
                <md-tooltip md-direction="top">View Code</md-tooltip>
              </md-icon>
            </md-button>
            <md-button v-if="project.mainURL" v-bind:href="project.mainURL" target="_blank" class="md-icon-button">
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
          name: 'Audium',
          years: [2017],
          mainURL: 'http://app.audium.io.s3-website.us-east-2.amazonaws.com/',
          codeURL: 'https://github.com/ssparvez/AudiumFrontEnd',
          description: 'Built a full-stack web application based on Spotify. It uses Angular 4 on the front end, with a backend REST API built using the Spring Boot framework and interfaces with a MySQL database instance using JPA.'
        },
        {
          name: 'GeometricVR',
          years: [2017],
          mainURL: 'https://ssparvez.github.io/geometric-vr-site/',
          codeURL: 'https://github.com/ssparvez/geometric-vr',
          description: 'Built a virtual reality app that visualizes 3D shapes for iOS/Android. It was created in the Unity3D environment with the GoogleVR SDK and behavior scripts written in C#'
        },
        {
          name: 'Premier League Data Visualization',
          years: [2016],
          mainURL: 'https://ssparvez.github.io/premier-league-data/',
          codeURL: 'https://github.com/ssparvez/premier-league-data',
          description: 'Built an interactive website that visualized a soccer data set with D3.js and Materialize for the front-end design.'
        },
        {
          name: 'Supplemental Security Income',
          years: [2015],
          description: 'Worked on converting a database built in Microsoft Access to SQL Server with Visual Basic .NET for the Suffolk County Dept. of Social Services.'
        },
        {
          name: 'Robot Arm',
          years: [2012, 2013],
          mainURL: 'https://www.youtube.com/watch?v=8djFpIzg-RA',
          description: 'A high school project built to compete in the 2012 and 2013 NY Science Olympiad Competition.'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.md-card {
  margin: 4px;
  vertical-align: top;
}
</style>
