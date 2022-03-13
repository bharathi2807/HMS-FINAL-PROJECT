import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router} from '@angular/router';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<PopupsComponent>,private router:Router) { }

  ngOnInit(): void {
  }
  onConfirm(){
    this.dialogRef.close();
    this.router.navigate(['/users']);

  }

}
