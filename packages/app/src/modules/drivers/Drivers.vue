<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr class="info">
        <th colspan="4">
          <h3 class="list-title">F1 Feeder - Drivers Championship Standings</h3>
          <br/>
          <input class="form-control" type="text" v-model="nameFilter" placeholder="Search..." />
        </th>
      </tr>
    </thead>
    <tbody ui-sortable>
      <tr v-for="(driver, index) of filteredDrivers">
        <td>{{index + 1}}</td>
        <td>
          <img :src="`/img/flags/${driver.Driver.nationality}.png`" />
          <a :href="`#/drivers/${driver.Driver.driverId}`">
            {{driver.Driver.givenName}}&nbsp;{{driver.Driver.familyName}}
          </a>
        </td>
        <td>{{driver.Constructors[0].name}}</td>
        <td>{{driver.points}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as log from 'loglevel';

import apiService from '../../services/apiService';

@Component({})
export default class Drivers extends Vue {
  driversList: any = [];
  nameFilter = '';

  created() {
    log.info('loading data');
    apiService.getDrivers().then(drivers => {
      this.driversList = drivers;
    });
  }

  get filteredDrivers() {
    const re = new RegExp(this.nameFilter, 'i');
    return this.driversList.filter((driver: any) => {
      return (
        !this.nameFilter ||
        re.test(driver.Driver.givenName) ||
        re.test(driver.Driver.familyName)
      );
    });
  }
}
</script>
