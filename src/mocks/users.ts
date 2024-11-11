import { User, UserData, UserCredits } from '../types/user.ts';

const AVATAR = 'https://steamuserimages-a.akamaihd.net/ugc/2277200314615743772/2F6C6B2EE802E3B232679EDA7A61175646B34864/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true';

export const MockUserCreds: UserCredits[] = [
  {
    email: 'email1@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
  },
  {
    email: 'email2@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb21='
  },
  {
    email: 'email3@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb22='
  },
  {
    email: 'email4@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb23='
  },
  {
    email: 'email5@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb24='
  },
  {
    email: 'email6@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb25='
  }
];

export const MockUserData: UserData[] = [
  {
    avatarUrl: AVATAR,
    isPro: true,
    name: 'user1'
  },
  {
    avatarUrl: AVATAR,
    isPro: false,
    name: 'user2'
  },
  {
    avatarUrl: AVATAR,
    isPro: true,
    name: 'user3'
  },
  {
    avatarUrl: AVATAR,
    isPro: false,
    name: 'user4'
  },
  {
    avatarUrl: AVATAR,
    isPro: true,
    name: 'user5'
  },
  {
    avatarUrl: AVATAR,
    isPro: false,
    name: 'user6'
  },
];

export const MockUsers: User[] = MockUserData.map((userData, index) => ({
  ...userData,
  ...MockUserCreds[index]
}));
