<template>
    <div class="headerBar-container">
        <h3 class="headerBar-title">devfinder</h3>
        <div class="colorMode-container">
            <h5 v-if="themeDark" class="colorMode-text">Light</h5>
            <h5 v-else class="colorMode-text">Dark</h5>
            <div class="colorMode-imgWrapper">
                <button  class="colorMode-button" @click="$emit('darkThemeToggle')">
                    <img class="colorMode-image" v-if="themeDark" src="@/assets/icon-sun.svg" alt="">
                    <img class="colorMode-image" v-else src="@/assets/icon-moon.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
      themeDark: Boolean
  }
}
</script>

<style lang="scss">

.darkTheme {
    .headerBar-container {
        .headerBar-title {
            color: #FFFFFF;
        }

        .colorMode-container {
            .colorMode-text {
                color: #FFFFFF;
            }

            .colorMode-text:hover {
                color: #90A4D4;
                cursor: pointer;
            }

            .colorMode-imgWrapper {
                .colorMode-button {
                    .colorMode-image {
                        background-color: red;
                    }
                }
            }
        }
    }
}

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