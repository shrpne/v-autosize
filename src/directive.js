import autosize from 'autosize';

export default {
    bind(el, binding) {
        if (el.tagName === 'TEXTAREA') {
            autosize(el);
        }
    },
    componentUpdated(el, binding, vnode) {
        if (el.tagName === 'TEXTAREA') {
            autosize.update(el);
        }
    },
    unbind(el) {
        autosize.destroy(el);
    },
};
