<template>
    <div class="userCard-container">
        <div class="userCard-userInfo">
            <div class="userInfo-img">
                <img :src="user.avatar_url" alt="">
            </div>
            <div class="userInfo-all">
                <h4 class="userInfo-username">{{ user.login }}</h4>
                <a :href="`https://github.com/${user.login}`" target="_blank" class="userInfo-userlink">@{{ user.login }}</a>
                <h5 class="userInfo-joined">Joined {{ moment(user.created_at).format('DD MMM YYYY') }}</h5>
            </div>
        </div>
        <p class="userCard-desc">{{ user.bio }}</p>
        <div class="userCard-userStats">
            <div class="userStats-repos">
                <h6 class="userStats-title">Repos</h6>
                <h6 class="userStats-number">{{ user.public_repos }}</h6>
            </div>
            <div class="userStats-followers">
                <h6 class="userStats-title">Followers</h6>
                <h6 class="userStats-number">{{ user.followers }}</h6>
            </div>
            <div class="userStats-following">
                <h6 class="userStats-title">Following</h6>
                <h6 class="userStats-number">{{ user.following }}</h6>
            </div>
        </div>
        <div class="userCard-others">
            <LineInfosUser class="userCard-line" :data="user.location" :image="require('@/assets/icon-location.svg')" />
            <LineInfosUser class="userCard-line" :link="`${ user.blog }`" :data="user.blog" :image="require('@/assets/icon-website.svg')" />
            <LineInfosUser class="userCard-line" :link="`https://www.twitter.com/${ user.twitter_username }`" :data="user.twitter_username" :image="require('@/assets/icon-twitter.svg')" />
            <LineInfosUser class="userCard-line" :data="user.company" :image="require('@/assets/icon-company.svg')" />
        </div>
    </div>
</template>

<script>
import LineInfosUser from './LineInfosUser.vue'
export default {

    components: {
        LineInfosUser
    },

    data () {
        return {
            user: {
            "login": "octocat",
            "id": 1,
            "node_id": "MDQ6VXNlcjE=",
            "avatar_url": "https://avatars.githubusercontent.com/u/8194590?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false,
            "name": "monalisa octocat",
            "company": "GitHub",
            "blog": "https://github.com/blog",
            "location": "San Francisco",
            "email": "octocat@github.com",
            "hireable": false,
            "bio": "There once was...",
            "twitter_username": "monatheoctocat",
            "public_repos": 2,
            "public_gists": 1,
            "followers": 20,
            "following": 0,
            "created_at": "2008-01-14T04:33:35Z",
            "updated_at": "2008-01-14T04:33:35Z"
            }

        }
    },

    methods: {
        initUser (response) {
            this.user = response
        }
    },

    mounted () {
        Bus.$on('userReceived', this.initUser)
    }
}
</script>

<style>

.userCard-container {
    margin-top: 8px;
    padding: 32px 25px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: 15px;
    background-color: #FFFFFF;
    width: 85%;
}

.userCard-userInfo {
    margin-bottom: 15px;
    display: flex;
}

.userInfo-all {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    text-align: left;
}

.userInfo-userlink {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    text-transform: lowercase;
    color: #0079FF;
}

.userInfo-joined {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: #697C9A;
}

.userCard-desc {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
    color: #4B6A9B;
}

.userCard-userStats {
    margin-top: 10px;
    margin-bottom: 12px;
    padding: 20px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: #F6F8FF;
    border-radius: 10px;
    height: 85px;
}

.userStats-title {
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    color: #4B6A9B;
}

.userStats-number {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: black;
}

.userCard-others {
    margin-top: 12px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
}

.userCard-userCategorie {
    padding: 8px 0;
    display: flex;
    max-width: 100%;
}

.others-imgWrapper {
    padding-right: 20px;

}

.userInfo-img {
    margin-right: 20px;
    display: flex;
    width: 20%;
    align-items: center;
}

.userInfo-img img {
    width: 100%;
    border-radius: 100%;
}

.others-title {
    font-size: 13px;
    font-weight: 400;
    color: #4B6A9B;
}

.others-link {
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    color: #4B6A9B;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.disabled {
    opacity: 0.5;
}

@media (min-width: 750px) {

    .userCard-container {
        position: relative;
        padding-left: 200px;
    }

    .userInfo-img {
        position: absolute;
        left: 35px;
        max-width: 125px;
    }

    .userCard-others {
        padding-bottom: 0;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .userCard-line {
        width: 50%;
    }

    .others-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .userInfo-all {
        align-items: flex-start;
    }

    .userCard-desc {
        text-align: left;
    }
}

</style>