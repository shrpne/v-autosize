import autosize from 'autosize';

/**
 * @type {import('vue').Directive}
 */
const vAutosize = {
    mounted(el, binding, vnode) {
        if (el.tagName === 'TEXTAREA') {
            binding.instance.$nextTick(() => {
                autosize(el);
            });
        }
    },
    updated(el, binding, vnode) {
        if (el.tagName === 'TEXTAREA') {
            binding.instance.$nextTick(() => {
                autosize.update(el);
            });
        }
    },
    unmounted(el) {
        autosize.destroy(el);
    },
};

export default vAutosize;
