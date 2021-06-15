<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{double}})</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref, reactive, isRef, isReactive, computed} from 'vue'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)

    console.log(isRef(name))
    console.log(isRef(version.value))

    const framework = reactive({
      name: 'VueJs',
      version: 3
    })

    const doubleVersion = computed(() => version.value * 2 )

    console.log(isReactive(framework))
    console.log(isReactive(framework.name))

    const changeInfo = () => {
      name.value = 'Vue JS !'
      version.value= 4
    }

    return {
      name: name,
      version: version,
      change: changeInfo,
      double: doubleVersion
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