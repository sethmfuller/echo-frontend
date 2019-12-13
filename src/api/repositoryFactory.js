// repositoryFactory.js

import CategoryRepository from './categoryRepository'
import VendorRepository from './vendorRepository'
import COORepository from './cooRepository'
import ProductRepository from './productRepository'
import ChatterRepository from './chatterRepository'

const repositories = {
  category: CategoryRepository,
  vendor: VendorRepository,
  coo: COORepository,
  product: ProductRepository,
  chatter: ChatterRepository,
};

export const RepositoryFactory = {
  get: name => repositories[name]
};