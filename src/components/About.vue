<template>
  <div class="about">
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-xsmall-size-100 md-small-size-50">
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="1:1">
              <img src="../assets/images/me.jpg">
            </md-card-media>
          </md-card-media-cover>
        </md-card>
      </div>
      <div class="md-layout-item">
        <div class="md-layout md-alignment-top-center">
          <div id="hello">
            <span>{</span>
            <div>
                <p>Hello,</p>
                <ul>
                  <li>world!</li>
                  <li>from New York!</li>
                  <li>users!</li>
                  <li>everybody!</li>
                </ul>
            </div>
            <span>}</span>
          </div>
          <p id="bio">
            My name is Shahryar and I've recently graduated with a degree in Computer Science from Stony Brook University.<br><br>
            On the programming side, I'm always looking to learn something new. My core language is Java but I'm also well versed in Python and C as well. I also enjoy learning and working with modern frameworks such as Angular, Vue.js and Spring.<br><br>
            On the personal side, I grew up in London and moved to New York in 2006. I follow Liverpool FC (I don't miss a single game) as well as any new tech, all while jamming out to Tame Impala.
          </p>
          <md-button v-bind:href="resume" target="_blank" class="md-accent md-raised">View Resume</md-button>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
// eslint-disable-next-line
//var sfdf = require('../assets/js/waves.js');
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
.md-card {
  margin-bottom: 20px;
}

#bio {
  margin-top: 70px; 
  text-align: center; 
  font-size: 16px; 
  line-height: 25px;
  font-weight: 500;
}
// hello world styles
#hello {
  font-size: 35px;
  font-weight: 100;
  

  div {
    vertical-align: middle;
    overflow: hidden;
    padding: 0 10px;    
    line-height: 40px;
    height: 40px;
    display: inline-grid;

    p {
      display: inline;
      margin: 0;
    }

    ul {
      margin-top: 0;
      padding-left: 100px;
      text-align: left;
      list-style: none;
      
      -webkit-animation: change 10s infinite;
      animation: change 10s infinite;

      li {
        line-height:40px;
        margin: 0;
      }
    }
  }

  span {
    color:#18FFFF;
    font-size: 42px;
    line-height: 40px;
    vertical-align: middle;

    
    -webkit-animation: opacity 2s infinite;
    animation: opacity 2s infinite;
  } 
}

@mixin keyframes($name) {
  @-webkit-keyframes #{$name} { @content }
  @-moz-keyframes #{$name} { @content }
  @-ms-keyframes #{$name} { @content }
  @keyframes #{$name} { @content }
}

@include keyframes(opacity) {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@include keyframes(change) {
  0%, 12.66%, 100% { transform: translate3d(0,0,0); }
  16.66%, 29.32% { transform: translate3d(0,-25%,0); }
  33.32%,45.98% { transform: translate3d(0,-50%,0); }
  49.98%,62.64% { transform: translate3d(0,-75%,0); }
  66.64%,79.3% { transform: translate3d(0,-50%,0); }
  83.3%,95.96% { transform: translate3d(0,-25%,0); }
}

// 6 is the number of animation.
// Here, there are 4 lines :

// 1 to 2
// 2 to 3
// 3 to 4
// 4 to 3
// 3 to 2
// 2 to 1

// 6x + 6y = 100 (100% duration)

// HERE : 
// y = 4 -> Animation between two lines
// x = 12.66 -> Time spent on a line

// You can define a value and calculate the other if you want change speed or the number of lines

</style>
