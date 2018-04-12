import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: `${config.apiBaseUrl}/api/f1/2013`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface IStandingList {
  season: string;
  StandingsLists: IDriverStanding[];
}

export interface IDriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
  };
  Constructors: [
    {
      constructorId: string;
      url: string;
      name: string;
      nationality: string;
    }
  ];
}

export default {
  getDrivers(): Promise<IDriverStanding[]> {
    return api.get('driverStandings.json').then(res => {
      return res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  },
  getDriverDetails(id: string): Promise<IStandingList> {
    return api.get(`drivers/${id}/driverStandings.json`).then(res => {
      return res.data.MRData.StandingsTable.StandingsLists[0]
        .DriverStandings[0];
    });
  },
  getDriverRaces(id: string): Promise<any[]> {
    return api.get(`drivers/${id}/results.json`).then(res => {
      return res.data.MRData.RaceTable.Races;
    });
  },
};
