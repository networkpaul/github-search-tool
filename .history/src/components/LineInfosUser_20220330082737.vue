<template>
    <div class="userCard-userCategorie" :class="{disabled: !data}">
        <div class="others-imgWrapper">
            <img :src="image" alt="">
        </div>
        <a v-if="link" class="others-link" :href="link" target="_blank">{{ data }}</a>
        <p v-else-if="data" class="others-title">{{ data }}</p>
        <p v-else class="others-title">Not available</p>
    </div>
</template>

<script>

export default {

    props: {
        data: {
            type: String,
            default: null
        },
        image: String,
        link: {
            type: String,
            default: null
        }
    }
}
</script>
