import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

//Asko Mikkola 1600397
export interface PageInterface {
  title: string;
  pageName: String;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [    
    {title: 'Personal Profile', pageName: 'TabsPage', tabComponent: 'CVPage',               index:0, icon: 'briefcase'},
    {title: 'Team Project',     pageName: 'TabsPage', tabComponent: 'ProjectWorkPage',      index:1, icon: 'flask'},
    {title: 'Contact',          pageName: 'TabsPage', tabComponent: 'ContactsPage',         index:2, icon: 'mail'},
    {title: 'Personal Project', pageName: 'TabsPage', tabComponent: 'AboutPage',            index:3, icon: 'home'},
    {title: 'Extra Curriculum', pageName: 'TabsPage', tabComponent: 'ExtraCurriculumPage',  index:4, icon: 'person'},
//    {title: 'Soft Skills',      pageName: 'TabsPage', tabComponent: 'SoftskillsPage',       index: 5},
//    {title: 'Technical Skills', pageName: 'TabsPage', tabComponent: 'TechnicalskillsPage',  index: 6},     
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
  }

  isActive(page: PageInterface) {

  }
}
