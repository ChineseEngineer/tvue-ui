<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/tvue-logo.png" style="width: 200px;">
    <cell></cell>
    <non-data
        :img="require('@/assets/non-data.gif')"
        text="没有搜索结果"
        subtitle="试试其他关键词"
        color="#929297"
        :margin-top="220">
    </non-data>
  </div>
</template>

<script>
// @ is an alias to /src
import NonData from '@/components/non-data'
import cell from '@/components/cell'
export default {
  name: 'home',
  data () {
    return {
      imgPath: require('@/assets/non-data.gif')
    }
  },
  components: {
    NonData,
    cell
  }
}
</script>
