// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
    foreignKey: 'category_id',
    // Define an alias for when data is retrieved
  as: 'products_in_categories'
});


// Categories have many Products
Category.belongsToMany(Product, {
  through: {
  model: Product,
  uniqueKey: 'category_id',
  },
// Define an alias for when data is retrieved
  as: 'categories_for_products'
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    uniqueKey: 'tag_id',
  },
// Define an alias for when data is retrieved
  as: 'products_with_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    uniqueKey: 'product_id',
  },
// Define an alias for when data is retrieved
  as: 'tags_with_products'
});

// many to many resource: https://sequelize.org/docs/v6/core-concepts/assocs/

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
