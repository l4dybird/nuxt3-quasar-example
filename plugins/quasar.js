import { Quasar } from 'quasar'
import * as All from 'quasar'
import langJa from 'quasar/lang/ja'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Quasar, {
        config: {},
        components: All,
        plugins: {},
        // ここは Quasar 側の lang 設定なので好みです。
        lang: langJa
    })
});
