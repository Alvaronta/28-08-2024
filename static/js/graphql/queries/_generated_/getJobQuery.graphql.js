/**
 * @generated SignedSource<<ffa409afee18ac7bcaf1ffb07f8c4998>>
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "getJob",
    "plural": false,
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
        "name": "thumbnail",
        "storageKey": null
      },
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "requirements",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "EntryQuestions",
        "kind": "LinkedField",
        "name": "questions",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "placeholder",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "open",
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
    "name": "getJobQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getJobQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "97ceda38c95c97c1550555b7000b9b13",
    "id": null,
    "metadata": {},
    "name": "getJobQuery",
    "operationKind": "query",
    "text": "query getJobQuery(\n  $id: String!\n) {\n  getJob(id: $id) {\n    _id\n    thumbnail\n    title\n    description\n    age\n    requirements\n    questions {\n      title\n      description\n      placeholder\n    }\n    open\n  }\n}\n"
  }
};
})();

node.hash = "949f8dbc1a75ee2e88f2b1a50af22c70";

module.exports = node;
