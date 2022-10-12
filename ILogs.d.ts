interface ILogs {
_id : {
toHexString : function
toString : function
toJSON : function
equals : function
getTimestamp : function
toExtendedJSON : function
inspect : function
}
data : {
RR : number
RT : number
INF : number
MID : number
DATA : object
}
createdAt : Date
updatedAt : Date
__v : number
}

export default ILogs