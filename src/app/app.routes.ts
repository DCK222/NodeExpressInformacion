import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NodeComponent } from './node/node.component';
import { ExpressComponent } from './express/express.component';

export const routes: Routes = [
    {
        path: '',title: 'Home Page' , component :  BodyComponent,
    },
    {
        path: 'node',title: 'node' , component :  NodeComponent,
    },
    {
        path: 'express',title: 'express' , component :  ExpressComponent,
    },
];
