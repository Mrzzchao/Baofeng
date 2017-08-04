export default {
    bind(el, binding) {
        let defaultUrl = 'http://tccache.500.com/mobile/touch/images/bifen/face.png'
        console.log(binding);
        el.src = binding.value
        el.addEventListener('error', () => {
            el.src = defaultUrl
        })
    }
}
