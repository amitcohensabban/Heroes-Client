export interface hero {
  name: string;
  ability: string;
  id: number;
  firstTrainedDay: any;
  SuitColors: string;
  StartingPower: number;
  CurrentPower: number;
  lastTimeTrained: any;
  HerosTrainingTimes: number;
  trainerName: string;
}

export interface user {
  userName: string;
  password: string;
  heroes: hero[];
}
