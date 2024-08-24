/**
 * @generated SignedSource<<21e090375125c4a9b172e8e8864f19b1>>
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
    "name": "deleteEntry",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "946c8ba8706def62dbe1cf2f8f5dfae3",
    "id": null,
    "metadata": {},
    "name": "deleteEntryMutation",
    "operationKind": "mutation",
    "text": "mutation deleteEntryMutation(\n  $id: String!\n) {\n  deleteEntry(id: $id)\n}\n"
  }
};
})();

node.hash = "bfa8e0481475a9f5a89527f33566fde7";

module.exports = node;
