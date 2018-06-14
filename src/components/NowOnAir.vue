<template>
  <div class="now-on-air siimple-grid">
    <div class="siimple-grid-row">
      <div class="siimple-grid-col siimple-grid-col--1">
        <img :src="programs.present.service.logo_s.url" :alt="programs.service + 'ロゴ'">
      </div>

      <div class="program-present siimple-grid-col siimple-grid-col--8">
        放送中: 
        <Program :program="programs.present"></Program>
      </div>
      <div class="program-following siimple-grid-col siimple-grid-col--3">
        次: 
        <Program :program="programs.following"></Program>
      </div>
    </div>
  </div>
</template>

<script>
  import Program from './Program.vue';
  export default {
    name: 'NowOnAir',
    props: ['service', 'programs'],
    components: {
      Program
    }
  };
</script>

<style scoped>
  img {
    width: 100%;
  }

  .now-on-air {
    padding: 6px 0;
  }

  .now-on-air + .now-on-air {
    border-top: 1px solid #ccc;
  }

  .program-present {
    font-size: 120%
  }

  .program-following {
    font-size: 90%
  }
</style>
