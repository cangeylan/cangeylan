import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  players: Player[] = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getTopThreePlayers();
  }

  getTopThreePlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players.sort((a, b) => b.point - a.point).slice(0, 3));
  }
}
