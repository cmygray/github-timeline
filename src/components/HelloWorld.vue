<template>
  <section class="hello-world">
    <h2>{{ msg }}</h2>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg: string;
}
</script>
