import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {

  player: Player | undefined;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!);
    console.log(id)
    this.playerService.getPlayer(id).subscribe(player => this.player = player);
  }

}
