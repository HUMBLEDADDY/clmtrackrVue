<template>
  <div class="main">
    <div class="animation-fade-away">
      <div class="slogan animation-slide-bottom-word">{{ this.slogan }}</div>
      <div class="imgBox"
           v-for="(item, i) in Mobius"
           :key="i"
           :index="i"
           :style="{
          transform: `scale(${item.size}) `,
          top: item.top,
          left: item.left,
          zIndex: (item.size < 1 ? -item.size : item.size) * 10,
          filter: `blur(${(1.8 - item.size) * 2}px)`,
        }">
        <img src="../assets/logo.png"
             class="Mobius animation-slide-bottom"
             :style="{}"
             alt="" />
      </div>
    </div>

    <div class="trueLogoBox imgBox animation-logoJump">
      <img src="../assets/logo.png"
           class="Mobius animation-slide-bottom"
           alt="" />
    </div>

    <el-button @click="start"
               class="start"> S T A R T </el-button>
    <div class="bigSlogon">
      <p>FA<span>-</span>KE<span>-</span>CE<span>.</span></p>
    </div>
    <div class="smallSlogon">
      <p>FA KE CE<span class="red">.</span></p>
      <div class="redline"></div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      btn: '登录',
      atext: '还没有账号，去注册',
      status: 1,
      user: '111',
      password: '111',
      slogan: 'FA-KE-CE',
      Mobius: [
        { top: '9vh', left: '5vw', size: 1.5 },
        { top: '31vh', left: '2vw', size: 0.7 },
        { top: '47vh', left: '7vw', size: 1.8 },
        { top: '75vh', left: '3vw', size: 1 },
        { top: '85vh', left: '10vw', size: 1.5 },
        { top: '0vh', left: '4vw', size: 0.6 },
        { top: '67vh', left: '1vw', size: 1.2 },
        { top: '14vh', left: '29vw', size: 1.7 },
        { top: '42vh', left: '16vw', size: 1.1 },
        { top: '54vh', left: '24vw', size: 0.7 },
        { top: '88vh', left: '25vw', size: 0.6 },
        { top: '7vh', left: '36vw', size: 0.7 },
        { top: '45vh', left: '45vw', size: 0.7 },
        { top: '56vh', left: '32vw', size: 1.1 },
        { top: '78vh', left: '48vw', size: 1.4 },
        { top: '83vh', left: '37vw', size: 0.5 },
        { top: '30vh', left: '63vw', size: 1.6 },
        { top: '17vh', left: '65vw', size: 1.3 },
        { top: '25vh', left: '57vw', size: 0.6 },
        { top: '57vh', left: '63vw', size: 1.2 },
        { top: '64vh', left: '52vw', size: 0.7 },
        { top: '87vh', left: '68vw', size: 1 },
        { top: '4vh', left: '73vw', size: 1.4 },
        { top: '16vh', left: '87vw', size: 0.6 },
        { top: '37vh', left: '77vw', size: 1.4 },
        { top: '64vh', left: '83vw', size: 0.6 },
        { top: '74vh', left: '79vw', size: 1.4 },
        { top: '98vh', left: '82vw', size: 0.6 },
        { top: '14vh', left: '94vw', size: 1.4 },
        { top: '27vh', left: '97vw', size: 0.6 },
        { top: '46vh', left: '92vw', size: 1.4 },
        { top: '75vh', left: '98vw', size: 0.6 },
        { top: '83vh', left: '91vw', size: 1.4 },
      ],
    }
  },
  methods: {
    start() {
      this.$router.push('/home')
    },
  },
}
</script>

<style  scoped>
@import url('../style.css');

.main {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #fefcef;
  overflow: hidden;
  z-index: 99;
}

.main .slogan {
  font-family: 'sporter';
  text-align: center;
  line-height: 100vh;
  font-size: 5vw;
  font-weight: bolder;
  z-index: 10;
  color: #000;
}

@media screen and (max-width: 500px) {
  .main .slogan {
    font-size: 10vw;
  }
}

.main .imgBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 5vw;
}

@media screen and (max-width: 500px) {
  .main .imgBox {
    width: 20vw;
  }
}

.main .Mobius {
  width: 100%;
  border-radius: 50%;
}

.main .trueLogoBox {
  margin: 0 auto;
  position: fixed;
  top: 10px;
  left: 0;
  box-sizing: border-box;
  right: 0;
  animation: login 0.7s 1.9s, rotate 1s 2.8s;
  animation-fill-mode: forwards;
  z-index: 9;
  border: 3px solid rgba(51, 51, 51, 0);
  border-radius: 50%;
  pointer-events: none;
}

@keyframes bordershow {
  0% {
    border: 3px solid rgba(51, 51, 51, 0.1);
    border-radius: 10px;
  }
  10% {
    border: 3px solid rgba(51, 51, 51, 0.15);
    border-radius: 10px;
  }
  20% {
    border: 3px solid rgba(51, 51, 51, 0.2);
    border-radius: 10px;
  }
  30% {
    border: 3px solid rgba(51, 51, 51, 0.3);
    border-radius: 10px;
  }
  40% {
    border: 3px solid rgba(51, 51, 51, 0.4);
    border-radius: 10px;
  }
  50% {
    border: 3px solid rgba(51, 51, 51, 0.5);
    border-radius: 10px;
  }
  60% {
    border: 3px solid rgba(51, 51, 51, 0.6);
    border-radius: 10px;
  }
  70% {
    border: 3px solid rgba(51, 51, 51, 0.7);
    border-radius: 10px;
  }
  80% {
    border: 3px solid rgba(51, 51, 51, 0.8);
    border-radius: 10px;
  }
  90% {
    border: 3px solid rgba(51, 51, 51, 0.9);
    border-radius: 10px;
  }
  100% {
    border: 3px solid #333333;
    border-radius: 10px;
  }
}

@keyframes login {
  0% {
    top: 10px;
  }
  30% {
    top: 300px;
    opacity: 1;
  }
  60% {
    top: 275px;
  }
  75% {
    top: 300px;
  }
  87.5% {
    top: 295px;
  }
  100% {
    top: 300px;
  }
}

@keyframes rotate {
  0% {
  }
  100% {
    border-radius: 50%;
    top: 120px;
    left: -20px;
    width: 100px;
    border: 5px solid #333;
    background: #fff;
  }
}

.start {
  left: 46.2%;
  top: 530px;
  text-align: center;
  border-radius: 10px;
  border: 6px solid #000;
  position: absolute;
  background: #fff;
  z-index: 99999999999;
  color: #bf0111;
  font-weight: bolder;
  box-shadow: 5px 5px 20px #b3b3b3;
  animation: loginin 1s 4.3s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.bigSlogon {
  position: absolute;
  width: 100vw;
  height: 100vh;
  text-align: center;
  line-height: 100vh;
  animation: loginin 1s 3.3s;
  animation-fill-mode: forwards;
  opacity: 0;
  transform: scale(1.5);
  font-size: 15vw;
  top: 0;
  left: 0;
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }

  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }

  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }

  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }

  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }

  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }

  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }

  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }

  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

.smallSlogon {
  position: absolute;
  width: 100vw;
  height: 100vh;
  text-align: center;
  line-height: 100vh;
  animation: loginin 1s 3.3s;
  animation-fill-mode: forwards;
  opacity: 0;
  z-index: 999;
  font-size: 10vw;
  top: 0;
  left: 0;
}
.smallSlogon p {
  color: #000;
  text-shadow: #000000 0 0 0px;
  font-family: 'sporter';
  user-select: none;
}
.bigSlogon p {
  color: transparent;
  text-shadow: #30303025 0 0 0px;
  font-family: 'sporter';
}
.input {
  z-index: 999;
  width: 250px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;
  padding-left: 5px;
}

@keyframes loginin {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.btn {
  border: none;
  margin-right: 25px;
  margin-left: 25px;
  background-color: white;
  outline: none;
  height: 30px;
  width: 25%;
  border-radius: 5px;
  overflow: hidden;
  top: 40px;
  position: relative;
  transition: all 0.5s ease;
  box-shadow: 2px 2px 2px lightgray;
}

.btn:hover {
  transform: translateY(-4px);
  box-shadow: 4px 4px 10px #7e7e7e;
}

@keyframes in {
  0% {
    top: -1000px;
    opacity: 0;
  }
  50% {
    top: 0px;
    opacity: 1;
  }
  62.5% {
    top: -25px;
  }
  75% {
    top: 0px;
  }
  87.5% {
    top: -5px;
  }
  100% {
    top: 0px;
  }
}

.btntext {
  z-index: 100;
  position: absolute;
  line-height: 30px;
  top: 0;
  width: 100%;
  text-align: center;
  display: block;
  color: black;
  font-weight: bold;
  animation: changecolorback 1s;
  animation-fill-mode: forwards;
  letter-spacing: 5px;
}
.red {
  color: #bf0111;
}
.redline {
  background: linear-gradient(
    to right,
    #bf0111,
    orange,
    yellow,
    orange,
    #bf0111
  );
  position: absolute;
  height: 20px;
  width: 176px;
  z-index: 9999;
  left: -100px;

  top: 50%;
  margin-top: -10px;
  margin-left: -109px;
  background-size: 1400% 300%;
  animation: leftin 0.5s 4s, dynamics 5s ease infinite;
  animation-fill-mode: forwards;
}
@keyframes dynamics {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 100% 0%;
  }
}
@keyframes leftin {
  0% {
    left: -100px;
  }
  100% {
    left: 50%;
  }
}
</style>