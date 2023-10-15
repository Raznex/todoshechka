import React from 'react';

import { IUser } from '../../../../../common/assets/constants/interface';


interface IUserProps {
  user: IUser;
}

const UserName: React.FC<IUserProps> = ({ user }) => (
  <p className="project__people">{ user.email }</p>
);

export default UserName;
