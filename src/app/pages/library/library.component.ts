import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FcmService } from 'src/app/services/fcm.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  route = inject(ActivatedRoute);
  fcmService = inject(FcmService);
  id!: string | null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
}
