<template>
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" ref="textInput">
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>

    <framework-info
      @change-version="changeVersion"
    ></framework-info>
</template>

<script>
import FrameworkInfo from '../FrameworkInfo'
import {
  ref,
  watch,
  provide
  } from 'vue'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    watch(firstName, (newV) => {
      console.log('v-model:value', newV)
    })

    function changeInfo () {
      name.value = 'Vue JS !'
      version.value= 4

      console.log('ref', textInput.value.value)
      console.log('v-model', firstName.value)
    }

    function changeVersion (num) {
      version.value = num
    } 

    provide('name', name)
    provide('version', version)

    return {
      name,
      version,
      change: changeInfo,
      textInput,
      firstName,
      changeVersion
    }
  },
  components: { FrameworkInfo }
}
</script>