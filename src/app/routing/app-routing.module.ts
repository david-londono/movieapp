import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', 
        loadChildren: () =>  import('../pages/home-page/home-page.module').then(m => m.HomeModule),
        data: {animation: 'HomePage'}
    },
    { path: 'home/:movie', 
        loadChildren: () =>  import('../pages/home-page/home-page.module').then(m => m.HomeModule),
        data: {animation: 'HomePage'}
    },
    { path: 'fav', 
        loadChildren: () =>  import('../pages/fav-page/fav-page.module').then(m => m.FavModule),
        data: {animation: 'fav'}
    },
    { path: 'overview/:movieName/:movieId', 
        loadChildren: () =>  import('../pages/overview-page/overview-page.module').then(m => m.OverviewModule),
        data: {animation: 'OverviewPage'}
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
