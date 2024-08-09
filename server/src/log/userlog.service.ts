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
    details: Record<string, any>,
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
      console.error('Error creating log:', error);
      throw new Error('Failed to create log'); // 예외s를 던져 상위에서 처리하게 함
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
}
