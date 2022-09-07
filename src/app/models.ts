export interface Order{
    name:string
    mobile:number
    uuid:string
    orders:Item[]
}

export interface Item{
    item:string
    quantity:number
}