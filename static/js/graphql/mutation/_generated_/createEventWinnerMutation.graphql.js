/**
 * @generated SignedSource<<bf0cc720fe6a8cd3490d10e9089b67de>>
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
    "concreteType": "EventWinner",
    "kind": "LinkedField",
    "name": "createEventWinner",
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
    "name": "createEventWinnerMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createEventWinnerMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "23f6df766f8e5528b55ce3b6174eedff",
    "id": null,
    "metadata": {},
    "name": "createEventWinnerMutation",
    "operationKind": "mutation",
    "text": "mutation createEventWinnerMutation(\n  $payload: CreateEventWinnerDTO!\n) {\n  createEventWinner(payload: $payload) {\n    _id\n  }\n}\n"
  }
};
})();

node.hash = "ed48c6f94eff45853670064fca340878";

module.exports = node;
