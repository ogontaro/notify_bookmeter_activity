import _ from 'lodash';
import I18n from './i18next';

export default class Message {
  constructor(params) {
    this.params = params;
  }

  text() {
    const { type } = this.params.event;

    switch (type) {
      case 'channel_created':
        return _.sample(I18n.t(
          this.params.event.type,
          {
            returnObjects: true,
            name: this.params.event.channel.name,
          },
        ));
      case 'emoji_changed':
        return I18n.t([this.params.event.type, this.params.event.subtype].join('.'), { name: this.params.event.name });
      default:
        return null;
    }
  }
}
