<template>
  <div class="popup" v-if="isOpen">
    <div
      class="popup__background"
      @click="handleClickOutsidePopup"
    ></div>
    <div class="popup__container">
      <div class="popup__header row justify-between no-wrap">
        <div class="popup__title">{{ popupTitle }}</div>
        <div
          class="popup__btnClose"
          @click="$emit('closePopup')"
        >
          <q-icon name="close"></q-icon>
        </div>
      </div>

      <div class="popup__parentContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup__background {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  height: 100%;
  width: 100%;
}

.popup__container {
  background-color: white;
  z-index: 4000;
  position: absolute;
  margin: auto;
  overflow: scroll;
  max-width: 95%;
  max-height: 95%;
}

.popup__parentContent {
  padding: 0rem 2rem 2rem 2rem;
}

.popup__header {
  padding: 2rem 2rem;
  gap: 5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
}

.popup__title {
  font-size: 1.2rem;
}

.popup__btnClose {
  text-align: right;
}

.popup__btnClose span {
  display: block;
  width: 45px;
  height: 45px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  margin-left: auto;
}

.popup__btnClose:hover {
  cursor: pointer;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonPopup',
  props: {
    /** Indicates if popup is open */
    isOpen: {
      type: Boolean,
      required: true
    },
    /** Title of the popup */
    popupTitle: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClickOutsidePopup () {
      this.$emit('closePopup')
    }
  }
})
</script>
