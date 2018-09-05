<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/tvue-logo.png" style="width: 200px;">
    <br>
    username: {{userInfo.username}}<br>
    role: {{userInfo.role}}
    <button @click="getUserInfo">登录</button>
    <input
        style="font-size: 2.5rem; width: 100%; height: 100px;"
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
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      imgPath: require('@/assets/non-data.gif')
    }
  },
  computed: {
    ...mapState(['status']),
    ...mapState('home', ['userInfo']),
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
    this.$api.loginAppWithCode({
      toonCode: 'I9+JpvTnpMzHq5Ie4XBYjRAdhhPxgCGEb1KcAKWEKYiSrRa5UHKueqmSoyOec7abEUTSrHxeEWJA5kfakrKp5AZO2UPrC3Q9g+Xu22MG/mYzPRk2rZYVewjo5yK9bD2dTTKCI54HTg/X+l6Gf1CER21KltDRGHQhBmkTyW52ikhhlZ74UsbnXaIE0Q3RQSe281Xnij6Tli9fWxyAL6OCfl2iHluvr9Tcl4xseYhJCQ4='
    }).then(res => {
      console.log(res)
    })
    this.SET_STATUS({ status: true })
  },
  methods: {
    ...mapMutations(['SET_STATUS']),
    ...mapMutations('home', [
      'SET_MESSAGE'
    ]),
    ...mapActions('home', ['getUserInfo'])
  }
}
</script>
