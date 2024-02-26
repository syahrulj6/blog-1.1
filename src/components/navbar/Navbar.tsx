import Links from './links/Links';
import styles from './navbar.module.css';
import { auth } from '@/lib/auth';

import { handleLogout } from '@/lib/actions';
import NavLinks from './links/navLinks/NavLinks';

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <Links session={session} />
      </div>
      <div className={styles.logoutContainer}>
        {session?.user && (
          <>
            {session?.user && <NavLinks item={{ title: 'Admin', path: '/admin' }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
