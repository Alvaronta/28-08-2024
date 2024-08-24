/**
 * @generated SignedSource<<f77293326e507b2f4f2d2b0ec1ecf85d>>
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
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "createEvent",
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
    "name": "createEventMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createEventMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3e4f3e023cb450f39047c7a01504c596",
    "id": null,
    "metadata": {},
    "name": "createEventMutation",
    "operationKind": "mutation",
    "text": "mutation createEventMutation(\n  $payload: CreateEventDTO!\n) {\n  createEvent(payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "053d7bb40b9e7a62a5931987c436808a";

module.exports = node;
