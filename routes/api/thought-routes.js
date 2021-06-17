const router = require('express').Router();
const{
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:userId')
    .post(addThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .delete(removeThought)
    .put(addThought)

router
    .route("/:thoughtId/reactions")
    .post(addReaction)
    .delete(removeReaction);


    module.exports = router;