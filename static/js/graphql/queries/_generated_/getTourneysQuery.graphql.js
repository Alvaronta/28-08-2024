/**
 * @generated SignedSource<<22afa9498c29e5e4056c69d7198c191c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Tourney",
    "kind": "LinkedField",
    "name": "getTourneys",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
        "name": "thumbnail",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "time",
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
        "name": "user",
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
    "name": "getTourneysQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getTourneysQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "947748b5ba94fbd1f6ca59893a51f377",
    "id": null,
    "metadata": {},
    "name": "getTourneysQuery",
    "operationKind": "query",
    "text": "query getTourneysQuery {\n  getTourneys {\n    _id\n    date\n    thumbnail\n    time\n    url\n    user\n  }\n}\n"
  }
};
})();

node.hash = "5b141ec68e998850f4206acc7de24d25";

module.exports = node;
