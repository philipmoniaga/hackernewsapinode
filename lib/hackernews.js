var REST_ROOT = 'https://hacker-news.firebaseio.com/v0/';

var request = require('request');

var HackerNews = function(){
}

HackerNews.prototype = {
    test: function() {
        console.log("test");
    },
    get: function(path, params, callback) {
        return this.request("GET", path, params, callback);
    },
    respond: function(callback) {
        return function(error, response, body) {
            if(!error) {
                var data = JSON.parse(body);
                return callback(response, data);
            }
        }
    },
    request: function(method, path, params, callback) {
        var params = params;
        var path = REST_ROOT + path + '.json';

        if(method == "GET") {
            request(path, this.respond(callback));
        }
    },
    item: function(id, callback) {
        var path = "item/" + id;
        this.get(path, {}, callback);
    },
    user: function(id, callback) {
        var path = "user/" + id;
        this.get(path, {}, callback);
    },
    showStories: function(callback) {
        var path = "showstories";
        this.get(path, {}, callback);
    },
    newStories: function(callback) {
        var path = "newstories";
        this.get(path, {}, callback);
    },
    topStories: function(callback) {
        var path = "topstories";
        this.get(path, {}, callback);
    }
}

module.exports = HackerNews;