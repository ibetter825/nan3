function scrollTop(selector) {
    let target = document.body || document.documentElement
    if (selector) {
        let el = document.querySelector(selector)
        target = el[0] || el
    }
    return target.scrollTop
}

function offset(selector) {
    let el = document.querySelector(selector)
    let target = el[0] || el
    return {
        offsetParent: target.offsetParent,
        offsetWidth: target.offsetWidth,
        offsetHeight: target.offsetHeight,
        offsetLeft: target.offsetLeft,
        offsetTop: target.offsetTop
    }
}

export default {
    scrollTop: function(selector) {
        return scrollTop(selector)
    },
    offset: function(selector) {
        return offset(selector)
    }
}