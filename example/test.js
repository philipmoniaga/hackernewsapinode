var HackerNews = require("../lib/hackernews");

var bot = new HackerNews();

bot.topStories( function(response, data) {
    console.log(data);
    bot.item(data[0], function(response, data) {
        console.log(data);
    })
});