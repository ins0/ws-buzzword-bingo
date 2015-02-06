var command = function(type, data, isBroadcast) {
    this.type = type || 'missingTypeCommand';
    this.data = data || null;
    this.sender = buzzwordObject.me;
    this.isBroadcast = isBroadcast || false;
};

command.prototype.toJSON = function(){
    return JSON.stringify({
        isBroadcast: this.isBroadcast,
        sender: this.sender,
        type: this.type,
        data: this.data
    });
};

command.prototype.fromJSON = function(json){
    var obj = JSON.parse(json);
    this.isBroadcast = obj.isBroadcast;
    this.data = obj.data;
    this.sender = obj.sender;
    this.type = obj.type;
};
