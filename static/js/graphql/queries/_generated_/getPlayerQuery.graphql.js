/**
 * @generated SignedSource<<b892171701412652809ed511e0f2fe72>>
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
    "concreteType": "Player",
    "kind": "LinkedField",
    "name": "getPlayer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "eventId",
        "storageKey": null
      },
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
    "name": "getPlayerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getPlayerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6304cb629b04b61c19f43544a3e6fd65",
    "id": null,
    "metadata": {},
    "name": "getPlayerQuery",
    "operationKind": "query",
    "text": "query getPlayerQuery(\n  $id: String!\n) {\n  getPlayer(id: $id) {\n    eventId\n    displayName\n    discordId\n    premium\n  }\n}\n"
  }
};
})();

node.hash = "39d18209ef619c1027e6ecc4a69650a4";

module.exports = node;
