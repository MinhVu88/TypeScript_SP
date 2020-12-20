"use strict";
var logDetails0 = function (uid, item) {
    return console.log(item + " has a uid of " + uid);
};
logDetails0(47, "'Oumuamua");
var logDetails1 = function (uid, item) {
    return console.log(item + " has a uid of " + uid);
};
logDetails1(13, "Antikythera mechanism");
var greet0 = function (user) {
    return console.log(user.name + " (" + user.uid + ") says hi");
};
greet0({ name: "Adam Jones", uid: 23 });
var greet1 = function (user) {
    return console.log(user.name + " (" + user.uid + ") says hi");
};
greet1({ name: "Maynard Keenan", uid: 7 });
