import Spot from "../models/Spot"

export default {
  async show(req: any, res: any) {
    const { user_id } = req.headers

    const spots = await Spot.find({ user: user_id })

    return res.json(spots)
  }
}
