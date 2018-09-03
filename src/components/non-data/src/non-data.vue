<template>
  <section
      class="tv-non-data"
      :style="{'margin-top': marginTop + 'px', 'color': color}">
    <img
        :src="img"
        :alt="text"
        class="tv-non-data-img">
    <h4 v-if="text" class="tv-non-data-title">{{text}}</h4>
    <p v-if="subtitle" class="tv-non-data-subtitle">{{subtitle}}</p>
  </section>
</template>

<script>
export default {
  name: 'non-data',
  props: {
    img: {
      type: [String, Object],
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    marginTop: {
      type: Number,
      default: 80
    }
  }
}
</script>

<style>
  .tv-non-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tv-non-data-img {
    max-width: 60%;
    margin-bottom: 20px;
  }
  .tv-non-data-title {
    font-size: 16px;
    padding: 0;
    margin: 0 0 10px 0;
  }
  .tv-non-data-subtitle {
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
</style>
