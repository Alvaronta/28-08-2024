/**
 * @generated SignedSource<<7ecac0c1ceea9c8de08c68a56b9350b4>>
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
    "concreteType": "EventWinner",
    "kind": "LinkedField",
    "name": "updateEventWinner",
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
    "name": "updateEventWinnerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateEventWinnerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "66befde0cc23c926c92be4908d5c4766",
    "id": null,
    "metadata": {},
    "name": "updateEventWinnerMutation",
    "operationKind": "mutation",
    "text": "mutation updateEventWinnerMutation(\n  $id: String!\n  $payload: UpdateEventWinnerDTO!\n) {\n  updateEventWinner(id: $id, payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "605be954ae92ec0b036f12159a43fa47";

module.exports = node;
