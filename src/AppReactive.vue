<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }}</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  setup() {
    const framework = reactive({
      name: 'VueJs',
      version: 3
    })

    const changeInfo = () => {
      framework.name = "Vue JS !"
      framework.version = 4
    }

    return {
      // {name: framework.value.name,  <---not reactive
      // version: framework.value.version,}
      ...toRefs(framework),
      framework: framework,
      change: changeInfo
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
}
</script>