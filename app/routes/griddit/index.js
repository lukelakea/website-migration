import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class GridditIndexRoute extends Route{

  beforeModel(transition){
    this.transitionTo('griddit.subreddit', 'accidentalrenaissance');
  }

}