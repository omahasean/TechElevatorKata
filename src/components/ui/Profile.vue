<template>
  <div class="profile">
    <img :src="person.avatar" />
    {{ person.name }}
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  font-size: 0.8rem;
  font-weight: 600;
}

.profile > img {
  width: 48px;
  clip-path: circle(24px at center);
}
</style>
