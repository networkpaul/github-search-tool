<template>
    <div class="userCard-userCategorie" :class="{disabled: !data}">
        <div class="others-imgWrapper">
            <img :src="image" alt="">
        </div>
        <p v-if="data" class="others-title">{{ data }}</p>
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
        image: String
    }
}
</script>
