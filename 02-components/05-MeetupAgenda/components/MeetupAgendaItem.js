import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  components: {
    agendaItemIcons,
    agendaItemDefaultTitles
  },
  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemResponse () {
      let icon_path = "/assets/icons/icon-" + agendaItemIcons[this.agendaItem.type] + ".svg"
      let my_title = this.agendaItem.title ?? agendaItemDefaultTitles[this.agendaItem.type]
      return {
        "icon": {
          "path": icon_path,
          "lat": agendaItemIcons[this.agendaItem.type]
        },
        "title": my_title,
        "speaker": {
          "name": this.agendaItem.speaker,
          "lang": this.agendaItem.language
        }
      }
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="itemResponse.icon.path" class="icon" :alt="itemResponse.icon.lat" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{itemResponse.title}}</h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{itemResponse.speaker.name}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{itemResponse.speaker.lang}}</span>
        </p>
        <p>{{agendaItem.description}}</p>
      </div>
    </div>`,
});
