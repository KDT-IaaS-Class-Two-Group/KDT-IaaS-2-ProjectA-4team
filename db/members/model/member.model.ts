import mongoose from 'mongoose';
import { IMember } from '../../../shared/DTO/members/interfaces/member.interface';
import memberSchema from '../schema/member.schema';

// * Member 모델 생성
const Member = mongoose.model<IMember>('Member', memberSchema);

export default Member;