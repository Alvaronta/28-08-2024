/**
 * @generated SignedSource<<32dfb1657a7a91bb5bef6cfc45355c5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Tourney",
    "kind": "LinkedField",
    "name": "getTourney",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
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
        "name": "time",
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
        "name": "user",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "getTourneyQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getTourneyQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3048da695258a1c10c5df4a67f86b99d",
    "id": null,
    "metadata": {},
    "name": "getTourneyQuery",
    "operationKind": "query",
    "text": "query getTourneyQuery(\n  $id: String!\n) {\n  getTourney(id: $id) {\n    _id\n    date\n    thumbnail\n    time\n    url\n    user\n  }\n}\n"
  }
};
})();

node.hash = "8b0b6c20a1804a0a8346432ae4c4e5a1";

module.exports = node;
