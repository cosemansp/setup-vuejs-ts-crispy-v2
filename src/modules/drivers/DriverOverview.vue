<template>
  <section v-if="driver" id="main">
    <nav id="secondary" class="main-nav col-md-3">
      <driver :driver="driver"></driver>
      <br/>
      <a href="./#/drivers" class="btn btn-default">Back to drivers list</a>
    </nav>
    <div class="main-content col-md-9">
      <driver-races :races="races"></driver-races>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import log from 'loglevel';
import apiService from '../../services/apiService';
import Driver from './components/Driver.vue';
import DriverRaces from './components/DriverRaces.vue';

@Component({
  components: {
    Driver,
    DriverRaces,
  },
})
export default class DriverOverview extends Vue {
  @Prop() private id!: string;
  driver = null;
  races: any = [];

  mounted() {
    log.info('loading driverDetails', this.id);
    apiService.getDriverDetails(this.id).then(driver => {
      this.driver = driver;
    });
    log.info('loading driverRaces', this.id);
    apiService.getDriverRaces(this.id).then(races => {
      this.races = races;
    });
  }
  // async/await version
  // async created() {
  //   this.driver = await apiService.getDriverDetails(this.id);
  //   this.races = await apiService.getDriverRaces(this.id);
  // },
}
</script>
