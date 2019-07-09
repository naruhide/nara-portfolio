<template>
  <div class="home">
    <div id="flex">
      <div class="profile-image">
        <img src="../assets/marrige.jpeg" alt="profile-image">
      </div>
      <div class="profile-detail">
        <div class="name ribbon">
          Naruhide Ueda
        </div>
        <div class="birth ribbon">
          H6/05/18 age:25
        </div>
        <div class="child ribbon">
          一児のパパ
        </div>
        <div class="like ribbon">
          テニス
          野球
          ゴルフ
        </div>
        <div class="nara ribbon">
          奈良県大和郡山市筒井町
          <GmapMap
            :center="{lat:34.621518, lng:135.778167}"
            :zoom="12"
            map-type-id="terrain"
            style="width: 300px; height: 200px"
          >
            <GmapMarker
              <!--:key="index"-->
              <!--v-for="(m, index) in markers"-->
              <!--:position="m.position"-->
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
            </GmapMap>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="rails">
        <a href="https://my-google-teacher.herokuapp.com" target="_blank">Rails application (my-google-teacher)</a>
        <p>Ruby on Rails で初めてWebアプリケーションを作りました。</p>
        <p>Google検索ワードのおすすめ共有サービスです。</p>
        <p>DBにMySQL,
        テストにはRSpecを使用しています。</p>
      </div>
      <div class="c">
        <img src="../assets/micon.jpeg" alt="自作OS制作中">
        <p>H8-3069マイコン上で動作するOSを一から制作中です。</p>
        <p>PC上でクロスコンパイル開発を行っています。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        // center: { lat: 35.71, lng: 139.72 },
        // zoom: 14,
        // marker_items: [{
        //   position: { lat: 35.71, lng: 139.72 },
        //   title: "marker_1"
        // }]
      }
    },
    methods: {
      // initMap: function() {
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     center: { lat: -34.397, lng: 150.644 },
      //     zoom: 8
      // });
      // }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #flex {
    display: flex;
  }

  .profile-image {
    width: 50%;
  }

  .profile-image img {
    border-radius: 10px;
    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.8);
    transform: rotate(5deg);
    width: 80%;
    height: 80%;
  }

  .profile-detail {
    width: 50%;
  }

  .ribbon {
    position: relative;
    padding: 15px 20px;
    font-size: 18px;
    color: #FFF;
    background: #a6d3c8;
    margin: 10px;
    font-weight: bold;
  }

  .ribbon:before {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    border: none;
    border-bottom: solid 15px transparent;
    border-right: solid 20px rgb(149, 158, 155);
  }

  .ribbon:after {
    position: absolute;
    content: "";
    top: 100%;
    right: 0;
    border: none;
    border-bottom: solid 15px transparent;
    border-left: solid 20px rgb(149, 158, 155);
  }

  .rails {
    padding: 0.5em 1em;
    margin: 2em 0;
    color: #00BCD4;
    background: #e4fcff;
    border-top: solid 6px #1dc1d6;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);
  }

  .rails p {
    margin: 0;
    padding: 0;
  }

  .c {
    padding: 0.5em 1em;
    margin: 2em 0;
    color: #00BCD4;
    background: #e4fcff;
    border-top: solid 6px #1dc1d6;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);
  }

  .c p {
    margin: 0;
    padding: 0;
  }

  .c img {
    width: 80%;
    height: 300px;
    border-radius: 20px;
  }
  
</style>
