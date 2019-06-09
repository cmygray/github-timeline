<template>
  <section class="home">
    <h1>Home</h1>
    <hello-world :msg="'hello world'" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
