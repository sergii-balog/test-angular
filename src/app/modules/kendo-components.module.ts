import { NgModule } from "@angular/core";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { GridModule } from "@progress/kendo-angular-grid";
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

@NgModule({
  exports: [ButtonsModule, ChartsModule, GridModule, PDFExportModule]
})
export class KendoComponentsModule {}
