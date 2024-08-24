/**
 * @generated SignedSource<<01888809055ff0a4d367666defba2efd>>
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getCurrentUser",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
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
    "name": "getCurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getCurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ea07bb4e1e9ddb0a667baed079d84b05",
    "id": null,
    "metadata": {},
    "name": "getCurrentUserQuery",
    "operationKind": "query",
    "text": "query getCurrentUserQuery {\n  getCurrentUser {\n    _id\n    email\n    displayName\n  }\n}\n"
  }
};
})();

node.hash = "34349090245ed2bcbfbd8c60854d5483";

module.exports = node;
