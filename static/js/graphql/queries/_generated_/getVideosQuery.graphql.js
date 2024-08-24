/**
 * @generated SignedSource<<330edd79c33fa885667ff43f07f2d3fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Video",
    "kind": "LinkedField",
    "name": "getVideos",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "thumbnail",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getVideosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getVideosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a475a44d6c0fc39696d6e3d979412dac",
    "id": null,
    "metadata": {},
    "name": "getVideosQuery",
    "operationKind": "query",
    "text": "query getVideosQuery {\n  getVideos {\n    id\n    title\n    thumbnail\n    url\n    date\n  }\n}\n"
  }
};
})();

node.hash = "58740a8cc3aafbc4bffea326535ef17a";

module.exports = node;
