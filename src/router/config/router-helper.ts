import type { Router } from 'vue-router';
import { useRouter } from 'vue-router';

class RouterHelper {
  protected router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  static use<T extends RouterHelper>(this: new (router: Router) => T): T {
    return new this(useRouter());
  }
}
export default RouterHelper;
