import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
import { DialogData } from 'src/app/core/models/dialog-data.model';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id','name','actions'];
  heroes: Hero[] = [];

  constructor(private matDialog: MatDialog, private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      (heroes) => this.heroes = heroes,
      (err) => console.log(err),
      () => console.log('Ok')
    );
  }

  delete(hero: Hero): void{
    const dialogData: DialogData = {
      cancelText:'Cancel',
      confirmText:'Delete',
      content: `Delete '${hero.name}'?`
    }

    const dialogRef = this.matDialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(conf => {
      if(conf){
        this.heroService.delete(hero).subscribe(() => {
          this.heroes = this.heroes.filter((h) => h !== hero);
        })
      }
    })

  }

}
