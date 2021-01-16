export interface User {
  id: string;
  email: string;
  nickname: string;
  introduction?: string;
  profileImgUrl?: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
