import User from "../models/User.js"

// index, show, store, update, destroy

export default {
  async store(req, res) {
    const { email } = req.body

    let user = await User.findOne({ email })

    if(!user) {
      user = await User.create({ email })
    }

    // const user = await User.create({ email })

    return res.json(user)
  }
}
