class Player{
    constructor(){
        this.name=null;
        this.index=null;
    }
    getPlayerCount(){
        var playerRef=database.ref('playercount');
        playerRef.on("value",(data)=>{
            p1=data.val();
        })
    }
    updateCount(x){
        database.ref('/').update({
            Players:x
        })
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
                   })
    }
}