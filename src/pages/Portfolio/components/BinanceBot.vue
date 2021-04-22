<template>
  <div class="binance">
    <section class="hero">
      <div class="hero-body container columns">
          <transition appear-class="binance-txt"
                    appear-to-class="binance-txt-to"
                    appear-active-class="binance-txt-active" appear>
          <div class="hero-col column is-6">
            <p class="title">
              Binance-Bot
            </p>
            <p class="subtitle">
              Why should i check complex charts when a Bot can do it for me?
              This is a double project BE (node) + FE (Vue) that is monitoring the crypto prices
              and opening new positions automatically.
            </p>
             <transition appear-class="binance-buttons"
                    appear-to-class="binance-buttons-to"
                    appear-active-class="binance-buttons-active" appear>
            <div>
              <a href="https://www.twitch.tv/videos/991178076" target="_blank">
                 <button class="button">
                    Check the video
                  </button>
              </a>
               <a href="https://github.com/ASCrypto-Bots" target="_blank">
                 <button class="button">
                    Github org
                  </button>
              </a>
              <a href="https://discord.gg/s97H8EHD" target="_blank">
                 <button class="button">
                    Discord channel
                  </button>
              </a>
            </div>
             </transition>
          </div>
        </transition>
         <transition appear-class="binance-img"
                    appear-to-class="binance-img-to"
                    appear-active-class="binance-img-active" appear>
            <div class="hero-col column is-6">
              <img src="../../../assets/binancebot.png"/>
            </div>
         </transition>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BinanceBot extends Vue {
  showTermsAndCondition() {
    this.$router.push({
      path: 'asraces/terms-and-condition',
    });
  }
}
</script>

<style lang="scss">

.binance {
  .container-mobile {
    background:#fff;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    margin-left: 0px;
  }

  .title, .subtitle {
    margin-left: 8px;
  }

  .hero-col {
    align-self: center;
  }

  .mobile{
    border-left: 3px solid #f3ba2f;
    border-bottom: 3px solid #f3ba2f;
  }

  .columns:last-child {
      margin-bottom: 0px;
    }

    .stores-img {
      height: 40px;
      margin-left: 4px;
    }
  .button{
    height: 40px;
    color: black;
    background-color: #f3ba2f;
    border: 1px solid #a17400;
    margin-left: 8px;
    &:hover {
      color: white;
      background-color: #a17400;
    }
  }
  .is-mobile{
    background-color: #fff;
    h1 {
      color: #111;
    }
    h2 {
      color: #222;
    }
  }
}

.binance-img{
  opacity: 0;
  transform: scale(0.1);
  transform: translateX(300px);
}

.binance-txt{
  opacity: 0;
  transform: translateY(20px);
}

.binance-img-active{
  transition: all .3s ease;
  transition-delay: .6s;
  transition-delay: .5s;
}

.binance-txt-active{
  transition: all .5s ease;
}

.binance-buttons{
  opacity: 0;
}

.binance-buttons-active{
  transition: all .4s ease;
  transition-delay: .9s;
}

.binance-img-active{
  transition: all .3s ease;
  transition-delay: .7s;
}
</style>
