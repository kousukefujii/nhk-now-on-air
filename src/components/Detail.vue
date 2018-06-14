<template>
  <div class="container program-detail-container">
    <header>
      <h1>番組詳細</h1>
    </header>

    <div class="detail" v-if="detail">
      <header>
        <h2>
          <img :src="detail.service.logo_s.url" :alt="detail.service.name">
          {{ detail.title }}
        </h2>
        <p class="subtitle" v-html="detail.subtitle"></p>
        <p>
          <time :datetime="detail.start_time" v-html="startTime.toLocaleString()"></time> 〜 <time :datetime="detail.end_time" v-html="endTime.toLocaleString()"></time>
        </p>
      </header>
      <div class="detail-content siimple-grid">
        <div class="siimple-grid-row">
          <div class="siimple-grid-col siimple-grid-col--3">
            <img class="program-logo" :src="detail.program_logo ? detail.program_logo.url : 'http://via.placeholder.com/350?text=no+image'" :alt="detail.service.logo_s.url">
          </div>
          <div class="siimple-grid-col siimple-grid-col--9">
            <p><a :href="detail.program_url" target="_blank">番組公式サイト</a></p>
            <p v-html="detail.act"></p>
            <p v-html="detail.content"></p>
            <ul>
              <li v-for="hashtag in detail.hashtags" :key="hashtag">
                <a :href="'https://twitter.com/search?q=' + encodeURIComponent(hashtag)" target="_blank" v-html="hashtag"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="close-button">
      <a href="/" class="siimple-close" @click.prevent="$router.back()">
      </a>
    </div>
  </div>
</template>

<script>
  import params from '../params.js';

  const apiKey = params.apikey;
  export default {
    name: 'Detail',
    data() {
      return {
        detail: null
      };
    },
    computed: {
      startTime() {
        if (!this.detail) {
          return null;
        }

        return new Date(this.detail.start_time);
      },
      endTime() {
        return new Date(this.detail.end_time);
      }
    },
    methods: {
      fetchDetail() {
        const params = this.$route.params;
        const url = `https://api.nhk.or.jp/v2/pg/info/${params.area}/${params.service}/${params.id}.json?key=${apiKey}`;

        fetch(url).then((res) => {
          return res.json();
        }).then((json) => {
          this.detail = json.list[params.service][0];
        });
      }
    },
    created() {
      this.fetchDetail();
    }
  };
</script>

<style scoped>
  .program-detail-container {
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .program-logo {
    width: 100%;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
  }
</style>
