export class searchService {

    _apiBase = 'https://dev.yurtah.com/api/v1/';

    async getResponseToServer(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Error`)
        }

        return await res.json();
    }

    getSearchResult(){
        return this.getResponseToServer(`listings/search?q=br`);
    }

}
