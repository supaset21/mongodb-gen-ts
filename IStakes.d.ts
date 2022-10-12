interface IStakes {
_id : {
toHexString : function
toString : function
toJSON : function
equals : function
getTimestamp : function
toExtendedJSON : function
inspect : function
}
EventId : number
ID : number
StakeTypeId : number
EventOrderingId : number
Factor : number
FactorDelta : number
IsActive : boolean
IsCashoutEnabled : boolean
IsDeleted : boolean
IsExpressDenied : boolean
IsExtended : boolean
IsFavorite : boolean
IsIndividual : boolean
IsLive : boolean
IsMain : boolean
IsSuperMain : boolean
IsVisible : boolean
IsVisibleForClient : boolean
ItemFreshDate : number
Name : {
2 : string
27 : string
}
OrderNumber : number
ShowSign : boolean
StakeCode : number
StakeFullName : {
2 : string
27 : string
}
StakeOrderingId : number
StakeShortName : {
2 : string
27 : string
}
StakeTypeName : {
2 : string
27 : string
}
StakeTypeShortName : {
2 : string
27 : string
}
__v : number
createdAt : Date
updatedAt : Date
}

export default IStakes