<template>
  <v-container>
    <v-row v-if="hasStarted" style="margin-top: -100px">
      <v-col align="center" cols="6" md="3">
        <v-card color="#1170b7" dark>
          <v-card-text>
            <v-row align="center">
              <v-col cols="12" class="" style="color: white">
                Pendientes
              </v-col>
              <v-col
                  class="text-h2"
                  cols="12"
                  style="color: white"
              >
                {{ pendingQuestions }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col align="center" cols="6" md="3">
        <v-card color="#1170b7" dark>
          <v-card-text>
            <v-row align="center">
              <v-col cols="12" class="" style="color: white">
                Correctas
              </v-col>
              <v-col
                  class="text-h2"
                  cols="12"
                  style="color: white"
              >
                {{ solvedQuestions }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col align="center" cols="6" md="3">
        <v-card color="#1170b7" dark>
          <v-card-text>
            <v-row align="center">
              <v-col cols="12" class="" style="color: white">
                Falladas
              </v-col>
              <v-col
                  class="text-h2"
                  cols="12"
                  style="color: white"
              >
                {{ failedQuestions }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col align="center" cols="6" md="3">
        <v-card color="#1170b7" dark>
          <v-card-text>
            <v-row align="center">
              <v-col cols="12" class="" style="color: white">
                Tiempo
              </v-col>
              <v-col
                  class="text-h2"
                  cols="12"
                  style="color: white"
              >
                {{ timer }}
              </v-col>

            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <!--EL ROSCO-->
    <v-row>
      <v-col cols="12" class="rosco">
        <div class="video-container" v-if="!dialogTotals && showCamera">
          <video  ref="camera" width="100%" height="100%" autoplay class="video-element" style="z-index: 999999"></video>
        </div>

        <img src="/img/thinking.svg" class="img-center" v-if="!dialogTotals && !showCamera">
        <img src="/img/end.svg" class="img-center" v-if="dialogTotals && pendingQuestions>0">
        <img src="/img/endGood.svg" class="img-center" v-if="dialogTotals && pendingQuestions==0">

        <div class="circle-container">
          <ul class="circle">

            <li class="item"
                v-bind:class="{ 'item--success': question.status=='solved' ,
                                'item--failure': question.status=='fail' ,
                                'item--current':currentCharacter==question.character}"

                v-for="question  in questions" v-bind:key="question.character">{{ question.character }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>

    <!--Start Button and Control Mode-->
    <v-row v-if="!dialogTotals">
      <v-col cols="12" align="center" v-if="!hasStarted">
        <v-btn color="primary" rounded large @click="start">Empezar</v-btn>
        <v-switch
            v-model="hasEnableVoiceControl"
            label="Control por voz"
        ></v-switch>

        <v-switch
            v-model="hasEnableQuestionsAudio"
            label="Preguntas con audio activado"
        ></v-switch>
      </v-col>
    </v-row>

    <!--Input Modes-->
    <v-row v-if="hasStarted && !dialogTotals">
      <v-col cols="12" md="6" offset-md="3" align="center">
        <h1>{{ questions[currentQuestionIndex].text0 }}</h1>
        <br>
        <h3>{{ questions[currentQuestionIndex].text }}</h3>

        <!--Voice control mode-->
        <div v-if="hasEnableVoiceControl">
          <br>
          <div v-if="hasEnableVoiceControl && hasEnableListenning">
            Escuchando ...
          </div>
          <div v-else>
            Espera!!
          </div>
          <div>{{ lastSentence }}</div>
          <vue-speech style="visibility: hidden" lang="es-ES" @onTranscriptionEnd="onEnd"/>

        </div>
        <!--Input Mode-->
        <div v-else>
          <v-text-field label="Respuesta" v-model="answer" v-on:keyup.enter="checkAnswer"></v-text-field>
          <v-btn block color="primary" rounded large @click="checkAnswer">Enviar</v-btn>
          <br>
          <v-btn block color="primary" rounded large @click="nextAnswer">Pasapalabra</v-btn>
        </div>
      </v-col>
    </v-row>


    <v-row v-if="dialogTotals">
      <v-col align="center">
        <v-btn
            color="primary"
            rounded
            large
            @click="$router.push({name:'Categories'})"
        >

          Volver al menu
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import categories from './categories'
export default {
  name: "Pasapalabra",
  data() {
    return {
      hasEnabledVoice: false,
      hasStarted: false,
      hasEnableVoiceControl: false,
      hasEnableQuestionsAudio:true,
      hasEnableListenning: true,
      currentQuestionIndex: 0,
      answer: '',
      lastSentence: '',
      pendingQuestions: 25,
      solvedQuestions: 0,
      failedQuestions: 0,
      timer: 300,
      timerHandler: null,
      dialogTotals: false,
      questions: [],
      srcObject:null,
      showCamera:false,
    }
  },
  computed: {
    currentCharacter() {
      return this.questions[this.currentQuestionIndex].character;
    }
  },
  methods: {
    start: function () {
      this.hasStarted = true;
      this.playSoundQuestion();
      this.timerHandler = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(this.timerHandler);
          this.showTotals();
        } else {
          this.timer--;
        }
      }, 1000)
    },
    showTotals() {
      this.dialogTotals = true;
    },
    playSoundOk() {
      if(this.hasEnableQuestionsAudio){
      this.hasEnableListenning = false;
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'es-ES';
      utter.text =  'Respuesta Correcta';
      utter.volume = 0.5;

      //Ñapa para activar escuchar cuando
      let timer = setTimeout(() => {
        this.hasEnableListenning = true;
      }, 10000)

      utter.onend = () => {
        setTimeout(() => {
          this.hasEnableListenning = true;
          clearTimeout(timer);
        }, 1000)
      }

      window.speechSynthesis.speak(utter);
    }
    },
    playSoundKO() {
      if(this.hasEnableQuestionsAudio) {
        this.hasEnableListenning = false;
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'es-ES';
        utter.text = 'Respuesta Incorrecta';
        utter.volume = 0.5;

        //Ñapa para activar escuchar cuando
        let timer = setTimeout(() => {
          this.hasEnableListenning = true;
        }, 10000)

        utter.onend = () => {
          setTimeout(() => {
            this.hasEnableListenning = true;
            clearTimeout(timer);
          }, 1000)
        }

        window.speechSynthesis.speak(utter);
      }
    },
    playSoundQuestion() {
      if(this.hasEnableQuestionsAudio) {
        this.hasEnableListenning = false;
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'es-ES';
        utter.text = this.questions[this.currentQuestionIndex].text0 + '. ' + this.questions[this.currentQuestionIndex].text;
        utter.volume = 0.5;

        //Ñapa para activar escuchar cuando
        let timer = setTimeout(() => {
          this.hasEnableListenning = true;
        }, 10000)

        utter.onend = () => {
          setTimeout(() => {
            this.hasEnableListenning = true;
            clearTimeout(timer);
          }, 1000)
        }

        window.speechSynthesis.speak(utter);
      }
    },
    nextAnswer() {
      if (this.pendingQuestions) {
        for (let i = this.currentQuestionIndex + 1; i < this.questions.length; i++) {
          if (this.questions[i].status === 'unsolved') {
            this.currentQuestionIndex = i;
            this.playSoundQuestion();
            return;
          }
        }
        for (let i = 0; i < this.questions.length; i++) {
          if (this.questions[i].status === 'unsolved') {
            this.currentQuestionIndex = i;
            this.playSoundQuestion();
            return;
          }
        }
      } else {
        this.showTotals();
      }
    },
    checkAnswer() {
      if (this.answer.toLowerCase() == this.questions[this.currentQuestionIndex].answer.toLowerCase()) {
        this.questions[this.currentQuestionIndex].status = 'solved';
        this.solvedQuestions++;
        this.playSoundOk();
        console.log("Solved");
      } else {
        this.questions[this.currentQuestionIndex].status = 'fail';
        this.failedQuestions++;
        console.log("Fail");
        this.playSoundKO();
      }

      this.pendingQuestions--;
      this.answer = '';
      this.nextAnswer();
    },
    onEnd({lastSentence}) {
      if (!this.hasEnableListenning) {
        return false
      }
      this.lastSentence = lastSentence;
      console.log(lastSentence)
      if (lastSentence.toLowerCase().replace(' ', '') === 'pasapalabra') {
        this.nextAnswer()
      } else {
        this.answer = lastSentence;
        this.checkAnswer();
      }
    }
  },
  mounted() {
    console.log(categories)
    this.questions=categories[this.$route.params.id].questions
    document.addEventListener('click', () => {
      if (this.hasEnabledVoice) {
        return;
      }
      //Ñapa Ipad
      const utter = new SpeechSynthesisUtterance('hello');
      utter.volume = 0;
      speechSynthesis.speak(utter);
      this.hasEnabledVoice = true;
    });

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
          .then( (stream) => {
            this.showCamera=true;
            this.$refs.camera.srcObject = stream;
          })
          .catch( (err) => {
            console.log("Something went wrong!",err);
          });
    }
    setInterval(()=>{
      if(this.$refs.camera.srcObject==null){
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
              .then( (stream) => {
                this.$refs.camera.srcObject = stream;
              })
              .catch( (err) => {
                console.log("Something went wrong!",err);
              });
        }
      }
    },1000)
  }
}
</script>

<style>
.circle {
  position: relative;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  padding: 0;
  list-style: none;
  position: absolute;
  left: 50%;
  margin: 0;
  transform: translate(-50%, 0%);
}

.circle > * {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.25em;
  height: 2.25em;
  margin: -1.125em;
}

.circle > *:nth-of-type(1) {
  transform: rotate(270deg) translate(10vw) rotate(-270deg);
}

.circle > *:nth-of-type(2) {
  transform: rotate(284.4deg) translate(10vw) rotate(-284.4deg);
}

.circle > *:nth-of-type(3) {
  transform: rotate(298.8deg) translate(10vw) rotate(-298.8deg);
}

.circle > *:nth-of-type(4) {
  transform: rotate(313.2deg) translate(10vw) rotate(-313.2deg);
}

.circle > *:nth-of-type(5) {
  transform: rotate(327.6deg) translate(10vw) rotate(-327.6deg);
}

.circle > *:nth-of-type(6) {
  transform: rotate(342deg) translate(10vw) rotate(-342deg);
}

.circle > *:nth-of-type(7) {
  transform: rotate(356.4deg) translate(10vw) rotate(-356.4deg);
}

.circle > *:nth-of-type(8) {
  transform: rotate(370.8deg) translate(10vw) rotate(-370.8deg);
}

.circle > *:nth-of-type(9) {
  transform: rotate(385.2deg) translate(10vw) rotate(-385.2deg);
}

.circle > *:nth-of-type(10) {
  transform: rotate(399.6deg) translate(10vw) rotate(-399.6deg);
}

.circle > *:nth-of-type(11) {
  transform: rotate(414deg) translate(10vw) rotate(-414deg);
}

.circle > *:nth-of-type(12) {
  transform: rotate(428.4deg) translate(10vw) rotate(-428.4deg);
}

.circle > *:nth-of-type(13) {
  transform: rotate(442.8deg) translate(10vw) rotate(-442.8deg);
}

.circle > *:nth-of-type(14) {
  transform: rotate(457.2deg) translate(10vw) rotate(-457.2deg);
}

.circle > *:nth-of-type(15) {
  transform: rotate(471.6deg) translate(10vw) rotate(-471.6deg);
}

.circle > *:nth-of-type(16) {
  transform: rotate(486deg) translate(10vw) rotate(-486deg);
}

.circle > *:nth-of-type(17) {
  transform: rotate(500.4deg) translate(10vw) rotate(-500.4deg);
}

.circle > *:nth-of-type(18) {
  transform: rotate(514.8deg) translate(10vw) rotate(-514.8deg);
}

.circle > *:nth-of-type(19) {
  transform: rotate(529.2deg) translate(10vw) rotate(-529.2deg);
}

.circle > *:nth-of-type(20) {
  transform: rotate(543.6deg) translate(10vw) rotate(-543.6deg);
}

.circle > *:nth-of-type(21) {
  transform: rotate(558deg) translate(10vw) rotate(-558deg);
}

.circle > *:nth-of-type(22) {
  transform: rotate(572.4deg) translate(10vw) rotate(-572.4deg);
}

.circle > *:nth-of-type(23) {
  transform: rotate(586.8deg) translate(10vw) rotate(-586.8deg);
}

.circle > *:nth-of-type(24) {
  transform: rotate(601.2deg) translate(10vw) rotate(-601.2deg);
}

.circle > *:nth-of-type(25) {
  transform: rotate(615.6deg) translate(10vw) rotate(-615.6deg);
}

.circle .item {
  display: block;
  width: 2vw;
  height: 2vw;
  transition: all .3s ease-in-out;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: #1170b7;
  color: #fff;
  line-height: 2vw;
  font-size: 1vw;
  text-align: center;
  text-decoration: none;
  cursor: default;
}

.rosco{
  height: 22vw;
  margin-top: 10px;
}


.img-center {
  width: 14vw;
  position: absolute;
  left: 43vw;
  transform: translate(0,2vh);
}

.video-container {
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
  position: absolute;
  left: 42vw;
  transform: translate(0vw,2vw);
}

video{
  width: 25vw;
  height: 26vw;
  transform: translate(-25%,-25%);
}

@media only screen
and (max-device-width: 812px)
and (-webkit-min-device-pixel-ratio: 3) {
  .img-center {
    width: 50vw;
    position: absolute;
    left: 25vw;
    transform: translate(0,-5vh);
  }

  .rosco{
    height: 60vw;
    margin-top: 80px;
  }
  .circle {
    position: relative;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    padding: 0;
    list-style: none;
    position: absolute;
    left: 50%;
    margin: 0;
    transform: translate(-50%, 0%);

  }

  .circle > *:nth-of-type(1) {
    transform: rotate(270deg) translate(35vw) rotate(-270deg);
  }

  .circle > *:nth-of-type(2) {
    transform: rotate(284.4deg) translate(35vw) rotate(-284.4deg);
  }

  .circle > *:nth-of-type(3) {
    transform: rotate(298.8deg) translate(35vw) rotate(-298.8deg);
  }

  .circle > *:nth-of-type(4) {
    transform: rotate(313.2deg) translate(35vw) rotate(-313.2deg);
  }

  .circle > *:nth-of-type(5) {
    transform: rotate(327.6deg) translate(35vw) rotate(-327.6deg);
  }

  .circle > *:nth-of-type(6) {
    transform: rotate(342deg) translate(35vw) rotate(-342deg);
  }

  .circle > *:nth-of-type(7) {
    transform: rotate(356.4deg) translate(35vw) rotate(-356.4deg);
  }

  .circle > *:nth-of-type(8) {
    transform: rotate(370.8deg) translate(35vw) rotate(-370.8deg);
  }

  .circle > *:nth-of-type(9) {
    transform: rotate(385.2deg) translate(35vw) rotate(-385.2deg);
  }

  .circle > *:nth-of-type(10) {
    transform: rotate(399.6deg) translate(35vw) rotate(-399.6deg);
  }

  .circle > *:nth-of-type(11) {
    transform: rotate(414deg) translate(35vw) rotate(-414deg);
  }

  .circle > *:nth-of-type(12) {
    transform: rotate(428.4deg) translate(35vw) rotate(-428.4deg);
  }

  .circle > *:nth-of-type(13) {
    transform: rotate(442.8deg) translate(35vw) rotate(-442.8deg);
  }

  .circle > *:nth-of-type(14) {
    transform: rotate(457.2deg) translate(35vw) rotate(-457.2deg);
  }

  .circle > *:nth-of-type(15) {
    transform: rotate(471.6deg) translate(35vw) rotate(-471.6deg);
  }

  .circle > *:nth-of-type(16) {
    transform: rotate(486deg) translate(35vw) rotate(-486deg);
  }

  .circle > *:nth-of-type(17) {
    transform: rotate(500.4deg) translate(35vw) rotate(-500.4deg);
  }

  .circle > *:nth-of-type(18) {
    transform: rotate(514.8deg) translate(35vw) rotate(-514.8deg);
  }

  .circle > *:nth-of-type(19) {
    transform: rotate(529.2deg) translate(35vw) rotate(-529.2deg);
  }

  .circle > *:nth-of-type(20) {
    transform: rotate(543.6deg) translate(35vw) rotate(-543.6deg);
  }

  .circle > *:nth-of-type(21) {
    transform: rotate(558deg) translate(35vw) rotate(-558deg);
  }

  .circle > *:nth-of-type(22) {
    transform: rotate(572.4deg) translate(35vw) rotate(-572.4deg);
  }

  .circle > *:nth-of-type(23) {
    transform: rotate(586.8deg) translate(35vw) rotate(-586.8deg);
  }

  .circle > *:nth-of-type(24) {
    transform: rotate(601.2deg) translate(35vw) rotate(-601.2deg);
  }

  .circle > *:nth-of-type(25) {
    transform: rotate(615.6deg) translate(35vw) rotate(-615.6deg);
  }
  .circle .item {
    display: block;
    width: 6vw;
    height: 6vw;
    transition: all .3s ease-in-out;
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: #1170b7;
    color: #fff;
    line-height: 6vw;
    font-size: 4vw;
    text-align: center;
    text-decoration: none;
    cursor: default;
  }
}



.circle .item--success {
  background-color: #00FF00;
}

.circle .item--current {
  background-color: #D35B31;
}

.circle .item--failure {
  background-color: #FF0000;
}

</style>
