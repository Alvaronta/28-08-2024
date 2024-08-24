/**
 * @generated SignedSource<<e4fea31e9c6a387f2dd611f4d9c9a9da>>
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
    "concreteType": "Tourney",
    "kind": "LinkedField",
    "name": "createTourney",
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
    "name": "createTourneyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createTourneyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9f04373ad69e7d4509490536af8929bb",
    "id": null,
    "metadata": {},
    "name": "createTourneyMutation",
    "operationKind": "mutation",
    "text": "mutation createTourneyMutation(\n  $payload: CreateTourneyDTO!\n) {\n  createTourney(payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "6b8595808d890eabfd02ac38b775064f";

module.exports = node;
