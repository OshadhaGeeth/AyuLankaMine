const router = require("express").Router();
const OrderController = require("../controllers/orderController");


//route for view Product
router.route("/view").get((req, res) => {
    const response = OrderController.viewOrderController(
      req.body.data,
      res
    );
  });


// route for update selected order using id
router.route("/updateOrder/:id").post((req,res) => {
  console.log("request to update", req)
  let id = req.params.id;
  let updateOrder = {
      id: id,
      body: req.body,
  };

  const response = OrderController.updateOrderController(updateOrder, res);
});


// route for delete order using id
router.route("/deleteOrder").delete((req,res)=>{
  console.log("delete order", req);
  let id = req.body._id;
  let deleteOrder = {
      id:id,
      body: req.body,
  };

  const response = OrderController.deleteOrderController(deleteOrder,res);
})

module.exports = router;