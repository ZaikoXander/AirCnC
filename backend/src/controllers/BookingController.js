import Booking from "../models/Booking.js"

export default {
  async store(req, res) {
    const { user_id } = req.headers
    const { spot_id } = req.params
    const { date } = req.body

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    })

    await booking.populate(["spot", "user"])
    
    return res.json(booking)
  }
}
