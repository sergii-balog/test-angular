import { NgModule } from "@angular/core";
import { GridModule } from "@progress/kendo-angular-grid";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@NgModule({
  exports: [ButtonsModule, ChartsModule, GridModule, PDFExportModule]
})
export class KendoComponentsModule {}
