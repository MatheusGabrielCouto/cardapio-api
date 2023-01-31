import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await Product.all()

    return products
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'ingredients', 'description'])

    const product = await Product.create(data)

    return product
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
