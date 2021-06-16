<template>
  <div class="container">
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
      :name="name"
      :version="version"
    ></framework-info>
  </div>
</template>

<script>
import FrameworkInfo from './FrameworkInfo'
import {
  ref,
  watch
  } from 'vue'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')
    
    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new version', newValues[0])
    //   console.log('new name', newValues[1])
    //   console.log('old version', oldValues[0])
    //   console.log('old name', oldValues[1])
    // })

    watch(firstName, (newV) => {
      console.log('v-model:value', newV)
    })

    const changeInfo = () => {
      name.value = 'Vue JS !'
      version.value= 4

      console.log('ref', textInput.value.value)
      console.log('v-model', firstName.value)
    }

    return {
      name,
      version,
      change: changeInfo,
      textInput,
      firstName
    }
  },
  components: { FrameworkInfo }
}
</script>