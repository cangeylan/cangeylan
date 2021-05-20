import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players: Player[] = [
      { id: 1, name: "Andy Murray", country: "US", age: 29, point: 11540, tournamentsPlayed: 17 },
      { id: 2, name: "Novak Ya", country: "Serbia", age: 29, point: 9750, tournamentsPlayed: 16 },
      { id: 3, name: "Stan Smth", country: "Canada", age: 24, point: 4000, tournamentsPlayed: 12 },
      { id: 4, name: "Milos Bla", country: "Greece", age: 21, point: 2000, tournamentsPlayed: 13 },
      { id: 5, name: "Kei Hah", country: "Japan", age: 22, point: 1145, tournamentsPlayed: 6 },
    ];
    return { players };
  }

  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 11;
  }
}