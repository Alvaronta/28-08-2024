/**
 * @generated SignedSource<<7c31f13289059341bd64a107efb290d9>>
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
    "name": "sorteoId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "sorteoId",
        "variableName": "sorteoId"
      }
    ],
    "concreteType": "SorteoMetadata",
    "kind": "LinkedField",
    "name": "getSorteo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Sorteo",
        "kind": "LinkedField",
        "name": "sorteo",
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
            "name": "enabled",
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
            "name": "description",
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
            "name": "tweet",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "winner",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endIn",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "participants",
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
    "name": "getSorteoQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getSorteoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c8fd0d2fd71e5b5553c328ecb9ab38ae",
    "id": null,
    "metadata": {},
    "name": "getSorteoQuery",
    "operationKind": "query",
    "text": "query getSorteoQuery(\n  $sorteoId: String!\n) {\n  getSorteo(sorteoId: $sorteoId) {\n    sorteo {\n      _id\n      enabled\n      title\n      description\n      thumbnail\n      tweet\n      winner\n      endIn\n    }\n    participants\n  }\n}\n"
  }
};
})();

node.hash = "c2b10b53c5fac466469a8478381046d7";

module.exports = node;
