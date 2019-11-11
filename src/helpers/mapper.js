export const mapper = (data,type) => {
    return data.filter(item => (item.type === type))
}

