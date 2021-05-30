import Loading from './loading.vue'
import { createApp } from 'vue'

const loading = {
    mounted(el, binding) {
        console.log(el, binding, 1111)
        const app = createApp(Loading)
        const instance = app.mount(document.createElement('div'))
        const title = binding.arg
        if(title) {
            instance.setTitle(title)
        }
        el.instance = instance
        if(binding.value) {
            append(el)
        }
    },
    updated(el, binding) {
        if (binding.value !== binding.oldValue) {
            binding.value ? append(el) : remove(el)
        }
    }
}

function append(el) {
    const elStyle = getComputedStyle(el)
    const parseStyle = ['absolute', 'fixed', 'relative']
    if (!parseStyle.includes(elStyle.position)) {
        el.style.position = 'relative'
    }
    el.appendChild(el.instance.$el)
}

function remove(el) {
    el.style.position = ''
    el.removeChild(el.instance.$el)
}
export default loading