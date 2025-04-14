import { LocalStorage } from 'quasar'
import type { UserModel } from 'src/@types/user/user-model'
import { userFromResponseToModelAdapter } from 'src/@adapter/user-from-response-to-model-adapter'

const KEY = 'token-data'
const PERMISSAO_KEY = 'permissoes'

export type TokenData = {
  token: string
}

const UserStorage = {
  save(userData: TokenData) {
    LocalStorage.set(KEY, userData)
  },

  get token(): TokenData | null {
    return LocalStorage.getItem<TokenData>(KEY)
  },

  get user(): UserModel | null {
    const { token } = UserStorage.token || {}

    if (!token) {
      return null
    }

    try {
      if (typeof token === 'string') {
        return userFromResponseToModelAdapter(token)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      UserStorage.reset()
    }

    return null
  },

  reset() {
    LocalStorage.remove(KEY)
    LocalStorage.remove(PERMISSAO_KEY)
  },
}

export default UserStorage
