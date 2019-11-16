export interface StoreTypes {
    result: any,
    loading: boolean,
    bannerToggler: string,
    contentToggler: string,
    neighborhood: Array<any>,
    location: Array<any>,
    error: any,
    userSelected: string,
}

export interface DispatchTypes{
    toggleBannerPanel: (status:string) => void;
}