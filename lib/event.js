WebSocketRails.Event = (function() {
  function Event(data, _at_success_callback, _at_failure_callback) {
    var attr;
    this.success_callback = _at_success_callback;
    this.failure_callback = _at_failure_callback;
    this.name = data[0];
    attr = data[1];
    if (attr != null) {
      this.id = attr['id'] != null ? attr['id'] : ((1 + Math.random()) * 0x10000) | 0;
      this.channel = attr.channel != null ? attr.channel : void 0;
      this.data = attr.data != null ? attr.data : attr;
      this.token = attr.token != null ? attr.token : void 0;
      this.connection_id = data[2];
      if (attr.success != null) {
        this.result = true;
        this.success = attr.success;
      }
    }
  }

  Event.prototype.is_channel = function() {
    return this.channel != null;
  };

  Event.prototype.is_result = function() {
    return typeof this.result !== 'undefined';
  };

  Event.prototype.is_ping = function() {
    return this.name === 'websocket_rails.ping';
  };

  Event.prototype.serialize = function() {
    return JSON.stringify([this.name, this.attributes()]);
  };

  Event.prototype.attributes = function() {
    return {
      id: this.id,
      channel: this.channel,
      data: this.data,
      token: this.token
    };
  };

  Event.prototype.run_callbacks = function(_at_success, _at_result) {
    this.success = _at_success;
    this.result = _at_result;
    if (this.success === true) {
      return typeof this.success_callback === "function" ? this.success_callback(this.result) : void 0;
    } else {
      return typeof this.failure_callback === "function" ? this.failure_callback(this.result) : void 0;
    }
  };

  return Event;

})();