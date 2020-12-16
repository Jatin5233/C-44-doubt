class Form{
        constructor(){
        this.title=createElement('h1');
        this.input=createInput('Name');
        this.button=createButton('PLAY');
        this.greeting=createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Tick Tack Toe");
        this.title.position(displayWidth/2,20);
        this.input.position(500,300);
        this.button.position(500,400);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            p1++;
            player.updateCount(p1);
        }
        )

    }
}