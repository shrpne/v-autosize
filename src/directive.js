import autosize from 'autosize';

export default {
    bind(el, binding, vnode) {
        if (el.tagName === 'TEXTAREA') {
            vnode.context.$nextTick(() => {
                autosize(el);
            });
        }
    },
    componentUpdated(el, binding, vnode) {
        if (el.tagName === 'TEXTAREA') {
            vnode.context.$nextTick(() => {
                autosize.update(el);
            });
        }
    },
    unbind(el) {
        autosize.destroy(el);
    },
};
