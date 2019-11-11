export const mapper = (data,type) => {
    if(data){
        return data.filter(item => {
            if(item.type === type){
                return item;
            }
        })
    }

    return null;
}

