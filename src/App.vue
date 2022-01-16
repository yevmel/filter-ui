<template>
    <!-- query -->
    <form v-if="mode === 'query'" @submit.prevent="">
        <div class="w-full flex gap-2">
            <div class="relative text-gray-400 focus-within:text-gray-600 flex-1">
                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </div>

                <input id="search" class="block w-full bg-white py-3 pl-10 pr-4 border border-transparent shadow rounded-md leading-5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-600" placeholder="Search" type="search" name="search"
                       v-model="query">
            </div>

            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 gap-1 uppercase" @click="onQuerySearch">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                search
            </button>

            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 gap-1 uppercase" @click.prevent="switchToForm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>

                form
            </button>
        </div>
    </form>

    <!-- form -->
    <form v-if="mode === 'form'" @submit.prevent="">
        <div v-for="expression in expressions" class="flex gap-2 mb-2 items-center">
            <input class="block w-80 bg-white py-2 pl-4 pr-4 border border-transparent shadow rounded-md leading-5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-600" placeholder="Search" type="search" name="search"
                   v-model="expression.name">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>

            <div class="flex-1 flex gap-2 items-center">
                <input v-for="(value, idx) in expression.values" class="block w-full bg-white py-2 pl-4 pr-4 border border-transparent shadow rounded-md leading-5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-600" placeholder="Search" type="search" name="search"
                       v-model="expression.values[idx]">

                <Toggle :value="expression.combination"></Toggle>

                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 gap-1 uppercase" @click.prevent="expression.values.push('')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="flex gap-8 pt-2">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 gap-1 uppercase" @click.prevent="expressions.push({ values: [''], name: '', combination:'or' })">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
            </button>

            <div class="flex gap-2">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 gap-1 uppercase" @click.prevent="onFormSearch">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    search
                </button>

                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 gap-1 uppercase" @click.prevent="switchToQuery">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>

                    query
                </button>
            </div>
        </div>
    </form>
</template>

<script>
import { ref } from "vue";
import { fromQuery, toQuery } from "@/service/SearchService";
import Toggle from "@/components/Toggle";

export default {
    name: 'App',
    components: {Toggle},

    setup() {
        const mode = ref('query')
        const expressions = ref([])
        const query = ref('foo=bar abc=(123 456 789) def=[apple orange]')

        const onQuerySearch = () => {
            console.log('TODO: execute query-search')
        }

        const onFormSearch = () => {
            console.log('TODO: execute form-search')
        }

        const switchToForm = () => {
            expressions.value = fromQuery(query.value)
            mode.value = 'form'
        }

        const switchToQuery = () => {
            query.value = toQuery(expressions.value)
            mode.value = 'query'
        }

        return {
            mode, query, expressions,
            onQuerySearch, onFormSearch,
            switchToForm, switchToQuery
        }
    }
}
</script>

<style>
</style>
