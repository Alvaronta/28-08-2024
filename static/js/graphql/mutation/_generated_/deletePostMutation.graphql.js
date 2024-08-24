/**
 * @generated SignedSource<<abacbe934e2d9d5a92f8903a92e21748>>
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
    "name": "deletePost",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deletePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deletePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f5d78cee7bb0f21e413ad1772cfabd24",
    "id": null,
    "metadata": {},
    "name": "deletePostMutation",
    "operationKind": "mutation",
    "text": "mutation deletePostMutation(\n  $id: String!\n) {\n  deletePost(id: $id)\n}\n"
  }
};
})();

node.hash = "1c89fe5a80e8091b11f2b88340822d5f";

module.exports = node;
