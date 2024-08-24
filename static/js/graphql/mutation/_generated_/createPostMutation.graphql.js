/**
 * @generated SignedSource<<709b7a6f865404ff4d1edc2001f0c6a3>>
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
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "createPost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
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
    "name": "createPostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createPostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "05f088aa50c1eb811806f68c5f1a29ba",
    "id": null,
    "metadata": {},
    "name": "createPostMutation",
    "operationKind": "mutation",
    "text": "mutation createPostMutation(\n  $payload: CreatePostDTO!\n) {\n  createPost(payload: $payload) {\n    slug\n  }\n}\n"
  }
};
})();

node.hash = "00d4d474026cdd50dc57def52808a773";

module.exports = node;
