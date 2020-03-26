<template>
  <div class="home">
    <button @click="toggleModal">Open</button>
    <transition name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    },
    beforeEnter() {
      console.log('beforeEnter')
    },
    enter() {
      console.log('enter')
    },
    afterEnter() {
      console.log('afterEnter')
    },
    enterCancelled() {
      console.log('enterCancelled')
    },
    beforeLeave() {
      console.log('beforeLeave')
    },
    leave() {
      console.log('leave')
    },
    afterLeave() {
      console.log('afterLeave')
    },
    leaveCancelled() {
      console.log('leaveCancelled')
    }
  }
}
</script>
