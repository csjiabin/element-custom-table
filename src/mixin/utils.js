export default {
  methods: {
    getProps (keys = {}) {
      let props = {}
      Object.keys(keys).forEach(key => { props[key] = this[key] })
      return props
    },
    renderSlot (slot) {
      return this.$slots[slot] ? <template slot={slot}>{this.$slots[slot]}</template> : null
    }
  }
}
