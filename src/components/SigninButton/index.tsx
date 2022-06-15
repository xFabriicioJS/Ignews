import { FaGithub } from '../../../node_modules/react-icons/fa';
import { FiX } from '../../../node_modules/react-icons/fi';
import styles from './styles.module.scss'

export function SignInButton () {

    const isUserLoggedIn = true;

   return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
        <FaGithub
            color="#84d361"
        />
        Fabricio Monteiro
        <FiX color="737380" className={styles.closeIcon}/>
    </button>
) : (
    <button type="button" className={styles.signInButton}>
        <FaGithub
            color="#eba417"
        />
        Sign in with Github
    </button>
)

}