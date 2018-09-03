export default (lazyImage) => {
  return {
    data () {
      return {
        renderSrc: ''
      }
    },
    props: {
      src: [String, Object],
      tag: {
        type: String,
        default: 'img'
      }
    },
    created () {
      console.log(888888)
      this.renderSrc = this.src
    },
    mounted () {},
    render (h) {
      return h(this.tag, {
        attr: {
          src: this.renderSrc
        }
      }, this.$slots.default)
    }
  }
}
