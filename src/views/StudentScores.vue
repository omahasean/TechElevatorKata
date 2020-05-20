<template>
  <div class="students">
    <table>
      <thead>
        <tr>
          <th></th>
          <th
            v-for="(exercise, i) in exercises"
            :key="exercise.id"
            :class="{ stripe: i % 2 === 0 }"
          >
            <div>
              <span>{{ exercise.name }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tr v-for="student in students" :key="student.id">
        <td>
          <profile :person="student" />
        </td>
        <td
          class="score"
          v-for="(exercise, i) in student.exercises"
          :key="exercise.id"
          :class="{ stripe: i % 2 === 0 }"
        >
          {{ exercise.score }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ExerciseService from '@/services/ExerciseService';
import Profile from '@/components/ui/Profile';
import StudentService from '@/services/StudentService';

const exerciseService = new ExerciseService();
const studentService = new StudentService();

export default {
  components: {
    Profile,
  },
  async beforeCreate() {
    this.students = await studentService.getAll();
    this.exercises = await exerciseService.getAll();
  },
  data() {
    return {
      exercises: [],
      students: [],
    };
  },
};
</script>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-self: center;
}

table {
  border-collapse: collapse;
}

table td:first-child,
table th:first-child {
  min-width: 50px;
  max-width: 140px;
}

table tr {
  border-bottom: 1px solid lightgray;
}

.stripe {
  background-color: whitesmoke;
}

table th {
  padding: 10px;
  overflow-wrap: break-word;
  max-width: 50px;
  font-size: 0.7em;
}

table tr td {
  width: 50px;
  max-width: 50px;
  font-size: 0.9em;
}
</style>
