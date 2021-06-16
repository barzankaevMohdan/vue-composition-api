<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{double}})</strong></p>
      <div class="form-control">
        <input type="text" ref="textInput">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {
  ref, 
  reactive, 
  isRef, 
  isReactive, 
  computed,
  watch
  } from 'vue'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)

    console.log(isRef(name))
    console.log(isRef(version.value))

    const framework = reactive({
      name: 'VueJs',
      version: 3
    })

    const doubleVersion = computed(() => version.value * 2 )
    watch([doubleVersion, name], (newValues, oldValues) => {
      console.log('new version', newValues[0])
      console.log('new name', newValues[1])
      console.log('old version', oldValues[0])
      console.log('old name', oldValues[1])
    })

    console.log(isReactive(framework))
    console.log(isReactive(framework.name))

    const changeInfo = () => {
      name.value = 'Vue JS !'
      version.value= 4

      console.log(textInput.value.value)
    }

    return {
      name: name,
      version: version,
      change: changeInfo,
      double: doubleVersion,
      textInput: textInput
    }
  },
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
  // computed: {
  //   doubleVersion() {
  //     return this.version * 2
  //   }
  // }
}
</script>