/**
 * @generated SignedSource<<bc83e1dbea7af2d44cdee01044b3ab06>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EventWinner",
    "kind": "LinkedField",
    "name": "getEventWinners",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "EventOutput",
        "kind": "LinkedField",
        "name": "eventList",
        "plural": true,
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
            "concreteType": "Event",
            "kind": "LinkedField",
            "name": "eventObj",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "date",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "participation",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "max",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "displayName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getEventWinnersQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getEventWinnersQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3c1cabcc9c6020e12e5302ded1264a54",
    "id": null,
    "metadata": {},
    "name": "getEventWinnersQuery",
    "operationKind": "query",
    "text": "query getEventWinnersQuery {\n  getEventWinners {\n    _id\n    eventList {\n      eventId\n      eventObj {\n        _id\n        name\n        date\n        url\n        participation\n        max\n      }\n    }\n    displayName\n  }\n}\n"
  }
};
})();

node.hash = "3851ad59456d7861022ea7c572907040";

module.exports = node;
