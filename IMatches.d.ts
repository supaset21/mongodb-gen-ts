interface IMatches {
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
AwayTeamLogoId : number
AwayTeamName : {
2 : string
27 : string
}
AwayTeamScore : number
AwayTeamShirtId : number
AwayTeamStirtType : number
BetStatus : boolean
Comment : {
2 : string
27 : string
}
CurrentPeriod : number
CurrentPeriodId : string
DeactivationDate : number
EventAddedExtraTime : number
EventDateTicks : number
HasLiveTV : boolean
HasScoutURL : boolean
Head2HeadId : number
HeadToHeadSportId : number
HomeTeamLogoId : number
HomeTeamName : {
2 : string
27 : string
}
HomeTeamScore : number
HomeTeamShirtId : number
HomeTeamStirtType : number
IsActive : boolean
IsBlockedUp : boolean
IsExpressDenied : boolean
IsFavorite : boolean
IsLiveFinished : boolean
IsLiveStarted : boolean
IsOrdinarDenied : boolean
ItemFreshDate : number
LiveEventSecond : number
LiveEventStatus : {
2 : string
27 : string
}
LiveEventTime : number
LiveGameScore : string
LiveMatchStatus : {
2 : string
27 : string
}
LiveScoresRCard : string
LiveServer : number
LiveSetAltScore : string
LiveSetScore : string
MatchInfo : {
2 : string
27 : string
}
MatchType : number
Name : {
2 : string
27 : string
}
OrderNumber : number
ParentEventid : number
PartTypeId : number
PeriodId : number
Profits : {
}
ReferenceId : number
ShortId : number
StakeCount : number
TournamentGId : string
TournamentId : number
__v : number
createdAt : Date
updatedAt : Date
}

export default IMatches