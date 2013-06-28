define(["jquery", "ko"], function ($, ko) {

    "use strict";

    var user_list = ko.observableArray();
    var observableProps = ["reputation", "answer_count"];

    function retrieveUsers(ids) {
        $.ajax({
            url: "http://api.stackoverflow.com/1.1/users/" + ids.join(";"),
            success: function (response) {
                $.each(response.users, function (index, user) {
                    addObservables(user, observableProps);
                    user_list.push(user);
                });
            }
        });
    }

    function addObservables(obj, props) {
        props.forEach(function (prop) {
            obj[prop] = ko.observable(obj[prop]);
        });
    }

    return {
        users: user_list,
        getUsers: retrieveUsers
    }

});