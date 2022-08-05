export interface ActorState {
  actor: Actor;
  isFetching: boolean;
  error: string;
}

export interface Actor {
  id: number;
  name: string;
  birthday: string;
  place_of_birth: string;
  profile_path: string;
  biography: string;
}
