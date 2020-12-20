"use strict";
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["SONG"] = 1] = "SONG";
    ResourceType[ResourceType["MOVIE"] = 2] = "MOVIE";
    ResourceType[ResourceType["AUTHOR"] = 3] = "AUTHOR";
})(ResourceType || (ResourceType = {}));
const resource0 = {
    uid: 1,
    resource_type: ResourceType.BOOK,
    data: { name: "Wuthering Heights" }
};
const resource1 = {
    uid: 2,
    resource_type: ResourceType.AUTHOR,
    data: { name: "Emily Brontë" }
};
console.log(resource0, " | ", resource1);
