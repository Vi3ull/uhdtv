export default () => ({
  open: false,

  toggle() {
    console.log('toggle')

    if (this.open) {
        return this.close()
    }

    this.$refs.button.focus()

    this.open = true
  },

  close(focusAfter) {
    if (! this.open) return

    this.open = false

    focusAfter && focusAfter.focus()
  },

  [':keydown.escape.prevent.stop']() {
    this.close(this.$refs.button)
  },
  [':focusin.window']() {
    ! this.$refs.panel.contains(this.$event.target) && this.close()
  },
  ['x-id']: 'dropdown-button',

  button: {
    ['x-ref']: 'button',
    ['@click.prevent']() {
        this.toggle();
    },
    [':aria-expanded']() {
      return this.open
    },
    [':aria-controls']() {
      return this.$id('dropdown-button')
    }
  },

  panel: {
    ['x-ref']: 'panel',
    ['x-show']() {
        return this.open
    },
    [':class']() {
      return this.open ? 'dropdown__menu--show' : ''
    },
    ['@click.outside']() {
      this.close(this.$refs.button)
    },
    [':id']() {
      this.$id('dropdown-button')
    } ,
  },
});