<template>
  <div class="books">
    <div class="flexbooks">
      <div  v-for="(list, index) in lists"
            v-bind:key="list.id"
            v-bind:class="['list-' + index]"
            class="bookitem">
        
        <p>{{ list.name }}</p>
        <p>{{ list.pulished }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Books',
    data() {
      return {
        lists: [
          { id: 1, name: "パーフェクトJavaScript", pulished: "技術評論社" },
          { id: 2, name: "JavaScriptコードレシピ集", pulished: "技術評論社" },
          { id: 3, name: "基礎から学ぶVue.js", pulished: "C&R研究所" },
          { id: 4, name: "基礎Ruby on Rails", pulished: "インプレス社" },
          { id: 5, name: "パーフェクトRuby on Rails", pulished: "技術評論社" },
          { id: 6, name: "アジャイル時代のオブジェクト脳の作り方", pulished: "翔泳社" },
          { id: 7, name: "HTML&css3デザインきちんと入門", pulished: "SBクリエイティブ社" },
          { id: 8, name: "SQLの絵本", pulished: "翔泳社" },
          { id: 9, name: "リーダブルコード", pulished: "オライリージャパン" },
          { id: 10, name: "ネットワークはなぜつながるのか", pulished: "日経BP社" },
          { id: 11, name: "プログラムはなぜ動くのか", pulished: "日経BP社" },
          { id: 12, name: "コンピュータはなぜ動くのか", pulished: "日経BP社" },
          { id: 13, name: "オブジェクト指向でなぜつくるのか", pulished: "日経BP社" },
          { id: 14, name: "Windowsはなぜ動くのか", pulished: "日経BP社" },
          { id: 15, name: "Webを支える技術", pulished: "技術評論社" },
          { id: 16, name: "若手ITエンジニア最強の指南書", pulished: "日経BP社" },
          { id: 17, name: "アルゴリズム図鑑", pulished: "翔泳社" },
          { id: 18, name: "世界で最も強力な9のアルゴリズム", pulished: "日経BP社" },
          { id: 19, name: "達人プログラマー", pulished: "オーム社" },
          { id: 20, name: "Amazon Web Services ネットワーク入門", pulished: "インプレス社" },
          { id: 21, name: "Amazon Web Services 実践入門", pulished: "技術評論社" },
          { id: 22, name: "サーバ/インフラを支える技術", pulished: "技術評論社" },
          { id: 23, name: "新しいLinuxの教科書", pulished: "SBクリエイティブ社" },
        ]
      }
    }
  }
</script>
  
<style>
  .flexbooks {
    display: flex;
    flex-wrap: wrap;
  }
  
  .bookitem {
    width: 90%;
    padding: 0.5em 1em;
    margin: 1em 2em;
    background: #f4f4f4;
    border-left: solid 6px #5bb7ae;
    border-right: solid 6px #5bb7ae;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);
  }
  
  .bookitem p {
    margin: 0;
    padding: 0;
  }
</style>
