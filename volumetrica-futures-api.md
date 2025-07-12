
{
  "openapi": "3.0.1",
  "info": {
    "title": "Propfirm API V2",
    "version": "v2"
  },
  "paths": {
    "/api/v2/Propsite/Bulk/AccountsEnabled": {
      "get": {
        "tags": [
          "Bulk"
        ],
        "summary": "Get enabled accounts information fetched by database",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Bulk/AccountsInfosEnabled": {
      "get": {
        "tags": [
          "Bulk"
        ],
        "summary": "Get enabled accounts realtime snapshots and infos. \r\nIMPORTANT: since it is not fetched by database, they can be temporaneary disabled, so this endpoint\r\nmust be used only to update account cash informations, but not for detecting disabled accounts",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingAccountInfoViewModelDictionaryApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingAccountInfoViewModelDictionaryApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingAccountInfoViewModelDictionaryApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Bulk/TradesList": {
      "get": {
        "tags": [
          "Bulk"
        ],
        "summary": "Get trade list executed within the date sent",
        "parameters": [
          {
            "name": "utcStartDt",
            "in": "query",
            "description": "UTC - start filter date - required",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "utcEndDt",
            "in": "query",
            "description": "UTC - end filter date - optional",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "extendedTradeDetails",
            "in": "query",
            "description": "if enabled, it includes more trade details. NOTE: it is disabled as default since it is an heavy call",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringReportTradeViewModelListDictionaryApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringReportTradeViewModelListDictionaryApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringReportTradeViewModelListDictionaryApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Bulk/FillList": {
      "get": {
        "tags": [
          "Bulk"
        ],
        "summary": "Get fill list executed within the date sent",
        "parameters": [
          {
            "name": "utcStartDt",
            "in": "query",
            "description": "UTC - start filter date - required",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "utcEndDt",
            "in": "query",
            "description": "UTC - end filter date - optional",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingFillViewModelListDictionaryApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingFillViewModelListDictionaryApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingFillViewModelListDictionaryApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Bulk/OrderList": {
      "get": {
        "tags": [
          "Bulk"
        ],
        "summary": "Get order list within the date sent",
        "parameters": [
          {
            "name": "utcStartDt",
            "in": "query",
            "description": "UTC - start filter date - required",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "utcEndDt",
            "in": "query",
            "description": "UTC - end filter date - optional",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filterStatus",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/OrderStatusEnum"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingOrderViewModelListDictionaryApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingOrderViewModelListDictionaryApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringTradingOrderViewModelListDictionaryApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Bulk/DailySnapshots": {
      "get": {
        "tags": [
          "Bulk"
        ],
        "summary": "Get daily snapshots within the date sent",
        "parameters": [
          {
            "name": "utcStartDt",
            "in": "query",
            "description": "UTC - start filter date - required",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringHistoricalTradingAccountSnapshotListDictionaryApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringHistoricalTradingAccountSnapshotListDictionaryApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringHistoricalTradingAccountSnapshotListDictionaryApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/CurrencyRates": {
      "get": {
        "tags": [
          "CurrencyRates"
        ],
        "summary": "Get global currency exchange rates",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/CurrencyRateElementListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CurrencyRateElementListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/CurrencyRateElementListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "CurrencyRates"
        ],
        "summary": "Update the exchange rates used",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "Rates to update",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CurrencyRateRequestModel"
                }
              }
            },
            "text/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CurrencyRateRequestModel"
                }
              }
            },
            "application/*+json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CurrencyRateRequestModel"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/EconomicNews": {
      "get": {
        "tags": [
          "EconomicNews"
        ],
        "summary": "Get economic news event available for inhibit",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/EconomicCalendarEventInputModelListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EconomicCalendarEventInputModelListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/EconomicCalendarEventInputModelListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "EconomicNews"
        ],
        "summary": "Update the events which want to inhibits trading",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/EconomicCalendarInhibitRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/EconomicCalendarInhibitRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/EconomicCalendarInhibitRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Export/TradeListCsv": {
      "get": {
        "tags": [
          "Export"
        ],
        "summary": "Export the trade list of the accounts as a csv between two dats",
        "parameters": [
          {
            "name": "startDt",
            "in": "query",
            "description": "Start date - required",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "endDt",
            "in": "query",
            "description": "End date - optional, may be null",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string"
                }
              },
              "application/json": {
                "schema": {
                  "type": "string"
                }
              },
              "text/json": {
                "schema": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/GroupUniverse/List": {
      "get": {
        "tags": [
          "GroupUniverse"
        ],
        "summary": "Get group universe list",
        "parameters": [
          {
            "name": "filter",
            "in": "query",
            "description": "optional",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "skip",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "take",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultDataTableViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultDataTableViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultDataTableViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/GroupUniverse": {
      "get": {
        "tags": [
          "GroupUniverse"
        ],
        "summary": "Return the details of a group universe",
        "parameters": [
          {
            "name": "groupId",
            "in": "query",
            "description": "Id of the group universe",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "GroupUniverse"
        ],
        "summary": "Add or update a group universe",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "Fields of group universe\\n\r\nSymbolId can be retrieved through the \"GetSymbolList\" action",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/GroupUniverseInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/GroupUniverseInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/GroupUniverseInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/GroupUniverseResultApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Subscription/List": {
      "get": {
        "tags": [
          "Subscription"
        ],
        "parameters": [
          {
            "name": "subscriptionStatus",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/SubscriptionStatusEnum"
            }
          },
          {
            "name": "platform",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/PlatformEnum"
            }
          },
          {
            "name": "skip",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "take",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelDataTableViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelDataTableViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelDataTableViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Subscription": {
      "get": {
        "tags": [
          "Subscription"
        ],
        "summary": "Get subscription status",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "description": "User id to get the user subscription. Must be null if subscription id is sent",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "subscriptionId",
            "in": "query",
            "description": "Id got back from NewSubscription action",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Subscription"
        ],
        "summary": "Create a new subscription with a given userId, a trading account id and a dxFeed product",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewSubscriptionInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/NewSubscriptionInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/NewSubscriptionInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Subscription"
        ],
        "summary": "Update subscription",
        "parameters": [
          {
            "name": "subscriptionId",
            "in": "query",
            "description": "Id of the subscription",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "Parameters",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewSubscriptionInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/NewSubscriptionInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/NewSubscriptionInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Subscription"
        ],
        "summary": "Remove a subscription. May be better to not use and just disable the subscription",
        "parameters": [
          {
            "name": "subscriptionId",
            "in": "query",
            "description": "Id got back from NewSubscription action",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Subscription/Active": {
      "post": {
        "tags": [
          "Subscription"
        ],
        "summary": "Active a subscription which is scheduled or disabled",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionActiveRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionActiveRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionActiveRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Subscription/Confirm": {
      "post": {
        "tags": [
          "Subscription"
        ],
        "summary": "Confirm a subscription which is on hold by the propfirm. The only case is when a subscriber is a professional user",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionConfirmRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionConfirmRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionConfirmRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Subscription/Deactive": {
      "post": {
        "tags": [
          "Subscription"
        ],
        "summary": "Deactive a subscription. It could be usefull to end a subscription due to a challenge fail before that the month ends",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionDeactiveRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionDeactiveRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/SubscriptionDeactiveRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SubscriptionViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Symbol/List": {
      "get": {
        "tags": [
          "Symbol"
        ],
        "summary": "Return a list of the symbols that users can trade",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/SymbolInfoViewModelListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SymbolInfoViewModelListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/SymbolInfoViewModelListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Symbol/ContractName": {
      "get": {
        "tags": [
          "Symbol"
        ],
        "summary": "Return the contract name of the instrument",
        "parameters": [
          {
            "name": "contractId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Symbol/SymbolName": {
      "get": {
        "tags": [
          "Symbol"
        ],
        "summary": "Return the symbol name of the instrument",
        "parameters": [
          {
            "name": "contractId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Trading/TradingNodesWithToken": {
      "get": {
        "tags": [
          "Trading"
        ],
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/NodeTradingHubInfoListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/NodeTradingHubInfoListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/NodeTradingHubInfoListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Trading/GenerateTokenForTradingNode": {
      "get": {
        "tags": [
          "Trading"
        ],
        "parameters": [
          {
            "name": "nodeIndex",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/NodeTradingHubInfoApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/NodeTradingHubInfoApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/NodeTradingHubInfoApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Trading/CancelOrder": {
      "post": {
        "tags": [
          "Trading"
        ],
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingCancelOrderRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingCancelOrderRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingCancelOrderRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Trading/FlatPosition": {
      "post": {
        "tags": [
          "Trading"
        ],
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingFlatPositionRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingFlatPositionRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingFlatPositionRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/List": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Get trading accounts list",
        "parameters": [
          {
            "name": "status",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/TradingAccountStatusEnum"
            }
          },
          {
            "name": "permission",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/TradingAccountPermissionEnum"
            }
          },
          {
            "name": "familyId",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "groupUniverseId",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "tradingRuleId",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "optional",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "skip",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "take",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelDataTableViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelDataTableViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelDataTableViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Get trading account info including snapshot of the account real time data (daily pl, commissions and so on)",
        "parameters": [
          {
            "name": "accountId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "includeOpenPl",
            "in": "query",
            "description": "Include open pl for open position. It may be null if no quote has been received yet for the instrument",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountInfoViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountInfoViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountInfoViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Create a new trading account with a balance and a optional trading rule id",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingAccountInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingAccountInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingAccountInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Delete an existing trading account",
        "parameters": [
          {
            "name": "accountId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/Reset": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Reset an existing trading account either to start balance or to a specific start session",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ResetTradingAccountInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/ResetTradingAccountInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/ResetTradingAccountInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/EnabledAccountsId": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "This method should be cyclically invoked by the propfirm in order to know which accounts are still active.",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/ListByUserId": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Get a list of user trading accounts",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/ListByRuleId": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Return the trading accounts associated with the trading rule",
        "parameters": [
          {
            "name": "ruleId",
            "in": "query",
            "description": "Trading rule id",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "includeDisabled",
            "in": "query",
            "description": "False: it only returns active accounts; True: return all accounts",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/Report": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Get trading account report with a start date",
        "parameters": [
          {
            "name": "accountId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "startDt",
            "in": "query",
            "description": "",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "endDt",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingReportViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingReportViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingReportViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/DailySnapshots": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Get trading daily account snapshots",
        "parameters": [
          {
            "name": "accountId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "startDt",
            "in": "query",
            "description": "Optional - if null, all sessions will be returned from when the account has been created",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/HistoricalTradingAccountSnapshotListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HistoricalTradingAccountSnapshotListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/HistoricalTradingAccountSnapshotListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/HistoricalOrders": {
      "get": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Get historical order list for an account",
        "parameters": [
          {
            "name": "accountId",
            "in": "query",
            "description": "Id of the account",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "startDt",
            "in": "query",
            "description": "Start date",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "endDt",
            "in": "query",
            "description": "Optional - end date",
            "schema": {
              "type": "string",
              "format": "date-time"
            }
          },
          {
            "name": "filterStatus",
            "in": "query",
            "description": "Optional - filter orders by their status",
            "schema": {
              "$ref": "#/components/schemas/OrderStatusEnum"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingOrderViewModelListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingOrderViewModelListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingOrderViewModelListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/Enable": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Enable a trading account",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountEnableRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountEnableRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountEnableRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/ChangeStatus": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Change the status of a trading account. If a rule manager is used the account will be automatically disabled",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangeStatusRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangeStatusRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangeStatusRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/ChangePermission": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Change the status of a trading account. If a rule manager is used the account will be automatically disabled",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangePermissionRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangePermissionRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangePermissionRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/UpdateBalance": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountBalanceUpdateRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountBalanceUpdateRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountBalanceUpdateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/Disable": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Disable a trading account. If a rule manager is used the account will be automatically disabled",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountDisableRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountDisableRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountDisableRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/ChangeSchedule": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Chang start/end date for a trading account",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangeScheduleRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangeScheduleRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountChangeScheduleRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingAccountHeaderViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingAccount/ChangeTradingRule": {
      "post": {
        "tags": [
          "TradingAccount"
        ],
        "summary": "Associate a trading rule to an existing account account",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountRuleChangeRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountRuleChangeRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingAccountRuleChangeRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingRule/List": {
      "get": {
        "tags": [
          "TradingRule"
        ],
        "summary": "Get global trading rules list",
        "parameters": [
          {
            "name": "skip",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "take",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultDataTableViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultDataTableViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultDataTableViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingRule": {
      "get": {
        "tags": [
          "TradingRule"
        ],
        "summary": "Return the details of a trading rule",
        "parameters": [
          {
            "name": "ruleId",
            "in": "query",
            "description": "Id of the rule",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "TradingRule"
        ],
        "summary": "Add or update a trading rule",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "Fields of trading rule\\n\r\nSymbolId can be retrieved through the \"GetSymbolList\" action",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingRuleInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingRuleInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingRuleInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/TradingRuleResultApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingRule/Validate": {
      "post": {
        "tags": [
          "TradingRule"
        ],
        "summary": "Validate parameters of trading rule",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "Fields of trading rule\\n\r\nSymbolId can be retrieved through the \"GetSymbolList\" action",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingRuleInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingRuleInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/NewTradingRuleInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/RequestValidationResultApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RequestValidationResultApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/RequestValidationResultApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/TradingRule/ChangeGroupUniverse": {
      "post": {
        "tags": [
          "TradingRule"
        ],
        "summary": "Associate a group universe to an existing trading rule",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingRuleGroupUniverseChangeRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/TradingRuleGroupUniverseChangeRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/TradingRuleGroupUniverseChangeRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/ApiSuccessResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/List": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "Get user list",
        "parameters": [
          {
            "name": "userType",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/UserTypeEnum"
            }
          },
          {
            "name": "subscriptionStatus",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/SubscriptionStatusEnum"
            }
          },
          {
            "name": "platform",
            "in": "query",
            "schema": {
              "$ref": "#/components/schemas/PlatformEnum"
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "optional",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "skip",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "take",
            "in": "query",
            "description": "required, -1 means unset",
            "schema": {
              "type": "integer",
              "format": "int32",
              "default": -1
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserViewModelDataTableViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserViewModelDataTableViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserViewModelDataTableViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User": {
      "get": {
        "tags": [
          "User"
        ],
        "summary": "Get user detail",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "description": "",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Create user or update(use PUT for new intregrations) user details.\r\nIt is better to specify also address, state and country, in which way those data are prefilled when user sign data agreement",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserResultApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserResultApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserResultApiSuccessDataResponse"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "User"
        ],
        "summary": "Update user details",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UserInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/UserInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/UserInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/UserResultApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserResultApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserResultApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/LoginUrl": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Create a link to login the user inside the dashboard with a short token expiration. It may be used if you want to create a button with direct login from your website",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/IFrame": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Create a link for be opened on an iframe. It may be used from propfirms that wants to keep its own dashboard, but show reports and realtime widgets",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/IFramePortfolio": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Create a link for be opened on an iframe. It may be used from propfirms that wants to keep its own dashboard, but show reports and realtime widgets",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/IFrameUserGoal": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Create a link for be opened on an iframe. It may be used from propfirms that wants to keep its own dashboard, but allow users to change their custom trading rule",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/IFrameEconomicCalendar": {
      "post": {
        "tags": [
          "User"
        ],
        "summary": "Create a link for be opened on an iframe. It displays the economic calendar with the news which are not allowed to trade (based on the trading rule)",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/VolumetricaWebApp": {
      "post": {
        "tags": [
          "User"
        ],
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginUrlInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/StringApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/GenerateTradingToken": {
      "post": {
        "tags": [
          "User"
        ],
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginTokenInputModel"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/LoginTokenInputModel"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/LoginTokenInputModel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/LoginTradingTokenResult"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginTradingTokenResult"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginTradingTokenResult"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/User/AuthTradingWss": {
      "post": {
        "tags": [
          "User"
        ],
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AuthTradingWssRequest"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/AuthTradingWssRequest"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/AuthTradingWssRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/LoginResponseMsgApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginResponseMsgApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginResponseMsgApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Webhook/GetModel": {
      "get": {
        "tags": [
          "Webhook"
        ],
        "summary": "It returns the model sent via webhook for realtime notifications",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/WebhookEventViewModelApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WebhookEventViewModelApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/WebhookEventViewModelApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/api/v2/Propsite/Webhook/GetBulkModel": {
      "get": {
        "tags": [
          "Webhook"
        ],
        "summary": "It returns the model sent via webhook for bulk realtime notifications",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Token for the request",
            "required": true,
            "schema": {
              "type": "string",
              "default": ""
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/WebhookEventBulkViewModelListApiSuccessDataResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WebhookEventBulkViewModelListApiSuccessDataResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/WebhookEventBulkViewModelListApiSuccessDataResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "ApiSuccessResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "AuthTradingWssRequest": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "nullable": true
          },
          "platform": {
            "$ref": "#/components/schemas/PlatformEnum"
          },
          "onlyTrading": {
            "type": "boolean"
          },
          "ip": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "BaseGroupUniverseSymbol": {
        "type": "object",
        "properties": {
          "symbolId": {
            "type": "integer",
            "format": "int64"
          },
          "margin": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "commissions": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxContracts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxMoneyExposition": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "BaseGroupUniverseSymbolGroup": {
        "type": "object",
        "properties": {
          "symbolGroupId": {
            "type": "string",
            "nullable": true
          },
          "margin": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "commissions": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "minContractsCalculation": {
            "$ref": "#/components/schemas/RiskSymbolGroupQuantityCalculationEnum"
          },
          "minContractsValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "multipleContracts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxContractsSumMode": {
            "$ref": "#/components/schemas/RiskSymbolGroupQuantitySumEnum"
          },
          "maxContractsCalculation": {
            "$ref": "#/components/schemas/RiskSymbolGroupQuantityCalculationEnum"
          },
          "maxContractsValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "minMoneyExpositionUnit": {
            "$ref": "#/components/schemas/UnitValueTypeEnum"
          },
          "minMoneyExpositionValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxMoneyExpositionUnit": {
            "$ref": "#/components/schemas/UnitValueTypeEnum"
          },
          "maxMoneyExpositionValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "BaseTradingAccountSnapshotDetail": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "integer",
            "format": "int64"
          },
          "currency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "startBalance": {
            "type": "number",
            "format": "double"
          },
          "balance": {
            "type": "number",
            "format": "double"
          },
          "equity": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "marginAvailable": {
            "type": "number",
            "format": "double"
          },
          "marginUsed": {
            "type": "number",
            "format": "double"
          },
          "minimumBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumSessionClosedBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumSessionClosedEquity": {
            "type": "number",
            "format": "double"
          },
          "maximumBalanceUtc": {
            "type": "string",
            "format": "date-time"
          },
          "minimumEquity": {
            "type": "number",
            "format": "double"
          },
          "maximumEquityUtc": {
            "type": "string",
            "format": "date-time"
          },
          "maximumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayStartBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayStartEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMinimumBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumBalanceUtc": {
            "type": "string",
            "format": "date-time"
          },
          "intradayMinimumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumEquityUtc": {
            "type": "string",
            "format": "date-time"
          },
          "intradayNumberOfTrades": {
            "type": "integer",
            "format": "int32"
          },
          "intradayStartStopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyStartBalance": {
            "type": "number",
            "format": "double"
          },
          "weeklyStartEquity": {
            "type": "number",
            "format": "double"
          },
          "weeklyMaximumBalance": {
            "type": "number",
            "format": "double"
          },
          "weeklyMaximumEquity": {
            "type": "number",
            "format": "double"
          },
          "weeklyStartStopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownIntradayBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownWeeklyBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopRunupIntradayBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "profitTargetBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "sessionAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "cumulativeAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dailyPL": {
            "type": "number",
            "format": "double"
          },
          "dailyNetPL": {
            "type": "number",
            "format": "double"
          },
          "groupUniverseScalingStep": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "updateUtc": {
            "type": "string",
            "format": "date-time"
          },
          "sessionNumbers": {
            "type": "integer",
            "format": "int32"
          },
          "overweekContracts": {
            "type": "integer",
            "format": "int32"
          },
          "overnightContracts": {
            "type": "integer",
            "format": "int32"
          },
          "winningTradingSessions": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "tradingSessionsNetPnL": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "forceDrawdownToThresholdLimit": {
            "type": "boolean"
          },
          "scalpingCheckTimesTriggered": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "tradePriceCheckTimesTriggered": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "ContractDetailInfoModel": {
        "type": "object",
        "properties": {
          "contractName": {
            "type": "string",
            "nullable": true
          },
          "symbol": {
            "type": "string",
            "nullable": true
          },
          "exchange": {
            "type": "string",
            "nullable": true
          },
          "tradableQuantityFractionable": {
            "type": "integer",
            "format": "int32"
          }
        },
        "additionalProperties": false
      },
      "CurrencyEnum": {
        "enum": [
          "0 = Eur",
          "1 = Usd"
        ],
        "type": "integer",
        "format": "int32"
      },
      "CurrencyRateElement": {
        "type": "object",
        "properties": {
          "baseCurrency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "conversionCurrency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "frequencyUpdate": {
            "$ref": "#/components/schemas/RateFrequencyUpdateEnum"
          },
          "exchangeRate": {
            "type": "number",
            "format": "double"
          },
          "spreadType": {
            "$ref": "#/components/schemas/UnitValueTypeEnum"
          },
          "spread": {
            "type": "number",
            "format": "double"
          },
          "lastUpdate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "CurrencyRateElementListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CurrencyRateElement"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "CurrencyRateRequestModel": {
        "type": "object",
        "properties": {
          "baseCurrency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "conversionCurrency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "frequencyUpdate": {
            "$ref": "#/components/schemas/RateFrequencyUpdateEnum"
          },
          "exchangeRate": {
            "type": "number",
            "description": "Optional - new exchange rate to use",
            "format": "double",
            "nullable": true
          },
          "spreadType": {
            "$ref": "#/components/schemas/UnitValueTypeEnum"
          },
          "spread": {
            "type": "number",
            "description": "Optional - spread to set",
            "format": "double",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "DrawdownModeEnum": {
        "enum": [
          "0 = TrailingMaxBalance",
          "1 = StaticStartBalance",
          "2 = TrailingMaxEquity",
          "3 = TrailingSessionEndBalance",
          "4 = TrailingSessionEndEquity",
          "5 = FixedSum"
        ],
        "type": "integer",
        "format": "int32"
      },
      "EconomicCalendarEventInputModel": {
        "type": "object",
        "properties": {
          "eventId": {
            "type": "integer",
            "format": "int64"
          },
          "utcUnixMs": {
            "type": "integer",
            "format": "int64"
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "countryIso": {
            "type": "string",
            "nullable": true
          },
          "intensity": {
            "$ref": "#/components/schemas/EconomicCalendarIntensityEnum"
          },
          "inhibit": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "EconomicCalendarEventInputModelListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/EconomicCalendarEventInputModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "EconomicCalendarInhibitRequest": {
        "type": "object",
        "properties": {
          "resetAll": {
            "type": "boolean"
          },
          "events": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/EconomicCalendarEventInputModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "EconomicCalendarIntensityEnum": {
        "enum": [
          "1 = Info",
          "2 = Low",
          "4 = Medium",
          "8 = High"
        ],
        "type": "integer",
        "format": "int32"
      },
      "EncryptionModeEnum": {
        "enum": [
          "0 = None",
          "1 = Aes256"
        ],
        "type": "integer",
        "format": "int32"
      },
      "ExchangeCategory": {
        "enum": [
          "1 = Future",
          "2 = Forex",
          "4 = Index",
          "8 = Option",
          "16 = Stock",
          "32 = Spot",
          "64 = CryptoPerpetual",
          "128 = Etf"
        ],
        "type": "integer",
        "format": "int32"
      },
      "ExecutionPortfolioModeEnum": {
        "enum": [
          "0 = Netting",
          "1 = Hedging"
        ],
        "type": "integer",
        "format": "int32"
      },
      "GroupSymbolAllowedEnum": {
        "enum": [
          "0 = SymbolsListed",
          "1 = Category",
          "2 = All"
        ],
        "type": "integer",
        "format": "int32"
      },
      "GroupUniverseInputModel": {
        "type": "object",
        "properties": {
          "groupId": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "symbolAllowedMode": {
            "$ref": "#/components/schemas/GroupSymbolAllowedEnum"
          },
          "excludeSymbolsNotListed": {
            "type": "boolean",
            "description": "Deprecated",
            "nullable": true
          },
          "categoryAllowed": {
            "$ref": "#/components/schemas/ExchangeCategory"
          },
          "commissionsMode": {
            "$ref": "#/components/schemas/TradingCommissionModeEnum"
          },
          "defaultCommissions": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "minOrderCommissions": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxOrderCommissions": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "economicNewsCountries": {
            "type": "string",
            "description": "ISO country list, comma separated",
            "nullable": true
          },
          "buySideAllow": {
            "$ref": "#/components/schemas/RiskSideAllowEnum"
          },
          "sellSideAllow": {
            "$ref": "#/components/schemas/RiskSideAllowEnum"
          },
          "intradayLiquidationMinsBefore": {
            "type": "integer",
            "format": "int32"
          },
          "symbols": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GroupUniverseSymbolInputModel"
            },
            "nullable": true
          },
          "symbolGroups": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GroupUniverseSymbolGroupInputModel"
            },
            "nullable": true
          },
          "borrowSymbols": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "GroupUniverseResult": {
        "type": "object",
        "properties": {
          "groupId": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "symbolAllowedMode": {
            "$ref": "#/components/schemas/GroupSymbolAllowedEnum"
          },
          "categoryAllowed": {
            "$ref": "#/components/schemas/ExchangeCategory"
          },
          "excludeSymbolsNotListed": {
            "type": "boolean"
          },
          "symbols": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseGroupUniverseSymbol"
            },
            "nullable": true
          },
          "symbolGroups": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BaseGroupUniverseSymbolGroup"
            },
            "nullable": true
          },
          "borrowSymbols": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int64"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "GroupUniverseResultApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/GroupUniverseResult"
          }
        },
        "additionalProperties": false
      },
      "GroupUniverseResultDataTableViewModel": {
        "type": "object",
        "properties": {
          "draw": {
            "type": "integer",
            "format": "int32"
          },
          "recordsTotal": {
            "type": "integer",
            "format": "int32"
          },
          "recordsFiltered": {
            "type": "integer",
            "format": "int32"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/GroupUniverseResult"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "GroupUniverseResultDataTableViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/GroupUniverseResultDataTableViewModel"
          }
        },
        "additionalProperties": false
      },
      "GroupUniverseSymbolGroupInputModel": {
        "type": "object",
        "properties": {
          "symbolGroupId": {
            "type": "string",
            "nullable": true
          },
          "margin": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "commissions": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "minContractsCalculation": {
            "$ref": "#/components/schemas/RiskSymbolGroupQuantityCalculationEnum"
          },
          "minContractsValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "multipleContracts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxContractsSumMode": {
            "$ref": "#/components/schemas/RiskSymbolGroupQuantitySumEnum"
          },
          "maxContractsCalculation": {
            "$ref": "#/components/schemas/RiskSymbolGroupQuantityCalculationEnum"
          },
          "maxContractsValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "minMoneyExpositionUnit": {
            "$ref": "#/components/schemas/UnitValueTypeEnum"
          },
          "minMoneyExpositionValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxMoneyExpositionUnit": {
            "$ref": "#/components/schemas/UnitValueTypeEnum"
          },
          "maxMoneyExpositionValue": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "GroupUniverseSymbolInputModel": {
        "type": "object",
        "properties": {
          "symbolId": {
            "type": "integer",
            "format": "int64"
          },
          "margin": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "commissions": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxContracts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxMoneyExposition": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "HistoricalTradingAccountSnapshot": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "integer",
            "format": "int64"
          },
          "currency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "startBalance": {
            "type": "number",
            "format": "double"
          },
          "balance": {
            "type": "number",
            "format": "double"
          },
          "equity": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "marginAvailable": {
            "type": "number",
            "format": "double"
          },
          "marginUsed": {
            "type": "number",
            "format": "double"
          },
          "minimumBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumSessionClosedBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumSessionClosedEquity": {
            "type": "number",
            "format": "double"
          },
          "maximumBalanceUtc": {
            "type": "string",
            "format": "date-time"
          },
          "minimumEquity": {
            "type": "number",
            "format": "double"
          },
          "maximumEquityUtc": {
            "type": "string",
            "format": "date-time"
          },
          "maximumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayStartBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayStartEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMinimumBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumBalanceUtc": {
            "type": "string",
            "format": "date-time"
          },
          "intradayMinimumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumEquityUtc": {
            "type": "string",
            "format": "date-time"
          },
          "intradayNumberOfTrades": {
            "type": "integer",
            "format": "int32"
          },
          "intradayStartStopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyStartBalance": {
            "type": "number",
            "format": "double"
          },
          "weeklyStartEquity": {
            "type": "number",
            "format": "double"
          },
          "weeklyMaximumBalance": {
            "type": "number",
            "format": "double"
          },
          "weeklyMaximumEquity": {
            "type": "number",
            "format": "double"
          },
          "weeklyStartStopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownIntradayBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownWeeklyBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopRunupIntradayBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "profitTargetBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "sessionAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "cumulativeAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dailyPL": {
            "type": "number",
            "format": "double"
          },
          "dailyNetPL": {
            "type": "number",
            "format": "double"
          },
          "groupUniverseScalingStep": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "updateUtc": {
            "type": "string",
            "format": "date-time"
          },
          "utcDate": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": false
      },
      "HistoricalTradingAccountSnapshotListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/HistoricalTradingAccountSnapshot"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "LoginResponseMsg": {
        "type": "object",
        "properties": {
          "reqId": {
            "type": "integer",
            "format": "int64"
          },
          "mailFound": {
            "type": "boolean"
          },
          "credentialsOk": {
            "type": "boolean"
          },
          "message": {
            "type": "string",
            "default": "",
            "nullable": true
          },
          "success": {
            "type": "boolean"
          },
          "successJson": {
            "type": "string",
            "default": "",
            "nullable": true
          },
          "successNodeWss": {
            "type": "string",
            "default": "",
            "nullable": true
          },
          "domain": {
            "type": "string",
            "default": "",
            "nullable": true
          },
          "propfirmName": {
            "type": "string",
            "default": "",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "LoginResponseMsgApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/LoginResponseMsg"
          }
        },
        "additionalProperties": false
      },
      "LoginTokenInputModel": {
        "type": "object",
        "properties": {
          "login": {
            "type": "string",
            "nullable": true
          },
          "password": {
            "type": "string",
            "nullable": true
          },
          "version": {
            "type": "integer",
            "format": "int32"
          },
          "platform": {
            "$ref": "#/components/schemas/PlatformEnum"
          }
        },
        "additionalProperties": false
      },
      "LoginTradingTokenResult": {
        "type": "object",
        "properties": {
          "token": {
            "type": "string",
            "nullable": true
          },
          "tradingUri": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "LoginUrlInputModel": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "nullable": true
          },
          "username": {
            "type": "string",
            "description": "It must be null, if \"Email\" is filled",
            "nullable": true
          },
          "email": {
            "type": "string",
            "description": "It must be null, if \"Username\" is filled",
            "nullable": true
          },
          "accountId": {
            "type": "string",
            "description": "Optional - it redirects to a default account",
            "nullable": true
          },
          "forceDefaultTheme": {
            "$ref": "#/components/schemas/UserThemeEnum"
          }
        },
        "additionalProperties": false
      },
      "MarketDataCertificationAllowedEnum": {
        "enum": [
          "0 = All",
          "1 = NoProOnly",
          "2 = ProOnly"
        ],
        "type": "integer",
        "format": "int32"
      },
      "NewSubscriptionInputModel": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "nullable": true
          },
          "dataFeedProducts": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "nullable": true
          },
          "platform": {
            "$ref": "#/components/schemas/PlatformEnum"
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "durationMonths": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "durationDays": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "enabled": {
            "type": "boolean"
          },
          "volumetricaPlatform": {
            "type": "integer",
            "description": "1 - VolSys®\r\n2 - VolBook®",
            "format": "int32",
            "nullable": true
          },
          "forceUserOnboarding": {
            "type": "boolean"
          },
          "allowedSelfCertification": {
            "$ref": "#/components/schemas/MarketDataCertificationAllowedEnum"
          },
          "redirectUrl": {
            "type": "string",
            "description": "Optional - it is where the user is redirected after the sign of the market data agreement, otheriwse the defautl one is used",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "NewTradingAccountInputModel": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "description": "It is the id returned by the “NewUser” action",
            "nullable": true
          },
          "balance": {
            "type": "number",
            "description": "Starting balance of the account - Optional if setted on the trading rule, required otherwise",
            "format": "double",
            "nullable": true
          },
          "maximumBalance": {
            "type": "number",
            "description": "Optional - override the max account balance used for drawdown calculation",
            "format": "double",
            "nullable": true
          },
          "currency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "header": {
            "type": "string",
            "description": "Account header. It will be used for user display on dashboards and trading platforms. May be usefull if the propfirm has account internal cumulative ID,\r\nin order to show to the user the same ID on both sides",
            "nullable": true
          },
          "description": {
            "maxLength": 100,
            "type": "string",
            "description": "it is a custom field that must be filled with some texts. It may be useful for have some notes relating the account. (e.g. challenge name)",
            "nullable": true
          },
          "accountRuleId": {
            "type": "string",
            "description": "it can be null. It is the global trading rule id that must be associated to the trading account.",
            "nullable": true
          },
          "accountCustomRule": {
            "$ref": "#/components/schemas/NewTradingRuleInputModel"
          },
          "enabled": {
            "type": "boolean",
            "description": "Set to true to immediately active this account. Otherwise it can be activated later through the “EnableTradingAccount” action"
          },
          "tradingPermission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          },
          "portfolioMode": {
            "$ref": "#/components/schemas/ExecutionPortfolioModeEnum"
          },
          "disableOtherAccountsEnabled": {
            "type": "boolean",
            "description": "It may be true if you want to disable all the other accounts enabled of the user",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "description": "It is optional",
            "format": "date-time",
            "nullable": true
          },
          "expirationMode": {
            "$ref": "#/components/schemas/TradingAccountExpirationEnum"
          },
          "endDate": {
            "type": "string",
            "description": "It is required if expiration mode is setted as EndDate",
            "format": "date-time",
            "nullable": true
          },
          "expirationDays": {
            "type": "integer",
            "description": "It is required if expiration mode is setted as Days",
            "format": "int32",
            "nullable": true
          },
          "userRiskRuleEntitlement": {
            "$ref": "#/components/schemas/TradingAccountUserRiskRuleEnum"
          },
          "subscriptionDetail": {
            "$ref": "#/components/schemas/SubscriptionDetailInputModel"
          },
          "links": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/components/schemas/TradingAccountLinkInputModel"
            },
            "description": "Dictionary with header of the link as key. Optional - it can be setted in order to show some custom links on the account dashbaord",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "NewTradingRuleInputModel": {
        "type": "object",
        "properties": {
          "ruleId": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "groupUniverseId": {
            "type": "string",
            "nullable": true
          },
          "accountFamilyId": {
            "type": "string",
            "nullable": true
          },
          "startingBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "currency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "marginType": {
            "$ref": "#/components/schemas/TradingAccountMarginTypeEnum"
          },
          "marginLeverage": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "marginPowerAmount": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxDrawdownMode": {
            "$ref": "#/components/schemas/DrawdownModeEnum"
          },
          "maxDrawdownMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxDrawdownPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxDrawdownSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxDrawdownAction": {
            "$ref": "#/components/schemas/RiskActionEnum"
          },
          "maxDrawdownTrailingMode": {
            "$ref": "#/components/schemas/RiskTrailingModeEnum"
          },
          "maxDrawdownThresholdLimitMode": {
            "$ref": "#/components/schemas/RiskThresholdLimitModeEnum"
          },
          "maxDrawdownThresholdLimitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "profitTargetAction": {
            "$ref": "#/components/schemas/RiskProfitTargetActionEnum"
          },
          "profitTargetCalculation": {
            "$ref": "#/components/schemas/RiskProfitTargetModeEnum"
          },
          "profitTargetMoney": {
            "type": "integer",
            "format": "int32"
          },
          "profitTargetPercentual": {
            "type": "number",
            "format": "double"
          },
          "profitTargetAverageDays": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "profitTargetSessionsCumProfits": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "profitTargetSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "profitTargetSituation": {
            "$ref": "#/components/schemas/RiskSuccessSituationEnum"
          },
          "consistencyAction": {
            "$ref": "#/components/schemas/RiskConsistencyActionEnum"
          },
          "consistencyMode": {
            "$ref": "#/components/schemas/RiskConsistencyModeEnum"
          },
          "consistencyPercentual": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "consistencyMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "consistencySessionsNumber": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxIntradayDrawdownMode": {
            "$ref": "#/components/schemas/RiskDrawdownSessionModeEnum"
          },
          "maxIntradayDrawdownMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxIntradayDrawdownPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxIntradayDrawdownPercentualReference": {
            "$ref": "#/components/schemas/RiskPercentualReferenceEnum"
          },
          "maxIntradayDrawdownSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxIntradayDrawdownAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxIntradayDrawdownThresholdLimitMode": {
            "$ref": "#/components/schemas/RiskThresholdLimitModeEnum"
          },
          "maxIntradayDrawdownThresholdLimitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxWeeklyDrawdownMode": {
            "$ref": "#/components/schemas/RiskDrawdownSessionModeEnum"
          },
          "maxWeeklyDrawdownMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxWeeklyDrawdownPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxWeeklyDrawdownPercentualReference": {
            "$ref": "#/components/schemas/RiskPercentualReferenceEnum"
          },
          "maxWeeklyDrawdownSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxWeeklyDrawdownAction": {
            "$ref": "#/components/schemas/RiskWeeklyActionEnum"
          },
          "maxWeeklyDrawdownThresholdLimitMode": {
            "$ref": "#/components/schemas/RiskThresholdLimitModeEnum"
          },
          "maxWeeklyDrawdownThresholdLimitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxIntradayRunupMode": {
            "$ref": "#/components/schemas/RiskIntradayRunupModeEnum"
          },
          "maxIntradayRunupMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxIntradayRunupPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxIntradayRunupSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxIntradayRunupAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxPositionLossMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxPositionLossPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxPositionLossSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxPositionLossMode": {
            "$ref": "#/components/schemas/RiskPositionModeEnum"
          },
          "maxPositionLossAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxPositionLossPercentualReference": {
            "$ref": "#/components/schemas/RiskPositionReferencePercentualEnum"
          },
          "maxPositionGainMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxPositionGainPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxPositionGainSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxPositionGainMode": {
            "$ref": "#/components/schemas/RiskPositionModeEnum"
          },
          "maxPositionGainAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxOpenLossMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxOpenLossPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxOpenLossPercentualReference": {
            "$ref": "#/components/schemas/RiskPercentualReferenceEnum"
          },
          "maxOpenLossSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxOpenLossAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxOpenGainMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxOpenGainPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxOpenGainSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxOpenGainAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxTradePerDay": {
            "type": "integer",
            "format": "int32"
          },
          "maxTradePerDayAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "sessionCountMode": {
            "$ref": "#/components/schemas/SessionCountModeEnum"
          },
          "minSessionNumbers": {
            "type": "integer",
            "format": "int32"
          },
          "failOnOvernight": {
            "type": "boolean"
          },
          "failOnOverweekend": {
            "type": "boolean"
          },
          "excludePnlMode": {
            "$ref": "#/components/schemas/RiskPnlModeEnum"
          },
          "excludeSymbolsNotListed": {
            "type": "boolean"
          },
          "tradingHoursAction": {
            "$ref": "#/components/schemas/RiskInhibitActionEnum"
          },
          "tradingHoursStartSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "tradingHoursEndSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "tradingHoursCheck": {
            "$ref": "#/components/schemas/RiskCheckOrdPosEnum"
          },
          "tradingNewsAction": {
            "$ref": "#/components/schemas/RiskInhibitActionEnum"
          },
          "tradingNewsWindowSeconds": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "tradingNewsPositionLogic": {
            "$ref": "#/components/schemas/RiskNewsPositionLogicEnum"
          },
          "checkTimeHoursAction": {
            "$ref": "#/components/schemas/RiskHoursCheckEnum"
          },
          "checkTimeHoursStartSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "checkTimeHoursEndSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "scalingPlanReference": {
            "$ref": "#/components/schemas/RiskScalingPlanReferenceEnum"
          },
          "scalingPlanCheck": {
            "$ref": "#/components/schemas/RiskScalingPlanCheckEnum"
          },
          "scalpingAction": {
            "$ref": "#/components/schemas/RiskTradeCheckActionEnum"
          },
          "scalpingMinSeconds": {
            "type": "integer",
            "format": "int32"
          },
          "scalpingTimesValue": {
            "type": "integer",
            "format": "int32"
          },
          "scalpingTimesReset": {
            "$ref": "#/components/schemas/RiskResetFrequencyEnum"
          },
          "scalpingTradeLogic": {
            "$ref": "#/components/schemas/RiskTradeLogic"
          },
          "minTradePriceAction": {
            "$ref": "#/components/schemas/RiskTradeCheckActionEnum"
          },
          "minTradePriceTradeLogic": {
            "$ref": "#/components/schemas/RiskTradeLogic"
          },
          "minTradePriceUnit": {
            "$ref": "#/components/schemas/RiskTradeUnitEnum"
          },
          "minTradePriceTicks": {
            "type": "integer",
            "format": "int32"
          },
          "minTradePriceAbsOrPerc": {
            "type": "number",
            "format": "double"
          },
          "minTradePriceTimesReset": {
            "$ref": "#/components/schemas/RiskResetFrequencyEnum"
          },
          "minTradePriceTimesValue": {
            "type": "integer",
            "format": "int32"
          },
          "userRiskManagmentEnabled": {
            "type": "boolean"
          },
          "userRuleDefaultDailyLossEnabled": {
            "type": "boolean"
          },
          "userRuleDefaultDailyLossMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userRuleDefaultDailyLossPercentual": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "symbolContracts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingRuleSymbolInputModel"
            },
            "nullable": true
          },
          "groupUniverseScaling": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingRuleGroupUniverseInputModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "NodeTradingHubInfo": {
        "type": "object",
        "properties": {
          "nodeIndex": {
            "type": "integer",
            "format": "int32"
          },
          "tradingHub": {
            "type": "string",
            "nullable": true
          },
          "token": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "NodeTradingHubInfoApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/NodeTradingHubInfo"
          }
        },
        "additionalProperties": false
      },
      "NodeTradingHubInfoListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/NodeTradingHubInfo"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "NotificationCategoryEnum": {
        "enum": [
          "0 = Accounts",
          "1 = OvernightPositions",
          "2 = Subscriptions",
          "3 = TradeReport",
          "4 = Portfolio"
        ],
        "type": "integer",
        "format": "int32"
      },
      "NotificationEventEnum": {
        "enum": [
          "0 = Created",
          "1 = Updated",
          "2 = Deleted",
          "3 = Overnight"
        ],
        "type": "integer",
        "format": "int32"
      },
      "ObjectApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "OrderQuantityModeEnum": {
        "enum": [
          "0 = Fixed",
          "1 = All"
        ],
        "type": "integer",
        "format": "int32"
      },
      "OrderReasonEnum": {
        "enum": [
          "0 = Unknown",
          "1 = Submission_Order",
          "2 = Submission_OcoGroup",
          "3 = Submission_Bracket",
          "10 = Liquidation_Flat",
          "11 = Liquidation_Reverse",
          "12 = Liquidation_Rollover",
          "13 = Liquidation_RiskRule",
          "14 = Liquidation_TradingHours",
          "15 = Liquidation_AccountStatus",
          "16 = Liquidation_AccountReset",
          "17 = Liquidation_AccountPermission"
        ],
        "type": "integer",
        "format": "int32"
      },
      "OrderSourceEnum": {
        "enum": [
          "0 = Client",
          "1 = Web",
          "2 = Internal",
          "3 = Hub",
          "4 = Bracket",
          "5 = Client_Manual",
          "6 = Client_Auto",
          "7 = Client_Copy"
        ],
        "type": "integer",
        "format": "int32"
      },
      "OrderStatusEnum": {
        "enum": [
          "0 = Cancelled",
          "1 = Working",
          "2 = Filled",
          "3 = Rejected"
        ],
        "type": "integer",
        "format": "int32"
      },
      "OrderTypeEnum": {
        "enum": [
          "0 = Market",
          "1 = Limit",
          "2 = Stop"
        ],
        "type": "integer",
        "format": "int32"
      },
      "PlatformEnum": {
        "enum": [
          "0 = VOLUMETRICA_TRADING",
          "1 = QUANTOWER",
          "2 = ATAS"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RateFrequencyUpdateEnum": {
        "enum": [
          "0 = Manually",
          "1 = Daily",
          "2 = Weekly",
          "3 = Monthly"
        ],
        "type": "integer",
        "format": "int32"
      },
      "ReportTradeViewModel": {
        "type": "object",
        "properties": {
          "tradeId": {
            "type": "integer",
            "format": "int64"
          },
          "symbolName": {
            "type": "string",
            "nullable": true
          },
          "symbolId": {
            "type": "integer",
            "format": "int64"
          },
          "contractId": {
            "type": "integer",
            "format": "int64"
          },
          "entryDate": {
            "type": "integer",
            "format": "int64"
          },
          "exitDate": {
            "type": "integer",
            "format": "int64"
          },
          "quantity": {
            "type": "integer",
            "format": "int32"
          },
          "entryPrice": {
            "type": "number",
            "format": "double"
          },
          "exitPrice": {
            "type": "number",
            "format": "double"
          },
          "grossPl": {
            "type": "number",
            "format": "double"
          },
          "netPl": {
            "type": "number",
            "format": "double"
          },
          "convertedGrossPl": {
            "type": "number",
            "format": "double"
          },
          "convertedNetPl": {
            "type": "number",
            "format": "double"
          },
          "overnight": {
            "type": "boolean"
          },
          "overweekend": {
            "type": "boolean"
          },
          "isCloseTrade": {
            "type": "boolean"
          },
          "maxQuantity": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "tradePl": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "convertedTradePl": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxDrawdown": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxRunup": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "currency": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "RequestValidationResult": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "errors": {
            "type": "object",
            "additionalProperties": {
              "type": "string",
              "nullable": true
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "RequestValidationResultApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/RequestValidationResult"
          }
        },
        "additionalProperties": false
      },
      "ResetTradingAccountInputModel": {
        "required": [
          "accountId"
        ],
        "type": "object",
        "properties": {
          "accountId": {
            "minLength": 1,
            "type": "string"
          },
          "status": {
            "$ref": "#/components/schemas/TradingAccountStatusEnum"
          },
          "permission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          },
          "sessionDateUtc": {
            "type": "string",
            "description": "Optional - reset to the start of a specific session",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "RiskActionEnum": {
        "enum": [
          "0 = None",
          "1 = ChallengeFail"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskCheckOrdPosEnum": {
        "enum": [
          "0 = Positions",
          "1 = Orders",
          "2 = OrdersAndPositions"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskConsistencyActionEnum": {
        "enum": [
          "0 = Disabled",
          "1 = Enable"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskConsistencyModeEnum": {
        "enum": [
          "0 = BestTradingDayTargetDifference",
          "1 = BestTradingDayTargetRatio",
          "2 = AverageBestTradingDay",
          "3 = MinimumWinnerDays"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskDrawdownSessionModeEnum": {
        "enum": [
          "0 = TrailingMaxBalance",
          "1 = StaticStartBalance",
          "2 = TrailingMaxEquity",
          "3 = StaticStartEquity",
          "4 = StaticMininmumStartEquityBalance"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskHoursCheckEnum": {
        "enum": [
          "0 = Always",
          "1 = Excluded"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskInhibitActionEnum": {
        "enum": [
          "0 = None",
          "1 = ChallengeFail",
          "2 = Liquidate",
          "3 = AllowCloseOnly",
          "4 = IntradayDisable"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskIntradayActionEnum": {
        "enum": [
          "0 = None",
          "1 = ChallengeFail",
          "2 = Flat",
          "3 = IntradayDisable"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskIntradayRunupModeEnum": {
        "enum": [
          "0 = TrailingStartBalance",
          "1 = TrailingMinBalance",
          "2 = TrailingStartEquity",
          "3 = TrailingMinEquity"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskNewsPositionLogicEnum": {
        "enum": [
          "0 = AllPositions",
          "1 = PositionInsideNewsWindow"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskPercentualReferenceEnum": {
        "enum": [
          "0 = ReferenceValue",
          "1 = StartBalance",
          "2 = BalanceLessDrawdown",
          "3 = EodBalanceLessDrawdown",
          "4 = EowBalanceLessDrawdown",
          "5 = BalanceLessStartBalance",
          "6 = EodBalanceLessStartBalance",
          "7 = EowBalanceLessStartBalance"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskPnlModeEnum": {
        "enum": [
          "0 = Net",
          "1 = Gross"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskPositionModeEnum": {
        "enum": [
          "0 = Single",
          "1 = Cumulative"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskPositionReferencePercentualEnum": {
        "enum": [
          "0 = AveragePrice",
          "1 = Balance",
          "2 = StartBalance",
          "3 = BalanceLessDrawdown",
          "4 = EodBalanceLessDrawdown",
          "5 = EowBalanceLessDrawdown"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskProfitTargetActionEnum": {
        "enum": [
          "0 = None",
          "1 = ChallengeSuccess",
          "2 = PayoutEligible"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskProfitTargetModeEnum": {
        "enum": [
          "0 = Profit",
          "1 = FixedBalance",
          "2 = AverageProfits",
          "3 = WinningTradingDays"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskResetFrequencyEnum": {
        "enum": [
          "0 = Never",
          "1 = Daily",
          "2 = Weekly"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskScalingPlanCheckEnum": {
        "enum": [
          "0 = EndOfDay",
          "1 = RealTime"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskScalingPlanReferenceEnum": {
        "enum": [
          "0 = BalanceMinusStartBalance",
          "1 = MaximumBalanceMinusStartBalance",
          "2 = Profits"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskSelectionEnum": {
        "enum": [
          "0 = Highest",
          "1 = Lowest"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskSideAllowEnum": {
        "enum": [
          "0 = AllSymbols",
          "1 = ETBOnly",
          "2 = IntradayOnlyAndETBOvernight",
          "3 = IntradayOnly",
          "4 = None"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskSuccessSituationEnum": {
        "enum": [
          "0 = EveryCase",
          "1 = NonePositions",
          "2 = NoneOrdersAndPositions"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskSymbolGroupQuantityCalculationEnum": {
        "enum": [
          "0 = Quantity",
          "1 = PercentualAdv14D",
          "2 = PercentualAdv50D"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskSymbolGroupQuantitySumEnum": {
        "enum": [
          "0 = PerContract",
          "1 = Cumulative"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskThresholdLimitModeEnum": {
        "enum": [
          "0 = None",
          "1 = AccountStartBalance",
          "2 = AccountStartBalancePlusCustomValue",
          "3 = CustomValue"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskTradeCheckActionEnum": {
        "enum": [
          "0 = None",
          "1 = ExcludePnl",
          "2 = ExcludePnlAndChallengeFail",
          "3 = ChallengeFail"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskTradeLogic": {
        "enum": [
          "0 = All",
          "1 = Winners",
          "2 = Losers"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskTradeUnitEnum": {
        "enum": [
          "0 = Percentual",
          "1 = Ticks",
          "2 = Absolute"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskTrailingModeEnum": {
        "enum": [
          "0 = Continous",
          "1 = Steps"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskUserReferenceEnum": {
        "enum": [
          "0 = Balance",
          "1 = Equity"
        ],
        "type": "integer",
        "format": "int32"
      },
      "RiskWeeklyActionEnum": {
        "enum": [
          "0 = None",
          "1 = ChallengeFail",
          "2 = WeeklyDisable"
        ],
        "type": "integer",
        "format": "int32"
      },
      "SessionCountModeEnum": {
        "enum": [
          "0 = OpenOrClose",
          "1 = CloseOnly"
        ],
        "type": "integer",
        "format": "int32"
      },
      "StringApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "StringHistoricalTradingAccountSnapshotListDictionaryApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/HistoricalTradingAccountSnapshot"
              },
              "nullable": true
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "StringListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "StringReportTradeViewModelListDictionaryApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReportTradeViewModel"
              },
              "nullable": true
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "StringTradingAccountInfoViewModelDictionaryApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/components/schemas/TradingAccountInfoViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "StringTradingFillViewModelListDictionaryApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TradingFillViewModel"
              },
              "nullable": true
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "StringTradingOrderViewModelListDictionaryApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "object",
            "additionalProperties": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TradingOrderViewModel"
              },
              "nullable": true
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "SubscriptionActiveRequest": {
        "required": [
          "subscriptionId"
        ],
        "type": "object",
        "properties": {
          "subscriptionId": {
            "minLength": 1,
            "type": "string",
            "description": "Id got back from NewSubscription action"
          }
        },
        "additionalProperties": false
      },
      "SubscriptionConfirmRequest": {
        "required": [
          "confirmationId",
          "subscriptionId"
        ],
        "type": "object",
        "properties": {
          "subscriptionId": {
            "minLength": 1,
            "type": "string",
            "description": "Id of the subscription"
          },
          "confirmationId": {
            "minLength": 1,
            "type": "string",
            "description": "Confirmation id received through webhook"
          }
        },
        "additionalProperties": false
      },
      "SubscriptionDeactiveRequest": {
        "required": [
          "subscriptionId"
        ],
        "type": "object",
        "properties": {
          "subscriptionId": {
            "minLength": 1,
            "type": "string",
            "description": "Id got back from NewSubscription action"
          }
        },
        "additionalProperties": false
      },
      "SubscriptionDetailInputModel": {
        "type": "object",
        "properties": {
          "dataFeedProducts": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "nullable": true
          },
          "platform": {
            "$ref": "#/components/schemas/PlatformEnum"
          },
          "allowedSelfCertification": {
            "$ref": "#/components/schemas/MarketDataCertificationAllowedEnum"
          }
        },
        "additionalProperties": false
      },
      "SubscriptionStatusEnum": {
        "enum": [
          "0 = Disabled",
          "1 = Active",
          "2 = Scheduled",
          "3 = UserOnHold",
          "4 = PropfirmOnHold",
          "5 = ExternalError"
        ],
        "type": "integer",
        "format": "int32"
      },
      "SubscriptionViewModel": {
        "type": "object",
        "properties": {
          "subscriptionId": {
            "type": "string",
            "nullable": true
          },
          "confirmationId": {
            "type": "string",
            "nullable": true
          },
          "status": {
            "$ref": "#/components/schemas/SubscriptionStatusEnum"
          },
          "activation": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "expiration": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "dxDataProducts": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "nullable": true
          },
          "dxAgreementSigned": {
            "type": "boolean"
          },
          "dxAgreementLink": {
            "type": "string",
            "nullable": true
          },
          "dxSelfCertification": {
            "type": "string",
            "nullable": true
          },
          "platform": {
            "$ref": "#/components/schemas/PlatformEnum"
          },
          "volumetricaPlatform": {
            "type": "string",
            "nullable": true
          },
          "volumetricaLicense": {
            "type": "string",
            "nullable": true
          },
          "volumetricaDownloadLink": {
            "type": "string",
            "nullable": true
          },
          "userId": {
            "type": "string",
            "nullable": true
          },
          "lastVersionId": {
            "type": "integer",
            "format": "int64"
          }
        },
        "additionalProperties": false
      },
      "SubscriptionViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/SubscriptionViewModel"
          }
        },
        "additionalProperties": false
      },
      "SubscriptionViewModelDataTableViewModel": {
        "type": "object",
        "properties": {
          "draw": {
            "type": "integer",
            "format": "int32"
          },
          "recordsTotal": {
            "type": "integer",
            "format": "int32"
          },
          "recordsFiltered": {
            "type": "integer",
            "format": "int32"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SubscriptionViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "SubscriptionViewModelDataTableViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/SubscriptionViewModelDataTableViewModel"
          }
        },
        "additionalProperties": false
      },
      "SymbolInfoViewModel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "exchange": {
            "type": "string",
            "nullable": true
          },
          "symbolGroup": {
            "type": "string",
            "nullable": true
          },
          "margin": {
            "type": "integer",
            "format": "int32"
          },
          "commission": {
            "type": "number",
            "format": "double"
          },
          "inhibitTrading": {
            "type": "boolean"
          },
          "adv14D": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "adv50D": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "adc14D": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "forceSubscription": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "SymbolInfoViewModelListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SymbolInfoViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradeFlagEnum": {
        "enum": [
          "0 = None",
          "1 = Scalp",
          "2 = ClosedTooCloseToEntry"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingAccountBalanceUpdateActionEnum": {
        "enum": [
          "0 = Add",
          "1 = Subtract",
          "2 = Set",
          "3 = Withdraw",
          "4 = Deposit"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingAccountBalanceUpdateRequest": {
        "required": [
          "accountId"
        ],
        "type": "object",
        "properties": {
          "action": {
            "$ref": "#/components/schemas/TradingAccountBalanceUpdateActionEnum"
          },
          "value": {
            "type": "number",
            "format": "double"
          },
          "moveDrawdownToThresholdLimit": {
            "type": "boolean",
            "nullable": true
          },
          "accountId": {
            "minLength": 1,
            "type": "string",
            "description": "Id of the account"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountChangePermissionRequest": {
        "required": [
          "accountId",
          "tradingPermission"
        ],
        "type": "object",
        "properties": {
          "accountId": {
            "minLength": 1,
            "type": "string",
            "description": "Id of the account"
          },
          "tradingPermission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          },
          "forceClose": {
            "type": "boolean",
            "description": "Force closing positions or orders if open"
          },
          "reason": {
            "type": "string",
            "description": "Reason for status changed",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountChangeScheduleRequest": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "startDate": {
            "type": "string",
            "description": "It must be setted only if you want to change it. It can be changed only for account on Initialized status",
            "format": "date-time",
            "nullable": true
          },
          "endDate": {
            "type": "string",
            "description": "It must be settedf only if you want to change it. It can be changed only for acconut on Initialized or Enabled status",
            "format": "date-time",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountChangeStatusRequest": {
        "required": [
          "accountId"
        ],
        "type": "object",
        "properties": {
          "accountId": {
            "minLength": 1,
            "type": "string",
            "description": "Id of the account"
          },
          "status": {
            "$ref": "#/components/schemas/TradingAccountStatusEnum"
          },
          "tradingPermission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          },
          "reason": {
            "type": "string",
            "description": "Reason for status changed",
            "nullable": true
          },
          "forceClose": {
            "type": "boolean",
            "description": "Force closing positions or orders if open"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountDisableRequest": {
        "required": [
          "accountId"
        ],
        "type": "object",
        "properties": {
          "accountId": {
            "minLength": 1,
            "type": "string",
            "description": "Id of the account"
          },
          "reason": {
            "type": "string",
            "description": "Reason for status changed",
            "nullable": true
          },
          "forceClose": {
            "type": "boolean",
            "description": "Force closing positions or orders if open"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountEnableRequest": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "tradingPermission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountExpirationEnum": {
        "enum": [
          "0 = None",
          "1 = EndDate",
          "2 = DaysFromActivation",
          "3 = DaysFromFirstOrder",
          "4 = DaysFromFirstFilled"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingAccountFlatPositionRequest": {
        "type": "object",
        "properties": {
          "contractId": {
            "type": "integer",
            "format": "int64"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountHeaderViewModel": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "displayId": {
            "type": "string",
            "nullable": true
          },
          "header": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "userDescription": {
            "type": "string",
            "nullable": true
          },
          "currency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "startBalance": {
            "type": "number",
            "format": "double"
          },
          "balance": {
            "type": "number",
            "format": "double"
          },
          "maximumBalance": {
            "type": "number",
            "format": "double"
          },
          "minimumBalance": {
            "type": "number",
            "format": "double"
          },
          "sessionNumbers": {
            "type": "integer",
            "format": "int32"
          },
          "enabled": {
            "type": "boolean"
          },
          "status": {
            "$ref": "#/components/schemas/TradingAccountStatusEnum"
          },
          "tradingPermission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "disableDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "expirationMode": {
            "$ref": "#/components/schemas/TradingAccountExpirationEnum"
          },
          "tradingRuleLevel": {
            "$ref": "#/components/schemas/TradingRuleLevelEnum"
          },
          "tradingRuleId": {
            "type": "string",
            "nullable": true
          },
          "rule": {
            "type": "string",
            "nullable": true
          },
          "accountFamilyId": {
            "type": "string",
            "nullable": true
          },
          "userRiskManagmentEnabled": {
            "type": "boolean"
          },
          "reason": {
            "type": "string",
            "nullable": true
          },
          "nodeIndex": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "user": {
            "$ref": "#/components/schemas/UserCompactViewModel"
          },
          "userId": {
            "type": "string",
            "nullable": true
          },
          "links": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingAccountLinkViewModel"
            },
            "nullable": true
          },
          "htmlBadgeStatusCss": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          },
          "htmlBadgePermissionCss": {
            "type": "string",
            "nullable": true,
            "readOnly": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountHeaderViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingAccountHeaderViewModel"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountHeaderViewModelDataTableViewModel": {
        "type": "object",
        "properties": {
          "draw": {
            "type": "integer",
            "format": "int32"
          },
          "recordsTotal": {
            "type": "integer",
            "format": "int32"
          },
          "recordsFiltered": {
            "type": "integer",
            "format": "int32"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingAccountHeaderViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountHeaderViewModelDataTableViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingAccountHeaderViewModelDataTableViewModel"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountHeaderViewModelListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingAccountHeaderViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountInfoViewModel": {
        "type": "object",
        "properties": {
          "status": {
            "$ref": "#/components/schemas/TradingAccountStatusEnum"
          },
          "tradingPermission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          },
          "reason": {
            "type": "string",
            "nullable": true
          },
          "snapshot": {
            "$ref": "#/components/schemas/TradingAccountSnapshotViewModel"
          },
          "tradingRuleId": {
            "type": "string",
            "nullable": true
          },
          "userRiskManagmentEnabled": {
            "type": "boolean"
          },
          "orders": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingOrderViewModel"
            },
            "nullable": true
          },
          "positions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingPositionViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountInfoViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingAccountInfoViewModel"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountLinkInputModel": {
        "type": "object",
        "properties": {
          "link": {
            "type": "string",
            "nullable": true
          },
          "cssClass": {
            "type": "string",
            "nullable": true
          },
          "backgroundColor": {
            "type": "string",
            "nullable": true
          },
          "statusToShow": {
            "$ref": "#/components/schemas/TradingAccountStatusEnum"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountLinkViewModel": {
        "type": "object",
        "properties": {
          "header": {
            "type": "string",
            "nullable": true
          },
          "link": {
            "type": "string",
            "nullable": true
          },
          "cssClass": {
            "type": "string",
            "nullable": true
          },
          "backgroundColor": {
            "type": "string",
            "nullable": true
          },
          "statusToShow": {
            "$ref": "#/components/schemas/TradingAccountStatusEnum"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountListResult": {
        "type": "object",
        "properties": {
          "accounts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingAccountHeaderViewModel"
            },
            "nullable": true
          },
          "accountDefaultId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountListResultApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingAccountListResult"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountMarginTypeEnum": {
        "enum": [
          "0 = Balance",
          "1 = Leverage",
          "2 = FixedPowerAmount"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingAccountOrderCancelRequest": {
        "type": "object",
        "properties": {
          "orderId": {
            "type": "integer",
            "format": "int64"
          }
        },
        "additionalProperties": false
      },
      "TradingAccountPermissionEnum": {
        "enum": [
          "0 = Trading",
          "1 = ReadOnly",
          "2 = RiskPause",
          "3 = LiquidateOnly"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingAccountRuleChangeRequest": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "string",
            "description": "Id of the account",
            "nullable": true
          },
          "ruleId": {
            "type": "string",
            "description": "Id of the trading rule to apply",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountSnapshotViewModel": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "integer",
            "format": "int64"
          },
          "currency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "startBalance": {
            "type": "number",
            "format": "double"
          },
          "balance": {
            "type": "number",
            "format": "double"
          },
          "equity": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "marginAvailable": {
            "type": "number",
            "format": "double"
          },
          "marginUsed": {
            "type": "number",
            "format": "double"
          },
          "minimumBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumSessionClosedBalance": {
            "type": "number",
            "format": "double"
          },
          "maximumSessionClosedEquity": {
            "type": "number",
            "format": "double"
          },
          "maximumBalanceUtc": {
            "type": "string",
            "format": "date-time"
          },
          "minimumEquity": {
            "type": "number",
            "format": "double"
          },
          "maximumEquityUtc": {
            "type": "string",
            "format": "date-time"
          },
          "maximumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayStartBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayStartEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMinimumBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumBalance": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumBalanceUtc": {
            "type": "string",
            "format": "date-time"
          },
          "intradayMinimumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumEquity": {
            "type": "number",
            "format": "double"
          },
          "intradayMaximumEquityUtc": {
            "type": "string",
            "format": "date-time"
          },
          "intradayNumberOfTrades": {
            "type": "integer",
            "format": "int32"
          },
          "intradayStartStopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyStartBalance": {
            "type": "number",
            "format": "double"
          },
          "weeklyStartEquity": {
            "type": "number",
            "format": "double"
          },
          "weeklyMaximumBalance": {
            "type": "number",
            "format": "double"
          },
          "weeklyMaximumEquity": {
            "type": "number",
            "format": "double"
          },
          "weeklyStartStopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownIntradayBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownWeeklyBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopRunupIntradayBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "profitTargetBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "sessionAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "cumulativeAmountWithdrawn": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dailyPL": {
            "type": "number",
            "format": "double"
          },
          "dailyNetPL": {
            "type": "number",
            "format": "double"
          },
          "groupUniverseScalingStep": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "updateUtc": {
            "type": "string",
            "format": "date-time"
          },
          "sessionNumbers": {
            "type": "integer",
            "format": "int32"
          },
          "overweekContracts": {
            "type": "integer",
            "format": "int32"
          },
          "overnightContracts": {
            "type": "integer",
            "format": "int32"
          },
          "winningTradingSessions": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "tradingSessionsNetPnL": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "forceDrawdownToThresholdLimit": {
            "type": "boolean"
          },
          "scalpingCheckTimesTriggered": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "tradePriceCheckTimesTriggered": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "stopDrawdownValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownIntradayValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopDrawdownWeeklyValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "stopIntradayRunupValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "profitTargetValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "minSessionNumbers": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userDailyLossBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userDailyLossValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userDailyProfitBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userDailyProfitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userWeeklyLossBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userWeeklyLossValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userWeeklyProfitBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userWeeklyProfitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingAccountStatusEnum": {
        "enum": [
          "0 = Initialized",
          "1 = Enabled",
          "2 = ChallengeSuccess",
          "4 = ChallengeFailed",
          "8 = Disabled"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingAccountUserRiskRuleEnum": {
        "enum": [
          "0 = Default",
          "1 = Enabled",
          "2 = Disabled"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingAccountWebhookViewModel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "nullable": true
          },
          "snapshot": {
            "$ref": "#/components/schemas/BaseTradingAccountSnapshotDetail"
          },
          "enabled": {
            "type": "boolean"
          },
          "status": {
            "$ref": "#/components/schemas/TradingAccountStatusEnum"
          },
          "tradingPermission": {
            "$ref": "#/components/schemas/TradingAccountPermissionEnum"
          },
          "reason": {
            "type": "string",
            "nullable": true
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "ruleId": {
            "type": "string",
            "nullable": true
          },
          "ruleName": {
            "type": "string",
            "nullable": true
          },
          "accountFamilyId": {
            "type": "string",
            "nullable": true
          },
          "user": {
            "$ref": "#/components/schemas/UserCompactViewModel"
          },
          "userId": {
            "type": "string",
            "nullable": true
          },
          "lastVersionId": {
            "type": "integer",
            "format": "int64"
          }
        },
        "additionalProperties": false
      },
      "TradingCancelOrderRequest": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "orderId": {
            "type": "integer",
            "description": "if it is null, all orders of the account are flatten",
            "format": "int64",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingCommissionModeEnum": {
        "enum": [
          "0 = Quantity",
          "1 = Order",
          "2 = PercentualCountervalue"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingFillViewModel": {
        "type": "object",
        "properties": {
          "fillId": {
            "type": "integer",
            "format": "int64"
          },
          "accountId": {
            "type": "integer",
            "format": "int64"
          },
          "contractId": {
            "type": "integer",
            "format": "int64"
          },
          "executeDtUtc": {
            "type": "string",
            "format": "date-time"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "quantity": {
            "type": "integer",
            "format": "int32"
          },
          "commissions": {
            "type": "number",
            "format": "double"
          },
          "symbolName": {
            "type": "string",
            "nullable": true
          },
          "symbolId": {
            "type": "integer",
            "format": "int64"
          }
        },
        "additionalProperties": false
      },
      "TradingFlatPositionRequest": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "contractId": {
            "type": "integer",
            "description": "if it is null, all positions of the account are flatten",
            "format": "int64",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingHubTokenResult": {
        "type": "object",
        "properties": {
          "host": {
            "type": "string",
            "nullable": true
          },
          "token": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingHubTokenResultApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingHubTokenResult"
          }
        },
        "additionalProperties": false
      },
      "TradingOrderViewModel": {
        "type": "object",
        "properties": {
          "orderId": {
            "type": "integer",
            "format": "int64"
          },
          "accountId": {
            "type": "integer",
            "format": "int64"
          },
          "contractId": {
            "type": "integer",
            "format": "int64"
          },
          "insertDtUtc": {
            "type": "string",
            "format": "date-time"
          },
          "executeDtUtc": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "cancelDtUtc": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "status": {
            "$ref": "#/components/schemas/OrderStatusEnum"
          },
          "ordType": {
            "$ref": "#/components/schemas/OrderTypeEnum"
          },
          "insertPrice": {
            "type": "number",
            "format": "double"
          },
          "executePrice": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "totalQty": {
            "type": "integer",
            "format": "int32"
          },
          "filledQty": {
            "type": "integer",
            "format": "int32"
          },
          "modified": {
            "type": "boolean"
          },
          "orginOcoGroupId": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "orginOrderId": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "linkedPositionId": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "source": {
            "$ref": "#/components/schemas/OrderSourceEnum"
          },
          "ip": {
            "type": "string",
            "nullable": true
          },
          "platform": {
            "$ref": "#/components/schemas/PlatformEnum"
          },
          "reason": {
            "$ref": "#/components/schemas/OrderReasonEnum"
          },
          "quantityMode": {
            "$ref": "#/components/schemas/OrderQuantityModeEnum"
          },
          "symbolName": {
            "type": "string",
            "nullable": true
          },
          "symbolId": {
            "type": "integer",
            "format": "int64"
          },
          "contract": {
            "$ref": "#/components/schemas/ContractDetailInfoModel"
          }
        },
        "additionalProperties": false
      },
      "TradingOrderViewModelListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingOrderViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingPositionViewModel": {
        "type": "object",
        "properties": {
          "contractId": {
            "type": "integer",
            "format": "int64"
          },
          "positionId": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "contract": {
            "$ref": "#/components/schemas/ContractDetailInfoModel"
          },
          "entryDateUtc": {
            "type": "string",
            "format": "date-time"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "quantity": {
            "type": "integer",
            "format": "int32"
          },
          "dailyPl": {
            "type": "number",
            "format": "double"
          },
          "convertedDailyPl": {
            "type": "number",
            "format": "double"
          },
          "dailyNetPl": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "convertedDailyNetPl": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "bought": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "sold": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "openPl": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "convertedOpenPl": {
            "type": "number",
            "format": "double",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingReportViewModel": {
        "type": "object",
        "properties": {
          "netProfit": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "netLoss": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "commissionsPaid": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "maxCloseDrawdown": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "winningTrades": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "nullable": true
          },
          "losingTrades": {
            "type": "array",
            "items": {
              "type": "integer",
              "format": "int32"
            },
            "nullable": true
          },
          "maxWin": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "maxLose": {
            "type": "array",
            "items": {
              "type": "number",
              "format": "double"
            },
            "nullable": true
          },
          "trades": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ReportTradeViewModel"
            },
            "nullable": true
          },
          "contracts": {
            "type": "object",
            "additionalProperties": {
              "type": "string",
              "nullable": true
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingReportViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingReportViewModel"
          }
        },
        "additionalProperties": false
      },
      "TradingRuleGroupUniverseChangeRequest": {
        "type": "object",
        "properties": {
          "ruleId": {
            "type": "string",
            "nullable": true
          },
          "groupId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingRuleGroupUniverseInputModel": {
        "type": "object",
        "properties": {
          "groupUniverseId": {
            "type": "string",
            "nullable": true
          },
          "profits": {
            "type": "number",
            "format": "double"
          }
        },
        "additionalProperties": false
      },
      "TradingRuleGroupUniverseResult": {
        "type": "object",
        "properties": {
          "profits": {
            "type": "number",
            "format": "double"
          },
          "groupUniverseId": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingRuleLevelEnum": {
        "enum": [
          "0 = Global",
          "1 = SingleAccount"
        ],
        "type": "integer",
        "format": "int32"
      },
      "TradingRuleResult": {
        "type": "object",
        "properties": {
          "ruleId": {
            "type": "string",
            "nullable": true
          },
          "description": {
            "type": "string",
            "nullable": true
          },
          "groupUniverseId": {
            "type": "string",
            "nullable": true
          },
          "accountFamilyId": {
            "type": "string",
            "nullable": true
          },
          "startingBalance": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "currency": {
            "$ref": "#/components/schemas/CurrencyEnum"
          },
          "marginType": {
            "$ref": "#/components/schemas/TradingAccountMarginTypeEnum"
          },
          "marginLeverage": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "marginPowerAmount": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxDrawdownMode": {
            "$ref": "#/components/schemas/DrawdownModeEnum"
          },
          "maxDrawdownMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxDrawdownPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxDrawdownSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxDrawdownAction": {
            "$ref": "#/components/schemas/RiskActionEnum"
          },
          "maxDrawdownTrailingMode": {
            "$ref": "#/components/schemas/RiskTrailingModeEnum"
          },
          "maxDrawdownThresholdLimitMode": {
            "$ref": "#/components/schemas/RiskThresholdLimitModeEnum"
          },
          "maxDrawdownThresholdLimitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "profitTargetAction": {
            "$ref": "#/components/schemas/RiskProfitTargetActionEnum"
          },
          "profitTargetCalculation": {
            "$ref": "#/components/schemas/RiskProfitTargetModeEnum"
          },
          "profitTargetMoney": {
            "type": "integer",
            "format": "int32"
          },
          "profitTargetPercentual": {
            "type": "number",
            "format": "double"
          },
          "profitTargetAverageDays": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "profitTargetSessionsCumProfits": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "profitTargetSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "profitTargetSituation": {
            "$ref": "#/components/schemas/RiskSuccessSituationEnum"
          },
          "consistencyAction": {
            "$ref": "#/components/schemas/RiskConsistencyActionEnum"
          },
          "consistencyMode": {
            "$ref": "#/components/schemas/RiskConsistencyModeEnum"
          },
          "consistencyPercentual": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "consistencyMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "consistencySessionsNumber": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxIntradayDrawdownMode": {
            "$ref": "#/components/schemas/RiskDrawdownSessionModeEnum"
          },
          "maxIntradayDrawdownMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxIntradayDrawdownPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxIntradayDrawdownPercentualReference": {
            "$ref": "#/components/schemas/RiskPercentualReferenceEnum"
          },
          "maxIntradayDrawdownSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxIntradayDrawdownAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxIntradayDrawdownThresholdLimitMode": {
            "$ref": "#/components/schemas/RiskThresholdLimitModeEnum"
          },
          "maxIntradayDrawdownThresholdLimitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxWeeklyDrawdownMode": {
            "$ref": "#/components/schemas/RiskDrawdownSessionModeEnum"
          },
          "maxWeeklyDrawdownMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxWeeklyDrawdownPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxWeeklyDrawdownPercentualReference": {
            "$ref": "#/components/schemas/RiskPercentualReferenceEnum"
          },
          "maxWeeklyDrawdownSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxWeeklyDrawdownAction": {
            "$ref": "#/components/schemas/RiskWeeklyActionEnum"
          },
          "maxWeeklyDrawdownThresholdLimitMode": {
            "$ref": "#/components/schemas/RiskThresholdLimitModeEnum"
          },
          "maxWeeklyDrawdownThresholdLimitValue": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "maxIntradayRunupMode": {
            "$ref": "#/components/schemas/RiskIntradayRunupModeEnum"
          },
          "maxIntradayRunupMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxIntradayRunupPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxIntradayRunupSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxIntradayRunupAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxPositionLossMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxPositionLossPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxPositionLossSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxPositionLossMode": {
            "$ref": "#/components/schemas/RiskPositionModeEnum"
          },
          "maxPositionLossAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxPositionLossPercentualReference": {
            "$ref": "#/components/schemas/RiskPositionReferencePercentualEnum"
          },
          "maxPositionGainMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxPositionGainPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxPositionGainSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxPositionGainMode": {
            "$ref": "#/components/schemas/RiskPositionModeEnum"
          },
          "maxPositionGainAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxOpenLossMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxOpenLossPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxOpenLossPercentualReference": {
            "$ref": "#/components/schemas/RiskPercentualReferenceEnum"
          },
          "maxOpenLossSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxOpenLossAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxOpenGainMoney": {
            "type": "integer",
            "format": "int32"
          },
          "maxOpenGainPercentual": {
            "type": "number",
            "format": "double"
          },
          "maxOpenGainSelection": {
            "$ref": "#/components/schemas/RiskSelectionEnum"
          },
          "maxOpenGainAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "maxTradePerDay": {
            "type": "integer",
            "format": "int32"
          },
          "maxTradePerDayAction": {
            "$ref": "#/components/schemas/RiskIntradayActionEnum"
          },
          "sessionCountMode": {
            "$ref": "#/components/schemas/SessionCountModeEnum"
          },
          "minSessionNumbers": {
            "type": "integer",
            "format": "int32"
          },
          "failOnOvernight": {
            "type": "boolean"
          },
          "failOnOverweekend": {
            "type": "boolean"
          },
          "excludePnlMode": {
            "$ref": "#/components/schemas/RiskPnlModeEnum"
          },
          "excludeSymbolsNotListed": {
            "type": "boolean"
          },
          "tradingHoursAction": {
            "$ref": "#/components/schemas/RiskInhibitActionEnum"
          },
          "tradingHoursStartSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "tradingHoursEndSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "tradingHoursCheck": {
            "$ref": "#/components/schemas/RiskCheckOrdPosEnum"
          },
          "tradingNewsAction": {
            "$ref": "#/components/schemas/RiskInhibitActionEnum"
          },
          "tradingNewsWindowSeconds": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "tradingNewsPositionLogic": {
            "$ref": "#/components/schemas/RiskNewsPositionLogicEnum"
          },
          "checkTimeHoursAction": {
            "$ref": "#/components/schemas/RiskHoursCheckEnum"
          },
          "checkTimeHoursStartSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "checkTimeHoursEndSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "scalingPlanReference": {
            "$ref": "#/components/schemas/RiskScalingPlanReferenceEnum"
          },
          "scalingPlanCheck": {
            "$ref": "#/components/schemas/RiskScalingPlanCheckEnum"
          },
          "scalpingAction": {
            "$ref": "#/components/schemas/RiskTradeCheckActionEnum"
          },
          "scalpingMinSeconds": {
            "type": "integer",
            "format": "int32"
          },
          "scalpingTimesValue": {
            "type": "integer",
            "format": "int32"
          },
          "scalpingTimesReset": {
            "$ref": "#/components/schemas/RiskResetFrequencyEnum"
          },
          "scalpingTradeLogic": {
            "$ref": "#/components/schemas/RiskTradeLogic"
          },
          "minTradePriceAction": {
            "$ref": "#/components/schemas/RiskTradeCheckActionEnum"
          },
          "minTradePriceTradeLogic": {
            "$ref": "#/components/schemas/RiskTradeLogic"
          },
          "minTradePriceUnit": {
            "$ref": "#/components/schemas/RiskTradeUnitEnum"
          },
          "minTradePriceTicks": {
            "type": "integer",
            "format": "int32"
          },
          "minTradePriceAbsOrPerc": {
            "type": "number",
            "format": "double"
          },
          "minTradePriceTimesReset": {
            "$ref": "#/components/schemas/RiskResetFrequencyEnum"
          },
          "minTradePriceTimesValue": {
            "type": "integer",
            "format": "int32"
          },
          "userRiskManagmentEnabled": {
            "type": "boolean"
          },
          "userRuleDefaultDailyLossEnabled": {
            "type": "boolean"
          },
          "userRuleDefaultDailyLossMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "userRuleDefaultDailyLossPercentual": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "level": {
            "$ref": "#/components/schemas/TradingRuleLevelEnum"
          },
          "symbolContracts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingRuleSymbolResult"
            },
            "nullable": true
          },
          "groupUniverseScaling": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingRuleGroupUniverseResult"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingRuleResultApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingRuleResult"
          }
        },
        "additionalProperties": false
      },
      "TradingRuleResultDataTableViewModel": {
        "type": "object",
        "properties": {
          "draw": {
            "type": "integer",
            "format": "int32"
          },
          "recordsTotal": {
            "type": "integer",
            "format": "int32"
          },
          "recordsFiltered": {
            "type": "integer",
            "format": "int32"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TradingRuleResult"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingRuleResultDataTableViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingRuleResultDataTableViewModel"
          }
        },
        "additionalProperties": false
      },
      "TradingRuleSymbolInputModel": {
        "type": "object",
        "properties": {
          "symbolId": {
            "type": "integer",
            "format": "int64"
          },
          "maxContracts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxMoneyExposition": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingRuleSymbolResult": {
        "type": "object",
        "properties": {
          "symbolId": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string",
            "nullable": true
          },
          "maxContracts": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "maxMoneyExposition": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "TradingTradeInfoModel": {
        "type": "object",
        "properties": {
          "tradeId": {
            "type": "integer",
            "format": "int64"
          },
          "contractId": {
            "type": "integer",
            "format": "int64"
          },
          "entryDate": {
            "type": "string",
            "format": "date-time"
          },
          "exitDate": {
            "type": "string",
            "format": "date-time"
          },
          "quantity": {
            "type": "integer",
            "format": "int32"
          },
          "openPrice": {
            "type": "number",
            "format": "double"
          },
          "closePrice": {
            "type": "number",
            "format": "double"
          },
          "pl": {
            "type": "number",
            "format": "double"
          },
          "convertedPL": {
            "type": "number",
            "format": "double"
          },
          "commissionPaid": {
            "type": "number",
            "format": "double"
          },
          "convertedCommissionPaid": {
            "type": "number",
            "format": "double"
          },
          "contract": {
            "$ref": "#/components/schemas/ContractDetailInfoModel"
          },
          "unaccounted": {
            "type": "boolean"
          },
          "flags": {
            "$ref": "#/components/schemas/TradeFlagEnum"
          }
        },
        "additionalProperties": false
      },
      "TradingUserRuleInputModel": {
        "type": "object",
        "properties": {
          "dailyLossLimitEnable": {
            "type": "boolean"
          },
          "dailyLossLimitMode": {
            "$ref": "#/components/schemas/RiskDrawdownSessionModeEnum"
          },
          "dailyLossLimitMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dailyLossLimitPercentage": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dailyProfitLimitEnable": {
            "type": "boolean"
          },
          "dailyProfitReference": {
            "$ref": "#/components/schemas/RiskUserReferenceEnum"
          },
          "dailyProfitLimitMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "dailyProfitLimitPercentage": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyLossLimitEnable": {
            "type": "boolean"
          },
          "weeklyLossLimitMode": {
            "$ref": "#/components/schemas/RiskDrawdownSessionModeEnum"
          },
          "weeklyLossLimitMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyLossLimitPercentage": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyProfitLimitEnable": {
            "type": "boolean"
          },
          "weeklyProfitReference": {
            "$ref": "#/components/schemas/RiskUserReferenceEnum"
          },
          "weeklyProfitLimitMoney": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "weeklyProfitLimitPercentage": {
            "type": "number",
            "format": "double",
            "nullable": true
          },
          "tradingHoursLiquidateEnable": {
            "type": "boolean"
          },
          "tradingHoursStartSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "tradingHoursEndSession": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "inhibitChangesUntilNextSession": {
            "type": "boolean"
          },
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "setAsDefaultForAccountTradingRule": {
            "type": "boolean"
          },
          "isScheduled": {
            "type": "boolean",
            "description": "Just for UI/info purpose, it cannot be setted"
          }
        },
        "additionalProperties": false
      },
      "TradingUserRuleInputModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/TradingUserRuleInputModel"
          }
        },
        "additionalProperties": false
      },
      "UnitValueTypeEnum": {
        "enum": [
          "0 = Absolute",
          "1 = Percentual"
        ],
        "type": "integer",
        "format": "int32"
      },
      "UserCompactViewModel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "nullable": true
          },
          "fullName": {
            "type": "string",
            "nullable": true
          },
          "username": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "phone": {
            "type": "string",
            "nullable": true
          },
          "extEntityId": {
            "type": "string",
            "nullable": true
          },
          "theme": {
            "$ref": "#/components/schemas/UserThemeEnum"
          },
          "language": {
            "type": "string",
            "nullable": true
          },
          "propfirmName": {
            "type": "string",
            "nullable": true
          },
          "propfirmLogo": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserCompactViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/UserCompactViewModel"
          }
        },
        "additionalProperties": false
      },
      "UserDefaultAccountCreateRequest": {
        "required": [
          "userId"
        ],
        "type": "object",
        "properties": {
          "userId": {
            "minLength": 1,
            "type": "string",
            "description": "Id of the user"
          },
          "description": {
            "type": "string",
            "description": "it is a custom field that must be filled with some texts. It may be useful for have some notes relating the account. (e.g. challenge name)",
            "nullable": true
          },
          "keepOtherAccountsEnabled": {
            "type": "boolean",
            "description": "It may be true if you want to disable all the other accounts enabled of the user"
          },
          "subscriptionDetail": {
            "$ref": "#/components/schemas/SubscriptionDetailInputModel"
          }
        },
        "additionalProperties": false
      },
      "UserInputModel": {
        "required": [
          "email",
          "firstName",
          "lastName"
        ],
        "type": "object",
        "properties": {
          "username": {
            "type": "string",
            "description": "Optional - mail is used if username is keept empty",
            "nullable": true
          },
          "firstName": {
            "minLength": 1,
            "type": "string"
          },
          "lastName": {
            "minLength": 1,
            "type": "string"
          },
          "email": {
            "minLength": 1,
            "type": "string"
          },
          "mobilePhone": {
            "type": "string",
            "nullable": true
          },
          "address": {
            "type": "string",
            "nullable": true
          },
          "postalCode": {
            "type": "string",
            "nullable": true
          },
          "city": {
            "type": "string",
            "nullable": true
          },
          "state": {
            "type": "string",
            "nullable": true
          },
          "country": {
            "type": "string",
            "description": "ISO 2 letter code",
            "nullable": true
          },
          "fiscalCode": {
            "type": "string",
            "nullable": true
          },
          "birthday": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "language": {
            "type": "string",
            "description": "Iso_639_1 code for the language",
            "nullable": true
          },
          "encryptionMode": {
            "$ref": "#/components/schemas/EncryptionModeEnum"
          },
          "forceNewPassword": {
            "type": "boolean"
          },
          "passwordToSet": {
            "type": "string",
            "description": "optional - if it is sent as null, a password will be generated on our side",
            "nullable": true
          },
          "links": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserLinkInputModel"
            },
            "description": "Custom link that can be sent in order to be visible on the user's dashboard. \r\nExample: redirect to subscription manage and so on",
            "nullable": true
          },
          "overrideWebPlatform": {
            "type": "boolean"
          },
          "extEntityId": {
            "type": "string",
            "nullable": true
          },
          "userType": {
            "$ref": "#/components/schemas/UserTypeEnum"
          },
          "systemAccess": {
            "$ref": "#/components/schemas/UserSystemAccessEnum"
          },
          "wssAllowedIP": {
            "type": "string",
            "description": "Default is empty. It is used only for system user in order to protect access",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserLinkInputModel": {
        "type": "object",
        "properties": {
          "header": {
            "type": "string",
            "nullable": true
          },
          "link": {
            "type": "string",
            "nullable": true
          },
          "cssClass": {
            "type": "string",
            "nullable": true
          },
          "backgroundColor": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserResult": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "nullable": true
          },
          "username": {
            "type": "string",
            "nullable": true
          },
          "password": {
            "type": "string",
            "nullable": true
          },
          "encryptionMode": {
            "$ref": "#/components/schemas/EncryptionModeEnum"
          }
        },
        "additionalProperties": false
      },
      "UserResultApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/UserResult"
          }
        },
        "additionalProperties": false
      },
      "UserSubscriberStatusNotification": {
        "type": "object",
        "properties": {
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "subscriberStatus": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserSystemAccessEnum": {
        "enum": [
          "0 = ReadOnly",
          "1 = ReadWrite"
        ],
        "type": "integer",
        "format": "int32"
      },
      "UserThemeAndLanguageInputModel": {
        "required": [
          "language",
          "theme"
        ],
        "type": "object",
        "properties": {
          "theme": {
            "$ref": "#/components/schemas/UserThemeEnum"
          },
          "language": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      "UserThemeEnum": {
        "enum": [
          "0 = Light",
          "1 = Dark",
          "2 = Blue",
          "3 = Purple"
        ],
        "type": "integer",
        "format": "int32"
      },
      "UserTypeEnum": {
        "enum": [
          "0 = User",
          "1 = System"
        ],
        "type": "integer",
        "format": "int32"
      },
      "UserViewModel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "nullable": true
          },
          "userName": {
            "type": "string",
            "nullable": true
          },
          "email": {
            "type": "string",
            "nullable": true
          },
          "firstName": {
            "type": "string",
            "nullable": true
          },
          "lastName": {
            "type": "string",
            "nullable": true
          },
          "mobilePhone": {
            "type": "string",
            "nullable": true
          },
          "address": {
            "type": "string",
            "nullable": true
          },
          "postalCode": {
            "type": "string",
            "nullable": true
          },
          "city": {
            "type": "string",
            "nullable": true
          },
          "state": {
            "type": "string",
            "nullable": true
          },
          "country": {
            "type": "string",
            "nullable": true
          },
          "fiscalCode": {
            "type": "string",
            "nullable": true
          },
          "birthday": {
            "type": "string",
            "format": "date-time",
            "nullable": true
          },
          "nodeIndex": {
            "type": "integer",
            "format": "int32",
            "nullable": true
          },
          "webAccessDisabled": {
            "type": "boolean"
          },
          "culture": {
            "type": "string",
            "nullable": true
          },
          "theme": {
            "$ref": "#/components/schemas/UserThemeEnum"
          },
          "creationUtc": {
            "type": "string",
            "format": "date-time"
          },
          "updateUtc": {
            "type": "string",
            "format": "date-time"
          },
          "overrideWebPlatform": {
            "type": "boolean"
          },
          "userType": {
            "$ref": "#/components/schemas/UserTypeEnum"
          },
          "systemAccess": {
            "$ref": "#/components/schemas/UserSystemAccessEnum"
          },
          "extEntityId": {
            "maxLength": 255,
            "type": "string",
            "nullable": true
          },
          "wssAllowedIP": {
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/UserViewModel"
          }
        },
        "additionalProperties": false
      },
      "UserViewModelDataTableViewModel": {
        "type": "object",
        "properties": {
          "draw": {
            "type": "integer",
            "format": "int32"
          },
          "recordsTotal": {
            "type": "integer",
            "format": "int32"
          },
          "recordsFiltered": {
            "type": "integer",
            "format": "int32"
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UserViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "UserViewModelDataTableViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/UserViewModelDataTableViewModel"
          }
        },
        "additionalProperties": false
      },
      "WebhookEventBulkViewModel": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "nullable": true
          },
          "data": {
            "$ref": "#/components/schemas/WebhookEventViewModel"
          }
        },
        "additionalProperties": false
      },
      "WebhookEventBulkViewModelListApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/WebhookEventBulkViewModel"
            },
            "nullable": true
          }
        },
        "additionalProperties": false
      },
      "WebhookEventViewModel": {
        "type": "object",
        "properties": {
          "dtUtc": {
            "type": "string",
            "format": "date-time"
          },
          "category": {
            "$ref": "#/components/schemas/NotificationCategoryEnum"
          },
          "event": {
            "$ref": "#/components/schemas/NotificationEventEnum"
          },
          "userId": {
            "type": "string",
            "nullable": true
          },
          "accountId": {
            "type": "string",
            "nullable": true
          },
          "tradingAccount": {
            "$ref": "#/components/schemas/TradingAccountWebhookViewModel"
          },
          "tradingPosition": {
            "$ref": "#/components/schemas/TradingPositionViewModel"
          },
          "subscription": {
            "$ref": "#/components/schemas/SubscriptionViewModel"
          },
          "tradeReport": {
            "$ref": "#/components/schemas/TradingTradeInfoModel"
          },
          "tradingPortfolio": {
            "$ref": "#/components/schemas/TradingPositionViewModel"
          }
        },
        "additionalProperties": false
      },
      "WebhookEventViewModelApiSuccessDataResponse": {
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean",
            "readOnly": true
          },
          "data": {
            "$ref": "#/components/schemas/WebhookEventViewModel"
          }
        },
        "additionalProperties": false
      }
    }
  }
}