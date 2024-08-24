/**
 * @generated SignedSource<<462c0ccd0cd501100e5100328ca79ecc>>
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
    "name": "eventId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "eventId",
        "variableName": "eventId"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      }
    ],
    "concreteType": "Player",
    "kind": "LinkedField",
    "name": "getPlayers",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "discordId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "premium",
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
    "name": "getPlayersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getPlayersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ad4f1332a6a146a3472a08ee7754fae9",
    "id": null,
    "metadata": {},
    "name": "getPlayersQuery",
    "operationKind": "query",
    "text": "query getPlayersQuery(\n  $eventId: String!\n  $page: Float!\n) {\n  getPlayers(eventId: $eventId, page: $page) {\n    displayName\n    discordId\n    premium\n  }\n}\n"
  }
};
})();

node.hash = "d63366e52e52f297db174bb501ee3b4d";

module.exports = node;
