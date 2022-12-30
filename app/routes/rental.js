import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RentalRoute extends Route {
  // async model(params) {
  //   let response = await fetch(`/api/rentals/${params.rental_id}.json`);
  //   let { data } = await response.json();
  //
  //   let { id, attributes } = data;
  //   let type;
  //   console.log('route/rentals');
  //   console.log(data);
  //
  //   if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
  //     type = 'Community';
  //   } else {
  //     type = 'Standalone';
  //   }
  //
  //   return { id, type, ...attributes };
  // }

  // code above is unnecessary after using model logic:
  @service store;

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
