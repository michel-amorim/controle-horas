import RouterHelper from 'src/router/config/router-helper';
import { Routename } from 'src/router/router-names';

export class PublicErroNotFoundRouterHelper extends RouterHelper {
  toGoPublicErroNotFound() {
    return this.router.push({ name: Routename.PublicError404 });
  }
}
