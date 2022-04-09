// =====================Profile=======================

// import Profile from './components/User/profile';
// import user from '../src/data/user.json';
// import Statistics from './components/Statistics/statistics';
// import data from '../src/data/data.json';
// import friends from './data/friends';
// import FriendList from 'components/Friends/friendList';
// import transactions from './data/transactions';
// import TransactionHistory from 'components/Transaction/transactionHistory';

import Counter from 'components/Counter/Counter';
export default function App() {
  return (
    <Counter />

    // <Counter>
    // <div>
    //   <Profile
    //     img={user.avatar}
    //     name={user.username}
    //     tag={user.tag}
    //     location={user.location}
    //     stats={user.stats}
    //   />

    //   <>
    //     <Statistics title="Upload stats" stats={data} />
    //     <Statistics stats={data} />
    //   </>

    //   <>
    //     <FriendList friends={friends} />
    //   </>

    //   <>
    //     <TransactionHistory items={transactions} />
    //   </>
    // </div>
    // </Counter>
  );
}

// =========================Statistics 1=================

// import Statistics from './components/statistics';
// import data from '../src/data.json';
// export default function App() {
//   return (
//     <>
//       <Statistics title="Upload stats" stats={data} />
//       <Statistics stats={data} />;
//     </>
//   );
// }

// =========================Statistics 2 TERNARN=================
// import Statistics from './components/statistics';
// import data from '../src/data.json';
// export default function App() {
//   const trueOrFalse = true;
//   return (
//     <>
//       {trueOrFalse ? (
//         <Statistics title="Upload stats" stats={data} />
//       ) : (
//         <Statistics stats={data} />
//       )}
//       ;
//     </>
//   );
// }

//===============================FRIENDS=========================
// import friends from './friends';
// import FriendList from 'components/friendList';

// export default function App() {
//   return (
//     <>
//       <FriendList friends={friends} />
//     </>
//   );
// }

// =====================Transaction====================
// import transactions from './transactions';
// import TransactionHistory from 'components/transactionHistory';

// export default function App() {
//   return (
//     <>
//       <TransactionHistory items={transactions} />
//     </>
//   );
// }
