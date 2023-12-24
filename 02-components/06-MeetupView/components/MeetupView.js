import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription.js';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover.js';
import MeetupInfo from '../../04-MeetupInfo/components/MeetupInfo.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

methods: {
  check_agenda() {
    
    if (this.meetup.agenda == undefined || this.meetup.agenda == null || this.meetup.agenda.length == 0) {
      return false 
    }
    
    return true
  }
},

  template: `
    <div>
      <MeetupCover :title="this.meetup.title" :image="this.meetup.image"/>
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>

            <MeetupDescription :description="this.meetup.description"/>
            <h3>Программа</h3>
            <div v-if="check_agenda()">
              <MeetupAgenda :agenda="this.meetup.agenda" />
            </div>
            <div v-else>
              <UiAlert>Программа пока пуста…</UiAlert>
            </div>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer="this.meetup.organizer" :place="this.meetup.place" :date="this.meetup.date" />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
