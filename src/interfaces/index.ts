export interface property{
    Propertyid:number
    name:string
    type:string
    location:string
    address:string
    city:string
    price:number
    imageUrl:string
    country:string
}

export interface Newproperty{
    
    name:string
    type:string
    location:string
    address:string
    city:string
    price:number
    imageUrl:string
    country:string
}

export interface updateproperty{
    
    name:string
    type:string
    location:string
    address:string
    city:string
    price:number
    imageUrl:string
    country:string
}

export interface updatedpropertySuccess{
    message:string
}


export interface propertySucces{
    message:string
}

export interface landLords{
    landLordid:number
    name:string
    email:string
    propertyDocs:string
    role:string
    approved:string
    password:string
    IsDeleted:number
    emailSent:number

}
export interface NewlandLords{
    
    name:string
    email:string
    password:string
    propertyDocs:string

}

export interface LoggedlandLords{
    
    email:string
    password:string

}

export interface landlordLoginSuccess{
    
    name:string
    token:string
    role:string
    message:string
}

export interface iusers {
    userid: string,
    name: string,
    password: string,
    email: string,
    role: string,
    IsDeleted:number
}
export interface Newusers {
   
    name: string,
    password: string,
    email: string,
   
}
export interface AddUserSuccess{
    message:string
}
export interface loggedUsers {
    password: string,
    email: string,
    name:string
   
}
export interface loggedUserSuccess{
    token:string
    message:string
    role:string
    name:string
}