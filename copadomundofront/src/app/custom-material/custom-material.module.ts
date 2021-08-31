import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableExporterModule,
    ChartsModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTableExporterModule,
    ChartsModule,
  ],

  declarations: [],
})
export class CustomMaterialModule {
  static forRoot() {
    return {
      ngModule: CustomMaterialModule,
      providers: [],
    };
  }
}
