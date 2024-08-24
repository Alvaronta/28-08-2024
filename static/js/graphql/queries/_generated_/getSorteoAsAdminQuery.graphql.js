/**
 * @generated SignedSource<<7699d767f582385a8fe0548685454f1c>>
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
    "concreteType": "Sorteo",
    "kind": "LinkedField",
    "name": "getSorteoAsAdmin",
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
        "name": "endIn",
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
    "name": "getSorteoAsAdminQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getSorteoAsAdminQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c480d8d34e8e8c8afc204828b19581f5",
    "id": null,
    "metadata": {},
    "name": "getSorteoAsAdminQuery",
    "operationKind": "query",
    "text": "query getSorteoAsAdminQuery(\n  $sorteoId: String!\n) {\n  getSorteoAsAdmin(sorteoId: $sorteoId) {\n    _id\n    enabled\n    title\n    description\n    thumbnail\n    tweet\n    endIn\n  }\n}\n"
  }
};
})();

node.hash = "379a89340e817961e1f7ea2fd76aacf7";

module.exports = node;
