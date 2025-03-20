const express = require('express');
const router = express.Router();
const rideRequestController = require('../controllers/rideRequestController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { adminOnly } = require('../middleware/adminMiddleware');
// Ride request routes
router.post('/ride-request', authenticateToken,  rideRequestController.createRideRequest);
router.get('/ride-requests/all',authenticateToken, rideRequestController.getAllUserRideRequests);
router.get('/ride-requests', adminOnly, rideRequestController.getAllRideRequests);
router.get('/ride-requests/nearby',   rideRequestController.getAllNearbyRideRequests);
router.post('/ride-requests/bid', authenticateToken,  rideRequestController.addBid);
router.post('/ride-requests/bid/status', rideRequestController.updateBidStatus);
router.post('/ride-request/update-status', authenticateToken, rideRequestController.updateRideStatus);
router.get('/ride-request',authenticateToken, rideRequestController.getRideRequest);
router.post('/ride-request/new-message',authenticateToken, rideRequestController.newMessage);
router.post('/ride-request/approved',adminOnly, rideRequestController.approveRideRequest);
router.get('/ride-request/:id', rideRequestController.getRideRequestById);
router.post('/ride-request/update-location', rideRequestController.updateLocation);
module.exports = router;
