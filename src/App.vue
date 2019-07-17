<template>
  <div id="app">
    <header class="flexcontainer">
      <div class="flexitem item1" 
        @mouseover="onMouseover"
        @mouseleave="onMouseleave">
        <router-link to="/" class="btn-circle-fishy" v-b-popover.hover="{ variant: 'info',  content: '2019/07現在' }"
          title="プロフィール">{{ homeMessage }}</router-link>
      </div>   
      <div class="flexitem item2">
        <router-link to="/skill" class="btn-circle-fishy" v-b-popover.hover="{ variant: 'info',  content: 'このサイトはVueで' }"
          title="勉強中">Skill</router-link>
      </div>  
      <div class="flexitem item3">
        <router-link to="/books" class="btn-circle-fishy" v-b-popover.hover="{ variant: 'info',  content: '大体の興味を示しています' }"
          title="こんな本読んでます">Books</router-link>
      </div>  
    </header>
      
    <main>
      <transition name="view">
        <router-view/>
      </transition>
    </main>
    <footer>
      <ul>
        <li><router-link to="/" class="btn-circle-fishy-min">Home</router-link></li>
        <li><router-link to="/skill" class="btn-circle-fishy-min">Skill</router-link></li>
        <li><router-link to="/books" class="btn-circle-fishy-min">Books</router-link></li>
      
        <li>
          <a href="https://www.facebook.com/profile.php?id=100008842479976" class="btn-circle-fishy-min" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/hhvlNH1DpyMdte2" class="btn-circle-fishy-min" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']"　/>
          </a>
        </li>
        <li>
          <a href="#" class="btn-circle-fishy-min" @click="doSmoothScroll()">
            <font-awesome-icon :icon="['fas', 'arrow-alt-circle-up']" />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        homeMessage: "Home",
      }
    },
    methods: {
      doSmoothScroll() {
        this.$SmoothScroll(document.querySelector(".top"),
          400,
          null,
          null,
          "y")
      },
      onMouseover: function() {
        this.homeMessage = "profile"
      },
      onMouseleave: function() {
        this.homeMessage = "Home"
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

/*header関連*/
  .view-enter-active,
  .view-leave-active {
    transition: opacity 0.5s;
  }

  .view-leave-active {
    position: absolute;
  }

  .view-enter,
  .view-leave-to {
    opacity: 0;
  }

  .flexcontainer {
    display: flex;
    flex-wrap: wrap;
    height: 130px;
    background-color: #9999FF;
  }

  .flexitem {
    width: 33%;
    height: 130px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }

  .btn-circle-fishy {
    display: inline-block;
    text-decoration: none;
    color: #FFF;
    width: 130px;
    height: 130px;
    line-height: 130px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    background-image: linear-gradient(45deg, #709dff 0%, #91fdb7 100%);
    transition: .4s;
  }

  .btn-circle-fishy:hover {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }

/*footer関連*/
  footer {
    background-color: #9999FF;
    margin: 0 auto;
  }

  footer ul {
    margin: 0 auto;
    padding: 0 auto;
  }

  footer li {
    list-style: none;
    display: inline-block;
  }
  
  .btn-circle-fishy-min {
    display: inline-block;
    text-decoration: none;
    color: #FFF;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    background-image: linear-gradient(45deg, #709dff 0%, #91fdb7 100%);
    transition: .4s;
  }

  .btn-circle-fishy-min:hover {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
</style>
