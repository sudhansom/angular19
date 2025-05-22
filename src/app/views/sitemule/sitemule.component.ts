import { Component, OnInit, signal } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { FeatureComponent } from '../../components/feature/feature.component';

interface Feature {
  title: string,
  description: string,
}

@Component({
  selector: 'app-sitemule',
  imports: [ContainerComponent, FeatureComponent],
  templateUrl: './sitemule.component.html',
  styleUrl: './sitemule.component.scss'
})
export class SitemuleComponent implements OnInit {
  mylists = signal<Feature[]>([]);

  ngOnInit() {
      this.mylists.set([
        {
          title: 'Community Edition1',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition2',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition3',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition4',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition5',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition6',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition7',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition8',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition9',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition10',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition11',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition12',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition13',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
        {
          title: 'Community Edition14',
          description: 'IceBreak Community is for developers who want to build and deploy Web applications using RPG and COBOL, and other technologies like SQL, XHTML, XML and AJAX.'
        },
      ])
  }
}
