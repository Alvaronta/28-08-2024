/**
 * @generated SignedSource<<bb08f856e814e48f7281d9052b8ecba5>>
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
    "concreteType": "Entry",
    "kind": "LinkedField",
    "name": "getEntry",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "portfolio",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contact",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "EntryQuestion",
        "kind": "LinkedField",
        "name": "questions",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "question",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "response",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
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
    "name": "getEntryQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getEntryQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dbb5baca8c3aa9bfa0f52f3d96172807",
    "id": null,
    "metadata": {},
    "name": "getEntryQuery",
    "operationKind": "query",
    "text": "query getEntryQuery(\n  $id: String!\n) {\n  getEntry(id: $id) {\n    _id\n    name\n    portfolio\n    age\n    country\n    contact\n    questions {\n      question\n      response\n    }\n    createdAt\n  }\n}\n"
  }
};
})();

node.hash = "8a44355be6247f88e5d6dfeed8413811";

module.exports = node;
