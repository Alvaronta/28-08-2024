/**
 * @generated SignedSource<<c73d489693168fe923ffc1f68312d25c>>
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
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "updateJob",
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
    "name": "updateJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "42c636ca563649e237d6c48671eb4bb2",
    "id": null,
    "metadata": {},
    "name": "updateJobMutation",
    "operationKind": "mutation",
    "text": "mutation updateJobMutation(\n  $id: String!\n  $payload: UpdateJobDTO!\n) {\n  updateJob(id: $id, payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "2d70450b924472b92cd362e8b5df8d33";

module.exports = node;
