/**
 * @generated SignedSource<<656408016537ec2f655c3a1c873c0035>>
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
    "name": "jobId"
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
        "name": "jobId",
        "variableName": "jobId"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      }
    ],
    "concreteType": "Entry",
    "kind": "LinkedField",
    "name": "getEntries",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "portfolio",
        "storageKey": null
      },
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
        "name": "country",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "contact",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "EntryQuestion",
        "kind": "LinkedField",
        "name": "questions",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "question",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "response",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "aditional",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
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
    "name": "getEntriesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "getEntriesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ba7bedaa6c620f121f55a961bc75350e",
    "id": null,
    "metadata": {},
    "name": "getEntriesQuery",
    "operationKind": "query",
    "text": "query getEntriesQuery(\n  $jobId: String!\n  $page: Float!\n) {\n  getEntries(jobId: $jobId, page: $page) {\n    _id\n    name\n    portfolio\n    age\n    country\n    contact\n    questions {\n      question\n      response\n    }\n    aditional\n    createdAt\n  }\n}\n"
  }
};
})();

node.hash = "76e8a45f391ff32504b50fe5f8669ffe";

module.exports = node;
