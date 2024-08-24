/**
 * @generated SignedSource<<307a6002f275ba92bdfdc9b5af632713>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "payload"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "payload"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "kind": "ScalarField",
    "name": "updateUser",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "updateUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ddc15555eedfd1101cead578843209b6",
    "id": null,
    "metadata": {},
    "name": "updateUserMutation",
    "operationKind": "mutation",
    "text": "mutation updateUserMutation(\n  $userId: String!\n  $payload: UpdateUserDTO!\n) {\n  updateUser(userId: $userId, payload: $payload)\n}\n"
  }
};
})();

node.hash = "c9d80515d8ec6e49312f87c3420d6e8d";

module.exports = node;
