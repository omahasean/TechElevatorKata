<template>
  <div class="students">
    <table>
      <thead>
        <tr>
          <th></th>
          <th
            class="exercise-name"
            v-for="exercise in exercises"
            :key="exercise.id"
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
          :class="{ striped: i % 2 === 0 }"
        >
          {{ exercise.score }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Profile from '@/components/ui/Profile';

export default {
  components: {
    Profile,
  },
  data() {
    return {
      exercises: [
        { id: 1, name: 'Intro to OOP', score: 3 },
        { id: 2, name: 'Intro to SQL', score: 3 },
        { id: 3, name: 'Polymorphism ', score: 3 },
        { id: 1, name: 'Intro to OOP', score: 3 },
        { id: 2, name: 'Intro to SQL', score: 3 },
        { id: 3, name: 'Polymorphism ', score: 3 },
        { id: 1, name: 'Intro to OOP', score: 3 },
        { id: 2, name: 'Intro to SQL', score: 3 },
        { id: 3, name: 'Polymorphism ', score: 3 },
        { id: 1, name: 'Intro to OOP', score: 3 },
        { id: 2, name: 'Intro to SQL', score: 3 },
        { id: 3, name: 'Polymorphism ', score: 3 },
        { id: 1, name: 'Intro to OOP', score: 3 },
        { id: 2, name: 'Intro to SQL', score: 3 },
        { id: 3, name: 'Polymorphism ', score: 3 },
        { id: 1, name: 'Intro to OOP', score: 3 },
        { id: 2, name: 'Intro to SQL', score: 3 },
        { id: 3, name: 'Polymorphism ', score: 3 },
      ],
      students: [
        {
          id: 1,
          name: 'James Brown',
          avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX172_CR0,0,172,256_AL_.jpg',
          exercises: [
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
          ],
        },
        {
          id: 2,
          name: 'James Brown',
          avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyNTA0ODk5Ml5BMl5BanBnXkFtZTgwNjAyMTI3NjE@._V1_UY256_CR15,0,172,256_AL_.jpg',
          exercises: [
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
          ],
        },
        {
          id: 3,
          name: 'James Brown',
          avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX172_CR0,0,172,256_AL_.jpg',
          exercises: [
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
            { id: 1, name: 'Intro to OOP', score: 3 },
            { id: 2, name: 'Intro to SQL', score: 3 },
            { id: 3, name: 'Polymorphism ', score: 3 },
          ],
        },
      ],
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

table tr,
table td {
  /* display: flex;
  align-items: center;
  justify-content: center; */
}

table td:first-child,
table th:first-child {
  min-width: 140px;
  max-width: 140px;
}

table tr {
  border-bottom: 1px solid lightgray;
}

.striped {
  background-color: whitesmoke;
}

.exercise-name {
  height: 123px;
  white-space: nowrap;
}

.exercise-name > div {
  transform:
    /* Magic Numbers */ translate(10px, 51px)
    /* 65 is really 360 - 65 */ rotate(295deg);
  width: 9px;
}

.exercise-name > div > span {
  border-bottom: 1px solid lightgray;
  padding: 5px 5px;
  font-size: 0.7em;
}

.score {
  width: 25px;
  font-size: 0.9em;
}
</style>
