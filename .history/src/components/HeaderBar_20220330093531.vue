<template>
    <div class="headerBar-container" :class="{ 'darkTheme': darkThemeOn }">
        <h3 class="headerBar-title">devfinder</h3>
        <div class="colorMode-container">
            <h5 class="colorMode-text">Dark</h5>
            <div class="colorMode-imgWrapper">
                <button
                @click="darkThemeOn = !darkThemeOn">
                <img src="@/assets/icon-moon.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            darkThemeOn: false
        }
    },

    methods: {
        toggleMenu () {
            this.darkThemeOn = !this.darkThemeOn
        }
    }
}
</script>

<style lang="scss">

//Dark Theme





//

.headerBar-container {
	padding-bottom: 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 85%;
	min-width: 320px;
}
.headerBar-title {
	font-size: 26px;
	font-weight: 700;
	line-height: 38px;
}
.colorMode-container {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 20%;
}
.colorMode-text {
	font-size: 13px;
	font-weight: 700;
	line-height: 19px;
	color: #4B6A9B;
	text-transform: uppercase;
}
.colorMode-imgWrapper {
	width: 20px;
	height: 20px;
	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
}
@media (min-width: 900px) {
	.headerBar-container {
		width: 50%;
		max-width: 730px;
	}
	.colorMode-container {
		justify-content: space-evenly;
	}
}

</style>