"use strict"

exports.keys = "aran"

exports.io = {
  namespace: {
    "/": {
      connectionMiddleware: ["auth"],
      packetMiddleware: ["filter"]
    }
  }
}
