interface ITournaments {
_id : {
toHexString : function
toString : function
toJSON : function
equals : function
getTimestamp : function
toExtendedJSON : function
inspect : function
}
ID : number
ChampionshipGId : string
ChampionshipId : number
Comment : {
2 : string
27 : string
}
GID : string
IsDeleted : boolean
IsExpressDenied : boolean
IsFavorite : boolean
ItemFreshDate : number
Name : {
2 : string
27 : string
}
OrderNumber : number
Profits : {
}
ReferenceId : number
__v : number
createdAt : Date
updatedAt : Date
}

export default ITournaments