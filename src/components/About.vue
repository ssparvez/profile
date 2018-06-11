<template>
  <div class="about">
    <h1 class="section-header">About Me</h1>
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item">
          <div id="bio">
            <strong>Designer</strong>, <strong>Developer</strong>, and <strong>Tech Enthusiast</strong> <br />
            Studied <strong>Computer Science</strong> at <strong>Stony Brook University</strong> <br />
            Proficient in <strong>Java</strong>, <strong>Python</strong>, <strong>C</strong>, and Klingon <br />
            Experience with <strong>Angular</strong> and <strong>Spring Boot</strong> <br/><br/>
            - Also - <br/><br/>
            Former Londoner and current New Yorker<br />
            Always supporting Liverpool FC and jamming to Tame Impala<br /><br />
            <md-button :href="resume" target="_blank" class="md-accent md-raised">View Resume</md-button>
          </div>
      </div>
    </div>  
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  name: 'About',
  data () {
    return {
      resume: 'https://docs.google.com/document/d/1VfBw6bp036A3jHSbG1uLq2URkbuPRrR-W9Wq1TbmEWQ/edit?usp=sharing'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about {
  min-height: 100vh;
  background-color: #FAFAFA;
  color: black;
}

#bio {
  text-align: center; 
  font-size: 20px; 
  line-height: 30px;
  font-weight: 400;
  letter-spacing: 2px;
}
</style>
