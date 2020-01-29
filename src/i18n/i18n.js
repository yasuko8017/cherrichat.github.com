import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tw from './lang/tw.json'
import en from './lang/en.json'

Vue.use(VueI18n)

// 預設語系
const locale = 'tw'

const i18n = new VueI18n({
    locale,
    messages: { en, tw }
})

export default i18n
