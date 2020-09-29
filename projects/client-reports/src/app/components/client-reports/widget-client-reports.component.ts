import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientReportsService } from '../../services/client-reports.service';
import { IReportListModel } from './IReportListModel';




@Component({
  selector: 'app-widget-client-reports',
  templateUrl: './widget-client-reports.component.html',
  styleUrls: ['./widget-client-reports.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})


export class WidgetClientReportsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['actions', 'batchExecution.reportVersion', 'batchExecution.batchPeriodStartDate', 'batchExecution.batchPeriodEndDate'];
  dataSource: MatTableDataSource<IReportListModel>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  startDate = new Date();


  endDate = new Date();

  constructor(private formBuilder: FormBuilder, private clientReportsService: ClientReportsService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.startDate.setDate(this.startDate.getDate() - 90);
    this.getUserReportRecords();
  }


  startDateSelectedChanged($event) {
    this.getUserReportRecords();
  }

  endDateSelectedChanged($event) {
    this.getUserReportRecords();
  }

  getUserReportRecords() {

    this.clientReportsService.getUserReportRecords(this.startDate.toDateString(), this.endDate.toDateString()).subscribe((response) => {
      response = response.sort(function (a, b) {
        return b.batchExecutionId - a.batchExecutionId;
      });
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
    });

  }


  downloadReport(reportExecutionId) {
    this.clientReportsService.getUserReportDocumentByReportExecutionId(reportExecutionId).subscribe((response) => {
      if (response) {
        let file = new Blob([response.body]);
        let fileName = 'Report.pdf';

        const contentDisposition = response.headers.get('Content-Disposition');
        if (contentDisposition) {
          const fileNameRegex = new RegExp(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
          const matches = fileNameRegex.exec(contentDisposition);
          if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, '');
          }
        }

        let fileURL = URL.createObjectURL(file);
        let link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        link.click();
      }
    });
  }


  downloadAllClientReportsAsZip() {

    this.clientReportsService.getUserReportDocumentsAsZip(this.startDate.toDateString(), this.endDate.toDateString()).subscribe((response) => {
      if (response) {
        let file = new Blob([response.body]);
        let fileName = 'Reports.zip';

        const contentDisposition = response.headers.get('Content-Disposition');
        if (contentDisposition) {
          const fileNameRegex = new RegExp(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
          const matches = fileNameRegex.exec(contentDisposition);
          if (matches != null && matches[1]) {
            fileName = matches[1].replace(/['"]/g, '');
          }
        }

        let fileURL = URL.createObjectURL(file);
        let link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        link.click();
      }
    });
  }


}
