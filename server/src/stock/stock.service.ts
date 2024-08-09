//재고 서비스
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IProduct from '@db/products/product.interface';

@Injectable()
export class StockService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
  ) {}

  async getAllProducts(): Promise<IProduct[]> {
    try {
      const product = await this.productModel.find().exec();

      if (product.length > 0) {
      } else {
        console.log('No products found.');
      }

      return product;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('An error occurred while fetching products.');
    }
  }

  async createProduct(product: IProduct): Promise<IProduct> {
    try {
      console.log('프로덕트:', product);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _id, ...productWithoutId } = product;
      const createdProduct = new this.productModel(productWithoutId);
      const savedProduct = await createdProduct.save();
      console.log('저장중:', createdProduct);
      console.log('저장됨:', savedProduct);
      return savedProduct;
    } catch (error) {
      console.error('Error details:', error);
      if (error instanceof Error) {
        throw new BadRequestException(
          `Error creating product: ${error.message}`,
        );
      } else {
        throw new BadRequestException('Error creating product');
      }
    }
  }

  async updateProduct(id: string, product: IProduct): Promise<IProduct | null> {
    console.log('패치로 들어온 제품:', product);
    try {
      const updatedProduct = await this.productModel
        .findByIdAndUpdate(id, product, { new: true })
        .exec();
      if (!updatedProduct) {
        throw new NotFoundException('Product not found');
      }
      return updatedProduct;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('Cast to ObjectId failed')) {
          throw new BadRequestException('Invalid product ID');
        }
        throw new BadRequestException(
          `Error updating product: ${error.message}`,
        );
      } else {
        throw new BadRequestException('Error updating product');
      }
    }
  }
}
