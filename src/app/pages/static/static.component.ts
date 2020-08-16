import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { StaticsService } from '../../services/statics.service';
import { NavbarService } from '../../services/navbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css'],
})
export class StaticComponent implements OnInit {
  editorAbout: string;
  editorHistory: string;
  id: string;
  selectEditor = 'About';

  constructor(
    private stacticService: StaticsService,
    private snackBar: MatSnackBar,
    private navBarService: NavbarService
  ) {
    this.navBarService.setNavBarState('Static Page Editor')
  }

  ngOnInit(): void {
    this.stacticService.getPages().subscribe((data) => {
      let pagesData = data['data'][0];
      this.id = pagesData._id;
      this.editorAbout = pagesData.about;
      this.editorHistory = pagesData.history;
      console.log('Pages:', this.editorAbout);
    });
  }

  submitPage() {
    this.stacticService
      .updatePage(this.id, {
        about: this.editorAbout,
        history: this.editorHistory,
      })
      .subscribe((data) => {
        console.log(data);
        this.snackBar.open(data['status'], '', {
          duration: 2000,
        });
      });
  }

  changeEditorAbout(event: EditorChangeContent | EditorChangeSelection) {
    console.log(' editor got change ', event['html']);
    if (event['html'] != undefined) {
      this.editorAbout = event['html'];
    }
  }

  changeEditorHistory(event: EditorChangeContent | EditorChangeSelection) {
    //console.log(' editor got change ', event)
    if (event['html'] != undefined) {
      this.editorHistory = event['html'];
    }
  }

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button

      ['link'],
    ],
  };
}
