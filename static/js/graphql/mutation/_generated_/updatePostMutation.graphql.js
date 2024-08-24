/**
 * @generated SignedSource<<32feccbc842d9988e7d82ad8aaab6f37>>
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
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "updatePost",
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
    "name": "updatePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updatePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ed3b6fc5530e60c61c5a4e63e2f2d55a",
    "id": null,
    "metadata": {},
    "name": "updatePostMutation",
    "operationKind": "mutation",
    "text": "mutation updatePostMutation(\n  $id: String!\n  $payload: UpdatePostDTO!\n) {\n  updatePost(id: $id, payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "4673a53d47365d66af7f6ab7f2261ac3";

module.exports = node;
