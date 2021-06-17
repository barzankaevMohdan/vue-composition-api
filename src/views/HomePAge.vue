<template>
    <app-alert
        v-if="alert"
        title="Работаем с Composition"
        type="danger"
        @close="close"
    >
    </app-alert>
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" ref="textInput">
        <hr>
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
      <button 
            class="btn"
            :class="alert ? 'danger' : 'primary'" 
            @click="toggle"
        >
            {{ alert ? 'Закрыть' : 'Показать' }} сообщение
        </button>
    </div>

    <framework-info
      @change-version="changeVersion"
    ></framework-info>
</template>

<script>
import AppAlert from '../AppAlert.vue'
import FrameworkInfo from '../FrameworkInfo'
import {useAlert} from '../use/Alert'
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
    // const {alert, close, toggle} = useAlert()

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
      changeVersion,
      // alert,
      // close,
      // toggle
      ...useAlert()
    }
  },
  components: { FrameworkInfo, AppAlert }
}
</script>