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
            if (core.input.right) this.x += 5;

            // intersect
            if (this.intersect(enemy)) {
                label.text = 'hit!';
            }

            //within
            if (this.within(enemy, 10)) {
                //label.text = 'HIT!';
            }
        });
        
        var enemy = new Sprite(32, 32);
        enemy.image = core.assets["chara1.png"];
        enemy.x = 80; 
        enemy.y = 0;
        enemy.frame = 5;

        var label = new Label();
        label.x = 300;
        label.y = 5;
        label.color = 'red';
        label.font = '14px Arial';
        
        core.rootScene.addChild(label);
        core.rootScene.addChild(bear);
        core.rootScene.addChild(enemy);
    }
    core.start();
};
