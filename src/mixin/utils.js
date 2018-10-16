export default {
  methods: {
    getProps (keys = {}) {
      let props = {}
      Object.keys(keys).forEach(key => {
        props[key] = this[key]
      })
      return props
    },
    renderSlot (slot) {
      const h = this.$createElement
      return h('template', {
        slot
      }, this.$slots[slot])
    }
  }
}
