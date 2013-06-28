/// <reference path="//Microsoft.WinJS.1.0/js/ui.js" />
/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
require.config({
    paths: {
        jquery: "../Scripts/jquery-2.0.2",
        ko: "../Scripts/knockout-2.2.1",
        users: "modules/users"
    }
});

require(["jquery", "ko", "users"], function ($, ko, users) {

    var ids = [6380, 1535478, 405892, 54680, 5];

    users.getUsers(ids);

    setInterval(function () {
        $.each(users.users(), function (index, user) {
            user.reputation(5 + user.reputation());
            user.answer_count(1 + user.answer_count());
        });
    }, 3000);

    var App = function () {
        this.users = users.users;
    }

    $(document).ready(function () {
        ko.applyBindings(new App());
    });

});