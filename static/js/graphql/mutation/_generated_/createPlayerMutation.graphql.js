/**
 * @generated SignedSource<<b5008c6709e3573c4b74f0b5b1cc9bfe>>
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
    "name": "payload"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "payload"
      }
    ],
    "concreteType": "Player",
    "kind": "LinkedField",
    "name": "createPlayer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
    "name": "createPlayerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createPlayerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "216d764e812776d38f4dd01ba957f257",
    "id": null,
    "metadata": {},
    "name": "createPlayerMutation",
    "operationKind": "mutation",
    "text": "mutation createPlayerMutation(\n  $payload: CreatePlayerDTO!\n) {\n  createPlayer(payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "02f0819311d32dce70901a3c39a3e1e3";

module.exports = node;
