// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    constraints: false,
    // Define an alias for when data is retrieved
  // as: 'products_in_categories'
});


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  constraints: false,
  
// Define an alias for when data is retrieved
  // as: 'categories_for_products'
});


// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: {
//     model: ProductTag,
//     uniqueKey: 'tag_id',
//     constraints: false,
//   },
// // Define an alias for when data is retrieved
//   // as: 'products_with_tags'
// });

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: {
//     model: ProductTag,
//     uniqueKey: 'product_id',
//     constraints: false,
//   },
// // Define an alias for when data is retrieved
//   // as: 'tags_with_products'
// });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
// Define an alias for when data is retrieved
  // as: 'tags_with_products'
});

// many to many resource: https://sequelize.org/docs/v6/core-concepts/assocs/

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
