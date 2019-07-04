"use strict"

class Authoriz {
  constructor () {
    this.singout = this.singout.bind(this)
  }
  async singout (req, res, next) {
    try {
      res.send({
        status: 0,
        message: '成功'
      })
    } catch (err) {
      res.send({
        status: -1,
        message: '失败'
      })
    }
  }
}

export default new Authoriz()