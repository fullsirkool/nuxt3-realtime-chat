import { Auth, createUserWithEmailAndPassword, User, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
export default function() {
  const { $auth } = useNuxtApp()

  const user = useState<User | null>("fb_user", () => null)

  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth as Auth, email, password)
      if (userCreds) {
        user.value = userCreds.user
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
        console.log(error)
      }
      return false
    }
    return false
  }

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const response = await signInWithPopup($auth as Auth, provider)
        // The signed-in user info.
        return response.user
    } catch (error) {
        return false
    }
  }

  return {
    user,
    registerUser,
    authWithGoogle
  }
}