/**
 * @generated SignedSource<<a7cde49901adc2f6aa7306beb91fb14f>>
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
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "getJobs",
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
        "name": "thumbnail",
        "storageKey": null
      },
      (v0/*: any*/),
      (v1/*: any*/),
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
          (v0/*: any*/),
          (v1/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getJobsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getJobsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b3c9150aa935be60aac3445f5bd7379e",
    "id": null,
    "metadata": {},
    "name": "getJobsQuery",
    "operationKind": "query",
    "text": "query getJobsQuery {\n  getJobs {\n    _id\n    thumbnail\n    title\n    description\n    age\n    requirements\n    questions {\n      title\n      description\n      placeholder\n    }\n    open\n  }\n}\n"
  }
};
})();

node.hash = "25682173d0a3831083b11e3d83477591";

module.exports = node;
