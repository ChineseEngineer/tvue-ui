<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/tvue-logo.png" style="width: 200px;">
    <input
        style="font-size: 2.5rem; width: 400px; height: 100px;"
        type="text" v-model="message" placeholder="请输入您的留言">
    <cell>{{status}}</cell>
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      imgPath: require('@/assets/non-data.gif')
    }
  },
  computed: {
    ...mapState(['status']),
    message: {
      get () {
        console.dir(this.$store.state)
        return this.$store.state.home.obj.message
      },
      set (val) {
        this.SET_MESSAGE(val)
      }
    }
  },
  components: {
    NonData,
    cell
  },
  created () {
    this.SET_STATUS({ status: true })
  },
  methods: {
    ...mapMutations(['SET_STATUS']),
    ...mapMutations('home', [
      'SET_MESSAGE'
    ])
  }
}
</script>
