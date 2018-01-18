import VueUpload from './components/vue-upload'

const upload = {
    install(Vue,options){
        Vue.component(VueUpload.name,VueUpload)
    }
}

export default upload;