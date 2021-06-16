<template>
    <div class="card">
        <p>Название: <strong>{{ name }}</strong></p>
        <p>Версия: <strong>{{ version }} ({{double}})</strong></p>
        <button class="btn danger" @click="change">Изменить на 3 версию</button>
    </div>
</template>

<script>
import {computed, inject} from 'vue'
export default {
    // props: ['name', 'version'],
    emits: ['change-version'],
    setup(props, context) {
        const doubleVersion = computed(() => version.value * 2)

        function changeVersion () {
            context.emit('change-version', 3)
        }

        const version = inject('version')

        return {
            name: inject('name'),
            version,
            double: doubleVersion,
            change: changeVersion
        }
    }
}
</script>
