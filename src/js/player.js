var player = function(username) {
    this.username = username;
    this.color = this.createRandomColor();
    this.id = this.createRandomId();
};

player.prototype.createRandomColor = function() {
    return (function lol(m, s, c) {
        return s[m.floor(m.random() * s.length)] +
            (c && lol(m, s, c - 1));
    })(Math, '3456789ABCDEF', 4);
}

player.prototype.createRandomId = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0;
        var v = (c == 'x' ? r : (r&0x3|0x8));
        return v.toString(16);
    });
};

player.prototype.getUsername = function(){ return this.username; };
player.prototype.getColor = function(){ return this.color; };
player.prototype.getId = function(){ return this.id; };
