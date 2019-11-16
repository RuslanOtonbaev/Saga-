export const getRandomImageFrom = (min:number,max:number):number => {
    return Math.floor(Math.random() * (max - min + max)) + min;
}