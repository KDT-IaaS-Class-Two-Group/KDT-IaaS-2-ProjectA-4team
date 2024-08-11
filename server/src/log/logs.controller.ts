import { Controller, Post, Req, UseGuards, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserLogService } from './userlog.service';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TokenUtils } from '../utils/token.utils';
import IMember from '@db/members/member.interface';
import { Model } from 'mongoose';
import IProduct from '@db/products/product.interface';

@UseGuards(JwtAuthGuard)
@Controller('log')
export class LogsController {
  constructor(
    @InjectModel('Member') private readonly memberModel: Model<IMember>,
    @InjectModel('Product') private readonly productModel: Model<IProduct>,
    private readonly userLogService: UserLogService,
    private readonly tokenUtils: TokenUtils,
  ) {}

  //로그인 로그
  @Post('login')
  async login(@Req() req: Request) {
    try {
      const token = req.cookies['token'];
      const memberId = this.tokenUtils.findMemberIdByToken(
        token,
        this.memberModel,
      );
      await this.userLogService.createLog(await memberId, 'login');
    } catch (error) {
      console.error('Error creating log:', error);
      throw new Error('Failed to create login log');
    }
  }

  //로그아웃 로그
  @Post('logout')
  async logout(@Req() req: Request) {
    try {
      const token = req.cookies['token'];
      const memberId = this.tokenUtils.findMemberIdByToken(
        token,
        this.memberModel,
      );
      await this.userLogService.createLog(await memberId, 'logout');
    } catch (error) {
      console.error('Error creating log:', error);
      throw new Error('Failed to create logout log');
    }
  }
  //TODO 구매로직 완성되면 추가
  //사용자 구매 로그
  @Post('purchase')
  async purchase(@Req() req: Request, @Body() data) {
    try {
      const token = req.cookies['token'];
      const memberId = this.tokenUtils.findMemberIdByToken(
        token,
        this.memberModel,
      );
      const { products, totalPrice } = data;
      await this.userLogService.createLog(await memberId, 'purchase', {
        products: products,
        totalPrice: totalPrice,
      });
    } catch (error) {
      console.error('Error creating log:', error);
      throw new Error('Failed to create purchase log');
    }
  }
  //재고 추가 로그
  @Post('addStock')
  async addStock(@Req() req: Request, @Body() data: IProduct) {
    try {
      const token = req.cookies['token'];
      const memberId = this.tokenUtils.findMemberIdByToken(
        token,
        this.memberModel,
      );
      const { _id, productCategory, productName, quantity } = data;
      await this.userLogService.createLog(await memberId, 'addStock', {
        product_id: _id,
        productCategory: productCategory,
        productName: productName,
        quantity: quantity,
      });
    } catch (error) {
      console.error('Error creating log:', error);
      throw new Error('Failed to create addStock log');
    }
  }
  //재고 폐기 로그
  @Post('delStock')
  async delStock(@Req() req: Request, @Body() id: object) {
    try {
      const token = req.cookies['token'];
      const memberId = this.tokenUtils.findMemberIdByToken(
        token,
        this.memberModel,
      );
      const data = await this.productModel.findById(id).exec();
      if (data) {
        const { _id, productCategory, productName, quantity } = data;
        await this.userLogService.createLog(await memberId, 'delStock', {
          product_id: _id,
          productCategory: productCategory,
          productName: productName,
          quantity: quantity,
        });
      }
    } catch (error) {
      console.error('Error creating log:', error);
      throw new Error('Failed to create delStock log');
    }
  }
  //TODO 매뉴추가로직 완성되면 추가
  //메뉴 추가 로그
  @Post('addMenu')
  async addMenu(@Req() req: Request, @Body() data) {
    try {
      const token = req.cookies['token'];
      const memberId = this.tokenUtils.findMemberIdByToken(
        token,
        this.memberModel,
      );
      const { _id, productCategory, productName, quantity } = data;
      await this.userLogService.createLog(await memberId, 'addMenu', {
        product_id: _id,
        productCategory: productCategory,
        productName: productName,
        quantity: quantity,
      });
    } catch (error) {
      console.error('Error creating log:', error);
      throw new Error('Failed to create addMenu log');
    }
  }
}
