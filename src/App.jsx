import { Profile } from 'components/Profile/Profile';
import userJson from './user.json';

import { Statistics } from './components/Statistics/Statistics';
import dataJson from './data.json';

import { FriendList } from './components/FriendList/FriendList';
import friendsJson from './friends.json';

import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactionsJson from './transactions.json';

export const App = props => {
  return (
    <div>
      <div>
        <Profile
          username={userJson.username}
          tag={userJson.tag}
          location={userJson.location}
          avatar={userJson.avatar}
          stats={userJson.stats}
          followers={userJson.stats.followers}
          views={userJson.stats.views}
          likes={userJson.stats.likes}
        />
      </div>

      <section>
        <Statistics title="Upload stats" stats={dataJson} />
      </section>

      <div>
        <FriendList friends={friendsJson} />
      </div>

      <div>
        <TransactionHistory items={transactionsJson} />
      </div>
    </div>
  );
};
