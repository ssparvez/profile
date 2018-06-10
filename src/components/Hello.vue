<template>
  <div class="hello" style="padding-top: 100px;">
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-size-33 md-xsmall-size-100 md-small-size-50">
          
        <img src="../assets/images/transparent.png">
        
      </div>
      <div id="hello-text" style="margin-top: 50px;">
            <span>{</span>
            <div>
                <p>Hello,</p>
                <ul>
                  <li>world!</li>
                  <li>from New York!</li>
                  <li>everybody!</li>
                </ul>
            </div>
            <span>}</span>
          </div>
    </div>  
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  name: 'Hello',
  data () {
    return {
      resume: 'https://docs.google.com/document/d/1VfBw6bp036A3jHSbG1uLq2URkbuPRrR-W9Wq1TbmEWQ/edit?usp=sharing'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  min-height: 100vh;
    background-color: #212121;

}
// hello world styles
#hello-text {
  font-size: 33px;
  font-weight: 100;

  div {
    vertical-align: middle;
    overflow: hidden;
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
  0%, 22%, 100% { transform: translate3d(0,-33.33%,0); }
  25%, 47% { transform: translate3d(0,-66.67%,0); }
  50%, 72% { transform: translate3d(0,-99.99%,0); }
  75%,97% { transform: translate3d(0,-66.67%,0); }
}

// 4 is the number of animation, there are 3 lines :

// 1 to 2
// 2 to 3
// 3 to 2
// 2 to 1

// 4x + 4y = 100 (100% duration)

// HERE : 
// y = 3 -> Animation between two lines
// x = 22 -> Time spent on a line

// You can define a value and calculate the other if you want change speed or the number of lines

</style>
