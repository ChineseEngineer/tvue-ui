<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/tvue-logo.png" style="width: 200px;">
    <!--<img alt="Vue logo" src="/img/non-data.gif" style="width: 200px;">-->
    <non-data
        :img="require('@/assets/non-data.gif')"
        text="没有搜索结果"
        subtitle="试试其他关键词"
        color="#929297"
        :margin-top="220">
    </non-data>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NonData from '@/components/non-data'
export default {
  name: 'home',
  data () {
    return {
      imgPath: require('@/assets/non-data.gif')
    }
  },
  components: {
    HelloWorld,
    NonData
  }
}
</script>
