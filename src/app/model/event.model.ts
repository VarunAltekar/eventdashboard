/*export interface IObjectKeys {
    [key: string]: string | number | string[] | Session[] | Object;

}*/
export interface EventModel /*extends IObjectKeys*/ {
    id: number,
    name: string,
    date: string,
    time: string,
    price: number,
    imageUrl: string,
    onlineUrl?: string,
    location?: {
        address: string,
        city: string,
        country: string
    }
    session?: Session[]
}

export interface Address{

}

export interface Session /*extends IObjectKeys*/ {
    id:number,
    name:string,
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters: string[]
}