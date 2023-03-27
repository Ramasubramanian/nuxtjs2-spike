<script>
import _ from 'lodash';
import {Customer, searchCustomer} from './customerservice.ts'
export default {
    data() {
        return {
            options: []
        }
    },
    methods: {
        onSearch(search, loading) {
            if (search.length) {
                loading(true);
                this.search(loading, search, this);
            }
        },
        search: _.debounce(async function (loading, search, vm) {
            const data = await searchCustomer(search);
            vm.options = data;
            loading(false);
        }, 350)
    }
}
</script>

<template>
    <div class="w-1/2">
        <v-select :options="options" :filterable="false" @search="onSearch" placeholder="Select Customer...">
            <template v-slot:no-options="{ search, searching }">
                <template v-if="searching">
                    No results found for <em>{{ search }}</em>.
                </template>
                <em v-else style="opacity: 0.5">Select customer...</em>
            </template>
            <template slot="option" slot-scope="option">
                <div class="d-center">
                    {{ option.name }}
                </div>
            </template>
            <template slot="selected-option" slot-scope="option">
                <div class="selected d-center">
                    {{ option.name }}
                </div>
            </template>
        </v-select>
    </div>
</template>

<style>
img {
    height: auto;
    max-width: 2.5rem;
    margin-right: 1rem;
}

.d-center {
    display: flex;
    align-items: center;
}

.selected img {
    width: auto;
    max-height: 23px;
    margin-right: 0.5rem;
}

.v-select .dropdown li {
    border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
    border-bottom: none;
}

.v-select .dropdown li a {
    padding: 10px 20px;
    width: 100%;
    font-size: 1.25em;
    color: #3c3c3c;
}

.v-select .dropdown-menu .active>a {
    color: #fff;
}
</style>