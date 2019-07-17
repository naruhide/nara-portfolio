<template>
  <div class="skill">
    <div>
      <svg width="400" height="400">
        <g>
          <polygon :points="points"></polygon>
          <circle :cx="circle.cx" :cy="circle.cy" :r="circle.r"></circle>
        
          <text v-for="point in point"
                :x="point.x"
                :y="point.y">
                {{ point.label }}
          </text>
        </g>
      </svg>
    </div>
    <div>
      <svg width="400" height="400">
        <g>
          <polygon :points="directions"></polygon>
          <circle :cx="circle.cx" :cy="circle.cy" :r="circle.r"></circle>
        
          <text v-for="direction in direction"
                :x="direction.x"
                :y="direction.y">
                {{ direction.label }}
          </text>
        </g>
      </svg>
    </div>
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
    { label: 'Rails', value: 90 },
    { label: 'RSpec', value: 50 },
    { label: 'JavaScript', value: 70 },
    { label: 'Vue.js', value: 90 },
    { label: 'Node.js', value: 60 },
    { label: "jQuery", value: 70 },
    { label: 'C言語', value: 40 },
    { label: 'firebase', value: 60 },
    { label: 'Git', value: 80 },
    { label: 'MySQL', value: 60 },
  ];

  const aws = [
    { label: 'EC2', value: 90 },
    { label: 'RDS', value: 60 },
    { label: 'VPC', value: 77 },
    { label: 'Route53', value: 50 },
    { label: 'IAM', value: 80 },
    { label: 'S3', value: 50 },
  ];

  export default {
    name: 'Skill',
    data() {
      return {
        circle: circle,
        stats: stats,
        aws: aws
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
        const total = stats.length;
        var array = [];
        stats.map(function(stat, i) {
          const position = valueToPoint(stat.value + 10, i, total);
          position.label = stat.label;
          array.push(position);
        });
        return array;
      },
      directions: function() {
        const aws = this.aws;
        const total = aws.length;
        return aws.map(function(stat, i) {
          const point = valueToPoint(stat.value, i, total);
          return point.x + "," + point.y;
        }).join(" ");
      },
      direction: function() {
        const aws = this.aws;
        const total = aws.length;
        var array = [];
        aws.map(function(stat, i) {
          const position = valueToPoint(stat.value + 10, i, total);
          position.label = stat.label;
          array.push(position);
        });
        return array;
      }
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
