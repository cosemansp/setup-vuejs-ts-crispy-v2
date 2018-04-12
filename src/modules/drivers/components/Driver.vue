<template functional>
  <div>
    <div class="driver-picture">
      <div class="avatar">
        <img v-show="props.driver" :src="`/img/drivers/${props.driver.Driver.driverId}.png`" />
        <img v-show="props.driver" :src="`/img/flags/${props.driver.Driver.nationality}.png`" />
        <br/> {{props.driver.Driver.givenName}} {{props.driver.Driver.familyName}}
      </div>
    </div>
    <div class="driver-status">
      Country: {{props.driver.Driver.nationality}}
      <br/> Team: {{props.driver.Constructors[0].name}}
      <br/> Birth: {{props.driver.Driver.dateOfBirth}}
      <br/>
      <a :href="`http://${props.driver.Driver.url}`" target="_blank">Biography</a>
    </div>
  </div>
</template>
