function scrollTop() {
    let top = 0
    if (document.body && document.body.scrollTop)
        top = document.body.scrollTop;
    else
        top = document.documentElement.scrollTop;
    return top
}

export default {
    scrollTop: function() {
        return scrollTop()
    }
}