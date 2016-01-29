enchant();

window.onload = function() {
    var core = new Core(320, 320);
    core.preload("chara1.png");
    core.fps = 15;
    core.onload = function() {
        var Bear = Class.create(Sprite, { 
            initialize: function(x, y) {
                Sprite.call(this, 32, 32);
                this.x = x;
                this.y = y;
                this.image = core.assets['chara1.png'];
                this.on('enterframe', function() {
                    this.x += 5;
                });
                core.rootScene.addChild(this);
            }
        });  

        var bear = new Bear(0, 0);
    }
    core.start();
};
