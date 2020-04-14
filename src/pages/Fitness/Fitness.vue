<template>
    <div class="fitness">
        <ASFitness></ASFitness>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ASFitness from './components/ASFitness.vue';

@Component({
  components: {
    ASFitness,
  },
})
export default class Fitness extends Vue {

}
</script>

<style lang="scss">
</style>
