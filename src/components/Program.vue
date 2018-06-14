<template>
  <div class="program">
    <router-link :to="{name: 'detail', params: params}">
      {{program.title}}
    </router-link>
    <div>
      <small>
        <time>{{timeFormat(program.start_time)}}</time> 〜 <time>{{ timeFormat(program.end_time) }}</time>
      </small>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Program',
    props: ['program'],
    data() {
      return {
        params: {
          id: this.program.id,
          area: this.program.area.id,
          service: this.program.service.id
        },
      };
    },
    methods: {
      timeFormat(str) {
        return (new Date(str)).toLocaleTimeString();
      }
    }
  };
</script>
