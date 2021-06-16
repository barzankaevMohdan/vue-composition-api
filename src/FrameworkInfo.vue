<template>
    <div class="card">
        <p>Название: <strong>{{ name }}</strong></p>
        <p>Версия: <strong>{{ version }} ({{double}})</strong></p>
    </div>
</template>

<script>
import {computed} from 'vue'
export default {
    props: ['name', 'version'],

    setup(props) {
        const doubleVersion = computed(() => props.version * 2)

        return {
            double: doubleVersion
        }
    }
}
</script>
