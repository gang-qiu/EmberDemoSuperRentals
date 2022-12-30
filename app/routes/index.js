import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  // async model() {
  //   let response = await fetch('/api/rentals.json');
  //   let { data } = await response.json();
  //
  //   const dataa = data.map((model) => {
  //     let { id, attributes } = model;
  //     let type;
  //
  //     if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
  //       type = 'Community';
  //     } else {
  //       type = 'Standalone';
  //     }
  //
  //     return { id, type, ...attributes };
  //   });
  //
  //   console.log('routes/index');
  //   console.log(dataa);
  //   return dataa;
  // }

  // code above is replaced with the model logic:
  @service store;

  async model() {
    return this.store.findAll('rental');
  }
}
