/**
 * @generated SignedSource<<b6c998585751a69d5e554d3fd263071d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "captcha"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "payload"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "captcha",
        "variableName": "captcha"
      },
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
    "concreteType": "Entry",
    "kind": "LinkedField",
    "name": "createEntry",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createEntryMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createEntryMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "23f58a6e968bd32743e52d08e1ac4f37",
    "id": null,
    "metadata": {},
    "name": "createEntryMutation",
    "operationKind": "mutation",
    "text": "mutation createEntryMutation(\n  $payload: CreateEntryDTO!\n  $id: String!\n  $captcha: String!\n) {\n  createEntry(payload: $payload, id: $id, captcha: $captcha) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "db51d3a179a9c97d4484504065c28842";

module.exports = node;
