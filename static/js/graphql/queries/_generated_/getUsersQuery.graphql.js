/**
 * @generated SignedSource<<fb552240c32b6fa061de5138aec957f4>>
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
    "name": "getUsers",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canPost",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canGiveaway",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "canCreateUsers",
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
    "name": "getUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8fe9556874316d565c2d27949e20f3d0",
    "id": null,
    "metadata": {},
    "name": "getUsersQuery",
    "operationKind": "query",
    "text": "query getUsersQuery {\n  getUsers {\n    _id\n    email\n    displayName\n    canPost\n    canGiveaway\n    canCreateUsers\n  }\n}\n"
  }
};
})();

node.hash = "59377db0dda2dd966c6b6ddfe9d89a30";

module.exports = node;
