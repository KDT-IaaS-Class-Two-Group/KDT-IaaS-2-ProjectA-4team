import { Document } from 'mongoose';

// * Member 인터페이스 정의
export interface IMember extends Document {
  name: string;
  email: string;
  password: string;
  roleID: number;
}