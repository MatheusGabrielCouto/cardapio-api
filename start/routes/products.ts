import Route from '@ioc:Adonis/Core/Route'

Route.get('/products', 'ProductsController.index')
Route.post('/products', 'ProductsController.store')
