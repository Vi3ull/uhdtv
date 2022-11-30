export default () => ({
  isOpen: false,

  onOpenModal() {
    if (this.isOpen) {
      return this.close()
    }

    this.isOpen = true
  },

  onCloseModal() {
    if (! this.isOpen) return

    this.isOpen = false
  },

  btnOpen: {
    ['@click.prevent']() {
        // this.onOpenModal()
        this.$dispatch('modal')
        console.log(1)
    },
  },

  btnClose: {
    ['@click.prevent']() {
        this.onCloseModal()
    },
  },

  modalWrapper: {
    ['@modal.window']() {
      console.log('modal')
    }
  },
  // modalWrapper: {
  //   ['@mousedown.outside']() {
  //     this.onCloseModal()
  //   },  
  // },
});