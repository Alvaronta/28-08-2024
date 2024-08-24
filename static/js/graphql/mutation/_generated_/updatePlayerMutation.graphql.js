/**
 * @generated SignedSource<<4037dbff36a54382209b9ee346f79bac>>
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
  },
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "payload"
      }
    ],
    "concreteType": "Player",
    "kind": "LinkedField",
    "name": "updatePlayer",
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
    "name": "updatePlayerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updatePlayerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ab439afedb48ab4bcdca4e88e4462d27",
    "id": null,
    "metadata": {},
    "name": "updatePlayerMutation",
    "operationKind": "mutation",
    "text": "mutation updatePlayerMutation(\n  $id: String!\n  $payload: UpdatePlayerDTO!\n) {\n  updatePlayer(id: $id, payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "5cb307742eda600b58f4c82294429363";

module.exports = node;
