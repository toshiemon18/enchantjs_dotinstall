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
        bear.frame = 1;
        
        bear.addEventListener('enterframe', function() {
            if (core.input.left) this.x -= 5;
            if (core.input.right)this.x += 5;
            if (core.input.up) this.y -= 5;
            if (core.input.down) this.y += 5;
        });

        bear.on('touchstart', function() {
            core.rootScene.removeChild(this);
        });

        core.rootScene.on('touchstart', function(e) {
            bear.x = e.x;
            bear.y = e.y;
        });
        core.rootScene.addChild(bear);

    }
    core.start();
};
