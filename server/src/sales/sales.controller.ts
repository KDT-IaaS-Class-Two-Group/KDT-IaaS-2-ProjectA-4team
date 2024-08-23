import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SaleService } from './sales.service';
import ISale from '@db/sale/Sale.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

/**
 * @crystal23733
 * @date 24.07.29
 * @description SaleController는 매출 관련 API 엔드포인트를 제공합니다.
 * 모든 엔드포인트는 JWT 인증을 필요로 합니다.
 */
@UseGuards(JwtAuthGuard)
@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  /**
   * @crystal23733
   * @date 24.07.29
   * @description 모든 매출 기록을 조회합니다.
   * @returns {Promise<ISale[]>} 매출 기록의 배열을 반환합니다.
   */
  @Get()
  async findAll(): Promise<ISale[]> {
    return this.saleService.findAll();
  }

  /**
   * @crystal23733
   * @date 24.07.29
   * @description 주어진 ID에 해당하는 매출 기록을 조회합니다.
   * @param {string} id - 조회할 매출 기록의 ID
   * @returns {Promise<ISale | null>} 매출 기록 객체 또는 null을 반환합니다.
   */
  @Get(':id')
  async findById(@Param('id') id: string): Promise<ISale | null> {
    return this.saleService.findById(id);
  }

  /**
   * @crystal23733
   * @date 24.08.09
   * @description 주어진 회원 이름으로 매출 기록을 조회합니다.
   * @param {string} name - 조회할 회원의 이름
   * @returns {Promise<ISale[]>} 매출 기록의 배열을 반환합니다.
   */
  @Get('orders/:name')
  async findByMemberName(@Param('name') name: string): Promise<ISale[]> {
    return this.saleService.findByMemberName(name);
  }

  /**
   * @crystal23733
   * @date 24.08.13
   * @description 구매 기록을 기록합니다.
   * @param {Object} body - 요청 본문
   * @param {string} body.email - 구매자의 이메일 주소
   * @param {Array<{ productName: string; quantity: number }>} body.products - 구매한 제품 목록 및 수량
   * @param {string} body.saleDate - 판매 날짜
   * @returns {Promise<{ message: string; data: any }>} 성공 메시지와 기록된 데이터를 반환합니다.
   * @throws {Error} 구매 처리 실패 시 예외를 발생시킵니다.
   */
  @Post('salehistory')
  async buyProduct(
    @Body()
    body: {
      email: string;
      products: Array<{ productName: string; quantity: number }>;
      saleDate: string;
    },
  ) {
    try {
      const { email, products, saleDate } = body;
      const result = await this.saleService.saleHistory(
        email,
        products,
        saleDate,
      );

      return { message: 'Sale recorded successfully', data: result };
    } catch (error) {
      throw new Error('Failed to process purchase');
    }
  }
}
