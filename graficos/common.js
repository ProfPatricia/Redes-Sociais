const getCSS = (variavel) => {
    return getCompjutedsStyle(document.body).getPropertyValue(variavel)
}

export {getCSS}
