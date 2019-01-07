<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar color="cyan" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>

                        <v-toolbar-title>Inbox</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>search</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-list two-line>
                        <v-subheader>
                            Today
                        </v-subheader>
                        <template v-for="(item, index) in listItems">
                            <v-divider
                                    :inset="inset"
                                    :key="index"
                            ></v-divider>
                            <v-list-tile
                                    :key="item.title"
                                    avatar
                                    @click=""
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        mounted () {
            this.$store.dispatch('loadItems')
        },
        computed: {
            ...mapState([
                'listItems'
            ])
        }
    }
</script>
<style>

</style>
