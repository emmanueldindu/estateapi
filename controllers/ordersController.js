const Product = require('../models/Products')


module.exports = {
    getUsersOrder: async (req, res) => {
        const userId = req.params.id;

        try {
            const userOrders = await Order.find({ userId }).populate({
                path: 'productId',
                select: "-description -location"
            }).exec();

            res.status(200).json(usersOrders)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    }
}