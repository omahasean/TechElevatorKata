<template>
  <div>
    <h1>Exercises Average Score {{ overallScore }}</h1>
    <card class="exercises">
      <exercises-list />
    </card>
  </div>
</template>

<script>
import Card from '@/components/ui/Card';
import ExercisesList from '@/components/ExercisesList';
import StudentScoreService from '../services/StudentScoreService';

export default {
  components: { Card, ExercisesList },
  data() {
    return {
      scores: studentScores
    }
  }, 
   async created() {
    const scoreService = new StudentScoreService();
    this.studentScores = await scoreService.getAll();
  },
  computed: {
    overallScore() {
      let sum = this.studentScores.reduce((currentSum, score) => {
        return currentSum + this.studentScores.score;
      },0);
      return sum / this.studentScores.length;
    }
  }
};
</script>

<style scoped>
.exercises {
  width: 100%;
}
</style>
