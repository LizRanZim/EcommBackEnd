const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // Liz added this code
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});



router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // Liz added this code
  try {
    const categoryData = await Category.findbyPk(
      req.params.id,
      {
        include: [{ model: Product }],
      }
      );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/', async (req, res) => {
  // create a new category
  // Liz added this code

  try {
    const categoryData = await Category.create(req.body,{

 /*  When doing the post, formulate the data like this:
{
  "category_name": "Skiing",
}
*/
      category_id: req.body.category_id,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});



router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  // Liz added this code

  try {
    const categoryData = await Category.update(req.body,
      {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});




router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // Liz added this code

  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
