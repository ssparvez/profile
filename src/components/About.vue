<template>
  <div class="about">
    <h1 id="page-title">About Me</h1>
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-xsmall-size-100">
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
          <div class="content">
            <div class="content__container">
              <p class="content__container__text">Hello,</p>
              <ul class="content__container__list">
                <li class="content__container__list__item">world!</li>
                <li class="content__container__list__item">from New York!</li>
                <li class="content__container__list__item">users!</li>
                <li class="content__container__list__item">everybody!</li>
              </ul>
            </div>
          </div>
          <p id="bio">
            My name is Shahryar and I've recently graduated with a degree in Computer Science from Stony Brook University.<br><br>
            On the programming side, I'm always looking to learn something new. My core language is Java but I'm also well versed in C and have database/web dev experience. I also enjoy learning and working with modern frameworks such as Angular, Vue.js and Spring.<br><br>
            On the personal side, I grew up in London and moved to New York in 2006. I follow Liverpool FC (I don't miss a single game) as well as any kind of new tech and I listen to a lot of Tame Impala.
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
}
// hello world styles
.content {
  overflow: hidden;
  position: absolute;
  font-size: 35px;
  line-height: 40px;
  
  &__container {
    font-weight: 100;
    overflow: hidden;
    height: 40px;
    padding: 0 30px;

    &:before {
      content: '{';
      left: 0;
    }

    &:after {
      content: '}';
            position: absolute;

      right: 0;
    }

    &:after, &:before {
      position: absolute;
      top: 0;
      
      color:#18FFFF;
      font-size: 42px;
      line-height: 40px;
      
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
      margin: 0;
    }

    &__list {
      margin-top: 0;
      padding-left: 90px;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:40px;
        margin:0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
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
