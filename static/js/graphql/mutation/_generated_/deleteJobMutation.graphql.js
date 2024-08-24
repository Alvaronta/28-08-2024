/**
 * @generated SignedSource<<ca49b85d001067bbe9742c69d82a1283>>
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
      }
    ],
    "kind": "ScalarField",
    "name": "deleteJob",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9df14e6c5e9ad786298ef065aa991427",
    "id": null,
    "metadata": {},
    "name": "deleteJobMutation",
    "operationKind": "mutation",
    "text": "mutation deleteJobMutation(\n  $id: String!\n) {\n  deleteJob(id: $id)\n}\n"
  }
};
})();

node.hash = "4345cc7e24d28681db66e6a2c3fcccf0";

module.exports = node;
