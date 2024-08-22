import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserLog } from '../schemas/userLog.schema';

@Injectable()
export class UserLogService {
  constructor(
    @InjectModel(UserLog.name) private userLogModel: Model<UserLog>,
  ) {}

  // 로그 생성
  async createLog(
    memberID: Types.ObjectId,
    actionType: string,
    details?: Record<string, any>,
  ): Promise<UserLog> {
    try {
      const newLog = new this.userLogModel({
        memberID,
        actionType,
        details,
        timestamp: new Date(),
      });
      return await newLog.save();
    } catch (error) {
      throw new Error('Failed to create log');
    }
  }

  // 특정 사용자에 대한 로그 조회
  async getLogsByMemberId(
    memberId: Types.ObjectId,
    limit = 10,
    skip = 0,
  ): Promise<UserLog[]> {
    return this.userLogModel
      .find({ memberId })
      .sort({ timestamp: -1 }) // 최신순으로 정렬
      .limit(limit)
      .skip(skip)
      .exec();
  }

  // 특정 활동 유형에 대한 로그 조회
  async getLogsByActionType(
    actionType: string,
    limit = 10,
    skip = 0,
  ): Promise<UserLog[]> {
    return this.userLogModel
      .find({ actionType })
      .sort({ timestamp: -1 }) // 최신순으로 정렬
      .limit(limit)
      .skip(skip)
      .exec();
  }

  // 특정 시간 범위 내의 로그 조회
  async getLogsByDateRange(
    startDate: Date,
    endDate: Date,
    limit = 10,
    skip = 0,
  ): Promise<UserLog[]> {
    return this.userLogModel
      .find({
        timestamp: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .sort({ timestamp: -1 }) // 최신순으로 정렬
      .limit(limit)
      .skip(skip)
      .exec();
  }

  // 기간내 최다 방문자 Top 1 (이메일 반환)
  async getMostFrequentVisitor(
    startDate: Date,
    endDate: Date,
  ): Promise<string | null> {
    const mostFrequentVisitor = await this.userLogModel.aggregate([
      {
        $match: {
          actionType: 'login',
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: '$memberID',
          loginCount: { $sum: 1 },
        },
      },
      {
        $sort: { loginCount: -1 },
      },
      {
        $limit: 1,
      },
      {
        $lookup: {
          from: 'members', // Member 컬렉션 이름
          localField: '_id',
          foreignField: '_id',
          as: 'memberDetails',
        },
      },
      {
        $unwind: '$memberDetails',
      },
      {
        $project: {
          _id: 0,
          email: '$memberDetails.email',
        },
      },
    ]);

    return mostFrequentVisitor.length > 0 ? mostFrequentVisitor[0].email : null;
  }

  // 기간내 평균 사용자 체류 시간
  async getAverageUserTime(
    startDate: Date,
    endDate: Date,
  ): Promise<string | null> {
    const userTimes = await this.userLogModel.aggregate([
      {
        $match: {
          actionType: { $in: ['login', 'logout'] },
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $sort: { memberID: 1, timestamp: 1 }, // 사용자별로 정렬
      },
      {
        $group: {
          _id: '$memberID',
          logs: {
            $push: {
              actionType: '$actionType',
              timestamp: '$timestamp',
            },
          },
        },
      },
      {
        $project: {
          sessionTimes: {
            $reduce: {
              input: '$logs',
              initialValue: { sessionTimes: [], lastLogin: null },
              in: {
                $cond: [
                  { $eq: ['$$this.actionType', 'login'] },
                  {
                    sessionTimes: '$$value.sessionTimes',
                    lastLogin: '$$this.timestamp',
                  },
                  {
                    sessionTimes: {
                      $concatArrays: [
                        '$$value.sessionTimes',
                        {
                          $cond: [
                            { $ne: ['$$value.lastLogin', null] },
                            [
                              {
                                $subtract: [
                                  '$$this.timestamp',
                                  '$$value.lastLogin',
                                ],
                              },
                            ],
                            [],
                          ],
                        },
                      ],
                    },
                    lastLogin: null,
                  },
                ],
              },
            },
          },
        },
      },
      {
        $unwind: '$sessionTimes.sessionTimes',
      },
      {
        $group: {
          _id: null,
          averageSessionTime: { $avg: '$sessionTimes.sessionTimes' },
        },
      },
    ]);

    if (userTimes.length > 0 && userTimes[0].averageSessionTime != null) {
      const avgTimeMs = userTimes[0].averageSessionTime;
      const hours = Math.floor(avgTimeMs / (1000 * 60 * 60));
      const minutes = Math.floor((avgTimeMs % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}시간 ${minutes}분`;
    }

    return null;
  }

  // 기간내 카테고리별 최다 주문내역
  async getTopSellingProduct(
    startDate: Date,
    endDate: Date,
  ): Promise<string | null> {
    const topSellingProduct = await this.userLogModel.aggregate([
      {
        $match: {
          actionType: 'purchase',
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $unwind: '$details.products',
      },
      {
        $group: {
          _id: '$details.products.productName',
          totalQuantity: { $sum: '$details.products.quantity' },
        },
      },
      {
        $sort: { totalQuantity: -1 },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          productName: '$_id',
        },
      },
    ]);

    return topSellingProduct.length > 0
      ? topSellingProduct[0].productName
      : null;
  }

  // 기간내 카테고리별 최소 주문내역
  async getLeastSellingProduct(
    startDate: Date,
    endDate: Date,
  ): Promise<string | null> {
    const leastSellingProduct = await this.userLogModel.aggregate([
      {
        $match: {
          actionType: 'purchase',
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $unwind: '$details.products',
      },
      {
        $group: {
          _id: '$details.products.productName',
          totalQuantity: { $sum: '$details.products.quantity' },
        },
      },
      {
        $sort: { totalQuantity: 1 },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          productName: '$_id',
        },
      },
    ]);

    return leastSellingProduct.length > 0
      ? leastSellingProduct[0].productName
      : null;
  }

  // 기간내 최다 발주
  async getMostOrderedProduct(startDate: Date, endDate: Date) {
    const mostOrderedProducts = await this.userLogModel.aggregate([
      {
        $match: {
          actionType: 'addStock',
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: '$details.product_id',
          totalOrdered: { $sum: '$details.quantity' },
          productName: { $first: '$details.productName' }, // 제품 이름을 가져오기 위해 추가
        },
      },
      {
        $sort: { totalOrdered: -1 },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          productName: '$productName',
        },
      },
    ]);

    return mostOrderedProducts.length > 0
      ? mostOrderedProducts[0].productName
      : null;
  }

  // 기간내 폐기 메뉴
  async getDiscardedMenu(startDate: Date, endDate: Date) {
    const discardedMenus = await this.userLogModel.aggregate([
      {
        $match: {
          actionType: 'delStock',
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: '$details.product_id',
          totalDiscarded: { $sum: '$details.quantity' },
          productName: { $first: '$details.productName' }, // 제품 이름을 가져오기 위해 추가
        },
      },
      {
        $sort: { totalDiscarded: -1 },
      },
      {
        $project: {
          _id: 0,
          productName: '$productName',
        },
      },
    ]);

    return discardedMenus.length > 0
      ? discardedMenus.map((menu) => menu.productName)
      : null;
  }

  // 기간내 신메뉴
  async getNewMenu(startDate: Date, endDate: Date) {
    const newMenus = await this.userLogModel.aggregate([
      {
        $match: {
          actionType: 'addMenu',
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: '$details.product_id',
          productName: { $first: '$details.productName' }, // 제품 이름을 가져오기 위해 추가
        },
      },
      {
        $sort: { _id: 1 }, // product_id로 정렬
      },
      {
        $project: {
          _id: 0,
          productName: 1,
        },
      },
    ]);

    return newMenus.length > 0
      ? newMenus.map((menu) => menu.productName)
      : null;
  }

  // 여러 통계를 동시에 조회하는 메서드
  async getAllLogs(startDate: Date, endDate: Date) {
    const [
      top10Users,
      averageUserTime,
      topSellingProduct,
      leastSellingProduct,
      mostOrdered,
      discardedMenu,
      newMenu,
    ] = await Promise.all([
      this.getMostFrequentVisitor(startDate, endDate),
      this.getAverageUserTime(startDate, endDate),
      this.getTopSellingProduct(startDate, endDate),
      this.getLeastSellingProduct(startDate, endDate),
      this.getMostOrderedProduct(startDate, endDate),
      this.getDiscardedMenu(startDate, endDate),
      this.getNewMenu(startDate, endDate),
    ]);

    return {
      top10Users,
      averageUserTime,
      topSellingProduct,
      leastSellingProduct,
      mostOrdered,
      discardedMenu,
      newMenu,
    };
  }
}
