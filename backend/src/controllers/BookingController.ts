import Booking from "../models/Booking"

export default {
  async store(req: any, res: any) {
    const { user_id } = req.headers
    const { spot_id } = req.params
    const { date } = req.body

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    })

    await booking.populate(["spot", "user"])
    
    return res.json(booking)
  }
}
