/**
 * @generated SignedSource<<844a25ed3d0cf8661a4f446ca9f05524>>
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
  "name": "sorteoId"
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
        "name": "sorteoId",
        "variableName": "sorteoId"
      }
    ],
    "concreteType": "Sorteo",
    "kind": "LinkedField",
    "name": "updateSorteo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "enabled",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "thumbnail",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tweet",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "winner",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endIn",
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
    "name": "updateSorteoMutation",
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
    "name": "updateSorteoMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "00e2831b6209870412ab2df5e5f58040",
    "id": null,
    "metadata": {},
    "name": "updateSorteoMutation",
    "operationKind": "mutation",
    "text": "mutation updateSorteoMutation(\n  $sorteoId: String!\n  $payload: UpdateSorteoDTO!\n) {\n  updateSorteo(sorteoId: $sorteoId, payload: $payload) {\n    enabled\n    title\n    description\n    thumbnail\n    tweet\n    winner\n    endIn\n  }\n}\n"
  }
};
})();

node.hash = "a45a9fd5a65f6aef041cb7769b035b0f";

module.exports = node;
