/**
 * @generated SignedSource<<8e54dc66e788ea42771fea7d4ca3915d>>
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
    "concreteType": "Tourney",
    "kind": "LinkedField",
    "name": "updateTourney",
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
    "name": "updateTourneyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "updateTourneyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f72ee46b5b4480474eb2730de722da76",
    "id": null,
    "metadata": {},
    "name": "updateTourneyMutation",
    "operationKind": "mutation",
    "text": "mutation updateTourneyMutation(\n  $id: String!\n  $payload: UpdateTourneyDTO!\n) {\n  updateTourney(id: $id, payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "0bdc92419c859a65a73c00e956a45a1e";

module.exports = node;
