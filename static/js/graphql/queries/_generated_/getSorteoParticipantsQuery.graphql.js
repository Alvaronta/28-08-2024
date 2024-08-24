/**
 * @generated SignedSource<<b8906db6ef0fd90090f537fc1d9b09a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sorteoId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      },
      {
        "kind": "Variable",
        "name": "sorteoId",
        "variableName": "sorteoId"
      }
    ],
    "concreteType": "PlayerEntry",
    "kind": "LinkedField",
    "name": "getSorteoParticipants",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "getSorteoParticipantsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "getSorteoParticipantsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "41d7adad4785ed1fbeda55807e534b78",
    "id": null,
    "metadata": {},
    "name": "getSorteoParticipantsQuery",
    "operationKind": "query",
    "text": "query getSorteoParticipantsQuery(\n  $sorteoId: String!\n  $page: Float!\n) {\n  getSorteoParticipants(sorteoId: $sorteoId, page: $page) {\n    username\n  }\n}\n"
  }
};
})();

node.hash = "1f5e287f3aa29c690b47217d605f3f35";

module.exports = node;
