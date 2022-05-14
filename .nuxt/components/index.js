export { default as Afarslide } from '../..\\components\\Afarslide.vue'
export { default as Awashslide } from '../..\\components\\Awashslide.vue'
export { default as BishoftuNav } from '../..\\components\\BishoftuNav.vue'
export { default as Bishoftuslide } from '../..\\components\\Bishoftuslide.vue'
export { default as BishoftuSpa } from '../..\\components\\BishoftuSpa.vue'
export { default as Dbox } from '../..\\components\\Dbox.vue'
export { default as Destinationheader } from '../..\\components\\Destinationheader.vue'
export { default as Destinav } from '../..\\components\\Destinav.vue'
export { default as DSection } from '../..\\components\\DSection.vue'
export { default as Dtop } from '../..\\components\\Dtop.vue'
export { default as Entotoslide } from '../..\\components\\Entotoslide.vue'
export { default as Event } from '../..\\components\\Event.vue'
export { default as Fixed } from '../..\\components\\Fixed.vue'
export { default as FooterApp } from '../..\\components\\FooterApp.vue'
export { default as Giftcardsection } from '../..\\components\\Giftcardsection.vue'
export { default as HeaderApp } from '../..\\components\\HeaderApp.vue'
export { default as NavMenu } from '../..\\components\\NavMenu.vue'
export { default as TabHeader } from '../..\\components\\TabHeader.vue'
export { default as Tanaslide } from '../..\\components\\Tanaslide.vue'
export { default as Waterparkslide } from '../..\\components\\Waterparkslide.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
