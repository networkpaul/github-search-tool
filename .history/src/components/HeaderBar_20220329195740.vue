<template>
    <div class="headerBar-container">
        <h3 class="headerBar-title">devfinder</h3>
        <div class="colorMode-container">
            <h5 class="colorMode-text">Dark</h5>
            <div class="colorMode-imgWrapper">
                <button @click="toggleTheme"><img src="@/assets/icon-moon.svg" alt=""></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            theme: ''
        };
},

toggleTheme() {
            this.theme = this.theme == 'darkMode' ? '' : 'darkMode';
            document.documentElement.setAttribute('data-theme', this.theme);
            localStorage.setItem('theme', this.theme);
}

</script>

<style>

.headerBar-container {
    padding-bottom: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
}

.headerBar-title {
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
}

.colorMode-container {
    display: flex;
    justify-content: space-between;
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
}

.colorMode-imgWrapper button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

@media (min-width: 750px) {

    .colorMode-container {
        justify-content: space-evenly;
    }
}


</style>