import mongoose from 'mongoose';
import memberSchema from '../schema/member.schema';
import IMember from '../member.interface';

// * Member 모델 생성
const Member = mongoose.model<IMember>('Member', memberSchema);

export default Member;