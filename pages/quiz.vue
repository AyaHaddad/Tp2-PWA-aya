<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="6" class="text-center">
        <h3
          v-if="answers.length < quizz.questions.length"
          class="subtitleQuiz mb-4"
        >
          {{ quizz.title }}
        </h3>
        <v-card class="blurredCard pa-6">
          <div v-if="answers.length < quizz.questions.length">
            <h1 class="questionHeadline white--text mb-8">
              {{ quizz.questions[currentIndex].title }}
            </h1>
            <v-row align="center" justify="center" class="pb-6">
              <v-btn
                @click="
                  submitAnswer(
                    quizz.questions[currentIndex].answers[0].isCorrect
                  )
                "
                color="white"
                elevation="12"
                large
                block
                rounded
                outlined
                class="ma-2"
              >
                {{ quizz.questions[currentIndex].answers[0].title }}</v-btn
              >
              <v-btn
                @click="
                  submitAnswer(
                    quizz.questions[currentIndex].answers[1].isCorrect
                  )
                "
                color="white"
                elevation="12"
                large
                block
                rounded
                outlined
                class="ma-2"
              >
                {{ quizz.questions[currentIndex].answers[1].title }}</v-btn
              >
              <v-btn
                @click="
                  submitAnswer(
                    quizz.questions[currentIndex].answers[2].isCorrect
                  )
                "
                color="white"
                elevation="12"
                large
                block
                rounded
                outlined
                class="ma-2"
              >
                {{ quizz.questions[currentIndex].answers[2].title }}</v-btn
              >
              <v-btn
                @click="
                  submitAnswer(
                    quizz.questions[currentIndex].answers[3].isCorrect
                  )
                "
                color="white"
                elevation="12"
                large
                block
                rounded
                outlined
                class="ma-2"
              >
                {{ quizz.questions[currentIndex].answers[3].title }}</v-btn
              >
            </v-row>
          </div>
          <div v-else class="d-flex flex-column justify-center align-center">
            <div
              class="tenor-gif-embed"
              data-postid="18757177"
              data-share-method="host"
              data-aspect-ratio="2.06452"
              data-width="60%"
            >
              <a href="https://tenor.com/view/star-wars-sable-gif-18757177"
                >Star Wars Sable GIF</a
              >from
              <a href="https://tenor.com/search/star+wars-gifs"
                >Star Wars GIFs</a
              >
            </div>
            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
            <v-btn
              v-if="!showResult"
              rounded
              large
              elevation="12"
              @click="finishQuizz"
              class="primaryBtn ma-2 mt-4"
              >Uncover your score !</v-btn
            >
            <v-btn
              v-else
              color="white"
              large
              rounded
              outlined
              disabled
              class="ma-2 mt-4"
              >Well done Padawan</v-btn
            >
            <h1 v-if="showResult" class="questionHeadline white--text mb-8">
              Score : {{ finalScore }}/{{ quizz.questions.length }}
            </h1>
            <h1 v-else class="questionHeadline white--text mb-8">
              Score : **/10
            </h1>
            <v-btn
              @click="resetQuizz"
              color="white"
              elevation="12"
              large
              rounded
              outlined
              class="ma-2"
              >Play again<v-icon right> mdi-reload </v-icon></v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showResult: false,
      finalScore: 0,
      currentIndex: 0,
      answers: [],
      test: "HI",
      quizz: {
        title: "Test your knowledge",
        questions: [
          {
            title: "1.Who played the role of Commander Cody ?",
            answers: [
              {
                title: "Jay Laga'aia",
                isCorrect: false,
              },
              {
                title: "Temuera Morrison",
                isCorrect: true,
              },
              {
                title: "Ahmed Meilleur",
                isCorrect: false,
              },
              {
                title: "Joel Edgerton ",
                isCorrect: false,
              },
            ],
          },
          {
            title:
              "2.What did Luke Skywalker lose in his fight with Darth Vader ? ",
            answers: [
              {
                title: "His left hand",
                isCorrect: false,
              },
              {
                title: "His left foot",
                isCorrect: false,
              },
              {
                title: "His right hand",
                isCorrect: true,
              },
              {
                title: "His left leg",
                isCorrect: false,
              },
            ],
          },
          {
            title: "3.Where did the Clone Wars begin ? ",
            answers: [
              {
                title: "Tatooine",
                isCorrect: false,
              },
              {
                title: "Géonose",
                isCorrect: true,
              },
              {
                title: "Naboo",
                isCorrect: false,
              },
              {
                title: "Coruscante",
                isCorrect: false,
              },
            ],
          },
          {
            title: '4.Who said this quote, "I choose to live for my people."',
            answers: [
              {
                title: "Padmé Amidala",
                isCorrect: false,
              },
              {
                title: "Riyo Chuchi",
                isCorrect: true,
              },
              {
                title: "Reine Jamillia",
                isCorrect: false,
              },
              {
                title: "Hera Syndulla",
                isCorrect: false,
              },
            ],
          },
          {
            title: "5.What is Chewbacca's weapon of choice ? ",
            answers: [
              {
                title: "Blaster rifle",
                isCorrect: false,
              },
              {
                title: "Light saber",
                isCorrect: false,
              },
              {
                title: "Metal Club",
                isCorrect: false,
              },
              {
                title: "Bowcaster",
                isCorrect: true,
              },
            ],
          },
          {
            title:
              "6.What is the name of the spiky-headed Sith Lord holding a double-bladed lightsaber ? ",
            answers: [
              {
                title: "Darth Vader",
                isCorrect: false,
              },
              {
                title: "Darth Maul",
                isCorrect: true,
              },
              {
                title: "Darth Paul",
                isCorrect: false,
              },
              {
                title: "Darth Garth ",
                isCorrect: false,
              },
            ],
          },
          {
            title:
              "7.What creatures living on Endor helped the rebels defeat the second Death Star ? ",
            answers: [
              {
                title: "Ewoks",
                isCorrect: true,
              },
              {
                title: "Wookies",
                isCorrect: false,
              },
              {
                title: "Nerfs breeders",
                isCorrect: false,
              },
              {
                title: "Jawas",
                isCorrect: false,
              },
            ],
          },
          {
            title:
              "8.What is the color of C-3PO's arm in Star Wars: The Force Awakens ? ",
            answers: [
              {
                title: "Black",
                isCorrect: false,
              },
              {
                title: "Blue & Red",
                isCorrect: true,
              },
              {
                title: "Blue",
                isCorrect: false,
              },
              {
                title: "Silver",
                isCorrect: false,
              },
            ],
          },
          {
            title:
              "9.What nickname does Han Solo call Luke Skywalker that drives him crazy ? ",
            answers: [
              {
                title: "Buckaroo",
                isCorrect: false,
              },
              {
                title: "Enfant",
                isCorrect: true,
              },
              {
                title: "Skydancer",
                isCorrect: false,
              },
              {
                title: "Lukie",
                isCorrect: false,
              },
            ],
          },
          {
            title: "10.Who adopted Padme Amidala's daughter ? ",
            answers: [
              {
                title: "Bail Organa",
                isCorrect: true,
              },
              {
                title: "Capitaine Antilles",
                isCorrect: false,
              },
              {
                title: "Owen et Beru Lars",
                isCorrect: false,
              },
              {
                title: "Giddean Danu ",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    submitAnswer(isCorrect) {
      this.answers.push(isCorrect);
      console.log(this.answers);
      this.currentIndex++;
    },
    finishQuizz() {
      this.answers.forEach((el) => {
        if (el === true) {
          this.finalScore++;
        }
      });
      this.showResult = !this.showResult;
    },
    resetQuizz() {
      this.currentIndex = 0;
      this.answers = [];
      this.finalScore = 0;
      this.showResult = false;
    },
  },
};
</script>
