// @ts-nocheck
export const ContextMenu = {
  methods: {
    contextMenu(e: Event) {
      e.preventDefault()
      const contextMenuStatus = this.$store.state.ui.contextMenuStatus
      if (!contextMenuStatus) {
        this.$store.commit('toggleContextMenu', true)
      }
      this.$store.commit('setContextMenuPosition', e)
      this.$store.commit('setContextMenuValues', this.$data.contextMenuValues)
    },
  },
}
