/**
 * @generated SignedSource<<94ef233a1cd14a4e1f1160096bed63b1>>
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
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "updateEvent",
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
    "name": "updateEventMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateEventMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "773e2ada6fe5da1b9c2310d5ad030100",
    "id": null,
    "metadata": {},
    "name": "updateEventMutation",
    "operationKind": "mutation",
    "text": "mutation updateEventMutation(\n  $id: String!\n  $payload: UpdateEventDTO!\n) {\n  updateEvent(id: $id, payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "b772b938ac6d9f8a60923d69ba4275b8";

module.exports = node;
