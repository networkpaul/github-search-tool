<template>
    <div class="searchBar-container">
        <div class="searchBar-left">
            <div class="searchBar-img">
                <img src="@/assets/icon-search.svg" alt="">
            </div>
            <div class="searchBar-input">
                <input @keydown.enter="search" v-model="info" type="search" name="git-username" id="git-username" placeholder="Search GitHub username">
            </div>
        </div>
        <div class="searchBar-right">
            <div class="searchBar-button">
                <input @click="search" type="submit" value="Search">
            </div>
            <p v-if="error" class="searchBar-errorMessage">No results</p>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            info: "",
            error: false
        }
    },

    methods: {

        search () {
            this.error = false
            axios
                .get(`https://api.github.com/users/${this.info}`)
                .then(response => (Bus.$emit('userReceived', response.data)))
                .catch(() => (this.error = true))
        }
    }
}

</script>

<style lang="scss">

.darkTheme {
    .searchBar-container {
        background-color: #1E2A47;

        .searchBar-left {
            background-color: #FFFFFF;
        }
    }
}

.searchBar-container {
    margin-top: 18px;
    margin-bottom: 8px;
    padding: 7px 7px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    min-width: 320px;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    background-color: #FFFFFF;
}

.searchBar-left {
    display: flex;
    justify-content: center;
    align-items: center;
}

.searchBar-right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.searchBar-input input {
    padding: 0;
    margin: 0;
    padding-left: 10px;
    width: 190px;
    text-align: left;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
    color: #4B6A9B;
    border: none;
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
}

.searchBar-input input::-webkit-search-decoration,
.searchBar-input input::-webkit-search-cancel-button,
.searchBar-input input::-webkit-search-results-button,
.searchBar-input input::-webkit-search-results-decoration { display: none;}

.searchBar-input input::placeholder {
    color: #4B6A9B;
}

.searchBar-button input {
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    background-color: #0079FF;
    border: none;
    border-radius: 10px;
}

.searchBar-errorMessage {
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    color: #F74646;
}

@media (min-width: 900px) {

    .searchBar-container {
        justify-content: space-between;
        padding: 20px;
        width: 50%;
        max-width: 730px;
    }

    .searchBar-left {
        justify-content: flex-start;
        width: 40%;
    }

    .searchBar-right {
        justify-content: flex-end;
        width: 40%;
    }

    .searchBar-right :nth-child(1) { 
        order: 2; 
    }

    .searchBar-right :nth-child(2) {
        order: 1; 
    }

    .searchBar-img {
        margin-right: 12px;
    }

    .searchBar-input {
        margin-left: 12px;
        width: 225px;
    }

    .searchBar-input input {
        width: 225px;
    }

    .searchBar-button input:hover {
        background-color: #60ABFF;
        cursor: pointer;
    }

    .searchBar-errorMessage {
        margin-right: 12px;
    }




}

</style>