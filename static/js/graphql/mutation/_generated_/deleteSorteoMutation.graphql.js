/**
 * @generated SignedSource<<6dfc8a26c6dfb187b8f528a4a3d9a524>>
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
    "name": "deleteSorteo",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteSorteoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteSorteoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d536a8460024a09413297207ccb7ade3",
    "id": null,
    "metadata": {},
    "name": "deleteSorteoMutation",
    "operationKind": "mutation",
    "text": "mutation deleteSorteoMutation(\n  $id: String!\n) {\n  deleteSorteo(id: $id)\n}\n"
  }
};
})();

node.hash = "22cad2adc9fd5e22723e3c921785e056";

module.exports = node;
