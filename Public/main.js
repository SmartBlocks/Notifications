define([
    'jquery',
    'underscore',
    'backbone',
    './apps/Alert/Views/alert'
], function ($, _, Backbone, AlertView) {
    var main = {
        init: function () {
            var base = this;
            //Notification center initialization
            SmartBlocks.basics.show_message = base.methods.notify;
            alert("hey");
        },
        methods:{
            notify: function (message) {
                alert(message);
            },
            alert: function (message) {
                var base = this;
                var alert_view = new AlertView();
                $("body").prepend(alert_view.$el);
                alert_view.init(message);
            },
            confirm: function (message) {

            }
        }
    };

    return main;
});