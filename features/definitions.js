'use strict'

var Promise = require('rsvp').Promise

function willlReject () {
  return Promise.reject('Purposeful Rejection')
}

module.exports = function() {

    this.Then(/^I return a rejected promise/, function () {
        return willlReject()
    })

    this.Then(/^The scenario should fail gracefully$/, function () {
        return false
    })

    this.Then(/experience great success/, function () {
      return true
    })
}
