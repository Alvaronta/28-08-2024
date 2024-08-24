/**
 * @generated SignedSource<<051283108d5ec8398a807b5b139c6db0>>
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
    "name": "sorteoId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "sorteoId",
        "variableName": "sorteoId"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteWinner",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteWinnerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteWinnerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a8c29c4546e9863eed3c5cbce4d09d74",
    "id": null,
    "metadata": {},
    "name": "deleteWinnerMutation",
    "operationKind": "mutation",
    "text": "mutation deleteWinnerMutation(\n  $sorteoId: String!\n) {\n  deleteWinner(sorteoId: $sorteoId)\n}\n"
  }
};
})();

node.hash = "d71cdf71fbf310a5d7de63180179f508";

module.exports = node;
