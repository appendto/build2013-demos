/*

    Amplify.js Ajax Definitions.  

    More info: http://amplifyjs.com
    Created by: http://appendto.com

    Learn about mocking requests: http://www.elijahmanor.com/2012/10/mocking-jquery-ajax-with-amplifyjs.html

    Stack Exchange API: http://api.stackexchange.com

*/

var api_url = "https://api.stackexchange.com/2.1/";
var site_name = "stackoverflow";
var site = "?order=asc&site=" + site_name;


// pull back a specific stackoverflow user JSON object. 
// More info: http://api.stackexchange.com/docs/users-by-ids
amplify.request.define("stacker.User", "ajax", {
    url: api_url + "users/{id}" + site,
    type: "GET"
});

// pull back all the badges for a specific Stackoverflow user JSON object
// More info: http://api.stackexchange.com/docs/badges-on-users
amplify.request.define("stacker.User.Badges", "ajax", {
    url: api_url + "users/{id}/badges" + site,
    type: "GET",
    cache: "true"
});

// pull back all the tags for a specific Stackoverflow user JSON object
// More info: http://api.stackexchange.com/docs/tags-on-users
amplify.request.define("stacker.User.Tags", "ajax", {
    url: api_url + "users/{id}/tags?site=" + site_name + "&order=desc&sort=popular",
    type: "GET"
});