<template>
    <div class="asfitness">
        <div class="fitness-picture columns">
          <img class="column is-3 fit-image" loading="lazy" src="../../../assets/fitness/fitness3.jpg" alt="Fitness3"/>
          <img class="column is-3 fit-image" loading="lazy" src="../../../assets/fitness/fitness2.jpg" alt="Fitness2"/>
          <img class="column is-3 fit-image" loading="lazy" src="../../../assets/fitness/fitness4.jpg" alt="Fitness1"/>
          <img class="column is-3 fit-image" loading="lazy" src="../../../assets/fitness/fitness1.jpg" alt="Fitness4"/>
        </div>
        <section class="hero is-fitness is-medium">
            <div class="hero-body is-bold">
            <div class="container is-fluid">
                <h1 class="title">
                Join our Fit-Family
                </h1>
                <h2 class="subtitle">
                In this group we are all friends, feel free to ask all the questions you want
                </h2>
                <a target="_blank" href="https://www.facebook.com/groups/1633939113524736">
                    <button class="button is-link facebook-group">Take me to the Group</button>
                </a>
                <a target="_blank" href="https://www.facebook.com/AndreaDGFitness">
                    <button class="button is-link facebook-page">Take me to the Page</button>
                </a>
            </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Fitness extends Vue {

}
</script>

<style lang="scss">
.fitness-picture {
    padding: 16px;
}

.is-fitness {
    background-color: #3B5998;
    h1 {
        color:white;
    }
    h2{
        color:white;
    }
    .facebook-group {
        background-color: #20B2AA;
        &:hover {
            background-color: #79D0CC;
        }
    }

    .facebook-page {
        margin-left: 16px;
        background-color: #20B2AA;
        &:hover {
            background-color: #79D0CC;
        }
    }
}
</style>
