import VueUpload from './components/vue-upload'

const upload = {
    install(Vue,options){
        Vue.component(VueUpload.name,VueUpload)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(pagination)
}

export default upload;