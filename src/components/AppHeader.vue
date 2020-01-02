<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>class="hidden-md-and-up"
                <v-list-item v-for="item in menuItems" :key="item.title">
                    <v-list-item-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dark class="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <router-link to="/" tag="span" style="cursor:pointer">
                <v-toolbar-title>Ich Lerne Deutsch</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="item in menuItems" text :key="item.title" :to="item.route">
                    <v-icon left v-html="item.icon"/>{{item.title}}
                </v-btn>
                <v-btn text @click.prevent="signout" v-if="isUserAuthenticated">
                    <v-icon left>exit_to_app</v-icon>Выйти
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false
            }
        },
        computed: {
            isUserAuthenticated() {
                return this.$store.getters.isUserAuthenticated
            },
            menuItems() {
                return this.isUserAuthenticated
                    ? [
                    {
                        icon: 'visibility',
                        title: 'Читать',
                        route: '/books',
                    },
                    {
                        icon: 'account_circle',
                        title: 'Кабинет',
                        route: '/profile',
                    },
                ]  :
                  [

                    {
                        icon: 'input',
                        title: 'Войти',
                        route: '/signin',
                    },
                    {
                        icon: 'lock_open',
                        title: 'Регистрация',
                        route: '/signup',
                    },
                ]

            }
        },
        methods: {
            signout() {
                this.$store.dispatch('SIGNOUT')
            }
        }
    }
</script>