<template>
    <div class="card">
        <h1>Переиспользование</h1>

        <button class="btn primary">Показать сообщение </button>
        <button class="btn" @click="navigate">Перейти на главную</button>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const navigate = () => {
            router.push('/')
        }

        return{
            navigate
        }
    }
}
</script>
