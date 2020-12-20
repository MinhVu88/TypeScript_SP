enum ResourceType {
  BOOK,
  SONG,
  MOVIE,
  AUTHOR
}

interface Resource1<T> {
  uid: number;
  resource_type: ResourceType;
  data: T;
}

const resource0: Resource1<object> = {
  uid: 1,
  resource_type: ResourceType.BOOK,
  data: { name: "Wuthering Heights" }
};

const resource1: Resource1<object> = {
  uid: 2,
  resource_type: ResourceType.AUTHOR,
  data: { name: "Emily Brontë" }
};

console.log(resource0, " | ", resource1);
