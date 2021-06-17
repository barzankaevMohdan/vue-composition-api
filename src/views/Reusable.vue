<template>
    <app-alert
        v-if="alert"
        title="Работаем с Composition"
        type="primary"
        @close="close"
    >
    </app-alert>
    <div class="card">
        <h1>Переиспользование</h1>

        <button 
            class="btn"
            :class="alert ? 'danger' : 'primary'" 
            @click="toggle"
        >
            {{ alert ? 'Закрыть' : 'Показать' }} сообщение
        </button>
        <button class="btn" @click="navigate">Перейти на главную</button>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
import AppAlert from '../AppAlert.vue'
import {useAlert} from '../use/Alert'
export default {
    setup() {
        // const {alert, close, toggle} = useAlert()
        const router = useRouter()

        const navigate = () => router.push('/')

        return{
            navigate,
            // alert,
            // toggle,
            // close
            ...useAlert()
        }
    },
    components: { AppAlert }
}
</script>
