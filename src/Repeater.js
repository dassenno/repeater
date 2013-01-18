Crafty.c("Repeater", {
    init : function() {
        this._realDelays = [];
        this.bind("EnterFrame", function() {
            var now = new Date().getTime();
            for(var index in this._realDelays) {
                var item = this._realDelays[index];
                if(!item.triggered && item.start + item.delay + item.pause < now) {
                    item.triggered=true;
                    item.func.call(this);
                    if( item.rep==-1 || item.rep>0 || item.cleared!=true ) {
                        if( item.rep > 0 ) item.rep--;

                        this._realDelays.push({
                            start : new Date().getTime(),
                            func : item.func,
                            rep : item.rep,
                            delay : item.delay,
                            triggered : false,
                            pauseBuffer: 0,
                            pause: 0
                        });
                    }
                    //remove if cleared
                    if(item.cleared == true) this._realDelays=null;
                }
            }
        });
        this.bind("Pause", function() {
            var now = new Date().getTime();
            for(var index in this._realDelays) {
                var item = this._realDelays[index];
                item.pauseBuffer = now;
            }
        });
        this.bind("Unpause", function() {
            var now = new Date().getTime();
            for(var index in this._realDelays) {
                var item = this._realDelays[index];
                item.pause += now-item.pauseBuffer;
            }
        });
    },
    /**@
     * Set a new repeater.
     * @param func the callback function
     * @param delay the delay in ms
     * @param repeat the number of repetition, -1 for infinite loop
     */
    repeat : function(func, delay, repeat) {
        return this._realDelays.push({
            start : new Date().getTime(),
            func : func,
            rep : repeat,
            delay : delay,
            triggered : false,
            pauseBuffer: 0,
            pause: 0,
            cleared: false
        });
    },
    stopRepeating : function() {
        for(var index in this._realDelays) {
            var item = this._realDelays[index];
            item.cleared = true;
        }
    }
});
