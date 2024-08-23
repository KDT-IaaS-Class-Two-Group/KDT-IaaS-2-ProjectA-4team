//컨트롤러
import {
  Controller,
  Get,
  Delete,
  Param,
  UseGuards,
  Post,
  Body,
} from '@nestjs/common';
import { productsServiceDate } from './expirationDateProduct.service';
import IProduct from '@db/products/product.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
/**
 * @jojayeon 24.08.06
 * * 유통기한 관리 페이지 서버 컨트롤러
 * @description
 * * 정보를 처리하는 역할을 하는 코드
 * * UseGuards(JwtAuthGuard) 인증 가드로 보호
 */

@UseGuards(JwtAuthGuard)
@Controller('productsDate')
export class ProductsController {
  constructor(private readonly productsServiceDate: productsServiceDate) {}
  
  /**
   * * 제품 찾기
   * @returns {Promise<IProduct[]>} 제품 정보 찾은 것을 받환 받음
   */  
  @Get()
  async findAll(): Promise<IProduct[]> {
    return this.productsServiceDate.findAll();
  }
  /**
   * * 제품 삭제
   * @param {string} id 서비스에 id를 전달해줌
   */
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsServiceDate.remove(id);
  }
  /**
   * * 새로운 제품 추가
   * @param {IProduct} product 제품추가에 사용할 데이터
   * @returns {Promise<IProduct>} 생성할 데이터를 전달하는 역할.
   */
  @Post('orderproduct')
  async create(@Body() product: IProduct): Promise<IProduct> {
    return this.productsServiceDate.create(product);
  }
}
