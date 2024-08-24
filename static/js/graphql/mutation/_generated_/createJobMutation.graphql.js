/**
 * @generated SignedSource<<cff48e2f8259486c9cfc6355cea2a3de>>
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
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "createJob",
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
    "name": "createJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5c66d4e1c904adf52b28d5eb3cc68769",
    "id": null,
    "metadata": {},
    "name": "createJobMutation",
    "operationKind": "mutation",
    "text": "mutation createJobMutation(\n  $payload: CreateJobDTO!\n) {\n  createJob(payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "8739122a7c22c5b064e6dccf85953377";

module.exports = node;
