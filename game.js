class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",(data)=>{
        gs=data.val();
        })
        console.log(gs)
    }
    updateState(x){
        database.ref('/').update({
            gamestate:x
        })
    }
    async start(){
        console.log(gs);
        if(gs===0){
            form=new Form();
            form.display();
            player=new Player();
            player.getPlayerCount();
        }
    }
}