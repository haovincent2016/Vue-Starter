<template>
<div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    created() {

    },
    mounted() {

    },
    destroyed() {

    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['state1', 'state2'])
    },
    methods: {
        ...mapMutations(['Mut1', 'Mut2'])
    },
    components: {

    }
}
</script>
<style lang="scss" scoped>
</style>