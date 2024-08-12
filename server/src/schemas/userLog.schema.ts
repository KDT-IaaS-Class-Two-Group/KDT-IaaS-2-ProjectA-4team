import { Document, Types } from 'mongoose';
import {
  Prop,
  SchemaFactory,
  Schema as MongooseSchema,
} from '@nestjs/mongoose';

@MongooseSchema()
export class UserLog extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  memberID: Types.ObjectId;

  @Prop({ required: true })
  actionType: string;

  @Prop({ type: Object, required: false })
  details: Record<string, any>;

  @Prop({ default: Date.now })
  timestamp: Date;
}

const UserLogSchema = SchemaFactory.createForClass(UserLog);

// Index 설정
UserLogSchema.index({ memberId: 1 });
UserLogSchema.index({ actionType: 1 });
UserLogSchema.index({ timestamp: 1 });

export { UserLogSchema };
