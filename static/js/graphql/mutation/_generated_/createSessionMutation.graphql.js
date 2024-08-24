/**
 * @generated SignedSource<<4f260a2d155967fc0acc5885dd284665>>
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
    "concreteType": "SessionWithToken",
    "kind": "LinkedField",
    "name": "createSession",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
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
    "name": "createSessionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createSessionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8021806808e1811602786eae1ca7770e",
    "id": null,
    "metadata": {},
    "name": "createSessionMutation",
    "operationKind": "mutation",
    "text": "mutation createSessionMutation(\n  $payload: CreateSessionDTO!\n) {\n  createSession(payload: $payload) {\n    token\n  }\n}\n"
  }
};
})();

node.hash = "91b13cb6ac3bea155d98fdd98a388146";

module.exports = node;
