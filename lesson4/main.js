enchant();

window.onload = function() {
    var core = new Core(320, 320);
    core.preload("chara1.png");
    core.fps = 15;
    core.onload = function() {
        var bear = new Sprite(32, 32);
        bear.image = core.assets["chara1.png"];
        bear.x = 0;
        bear.y = 0;
        
        bear.addEventListener('enterframe', function() {
            this.x += 10;
            if (this.x > 320) this.x = 0;
            this.rotate(6);
            this.scale(1.01, 1.01);
        });
        core.rootScene.addChild(bear);

    }
    core.start();
};
