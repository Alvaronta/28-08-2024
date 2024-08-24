/**
 * @generated SignedSource<<efab21303f04564b133145efe8f40017>>
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
    "concreteType": "Sorteo",
    "kind": "LinkedField",
    "name": "getSorteos",
    "plural": true,
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getSorteosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getSorteosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e8de0c84e64ea50505d9cf7aaafd68c6",
    "id": null,
    "metadata": {},
    "name": "getSorteosQuery",
    "operationKind": "query",
    "text": "query getSorteosQuery {\n  getSorteos {\n    _id\n    enabled\n    title\n    description\n    thumbnail\n    tweet\n    winner\n    endIn\n  }\n}\n"
  }
};
})();

node.hash = "bfbaf9a69ae608f0376d81db2052a507";

module.exports = node;
