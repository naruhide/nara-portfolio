<template>
  <div class="skill">
    <svg width="400" height="400">
      <g>
        <polygon :points="points"></polygon>
        <circle :cx="circle.cx" :cy="circle.cy" :r="circle.r"></circle>
        
        <!--<text v-for="(stat, index) in stats"-->
        <!--      :stat="stat"-->
        <!--      :index="index"-->
        <!--      :x="point.x"-->
        <!--      :y="point.y">-->
          
        <!--  {{ stat.label }}-->
        <!--</text>-->
              
        
        <text x="100" y="20.799999999999997">A</text>
        <text x="176.21023553303058" y="55.99999999999999">B</text>
        <text x="176.2102355330306" y="143.99999999999997">C</text>
        <text x="100.00000000000001" y="188">D</text>
        <text x="23.789764466969416" y="144.00000000000006">E</text>
        <text x="23.78976446696936" y="56.00000000000006">F</text>

      </g>
    </svg>
  </div>
</template>
<script>
  function valueToPoint(value, index, total) {
    const r = value * circle.r / 100;
    const angle = Math.PI * 2 / total * index - Math.PI / 2;
    const tx = r * Math.cos(angle) + circle.cx;
    const ty = r * Math.sin(angle) + circle.cy;
    return {
      x: tx,
      y: ty
    };
  }

  const circle = { cx: 200, cy: 200, r: 160 };

  const stats = [
    { label: 'Rails', value: 89 },
    { label: 'JavaScript', value: 66 },
    { label: 'Git', value: 77 },
    { label: 'Vue.js', value: 88 },
    { label: 'RSpec', value: 99 },
    { label: 'MySQL', value: 100 },
    { label: 'AWS', value: 100 },
    { label: 'Node.js', value: 100 },
    { label: 'C', value: 100 },
  ];

  export default {
    name: 'Skill',
    data() {
      return {
        circle: circle,
        stats: stats 
      }
    },
    computed: {
      points: function() {
        const stats = this.stats;
        const total = stats.length;
        return stats.map(function(stat, i) {
          const point = valueToPoint(stat.value, i, total);
          return point.x + "," + point.y;
        }).join(" ");
      },
      point: function() {
        const stats = this.stats;
        return valueToPoint(stat.value + 10, index, total)
      },
    },
    methods: {
      //   add: function (e) {
      //   e.preventDefault()
      //   if (!this.newLabel) return
      //   this.stats.push({
      //     label: this.newLabel,
      //     value: 100
      //   })
      //   this.newLabel = ''
      // },
      // remove: function (stat) {
      //   if (this.stats.length > 3) {
      //     this.stats.splice(this.stats.indexOf(stat), 1)
      //   } else {
      //     alert('Can\'t delete more!')
      //   }
      // }
    }
  }
</script>
<style>
  circle {
    fill: transparent;
    stroke: #999;
  }

  polygon {
    fill: #42b983;
    opacity: .75;
  }
</style>
