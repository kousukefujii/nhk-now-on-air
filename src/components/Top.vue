<template>
  <div class="container siimple-size siimple-size--small">
    <header>
      <h1>Now On Air</h1>
    </header>
    <form action="" @submit.prevent="pushState">
      <div class="siimple-form">
        <div class="siimple-form-field">
          <label for="area" class="siimple-label">地域</label>
          <select id="area" class="siimple-select" name="area" v-model="area" @change="pushState">
            <option v-for="k in Object.keys(params.area).sort()" :value="k" v-html="params.area[k]" :key="k"></option>
          </select>
        </div>

        <div class="siimple-form-field">
          <label class="siimple-label" for="service">サービス</label>
          <select id="service" class="siimple-select" name="service" v-model="service" @change="pushState">
            <option v-for="(v, k) in params.service" :value="k" v-html="v" :key="k"></option>
          </select>
        </div>
      </div>
    </form>

    <div class="siimple-spinner siimple-spinner--blue" v-if="!list"></div>
    <div class="programs" v-if="list">
      <header>
        <h2> {{params.area[area]}} </h2>
      </header>
      <NowOnAir v-for="(v, k) in list" :service="params.service[k]" :programs="v" :key="k"></NowOnAir>
    </div>
  </div>
</template>

<script>
  import params from '../params.js';
  import NowOnAir from './NowOnAir.vue';

  const apiKey = params.apikey;

  export default {
    name: 'Top',
    components: {
      NowOnAir,
    },
    data() {
      return {
        area: '130',
        service: 'tv',
        params: params,
        list: null,
      }
    },
    methods: {
      nowOnAir() {
        const url = `https://api.nhk.or.jp/v2/pg/now/${this.area}/${this.service}.json?key=${apiKey}`;
        const app = this;
        app.lost = null;

        fetch(url)
        .then((res) => {
          return res.json();
        }).then((json) => {
          app.list = json.nowonair_list;
        });
      },
      pushState() {
        this.nowOnAir();
        this.$router.push({
          path: '/',
          query: {
            area: this.area,
            service: this.service,
          }
        });
      }
    },
    created() {
      const query = this.$route.query;
      if (query.area) {
        this.area = query.area;
      }
      if (query.service) {
        this.service = query.service;
      }
      this.nowOnAir();
    }
  };
</script>

<style>
  .container {
    width: 90%;
    margin: auto;
  }
</style>
