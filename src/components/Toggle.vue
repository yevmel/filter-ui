<template>
    <Switch v-model="enabled" :class="['bg-indigo-600', 'relative inline-flex flex-shrink-0 h-8 w-20 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
        <span :class="[enabled ? 'translate-x-9' : 'translate-x-0', 'pointer-events-none relative inline-block h-7 w-10 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']">
            <span :class="[enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']" aria-hidden="true">
                AND
            </span>
            <span :class="[enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']" aria-hidden="true">
                OR
            </span>
        </span>
    </Switch>
</template>

<script>
import { ref, watch } from 'vue'
import { Switch } from '@headlessui/vue'

export default {
    name: "Toggle",
    components: {
        Switch
    },

    props: {
        value: String
    },

    setup(props) {
        const enabled = ref(props.value === 'or')

        watch(enabled, (current, old) => {
            console.log(old + "=>" + current)
        })

        return {
            enabled,
        }
    }
}
</script>

<style scoped>

</style>